<template>
  <div class="page-container">
    <nav class="navbar">
      <div class="navbar-logo">Branice</div>
      <div class="navbar-links">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/services">Services</router-link>
        <router-link to="/Testimonial">Testimonials</router-link>
        <router-link to="/offers">Offers</router-link>
        <router-link to="/contact">Contact Us</router-link>
      </div>
    </nav>
    
    <main class="main-content">
      <router-view />
    </main>
    
    <footer class="footer">
      <div class="footer-container">
        <div class="footer-brand">
          <div class="footer-logo">Branice</div>
          <p class="footer-tagline">Your success is our mission</p>
          <div class="social-links">
            <a href="#" class="social-icon"><i class="fab fa-facebook-f"></i></a>
            <a href="#" class="social-icon"><i class="fab fa-twitter"></i></a>
            <a href="#" class="social-icon"><i class="fab fa-instagram"></i></a>
            <a href="#" class="social-icon"><i class="fab fa-linkedin-in"></i></a>
          </div>
        </div>
        
        <div class="footer-links">
          <div class="footer-column">
            <h3 class="footer-title">Quick Links</h3>
            <ul>
              <li><router-link to="/">Our progress</router-link></li>
              <li><router-link to="/about">Projects</router-link></li>
              <li><router-link to="/services">Parteners</router-link></li>
              <li><router-link to="/Testimonial">More</router-link></li>
            </ul>
          </div>
          
          <div class="footer-column">
            <h3 class="footer-title">Services</h3>
            <ul>
              <li><a href="#">Service One</a></li>
              <li><a href="#">Service Two</a></li>
              <li><a href="#">Service Three</a></li>
              <li><a href="#">Service Four</a></li>
            </ul>
          </div>
          
          <div class="footer-column">
            <h3 class="footer-title">Contact</h3>
            <ul class="contact-info">
              <li><i class="fas fa-map-marker-alt"></i> Nairobi, Kenya</li>
              <li><i class="fas fa-phone"></i>+254 792 522 646</li>
              <li><i class="fas fa-envelope"></i>mbudanjira@gmail.com</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div class="footer-bottom">
        <div class="footer-container">
          <p>&copy; 2025 Branice. All rights reserved.</p>
          <div class="legal-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
// import ImageCarousel from './components/ImageCarousel.vue'
export default {
  name: 'App',
  // components: { ImageCarousel }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Page Layout */
.page-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex: 1;
}

/* Navigation Styles (your existing styles) */
nav.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  padding: 1rem 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  position: sticky;
  top: 0;
  z-index: 1000;
}

.navbar-logo {
  font-size: 1.5rem;
  font-weight: 700;
  color: #2c3e50;
}

.navbar-links {
  display: flex;
  gap: 1.5rem;
}

.navbar-links a {
  text-decoration: none;
  font-weight: 500;
  color: #2c3e50;
  position: relative;
  transition: color 0.3s ease;
}

.navbar-links a::after {
  content: "";
  display: block;
  height: 2px;
  width: 0;
  background-color: #42b983;
  transition: width 0.3s ease;
  position: absolute;
  bottom: -5px;
  left: 0;
}

.navbar-links a:hover {
  color: #42b983;
}

.navbar-links a:hover::after,
.navbar-links a.router-link-exact-active::after {
  width: 100%;
}

.navbar-links a.router-link-exact-active {
  color: #42b983;
}

@media (max-width: 768px) {
  .navbar {
    flex-direction: column;
    align-items: flex-start;
  }

  .navbar-links {
    flex-direction: column;
    gap: 0.75rem;
    margin-top: 0.75rem;
  }
}

/* Footer Styles */
.footer {
  background-color: #2c3e50;
  color: #ffffff;
  padding: 3rem 0 0;
  margin-top: 3rem;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
}

.footer-brand {
  flex: 1 1 300px;
}

.footer-logo {
  font-size: 1.8rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 1rem;
}

.footer-tagline {
  color: #ecf0f1;
  margin-bottom: 1.5rem;
  font-size: 1rem;
  line-height: 1.6;
}

.social-links {
  display: flex;
  gap: 1rem;
}

.social-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  color: #ffffff;
  transition: all 0.3s ease;
}

.social-icon:hover {
  background-color: #42b983;
  transform: translateY(-3px);
}

.footer-links {
  flex: 2 1 600px;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
}

.footer-column {
  flex: 1 1 200px;
}

.footer-title {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: #42b983;
  position: relative;
  padding-bottom: 0.5rem;
}

.footer-title::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 40px;
  height: 2px;
  background-color: #42b983;
}

.footer-column ul {
  list-style: none;
}

.footer-column li {
  margin-bottom: 0.8rem;
}

.footer-column a {
  color: #ecf0f1;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-column a:hover {
  color: #42b983;
}

.contact-info li {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-bottom: 1rem;
}

.contact-info i {
  color: #42b983;
}

.footer-bottom {
  background-color: rgba(0, 0, 0, 0.2);
  padding: 1.5rem 0;
  margin-top: 3rem;
}

.footer-bottom .footer-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.footer-bottom p {
  font-size: 0.9rem;
  color: #bdc3c7;
}

.legal-links {
  display: flex;
  gap: 1.5rem;
}

.legal-links a {
  color: #bdc3c7;
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.3s ease;
}

.legal-links a:hover {
  color: #42b983;
}

/* Responsive Footer */
@media (max-width: 768px) {
  .footer-container {
    flex-direction: column;
  }
  
  .footer-links {
    flex-direction: column;
  }
  
  .footer-bottom .footer-container {
    flex-direction: column;
    text-align: center;
  }
  
  .legal-links {
    margin-top: 1rem;
  }
}
</style>

<!-- Add this in your main HTML file or layout -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">