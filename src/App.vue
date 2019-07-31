<template>
  <div id="app">
    <nav>
      <div class="nav-wrapper">
        <div class="row">
          <div class="col m11">
            <a href="#" class="brand-logo">Notes</a>
          </div>
          <div class="col m1">
            <button v-if="isUserLoggedIn" v-on:click="logout">Logout</button>
          </div>
        </div>

        <!-- <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li>
            <a href="sass.html">Sass</a>
          </li>
          <li>
            <a href="badges.html">Components</a>
          </li>
          <li>
            <a href="collapsible.html">JavaScript</a>
          </li>
        </ul>-->
      </div>
    </nav>
    <div id="main">
      <router-link to="/"></router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
import firebase from "firebase";
import "firebase/auth";
export default {
  name: "App",
  data() {
    return {
      isUserLoggedIn: false
    };
  },
  methods: {
    logout() {
      firebase.auth().signOut();
    }
  },
  beforeCreate() {
    firebase.auth().onAuthStateChanged(user => {
      this.isUserLoggedIn = !!user;
    });
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#main {
  padding: 10px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #bb3a1a;
    }
  }
}
</style>
