<template>
  <v-sheet class="app-hg bg-deep-purple pa-12 " rounded>
    <v-card class="mx-auto  px-6 py-8" max-width="344"
    title="Login"
    >
      <v-form
        v-model="form"
        @submit.prevent="onSubmit"
      >
        <v-text-field
          v-model="email"
          :readonly="loading"
          :rules="[required]"
          class="mb-2"
          clearable
          label="Email"
        ></v-text-field>

        <v-text-field
          v-model="password"
          :readonly="loading"
          :rules="[required]"
          clearable
          label="Password"
          placeholder="Enter your password"
        ></v-text-field>

        <br>

        <v-btn
          :disabled="!form"
          :loading="loading"
          block
          color="success"
          size="large"
          type="submit"
          variant="elevated"
        >
          Sign In
        </v-btn>
      </v-form>
      <router-link :to="{name: 'SignUp'}" class="login-style">Üye Olmak istiyorum
    </router-link>
    </v-card>
  </v-sheet>
</template>
<script>
  export default {
    data: () => ({
      form: false,
      email: null,
      password: null,
      loading: false,
    }),

    methods: {
      onSubmit () {
        if (!this.form) return

        this.loading = true

        setTimeout(() => (this.loading = false), 2000)
      },
      required (v) {
        return !!v || 'Field is required'
      },
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