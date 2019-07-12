<template>
  <div class="container">
    <div class="row">
      <form class="col s12" @submit.prevent="sendForm">
        <h3>{{currentStateText}}</h3>

        <div class="row">
          <div class="input-field col s12">
            <input id="email" type="email" class="validate" v-model="form.email" required />
            <label for="email">Email</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input id="password" type="password" class="validate" v-model="form.password" required />
            <label for="password">Password</label>
          </div>
        </div>

        <button class="waves-effect waves-light btn">
          <i class="material-icons right">cloud</i>
          {{currentStateText}}
        </button>
        <div class="row"></div>
        <div class="row">
          <a
            class="signUp"
            href="javascript:void(0)"
            @click="type = 1"
            v-if="showSignUpButton"
          >Sign Up</a>
          <a class="login" href="javascript:void(0)" @click="type = 0" v-if="showLogInButton">Log In</a>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
import "firebase/auth";

export default {
  name: "Login",
  components: {},
  data() {
    return {
      // type: 0 is login, type:1 is signup
      type: 0,
      form: {
        email: "",
        password: ""
      },
      show: true,
      error: null,
      idToken: null
    };
  },
  computed: {
    // if form is in login state, show sign up button
    showSignUpButton() {
      return this.type == 0;
    },
    // if form is in register state, show log in button
    showLogInButton() {
      return this.type === 1;
    },
    currentStateText() {
      return this.type === 0 ? "Log In" : "Sign Up";
    }
  },
  methods: {
    sendForm() {
      if (this.type === 0) {
        this.login();
      } else {
        this.signUp();
      }
    },
    login() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.form.email, this.form.password)
        .then(() => {
          this.$emit("login");
        })
        .catch(error => {
          this.error = error;
        });
    },
    signUp() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.form.email, this.form.password)
        .then(() => {
          this.$emit("login");
        })
        .catch(function(error) {
          this.error = error;
        });
    },
    getIdToken() {
      firebase
        .auth()
        .currentUser.getIdToken(/* forceRefresh */ false)
        .then(idToken => {
          // Send token to your backend via HTTPS
          this.idToken = idToken;
        })
        .catch(function(error) {
          this.error = error;
        });
    }
  }
};
</script>
