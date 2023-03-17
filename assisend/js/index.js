// menu
let menu = document.querySelector('.menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
	navbar.classList.toggle('active');
	menu.classList.toggle('move')
}