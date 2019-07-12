<template>
  <div class="notes">
    <noteEditor />
    <div class="container">
      <div class="row" v-for="(row, index) in notesGroupedBy3" v-bind:key="index">
         <note class="col l4" v-for="(note, noteIndex) in row" v-bind:key="noteIndex" v-bind:note="note" />
      </div>
    </div>
  </div>
</template>

<script>
import NoteEditor from "./NoteEditor";
import notesService from "@/services/notesService";
import Note from "./Note"
export default {
  name: "notes",
  data() {
    return {
      notes: []
    };
  },
  computed: {
    notesGroupedBy3() {
      let group = [];
      const arr = this.notes.slice();
      for (var i = 0; i < arr.length; i += 3) {
        let row = [arr[i]];
        if (typeof arr[i + 1] !== "undefined") {
          row.push(arr[i + 1]);
        }
        if (typeof arr[i + 2] !== "undefined") {
          row.push(arr[i + 2]);
        }
        group.push(row);
      }
      return group;
    }
  },
  components: { NoteEditor, Note },
  beforeCreate() {
    notesService.$on("notesLoaded", notes => {
      this.notes = notes;
    });
    notesService.getAllNotes();
  }
};
</script>




 