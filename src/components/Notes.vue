<template>
  <div class="notes">
    <form class="container card-panel hoverable" @submit.prevent="addNote">
      <div class="row">
        <div class="col s4">
          <input type="text" placeholder="title" v-model="this.title"/>
        </div>
        <div class="col s4">
          <input type="text" placeholder="type" v-model="this.type"/>
        </div>
        <div class="col s4">
          <input type="text" v-model="this.text" />
        </div>
      </div>
      <div class="row">
        <textarea name id cols rows="10"></textarea>
        <div class="row">
          <button>Add</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      notes: {
        title:"",
        type:null,
        text:""
      }
    };
  }
};
</script>



 