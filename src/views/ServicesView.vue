<template>
  <div class="services-page">
    <!-- Title Section -->
    <section class="header">
      <h1 class="main-title">Our Services</h1>
      <p class="subtitle">We deliver reliable and scalable digital solutions tailored to your needs.</p>
    </section>

    <!-- Services List -->
    <section class="services-section">
      <div v-for="(service, index) in services" :key="index" class="service-box">
        <div class="icon">
          <i :class="service.icon"></i>
        </div>
        <div class="text">
          <h2>{{ service.title }}</h2>
          <p>{{ service.description }}</p>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="cta">
      <p>Have a project in mind?</p>
      <router-link to="/contact" class="cta-button">Let’s Talk</router-link>
    </section>
  </div>
</template>

<script>
export default {
  name: "ServicesPage",
  data() {
    return {
      services: [
        {
          title: "Web Development",
          description: "We build responsive and scalable web applications.",
          icon: "fas fa-laptop-code"
        },
        {
          title: "Mobile Apps",
          description: "Cross-platform mobile apps for iOS and Android.",
          icon: "fas fa-mobile-alt"
        },
        {
          title: "UI/UX Design",
          description: "User-centered design to enhance usability and experience.",
          icon: "fas fa-palette"
        },
        {
          title: "Cloud Services",
          description: "Secure and flexible cloud infrastructure setup.",
          icon: "fas fa-cloud"
        },
        {
          title: "E-commerce",
          description: "End-to-end e-commerce solutions for your business.",
          icon: "fas fa-shopping-cart"
        },
        {
          title: "Support & Maintenance",
          description: "Ongoing support and updates for all delivered projects.",
          icon: "fas fa-tools"
        }
      ]
    };
  }
};
</script>

<style scoped>
.services-page {
  max-width: 960px;
  margin: auto;
  padding: 2rem;
  font-family: 'Segoe UI', sans-serif;
}

.header {
  text-align: center;
  margin-bottom: 3rem;
}

.main-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: #2d3748;
}

.subtitle {
  color: #4a5568;
  font-size: 1.1rem;
}

.services-section {
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
}

.service-box {
  background: #f7fafc;
  padding: 1.5rem;
  border-radius: 8px;
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  border: 1px solid #e2e8f0;
}

.icon {
  font-size: 1.8rem;
  color: #3182ce;
  margin-top: 4px;
}

.text h2 {
  margin: 0;
  font-size: 1.2rem;
  font-weight: 600;
  color: #2d3748;
}

.text p {
  margin-top: 0.25rem;
  font-size: 0.95rem;
  color: #4a5568;
}

.cta {
  margin-top: 3rem;
  text-align: center;
  font-size: 1.1rem;
}

.cta-button {
  display: inline-block;
  margin-top: 1rem;
  background: #3182ce;
  color: white;
  padding: 0.6rem 1.2rem;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 600;
  transition: background 0.2s ease;
}

.cta-button:hover {
  background: #2b6cb0;
}
</style>
