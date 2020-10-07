<template>
  <div>
    <nav>
      <div>
        <h3>LOGO</h3>
      </div>
      <div class="nav-list">
        <ul>
          <li v-for="item in navItem" :key="item.text">{{ item.text }}</li>
        </ul>
      </div>
    </nav>
    <div class="top-container">
      <div class="left-top">
        <h1>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia, quo
          earum iusto blanditiis non doloribus voluptatibus quibusdam eligendi
          labore assumenda.
        </h1>
        <a href="#">Lorem ipsum dolor sit amet.</a>
      </div>
      <div class="right-top"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navItem: [
        { text: "WHO WE ARE" },
        { text: "WHAT WE DO" },
        { text: "HOW WE" },
        { text: "WHO ARE" },
      ],
    };
  },
};
</script>
<style scoped>
nav {
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-around;
}
.nav-list {
  width: 600px;
}
nav ul {
  display: flex;
  justify-content: space-between;
}
li {
  list-style: none;
}
.top-container {
  display: flex;
  /* justify-content: space-between; */
  height: 100vh;
}
.left-top {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 50%;
}
.left-top h1 {
  display: block;
  width: 50%;
  font-weight: 900;
}

.right-top {
  flex: 50%;
  height: 100%;
  background-image: url("https://www.unicef.org/rosa/sites/unicef.org.rosa/files/styles/hero_desktop/public/UN0284179_1.jpg?itok=S8ZWw9FB");
  background-size: cover;
}
</style>