<template>
    <div class="container">
        <!-- table -->
		<div class="row">
			<div
				class="table-responsive col-lg-offset-1 col-lg-10 col-md-offset-1 col-md-10 col-sm-10 col-xs-12">
				<h3 class="text-center">注文内容確認</h3>

			<!-- 商品名 / 価格ヘッダー -->
				<table class="table table-striped item-list-table" style="width: 600px">
					<tbody>
						<tr>
							<th width="150px">
								<span class="text-center">
									商品
								</span>
							</th>
							<th width="150px">
								<span class="text-center">
									商品名 / 価格
								</span>
							</th>
						</tr>

						<tr v-for="cartItem in cart" :key="cartItem.id">
							<td>
								<div class="center">
									<img :src="cartItem.path"
										class="img-responsive img-rounded item-img-center" width="150" height="150">
										<br>
								</div>
							</td>
							<td style="text-align: center">
								<div>
									{{cartItem.name}}
								</div>
								<br>
								<div class="price">
									{{cartItem.price}}円 × {{cartItem.quantity}}個
								</div>
								<br>
								<div>
									<button>削除</button>
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
					<div>消費税：{{tax}}円</div>
					<div id="total-price">合計金額：{{priceWithTax}}円（税込）</div>
					<br>
				</div>
			</div>
		</div>

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
									<input type="text" v-model="info.destinationName">
								</td>
							</tr>
							<tr>
								<td>
									<div class="text-center">
										メールアドレス
									</div>
								</td>
								<td>
									<input type="email" v-model="info.email">
								</td>
							</tr>
							<tr>
								<td>
									<div class="text-center">
										電話番号
									</div>
								</td>
								<td>
									<input type="email" v-model.number="info.destinationTel">
								</td>
							</tr>
							<tr>
								<td>
									<div class="text-center">
										郵便番号
									</div>
								</td>
								<td>
									<input type="number" v-model.number="info.destinationZipcode">
								</td>
							</tr>
							<tr>
								<td>
									<div class="text-center">
										住所
									</div>
								</td>
								<td>
									<input type="text" v-model="info.destinationAddress">
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
													class="form-control input-sm" v-model="info.destinationTime"/>
											</div>

										</div>

										<!-- ラジオボタン（配送時間） -->
											<tr>
												<td class="row">
													<div class="col-sm-12">
														<label class="radio-inline">
															<input type="radio"
																name="responsibleCompany" checked="checked" value="10" v-model.number="info.destinationTime">10時
														</label>
														<br>
													</div>
												</td>
												<td class="row">
													<div class="col-sm-12">
														<label class="radio-inline">
															<input type="radio"
																name="responsibleCompany" checked="checked" value="11" v-model.number="info.destinationTime">11時
														</label>
														<br>
													</div>
												</td>
												<td class="row">
													<div class="col-sm-12">
														<label class="radio-inline">
															<input type="radio"
																name="responsibleCompany" checked="checked" value="12" v-model.number="info.destinationTime">12時
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
																name="responsibleCompany" checked="checked" value="13" v-model.number="info.destinationTime">13時
														</label>
														<br>
													</div>
												</td>
												<td class="row">
													<div class="col-sm-12">
														<label class="radio-inline">
															<input type="radio"
																name="responsibleCompany" checked="checked" value="14" v-model.number="info.destinationTime">14時
														</label>
														<br>
													</div>
												</td>
												<td class="row">
													<div class="col-sm-12">
														<label class="radio-inline">
															<input type="radio"
																name="responsibleCompany" checked="checked" value="15" v-model.number="info.destinationTime">15時
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
																name="responsibleCompany" checked="checked" value="16" v-model.number="info.destinationTime">16時
														</label>
														<br>
													</div>
												</td>
												<td class="row">
													<div class="col-sm-12">
														<label class="radio-inline">
															<input type="radio"
																name="responsibleCompany" checked="checked" value="17" v-model.number="info.destinationTime">17時
														</label>
														<br>
													</div>
												</td>
												<td class="row">
													<div class="col-sm-12">
														<label class="radio-inline">
															<input type="radio"
																name="responsibleCompany" checked="checked" value="18" v-model.number="info.destinationTime">18時
														</label>
														<br>
													</div>
												</td>
											</tr>


									</div>
								</td>
							</tr>
							<tr>
								<td>
									<div class="text-center">
										クレジットカード番号
									</div>
								</td>
								<td>
									<input type="number" v-model="info.creditcardNo">
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>

			<!-- table(お支払い方法) -->
			<div class="row">
				<div
					class="table-responsive col-lg-offset-3 col-lg-6 col-md-offset-1 col-md-10 col-sm-10 col-xs-12">
					<h3 class="text-center">お支払い方法</h3>
					<table class="table table-striped item-list-table">
						<tbody>
							<tr>
								<td>
									<div class="row">
										<div class="col-sm-12" style="text-align: center">
											<label class="radio-inline">
												<input type="radio"
													name="responsibleCompany" checked="checked" value='0' v-model.number="info.status">代金引換
											</label>
										</div>
									</div>
								</td>
								<td>
									<div class="row">
										<div class="col-sm-12" style="text-align: center">
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

			</div>

			<!-- 注文ボタン -->
			<div class="row">
				<div class="col-xs-offset-4 col-xs-4">
					<div class="form-group">

							<input class="form-control btn btn-warning btn-block" type="submit" value="この内容で注文する" @click.prevent="submit()">

					</div>
				</div>
			</div>
		</form>

    </div>
    
</template>

<script>

import {mapGetters} from 'vuex'
import {mapActions} from 'vuex'

export default({
    name: 'OrderConfirm',
	created(){
		this.total()
		this.calcTax()
	},
	data(){
		return {
			tableHeaders: [
				{title: "商品名"},
				{title: "価格（税拔）"},
				{title: "操作"},
			],
			paymentMethods: [
				{title: "代金引換"},
				{title: "クレジットカード"},
			],
			info: {
				orderDate: '',
				destinationName: '',
				destinationZipcode: '',
				destinationAddress: '',
				destinationTel: '',
				destinationTime: '',
				creditcardNo: '' 
			},
			prices: [],
			priceWithTax: '',
			priceWithoutTax: '',
			tax: '',
		}
	},
	computed: {
		cartItems(){
			console.log(this.loginUser) // null
			return this.cart
		},
		...mapGetters(['loginUser', 'cart']),

	},

	methods: {
		submit(){
			const now = new Date()
			this.info.orderDate = now
			if(this.info.destinationName && this.info.destinationZipcode && this.info.destinationAddress && this.info.destinationTel && this.info.destinationTime && this.info.creditcardNo && this.info.orderDate) {
				this.addUserInfo(this.info)
				// console.log('called')
				this.$router.push({name: 'OrderFinished'})
				return true
			} 
		},
		
		total(){
			const length = this.cart.length
			for(let i = 0; i < length; i++){
				this.prices.push(this.cart[i].price * this.cart[i].quantity)
			}

			if (length > 0) {
				let sum = this.prices.reduce((a, b) => a + b)
				this.priceWithoutTax = sum
				this.priceWithTax = Math.floor(sum * 1.1)
			}
		},
		
		calcTax(){
			const length = this.cart.length
			for(let i = 0; i < length; i++){
				this.prices.push(this.cart[i].price * this.cart[i].quantity)
			}
			this.tax = Math.floor(this.priceWithoutTax * 0.1)
		},

		...mapActions(['addUserInfo']),
	}

})
</script>

<style>
	.table{
		margin-left: auto;
		margin-right: auto;
	}
	.red{
		color: red;
	}
	.bold {
		font-size: 30px;
		font-weight: bold;
	}

</style>