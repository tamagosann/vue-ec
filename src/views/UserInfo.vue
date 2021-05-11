<template>
    <!-- table（お届け先情報） -->
		<form action="order_finished.html">
			<div class="row">
				<div
					class="table-responsive col-lg-offset-3 col-lg-6 col-md-offset-1 col-md-10 col-sm-10 col-xs-12">
					<h3 class="text-center">お届け先情報</h3>
					<table class="table table-striped item-list-table">
						<tbody>
							<tr>
								<td>
									<div class="text-center">
										お名前
									</div>
								</td>
								<td>
									<input type="text" v-model="info.name">
								</td>
							</tr>
							<tr>
								<td>
									<div class="text-center">
										メールアドレス
									</div>
								</td>
								<td>
									<input type="text" v-model="info.email">
								</td>
							</tr>
							<tr>
								<td>
									<div class="text-center">
										郵便番号
									</div>
								</td>
								<td>
									<input type="text" v-model.number="info.addressNumber">
								</td>
								<td>
									<button style="position: relative; left: -40px">住所検索</button>
								</td>
							</tr>
							<tr>
								<td>
									<div class="text-center">
										住所
									</div>
								</td>
								<td>
									<input type="text" v-model="info.address">
								</td>
							</tr>
							
							<tr>
								<td>
									<div class="text-center">
										配達日時
									</div>
								</td>
								<td>
									<div class="form-group">
										<div class="row">
											<div class="col-sm-12">
												<label
													class="control-label" style="color: red" for="inputPeriod">配達日時を入力してください</label>
											</div>

											<!-- カレンダー -->
											<div class="col-sm-5">
												<input type="date" name="name" id="name"
													class="form-control input-sm" v-model="info.date"/>
											</div>

										</div>

										<!-- ラジオボタン（配送時間） -->
											<tr>
												<td class="row">
													<div class="col-sm-12">
														<label class="radio-inline">
															<input type="radio"
																name="responsibleCompany" checked="checked" value="10" v-model.number="info.time">10時
														</label>
														<br>
													</div>
												</td>
												<td class="row">
													<div class="col-sm-12">
														<label class="radio-inline">
															<input type="radio"
																name="responsibleCompany" checked="checked" value="11" v-model.number="info.time">11時
														</label>
														<br>
													</div>
												</td>
												<td class="row">
													<div class="col-sm-12">
														<label class="radio-inline">
															<input type="radio"
																name="responsibleCompany" checked="checked" value="12" v-model.number="info.time">12時
														</label>
														<br>
													</div>
												</td>
												
											</tr>

											<tr>
												<td class="row">
													<div class="col-sm-12">
														<label class="radio-inline">
															<input type="radio"
																name="responsibleCompany" checked="checked" value="13" v-model.number="info.time">13時
														</label>
														<br>
													</div>
												</td>
												<td class="row">
													<div class="col-sm-12">
														<label class="radio-inline">
															<input type="radio"
																name="responsibleCompany" checked="checked" value="14" v-model.number="info.time">14時
														</label>
														<br>
													</div>
												</td>
												<td class="row">
													<div class="col-sm-12">
														<label class="radio-inline">
															<input type="radio"
																name="responsibleCompany" checked="checked" value="15" v-model.number="info.time">15時
														</label>
														<br>
													</div>
												</td>
											</tr>

											<tr>
												<td class="row">
													<div class="col-sm-12">
														<label class="radio-inline">
															<input type="radio"
																name="responsibleCompany" checked="checked" value="16" v-model.number="info.time">16時
														</label>
														<br>
													</div>
												</td>
												<td class="row">
													<div class="col-sm-12">
														<label class="radio-inline">
															<input type="radio"
																name="responsibleCompany" checked="checked" value="17" v-model.number="info.time">17時
														</label>
														<br>
													</div>
												</td>
												<td class="row">
													<div class="col-sm-12">
														<label class="radio-inline">
															<input type="radio"
																name="responsibleCompany" checked="checked" value="18" v-model.number="info.time">18時
														</label>
														<br>
													</div>
												</td>
											</tr>


									</div>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>

			<!-- table -->
			<div class="row">
				<div
					class="table-responsive col-lg-offset-3 col-lg-6 col-md-offset-1 col-md-10 col-sm-10 col-xs-12">
					<h3 class="text-center">お支払い方法</h3>
					<table class="table table-striped item-list-table">
						<tbody>
							<tr>
								<td>
									<div class="row">
										<div class="col-sm-12">
											<label class="radio-inline">
												<input type="radio"
													name="responsibleCompany" checked="checked" value='0' v-model.number="info.status">代金引換
											</label>
										</div>
									</div>
								</td>
								<td>
									<div class="row">
										<div class="col-sm-12">
											<label class="radio-inline">
												<input type="radio"
													name="responsibleCompany" checked="checked" value='1' v-model.number="info.status">クレジットカード
											</label>
										</div>
									</div>
								</td>
							</tr>
						</tbody>
					</table>
				</div>

				<!-- お届け先情報オブジェクト（info）を表示：確認用 -->
				<div>{{info}}</div>
			</div>

			<div class="row">
				<div class="col-xs-offset-4 col-xs-4">
					<div class="form-group">

						<!-- <router-link :to="{name: 'OrderFinished'}"> -->
							<!-- <input class="form-control btn btn-warning btn-block" type="submit" value="この内容で注文する" @click="addUserInfo(info)"> -->
						<!-- </router-link> -->
							<button @click.prevent="submit()">この内容で注文する</button>

					</div>
				</div>
			</div>
		</form>
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
    name: 'OrderConfirm',
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
				{title: "商品名"},
				{title: "価格（税込）"},
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
