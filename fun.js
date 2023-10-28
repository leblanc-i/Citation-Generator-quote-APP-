let quotes = [
    {
        quote: "Jusqu'à la mort parce qu'on croit en la vie.",
        author: "-Kery James"
    },
    {
        quote: "J'suis tellement dos au mur que ma colonne vertébrale est en ciment.",
        author: "-Youssoupha"
    },
    {
        quote: "On vise la Lune comme Mimi Mathy dans un concours de dunk.",
        author: "-Hugo TSR"
    },
    {
        quote: "On rêve de vivre vieux à defaut de vivre mieux.",
        author: "-Nubi"
    },
    {
        quote: "Je ne pense pas à demain parce que demain c'est loin.",
        author: "-Akhenaton"
    },
    {
        quote: "Rien ne sert de rouler en gamos si t'as pas la vie qui va avec.",
        author: "-Sefyu"
    },
]
const quoteBtn = document.getElementById("quote-btn");
const quote = document.querySelector(".quote");
const author = document.querySelector(".author");

quoteBtn.addEventListener('click', () => {
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerHTML = quotes[random].quote;
    author.innerHTML = quotes[random].author;
})