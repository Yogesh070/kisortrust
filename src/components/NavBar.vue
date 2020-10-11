<template>
  <div>
    <nav>
      <ul>
        <li v-for="item in navItem" :key="item.text">{{ item.text }}</li>
      </ul>
    </nav>
    <div class="top-container">
      <div class="top-child left-top">
        <h1>
          THE OPEN SOCIETY FOUNDATIONS WORK TO BUILD VIBRANT AND INCLUSIVE
          DEMOCRACIES WHOSE GOVERNMENTS ARE ACCOUNTABLE TO THEIR CITIZENS.
        </h1>
      </div>
      <div class="top-child right-top"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navItem: [
        { text: "WHO ARE WE" },
        { text: "WHO WE ARE" },
        { text: "WHAT WE DO" },
      ],
    };
  },
};
</script>

<style scoped>
nav {
  padding: 2rem;
}
nav ul {
  display: flex;
  justify-content: flex-end;
}
nav ul li {
  list-style: none;
  margin-left: 2rem;
}
.top-container {
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
}
.top-container .left-top h1 {
  padding: 0 8rem;
}
.top-child {
  flex: 1;
}
.right-top {
  background-image: url("https://www.unicef.org/rosa/sites/unicef.org.rosa/files/styles/hero_desktop/public/UN0284179_1.jpg?itok=S8ZWw9FB");
  background-size: cover;
}
.left-top {
  display: flex;
  justify-content: center;
  align-items: center;
  /* width: 50px; */
}
.left-top h1 {
  /* max-width: 529px; */
  font-size: 3rem;
  line-height: 2.7rem;
}

@media only screen and (max-width: 990px) {
  .top-container {
    flex-direction: column;
  }
}
</style>