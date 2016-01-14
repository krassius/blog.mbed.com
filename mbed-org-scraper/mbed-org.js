var async = require('async');
var request = require('request');
var tidy = require('htmltidy').tidy;

// The URL to your api'alizer instance
var APIALIZER = 'http://localhost:8080/c/mbed_org/';

var alreadyHandled = [];
var articles = 0;

var q = async.queue(function(url, next) {
  if (alreadyHandled.indexOf(url) !== -1) {
    return next();
  }

  alreadyHandled.push(url);

  // console.log('Handling', url);

  // Make the request to api'alizer
  request.get(APIALIZER + '?url=' + encodeURIComponent(url), function(err, res, body) {
    // Check the err variable and res.statusCode here

    // We'll get a JSON response so parse the body
    try {
      body = JSON.parse(body.toString('utf8'));
    }
    catch (ex) {
      console.error('Failed to parse', url, body);
      throw ex;
    }
    // On the results page push all the links to post to the queue (+ prev page)
    if (res.headers['scrapey-handler'] === 'mbed-org-list') {

      // put post links in the queue
      body.posts.forEach(function(post) {
        if (alreadyHandled.indexOf(post.link) === -1) {
          q.push(post.link);
        }
      });

      // don't do same page twice (pagination links)
      body.links.forEach(function(l) {
        if (alreadyHandled.indexOf(l) === -1) {
          q.push(l);
        }
      });
      next();
    }
    else if (res.headers['scrapey-handler'] === 'mbed-org-article') {
      articles++;
      if (articles % 10 === 0) {
        console.log('Logged ' + articles + ' articles');
        // throw 1;
      }

      // We now have detail page, let's do something with it...
      tidy(body.body, {
        // outputHtml: false,
        showBodyOnly: true,
        indent: true
      }, function(err, pretty) {
        if (err) throw err;

        var md = `---
layout:         post-mbed-org
title:          "${body.title}"
date:           ${body.date}
author:         ${body.author}
tags:           ${body.tags.join(', ')}
originalUrl:    ${body.originalUrl}
---

${pretty}
`;

        function pad(d) { return d < 10 ? '0' + d : d }
        var d = new Date(body.date);
        var pd = '' + d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate());
        var parts = body.originalUrl.split('/').filter(f=>!!f);

        var title = (parts[parts.length - 1].toLowerCase());
        if (!isNaN(title)) {
          title = body.title.toLowerCase().replace(/[^\w-]/g, '-').replace(/[ -]+/g, '-');
          title = title.replace(/-$/, '');
        }

        var fullName = pd + '-' + title + '.md';

        require('fs').writeFile(__dirname + '/posts/' + fullName, md, 'utf-8', function(err) {
          if (err) {
            console.error('Write', url, 'failed', err);
            throw err;
          }

          next();
        });
      });
    }
  });
}, 4); // 4 requests simultaneous

// Initial URL that we'll start scraping
q.push('https://developer.mbed.org/blog/?page=1');
