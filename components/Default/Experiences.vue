<template>
  <section class="lg:flex sm:block pb-2 mt-5 border-separate">
    <div class="w-4/6 sm:w-6/6 mr-6">
      <h1 class="text-2xl font-serif mb-0 pb-0 font-bold mb-3">Experiences</h1>
      <div v-for="experience in experiences" v-bind:key="experience.id" class="mb-6 mt-6 border-b">
        <h3 class="text-sm font-semibold mb-3">{{experience.position }} // {{ experience.startDate }} - {{ experience.endDate }} </h3>

        <h3 class="text-lg font-bold mb-3">{{experience.company}} </h3>
        <p class="text-sm mb-6">{{ experience.summary }}</p>
      </div>
    </div>

    <div class="w-2/6 sm:w-6/6 mr-3">
      <education />
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Education from '~/components/Default/Education';

export default {
  components:{
    'education': Education
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