var app = angular.module("myApp", ["ngRoute"]);

app.config(function($routeProvider) {
  $routeProvider
  .when("/", {
    templateUrl: "templates/home.html",
    controller: "HomeController"
  })

    .when("/home", {
      templateUrl: "templates/home.html",
      controller: "HomeController"
    })
    .when("/tickets", {
      templateUrl: "templates/tickets.html",
      controller: "TicketsController"
    })

    .when("/restaurant", {
      templateUrl: "templates/restaurant.html",
      controller: "RestaurantController" 
    })

    .when("/gallery", {
      templateUrl: "templates/gallery.html",
      controller: "GalleryController"
    })

    .when("/contact", {
      templateUrl: "templates/contact.html",
      controller: "ContactController"
    })

    .when("/about", {
      templateUrl: "templates/about.html",
      controller: "AboutController"
    })

    .when("/bookings", {
      templateUrl: "templates/bookings.html",
      controller: "BookingsController"
    })
   
    
});