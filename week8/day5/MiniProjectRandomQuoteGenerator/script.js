document.addEventListener("DOMContentLoaded", () => {
    let size = 1.5;
    const body = document.querySelector("body");
    const quote = document.querySelector(".quote");
    const shuffle = document.querySelector(".shuffle");
    const quote_text = document.querySelector("blockquote p");
    const cite = document.querySelector("blockquote cite");
    const fonts_buttons = document.querySelectorAll(".settings .fonts button");
    const modes_buttons = document.querySelectorAll(".settings .modes button");
    const size_buttons = document.querySelectorAll(".settings .size button");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");

    let currentQuoteIndex = [];



    async function updateQuote() {
        try {
            const response = await fetch("https://api.quotable.io/random");
            const data = await response.json();

            if (response.ok) {
                quote_text.textContent = data.content;
                cite.textContent = data.author;
            } else {
                quote_text.textContent = "An error occurred";
                console.log(data);
            }
        } catch (error) {
            quote_text.textContent = "Oops! There is a problem with the quotes server.";
            console.log(error);
        }
    }

    function updateStyle() {
        const font = localStorage.getItem('font') || 'sans';
        changeFont(font);

        const mode = localStorage.getItem('mode');
        if (mode) changeMode(mode);

        size = parseFloat(localStorage.getItem('size')) || 1.5;
        setSize(size);
    }

    function changeFont(value) {
        quote.className = value;
        localStorage.setItem('font', value);
    }

    function changeMode(value) {
        body.className = value;
        localStorage.setItem('mode', value);
    }

    function changeSize(value) {
        size = value === "plus" ? size + 0.1 : size - 0.1;
        size = parseFloat(size.toFixed(2));
        setSize(size);
    }

    function setSize(value) {
        quote.style.fontSize = value + 'rem';
        localStorage.setItem('size', value);
    }

    function loadQuote() {
        var url = new URL(window.location);
        var fileUrl = url.searchParams.get("f");
        if (fileUrl == null) {
            updateQuote();
        } else {
            updateQuoteCustom(fileUrl);
        }
    }

    function handleColorSchemeChange(mediaQueryList) {
        if (!localStorage.getItem('mode')) {
            body.className = mediaQueryList.matches ? 'dark' : 'light';
        }
    }

    function updateQuoteCustom(f) {
        fetch(f)
            .then(response => response.json())
            .then(data => {
                if (Array.isArray(data) && data.length > 0) {
                    const random_quote = data[Math.floor(Math.random() * data.length)];
                    quote_text.textContent = random_quote.content;
                    cite.textContent = random_quote.author;
                } else {
                    quote_text.textContent = "An error occurred";
                    console.log(data);
                }
            })
            .catch(error => {
                quote_text.textContent = "Oops! There is a problem with the quotes server.";
                console.log(error);
            });
    }

    size_buttons.forEach(function(elem) {
        elem.addEventListener("click", () => changeSize(elem.classList.value));
    });

    fonts_buttons.forEach(function(elem) {
        elem.addEventListener("click", () => changeFont(elem.classList.value));
    });

    modes_buttons.forEach(function(elem) {
        elem.addEventListener("click", () => changeMode(elem.classList.value));
    });

    shuffle.addEventListener("click", () => loadQuote());
    prefersDark.addEventListener('change', handleColorSchemeChange);

    updateStyle();
    loadQuote();
    handleColorSchemeChange(prefersDark);

    const prevButton = document.getElementById('prev-button');
    const nextButton = document.getElementById('next-button');

    prevButton.addEventListener('click', showPreviousQuote);
    nextButton.addEventListener('click', showNextQuote);

    function showPreviousQuote() {
        updateQuote();
    }

    function showNextQuote() {
        updateQuote();
    }

    const addQuoteForm = document.getElementById('add-quote-form');
    const addQuoteButton = document.getElementById('add-quote-button');
    const charCountButton = document.getElementById('char-count-button');
    const charCountNoSpaceButton = document.getElementById('char-count-no-space-button');
    const wordCountButton = document.getElementById('word-count-button');
    const likeButton = document.getElementById('like-button');

    addQuoteButton.addEventListener('click', addNewQuote);
    charCountButton.addEventListener('click', countCharacters);
    charCountNoSpaceButton.addEventListener('click', countCharactersNoSpace);
    wordCountButton.addEventListener('click', countWords);
    likeButton.addEventListener('click', likeQuote);

    function addNewQuote() {
        const quoteInput = document.getElementById('quote-input').value;
        const authorInput = document.getElementById('author-input').value;

        if (quoteInput && authorInput) {
            const newQuote = {
                id: response.length,
                author: authorInput,
                quote: quoteInput,
                likes: 0
            };

            response.push(newQuote);
            generateRandomQuote();
        }
    }

    function countCharacters() {
        const currentQuote = quote_text[currentQuoteIndex].quote;
        alert(`Character count (with spaces): ${currentQuote.length}`);
    }

    function countCharactersNoSpace() {
        const currentQuote = quote_text[currentQuoteIndex].quote;
        alert(`Character count (without spaces): ${currentQuote.replace(/\s/g, '').length}`);
    }

    function countWords() {
        const currentQuote = quote_text[currentQuoteIndex].quote;
        const words = currentQuote.split(/\s+/).filter(word => word.length > 0);
        alert(`Word count: ${words.length}`);
    }

    function likeQuote() {
        quote_text[currentQuoteIndex].likes++;
        generateRandomQuote();
    }

    function countCharactersWithSpaces() {
    const currentQuote = quote_text.textContent;
    alert(`Character count (with spaces): ${currentQuote.length}`);
}

function countCharactersWithoutSpaces() {
    const currentQuote = quote_text.textContent;
    const charactersWithoutSpaces = currentQuote.replace(/\s/g, '').length;
    alert(`Character count (without spaces): ${charactersWithoutSpaces}`);
}

function countWords() {
    const currentQuote = quote_text.textContent;
    const words = currentQuote.split(/\s+/).filter(word => word.length > 0);
    alert(`Word count: ${words.length}`);
}

charCountNoSpaceButton.addEventListener('click', countCharactersWithoutSpaces);

wordCountButton.addEventListener('click', countWords);

charCountButton.addEventListener('click', countCharactersWithSpaces);

});
