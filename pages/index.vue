<template>
  <section class="bg-gray-100 flex justify-start" >
    <Generator class="p-2 bg-gray-100 ml-5 mt-5"  />
    <Component :is="loadTheme"  class="inline-block ml-5 mt-5 bg-gray-100 p-5  t-0	"  />
  </section>
</template>

<script>
import configs from "~/resume.config";
import Generator from "~/components/Generator/Generator"

export default {
  components:{
    Generator
  },
  data() {
    return {
      theme: "default"
    };
  },
  async asyncData({ configs }) {
    return {
      theme: () => "~/themes/default"
    };
  },
  computed: {
    loadTheme() {
      this.theme = configs.theme;
      return () => import(`~/themes/${this.theme}`);
    }
  },
  methods: {
    switchTheme: function(theme) {
      this.theme = () => import(`~/themes/${theme}`);
    }
  }
};
</script>
