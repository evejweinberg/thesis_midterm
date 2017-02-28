// $(document).ready(function(){

const topicBox = document.getElementById('holder-1')
$('.button-1').click(openTwo);
// manually fire radio box change event on page load
$('input[type=radio]').change();
$('#holder-1').bind("click",openOne)
$('.button-2').click(openThree)


///FIRST BOX HOVER STATE AVAILABLE
$('#holder-1').hover(
  function() {
    $( this ).addClass( 'hovering' );
    $('.num-1').css('color','$red');
  }, function() {
    $( this ).removeClass( 'hovering');
    // $( this ).addClass( 'holderselected');
  }
)


///AUDIO
const musicPlaying = true;
const audio = document.getElementById('audio');
const musicAll = [...document.querySelectorAll('.music')];

audio.addEventListener('click', dealWithAudio )

function dealWithAudio(){
    //if any are playing, turn them off and set audio state to paused
    //else if none are playing, pick one randomly from the array and turn
    //it on and set the audio state to playing
  const allPaused = musicAll.every(music => (music.paused));
  console.log(allPaused)
    if (allPaused){
      var newnum = Math.floor(Math.random()*musicAll.length)
      console.log(newnum)
      musicAll[newnum].play()
    } else {
      musicAll.forEach(music => music.pause());
    }

}

function openOne(e){
  $('.header').css('height', '5vh');
  $('#easy').css('font-size', '1.2em');

  //unbind click event - this is not working though
  $('#holder-1').unbind('click', false );
  if ( document.querySelector('#topic').style.opacity == "0"){
    console.log('not gonna run openOne, nice try')
    return;
  }

  //remove hover event listener
  $("#holder-1").off('mouseenter mouseleave');
  $("#holder-1").removeClass('hovering');
  $("#holder-1").addClass( 'holderselected');


  //add hover event listener to next one
  $('#holder-2').hover(
    function() {
      $( this ).addClass( 'hovering' );
    }, function() {
      $( this ).removeClass( 'hovering');
      // $( this ).addClass( 'holderselected');
    }
  )


//bottom social widget
 $('.caller-numbers').css({
   'font-size': '1.5em',
   'bottom': '20px'
 })

  expand('#holder-1');

    $( ".topic-list-holder" ).css( "opacity", "1" );
    // document.querySelector('.topic-list').style.display = 'block';
    $( ".topic-list-holder" ).children().css( "opacity", "1" );


}











  function openTwo(){
//     $('.header').sparkleHover({
//   colors : ['#01A9DB', "#045FB4",'#00BFFF','#DF013A', '#FA5882', "#F6CED8", "#81DAF5"],
//   num_sprites: 132,
//   lifespan: 900,
//   radius: 4900,
//   sprite_size: 10,
//   shape: 'circle',
//
// });
    // $("#holder-2").off('mouseenter mouseleave');
    expand('#holder-2');
    contract('#holder-1');

    $('.section2-pre').show();
    // $(".topic-result").show();
    //would rather not remove them, but WTF;
    $(".topic-list-holder").remove();
    // $(".topic-list").display = 'none';

    //get the radio button that was selected
    $('input[type=radio]').each(function(){
      //one by one. . if it was just checked
      if($(this).prop('checked') == true) {
        console.dir(this.value)
        const result = this.value
        //replace text, not sure how
        $('.topic-result-here').html(String(this.value));
      }
    })


    $(".topic-result").display = "block";
    $(".topic-result").show();
    $('.topic-result-here').show();

  }


  function openThree(){
//     $('.header').sparkleHover({
//   colors : ['#01A9DB', "#045FB4",'#00BFFF','#DF013A', '#FA5882', "#F6CED8", "#81DAF5"],
//   num_sprites: 132,
//   lifespan: 600,
//   radius: 6900,
//   sprite_size: 10,
//   shape: 'circle',
//
// });

    expand('#holder-3');
    contract('#holder-2');
    $('.section3-pre').show();
    $('.section2-pre').hide();
    // $('.section2-post').show();
    $('.section2-post').css('opacity', '1');


  }


function expand(label){
  $(label).addClass('holderselected')
  $(label).off('mouseenter mouseleave');

  if (label == '#holder-3'){
    $(label).css({
      "width" : "130%",
      "height" : "75%",
      "top" : "45%",
      "left" : "0%",
      "margin-left":"-10vw",
      "transform" :" translateY(-50%)",
      "transition": "1s ease-in-out"

    })


  } else {



  $(label).css({
    "width" : "100%",
    "height" : "75%",
    "top" : "45%",
    "left" : "0%",
    "transform" :" translateY(-50%)",
    "transition": "1s ease-in-out"

  })

    }

  $(label + ' > .num').css({
     'top' : "5%",
     'margin-top' : "-70px",
     'position': 'absolute',
     'font-size': '4vh'
   });


  $(label + ' > .chapter').css('opacity', '0');


}

function contract(label){
  $(label).removeClass('holderselected')
  $(label).css({
    "width" : "60%",
    "height" : "30%",
    "top" : "50%",
    "left" : "5%",
    "transform" :" translateY(-50%)",
    "transition": "1s ease-in-out",
    'border': '2px solid black'

  })
}




/////radio for section 1
// set up radio boxes once
$('.radioholder').each(function(){
  $(this).children().hide();
  var description = $(this).children('label').html();
  $(this).append('<span class="desc">'+description+'</span>');
  $(this).prepend('<span class="tick"></span>');
  // on click, update radio boxes accordingly
  $(this).click(function(){
    $(this).children('input').prop('checked', true);
    $(this).children('input').trigger('change');
  });
});


// update radio holder classes when any radio element changes
$('input[type=radio]').change(function(){
  //look through them all
  $('input[type=radio]').each(function(){
    //one by one. . if it was just checked
    if($(this).prop('checked') == true) {
      //add this class
      $(this).parent().addClass('activeradioholder');
    }
    else
      //remove class
      $(this).parent().removeClass('activeradioholder');
  });
});
