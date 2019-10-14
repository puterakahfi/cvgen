<template>
  <section class="container w-12/12 m-0 lg:p-5">
    <basic-info />
    <about />
    <experiences />
    <projects />
  </section>
</template>

<script>
import BasicInfo from "~/components/Default/BasicInfo";
import About from "~/components/Default/About";
import Experiences from "~/components/Default/Experiences";

import Projects from "~/components/Default/Projects";
import Skills from "~/components/Default/Skills";

export default {
  components: {
    'basic-info': BasicInfo,
    'about':About,
    'experiences': Experiences,
    'skills': Skills,
    'projects': Projects
  }
};
</script>

<style>
</style>