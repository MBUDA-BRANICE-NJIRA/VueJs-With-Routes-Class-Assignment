<template>
  <div class="testimonials-page">
    <section class="header">
      <h1 class="main-title">What Our Clients Say</h1>
      <p class="subtitle">
        Real feedback from our happy customers and partners.
      </p>
    </section>

    <section class="testimonials-list">
      <div
        v-for="(testimonial, index) in testimonials"
        :key="index"
        class="testimonial-box"
      >
        <img
          :src="testimonial.image"
          alt="Photo of {{ testimonial.name }}"
          class="testimonial-img"
        />
        <p class="quote">“{{ testimonial.quote }}”</p>
        <div class="client-info">
          <strong>{{ testimonial.name }}</strong>
          <span class="position">{{ testimonial.position }}</span>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "TestimonialsPage",
  data() {
    return {
      testimonials: [
        {
          image: require("../assets/person1.jpg"),
          name: "Jane Doe",
          position: "CEO, Tech Innovators",
          quote:
            "Their team was incredibly responsive and delivered our platform ahead of schedule. Highly recommend!",
        },
        {
          image: require("../assets/person 2.jpeg"),
          name: "Sarah Johnson",
          position: "Founder, BNJConnect",
          quote:
            "Reliable, professional, and results-driven. We couldn’t be happier with the outcome.",
        },
        {
          image: require("../assets/person 3.jpeg"),
          name: "Michael Smith",
          position: "Product Manager, AppHub",
          quote:
            "The user experience design exceeded our expectations. We saw a 30% boost in engagement!",
        },
        {
          image: require("../assets/peson 4.avif"),
          name: "Johnson Lee",
          position: "CTO, FinTech Solutions",
          quote:
            "Their attention to detail and innovative approach transformed our product. A pleasure to work with!",
        },
      ],
    };
  },
};
</script>

<style scoped>
.testimonials-page {
  max-width: 900px;
  margin: auto;
  padding: 2rem;
  font-family: "Segoe UI", sans-serif;
}

.header {
  text-align: center;
  margin-bottom: 2rem;
}

.main-title {
  font-size: 2.3rem;
  font-weight: bold;
  color: #2d3748;
}

.subtitle {
  color: #4a5568;
  font-size: 1.1rem;
}

.testimonials-list {
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
}

.testimonial-box {
  background: #f7fafc;
  padding: 1.5rem;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
  color: #2d3748;
  font-size: 1rem;
}

.quote {
  font-style: italic;
  color: #2d3748;
  margin-bottom: 1rem;
}

.client-info {
  font-size: 0.95rem;
  color: #4a5568;
}

.position {
  display: block;
  font-size: 0.85rem;
  color: #718096;
}
.testimonial-img {
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 1rem;
  border: 2px solid #42b983;
}
</style>
