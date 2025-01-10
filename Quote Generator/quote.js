const quotesMap = new Map([
    ["Success is not final, failure is not fatal: It is the courage to continue that counts.", "Winston Churchill"],
    ["Do what you can, with what you have, where you are.", "Theodore Roosevelt"],
    ["The best way to predict the future is to invent it.", "Alan Kay"],
    ["In the middle of every difficulty lies opportunity.", "Albert Einstein"],
    ["The only limit to our realization of tomorrow will be our doubts of today.", "Franklin D. Roosevelt"],
    ["Dream big and dare to fail.", "Norman Vaughan"],
    ["Life is 10% what happens to us and 90% how we react to it.", "Charles R. Swindoll"],
    ["Hardships often prepare ordinary people for an extraordinary destiny.", "C.S. Lewis"],
    ["Believe you can, and you're halfway there.", "Theodore Roosevelt"],
    ["It always seems impossible until it’s done.", "Nelson Mandela"],
    ["Your time is limited, so don’t waste it living someone else’s life.", "Steve Jobs"],
    ["Don’t watch the clock; do what it does. Keep going.", "Sam Levenson"],
    ["The future belongs to those who believe in the beauty of their dreams.", "Eleanor Roosevelt"],
    ["Act as if what you do makes a difference. It does.", "William James"],
    ["Success usually comes to those who are too busy to be looking for it.", "Henry David Thoreau"],
    ["You miss 100% of the shots you don’t take.", "Wayne Gretzky"],
    ["Strive not to be a success, but rather to be of value.", "Albert Einstein"],
    ["What lies behind us and what lies before us are tiny matters compared to what lies within us.", "Ralph Waldo Emerson"],
    ["Do not wait to strike till the iron is hot; but make it hot by striking.", "William Butler Yeats"],
    ["The onlfigmay way to do great work is to love what you do.", "Steve Jobs"]
]);

const quote=document.getElementById('quote');
const author=document.getElementById('author');

const collection=Array.from(quotesMap);
function quoteChanger(){
    const [key,val]=collection[Math.floor(Math.random()*20)];
    quote.textContent=key;
    author.textContent=`~${val}`;
}

setInterval(quoteChanger,3000);

const background=document.querySelector('body');

function bgColor(){
    const red=Math.floor(Math.random()*256);
    const blue=Math.floor(Math.random()*256);
    const green=Math.floor(Math.random()*256);
    const alpha=Math.random();
    background.style.backgroundColor=`rgba(${red},${blue},${green},${alpha})`;
}

setInterval(bgColor,3000)