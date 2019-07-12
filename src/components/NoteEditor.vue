<template>
  <div class="note">
    <div class="row">
      <div class="col offset-m3 m9">
        <form class="container card-panel hoverable" @submit.prevent="addNote">
          <div class="row">
            <div class="col m12">
              <input type="text" placeholder="title" v-model="note.title" />
            </div>
          </div>
          <div class="row">
            <textarea name id cols rows="10" v-model="note.text"></textarea>
            <div class="row">
              <button v-bind:disabled="blockButton">Add</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import noteService from "@/services/notesService";

export default {
  name: "noteEditor",
  props: ["editNote"],
  data() {
    return {
      newNote: { title: "", text: "" },
      blockButton: false
    };
  },
  computed: {
    note() {
      return this.editNote || this.newNote;
    }
  },
  methods: {
    addNote() {
      noteService.addNote({ title: this.note.title, text: this.note.text });
      this.blockButton = true;
    },
    onCreated() {
      this.note.title = "";
      this.note.text = "";
      this.blockButton = false;
      alert("nota creada!!")
    }
  },
  beforeCreate() {
    noteService.$on("noteSaved", () => { this.onCreated() });
  }
};
</script>