$(function() {

  $('.user-button').click(UserClicked);
  $('.search-box-button').click(searchClicked);
  $('#formID').focus()
  console.log($('#formID').value)

  function UserClicked(){
    $('.scene1').css('opacity','0')
    $("#paths").css("opacity","0")
    $(".scene2").css("opacity","1")
    $(".scene2").css("pointer-events","all")

    $('#google-button').removeClass('inactive-button',2000);
    $('.advertiser-button').removeClass('red-button',2000);
      $(this).removeClass('red-button',5000);

      $('#user-num').css('opacity','1');
      $('#user-num').css('display','block');


    TweenMax.to(this, 1, {
      x: "-15%",
      top: "-100px",
      left: '-10%',
    "font-size": variables.med_sm_font,
    color:variables.black,delay: 0,ease:  Power1.easeInOut});

    TweenMax.to($('#google-button'),1,{
      x: '15%',
      'top': "-100px",
      "font-size": variables.med_sm_font,
      color:variables.tan_B,delay: 0,ease:  Power1.easeInOut});

      TweenMax.to($('.advertiser-button'),1,{
        'top': "-100px",
        x: "60%",
        "font-size": variables.med_sm_font,
        color:variables.tan_B,delay: 0,ease:  Power1.easeInOut});

    //fadeOut google and advertisers
    //fade on  1 circle and 2 circle and words
    setTimeout(function(){
        $('.search-box').css('opacity','1')
    },1200)



  }


  function searchClicked(){
    console.log($('input').value)
  console.log($('#theFormID').value)
    console.log($('#formID').value)
    //expand search box to wider
    $('.search-box-button').css("opacity","0");
    $('#waiting-text').css("display","block");
    $('.scene3').css("opacity","1");
    $('#theFormID').css('display','none');
    $(".scene3").css("pointer-events","all")
    // $(".search-box").addClass('waiting-page');
    $('.search-box-button').css('opacity','0');
    $('#paths-two').css('opacity','1')
    $('#waiting-text').css("opacity","1");

    TweenMax.to($('.search-box'),1,{
      'top': "-100px",
      x: "6%",
      y: '-100px',
      width: '280px',
      height: '300px',
      // "font-size": variables.med_sm_font,
      ease:  Power1.easeInOut});

      TweenMax.to($('.from-user-button'),2,{
        delay: 0,
        'left': "230px",
        ease:  Power1.easeInOut
      })

      TweenMax.to($('.from-user-button')[0],1,{
        delay: .5,
        x: "42%",
        ease:  Power1.easeInOut
      })
      TweenMax.to($('.from-user-button')[1],1,{
        delay: 1,
        x: "42%",
        ease:  Power1.easeInOut
      })

      TweenMax.to($('.from-user-button')[2],1,{
        delay: 1.5,
        x: "42%",
        ease:  Power1.easeInOut
      })

      TweenMax.to($('.user-button'), 1, {
        top: "-90px",
        ease:  Power1.easeInOut});



  }

  // var bezierData = MorphSVGPlugin.pathDataToBezier("#anim_path");
  // TweenMax.to("circle", 2, {bezier: {values:bezierData, type:"cubic"}, ease:Linear.easeNone, repeat:-1, yoyo:true});


  // var shapes = $("#paths"),
  //         tl = new TimelineMax({repeat:1, yoyo:true});
  //
  // tl.staggerFromTo(shapes, 1, {drawSVG:"100%"}, {drawSVG:"50% 50%"}, 0.1)
  //   .fromTo(shapes, 0.1, {drawSVG:"0%"}, {drawSVG:"10%", immediateRender:false}, "+=0.1")
  //   .staggerTo(shapes, 1, {drawSVG:"90% 100%"}, 0.5)
  //   .to(shapes, 1, {drawSVG:"100%", stroke:"white", strokeWidth:26, transformOrigin:"50% 50%"})
  //   .staggerTo(shapes, 0.5, {stroke:"red", scale:1.5, opacity:0}, 0.2)





//jQuery loaded and was ready
});
