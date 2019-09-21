<template>
  <section>
     <h1 class="text-5xl font-serif mb-0 pb-0 font-black text-gray-800">{{ info.data.firstName }} {{ info.data.lastName }}</h1> 
     <h3 class="text-2xl text-gray-700">{{ info.data.title }}</h3>
     <p class="text-gray-600 mt-5 ">{{ info.data.about }}</p>
  </section>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: mapGetters({info : "basicinfo/getData"}),
  methods: {
    ...mapActions({loadData: "basicinfo/loadData"})
  },
  created() {
    this.loadData();
  }
};
</script>

<style scoped>

h3{
    margin-top:-10px;
}
</style>