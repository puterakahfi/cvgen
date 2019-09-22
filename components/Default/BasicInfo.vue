<template>
  <section  class="md:flex">

    <div class="w-32 h-32 mr-6 group  rounded-full overflow-hidden shadow-inner text-center bg-purple table cursor-pointer">
      <span class="hidden group-hover:table-cell text-white font-bold align-middle">KR</span>
      <img src="https://pickaface.net/gallery/avatar/unr_random_180410_1905_z1exb.png" alt="lovely avatar" class="object-cover object-center w-full h-full visible group-hover:hidden">
    </div>
    <div>
     <h1 class="text-5xl font-serif mb-0 pb-0 font-black text-gray-800">{{ info.name }} </h1> 
     <h3 class="text-2xl text-gray-700">{{ info.label }}</h3>
     <p class="text-gray-600 mt-5 ">{{ info.summary }}</p>
     </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: mapGetters({info : "basicinfo/getData"}),
  methods: {
    ...mapActions({loadData: "basicinfo/loadData"})
  },
  created() {
    this.loadData();
  }
};
</script>

<style scoped>

h3{
    margin-top:-10px;
}
</style>