<template>
  <section class="lg:flex sm:block pb-2 mt-5 border-separate">
    <div class="w-6/6 md:w-4/6 lg:mr-6">
      <h1 class="text-2xl font-serif mb-0 pb-0 font-bold mb-3">Experiences</h1>
      <div v-for="experience in experiences" v-bind:key="experience.id" class="mb-6 mt-6 border-b">
        <h3 class="text-sm font-semibold mb-3 text-gray-600">{{experience.position }} // {{ experience.startDate }} - {{ experience.endDate }} </h3>

        <h3 class="text-lg font-bold mb-3">{{experience.company}} </h3>
        <p class="text-sm mb-6 leading-relaxed">{{ experience.summary }}</p>
      </div>
    </div>

    <div class="w-6/6 md:w-4/6 lg:w-2/6 lg:mr-3">
      <education />
      <skills />
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
  computed: mapGetters({ experiences: "experiences/getData" }),
  methods: {
    ...mapActions({ loadData: "experiences/loadData" })
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