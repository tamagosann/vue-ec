<template>
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <!-- Brand and toggle get grouped for better mobile display -->
      <div class="navbar-header">
        <button
          type="button"
          class="navbar-toggle collapsed"
          data-toggle="collapse"
          data-target="#bs-example-navbar-collapse-1"
          aria-expanded="false"
        >
          <span class="sr-only">Toggle navigation</span
          ><span class="icon-bar"></span> <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="">
          <!-- 企業ロゴ -->
          <img alt="main log" src="" height="35" />
        </a>
      </div>
      <!-- Collect the nav links, forms, and other content for toggling -->
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <p class="navbar-text navbar-right">
          <router-link :to="{ name: 'ItemList' }">
            <a class="navbar-link mr-2">商品一覧へ</a>&nbsp;&nbsp;
          </router-link>
          <router-link :to="{ name: 'CartList' }">
            <a class="navbar-link mr-2">ショッピングカート</a>&nbsp;&nbsp;
          </router-link>
          <router-link :to="{ name: 'History' }">
            <a v-show="uid !== null" class="navbar-link mr-2">注文履歴</a
            >&nbsp;&nbsp;
          </router-link>
          <a
            href=""
            v-show="uid === null"
            class="navbar-link"
            @click.prevent="login"
            >ログイン</a
          >&nbsp;&nbsp;
          <a
            href=""
            v-show="uid !== null"
            class="navbar-link"
            @click.prevent="logout"
            >ログアウト</a
          >
        </p>
      </div>
      <!-- /.navbar-collapse -->
    </div>
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
    ...mapActions(["logout", "login"]),
  },
};
</script>

<style scoped>
.mr-2 {
  margin-right: 10px;
}
</style>