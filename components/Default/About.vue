<template>
  <section class="lg:flex sm:block  pb-2 mt-5 border-separate">
    <div class="w-4/6  mr-3">
      <h1 class="text-2xl font-serif mb-0 pb-0 font-bold  mb-3">About Me</h1>
      <h3 class="text-md  mb-3 pt-0">{{ info.summary }}</h3>
    </div>

    <div class="w-2/6 md:w-6/6 object-right tracking-wider">
      <h1 class="text-1xl font-serif mb-0 pb-0 font-bold  mb-4">Contact</h1>
      <h3 class="text-sm">
        <fa-layers full-width class="fa-1x">
          <fa :icon="['fas', 'phone']"  size="sm" class="mr-2" />
        </fa-layers>
        {{ info.phone }}
      </h3>
      <h3 class="text-sm pt-3">
        <fa-layers full-width class="fa-1x">
          <fa :icon="['fas', 'envelope']"  size="sm" class="mr-2" />
        </fa-layers>
        {{ info.email }}
      </h3>

      <h3 class="text-sm  pt-3">
        <fa-layers full-width class="fa-1x">
          <fa :icon="['fas', 'home']" size="sm"  class="mr-2" />
        </fa-layers>
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