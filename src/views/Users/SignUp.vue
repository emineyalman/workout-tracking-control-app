<template>
  <v-sheet class="my-custom-container d-flex justify-center align-center pa-12">
    <v-card class="mx-auto" max-width="344" title="User Registration"
      ><v-form v-model="form" @submit.prevent="onSubmit">
        <v-container>
          <v-text-field
            v-model="userData.first"
            :readonly="loading"
            :rules="[required]"
            color="primary"
            label="First name"
          ></v-text-field>

          <v-text-field
            v-model="userData.last"
            :readonly="loading"
            :rules="[required]"
            color="primary"
            label="Last name"
          ></v-text-field>

          <v-text-field
            v-model="userData.email"
            :readonly="loading"
            :rules="[required]"
            color="primary"
            label="Email"
          ></v-text-field>

          <v-text-field
            v-model="userData.password"
            :readonly="loading"
            :rules="[required]"
            color="primary"
            label="Password"
            placeholder="Enter your password"
          ></v-text-field>

          <v-checkbox
            v-model="userData.terms"
            :readonly="loading"
            :rules="[required]"
            color="secondary"
            label="I agree to site terms and conditions"
          ></v-checkbox>
        </v-container>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            @click="onSave"
            :disabled="!form"
            :loading="loading"
            block
            color="success"
            size="large"
            type="submit"
            variant="elevated"
          >
            Sign Up
          </v-btn>
        </v-card-actions>
      </v-form>
      <router-link :to="{ name: 'LoginPage' }" class="member"
        >Zaten üyeyim
      </router-link>
    </v-card>
  </v-sheet>
</template>
<script>
import CryptoJS from "crypto-js"

export default {
  data() {
    return {
      form: false,
      loading: false,
      userData: {
        first: null,
        last: null,
        email: null,
        password: null,
        terms: false,
      },
    };
  },
  methods: {
    onSubmit() {
      if (!this.form) return;

      this.loading = true;

      setTimeout(() => (this.loading = false), 2000);
    },
    required(v) {
      return !!v || "Field is required";
    },

    onSave() {
      const password = CryptoJS.HmacSHA1(this.userData.password, this.$store.getters._saltKey).toString();
      this.$appAxios.post("/users", { ...this.userData, password }).then(registered_user_response => {
        console.log("registered_user_response :>> ", registered_user_response);
        this.$router.push({ name: "HomePage" });
      });
  }
}
 }
</script>


<style scoped>
.my-custom-container {
  height: calc(100% - 100px);
  background-color: #683ab7;
}
.member {
  font-size: 13px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
}
</style>