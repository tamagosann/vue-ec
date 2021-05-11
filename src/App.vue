<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import firebase from 'firebase';
import { mapActions } from 'vuex';
export default {
  created() {
    firebase.auth().onAuthStateChanged(user => {
      if(user) {
        this.setLoginUser(user);
        if(this.$router.currentRoute.name === "Login") {
          this.$router.push({name: "ItemList"}, () => {});
        }
      } else {
        this.deleteLoginUser();
        // this.$router.push({name: "Login"})
      }
    })
  },
  methods: {
    ...mapActions(['setLoginUser', 'logout', 'deleteLoginUser'])
  }
}
</script>

<style>

</style>
