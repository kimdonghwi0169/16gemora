$('.gnb > li').offset().left




$('.gnb > li').mouseenter(function(){
  let liposi = $(this).offset().left
  let liw = $(this).width()/2;
 
  $('nav .g').css({left:liposi + liw,opacity: 1})   
 

})

$('.gnb > li').mouseleave(function(){
    $('nav .g').css({opacity:0})
})


$('.gnb li').mouseenter(function(){
    $(this).find('.lnb_box').fadeIn().css({display:'flex'})


})

$('.gnb >li').mouseleave(function(){

    $('.lnb_box').fadeOut()




})


