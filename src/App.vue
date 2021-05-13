<template>
  <div id="app">
    <Header />
    <router-view/>
  </div>
</template>

<script>
import firebase from 'firebase';
import { mapActions, mapGetters } from 'vuex';
import Header from './components/Header';

export default {
  components: {
    Header,
  },
  created() {
    firebase.auth().onAuthStateChanged(user => {
      if(user) {
        const uid = user.uid;
        console.log(uid);
        this.fetchUserInfo(uid);

        if(this.$router.currentRoute.name !== "CartList") {
          this.$router.push({name: "ItemList"}, () => {});
        }
      } else {
        this.deleteLoginUser();
        // this.$router.push({name: "Login"})
      }
    })
  },
  methods: {
    ...mapActions(['setUserId', 'logout', 'deleteLoginUser', 'fetchUserInfo'])
  },
  computed: {
    ...mapGetters(['cart'])
  }
}
</script>

<style>
  a {
    text-decoration: none;
    opacity: 1;
    transition: all 0.3s;
  }

  a:hover {
    opacity: 0.7;
  }

</style>
