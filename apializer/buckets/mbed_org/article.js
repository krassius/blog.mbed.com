name = "mbed-org-article"

matches = function($, location) {
  return location.hostname === 'developer.mbed.org' &&
    $('.blog-container').length === 1 &&
    $('.pagination .pages').children().length === 0;
}

extract = {
  originalUrl: function($, location) {
    return location + '';
  },
  title: function($) {
    return $('.blog-container h2').text()
  },
  author: function($) {
    return $('.content-info .authortext').text()
  },
  date: function($) {
    return new Date($('.timeago').attr('title'));
  },
  tags: function($) {
    return $('.content-info a').filter(function(ix, el) {
      return $(el).attr('href').indexOf('/search') === 0;
    }).map(function(ix, el) {
      return $(el).text()
    })
  },
  body: function($, location) {
    var title = ('' + location).split('/').filter(f=>!!f);
    title = title[title.length - 1].toLowerCase();

    $('.blog-body img').each(function(ix, el) {
      var $el = $(el);
      var s;

      if (/\.(png|jpg|jpeg)$/.test($(el).attr('title'))) {
        s = $el.attr('title')
      }
      else {
        s = $el.attr('src');
      }
      if (s.indexOf('/') === 0) {
        s = 'https://developer.mbed.org' + s;
      }

      $el.removeAttr('pagespeed_url_hash');
      $el.removeAttr('onload');
      $el.attr('src', s);
    });

    return $('.blog-body').html()
  },
  allImages: function($, location) {
    var title = ('' + location).split('/').filter(f=>!!f);
    title = title[title.length - 1].toLowerCase();

    return $('.blog-body img').map(function(ix, el) {
      return $(el).attr('src');
    });
  }
}
