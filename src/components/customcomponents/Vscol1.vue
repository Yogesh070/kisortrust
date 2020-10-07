<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<style  scoped>
/* @media screen and (max-width: 750px) {
  .container > * {
    width: 100%;
  }
}
@media screen and (min-width: 750px) {
  .container > * {
    width: 50%;
  }
} */

.container {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.container > * {
  flex: 1;
  height: 100vh;
}
@media only screen and (max-width: 750px) {
  .container {
    flex-direction: column;
    height: 75vh;
  }
}
</style>