<template>
  <section  class=" container w-12/12 m-0">
    <basic-info />
    <about />
    <experiences />
  </section>
</template>

<script>
import BasicInfo from "~/components/Default/BasicInfo";
import About from "~/components/Default/About";
import Experiences from "~/components/Default/Experiences";

export default {
  components: {
    'basic-info': BasicInfo,
    'about':About,
    'experiences': Experiences
  }
};
</script>

<style>
</style>