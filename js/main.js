$(function () {
    $('.carousel__inner').slick({
        arrows: false,
        dots: true,
        slidesToShow: 3,
        responsive: [
          {
            breakpoint: 900,
            settings: {
                slidesToShow: 2,
              
            }
          },
          {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                autoplay: true,
                infinite: true,
                dots: false,
            }
          },
         
          
        ]
    });
});