$(function () {
    $('#slidek').on('init reInit',function(event,slick){
        var amount = slick.slideCount;
        $('#range').attr('max',amount);
      })
      
      $('#slidek').on('afterChange',function(e,slick,currentSlide){
        $('#range').val(currentSlide+1);
      })
      
      $('#range').on('input change',function(){
        $('#slidek').slick('slickGoTo',this.value-1);
      });
 
    $('.slidek').slick({
      infinite: true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      variableWidth: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }

      ]
    });
  
    var slider = $('.slidek');
	$('.sl-count__total').text("0" + slider.slick("getSlick").slideCount);
	$(".slidek").on('afterChange', function(event, slick, currentSlide){
	     $(".sl-count__current").text("0" + (currentSlide + 1));
	});

})


$(function () {
  $('#sliden').on('init reInit',function(event,slick){
    var amountn = slick.slideCount;
    $('#rangen').attr('max',amountn);
  })
  
  $('#sliden').on('afterChange',function(e,slick,currentSlide){
    $('#rangen').val(currentSlide+1);
  })
  
  $('#rangen').on('input change',function(){
    $('#sliden').slick('slickGoTo',this.value-1);
  });
  $('.slidev').slick({
    infinite: true,
    speed: 0,
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
centerMode: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          infinite: true,
          centerMode: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }

    ]
  });

  $('.sliden').slick({
    infinite: true,
    speed: 0,
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
centerMode: false,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          infinite: true,
          centerMode: false,
          slidesToShow: 3,
          slidesToScroll: 1,
          
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }

    ]
  });
})

$(function() {
  $(".gamb").click(function() {
      $(".menuinv").toggleClass("invisible");        
  })
});

