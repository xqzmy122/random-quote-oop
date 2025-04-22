class Quote {
  constructor(id, text, author) {
    this.id = id
    this.text = text
    this.author = author
  }

  toString() {
    return `This quote has id = ${id} and author ${author}`
  }
}

export default Quote