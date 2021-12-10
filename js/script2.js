$(window).on('scroll', function () {
    var a = $(document).scrollTop()*.2;
    var b = a/900;
    $("body").css({'background':'rgba(760,140,'+(a)+','+b+')'  })     
  console.log(a);
  console.log(b);
});