<template>
  <div class="main-container">
    <p v-if="seen">hello world</p>
    <h1>{{ name }}</h1>
    <button @click="counter">Click {{ count }}</button>
    <p>{{ count }}</p>
    <div v-bind:class="[activeClass, errorClass]">
      <h2 :class="{ active: isactive, 'text-danger': hasError }">
        Hello WOrld
      </h2>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      seen: true,
      count: 0,
      isactive: true,
      hasError: true,
      activeClass: "active",
      errorClass: "text-danger",
    };
  },
  watch: {
    counterincreased(newval, oldval) {
      if (oldval < newval) {
        console.log(`${this.count} has been increased`);
      }
    },
  },
  computed: {
    name: "yogesh",
  },
  methods: {
    counter() {
      this.count++;
    },
  },
  //mounted runs as soon as component is loaded
  mounted() {
    this.counter();
  },
};
</script>

<style scoped>
.main-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>