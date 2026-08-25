const quotes = [
  { quote: "The best way to predict the future is to create it.", author: "Peter Drucker" },
  { quote: "Code is like humor. When you have to explain it, it’s bad.", author: "Cory House" },
  { quote: "Simplicity is the soul of efficiency.", author: "Austin Freeman" },
  { quote: "Make it work, make it right, make it fast.", author: "Kent Beck" },
  { quote: "First, solve the problem. Then, write the code.", author: "John Johnson" }
];

const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const newQuoteBtn = document.getElementById('new-quote-btn');

function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const selectedQuote = quotes[randomIndex];
  
  quoteText.innerText = `"${selectedQuote.quote}"`;
  authorText.innerText = `- ${selectedQuote.author}`;
}

newQuoteBtn.addEventListener('click', getRandomQuote);
getRandomQuote();
