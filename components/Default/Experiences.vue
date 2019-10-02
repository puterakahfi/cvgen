<template>
  <section class="flex pb-2 mt-5 border-separate">
    <div class="w-4/6 mr-6">
      <h1 class="text-1xl font-serif mb-0 pb-0 font-bold uppercase mb-3">Experiences</h1>
      <div v-for="experience in experiences" v-bind:key="experience.id" class="mb-6 mt-4">
        <h3 class="text-1xl font-bold mb-2">{{experience.company}}</h3>
        <h3
          class="text-md text-gray-600 mb-2"
        >{{experience.position }} | {{ experience.startDate }} - {{ experience.endDate }}</h3>
        <p class="text-sm mb-6">{{ experience.summary }}</p>
      </div>
    </div>

    <div class="w-2/6 mr-3">
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