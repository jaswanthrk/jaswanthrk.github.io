// var button = document.getElementById("enter");
// var input  = document.getElementById("userinput");
// var ul     = document.querySelector("ul");
// var listItems = document.getElementsByClassName('list-item')
var chngbutton = document.getElementById("colorbtn")
var navbar = document.getElementById("main-navigation")
var pagebg = document.getElementById('page-bg')
var zone   = document.getElementsByClassName("zone")[0]
var drpdwn = document.getElementById("dropdownMenuLink")
var drpdwn2 = document.getElementsByClassName("navbar-nav")[0].getElementsByClassName("dropdown-menu")[0]
var drdnlnks= drpdwn2.children
var jumbo  = document.getElementById("jumbo-part")

function changeTheColor() {
	if (i % 2 === 1) {
		console.log('hellooo')
		// document.body.style.background = 'rgb(75,17,101)';
		// document.body.style.background = 'radial-gradient(circle, rgba(75,17,101,1) 18%, rgba(53,56,64,1) 100%)'
		// document.body.style.background = 'rgb(0,129,147)';
		// document.body.style.background = 'radial-gradient(circle, rgba(0,129,147,1) 0%, rgba(0,0,0,1) 100%)'
		// document.body.style.background = 'url(images/img1.jpg) no-repeat center center fixed';
		zone.style.background   = "#b41819";
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

		jumbo.classList.remove("light-text")
		jumbo.classList.add("dark-text")

		for (var j = drdnlnks.length - 1; j >= 0; j--) {
		 	drdnlnks[j].classList.remove("light-mode-links")
		 	drdnlnks[j].classList.add("dark-mode-links")
		}		

		// document.body.style.background = 'rgb(187,252,255)';
		// document.body.style.background = 'radial-gradient(circle, rgba(187,252,255,1) 0%, rgba(27,255,94,1) 34%, rgba(219,193,2,1) 57%, rgba(254,107,107,1) 90%) no-repeat center center fixed';
	}
	else { // LIGHT MODE
		// document.body.style.background = 'rgb(255,255,228)';
		// document.body.style.background = 'radial-gradient(circle, rgba(203,239,255,1) 8%, rgba(255,182,182,1) 100%)';
		// document.body.style.background = 'rgb(255,193,193)';
		// document.body.style.background = 'radial-gradient(circle, rgba(255,193,193,1) 24%, rgba(254,254,254,1) 91%, rgba(255,178,178,1) 100%)';
		// document.body.style.background = 'rgb(255,139,139)';
		// document.body.style.background = 'radial-gradient(circle, rgba(255,139,139,1) 0%, rgba(236,206,100,1) 24%, rgba(255,230,54,1) 43%, rgba(106,255,154,1) 100%, rgba(255,255,255,1) 100%)';

		// document.body.style.background = 'rgb(255,240,187)';
		// document.body.style.background = 'radial-gradient(circle, rgba(255,240,187,1) 24%, rgba(255,243,162,1) 43%, rgba(255,255,255,1) 100%)';
		// document.body.style.background = '#ffffff';
		// document.body.style.background = 'img/img1.jpg'
		// document.body.style.background = 'radial-gradient(circle, rgba(255,197,197,1) 0%, rgba(255,255,255,1) 100%)';
		// pagebg.style.background = 'url(images/img4.jpg) no-repeat center center fixed';
		zone.style.background   = "#ed6767";
		zone.style.background   = "#7d8993";
		zone.style.background   = "#d1a561";
		zone.style.background   = "#9d766c";
		zone.style.background   = "#d1a561";
		zone.style.background   = "#d1a561";
		zone.style.background   = "#d1a561";
		zone.style.background   = "#E5998E";
		zone.style.background   = "#bef8fe";

		pagebg.style.background = '#EEF2F4';

		// drpdwn.style.backgroundColor = "#ffffff";

		chngbutton.classList.remove("btn-outline-light");
		chngbutton.classList.add("btn-outline-dark");

		navbar.classList.remove('navbar-dark');
		navbar.classList.add('navbar-light');

		drpdwn2.classList.add("drp-light");
		drpdwn2.classList.remove("drp-dark");

		jumbo.classList.remove("dark-text")
		jumbo.classList.add("light-text")

		for (var j = drdnlnks.length - 1; j >= 0; j--) {
		 	drdnlnks[j].classList.remove("dark-mode-links")
		 	drdnlnks[j].classList.add("light-mode-links")
		}	

		// document.body.style.background = 'rgb(238,174,202)';
  		// document.body.style.background = 'linear-gradient(90deg, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 82%) no-repeat center center fixed';
	}
	i = i + 1; 
	console.log(i)
}

var i = 0;
changeTheColor();
console.log(i)
chngbutton.addEventListener("click", changeTheColor)

// function inputLength() {
// 	return input.value.length;
// }

// function createListElement() {
// 	var li = document.createElement("li");
// 	li.appendChild(document.createTextNode(input.value));
// 	ul.appendChild(li);
// 	input.value = "";
// 	li.addEventListener("click", toggleDone)
// }

// function addListAfterClick() {
// 	if (inputLength() > 0) {
// 		createListElement();
// 	}
// }

// function addListAfterKeypress(event) {
// 	if (inputLength() > 0 && event.keyCode === 13) {
// 		createListElement();
// 	}
// }

// function checkIfDone(items) {
// 	for(var i = 0; i < items.classList.length ; i++) {
// 		if(items.classList[i] == 'done') {
// 			console.log('Hello')
// 	        return true;
// 	    }
// 	}
// 	return false;
// }

// function toggleDone(event) {
// 	if (checkIfDone(event.target)) {
// 		console.log('Hello')
// 		event.target.classList.remove('done');
// 	}
// 	else {
// 		event.target.classList.add('done');
// 	}
// }

// button.addEventListener("click", addListAfterClick);
// input.addEventListener("keypress", addListAfterKeypress);

// for (var i = listItems.length - 1; i >= 0; i--) {
// 	listItems[i].addEventListener("click", toggleDone);
// 	console.log('Added to ' + listItems[i].innerHTML)
// }
