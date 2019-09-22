<template>
  <section>
    <BasicInfo />
  </section>
</template>

<script>
import Accordion from "~/components/Tailwind/Accordion";
import BasicInfo from "~/components/Generator/BasicInfo";
import { mapGetters, mapActions, mapState} from 'vuex';

export default {
  components: {
    BasicInfo,
    Accordion
  },
  created() {
      console.log(this.$store.state.basicinfo);
  },
};
</script>

<style>
</style>