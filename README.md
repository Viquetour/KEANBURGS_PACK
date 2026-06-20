# 🎢 Keansburg Pack — Amusement Park & Resort Website

[![AngularJS](https://img.shields.io/badge/AngularJS-1.8-E23237?logo=angularjs&logoColor=white)](https://angularjs.org/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5-7952B3?logo=bootstrap&logoColor=white)](https://getbootstrap.com/)
[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)

A fully responsive single-page application (SPA) for **Keansburg Pack** — an amusement park and resort located in Calabar, Nigeria. The website showcases the park's attractions, ticketing system, restaurant, gallery, and contact information, all built with AngularJS and Bootstrap.

---

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Pages & Sections](#-pages--sections)
- [Attractions](#-attractions)
- [Installation](#-installation)
- [Usage](#-usage)
- [Project Structure](#-project-structure)
- [API Integration](#-api-integration)
- [Contributing](#-contributing)
- [License](#-license)
- [Contact](#-contact)

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| **SPA Architecture** | Seamless page navigation with AngularJS routing (`ngRoute`) |
| **Hero Carousel** | Full-width image carousel with animated captions |
| **Attractions Showcase** | Tabbed display of park attractions with descriptions & images |
| **Ticket Booking** | Interactive booking form with dynamic pricing & 30% group discount (3+ tickets) |
| **Event Planning** | Birthday, private, and custom party packages with pricing |
| **Photo Gallery** | Lightbox-enabled image gallery powered by GLightbox |
| **Testimonials** | Customer reviews with star ratings in an auto-sliding carousel |
| **Live Ticker** | Real-time date, time, and location ticker in the footer |
| **Contact Form** | In-page contact form for inquiries |
| **Disclaimer Modal** | Toggleable legal disclaimer with terms of use |
| **Responsive Design** | Fully mobile-friendly layout built with Bootstrap 5 |
| **Back to Top** | Smooth scroll-to-top button |
| **Loading Animation** | Animated preloader on page load |

---

## 🛠 Tech Stack

| Technology | Purpose |
|------------|---------|
| [AngularJS 1.8](https://angularjs.org/) | Front-end MVC framework for SPA routing & data binding |
| [Bootstrap 5](https://getbootstrap.com/) | Responsive layout & UI components |
| [Swiper.js 10](https://swiperjs.com/) | Touch-enabled carousels & sliders |
| [GLightbox](https://github.com/biati-digital/glightbox) | Lightbox gallery for images |
| [Animate.css](https://animate.style/) | CSS animation library |
| [Boxicons](https://boxicons.com/) | Icon library |
| [Bootstrap Icons](https://icons.getbootstrap.com/) | Additional icon set |
| HTML5 / CSS3 | Structure & styling |
| JavaScript (ES6) | Client-side logic |

---

## 📄 Pages & Sections

### 🏠 Home (`/#/home`)
- Hero carousel with 3 slides
- "Why Choose Us" section (Dragon Arena, Business Resort, Waterpark)
- Attractions tabs (Water Pack, Zoo, Video Games, Cinema, Art Gallery)
- Events section (Birthday, Private, Custom parties)
- Gallery preview
- Customer testimonials
- Contact form

### 🎫 Tickets (`/#/tickets`)
Ticket booking page with the following pricing:

| Ticket Type | Price |
|-------------|-------|
| **Weekend Extravaganza** | $160 |
| **Family Fun-tastic** | $260 |
| **Weekdays Frenzy** | $99 |

> 🎉 **Group Discount:** 30% off when booking 4 or more tickets!

### 🍽️ Restaurant (`/#/restaurant`)
On-site restaurant information, menu, and dining experience.

### 🖼️ Gallery (`/#/gallery`)
Full photo gallery with lightbox viewing of park images and attractions.

### 📞 Contact (`/#/contact`)
Contact information and inquiry form.

### ℹ️ About (`/#/about`)
- About the park story & mission
- "Why Choose Us" section
- Professional development team profiles:
  - **Donald Ebasitamsam** — UI/UX Designer
  - **Joseph Effiong** — Project Manager
  - **William Inyang** — Senior Developer
  - **Emmanuel Ushie** — Senior Developer

### 📅 Bookings (`/#/bookings`)
Comprehensive booking system with:
- Name, email, phone, date fields
- Ticket type selection
- Number of tickets input
- Real-time price calculation
- Automatic 30% discount for groups of 4+
- Confirmation modal

---

## 🎪 Attractions

- **Dragon Arena** — Thrilling rides, dragon swing, fire rollercoaster, dinosaur park, dragon shop
- **Keansburg Business Resort** — Work-meets-leisure resort for travelers, families & organizations
- **Keansburg Waterpark** — Swimming pools, water slides, lazy rivers
- **Keansburg Zoo** — Exotic & native animal exhibits
- **Video Game Hub** — State-of-the-art gaming center with PlayStation, indoor & outdoor games
- **Cinema Hall** — Movie theater with diverse film screenings
- **Art Gallery** — Curated collection of paintings, sculptures & installations
- **Swimming Pool & Slides** — Poolside relaxation & water fun
- **Gaming Center** — Volleyball, basketball, football, indoor games
- **Swings & Playground** — Children's playground area
- **Museum** — Cultural & historical exhibits

---

## 💻 Installation

### Prerequisites
- A modern web browser (Chrome, Firefox, Edge, Safari)
- A local web server (optional but recommended for SPA routing)

### Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/Viquetour/KEANBURGS_PACK.git
   cd KEANBURGS_PACK/E-project_Website
   ```

2. **Open the application**
   - **Option A:** Open `index.html` directly in your browser (limited SPA functionality may occur)
   - **Option B (Recommended):** Serve using a local HTTP server
     ```bash
     # Using Python
     python3 -m http.server 8000

     # Using Node.js (with live-server)
     npx live-server

     # Using PHP
     php -S localhost:8000
     ```
   - Then navigate to `http://localhost:8000`

3. **Optional — Configure Location API**
   - Open `assets/js/controllers.js`
   - Find the `tickerController` and add your [LocationIQ](https://locationiq.com/) API key:
     ```javascript
     const apiKey = "YOUR_API_KEY_HERE";
     ```

---

## 🚀 Usage

- Navigate using the top navigation bar
- Browse attractions on the Home page
- Book tickets via the Tickets or Bookings page
- Explore the photo gallery with lightbox viewing
- Contact the park via the contact form
- View team information on the About page
- Toggle the Disclaimer from the navbar

---

## 📁 Project Structure

```
E-project_Website/
├── index.html                    # Main entry point (SPA shell)
├── README.md                     # Project documentation
├── assets/
│   ├── css/
│   │   ├── style.css             # Main stylesheet
│   │   └── bookings.css          # Bookings page styles
│   ├── img/                      # Images & media assets
│   │   ├── slide/                # Hero carousel slides
│   │   ├── chefs/                # Team/chef images
│   │   ├── gallery/              # Gallery images
│   │   └── testimonials/         # Testimonial avatars
│   └── js/
│       ├── routes.js             # AngularJS route configuration
│       ├── controllers.js        # All AngularJS controllers
│       └── main.js               # Main JavaScript file
├── templates/                    # AngularJS partial views
│   ├── home.html                 # Home page
│   ├── tickets.html              # Tickets page
│   ├── restaurant.html           # Restaurant page
│   ├── gallery.html              # Gallery page
│   ├── contact.html              # Contact page
│   ├── about.html                # About page
│   ├── bookings.html             # Bookings page
│   └── disclaimer.html           # Disclaimer content
└── vendor/                       # Third-party CSS/JS libraries
```

---

## 🔌 API Integration

The website integrates with the following external services:

- **[LocationIQ API](https://locationiq.com/)** — Reverse geocoding for the live ticker (requires a free API key)
- **Google Fonts** — Poppins, Satisfy, Comic Neue font families
- **CDN Libraries** — AngularJS, Swiper.js, GLightbox loaded from CDN

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📜 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

## 📞 Contact

**Keansburg Pack**  
📍 Mutala Muhammed Highway, Aptech, Calabar, Nigeria  
📞 +234 817 438 0445  
📧 keansburg@gmail.com  

**Designed & Developed by**  
[Gottlieb Groups of Companies](https://github.com/Viquetour/KEANBURGS_PACK)

---

<p align="center">
  <sub>To be the best in everything we do. 🎯</sub>
</p>