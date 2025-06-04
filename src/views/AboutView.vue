<template>
  <div class="about-page">
    <!-- Animated Hero Section -->
    <section class="hero-section">
      <div class="hero-content">
        <h1 class="hero-title">
          <span class="title-line">We Build</span>
          <span class="title-line accent">Digital Experiences</span>
        </h1>
        <p class="hero-subtitle">Crafting innovative solutions since 2015</p>
        <div class="scroll-indicator">
          <span>Scroll to explore</span>
          <i class="fas fa-chevron-down"></i>
        </div>
      </div>
    </section>

    <!-- Mission Section with Animated Border -->
    <section class="mission-section">
      <div class="section-header">
        <h2 class="section-title">
          <span class="title-decoration"></span>
          Our Mission
        </h2>
      </div>
      <div class="mission-content">
        <p class="mission-statement">To empower businesses through <span class="highlight">cutting-edge technology</span> and <span class="highlight">strategic thinking</span>, creating digital solutions that drive growth and innovation.</p>
      </div>
    </section>

    <!-- Values Section with Interactive Cards -->
    <section class="values-section">
      <div class="section-header">
        <h2 class="section-title">
          <span class="title-decoration"></span>
          Our Core Values
        </h2>
      </div>
      <div class="values-grid">
        <div 
          v-for="(value, index) in values" 
          :key="index" 
          class="value-card"
          :style="{ '--delay': index * 0.1 + 's' }"
          @mouseover="hoveredValue = index"
          @mouseleave="hoveredValue = null"
        >
          <div class="value-icon">
            <i :class="value.icon"></i>
          </div>
          <h3 class="value-title">{{ value.title }}</h3>
          <p class="value-description">{{ value.description }}</p>
        </div>
      </div>
    </section>

    <!-- Approach Section with Timeline Effect -->
    <section class="approach-section">
      <div class="section-header">
        <h2 class="section-title">
          <span class="title-decoration"></span>
          Our Approach
        </h2>
      </div>
      <div class="approach-steps">
        <div 
          v-for="(step, index) in approachSteps" 
          :key="index" 
          class="approach-step"
          :style="{ '--step': index + 1 }"
        >
          <div class="step-marker">{{ index + 1 }}</div>
          <div class="step-content">
            <h3 class="step-title">{{ step.title }}</h3>
            <p class="step-description">{{ step.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Animated CTA Section -->
    <section class="cta-section">
      <div class="cta-container">
        <h2 class="cta-title">Ready to Start Your Project?</h2>
        <p class="cta-subtitle">Let's create something amazing together</p>
        <div class="cta-buttons">
          <router-link 
            to="/contact" 
            class="cta-button primary"
          >
            Get in Touch
            <i class="fas fa-paper-plane"></i>
          </router-link>
          <router-link 
            to="/services" 
            class="cta-button secondary"
          >
            Our Services
            <i class="fas fa-arrow-right"></i>
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'EnhancedAboutPage',
  data() {
    return {
      hoveredValue: null,
      values: [
        {
          title: "Innovation",
          description: "We constantly push boundaries to deliver forward-thinking solutions",
          icon: "fas fa-lightbulb"
        },
        {
          title: "Integrity",
          description: "Honest communication and ethical practices guide our work",
          icon: "fas fa-handshake"
        },
        {
          title: "Excellence",
          description: "We pursue perfection in every detail of our deliverables",
          icon: "fas fa-medal"
        },
        {
          title: "Collaboration",
          description: "Great ideas emerge when diverse perspectives come together",
          icon: "fas fa-users"
        }
      ],
      approachSteps: [
        {
          title: "Discovery",
          description: "We begin by deeply understanding your business goals and challenges"
        },
        {
          title: "Strategy",
          description: "Our team crafts a customized plan tailored to your needs"
        },
        {
          title: "Execution",
          description: "We implement solutions with precision and technical expertise"
        },
        {
          title: "Growth",
          description: "Continuous optimization ensures long-term success"
        }
      ]
    }
  }
}
</script>

<style scoped>
/* Base Styles */
.about-page {
  font-family: 'Inter', 'Helvetica Neue', Arial, sans-serif;
  color: #2d3748;
  line-height: 1.6;
}

/* Hero Section */
.hero-section {
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
  position: relative;
  overflow: hidden;
}

.hero-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at 20% 50%, rgba(66, 153, 225, 0.1) 0%, transparent 50%);
}

.hero-content {
  max-width: 800px;
  padding: 0 2rem;
  z-index: 1;
}

.hero-title {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 1.5rem;
}

.title-line {
  display: block;
}

.accent {
  color: #4299e1;
  position: relative;
  display: inline-block;
}

.accent::after {
  content: '';
  position: absolute;
  bottom: 5px;
  left: 0;
  width: 100%;
  height: 12px;
  background-color: rgba(66, 153, 225, 0.2);
  z-index: -1;
  transform: scaleX(1.05);
}

.hero-subtitle {
  font-size: 1.25rem;
  color: #4a5568;
  max-width: 600px;
  margin: 0 auto 2rem;
}

.scroll-indicator {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #4a5568;
  font-size: 0.875rem;
  animation: bounce 2s infinite;
}

.scroll-indicator i {
  margin-top: 0.5rem;
  font-size: 1rem;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0) translateX(-50%);
  }
  40% {
    transform: translateY(-10px) translateX(-50%);
  }
  60% {
    transform: translateY(-5px) translateX(-50%);
  }
}

/* Section Common Styles */
.section-header {
  margin-bottom: 3rem;
  text-align: center;
}

.section-title {
  font-size: 2rem;
  font-weight: 700;
  position: relative;
  display: inline-block;
  padding-bottom: 1rem;
}

.section-title .title-decoration {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 50px;
  height: 3px;
  background: linear-gradient(90deg, #4299e1 0%, #38b2ac 100%);
}

/* Mission Section */
.mission-section {
  padding: 6rem 2rem;
  background-color: white;
}

.mission-content {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.mission-statement {
  font-size: 1.25rem;
  line-height: 1.8;
}

.highlight {
  background: linear-gradient(120deg, #4299e1 0%, #38b2ac 100%);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  font-weight: 600;
  padding: 0 0.2rem;
}

/* Values Section */
.values-section {
  padding: 6rem 2rem;
  background-color: #f8fafc;
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.value-card {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.03), 0 4px 6px -2px rgba(0, 0, 0, 0.02);
  transition: all 0.3s ease;
  transform: translateY(20px);
  opacity: 0;
  animation: fadeInUp 0.6s forwards;
  animation-delay: var(--delay);
}

@keyframes fadeInUp {
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.value-card:hover {
  transform: translateY(-5px) !important;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 10px 10px -5px rgba(0, 0, 0, 0.02);
}

.value-icon {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #4299e1 0%, #38b2ac 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  color: white;
  font-size: 1.5rem;
}

.value-title {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #2d3748;
}

.value-description {
  color: #4a5568;
  font-size: 0.95rem;
}

/* Approach Section */
.approach-section {
  padding: 6rem 2rem;
  background-color: white;
}

.approach-steps {
  max-width: 800px;
  margin: 0 auto;
  position: relative;
}

.approach-steps::before {
  content: '';
  position: absolute;
  top: 0;
  left: 30px;
  height: 100%;
  width: 2px;
  background: linear-gradient(to bottom, #4299e1, #38b2ac);
}

.approach-step {
  display: flex;
  margin-bottom: 3rem;
  position: relative;
  opacity: 0;
  transform: translateX(-20px);
  animation: fadeInRight 0.6s forwards;
  animation-delay: calc(var(--step) * 0.2s);
}

@keyframes fadeInRight {
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.step-marker {
  width: 60px;
  height: 60px;
  flex-shrink: 0;
  background: linear-gradient(135deg, #4299e1 0%, #38b2ac 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 700;
  font-size: 1.25rem;
  margin-right: 2rem;
  position: relative;
  z-index: 1;
}

.step-content {
  padding-top: 0.5rem;
}

.step-title {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
  color: #2d3748;
}

.step-description {
  color: #4a5568;
}

/* CTA Section */
.cta-section {
  padding: 6rem 2rem;
  background: linear-gradient(135deg, #4299e1 0%, #38b2ac 100%);
  color: white;
  text-align: center;
}

.cta-container {
  max-width: 600px;
  margin: 0 auto;
}

.cta-title {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.cta-subtitle {
  font-size: 1.125rem;
  margin-bottom: 2rem;
  opacity: 0.9;
}

.cta-buttons {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.cta-button {
  padding: 0.875rem 1.75rem;
  border-radius: 50px;
  font-weight: 600;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
}

.cta-button i {
  font-size: 0.875rem;
}

.primary {
  background: white;
  color: #4299e1;
}

.primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}

.secondary {
  background: transparent;
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.3);
}

.secondary:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(-3px);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  border-color: transparent;
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero-section {
    min-height: 70vh;
  }
  
  .mission-section,
  .values-section,
  .approach-section,
  .cta-section {
    padding: 4rem 1.5rem;
  }
  
  .approach-steps::before {
    left: 20px;
  }
  
  .step-marker {
    width: 50px;
    height: 50px;
    margin-right: 1.5rem;
  }
  
  .cta-buttons {
    flex-direction: column;
    align-items: center;
  }
  
  .cta-button {
    width: 100%;
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 2rem;
  }
  
  .hero-subtitle {
    font-size: 1rem;
  }
  
  .section-title {
    font-size: 1.5rem;
  }
  
  .mission-statement {
    font-size: 1.1rem;
  }
  
  .values-grid {
    grid-template-columns: 1fr;
  }
  
  .approach-step {
    flex-direction: column;
  }
  
  .step-marker {
    margin-right: 0;
    margin-bottom: 1rem;
  }
}
</style>