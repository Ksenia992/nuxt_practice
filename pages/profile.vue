<template>
  <div>
    <h1 class="teal--text">Profile info:</h1>
    <p>Name: {{ json.name.first }}</p>
    <p>Surname: {{ json.name.last }}</p>
    <p>Gender: {{ json.gender }}</p>
    <p>Age: {{ json.dob.age }}</p>
    <p>Date of birth: {{ json.dob.date }}</p>
    <h2 class="teal--text">Contact info:</h2>
    <p>Phone number: {{ json.cell }}</p>
    <p>Email: {{ json.email }}</p>
    <p>Country: {{ json.location.country }}</p>
    <p>City: {{ json.location.city }}</p>
    <!-- <img src="this.pic" alt="avatar" /> -->
    <img :src="json.picture.large" alt="avatar" />
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from "nuxt-property-decorator";

import { UserSuperstore } from "~/store";
@Component({})
export default class Profile extends Vue {
  middleware!: "userkey";
  pic: any;
  get json(): any {
    return (this.$store.state as UserSuperstore).userStore.json;
  }

  mounted() {
    console.log(this.json);
    // if (!localStorage.getItem("userKey")) {
    //   this.$router.push("/login");
    // }
    // var reader = new FileReader();
    // if (this.json.picture.large) {
    //   this.pic = reader.readAsDataURL(this.json.picture.large);
    // }
  }
}
</script>

<style lang="scss" scoped>
</style>