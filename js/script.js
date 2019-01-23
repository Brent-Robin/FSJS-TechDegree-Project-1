/******************************************
Treehouse Techdegree:
FSJS project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing

var timer = setInterval(backgroundTimer, 10000);                                        // set the background timer to 10 seconds 
var backgroundArray = ["red", "blue", "green", "black", "cyan", "brown", "magenta"];   // possible choices for random background-color

var quotes = [
      {
        quote: 'I’m a success today because I had a friend who believed in me and I didn’t have the heart to let him down.',
        source: 'Abraham Lincoln',
        year: '',
        citation: '',
        tags: '#inspiring' + ' ' + '#success',
      },
      {
        quote: 'If you want to live a happy life, tie it to a goal, not to people or things.',
        source: 'Albert Einstein',
        year: '', 
        citation: '',
        tags: '#goals' + ' ' + '#happiness',
      },
      {
        quote: 'The scientific man does not aim at an immediate result. He does not expect that his advanced ideas will be readily taken up. His work is like that of the planter — for the future. His duty is to lay the foundation for those who are to come, and point the way. He lives and labors and hopes.',
        source: 'Nikola Tesla',
        year: 'July 1934',
        citation: ' "Radio Power Will Revolutionize the World" in Modern Mechanics and Inventions ',
        tags: '#Science' + ' ' + '#Revolution' + ' ' + '#Radio',
      },
      {
        quote: 'Life is like riding a bicycle. To keep your balance you must keep moving.',
        source: 'Albert Einstein',
        year: 'February 1930',
        citation: 'Einstein: His Life and Universe (2007), p. 367',
        tags: '#Balance' + ' ' + '#Life'
      },
      {
        quote: 'The whole history of science has been the gradual realization that events do not happen in an arbitrary manner, but that they reflect a certain underlying order, which may or may not be divinely inspired.',
        source: 'Stephen Hawking',
        year: '1988',
        citation: 'A Brief History of Time, Ch.8',
        tags: '#Science' + ' ' + '#Divinity'
      },
    ]
/*** 
Array includes five quotes, some with more information then others.
***/

function getRandomQuote(quotes) {
  var randomNum = Math.floor(Math.random() * quotes.length);                      // getRandomQuote assigns a random number to the variable randomNum
  console.log(randomNum);                                                         // test to see if its working 
  var randomQuote = quotes[randomNum];                                            // using the random number assign it to a random index of the array 
  console.log(randomQuote.quote);                                                 // test to see if its printing out the right quote
  return randomQuote;                                                             // return the quote
}


function printQuote() {
  
  var a = getRandomQuote(quotes);                                                 // calls the getRandomQuote function and assigns that value to the variable 'a'
  var message = '';                                                               // full quote is stored in var 'message'
  message += '<p class="quote">' + a.quote + '</p>';                              // adds the quote to the HTML string
  message += '<p class="source">' + a.source                                      // adds the Source to the HTML string
 
  if (a.citation != '') {                                                         // conditional statement asking if citation is anything but an empty string to display it
    message += '<span class="citation">' + a.citation;
  }
  
  if (a.year != '') {                                                             // conditional statement asking if year is anything but an empty string to display it
    message += '<span class="year">' + a.year;  
  } 
  
  message += '</p>';
  message += '<p class="tags">' + a.tags + '</p>';                                // extra descriptive tags 
  
  document.getElementById('quote-box').innerHTML = message;                       // print the full quote to the HTML div with the ID 'quote-box'
  var randomChoice = Math.floor(Math.random() * backgroundArray.length);          // random number between 0 and the amount of background colors available in backgroundArray 
  var randomBgc = backgroundArray[randomChoice];                                  // picks a random background color from the array
  document.getElementById("background-color").style.backgroundColor = randomBgc;  // displays the random background color whenever a new quote is displayed 
}


function backgroundTimer() {                                                      // creates a function for the background timer
 var randomChoice = Math.floor(Math.random() * backgroundArray.length);           // random number between 0 and the amount of background colors available in backgroundArray
 var randomBgc = backgroundArray[randomChoice];                                   // picks a random background color from the array 
 document.getElementById("background-color").style.backgroundColor = randomBgc;   // displays the random background color every 5 seconds
 printQuote();                                                                    // displays a new quote every 5 seconds 
}

function stopInterval() {                                                         // creates a function to stop displaying the background / quote every 5 seconds
  clearInterval(timer);                                                           

}

document.getElementById('loadQuote').addEventListener("click", printQuote, false);        // button to load quote
document.getElementById('stopInterval').addEventListener("click", stopInterval, false);   // button to stop randomizing 
