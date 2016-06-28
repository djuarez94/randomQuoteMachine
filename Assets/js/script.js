$(document).ready(function() {

  var randomQuote = '';
  var randomAuthor = '';
  
  
  
  $('#nextQuote').on("click", function() {
    nextRandomQuote();
  });
  
  function nextRandomQuote () {
    var output = $.ajax({
      url: 'https://andruxnet-random-famous-quotes.p.mashape.com/cat=famous',
      type: 'GET', 
      data: {}, 
      dataType: 'json',
      success: function(data) {
        randomQuote = "\"" + data.quote + "\"";
        randomAuthor = "- " +  data.author;
        document.getElementById('randomQuote').innerHTML = randomQuote;
        document.getElementById('randomAuthor').innerHTML = randomAuthor;
      },
      error: function(err) {
        
        // var quotes = {
        //   1: ['If a man does his best, what else is there?', 'Gen. George S. Patton'],
        //   2: ['Give me chastity and continence, but not yet.', 'Saint Augustine'],
        //   3: ['You can avoid reality, but you cannot avoid the consequences of avoiding reality.', 'Ayn Rand'],
        //   4: ['I have always depended on the kindness of strangers.', 'A Streetcar Named Desire']
        // };
        
        
        // var randomQuoteNumber = Math.ceil(Math.random() * Object.keys(quotes).length);
        
        // var randomColorChange = Math.ceil(Math.random() * Object.keys(colorSwitch).length);
        
        
   
        
//         $('.quoteBox').css("background-color", colorSwitch[randomColorChange][0]);

//         $('#quote').text(quotes[randomQuoteNumber][0]);
//         $('#author').text(quotes[randomQuoteNumber][1]);

      },
      beforeSend: function(xhr) {
        xhr.setRequestHeader("X-Mashape-Authorization", "Sr4ugfUfUHmshOQ2IbeGXw8i1Gujp15JgPZjsnIcl0TaxHmdX3");
      }
    });
  }
  
  function colorChange () {
    var randomColors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];
  
  
  var color = Math.floor(Math.random() * randomColors.length);
      $("html").css({
        "background-color": randomColors[color]
      });
        $(".quoteBox").css({
        "color": randomColors[color]
      });
    
    $("#nextQuote").css({
        "background-color": randomColors[color]
      });
    
     $("#title").css({
        "border-bottom-color": randomColors[color]
      });
    
    $("#twitterShare").css({
        "background-color": randomColors[color]
      });
    
    $("#facebookShare").css({
        "background-color": randomColors[color]
      });
  }
  
  $('#twitterShare').hide();
   $('#facebookShare').hide();
  
  function tweetAppear () {
    $('#twitterShare').show();
  }
  
  function facebookAppear () {
    $('#facebookShare').show();
  }
  
  
  $('#nextQuote').click(colorChange);
  $('#nextQuote').click(tweetAppear);
  $('#nextQuote').click(facebookAppear);
  
  
  
  
  
  
 // Twitter Share
  
$('#twitterShare').on("click", function() {
    var myUrl = 'https://twitter.com/intent/tweet?text=' + randomQuote + ' ' + randomAuthor;
    window.open(myUrl, 'twitter');
    return false;
  });
  
 // Facebook Share
  window.fbAsyncInit = function() {
    FB.init({appId: '467651786737097', status: true, cookie: true,
    xfbml: true});
  };
  (function() {
    var e = document.createElement('script'); e.async = true;
    e.src = document.location.protocol +
    '//connect.facebook.net/en_US/all.js';
    document.getElementById('fb-root').appendChild(e);
  }());

  $('#facebookShare').on("click", function(e) {

    e.preventDefault();
    FB.ui(
    {
    method: 'feed',
    name: 'Random Quote Machine',
    link: 'http://codepen.io/djuarez/pen/XdBdgW',
    picture: 'http://www.groupstudy.in/img/logo3.jpeg',
    caption: 'Generate random famous quotes from famous movies and people.',
    description: "Want to view a random famous quote and share it with your friends and family? Try out my Random Quote Machine!",
    message: "hey"
    });

  });
  
   
  
      });