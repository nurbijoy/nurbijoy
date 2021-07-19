class Stack {
    constructor() {
        this.items = [] ;
        this.count = 0 ;
    }

    // add element to the top of the stack
    push(item) {
        this.items[this.count] = item ;
        this.count ++ ;
    }

    top() {
        return this.items[this.count - 1] ;
    }

    // removing an item from the top
    pop() {
        if(this.count == 0) return "Empty Stack" ;
        else {
            let item = this.items[this.count - 1] ;
            this.count -- ;
            return item ;
        }
    }

    empty() {
        if(this.count == 0) return true ;
        return false ;
    }

    toString() {
      let text = "" ;
      for(let i = 0 ; i < this.count ; i ++) text += this.items[i] + "<br>" ;
        return text ;
    }

    clear() {
        this.count = 0 ;
    }

    size() {
        return this.count ;
    }
}