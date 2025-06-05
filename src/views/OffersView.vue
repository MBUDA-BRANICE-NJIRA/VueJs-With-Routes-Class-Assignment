<template>
  <div class="offers-page">
    <section class="header">
      <h1 class="main-title">Our Special Offers</h1>
      <p class="subtitle">Get the best value from our top services and packages.</p>
    </section>

    <section class="offers-list">
      <div v-for="(offer, index) in offers" :key="index" class="offer-box">
        <h2 class="offer-title">{{ index + 1 }}. {{ offer.title }}</h2>
        <p class="offer-description">{{ offer.description }}</p>
        <div class="offer-price">{{ offer.price }}</div>
        <button class="offer-button">Purchase</button>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "OffersPage",
  mounted() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      // Replace with your actual API endpoint
      .then(response => response.json())
      .then(data => {
        this.offers = data;
      })
      .catch(error => {
        console.error("Error fetching offers:", error);
      });
    
  },
  data() {
    return {
      offers: [
       
      ]
    };
  }
};
</script>

<style scoped>
.offers-page {
  max-width: 960px;
  margin: auto;
  padding: 2rem;
  font-family: 'Segoe UI', sans-serif;
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
  font-size: 1.1rem;
  color: #4a5568;
}

.offers-list {
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
}

.offer-box {
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 1.5rem;
  background-color: #f7fafc;
  color: #2d3748;
}

.offer-title {
  font-size: 1.3rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.offer-description {
  font-size: 1rem;
  color: #4a5568;
  margin-bottom: 1rem;
}

.offer-price {
  font-size: 1.1rem;
  font-weight: bold;
  color: #3182ce;
  margin-bottom: 1rem;
}

.offer-button {
  padding: 0.5rem 1rem;
  background-color: #3182ce;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.95rem;
  transition: background-color 0.3s ease;
}

.offer-button:hover {
  background-color: #2b6cb0;
}
</style>
