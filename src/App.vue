<template>
  <nav class="navbar">
    <div class="navbar-logo">Branice Tech</div>
    <div class="navbar-links">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/services">Services</router-link>
      <router-link to="/testimonials">Testimonials</router-link>
      <router-link to="/offers">Offers</router-link>
      <router-link to="/contact">Contact Us</router-link>
    </div>
  </nav>
  <router-view />
</template>



<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

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

</style>
