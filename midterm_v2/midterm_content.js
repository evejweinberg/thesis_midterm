
var screennum = 0;
console.log('midterm content created')


var everything = [

  {
    "iframe": "",
    "topheader": "",
    "title": "I'm Eve Weinberg",
    "image": "hi2.png",
    "imageId": "me"
  },
  {
    "iframe": "",
    "topheader": "",
    "title": "",
    // "title": ["When can motion graphics make UX more persuasive?" , "When can UX make motion graphics more effective?"],
    "image": "",
    "folder": "",
    "imageId": "",
    "descriptor": "question"
  },
  {

    "title": "",
    "topheader": "",
    "image": "venbefore.png",
    "imageId": "ven",
    "iframe": "",
    "descriptor": "ven"
  },
  // {
  //   "topheader": "",
  //   "title": "Captology <span id='strike-through'>in the wild</span> on the web",
  //   "image": "",
  //   "imageId": "",
  //   "descriptor": "wild"
  // },

  {

    "topheader": "",
    "title": "Why",
    "bullets": ["Recent Election: Cambridge Analytica <span id='strike-through'>#DeleteFacebook</span> Make Tools", "Dark Patterns are not going away"],
    "image": "",
    "iframe": "",
    "imageId": "",
    "quote": "'In the UK the Behavioral Insights Team was able to persuade about 100,000 more people a year to donate their organs by tweaking a message people received when renewing their car tax.''",
    "descriptor": "why"
  },
  {

    "topheader": "Chunking",
    "image": "",
    "title": "",
    "iframe": '',
    "imageId": "call",
    "descriptor": "call"
  },

  {
    "topheader": "",
    "image": "",
    "title": "",
    "iframe": 'https://evejweinberg.github.io/thesis_midterm/call/solution02/',
    "imageId": "callsolution",
    "descriptor": "call-solution"
  },

  // {
  //   "num": 5,
  //   "topheader": "Heuristics",
  //   "image": ["h1.gif", "h2.png","h3.png"],
  //   "title": "",
  //   "imageId": "heuristics"
  // },

  // {
  //   "topheader": "",
  //   "image": "",
  //   "title": "Chunking / Simplifying / Making User Feel Effective",
  //   "imageId": "chunking-conclusion",
  //   "descriptor": "chunking-conclusion"
  // },

  {
    "topheader": "Emotions",
    "title": "Emotions - Messaging and UI",
    "bullets":["Fear / Hope / Social Pressure"],
    "image": "",
    "imageGallery": ["buy.png","hope1.png","socialpressure.png","emo4.gif","emo2.gif","emo3.gif","emo1.gif","scarcity.png"],
    "imageId": "emotions"
  },

  {
    "topheader": "FEAR  NYTimes Election Needle",
    "title": "",
    "bullets": "",
    "image": "",
    "imageId": "emotions",
    "iframe": 'https://evejweinberg.github.io/thesis_midterm/gage/',
    "descriptor": "gage"
  },

  {
    "topheader": "JOY - Surprise and Delight",
    "title": "",
    "bullets": "",
    "image": "",
    "imageId": "sparkle",
    "iframe": 'https://evejweinberg.github.io/sparkleHover/index.html',
    "descriptor": "sparkle",
    // "buttons": ["Joy", "Surprise", "Delight"]
  },

  {
    "topheader": "",
    "title": "Explorable Explanations",
    "bullets": "Animations are more effective with interaction",
    "image": "",
    "imageId": "",
    "iframe": '',
    "descriptor": ""
  },
  {
    "topheader": "",
    "title": "",
    "bullets": "",
    "image": "",
    "imageId": "",
    "iframe": 'https://evejweinberg.github.io/thesis_midterm/simulation1/',
    "descriptor": ""
  },
  // {
  //   "num": 7,
  //   "title": "explorable explinations [ onclick confetti ], microinteractions [on click], [drive emotion]",
  //   "image": "",
  //   "imageId": ""
  // },

    {
      "topheader": "Behavioral Model",
      "image": "",
      "imageGallery": ["signup.png", "zillow.png"],
      "title": "BJ Fogg’s Behavioral Model",
      "bullets": ["1) MOTIVATION: 'Why am I doing this?''","2) ABILITY: 'Oh, I CAN do this!'", "3) EMOTION: 'I'm in the mood'", "TRIGGER!"],
      "imageId": "fogg"
    },

  {

    "title": ["Real World Testing with DuckDuckGo"],
    "image": "ddgHome.png",
    "imageId": "ddgHome",
    "descriptor": "ddg"
  },
  // {
  //   "num": 9,
  //   "title": "",
  //   "topheader": "Probable, Plausible, Possible, Impossible ",
  //   "image": "pppp.png",
  //   "imageId": "pppp"
  // },
  {

    "title": "Problem: Retention",
    "topheader": "",
    "bullets": "",
    "quote": "'Bangs have subpar discoverability. Therefore bangs have historically been more of a hidden power-user feature. Bangs are a flexibility that competing search engines don't offer. So, the assumption is that (better) education around bangs will improve retention of new users.''",
    "imageGallery": ["bangB.gif","linkedIn.gif"],
    "image": "",
    "imageId": "bang-problem"
  },

  {

    "title": "Approach",
    "topheader": "",
    "bullets": ["1. Change the name - POW!", "2. Add animation inside product", "3. Use mascot - Guide/Authority", "4. Fogg's Method: trigger in-product'", "5. Microsite"],
    "quote": "",
    "imageGallery": "",
    "image": "bangpage.png",
    "imageId": "banghello"
  },

//   1. Change the name
// 2. Add animation inside product
// 3. Use mascot
// 4. Fogg - already following it
  // {
  //   "num": 11,
  //   "title": "Use DAX",
  //   "topheader": "Plausible",
  //   "image": "dax.gif",
  //   "imageId": "dax"
  // },
  // {
  //   "num": 12,
  //   "title": "!bang education within the product",
  //   "topheader": "Possible",
  //   "image": ["bang1.gif","bang2.gif"],
  //   "imageId": "bang"
  // },
  // {
  //   "num": 13,
  //   "title": "",
  //   "topheader": "Impossible",
  //   "image": ["imp1.gif"],
  //   "imageId": ""
  // },
  {

    "title": "Thanks!",
    "topheader": "",
    "image": "",
    "imageId": "",
    "descriptor": "thanks"
  },

];


// $('.title').text('Screen '+ everything[screennum].num+ ' ➖ '+ everything[screennum].title)
// $('.main').css("background-image", "url("+everything[screennum].image+")");
