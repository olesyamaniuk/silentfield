$(function () {
  $(".i-m-why-list").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 1000,
    dots: false,
    centerMode: true,
    cssEase: "linear",
    prevArrow: ".i-m-why-list-left",
    nextArrow: ".i-m-why-list-right",
  });
});
