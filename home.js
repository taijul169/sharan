// header-search-bar
const searchBtn = document.querySelector('.fa-search');
const closeBtn = document.querySelector('.fa-close');
const searchBar = document.querySelector('.search-bar');
searchBtn.addEventListener('click', () => {
    searchBar.style = "display:block";
    searchBtn.style = "display:none";
    closeBtn.style = "display:block";
});
closeBtn.addEventListener('click', () => {
    searchBar.style = "display:none";
    searchBtn.style = "display:block";
    closeBtn.style = "display:none";
});

// sidebar-collapse
const threeBar = document.querySelector('.three-bars');
const sidebarModal = document.querySelector('.sidebar-modal-section');
const sidebarcloseBtn = document.querySelector('.close-btn-sidebar');
const sidebarInner = document.querySelector('.sidebar-inner-content');
threeBar.addEventListener('click', () => {
    sidebarModal.style = "display:block";
    sidbarDisplay();
});
sidebarcloseBtn.addEventListener('click', () => {
    sidebarModal.style = "display:none";
    sidbarClose();
});
function sidbarDisplay() {
  setTimeout(function(){sidebarInner.style = "margin-right:0%";}, 100);
}
function sidbarClose() {
  setTimeout(function(){sidebarInner.style = "margin-right:-30%";}, 100);
}
//--------------active-class activation-------------------
// Get the container element
var btnContainer = document.getElementById("tab-nav");

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("nav-link");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("btn-active-bg");
    current[0].className = current[0].className.replace(" btn-active-bg", "");
    this.className += " btn-active-bg";
  });
}