
 let navber= document.querySelector("nav");
 let top_up= document.querySelector(".top_up");

 window.addEventListener("scroll", function(){
   let scroll_valu=window.scrollY;
   if (scroll_valu > 120) {
     navber.classList.add("nav_stiky");
      top_up.classList.add("top_up_show");
  
   } else {
     navber.classList.remove("nav_stiky");
     top_up.classList.remove("top_up_show");
   }
 })


$(function(){
    // BANNER SLIDER PART START 
    
    // BANNER SLIDER PART END

    // CLIENT PART START 
    $('.single-block-text').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.single-block-media'
    });
    $('.single-block-media').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      asNavFor: '.single-block-text',
      dots: false,
      centerMode: true,
      focusOnSelect: true,
      centerPadding: '0px',
      arrows: false,
      autoplay: true,
      autoplaySpeed: 1000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
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
    // CLIENT PART END 


    // APP SLIDER PART START 
      $('.app_slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots:true,
        arrows:false,
        focusOnSelect:true,
        centerMode: true,
        centerPadding: '0px',
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
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
    // APP SLIDER PART END 
})