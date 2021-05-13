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
						<tr v-for="cartItem in cart" :key="cartItem.cartItemId">
							<td>
								<div class="center">
									<img :src="cartItem.item.path"
										class="img-responsive img-rounded item-img-center" width="150" height="150" />
										<br>
								</div>
							</td>
							<td style="text-align: center">
								<div>
									{{cartItem.item.name}}
								</div>
								<br>
								<div class="price">
									{{cartItem.item.price.toLocaleString()}}円 × {{cartItem.item.quantity}}個
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
					<div>小計：{{noTaxSumPrice.toLocaleString()}}円</div>
					<div>消費税：{{ Math.floor(noTaxSumPrice * 0.1).toLocaleString() }}円</div>
					<div id="total-price">合計金額：{{ ((noTaxSumPrice) + (Math.floor(noTaxSumPrice * 0.1))).toLocaleString() }}円（税込）</div>
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

					<div v-if="errors.length">
						<ul class="ul-align-center">
							<li v-for="error in errors" :key="error" class=" red">{{error}}</li>
						</ul>
					</div>

					<table class="table table-striped item-list-table">
						<tbody>
							<tr>
								<td>
									<div class="text-center">
										お名前
									</div>
								</td>
								<td>
									<input type="text" v-model="info.destinationName" required>
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
									<input type="tel" v-model.number="info.destinationTel">
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
											<div style="width:200px">
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
																name="destinationTimeHours" checked="checked" value="10" v-model.number="info.destinationTimeHours">10時
														</label>
														<br>
													</div>
												</td>
												<td class="row">
													<div class="col-sm-12">
														<label class="radio-inline">
															<input type="radio"
																name="destinationTimeHours" checked="checked" value="11" v-model.number="info.destinationTimeHours">11時
														</label>
														<br>
													</div>
												</td>
												<td class="row">
													<div class="col-sm-12">
														<label class="radio-inline">
															<input type="radio"
																name="destinationTimeHours" checked="checked" value="12" v-model.number="info.destinationTimeHours">12時
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
																name="destinationTimeHours" checked="checked" value="13" v-model.number="info.destinationTimeHours">13時
														</label>
														<br>
													</div>
												</td>
												<td class="row">
													<div class="col-sm-12">
														<label class="radio-inline">
															<input type="radio"
																name="destinationTimeHours" checked="checked" value="14" v-model.number="info.destinationTimeHours">14時
														</label>
														<br>
													</div>
												</td>
												<td class="row">
													<div class="col-sm-12">
														<label class="radio-inline">
															<input type="radio"
																name="destinationTimeHours" checked="checked" value="15" v-model.number="info.destinationTimeHours">15時
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
																name="destinationTimeHours" checked="checked" value="16" v-model.number="info.destinationTimeHours">16時
														</label>
														<br>
													</div>
												</td>
												<td class="row">
													<div class="col-sm-12">
														<label class="radio-inline">
															<input type="radio"
																name="destinationTimeHours" checked="checked" value="17" v-model.number="info.destinationTimeHours">17時
														</label>
														<br>
													</div>
												</td>
												<td class="row">
													<div class="col-sm-12">
														<label class="radio-inline">
															<input type="radio"
																name="destinationTimeHours" checked="checked" value="18" v-model.number="info.destinationTimeHours">18時
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
													name="paymentMethods"  v-model.number="info.status" :value="0">代金引換
											</label>
										</div>
									</div>
								</td>
								<td>
									<div class="row">
										<div class="col-sm-12" style="text-align: center">
											<label class="radio-inline">
												<input type="radio"
													name="paymentMethods" v-model.number="info.status" :value="1">クレジットカード
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
			<div class="btnContainer">
				<div class="col-xs-offset-4 col-xs-4" style="margin: 0">
					<div class="form-group">
						<input class="form-control btn btn-warning btn-block" value="この内容で注文する" @click="submit" >
					</div>
				</div>

				<div class="col-xs-offset-4 col-xs-4" style="margin: 0">
					<div class="form-group">
						<router-link :to="{name: 'ItemList'}">
							<input class="form-control btn btn-warning btn-block" value="ホーム画面に戻る">
						</router-link>
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
				destinationName: '',
				email: '',
				destinationTel: '',
				destinationZipcode: '',
				destinationAddress: '',
				destinationTime: '',
				destinationTimeHours: '',
				creditcardNo: '',
				status: 0,
				orderDate: '',
			},
			// validation
			errors: []
		}
	},
	computed: {
		...mapGetters(['cart', 'noTaxSumPrice']),
	},
	methods: {
		submit(){
			this.errors = []
			const now = new Date()
			this.info.orderDate = now
				if (!this.info.destinationName){
					this.errors.push('名前を入力してください')
				}
				if (!this.info.email){
					this.errors.push('メールアドレスを入力してください')
				}
				if (!this.info.destinationTel){
					this.errors.push('電話番号を入力してください')
				}
				if (!this.info.destinationZipcode){
					this.errors.push('郵便番号を入力してください')
				}
				if (!this.info.destinationAddress){
					this.errors.push('住所を入力してください')
				}
				if (!this.info.destinationTime){
					this.errors.push('配送日時を選択してください')
				}
				if (this.info.destinationTimeHours <= 9 || 19 <= this.info.destinationTimeHours){
					this.errors.push('配送時間を選択してください')
				}
				if (!this.info.creditcardNo){
					this.errors.push('クレジットカード番号を入力してください')
				}
				if (this.info.status !== 0 && this.info.status !== 1){
					this.errors.push('お支払い方法を選択してください')
				}
				// console.log(this.errors.length) 
				// console.log(this.errors)

				if(!this.errors.length){
					this.settleAction(this.info)
					this.$router.push({name: 'OrderFinished'})
				}
		},
		...mapActions(['settleAction']),
	}

})
</script>

<style scoped>
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
	.ul-align-center{
		display: flex;
		align-items: center;
		flex-direction: column;
		}
	.block {
		display: block
	}
	.btnContainer{
		display: flex;
		justify-content: center;
	}

</style>