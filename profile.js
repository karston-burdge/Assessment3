function favColor(evt) {
	evt.preventDefault();

	alert("My favorite Color is Dark Teal")

}
let button = document.querySelector('#color')

button.addEventListener('click', favColor)


function favPlace(evt) {
	evt.preventDefault();

	alert("My favorite place is your moms house")

}
let button2 = document.querySelector('#place')

button2.addEventListener('click', favPlace)




function favRitual(evt) {
	evt.preventDefault();

	alert("My favorite ritual is eating my feelings at 2 in the morning")

}
let button3 = document.querySelector('#ritual')

button3.addEventListener('click', favRitual)
