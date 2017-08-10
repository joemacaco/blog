var $window = $(window);
var $totop = $('div.totop');
var $sidebar = $('div.sidebar');
$window.scroll(function() {
  var $progressContainer = $('.progress-bar-container');
  var winTop = $window.scrollTop();
  if (typeof $progressContainer[0] !== "undefined") {
    var $article = $('div.post > article');
    var $progress = $('.progress-bar');
    var articleTop = $article.offset().top;
    var articleHeight = $article.height();
    var winHeight = $window.height();
    var totalScroll = ((winTop - articleTop - 8) / (articleHeight - (winHeight - 8))) * 100;
    totalScroll = totalScroll > 100 ? 100 : ((totalScroll < 0) ? 0 : totalScroll);
    $progress.css('width',totalScroll + '%');
    if (winTop < articleTop || winHeight > articleHeight) {
      $progressContainer.css('opacity', 0);
    } else {
      $progressContainer.css('opacity', 1);
    }
    if (winTop < 150) {
      $sidebar.css({'top': '150px', 'position': 'absolute'});
    } else {
      $sidebar.css({'top': '10px', 'position': 'fixed'});
    }
  }
  if (winTop > 300) {
    $totop.fadeIn(400);
  } else {
    $totop.fadeOut(400);
  }
});

$totop.on('click', function(event) {
  event.preventDefault();
  $('html, body').animate({scrollTop: 0}, 'slow');
});