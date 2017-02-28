// console.log(everything)


//create Nav
everything.forEach(function(i,num){
  d = document.createElement('div');

  $(d).addClass("dot "+ num)
  .appendTo($('.footer'))
  .click(clickNav)
  $('.footer').append(d)

})



//create variables
const checkboxes = document.querySelectorAll('.dot');
var currentSlide = 0;
var fill = true;
var  _text = ''
var imagePrepend = "images/"
startPage();





function clickNav(){
  var currentSlide = this.classList[1]

  checkboxes.forEach(checkbox => {
  if (fill){
    $(checkbox).css('background-color',variables["red-B"])
    if (checkbox === this) {
      $(this).css('background-color',variables["red-B"])
      fill = false;
    }

  } else {
    $(checkbox).css('background-color','rgba(0,0,0,0)')
  }

});

  $(this).css('background-color',variables["red-B"])
  buildSlideContent(currentSlide)
  fill = true;
}



function buildSlideContent(currentSlide){

  resetAllSlides()
  //make top header
  $('.top-header').text(everything[currentSlide].topheader)
  //make title
  $.makeArray(everything[currentSlide].title).forEach(function(e){
    // console.log(e)
    $('.title').append(e)
    $('.title').append("<br><br>")

  })

  if (everything[currentSlide].title !== ""){
    $('.title').css("border"," 4px black solid");

  } else {
      $('.title').css("border","transparent");
  }
  //check descriptor
  checkDescriptor(everything[currentSlide].descriptor, currentSlide);


  //make bullets
  if (everything[currentSlide].bullets !== ""){
      $.makeArray(everything[currentSlide].bullets).forEach(function(i,num){
        var bullet = document.createElement('p')
        $(bullet).text(i)
        $('#bullets').append(i)
        $('#bullets').append("<br><br>")

        _text = $("#strike-through").text();
        // console.log(_text)
         StrikeThrough(0);
      });
    }

  //make images
  if (everything[currentSlide].image !== ""){

      $.makeArray(everything[currentSlide].image).forEach(function(i,num){
          var tempImage = document.createElement('div')
          var name =  "images"+num
          tempImage.id = everything[currentSlide].imageId
          $(tempImage).css("background-image","url("+imagePrepend+i+")")
          $('.image-holder').append(tempImage)
      });

        $('#ven').click(function(){
          $(this).css('background-image', "url("+imagePrepend+"venafter.gif)")
        })
  } else {
      $('.images').attr("src","")
  }


  if (everything[currentSlide].quote !== ""){
    var quoteTemp = document.createElement('p')
    quoteTemp.id = "quoteTemp"
    $(quoteTemp).text(everything[currentSlide].quote)
    $( quoteTemp).insertBefore( ".gallery_container" );

  }



  if (everything[currentSlide].imageGallery !== ""){

      $.makeArray(everything[currentSlide].imageGallery).forEach(function(i,num){
          var tempDiv = document.createElement('div')
          var tempImage = document.createElement('img')
          tempDiv.classList = "gallery_item"
          $(tempDiv).append(tempImage)
          tempDiv.id = everything[currentSlide].imageId+num
          $(tempImage).attr("src",imagePrepend+i)
          $('.gallery_container').append(tempDiv)
          $('.gallery_container').append(tempDiv)
      });

    } else {
        $('.gallery_container').empty();
    }



      if (everything[currentSlide].buttons !== ""){

          $.makeArray(everything[currentSlide].buttons).forEach(function(i,num){
              var tempDiv = document.createElement('div')
              console.log("'#"+everything[currentSlide].imageId+num+"'")
              // var tempImage = document.createElement('img')
              tempDiv.classList = "button_item"
              // $(tempDiv).append(tempImage)
              tempDiv.id = everything[currentSlide].imageId+num
              $(tempDiv).text(i)
              $('.buttons_container').append(tempDiv)


          });

          // $('#sparkle0').sparkleHover({
          //         colors : [variables["red-shade-drk"], variables["tan-shade-drk2"],variables["pink"]],
          //         num_sprites: 22,
          //         lifespan: 3000,
          //         radius: 1200,
          //         sprite_size: 10,
          //         shape: 'circle',
          //   });
          //
          //   $('#sparkle1').sparkleHover({
          //           colors : [variables["red-shade-drk"], variables["tan-shade-drk2"],variables["pink"]],
          //           num_sprites: 22,
          //           lifespan: 1000,
          //           radius: 1200,
          //           sprite_size: 10,
          //           shape: 'circle',
          //     });
          //
          //     $('#sparkle2').sparkleHover({
          //             colors : [variables["red-shade-drk"], variables["tan-shade-drk2"],variables["pink"]],
          //             num_sprites: 42,
          //             lifespan: 2000,
          //             radius: 2200,
          //             sprite_size: 10,
          //             shape: 'circle',
          //       });

        } else {
            $('.buttons_container').empty();
        }


    if (everything[currentSlide].iframe !== ""){
        $('.iframe-holder').css('z-index',"300")
          $('<iframe>', {
         src: everything[currentSlide].iframe,
         id:  'myFrame',
         frameborder: "no",
         scrolling: 'yes'
          }).appendTo('.iframe-holder');
    }


}


function startPage(){
  buildSlideContent(0);
  $(checkboxes[0]).css('background-color',variables["red-B"])
}



function StrikeThrough(index) {
    if (index >= _text.length)
        return false;
    var sToStrike = _text.substr(0, index + 1);
    var sAfter = (index < (_text.length - 1)) ? _text.substr(index + 1, _text.length - index) : "";
    $("#strike-through").html("<strike>" + sToStrike + "</strike>" + sAfter);
    window.setTimeout(function() {
        StrikeThrough(index + 1);
    }, 100);
}





$( '.circle').on( "mouseenter", function() {

  $('.circle-stroke:first').addClass('circle-animate')
    $('.circle-stroke:nth-child(2)').addClass('circle-animate2')

})
$( '.circle').on( "mouseleave", function() {
  $('.circle-stroke:first').removeClass('circle-animate')
    $('.circle-stroke:nth-child(2)').removeClass('circle-animate2')

})

// $( '.circle').click(Start)
function resetAllSlides(){
    $('#bg').css('opacity','0');
    $('.title').text('')
    $('#quoteTemp').remove();
    $('.gallery_container').empty();
    $('#call-image').remove();
    $('.iframe-holder').css('z-index','-300')
    $('.image-holder').empty()
    $('.iframe-holder').empty()
    $('#bullets').empty();
    $('.buttons_container').empty();
    $("#q1-parent").css('opacity', '0').css('transform', 'scale(0)').css('position', 'absolute')
}


// function Start(){
//   // $('.circle').css('transform','scale(.4)');
//   setTimeout(function(){$('#q1-parent').fadeOut(1000)},000)
// }





///////////////////////////
//////////////////////////

function checkDescriptor(descriptor, currentSlide){

    if (descriptor == "wild"){
      $('.title').innerHTML = everything[currentSlide].title
       _text = $("#strike-through").text();
        StrikeThrough(0);

    } else if (descriptor == "why"){

      // var  p1, p2, p3, p4,
      // dots1 = dots.circle(650, 750, 200).attr({
      //   fill: p1 = polka(stroke, 20, 2)
      // });
      // $('svg').appendTo('.dot-holder')

      // $('.bull').innerHTML = everything[currentSlide].title
      //  _text = $("#strike-through").text();
      //  console.log(_text)
      //   StrikeThrough(0);

    }
    else if (descriptor == "question"){

        $("#q1-parent").css('position', 'relative').css('transform', 'scale(1)').css('opacity', '1')

    }  else if (descriptor == "call"){

            var callBefore = document.createElement('img')
            callBefore.id = "call-image"
            $(callBefore).attr('src', "images/callbefore.png").appendTo('.main').css({
              "width": "100%",
              "position": "absolute",
              "top": "100px",
            })


    } else if (descriptor == "call-solution"){


    } else if (descriptor == "gage"){



    } else if (descriptor == 'thanks'){
          $('#bg').css('opacity','.1');
    }

}




// $('button.add_gallery_item').click(function(x) {
//   x.preventDefault();
//   var randHeight = getRandomInt(100, 300);
//   var randWidth = getRandomInt(100, 300);
//   // not very clean, but it's enough for this example
//   $( '<div class="gallery_item"><img src="http://lorempixel.com/'+randWidth+'/'+randHeight+'" alt="" />' ).prependTo( ".gallery_container" );
// });
