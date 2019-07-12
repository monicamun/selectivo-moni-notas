<template>
  <div class="container home">
    <login v-if="!isUserLoggedIn" />
    <notes v-if="isUserLoggedIn" />
  </div>
</template>

<script>
import Login from "@/components/Login";
import Notes from "@/components/Notes";
import firebase from "firebase";
import "firebase/auth";
export default {
  name: "home",
  components: { Login, Notes },
  data() {
    return {
      isUserLoggedIn: false
    };
  },
  beforeCreate() {
    firebase.auth().onAuthStateChanged(user => {
      this.isUserLoggedIn = !!user;
    });
  }
};
</script>
