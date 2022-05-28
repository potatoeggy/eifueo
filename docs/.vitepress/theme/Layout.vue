<script setup>
import DefaultTheme from "vitepress/theme";
const { Layout } = DefaultTheme;
</script>

<template>
  <Layout></Layout>
</template>

<style>
main > .container {
  /* love that */
  max-width: 54rem !important;
}
</style>
