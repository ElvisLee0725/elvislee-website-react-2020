class TypeWriter {
  constructor(domElement, words, wait = 3000) {
    this.domElement = domElement;
    this.words = words;
    this.wait = parseInt(wait, 10);
    this.curText = '';
    this.wordIndex = 0;
    this.isDeleting = false;
    this.type();
  }

  type() {
    // Pause this.wait time when a word is finished
    // When deleting, the type speed is half of typing
    // Pause a bit before typing the next word
    let typeSpeed = 200;

    if(this.curText !== this.words[this.wordIndex] && !this.isDeleting) {
      this.curText = this.words[this.wordIndex].substring(0, this.curText.length+1);
    }
    else if(!this.isDeleting) {
      this.isDeleting = true;
      typeSpeed = this.wait;
    }
    else {
      typeSpeed = Math.trunc(typeSpeed / 2);
      if(this.curText === '') {
        this.isDeleting = false;
        this.wordIndex = (this.wordIndex + 1) % this.words.length; 
        typeSpeed = 500;
      }
      else {
        this.curText = this.curText.substring(0, this.curText.length-1);
      }
    }
    
    this.domElement.innerHTML = `<span class='typing-cursor'>${this.curText}</span>`;
    
    setTimeout(() => {
      this.type();
    }, typeSpeed);
  }
}

export default TypeWriter;