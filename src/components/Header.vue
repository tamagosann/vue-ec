<template>
  <nav>
    <div style="display: flex; justify-content: space-between; padding: 20px; margin-bottom: 30px">
      <!-- Brand and toggle get grouped for better mobile display -->
      
          <router-link :to="{name: 'ItemList'}">
          <a class="navbar-brand" style="padding:0px;">
              <!-- 企業ロゴ -->

              <img alt="main log" src="@/assets/images/header-logo.png" height="50px"/>

            </a>
          </router-link>
       
      <!-- Collect the nav links, forms, and other content for toggling -->
        <div id="bs-example-navbar-collapse-1" style="text-align: center">

          <p class="navbar-text">
            <router-link :to="{ name: 'ItemList' }" style="text-decoration: none">
              <a class="navbar-link mr-2" style="text-decoration: none">商品一覧へ</a>&nbsp;&nbsp;
            </router-link>
            <router-link :to="{ name: 'CartList' }" style="text-decoration: none">
              <a class="navbar-link mr-2" style="text-decoration: none">ショッピングカート</a>&nbsp;&nbsp;
            </router-link>
            <router-link :to="{ name: 'History' }" style="text-decoration: none">
              <a v-show="uid !== null" class="navbar-link mr-2" style="text-decoration: none">注文履歴</a
              >&nbsp;&nbsp;
            </router-link>
            <a
              href=""
              v-show="uid === null"
              class="navbar-link"
              @click.prevent="login"
               style="text-decoration: none">ログイン</a
            >&nbsp;&nbsp;
            <a
              href=""
              v-show="uid !== null"
              class="navbar-link"
              @click.prevent="goLogout"
               style="text-decoration: none">ログアウト</a
            >
          </p>
          </div>
        </div>

      <!-- /.navbar-collapse -->
   
    <!-- /.container-fluid -->
  </nav>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["uid"]),
  },
  methods: {
    goLogout() {
        this.logout();

        if(this.$router.currentRoute.name !== "ItemList") {
          this.$router.push({name: "ItemList"}, () => {});
        }
    },
    ...mapActions(["logout", "login"]),
  },
};
</script>

<style scoped>
.mr-2 {
  margin-right: 10px;
}
a {
  text-decoration: none;
  /* text-decoration: underline; */
  color:rgba(0,0,0, 0.7);
  /* display: inline; */
  text-align: center;
}
a:hover{
  color: red;
  /* background: linear-gradient(transparent 50%, #ffcc66 80%); */

}
</style>