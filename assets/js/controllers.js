var app = angular.module("myApp");



// initiating GLightbox for my gallery images

app.directive('galleryLightbox', function() {
  return {
    restrict: 'C', // Apply this directive to elements with the class "gallery-lightbox"
    link: function(scope, element) {
      // Initiate gallery lightbox when the element is loaded
      element.ready(function() {
        GLightbox({
          selector: ".gallery-lightbox"
        });
      });
    }
  };
});


// controller for the ticker

app.controller("tickerController", function($scope, $http, $interval) {
  $scope.latitude = 0; 
  $scope.longitude = 0;
  $scope.locationData = "";

  $scope.updateTickerContent = function () {
    // paste your API key here
    const apiKey = ""; 
    const latitude = $scope.latitude;
    const longitude = $scope.longitude;


    $http
      .get(`https://us1.locationiq.com/v1/reverse.php?key=${apiKey}&lat=${latitude}&lon=${longitude}&format=json`)
      .then(function (response) {
      
        $scope.locationData = response.data.display_name;
        updateTicker(); 
      })
      .catch(function (error) {
        console.error("Error:", error);
      });
  };

  function updateTicker() {
    const currentDate = new Date().toLocaleString();
    $scope.tickerContent = `${currentDate} | Location: ${$scope.locationData}`;
  }

  // Initial update
  $scope.updateTickerContent();

  // Update the ticker content every second
  $interval($scope.updateTickerContent, 1000);
  
});

// bact to top

app.directive('backToTop', function() {
  return {
    restrict: 'A',
    link: function(scope, element) {
      angular.element(window).on('scroll', function() {
        if (this.scrollY > 100) {
          element.addClass('active');
        } else {
          element.removeClass('active');
        }
      });
    }
  };
});

app.controller('SliderController', function($scope) {
  // Define your functions and variables here
  $scope.initializeSwipers = function() {
    // Testimonials slider
    new Swiper('.events-slider', {
      speed: 600,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      },
      slidesPerView: 'auto',
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      }
    });

    // Testimonials slider
    new Swiper('.testimonials-slider', {
      speed: 600,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      },
      slidesPerView: 'auto',
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      }
    });
  };

  // Call the initialization function
  $scope.initializeSwipers();
});

app.controller('headerController', ['$scope', '$window', '$location', function($scope, $window, $location) {
  // Your existing code for scrolling behavior
 $scope.headerScrolled = false;
  $scope.topbarScrolled = false;
  $scope.disclaimerScrolled =false;
  $scope.closeScrolled = false;


  angular.element($window).on('scroll', function() {
    $scope.$apply(function() {
      // Your existing code for scroll behavior
      $scope.headerScrolled = ($window.scrollY > 100);
      $scope.topbarScrolled = ($window.scrollY > 100);
      $scope.disclaimerScrolled =($window.scrollY > 100);
      $scope.closeScrolled =($window.scrollY > 100);
    });
  });

  // Initialize showDisclaimer to false to hide the disclaimer initially
  $scope.showDisclaimer = false;

  // Function to toggle the disclaimer visibility
  $scope.toggleDisclaimer = function() {
    $scope.showDisclaimer = !$scope.showDisclaimer;
  };

  // Function to hide the disclaimer
  $scope.hideDisclaimer = function() {
    $scope.showDisclaimer = false;
  };

  // Function to check if a route is active
  $scope.isActive = function(route) {
    // return route === $location.path();
    return $location.path().startsWith(route);
  };
}]);

// home page controller

app.controller("HomeController", function($scope) {
  // Controller logic for the Home page
  $scope.heroCarouselIndicators = [];

  
  var heroCarouselItems = [...document.querySelectorAll('#heroCarousel .carousel-item')];

  heroCarouselItems.forEach(function(item, index) {
    var indicator = {
      index: index,
      active: (index === 0) 
    };

    $scope.heroCarouselIndicators.push(indicator);
  });

});


app.controller("TicketsController", function($scope) {
  // Controller logic for the Tickets page
});

app.controller("RestaurantController", function($scope) {
  // Controller logic for the Restaurant page
});

app.controller("GalleryController", function($scope) {
  // Controller logic for the Gallery page
});

app.controller("ContactController", function($scope) {
  // Controller logic for the Contact page
});

app.controller("AboutController", function($scope) {
  // Controller logic for the About page
});

// Define the AngularJS controller for the booking page
app.controller("BookingsController", function($scope) {

  // Initialize the form data object with empty fields
  $scope.currentDate = new Date();

  $scope.formData = {
    name: "",
    email: "",
    phone: "",
    date: "",
    tickets: "",
    numberOfTickets: 0,
    message: "",
  };

  // Initialize price, total price, and discount message variables
  $scope.price = 0;
  $scope.totalPrice = 0;
  $scope.showDiscountMessage = false;

  // Function to update the total price based on user selections
  $scope.updateTotalPrice = function () {
    // Logic to calculate ticket prices based on the selected ticket type
    if ($scope.formData.tickets === "Weekend Extravaganza") {
      $scope.price = 160; 
    } else if ($scope.formData.tickets === "Family Fun-tastic") {
      $scope.price = 260;
    } else if ($scope.formData.tickets === "Weekdays Frenzy") {
      $scope.price = 99; 
    }

    // Check if the discount condition is met
    if ($scope.formData.numberOfTickets > 3) {
      $scope.showDiscountMessage = true;
      var total = $scope.price * $scope.formData.numberOfTickets;
      var discountAmount = (total * 30) / 100; 
      $scope.totalPrice = total - discountAmount; 
    } else {
      $scope.showDiscountMessage = false;
      $scope.totalPrice = $scope.price * $scope.formData.numberOfTickets;
    }
  };

  // Create a Bootstrap modal instance
  var bookingModal = new bootstrap.Modal(document.getElementById('bookingModal'));

  // Function to submit the form and display the modal
  $scope.submitForm = function () {
    if ($scope.myForm.$valid) {
      bookingModal.show(); // Show the Bootstrap modal
    } else {
      alert('Form is not valid. Please correct the errors.');
    }
  }

  // Function to confirm the form submission and reset the form
  $scope.confirmForm = function() {
    // Clear the form fields and reset form state
    $scope.formData = {
      name: "",
      email: "",
      phone: "",
      date: "",
      tickets: "",
      numberOfTickets: 0,
      message: "",
    };

    $scope.myForm.$setPristine();
    $scope.myForm.$setUntouched();
    bookingModal.hide(); // Hide the Bootstrap modal
  }
});


  






  









