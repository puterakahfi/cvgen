<template>
  <form class="max-w-lg">

        <h5 class="mb-3">Basic Info</h5>
    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full md:w-3/3 px-3 mb-6 md:mb-0">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="grid-first-name"
        >Name</label>
        <input
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          id="grid-first-name"
          type="text"
          v-model="name"
          @input="updateData({'data': name,'key':'name'})"
        />
      </div>
    </div>
    <div class="flex flex-wrap -mx-3 mb-2">
      <div class="w-full md:w-3/3 px-3 mb-6 md:mb-0">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="grid-city"
        >Title</label>
        <input
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="grid-city"
          type="text"
          placeholder="Albuquerque"
          v-model="title"
          @input="updateData({'data':title,'key':'label'})"
        />
      </div>
    </div>
     <div class="flex flex-wrap -mx-3 mb-2">
      <div class="w-full md:w-3/3 px-3 mb-6 md:mb-0">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="grid-city"
        >About Me</label>
        <textarea
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48"
          id="grid-city"
          type="text"
          placeholder="Albuquerque"
          v-model="about"
          @input="updateData({'data':about,'key':'summary'})"
        />
      </div>
    </div>
  </form>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      info: {},
      name: "",
      lastName: "",
      title: "",
      about:""
    };
  },
  computed: mapGetters({ basicInfo: "basicinfo/getData" }),
  methods: {
    ...mapActions({
      loadData: "basicinfo/loadData",
      updateData: "basicinfo/updateData"
    })
  },
  created() {
    this.loadData();
    console.log(this.basicInfo);


    this.info = this.basicInfo;
    this.name= this.info.name;

    this.title= this.info.label;
    this.about = this.info.summary;

}
};
</script>

<style>
</style>