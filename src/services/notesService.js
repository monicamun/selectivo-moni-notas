import Vue from "vue";
import firebase from "firebase";
import "firebase/auth";
import axios from "axios";
const baseURL = "https://moni-notes.herokuapp.com/";
//"http://localhost:3000"// "https://moni-notes.herokuapp.com/";

const notesService = new Vue({
  data: {
    notes: []
  },
  methods: {
    getIdToken() {
      return firebase.auth().currentUser.getIdToken(/* forceRefresh */ true);
    },
    getAllNotes() {
      if (this.notes.length === 0) {
        this.getIdToken()
          .then(idToken => {
            return axios.get("/notes", {
              baseURL,
              headers: { "auth-token": idToken }
            });
          })
          .then(response => {
            this.notes = response.data;
            this.$emit("notesLoaded", this.notes);
          })
          .catch(error => console.log(error));
      } else {
        this.$emit("notesLoaded", this.notes);
      }
    },
    reloadNotes() {
      this.notes = [];
      this.getAllNotes();
    },
    addNote(note) {
      this.getIdToken()
        .then(idToken => {
          return axios.post("/notes", note, {
            baseURL,
            headers: { "auth-token": idToken }
          });
        })
        .then(response => {
          this.reloadNotes();
          this.$emit("noteSaved", response);
        })
        .catch(error => console.log(error));
    },
    deleteNote(_id) {
      this.getIdToken()
        .then(idToken => {
          return axios.delete(`/notes/${_id}`, {
            baseURL,
            headers: { "auth-token": idToken }
          });
        })
        .then(() => {
          this.reloadNotes();
        })
        .catch(error => console.log(error));
    }
  }
});

export default notesService;
