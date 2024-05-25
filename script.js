const newQuote = document.querySelector(".new-quote");
const quote = document.querySelector(".quote");
const quoteAuthor = document.querySelector(".quote-author");

const quoteObject = [
  {
    newQuoteText: '"Success is not final, failure is not fatal: It is the courage to continue that counts."',
    newQuoteAuthor: '- Winston Churchill'
  },
  {
    newQuoteText: '"The only way to do great work is to love what you do."',
    newQuoteAuthor: '- Steve Jobs'
  },
  {
    newQuoteText: `"In the end, it's not the years in your life that count. It's the life in your years."`,
    newQuoteAuthor: '- Abraham Lincoln'
  },
  {
    newQuoteText: `"In three words I can sum up everything I've learned about life: it goes on."`,
    newQuoteAuthor: '- Robert Frost'
  },
  {
    newQuoteText: `"The only thing we have to fear is fear itself."`,
    newQuoteAuthor: '- Franklin D. Roosevelt'
  },
  {
    newQuoteText: `"Believe you can and you're halfway there."`,
    newQuoteAuthor: '-  Theodore Roosevelt'
  },
  {
    newQuoteText: `"The best way to predict the future is to create it."`,
    newQuoteAuthor: '- Peter Drucker'
  },
  {
    newQuoteText: `"You miss 100% of the shots you don't take."`,
    newQuoteAuthor: '- Wayne Gretzky'
  },
  {
    newQuoteText: `"Life is what happens when you're busy making other plans." `,
    newQuoteAuthor: '- John Lennon'
  },
  {
    newQuoteText: `"The only limit to our realization of tomorrow will be our doubts of today."`,
    newQuoteAuthor: '- Franklin D. Roosevelt'
  },
];
console.log(quoteObject.length)

newQuote.addEventListener('click', ()=>{

  let qText = quoteObject[Math.round(Math.random() * quoteObject.length - 1)];
  
  quote.textContent = qText.newQuoteText;
  quoteAuthor.textContent = qText.newQuoteAuthor;

});