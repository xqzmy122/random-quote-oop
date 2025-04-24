import RandomQuote from './RandomQuote.js'

class RandomQuotesApp {
  constructor() {
    this.quoteTextCont = document.querySelector('.quote-text')
    this.quoteAuthorCont = document.querySelector('.quote-author')
    this.quoteButton = document.querySelector('.generate-quote')
    this.currentQuote = null

    this.init()
  }

  getRandomQuote() {
    const randomQuote = RandomQuote.getRandomQuote()
    this.currentQuote = randomQuote

    const {text, author} = this.currentQuote
    this.quoteTextCont.textContent = text
    this.quoteAuthorCont.textContent = author 
  }

  init() {
    this.quoteButton.addEventListener('click', () => this.getRandomQuote())
  }
}

export default RandomQuotesApp