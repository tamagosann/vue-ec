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

						<tr v-for="cartItem in cart" :key="cartItem.item.id">
							<td>
								<div class="center">
									<img :src="cartItem.item.path"
										class="img-responsive img-rounded item-img-center" width="150" height="150">
										<br>
								</div>
							</td>
							<td style="text-align: center">
								<div>
									{{cartItem.item.name}}
									<!-- {{cartItem}} -->
								</div>
								<br>
								<div class="price">
									{{cartItem.item.price}}円 × {{cartItem.item.quantity}}個
								</div>
								<br>
								<div>
									<button @click="deleteCart(cartItem)">削除</button>
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
					<div>消費税：??円</div>
					<!-- <div id="total-price">合計金額：{{priceWithTax.toLocaleString()}}円（税込）</div> -->
					<div id="total-price">合計金額：??円（税込）</div>
					<!-- <div>{{items}}</div> -->
					<!-- <div>{{uid}}</div> -->
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
import {mapActions} from 'vuex'

export default({
    name: 'CartList',
	created(){
		// this.fetchUserInfo(this.uid)
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
			pricesWithQuantity: [],
			priceWithTax: '',
			priceWithoutTax: '',
		}
	},
	computed: {
		

		...mapGetters(['cart', 'uid', 'items', 'noTaxSumPrice'])
	},

	methods: {
		submit(){
			this.$router.push({name: 'OrderConfirm'})
			// 注文内容確認ボタン（OrderConfirmへ移行）
			this.settleAction(this.cart)
		},
		deleteCart(selectedItem){
			this.deleteCartAction(selectedItem)
		},

		...mapActions(['deleteCartAction', 'fetchUserInfo', 'settleAction'])
	}

})
</script>

<style>
	.table{
		margin-left: auto;
		margin-right: auto;
	}

</style>