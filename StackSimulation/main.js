var stk = new Stack() ;

const dispTop = document.getElementById("display-top") ;
const dispAction = document.getElementById("display-action") ;
const containerPush = document.getElementById("container-push") ;
const dispStack = document.getElementById("display-stack") ;
const dispSize = document.getElementById("display-size") ;

function set_input() {
	containerPush.style.visibility = "visible" ;
}

function push_item() {
	let elemPush = document.getElementById("input").value ;
	let elemAction = document.getElementById("display-action") ;

	try {
		if(elemPush == "") throw "খালি" ;
		if(isNaN(elemPush)) throw "সংখ্যা না" ;
		elemPush = Number(elemPush) ;

		stk.push(elemPush) ;
		print_stack() ;
		show_top() ;
		containerPush.style.visibility = "hidden" ;
		dispAction.innerHTML = "এই মুহূর্তে হয়েছে: " + elemPush + " পুশ করা হয়েছে" ;
		dispSize.innerHTML = "স্ট্যাক সাইজ: " + stk.size() ;
		print_stack() ;
	}
	catch(err) {
		elemAction.innerHTML = "এই মুহূর্তে হয়েছে: ইনপুট " + err ;
	}

}

function pop_item() {
	let txt = stk.pop() ;
	if(txt == "Empty Stack") {
		dispAction.innerHTML = "এই মুহূর্তে হয়েছে: স্ট্যাকে কিছু নেই" ;
		dispSize.innerHTML = "স্ট্যাক সাইজ: " + stk.size() ;
	}
	else {
		dispAction.innerHTML = "এই মুহূর্তে হয়েছে: " + txt + " পপ করা হয়েছে" ;
		dispSize.innerHTML = "স্ট্যাক সাইজ: " + stk.size() ;
	}
	show_top() ;
	print_stack() ;
}

function show_top() {
	if(stk.empty()) dispTop.innerHTML = "টপ এলিমেন্ট: স্ট্যাকে কিছু নেই" ;
	else  dispTop.innerHTML = "টপ এলিমেন্ট: " + stk.top() ;
}

function print_stack() {
	const str = stk.toString() ;
	dispStack.innerHTML = str ;
}

function clear_stack() {
	stk.clear() ;
	print_stack() ;
	show_top() ;
	dispSize.innerHTML = "স্ট্যাক সাইজ: " + stk.size() ;
	dispAction.innerHTML = "এই মুহূর্তে হয়েছে: স্ট্যাক খালি করা হয়েছে" ;
}