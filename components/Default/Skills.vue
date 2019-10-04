<template>
  <section class="flex pb-2 border-separate">
    <div class="w-4/4 mr-3">
      <h1 class="text-1xl font-serif mb-0 pb-0 font-bold mb-3">Skills</h1>
      <div v-for="skill in skills" v-bind:key="skill.id" class="mb-5 mt-4">
        <h3 class="text-xs mb-2 font-bold">{{skill.name}} - {{skill.level}}</h3>

        <div class="px-0 py-1">
        
          <span v-for="keyword in skill.keywords" v-bind:key="keyword.id"
            class="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-medium text-gray-700 mr-2"
          >{{keyword}}</span>
          
        </div>
      </div>
    </div>
  </section>
</template>


<script>
import { mapGetters, mapActions } from "vuex";
import Education from "~/components/Default/Education";

export default {
  components: {
    education: Education
  },
  computed: mapGetters({ skills: "skills/getData" }),
  methods: {
    ...mapActions({ loadData: "skills/loadData" })
  },
  created() {
    this.loadData();
  }
};
</script>

<style>
</style>