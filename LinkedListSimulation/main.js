class Node {
	// constructor
	constructor(element) {
		this.element = element;
		this.next = null
	}
}

// linkedlist class
class LinkedList {
	constructor() {
		this.head = null;
		this.size = 0;
	}

	// adds an element at the end
	// of list
	append(element) {
		// creates a new node
		var node = new Node(element);

		// to store current node
		var current;

		// if list is Empty append the
		// element and make it head
		if (this.head == null)
			this.head = node;
		else {
			current = this.head;

			// iterate to the end of the
			// list
			while (current.next) {
				current = current.next;
			}

			// append node
			current.next = node;
		}
		this.size++;
	}

	// insert element at the position 0
	prepend(element) {
		ll.insertAt(element, 0) ;
	}

	// insert element at the position index
	// of the list
	insertAt(element, index) {
		if (index < 0 || index > this.size) {
			alert("ইনডেক্স সঠিক নয়") ;
			return ;
		}
		else {
			// creates a new node
			var node = new Node(element);
			var curr, prev;

			curr = this.head;

			// add the element to the
			// first index
			if (index == 0) {
				node.next = this.head;
				this.head = node;
			} else {
				curr = this.head;
				var it = 0;

				// iterate over the list to find
				// the position to insert
				while (it < index) {
					it++;
					prev = curr;
					curr = curr.next;
				}

				// adding an element
				node.next = curr;
				prev.next = node;
			}
			this.size++;
		}
	}

	// removes an element from the
	// specified location
	removeFrom(index) {
		if (index < 0 || index >= this.size) {
			alert("ইনডেক্স সঠিক নয়") ;
			return ;
		}
		else {
			var curr, prev, it = 0;
			curr = this.head;
			prev = curr;

			// deleting first element
			if (index === 0) {
				this.head = curr.next;
			} else {
				// iterate over the list to the
				// position to removce an element
				while (it < index) {
					it++;
					prev = curr;
					curr = curr.next;
				}

				// remove the element
				prev.next = curr.next;
			}
			this.size--;

			// return the remove element
			return curr.element;
		}
	}

	// removes a given element from the
	// list
	removeElement(element) {
		var current = this.head;
		var prev = null;

		// iterate over the list
		while (current != null) {
			// comparing element with current
			// element if found then remove the
			// and return true
			if (current.element === element) {
				if (prev == null) {
					this.head = current.next;
				} else {
					prev.next = current.next;
				}
				this.size--;
				return current.element;
			}
			prev = current;
			current = current.next;
		}
		return -1;
	}


	// finds the index of element
	indexOf(element) {
		var count = 0;
		var current = this.head;

		// iterae over the list
		while (current != null) {
			// compare each element of the list
			// with given element
			if (current.element === element)
				return count;
			count++;
			current = current.next;
		}

		// not found
		return -1;
	}

	// checks the list for empty
	isEmpty() {
		return this.size == 0;
	}

	// gives the size of the list
	size_of_list() {
		console.log(this.size);
	}

	toString() {
		var str = "" ;
		var curr = this.head ;
		while(curr) {
			if(curr.next == null) str += curr.element ;
			else str += curr.element + " -> " ;
			curr = curr.next ;
		}
		if(str.length == 0) return "লিংকড লিস্টে কোনো নোড নেই" ;
		else return str ;
	}

}

var ll = new LinkedList();

const display = document.getElementById("display") ;
const containerBtnInputAppend = document.getElementById("container-btn-input-append") ;
const containerBtnInputPrepend = document.getElementById("container-btn-input-prepend") ;
const containerBtnInputInsertpos = document.getElementById("container-btn-input-insertpos") ;
const containerBtnInputRemovefrom = document.getElementById("container-btn-input-removefrom") ;
const containerBtnInputRemoveelement = document.getElementById("container-btn-input-removeelement") ;
const containerBtnInputIndexof = document.getElementById("container-btn-input-indexof") ;

function open_append() {
	containerBtnInputAppend.style.visibility = "visible" ;
}

function open_prepend() {
	containerBtnInputPrepend.style.visibility = "visible" ;
}

function open_insertpos() {
	containerBtnInputInsertpos.style.visibility = "visible" ;
}

function open_removefrom() {
	containerBtnInputRemovefrom.style.visibility = "visible" ;
}

function open_removeelement() {
	containerBtnInputRemoveelement.style.visibility = "visible" ;
}

function open_indexof() {
	containerBtnInputIndexof.style.visibility = "visible" ;
}

function perform_append() {
	containerBtnInputAppend.style.visibility = "hidden" ;
	var inputAppend = document.getElementById("input-append").value ;
	var num = Number(inputAppend) ;
	ll.append(num) ;
	display.innerHTML = ll.toString() ;
}

function perform_prepend() {
	containerBtnInputPrepend.style.visibility = "hidden" ;
	var inputPrepend = document.getElementById("input-prepend").value ;
	var num = Number(inputPrepend) ;
	ll.prepend(num) ;
	display.innerHTML = ll.toString() ;
}

function perform_insertpos() {
	containerBtnInputInsertpos.style.visibility = "hidden" ;
	var inputInsertposNumber = document.getElementById("input-insertpos-number").value ;
	var inputInsertposIndex = document.getElementById("input-insertpos-index").value ;
	var num = Number(inputInsertposNumber) ;
	var index = Number(inputInsertposIndex) ;
	ll.insertAt(num, index) ;
	display.innerHTML = ll.toString() ;
}

function perform_removefrom() {
	containerBtnInputRemovefrom.style.visibility = "hidden" ;
	var inputRemovefrom = document.getElementById("input-removefrom").value ;
	var index = Number(inputRemovefrom) ;
	ll.removeFrom(index) ;
	display.innerHTML = ll.toString() ;
}

function perform_removeelement() {
	containerBtnInputRemoveelement.style.visibility = "hidden" ;
	var inputRemoveelement = document.getElementById("input-removeelement").value ;
	var num = Number(inputRemoveelement) ;
	var status = ll.removeElement(num) ;
	if(status == -1) alert("সংখ্যাটি পাওয়া যায়নি") ;
	else display.innerHTML = ll.toString() ;
}

function perform_indexof() {
	containerBtnInputIndexof.style.visibility = "hidden" ;
	var inputIndexof = document.getElementById("input-indexof").value ;
	var num = Number(inputIndexof) ;
	var index = ll.indexOf(num) ;
	if(index == -1) alert("সংখ্যাটি পাওয়া যায়নি") ;
	else alert("সংখ্যাটি " + index + " নম্বর ইনডেক্সে পাওয়া গেছে") ;
}