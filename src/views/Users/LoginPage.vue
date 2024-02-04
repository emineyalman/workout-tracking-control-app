<template>
  <v-sheet class="app-hg bg-deep-purple pa-12 " rounded>
    <v-card class="mx-auto  px-6 py-8" max-width="344"
    title="Login"
    >
      <v-form
        v-model="form"
        @submit.prevent="onSubmitLoading"
      >
        <v-text-field
          v-model="userData.email"
          :readonly="loading"
          :rules="[required]"
          class="mb-2"
          clearable
          label="Email"
        ></v-text-field>

        <v-text-field
          v-model="userData.password"
          :readonly="loading"
          :rules="[required]"
          clearable
          label="Password"
          placeholder="Enter your password"
        ></v-text-field>

        <br>

        <v-btn
        @click="onSubmit"
          :disabled="!form"
          :loading="loading"
          block
          color="success"
          size="large"
          type="submit"
          variant="elevated"
        >
         Login
        </v-btn>
      </v-form>
      <router-link :to="{name: 'SignUp'}" class="login-style">Üye Olmak istiyorum
    </router-link>
    </v-card>
  </v-sheet>
</template>
<script>

import CryptoJS from 'crypto-js'
  export default {
    data() {
      return{
      form: false,
      loading: false,
     userData:{
     email: null,
     password: null,
    }
  }
 },
    methods: {
      onSubmitLoading () {
        if (!this.form) return

        this.loading = true

        setTimeout(() => (this.loading = false), 2000)
      },
      required (v) {
        return !!v || 'Field is required'

        
      },
      onSubmit() {
      const password = CryptoJS.HmacSHA1(this.userData.password, this.$store.getters._saltKey).toString();
      this.$appAxios
        .get(`/users?email=${this.userData.email}&password=${password}`)
        .then(login_response => {
          if (login_response?.data?.length > 0) {
            this.$store.commit("setUser", login_response?.data[0]);
            this.$router.push({ name: "HomePage" });
            console.log(login_response)
          } else {
            alert("Böyle bir kullanıcı bulunamadı...");
          }
        })
        .catch(e => console.log(e));
      // .finally(() => this.loader = false)
    }
    },
  }
</script>

<style scoped>
.app-hg{
  height: calc(100% - 100px);
}
.login-style{
  font-size: 13px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-top: 20px;
}
</style>