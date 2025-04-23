import quotes from '../data/quotes.js'
import generateRandomInt from './Math.js'
import Quote from './Quote.js'

class RandomQuote {
  static getRandomQuote() {
    const {id, quote, author} = quotes[generateRandomInt(quotes.length)]
    return new Quote(id, quote, author)
  }
}
const quote = RandomQuote.getRandomQuote()
console.log(quote)

export default RandomQuote
