class queue {
    constructor() {
        this.items = [] ;
        this.front = 0 ;
        this.rear = 0 ;
    }

    // add element to the front of the queue
    enqueue(item) {
        this.items[this.rear] = item ;
        this.rear ++ ;
    }

    peek() {
        return this.items[this.front] ;
    }


    // removing an item from the front
    dequeue() {
        if(this.rear == this.front) return "Empty queue" ;
        else {
            let item = this.items[this.front] ;
            this.front ++ ;
            return item ;
        }
    }

    empty() {
        if(this.front == this.rear) return true ;
        return false ;
    }

    toString() {
      let text = "" ;
      for(let i = this.front ; i < this.rear ; i ++) text += this.items[i] + "<br>" ;
        return text ;
    }

    clear() {
        this.front = 0 ;
        this.rear = 0 ;
    }

    size() {
        return this.rear - this.front ;
    }
}