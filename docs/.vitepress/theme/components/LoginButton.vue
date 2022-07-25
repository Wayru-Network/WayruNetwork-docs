<template>
  <div>
    <button @click="login()">Sign In</button>
  </div>
</template>

<script>
import auth from "../../../auth";
export default {
  props: ["client"],
  methods: {
    async login() {
      await auth.loginWithPopup(this.client);
      this.$emit("login-complete");
    },
  },
};
</script>