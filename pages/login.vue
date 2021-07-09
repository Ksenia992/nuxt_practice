<template>
  <v-row>
    <v-col cols="12" md="12" class="d-flex justify-center align-center">
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
          <v-btn
            color="accent"
            :loading="loading"
            elevation="2"
            @click="facebookLog()"
            >Login with facebook account</v-btn
          >
        </form>
      </validation-observer>
    </v-col>
  </v-row>
</template>

<script lang='ts'>
import { Component, Vue } from "nuxt-property-decorator";
import Localstorage from "../plugins/setUserKey";
import { UserSuperstore } from "~/store";
import { Watch } from "vue-property-decorator";

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
  password: string = "";
  email: string = "";
  loading: boolean = false;

  get json(): any {
    return (this.$store.state as UserSuperstore).userStore.json;
  }

  submit() {
    this.$refs.observer.validate();
    Localstorage.set("userKey", "kfdjbfkjdsbfkjbskjf");
    if (this.json) {
      this.$router.push("/main");
    }
  }
  async facebookLog() {
    this.loading = true;
    await this.$store.dispatch("userStore/setJson");
    this.loading = await false;
    console.log(this.json);
    if (this.json) {
      this.$router.push("/main");
    }
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



