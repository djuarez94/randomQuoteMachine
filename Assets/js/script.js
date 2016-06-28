$(document).ready(function() {

  var randomQuote = '';
  var randomAuthor = '';
  
  
  
  $('#nextQuote').on("click", function() {
    randomQuote2();
  });

/*-------------------------------------
| Random Quote Change 
-------------------------------------*/

/*These Quotes are not my own*/

  function randomQuote2 () {
    var quotes = {
          1: ['Life is what happens to us and how we react to it.' , 'Dennis P. Kimbro'],
          2: ['There is no royal road to anything. One thing at a time, all things in succession. That which grows fast, withers as rapidly. That which grows slowly, endures.', 'Josiah Gilbert Holland'],
          3: ['Be not afraid of life. Believe that life is worth living, and your belief will help create the fact.', 'William James'],
          4: ['When I stand before God at the end of my life, I would hope that I would not have a single bit of talent left and could say, I used everything you gave me.', 'Erma Bombeck'],
          5: ['Even if you’re on the right track, you’ll get run over if you just sit there.', 'Will Rogers'],
          6: ['When I hear somebody sigh, \‘Life is hard,\’ I am always tempted to ask, \‘Compared to what?\’', 'Sydney Harris'],
          7: ['Nurture your mind with great thoughts. To believe in the heroic makes heroes.', 'Benjamin Disraeli'],
          8: ['The real opportunity for success lies within the person and not in the job.', 'Zig Ziglar'],
          9: ['When I let go of what I am, I become what I might be.', 'Lao Tzu'],
          10: ['The great thing in this world is not so much where you stand, as in what direction you are moving.', 'Oliver Wendell Holmes'],
          11: ['Every truth passes through three stages before it is recognized. In the first, it is ridiculed. In the second, it is opposed. In the third, it is regarded as self evident.', 'Arthur Schopenhauer'],
          12: ['Either you run the day, or the day runs you.', 'Jim Rohn'],
          13: ['The difference between a successful person and others is not lack of strength not a lack of knowledge but rather a lack of will.', 'Vince Lombardi'],
          14: ['Don’t worry about failures, worry about the chances you miss when you don’t even try.', 'Jack Canfield'],
          15: ['Though no one can go back and make a brand new start, anyone can start from now and make a brand new ending', 'Carl Bard'],
          16: ['The only way of finding the limits of the possible is by going beyond them into the impossible.', 'Arthur C. Clarke'],
          17: ['Speak less than you know; have more than you show.', 'William Shakespeare'],
          18: ['Many of life’s failures are experienced by people who did not realize how close they were to success when they gave up.', 'Thomas Edison'],
          19: ['Education costs money. But then so does ignorance', 'Sir Claus Moser'],
          20: ['The journey of a thousand miles begins with one step.', 'Lao Tzu'],
          21: ['The best revenge is massive success.', 'Frank Sinatra'],
          22: ['Challenges are what make life interesting and overcoming them is what makes life meaningful.', 'Joshua J. Marine'],
          23: ['Keep away from people who try to belittle your ambitions. Small people always do that, but the really great makes you feel that you, too, can become great.', 'Mark Twain'],
          24: ['I am thankful for all of those who said NO to me. Its because of them I’m doing it myself.', 'Albert Einstein'],
          25: ['The difference between stupidity and genius is that genius has its limits.', 'Albert Einstein'],
          26: ['I know where I am going and I know the truth, and I do not have to be what you want me to be. I am free to be what I want.', 'Muhammad Ali'],
          27: ['Failure will never overtake me if my determination to succeed is strong enough.', 'Og Mandino'],
          27: ['Always do your best. What you plant now, you will harvest later.', 'Og Mandino'],
          28: ['You are never too old to set another goal or to dream a new dream.', 'C.S. Lewis']
        };
        
        
        var randomQuoteNumber = Math.ceil(Math.random() * Object.keys(quotes).length);
        
        var randomColorChange = Math.ceil(Math.random() * Object.keys(colorChange).length);
        
        
   
        
        $('.quoteBox').css("background-color", colorChange[randomColorChange]);


        randomQuote =  quotes[randomQuoteNumber][0];
        randomAuthor = quotes[randomQuoteNumber][1];

        $('#randomQuote').text("\"" + quotes[randomQuoteNumber][0] + "\"");
        $('#randomAuthor').text("- " +quotes[randomQuoteNumber][1]);
  }

  
  // function nextRandomQuote () {
  //   var output = $.ajax({
  //     url: 'https://andruxnet-random-famous-quotes.p.mashape.com/cat=famous',
  //     type: 'GET', 
  //     data: {}, 
  //     dataType: 'json',
  //     success: function(data) {
  //       randomQuote = "\"" + data.quote + "\"";
  //       randomAuthor = "- " +  data.author;
  //       document.getElementById('randomQuote').innerHTML = randomQuote;
  //       document.getElementById('randomAuthor').innerHTML = randomAuthor;
  //     },
  //     error: function(err) {
        
        // var quotes = {
        //   1: ['If a man does his best, what else is there?', 'Gen. George S. Patton'],
        //   2: ['Give me chastity and continence, but not yet.', 'Saint Augustine'],
        //   3: ['You can avoid reality, but you cannot avoid the consequences of avoiding reality.', 'Ayn Rand'],
        //   4: ['I have always depended on the kindness of strangers.', 'A Streetcar Named Desire']
        // };
        
        
        // var randomQuoteNumber = Math.ceil(Math.random() * Object.keys(quotes).length);
        
        // var randomColorChange = Math.ceil(Math.random() * Object.keys(colorSwitch).length);
        
        
   
        
        // $('.quoteBox').css("background-color", colorSwitch[randomColorChange][0]);

        // $('#randomQuote').text(quotes[randomQuoteNumber][0]);
        // $('#randomAuthor').text(quotes[randomQuoteNumber][1]);

  //     },
  //     beforeSend: function(xhr) {
  //       xhr.setRequestHeader("X-Mashape-Authorization", "Sr4ugfUfUHmshOQ2IbeGXw8i1Gujp15JgPZjsnIcl0TaxHmdX3");
  //     }
  //   });
  // }
  
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
    link: 'https://djuarez94.github.io/randomQuoteMachine/',
    picture: 'http://www.groupstudy.in/img/logo3.jpeg',
    caption: 'Generate random famous quotes from famous movies and people.',
    description: "Want to view a random famous quote and share it with your friends and family? Try out my Random Quote Machine!",
    message: "hey"
    });

  });
  
   
  
      });