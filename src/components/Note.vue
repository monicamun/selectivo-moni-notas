<template>
  <div>
    <div class="card">
      <div class="card-content grey lighten-4">
        <div class="active">{{note.title}}</div>
      </div>
      <div class="card-content">
        <p>{{note.text}}</p>
        <i class="tiny material-icons edit-button" v-on:click="editNote">create</i>
        <i class="tiny material-icons delete-button" v-on:click="deleteNote">delete</i>
      </div>
    </div>
  </div>
</template>

<script>
import notesService from "@/services/notesService";
export default {
  name: "note",
  props: ["note"],
  methods: {
    editNote() {},
    deleteNote() {
      notesService.deleteNote(this.note._id);
    }
  }
};
</script>

<style scoped>
.edit-button {
  position: absolute;
  bottom: 5px;
  right: 25px;
  cursor: pointer;
}
.delete-button {
  position: absolute;
  bottom: 5px;
  right: 5px;
  cursor: pointer;
}
</style>
