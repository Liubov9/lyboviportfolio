///====HEADER SCROOL - LINK-ACTIVE======================================//
  $(document).ready(function(){
  
    $(window).scroll(function(){
        var currentActive = 0;
        $('.scrool-active').each(function(){
            console.log(11);
          if($(this).offset().top < $(window).scrollTop() + 60){
            currentActive = $(this).attr('id');
            $('.header__link_burger').removeClass('header__link_burger');
            $('.header__link_active').removeClass('header__link_active');
            $('.hamburger-menu [href='+'"#'+currentActive+'"]').addClass('header__link_burger');
            $('.header__menu [href='+'"#'+currentActive+'"]').addClass('header__link_active');
          }else{
            currentActive = $(this).attr('id');
            $('[href='+'"#'+currentActive+'"]').removeClass('header__link_burger');
            $('[href='+'"#'+currentActive+'"]').removeClass('header__link_active');
          }
      
        })
      
      }) 
   


    window.onscroll = function() {myFunction()};
    var navbar = document.getElementById("navbar");
    var sticky = navbar.offsetTop;
    function myFunction() {
    if (window.pageYOffset >60) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
    }
  

  })