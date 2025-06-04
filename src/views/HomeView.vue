<template>
  <div class="home">
    <ImageCarousel />
    <!-- You can add more home content here -->
  </div>
</template>

<script>
import ImageCarousel from '@/components/ImageCarousel.vue'

export default {
  name: 'HomeView',
  components: {
    ImageCarousel
  }
}
</script>