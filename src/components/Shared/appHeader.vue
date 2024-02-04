<template>
  <v-card color="grey-lighten-4" flat height="100px" rounded="0">
    <v-toolbar density="compact">
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title @click="$router.push('/')"
        >Workout Tracking</v-toolbar-title
      >

      <router-link to="/">
        <v-btn prepend-icon="mdi-list"> HomePage </v-btn>
      </router-link>

      <router-link to="/OneDay">
        <v-btn v-if="_isAuthenticated"> 1.Days </v-btn>
      </router-link>

      <router-link to="/TwoDay">
        <v-btn v-if="_isAuthenticated"> 2.Days </v-btn>
      </router-link>

      <router-link to="/AllExercise">
        <v-btn v-if="_isAuthenticated" prepend-icon="mdi-list">
          All Exercises
        </v-btn>
      </router-link>

      <router-link to="/LoginPage">
        <v-btn v-if="!_isAuthenticated" prepend-icon="mdi-list"> Login </v-btn>
      </router-link>

      <router-link to="/SignUp">
        <v-btn v-if="!_isAuthenticated" prepend-icon="mdi-list"> SignUp </v-btn>
      </router-link>

      
    </v-toolbar>
  </v-card>
</template>

  <script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["_isAuthenticated"]),
  },
};
</script>