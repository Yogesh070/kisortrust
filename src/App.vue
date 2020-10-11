<template>
  <div id="app">
    <!-- <Nav /> -->
    <NavBar />
    <!-- <Home /> -->
    <TextBody />
    <Footer />
    <!-- <Test /> -->
  </div>
</template>

<script>
// import Home from "./components/Home.vue";
// import Nav from "./components/Head.vue";
import TextBody from "./components/TextBody.vue";
import Footer from "./components/Footer.vue";
import NavBar from "./components/NavBar.vue";

// import Test from "./components/Test.vue";

export default {
  name: "App",
  components: {
    // Home,
    // Nav,
    NavBar,
    TextBody,
    Footer,
    // Test,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700;900&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Montserrat", sans-serif;
}
</style>
