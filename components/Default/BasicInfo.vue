<template>
  <section class="flex pb-2 mt-5">
    <div class="w-3/4">
      <h1 class="text-5xl font-serif mb-0 pb-0 text-gray-800 font-bold  ">{{ info.name }}</h1>
      <h3 class="text-2xl text-gray-800 mb-3 pt-0">{{ info.label }}</h3>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: mapGetters({ info: "basicinfo/getData" }),
  methods: {
    ...mapActions({ loadData: "basicinfo/loadData" })
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