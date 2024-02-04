<template>
  <div>
    <h1>OneDay</h1>
    <app-slidar />
    <MySlidar />
  </div>
</template>

<script>
import MySlidar from "@/components/DaysSlidar/MySlidar.vue";

export default {
  components: {
    MySlidar,
  },
};
</script>