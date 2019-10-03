<template>
  <section  class=" container w-12/12 m-0  p-5">
    <basic-info />
    <about />
    <experiences />
    <skills/>
  </section>
</template>

<script>
import BasicInfo from "~/components/Default/BasicInfo";
import About from "~/components/Default/About";
import Experiences from "~/components/Default/Experiences";
import Skills from "~/components/Default/Skills";

export default {
  components: {
    'basic-info': BasicInfo,
    'about':About,
    'experiences': Experiences,
    'skills': Skills
  }
};
</script>

<style>
</style>