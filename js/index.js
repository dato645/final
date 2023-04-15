// var burgerButton = document.getElementById("burgerButton");
var burgerMenu = document.getElementById("burgerMenu");

// burgerButton.addEventListener("click", () => {
    // navEl.classList.toggle("
    // navEl.className = "show";
    // olOn.classList.toggle("show"); 
// });

function toggleMenu() {
    burgerMenu.classList.toggle("show");
}

// function showMenu() {
//     burgerMenu.style.display = "block";
// }

// function closeMenu() {
//     burgerMenu.style.display = "none";
// }
function logIn(){
   const isConfirmed = confirm("Are you sure you want to")
   if (isConfirmed) {
       window.open('./login.html');
   }
   return isConfirmed
}

// function clickMenuItem(menuItem){
//     alert('Clicked: ' + menuItem) 
// }
