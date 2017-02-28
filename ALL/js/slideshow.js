var screennum = 0;
function next(){
  if (screennum<everything.length-1){
    console.log(screennum)


      screennum ++
  if (screennum == 0){
    $('.loop').show()
  } else {
    $('.loop').hide()
  }

  $('.title').text('Screen '+ everything[screennum].num+ ' ➖ ' +everything[screennum].title)
  $('.main').css("background-image", "url("+everything[screennum].image+")");
}
}

function back(){
    if (screennum>0){
    screennum --
  if (screennum == 0){
    $('.loop').show()
  } else {
    $('.loop').hide()
  }

  $('.title').text('Screen '+ everything[screennum].num+ ' ➖ ' +everything[screennum].title)
  $('.main').css("background-image", "url("+everything[screennum].image+")");
}
}

var everything = [

  {
    "num": 0,
    "title": "LOOPING INTRO, 'User' and 'Advertiser' buttons react on hover",
    "image": "images/a1.mp4"
  },
  {
    "num": 1,
    "title": "Person has clicked 'User' so they are prompted to type something",
    "image": "images/a2.png"
  },
  {
    "num": 2,
    "title": "They type 'shoes' and click the search button",
    "image": "images/a3.png"
  },
  {
    "num": 3,
    "title": "TRANSITION SCREEN - 3 things animate out of the search box. Search box morphs into a full page",
    "image": "images/a4.png"
  },
  {
    "num": 4,
    "title": "Animation finishes. 1 second delay and 'PLAY' button appears, giving user a chance to read what is happening before clicking through",
    "image": "images/a5.png"
  },
  // {
  //   "num": 5,
  //   "title": "User prompted to hit play again (Play has a rollover state to help guide user)",
  //   "image": "images/a6.png"
  // },
  {
    "num": 5,
    "title": "TRANSITION- Results heading towards the page. Page flips",
    "image": "images/a6.png"
  },
  {
    "num": 6,
    "title": "Page done flipping. User prompted to hit PLAY again",
    "image": "images/a7.png"
  },
  {
    "num": 7,
    "title": "TRANSITION- Action lines! Auction participants shuffling and their bid is revealed",
    "image": "images/a8.png"
  },
  {
    "num": 8,
    "title": "TRANSITION- A winner is chosen",
    "image": "images/a9.png"
  },
  {
    "num": 9,
    "title": "TRANSITION- Ad is moving left towards the page",
    "image": "images/a10.png"
  },
  {
    "num": 10,
    "title": "FINAL SCREEN",
    "image": "images/a11.png"
  },

];


$('.title').text('Screen '+ everything[screennum].num+ ' ➖ '+ everything[screennum].title)
$('.main').css("background-image", "url("+everything[screennum].image+")");

</script>
