var chngbutton = document.getElementById("colorbtn")
var navbar = document.getElementById("main-navigation")
var pagebg = document.getElementById('page-bg')
var zone   = document.getElementsByClassName("zone")[0]
var drpdwn = document.getElementById("dropdownMenuLink")
var drpdwn2 = document.getElementsByClassName("navbar-nav")[0].getElementsByClassName("dropdown-menu")[0]
var drdnlnks= drpdwn2.children
var jumbo  = document.getElementById("jumbo-part")
var content= document.getElementsByClassName("all-container")[0]

function changeTheColor() {
	if (i % 2 === 1) {
		console.log('hellooo')
		zone.style.background   = "#000000";

		pagebg.style.background = '#262626';
		pagebg.style.background = '#393b3d';
		pagebg.style.background = '#131313';

		chngbutton.classList.add("btn-outline-light");
		chngbutton.classList.remove("btn-outline-dark");

		navbar.classList.remove('navbar-light');
		navbar.classList.add('navbar-dark');

		drpdwn2.classList.remove("drp-light");
		drpdwn2.classList.add("drp-dark");

		if(jumbo != null){
		jumbo.classList.remove("light-text")
		jumbo.classList.add("dark-text")
		}

		content.classList.remove("light-text")
		content.classList.add("dark-text")

		for (var j = drdnlnks.length - 1; j >= 0; j--) {
		 	drdnlnks[j].classList.remove("light-mode-links")
		 	drdnlnks[j].classList.add("dark-mode-links")
		}		
	}
	else { // LIGHT MODE
		zone.style.background   = "#EEF2F4";
		pagebg.style.background = '#EEF2F4';

		chngbutton.classList.remove("btn-outline-light");
		chngbutton.classList.add("btn-outline-dark");

		navbar.classList.remove('navbar-dark');
		navbar.classList.add('navbar-light');

		drpdwn2.classList.add("drp-light");
		drpdwn2.classList.remove("drp-dark");

		if(jumbo != null){
		jumbo.classList.remove("dark-text")
		jumbo.classList.add("light-text")
		}

		content.classList.remove("dark-text")
		content.classList.add("light-text")

		for (var j = drdnlnks.length - 1; j >= 0; j--) {
		 	drdnlnks[j].classList.remove("dark-mode-links")
		 	drdnlnks[j].classList.add("light-mode-links")
		}	
	}
	i = i + 1; 
	console.log(i)
}

var i = 1;
changeTheColor();
console.log(i)
chngbutton.addEventListener("click", changeTheColor)

