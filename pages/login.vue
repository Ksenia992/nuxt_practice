<template>
  <validation-observer ref="observer" v-slot="{ invalid }">
    <form @submit.prevent="submit">
      <validation-provider
        v-slot="{ errors }"
        name="login"
        rules="required|max:10"
      >
        <v-text-field
          v-model="login"
          :counter="10"
          :error-messages="errors"
          label="Login"
          required
        ></v-text-field>
      </validation-provider>

      <validation-provider
        v-slot="{ errors }"
        name="password"
        rules="required|min:8"
      >
        <v-text-field
          v-model="password"
          :error-messages="errors"
          label="Password"
          required
        ></v-text-field>
      </validation-provider>

      <v-btn class="mr-4" type="submit" :disabled="invalid"> submit </v-btn>
    </form>
  </validation-observer>
</template>

<script lang='ts'>
import { Component, Vue } from "nuxt-property-decorator";
import Localstorage from "../plugins/setUserKey";

import {
  ValidationObserver,
  ValidationProvider,
  setInteractionMode,
} from "vee-validate";
@Component({
  components: {
    ValidationProvider,
    ValidationObserver,
  },
})
export default class Login extends Vue {
  name: string = "";
  passord: string = "";
  email: string = "";

  submit() {
    this.$refs.observer.validate();
    Localstorage.set("userKey", "kfdjbfkjdsbfkjbskjf");
  }

  head() {
    return {
      headAttrs: {
        hideLeftNav: true,
        hideTopNav: true,
      },
    };
  }
}
</script>



