function removenote(e){
	let el = e.target;
	el.parentNode.parentNode.remove(el.parentNode);
}

function editnote(e){
	let el = e.target.parentNode.parentNode;
	console.log(el);
}