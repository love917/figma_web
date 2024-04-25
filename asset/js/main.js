$(document).ready(function(){
    $('.product_list').slick({
      arrows:false,//화살표 사라지게 함
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 2,
      autoplay:true
    });
  });

  $(document).ready(function(){
    $('.shop_Categories').slick({
      arrows:false,//화살표 사라지게 함
      dots:true,
      autoplay:true
    });
  });


  $('.single_Product').slick({
    arrows:false,//화살표 사라지게 함
    dots:true,
    //autoplay:true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1
  });