<template>
  <section class="flex pb-2 border-separate">
    <div class="w-4/4 mr-3">
      <h1 class="text-1xl font-serif mb-0 pb-0 font-bold  mb-3">Education</h1>
      <div v-for="education in educations" v-bind:key="education.id" class="mb-5 mt-4">

        <h3 class="text-xs  mb-2 font-bold ">{{education.studyType}} - GPA : {{education.gpa}}</h3>
        <h3 class="text-md font-medium ">{{education.institution }}  </h3>
        <h4 class="text-xs font-medium"> {{ education.startDate }} - {{ education.endDate }}</h4>
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