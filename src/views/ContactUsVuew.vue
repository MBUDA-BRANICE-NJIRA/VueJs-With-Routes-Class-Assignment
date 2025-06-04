<template>
  <div class="contact-us">
    <section class="header">
      <h1 class="title">Contact Us</h1>
      <p class="subtitle">Have questions or need help? We'd love to hear from you.</p>
    </section>

    <form class="contact-form" @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="name">Full Name</label>
        <input type="text" id="name" v-model="form.name" required />
      </div>

      <div class="form-group">
        <label for="email">Email Address</label>
        <input type="email" id="email" v-model="form.email" required />
      </div>

      <div class="form-group">
        <label for="message">Message</label>
        <textarea id="message" rows="5" v-model="form.message" required></textarea>
      </div>

      <button type="submit" class="submit-button">Send Message</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "ContactUs",
  data() {
    return {
      form: {
        name: "",
        email: "",
        message: "",
      }
    };
  },
  methods: {
    handleSubmit() {
      // Placeholder for form submission logic
      console.log("Form submitted:", this.form);
      alert("Your message has been sent!");
      this.form.name = "";
      this.form.email = "";
      this.form.message = "";
    }
  }
};
</script>

<style scoped>
.contact-us {
  max-width: 720px;
  margin: auto;
  padding: 2rem;
  font-family: 'Segoe UI', sans-serif;
}

.header {
  text-align: center;
  margin-bottom: 2rem;
}

.title {
  font-size: 2rem;
  font-weight: 600;
  color: #2d3748;
}

.subtitle {
  font-size: 1.1rem;
  color: #4a5568;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

.form-group {
  display: flex;
  flex-direction: column;
}

label {
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: #2d3748;
}

input,
textarea {
  padding: 0.7rem;
  border: 1px solid #cbd5e0;
  border-radius: 6px;
  font-size: 1rem;
  resize: none;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3182ce;
  box-shadow: 0 0 0 2px rgba(49, 130, 206, 0.2);
}

.submit-button {
  background-color: #3182ce;
  color: white;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.submit-button:hover {
  background-color: #2b6cb0;
}
</style>
