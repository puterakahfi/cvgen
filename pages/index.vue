<template>
  <section class="container mx-auto font-sans max-w-a4 A4 p-5">
    <Component :is="loadTheme" class="m-0 p-0 t-0" />
  </section>
</template>

<script>
import configs from "~/resume.config";
import Generator from "~/components/Generator/Generator";

export default {
  components: {
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


<style>
@import url("https://cdnjs.cloudflare.com/ajax/libs/paper-css/0.4.1/paper.css");

@page {
  size: A4;
}

body{
  background: white !important;
}

.max-w-a4 {
  max-width: 64.609375rem;
  size: a4;
}
</style>