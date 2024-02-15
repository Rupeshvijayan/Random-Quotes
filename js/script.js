const quoteEle = document.querySelector(".quote");
const authorEle = document.querySelector(".author");


let quotes = [
    {
        'quote' : "It does not matter how slowly you go as long as you do not stop.",
    'author' : "~Confucius",
},
{
        'quote' : "If opportunity doesn’t knock, build a door.",
    'author' : "~Milton Berle",
},
{
        'quote' : "Wanting to be someone else is a waste of the person you are.",
    'author' : "~Kurt Cobain",
},
{
        'quote' : "Nothing will work unless you do.",
    'author' : "~Maya Angelou",
},
{
        'quote' : "If you’re going through hell, keep going.",
    'author' : "~Winston Churchill",
},
{
        'quote' : "The future depends on what you do today.",
    'author' : "~Mahatma Gandhi",
},
{
        'quote' : "You only live once, but if you do it right, once is enough.",
    'author' : "~Mae West",
},
{
        'quote' : "Opportunities don’t happen, you create them.",
    'author' : "~Chris Grosser",
},
{
        'quote' : "A mind troubled by doubt cannot focus on the course to victory.",
    'author' : "~Arthur Golden",
},
{
        'quote' : "Whatever you decide to do, make sure it makes you happy.",
    'author' : "~Paulo Coelho"
}
];

//This method will give out quotes manually.
/* function printQuotes(quotes){
console.log(quotes['quote'], quotes['author']);
}

printQuotes(quotes[2]); */


//Finding random number
function printRandomQuote(){
    let randomIndex = Math.floor(Math.random()*quotes.length); //quotes.length will give the length of quotes and then multiplied.
    randomQuote = quotes[randomIndex];
    console.log(randomQuote['quote'],randomQuote['author']);
    quoteEle.innerHTML = randomQuote['quote'];
    authorEle.innerHTML = randomQuote['author'];
}

/* printRandomQuote(); */

setInterval(printRandomQuote,5000);
