<template>
  <vscol1>
    <div class="left-top">
      <h1>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia, quo
        earum iusto blanditiis non doloribus voluptatibus quibusdam eligendi
        labore assumenda.
      </h1>
      <a href="#">Lorem ipsum dolor sit amet.</a>
    </div>
    <div class="right-top" style="height: 100vh"></div>
  </vscol1>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
    };
  },
};
</script>
<style scoped>
.left-top {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.left-top h1 {
  display: block;
  width: 50%;
  font-weight: 900;
}

.right-top {
  height: 100%;
  background-image: url("https://www.unicef.org/rosa/sites/unicef.org.rosa/files/styles/hero_desktop/public/UN0284179_1.jpg?itok=S8ZWw9FB");
  background-size: cover;
}
@media only screen and (max-width: 750px) {
  h1 {
    font-size: 1.5rem;
  }
}
</style>