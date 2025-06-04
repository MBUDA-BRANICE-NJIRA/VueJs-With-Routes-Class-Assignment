<template>
  <div class="carousel">
    <button class="carousel-btn left" @click="prev">&#10094;</button>
    <img :src="images[current]" class="carousel-img" alt="carousel image" />
    <button class="carousel-btn right" @click="next">&#10095;</button>
  </div>
</template>

<script>
export default {
  name: 'ImageCarousel',
  data() {
    return {
      current: 0,
      images: [
  require('@/assets/image1.jpg'),
  require('@/assets/image 2.jpg'),
  require('@/assets/image3.jpg'),
  require('@/assets/image 4.jpg'),
  require('@/assets/image 5.jpg'),
  require('@/assets//image6.jpg'),
  require('@/assets/imgage7.jpeg'),
]
    }
  },
  methods: {
    next() {
      this.current = (this.current + 1) % this.images.length;
    },
    prev() {
      this.current = (this.current - 1 + this.images.length) % this.images.length;
    }
  }
}
</script>

<style scoped>
.carousel {
  position: relative;
  width: 100%;
  max-width: 600px;
  margin: 2rem auto;
  overflow: hidden;
  text-align: center;
}
.carousel-img {
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 10px;
}
.carousel-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: #42b983;
  color: #fff;
  border: none;
  font-size: 2rem;
  padding: 0 1rem;
  cursor: pointer;
  border-radius: 50%;
  opacity: 0.7;
  z-index: 2;
}
.carousel-btn.left {
  left: 10px;
}
.carousel-btn.right {
  right: 10px;
}
</style>