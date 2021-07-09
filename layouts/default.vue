<template>
  <v-app dark>
    <!-- <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
      v-if="!hideLeftNav"
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer> -->
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
      v-if="!hideTopNav"
      :collapse="!collapseOnScroll"
      :collapse-on-scroll="collapseOnScroll"
      scroll-target="#scrolling-techniques-6"
    >
      <v-checkbox
        v-model="collapseOnScroll"
        color="white"
        hide-details
      ></v-checkbox>
      <v-col cols="12" md="6">
        <v-list class="d-flex" v-if="collapseOnScroll">
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            :to="item.to"
            router
            exact
          >
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title v-text="item.title" />
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-col>
    </v-app-bar>
    <v-main class="d-flex align-center">
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>

    <v-footer :absolute="!fixed" app class="d-flex justify-center">
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script lang='ts'>
export default {
  data() {
    return {
      hideLeftNav: false,
      hideTopNav: false,
      collapseOnScroll: true,
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        // {
        //   icon: "mdi-apps",
        //   title: "Welcome",
        //   to: "/",
        // },
        {
          icon: "mdi-cards-heart",
          title: "Main",
          to: "/main",
        },
        {
          icon: "mdi-chart-bubble",
          title: "Inspire",
          to: "/inspire",
        },
        {
          icon: "mdi-cat",
          title: "Cat",
          to: "/cat",
        },
        {
          icon: "mdi-apple",
          title: "Login",
          to: "/login",
        },
        {
          icon: "mdi-account",
          title: "Profile",
          to: "/profile",
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Vuetify.js",
    };
  },
  head() {
    return {
      changed: (newInfo) => {
        // @ts-ignore
        this.hideLeftNav = newInfo.headAttrs?.hideLeftNav === true;
        // @ts-ignore
        this.hideTopNav = newInfo.headAttrs?.hideTopNav === true;
      },
    };
  },
  // mounted() {
  //   let userkey = Localstorage.get("userKey");
  //   if (userkey) {
  //     this.$router.push("/main");
  //   }
  // },
};
</script>
