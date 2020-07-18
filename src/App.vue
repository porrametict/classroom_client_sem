<template>
  <v-app>
    <div>
      <PrimaryButton>
        Cat can fly
      </PrimaryButton>
    </div>
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
