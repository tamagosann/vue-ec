<template>
    <div class="container">

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

		<!-- 合計金額 -->
		<div class="row">
			<div class="col-xs-offset-2 col-xs-8">
				<div class="form-group text-center">
					<div>消費税：{{tax}}円</div>
					<div id="total-price">合計金額：{{priceWithTax}}円（税込）</div>
					<br>
				</div>
			</div>
		</div>

		<!-- 注文に進むボタン -->
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

import {mapGetters} from 'vuex'
// import {mapActions} from 'vuex'

export default({
    name: 'CartList',
	created(){
		this.total()
		this.calcTax()
	},
	data(){
		return {
			tableHeaders: [
				{title: "商品"},
				{title: "商品名 / 価格（税抜）"},
			],
			
			paymentMethods: [
				{title: "代金引換", status: 1},
				{title: "クレジットカード", status: 2},
			],

			prices: [],			
			priceWithTax: '',
			priceWithoutTax: '',
			tax: '',
		}
	},
	computed: {
		...mapGetters(['cart'])
	},

	methods: {
		submit(){
			this.$router.push({name: 'OrderConfirm'})
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
	}

})
</script>

<style>
	.table{
		margin-left: auto;
		margin-right: auto;
	}

</style>