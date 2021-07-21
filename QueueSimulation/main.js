var qw = new queue() ;

const dispFront = document.getElementById("display-front") ;
const dispAction = document.getElementById("display-action") ;
const containerEnqueue = document.getElementById("container-enqueue") ;
const dispQueue = document.getElementById("display-queue") ;
const dispSize = document.getElementById("display-size") ;

function set_input() {
	containerEnqueue.style.visibility = "visible" ;
}

function enqueue_item() {
	let elemEnqueue = document.getElementById("input").value ;
	let elemAction = document.getElementById("display-action") ;

	try {
		if(elemEnqueue == "") throw "খালি" ;
		if(isNaN(elemEnqueue)) throw "সংখ্যা না" ;
		elemenqueue = Number(elemEnqueue) ;

		qw.enqueue(elemEnqueue) ;
		print_queue() ;
		show_peek() ;
		containerEnqueue.style.visibility = "hidden" ;
		dispAction.innerHTML = "এই মুহূর্তে হয়েছে: " + elemEnqueue + " কিউ তে রাখা হয়েছে" ;
		dispSize.innerHTML = "কিউ সাইজ: " + qw.size() ;
		print_queue() ;
	}
	catch(err) {
		elemAction.innerHTML = "এই মুহূর্তে হয়েছে: ইনপুট " + err ;
	}

}

function dequeue_item() {
	let txt = qw.dequeue() ;
	if(txt == "Empty queue") {
		dispAction.innerHTML = "এই মুহূর্তে হয়েছে: কিউতে কিছু নেই" ;
		dispSize.innerHTML = "কিউ সাইজ: " + qw.size() ;
	}
	else {
		dispAction.innerHTML = "এই মুহূর্তে হয়েছে: " + txt + " কিউ থেকে সরানো হয়েছে" ;
		dispSize.innerHTML = "কিউ সাইজ: " + qw.size() ;
	}
	show_peek() ;
	print_queue() ;
}

function show_peek() {
	if(qw.empty()) dispFront.innerHTML = "ফ্রন্ট এলিমেন্ট: কিউতে কিছু নেই" ;
	else  dispFront.innerHTML = "ফ্রন্ট এলিমেন্ট: " + qw.peek() ;
}

function print_queue() {
	const str = qw.toString() ;
	dispQueue.innerHTML = str ;
}

function clear_queue() {
	qw.clear() ;
	print_queue() ;
	show_peek() ;
	dispSize.innerHTML = "কিউ সাইজ: " + qw.size() ;
	dispAction.innerHTML = "এই মুহূর্তে হয়েছে: কিউ খালি করা হয়েছে" ;
}