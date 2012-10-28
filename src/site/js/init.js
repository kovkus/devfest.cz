$(document).ready(function(){
  //auto rotating tabs
	setInterval(function() {
    var tabs = $('#nav-tabs .nav-tabs > li'),
        active = tabs.filter('.active'),
        next = active.next('li'),
        toClick = next.length ? next.find('a') : tabs.eq(0).find('a');

    toClick.trigger('click');
  }, 15000);

  //text "Vas e-mail" for input in IEs, they does not support HTML5 placeholder attribute
  if ($.browser.msie && $.browser.version <= 9) {
    var formText = 'Váš e-mail';

    $('.register form .text').val(formText);

    $('.register form .text').click(function(){
        if($(this).val() == formText) {
            $(this).val('');
        }
    });

    $('.register form .text').blur(function(){
        if($(this).val() == '') {
            $('.register form .text').val(formText);
        }
    });
  }

  /* Countdown */
  if ($('.homepage #countdown').size() > 0) {
    $('#countdown').countdown(new Date("November 10, 2012 08:30:00"), function(event) {
      var $this = $(this);
      switch(event.type) {
        case "seconds":
        case "minutes":
        case "hours":
        case "days":
          $this.find('span#'+event.type).html(event.value);
          break;
        case "finished":
          $this.hide();
          break;
      }
    });
  }    

  /* Carousel */
  if ($('.homepage #carousel-main').size() > 0) {
    $("#carousel-main").carousel({ 
      loop: true,
      autoSlide: true,
      autoSlideInterval: 5000
    });
  }

  $('.forkit-curtain').show();

  if ($('.homepage #lifestream').size() > 0) {
    $("#lifestream").lifestream({
      list:[
        {
          service: "facebook_page",
          user: "156528027719650",
          template: {
            wall_post: '<a href="${link}">${title}</a><i class="icon-facebook pull-right"></i>'
          }
        },
        {
          service: "twitter",
          user: "gughackathon",
          template: {
            posted: '{{html tweet}}<i class="icon-twitter pull-right"></i>'
          }
        }
      ]
    });
  }
});