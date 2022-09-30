console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	console.log('form submit');
	alert("Form submitted successfully")
}
function imgCompliment(evt) {
	evt.preventDefault();

	alert("your mom is hot")

	
}

let img = document.querySelector('#image')

img.addEventListener('mouseover', imgCompliment)



let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);