<template>
  <div class="home">
    <login v-if="!showNotes" v-on:login="showNotes = true"/>
    <notes v-if="showNotes"/>
  </div>
</template>

<script>
import Login from "@/components/Login";
import Notes from "@/components/Notes";
export default {
  name: "home",
  components: { Login, Notes },
  data() {
    return {
      showNotes: false,
    };
  }
};
</script>
