<template>
  <section class="flex border-b-2 pb-2 mt-5">
    <div class="w-3/4">
      <h1 class="text-4xl font-serif mb-0 pb-0 text-gray-800 font-bold">{{ info.name }}</h1>
      <h3 class="text-2xl text-gray-600 mb-3 pt-0">{{ info.label }}</h3>
    </div>
    <div class="w-1/4 object-right pt-4">
      <h3 class="text-sm text-gray-600 pt-2">
        <fa :icon="['fas', 'phone']" class="text-gray-800 mr-1" />
        {{ info.phone }}
      </h3>
      <h3 class="text-sm text-gray-600 pt-3">
        <fa :icon="['fas', 'envelope']" class="text-gray-800 mr-1" />
        {{ info.email }}
      </h3>

      <h3 class="text-sm text-gray-600 pt-3">
        <fa :icon="['fas', 'home']" class="text-gray-800 mr-1" />
        {{ info.website }}
      </h3>
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