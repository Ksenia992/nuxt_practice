<template>
  <v-main>
    <h1>Kitty</h1>
  </v-main>
</template>

<script>
export default {
  middleware: "userkey",
};
</script>

<style lang="scss" scoped>
.v-main {
  background: url(https://image.shutterstock.com/image-photo/arad-romania-september-30-2012-260nw-208511908.jpg);
}
</style>