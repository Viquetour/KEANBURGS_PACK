
// preloader


window.onload = function() {
  var loadingElement = document.getElementById("loading");
  if (loadingElement) {
      loadingElement.style.transition = "opacity 1.7s"; 
      loadingElement.style.opacity = "0"; 
      setTimeout(function() {
          loadingElement.style.display = "none"; 
      }, 1700); 
  }
};

// mobile nav toggler

document.addEventListener('click', function(e) {
  var mobileNavToggle = document.querySelector('.mobile-nav-toggle');
  var navbar = document.querySelector('#navbar');
  
  if (mobileNavToggle && e.target === mobileNavToggle) {
      navbar.classList.toggle('navbar-mobile');
      mobileNavToggle.classList.toggle('bi-list');
      mobileNavToggle.classList.toggle('bi-x');
  }
});


// mobile nav dropdown
var navbar = document.querySelector('.navbar');

if (navbar) {
  navbar.addEventListener('click', function(e) {
    // Check if the clicked element is a direct child of .dropdown and is an <a> tag
    if (
      e.target.parentNode.classList.contains('dropdown') &&
      e.target.tagName === 'A' &&
      navbar.classList.contains('navbar-mobile')
    ) {
      e.preventDefault();
      
      // Toggle the 'dropdown-active' class on the next sibling of the clicked <a> tag
      var dropdownContent = e.target.nextElementSibling;
      if (dropdownContent) {
        dropdownContent.classList.toggle('dropdown-active');
      }
    }
  }, true);
}



