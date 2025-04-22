class Quote {
  constructor(id, text, author) {
    this.id = id
    this.text = text
    this.author = author
  }

  toString() {
    return `This quote has id = ${this.id} and author ${this.author}`
  }
}

const firstQuote = new Quote('1', 'hello, World!', 'Miron')
console.log(firstQuote)