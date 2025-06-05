<template>
  <div class="offers-page">
    <section class="header">
      <h1 class="main-title">Our Special Offers</h1>
      <p class="subtitle">
        Get the best value from our top services and packages.
      </p>
    </section>

    <section class="offers-list">
      <!-- Loop through offers and display each one -->
      <div v-for="(offer, index) in offers" :key="offer.id" class="offer-box">
        <!-- Offer image from API -->
        <img :src="offer.download_url" :alt="offer.author" class="offer-img" />
        <!-- Offer title (using author as a placeholder) -->
        <h2 class="offer-title">{{ index + 1 }}. {{ offer.author }}</h2>
        <!-- Offer description (custom or use author/other fields) -->
        <p class="offer-description">Beautiful photo by {{ offer.author }}.</p>
        <!-- Offer price -->
        <div class="offer-price">${{ offer.price }}</div>
        <button class="offer-button">Purchase</button>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "OffersPage",
  data() {
    return {
      offers: [], // Array to hold offers fetched from API
    };
  },
  mounted() {
    // Fetch images from the Picsum API when the component mounts
    fetch("https://picsum.photos/v2/list?page=1&limit=12")
      .then((response) => response.json())
      .then((data) => {
        // Add a random price to each offer
        this.offers = data.map(item => ({
          ...item,
          price: (Math.random() * 100 + 10).toFixed(2) // Generate price between $10.00 and $110.00
        }));
      })
      .catch((error) => {
        console.error("Error fetching offers:", error);
      });
  },
};
</script>

<style scoped>
.offers-page {
  max-width: 960px;
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
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* Offer image styling */
.offer-img {
  width: 100%;
  max-width: 250px;
  height: 180px;
  object-fit: cover;
  border-radius: 6px;
  margin-bottom: 1rem;
}

.offer-title {
  font-size: 1.3rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  text-align: center;
}

.offer-description {
  font-size: 1rem;
  color: #4a5568;
  margin-bottom: 1rem;
  text-align: center;
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