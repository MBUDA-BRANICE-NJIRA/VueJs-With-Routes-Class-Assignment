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
  data() {
    return {
      offers: [
        // {
        //   title: "Startup Boost Package",
        //   description: "Perfect for new businesses – branding, website setup, and launch strategy included.",
        //   price: "$499"
        // },
        // {
        //   title: "Startup Boost Package",
        //   description: "Perfect for new businesses – branding, website setup, and launch strategy included.",
        //   price: "$499"
        // },
        // {
        //   title: "Startup Boost Package",
        //   description: "Perfect for new businesses – branding, website setup, and launch strategy included.",
        //   price: "$499"
        // },
        // {
        //   title: "Startup Boost Package",
        //   description: "Perfect for new businesses – branding, website setup, and launch strategy included.",
        //   price: "$499"
        // },
        // {
        //   title: "Premium Support Plan",
        //   description: "Get 24/7 expert assistance, priority handling, and monthly performance reviews.",
        //   price: "$149/mo"
        // },
        // {
        //   title: "Social Media Mastery",
        //   description: "Comprehensive social media management with content creation and analytics.",
        //   price: "$299/month"
        // },
        // {
        //   title: "E-commerce Essentials",
        //   description: "Everything you need to launch and grow your online store, from setup to marketing.",
        //   price: "$799"
        // },
        // {
        //   title: "Annual Service Bundle",
        //   description: "Full access to all services with a 25% discount for yearly subscribers.",
        //   price: "$1199/year"
        // },
        // {
        //   title: "Startup Boost Package",
        //   description: "Perfect for new businesses – branding, website setup, and launch strategy included.",
        //   price: "$499"
        // },
        // {
        //   title: "Premium Support Plan",
        //   description: "Get 24/7 expert assistance, priority handling, and monthly performance reviews.",
        //   price: "$149/mo"
        // },
        // {
        //   title: "Social Media Mastery",
        //   description: "Comprehensive social media management with content creation and analytics.",
        //   price: "$299/month"
        // },
        // {
        //   title: "E-commerce Essentials",
        //   description: "Everything you need to launch and grow your online store, from setup to marketing.",
        //   price: "$799"
        // },
        // {
        //   title: "Annual Service Bundle",
        //   description: "Full access to all services with a 25% discount for yearly subscribers.",
        //   price: "$1199/year"
        // }
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
