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

function function1(evt) {
	evt.preventDefault()

if(img.src != "https://scontent-sjc3-1.xx.fbcdn.net/v/t39.30808-1/291497437_1322011138324502_1518424431068690358_n.jpg?stp=dst-jpg_p480x480&_nc_cat=111&ccb=1-7&_nc_sid=7206a8&_nc_ohc=Xsj0f2GzX-cAX9yDUKh&_nc_ht=scontent-sjc3-1.xx&oh=00_AT_GenCmX_fEKKoZlM8G602gFkVNLY0gF6VN7bz9dbGEtg&oe=633BAA7E"){
    img.src = "https://scontent-sjc3-1.xx.fbcdn.net/v/t39.30808-1/291497437_1322011138324502_1518424431068690358_n.jpg?stp=dst-jpg_p480x480&_nc_cat=111&ccb=1-7&_nc_sid=7206a8&_nc_ohc=Xsj0f2GzX-cAX9yDUKh&_nc_ht=scontent-sjc3-1.xx&oh=00_AT_GenCmX_fEKKoZlM8G602gFkVNLY0gF6VN7bz9dbGEtg&oe=633BAA7E";}
  else{
    img.src = "https://p77-sign-va.tiktokcdn.com/tos-maliva-avt-0068/658c21e48d0c8ebed8563b1f64fce152~c5_720x720.jpeg?x-expires=1664571600&x-signature=gTXgh8FxLmcH3ARuTGnzJqVuRGs%3D";};

}

  
	
	
	
	var img = document.getElementById("myImage");
img.addEventListener("click", function1)