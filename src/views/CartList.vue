<template>
    <div class="container">
        <nav class="navbar navbar-default">
            <div class="container-fluid">
                <!-- Brand and toggle get grouped for better mobile display -->
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed"
                        data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"
                        aria-expanded="false">
                        <span class="sr-only">Toggle navigation</span> <span
                            class="icon-bar"></span> <span class="icon-bar"></span> <span
                            class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand"> <!-- 企業ロゴ --> <img
                        alt="main log" src="" height="35">
                    </a>
                </div>

                <!-- Collect the nav links, forms, and other content for toggling -->

				<!-- リンク -->
                <div class="collapse navbar-collapse"
                    id="bs-example-navbar-collapse-1">
                    <p class="navbar-text navbar-right">
                        <a href="" class="navbar-link">注文履歴</a>&nbsp;&nbsp;
                        <a href="" class="navbar-link">ログイン</a>&nbsp;&nbsp;
                        <a href="" class="navbar-link">ログアウト</a>
                    </p>
                </div>
                <!-- /.navbar-collapse -->
            </div>
        </nav>

        <!-- table -->
		<div class="row">
			<div
				class="table-responsive col-lg-offset-1 col-lg-10 col-md-offset-1 col-md-10 col-sm-10 col-xs-12">
				<h3 class="text-center">ショッピングカート</h3>

			
				<table class="table table-striped item-list-table" style="width:500px">
					<tbody>
						<tr>
							<th v-for="header in tableHeaders" :key="header.title" width="100px">
								<span class="text-center">
									{{header.title}}
								</span>
							</th>
						</tr>

						<tr v-for="item in items" :key="item.id">
							<td>
								<div class="center">
									<img src="../assets/images/1.jpg"
										class="img-responsive img-rounded item-img-center" width="150" height="150">
										<br>
								</div>
							</td>
							<td style="text-align: center">
								<div>
									{{item.name}}
								</div>
								<div class="price">
									{{item.price}}円	
								</div>
							</td>
						</tr>
						
					</tbody>
				</table>

			</div>
		</div>

        <div class="row">
			<div class="col-xs-offset-2 col-xs-8">
				<div class="form-group text-center">
					<!-- <div id="total-price">合計金額：{{totalPrice()}}円（税込）</div><br> -->
					<!-- <button @click="calc()">計算</button> -->
					<div id="total-price">合計金額：{{totalPrice}}円（税込）</div><br>
				</div>
			</div>
		</div>

		<div class="row">
			<div class="col-xs-offset-4 col-xs-4">
				<div class="form-group" style="text-align: center">
					<router-link :to="{name: 'OrderConfirm'}">
							<input class="form-control btn btn-warning btn-block" type="submit" value="注文に進む" @click="submit()">
					</router-link>
				</div>
			</div>
		</div>

    </div>
    
</template>

<script>
import Vue from 'vue'
import Vuex from 'vuex'

// import {mapGetters} from 'vuex'
import {mapActions} from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		userInfo: {},
		// items: [
		// 	{id: 1, name: 'apple', price: 100},
		// 	{id: 2, name: 'orange', price: 80},
		// 	{id: 3, name: 'lemon', price: 75},
		// 	{id: 4, name: 'steak', price: 1300},
		// ],
		total: ''
	},
	mutations: {
		addUserInfo(state, info){
			state.userInfo = info
		},
		showTotal(state, price){
			state.total = price
		}
	},
	actions: {
		addUserInfo({commit}, info){
			commit('addUserInfo', info)
		},
		showTotal({commit}, price){
			commit('showTotal', price)
		}
	},
	getters: {
    items: state => state.items,
    loginUser: state => state.loginUser,
  },
})



export default({
	store,
    name: 'CartList',
	created(){
		this.items.forEach(item => {
				this.prices.push(item.price)
			})
			// console.log(this.prices)

			let sum = this.prices.reduce((a, b) => a + b)
			this.totalPrice = sum
	},
	data(){
		return {
			tableHeaders: [
				{title: "商品"},
				{title: "商品名 / 価格（税込）"},
			],
			
			paymentMethods: [
				{title: "代金引換", status: 1},
				{title: "クレジットカード", status: 2},
			],
			// お届け先情報（ソース）
			info: {},
			// お届け先情報（store.state）
			// userInfo: {},

			// 確認
			objs: {name: 'John', num: 19},

			// 練習
			items: [
			{id: 1, name: 'apple', price: 100},
			{id: 2, name: 'orange', price: 80},
			{id: 3, name: 'lemon', price: 75},
			{id: 4, name: 'steak', price: 1000},
			],
			prices: [],
			totalPrice: ''

		}
	},
	computed: {
		// ...mapGetters(['items'])
	},

	methods: {
		// addUserInfo(info){
		// 	info = this.info
		// 	this.$store.state.userInfo = info
		// 	// console.log(this.$store.state.userInfo)
		// },
		submit(){
			this.addUserInfo(this.info)
			console.log(this.$store.state.userInfo)
		},

		...mapActions(['addUserInfo', 'showTotal']),

	}

})
</script>

<style>
	.table{
		margin-left: auto;
		margin-right: auto;
	}

</style>