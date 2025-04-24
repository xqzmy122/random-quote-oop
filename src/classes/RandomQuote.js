import quotes from '../data/quotes.js'
import MathUtils from './MathUtils.js'
import Quote from './Quote.js'

class RandomQuote {
  static getRandomQuote() {
    const {id, quote, author} = quotes[MathUtils.generateRandomInt(quotes.length)]
    return new Quote(id, quote, author)
  }
}

export default RandomQuote
