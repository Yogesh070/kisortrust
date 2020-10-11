
<template>
  <div class="center examplex">
    <vs-navbar center-collapsed v-model="active">
      <template #left>
        <img src="/logo2.png" alt="" />
      </template>
      <vs-navbar-item :active="active == 'guide'" id="guide">
        Guide
      </vs-navbar-item>
      <vs-navbar-item :active="active == 'docs'" id="docs">
        Documents
      </vs-navbar-item>
      <vs-navbar-item :active="active == 'components'" id="components">
        Components
      </vs-navbar-item>
      <vs-navbar-item :active="active == 'license'" id="license">
        license
      </vs-navbar-item>
      <template #right>
        <vs-button flat>Get Started</vs-button>
        <vs-button>Dontate</vs-button>
      </template>
    </vs-navbar>
  </div>
</template>
<script>
export default {
  data: () => ({
    active: "guide",
  }),
};
</script>

        