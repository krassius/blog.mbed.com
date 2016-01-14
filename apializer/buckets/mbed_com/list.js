name = "mbed-com-list"

matches = function($, location) {
  return location.hostname === 'blog.mbed.com' &&
    $('.post').length > 0;
}

extract = {
  posts: function($) {
    return $('.post').map(function(ix, el) {
      return {
        title: $(el).find('h2').text(),
        link: $(el).find('h2 a').attr('href')
      }
    });
  }
}
