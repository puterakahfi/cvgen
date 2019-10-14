<template>
  <section class="lg:flex sm:block pb-2 mt-5 border-separate">
    <div class="w-6/6 sm:w-4/6 lg:mr-6">
      <h1 class="text-2xl font-serif mb-0 pb-0 font-bold mb-3">Projects</h1>
      <div v-for="project in projects" v-bind:key="project.id" class="mb-6 mt-6 ">
        <h3 class="text-md font-bold mb-0">{{ project.name }} </h3>
        <p>{{ project.summary }} </p>
      </div>
    </div>

    <div class="w-6/6 sm:w-2/6 lg:mr-3">
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Education from '~/components/Default/Education';
import Skills from '~/components/Default/Skills'

export default {
  components:{
    'education': Education,
    'skills': Skills
  },
  computed: mapGetters({ projects: "projects/getData" }),
  methods: {
    ...mapActions({ loadData: "projects/loadData" })
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