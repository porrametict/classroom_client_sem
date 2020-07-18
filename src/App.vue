<template>
  <v-app>
     <router-view></router-view>
  </v-app>
</template>

<script>
import PrimaryButton from './components/share/PrimaryButton'
export default {
  name: 'App',
  components: {
    PrimaryButton,
  },

  data: () => ({
    //
  }),
};
</script>
