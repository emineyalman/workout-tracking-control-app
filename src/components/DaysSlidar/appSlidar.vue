<template>
  <div class="glide">
    <div class="glide__track" data-glide-el="track">
      <ul class="glide__slides">
        <!-- Glide.js içeriği buraya eklenecek -->
      </ul>
    </div>
  </div>
</template>

<script>
import Glide from "@glidejs/glide";

export default {
  data() {
    return {
      glideOptions: {
        type: "carousel",
        startAt: 0,
        perView: 3,
        // ... diğer Glide.js seçenekleri
      },
      slides: [
        { id: 1, content: "Slayt 1 içeriği" },
        { id: 2, content: "Slayt 2 içeriği" },
        { id: 3, content: "Slayt 3 içeriği" },
        // ... diğer slaytlar
      ],
    };
  },
  mounted() {
    new Glide(".glide", this.glideOptions).mount();
  },
};
</script>

<style>
/* Glide.js stilleri buraya eklenebilir (isteğe bağlı) */
</style>
