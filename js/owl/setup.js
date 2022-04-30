$(".owl-carousel").owlCarousel({
  center: true,
  loop: true,
  autoplay:true,
  autoplayTimeout:1500,
  autoplayHoverPause:true,
  margin:6,
  nav: true,
  responsive: {
    0:{
      items:3,
      nav:false,
      loop:true
  },
  600:{
      items:5,
      nav:false,
      loop:true
  },
  1000:{
      items:6,
      nav:false,
      loop:true
    },
  },
});

$(".owl-carousel1").owlCarousel({
  center: true,
  loop: false,
  autoplay:true,
  autoplayTimeout:5000,
  autoplayHoverPause:true,
  margin:6,
  nav: true,
  responsive: {
    0:{
      items:1,
      nav:false,
      loop:true
  },
  600:{
      items:3,
      nav:false,
      loop:true
  },
  1000:{
      items:4,
      nav:false,
      loop:true
    },
  },
});


