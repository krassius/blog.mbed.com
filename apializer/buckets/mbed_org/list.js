name = "mbed-org-list"

matches = function($, location) {
  return location.hostname === 'developer.mbed.org' &&
    $('.blog-container').length > 0 &&
    $('.pagination .pages').children().length > 0;
}

extract = {
  posts: function($) {
    return $('.blog-container').map(function(ix, el) {
      return {
        title: $(el).find('h3').text(),
        link: 'https://developer.mbed.org' + $(el).find('h3 a').attr('href')
      }
    })
  },
  links: function($, location) {
    return $('.pages .paginate-link').map(function(ix, el) {
      return 'https://developer.mbed.org/blog/' + $(el).find('a').attr('href');
    })
  }
}
