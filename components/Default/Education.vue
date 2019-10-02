<template>
  <section class="flex pb-2 mt-5 border-separate">
    <div class="w-4/4 mr-3">
      <h1 class="text-1xl font-serif mb-0 pb-0 font-bold uppercase mb-3">Education</h1>
      <div v-for="education in educations" v-bind:key="education.id" class="mb-5 mt-4">

        <h3 class="text-1xl font-black mb-2 text-gray-600">{{education.institution }} | {{ education.startDate }} - {{ education.endDate }} </h3>
        <h3 class="text-sm  mb-2 text-gray-800">{{education.studyType}}</h3>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: mapGetters({ educations: "educations/getData" }),
  methods: {
    ...mapActions({ loadData: "educations/loadData" })
  },
  created() {
    this.loadData();
  }
};
</script>

<style scoped>
h3 {
  margin-top: -10px;
}
</style>