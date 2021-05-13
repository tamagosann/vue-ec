<template>
    <div class="container">

        <!-- table -->
		<div v-if="cart.length > 0">
		<div class="row">
			<div
				class="table-responsive col-lg-offset-1 col-lg-10 col-md-offset-1 col-md-10 col-sm-10 col-xs-12">
				<h3 class="text-center page-title marker">ショッピングカート</h3>

			
				<!-- 何もないときは表示しない -->
					<table class="table table-striped item-list-table" style="width:500px">
						<tbody>
							<tr>
								<th v-for="header in tableHeaders" :key="header.title" width="100px">
									<span class="text-center">
										{{header.title}}
									</span>
								</th>
							</tr>

							<tr v-for="cartItem in cart" :key="cartItem.cartItemId">
								<td>
									<div class="center">
										<img :src="cartItem.item.path"
											class="img-responsive img-rounded item-img-center" width="150" height="150">
											<br>
									</div>
								</td>
								<td style="text-align: center">
									<div class="bold">
										
									</div>
									<div>
										{{cartItem.item.name}}
									</div>

									<br>
									<div v-show="cartItem.item.description" class="item-description-title">
									</div>
									<div class="item-description">
										{{cartItem.item.description ? cartItem.item.description : '商品キャプションが登録されていません'}}
										<br>
										<br>
									</div>
									<div class="price price-and-quantity">
										{{cartItem.item.price.toLocaleString()}}円 × {{cartItem.item.quantity}}個
									</div>
									<br>
									<div>
										<button @click.prevent="deleteCart(cartItem)">削除</button>
									</div>
								</td>
							</tr>
							
						</tbody>
					</table>
					
					<!-- 合計金額 -->
					<div class="row description">
						<div class="col-xs-offset-2 col-xs-8">
							<div class="form-group text-center">
								<div>小計：{{ noTaxSumPrice.toLocaleString() }}円</div>
								<div>消費税：{{ (Math.floor(noTaxSumPrice * 0.1)).toLocaleString() }}円</div>
								<div id="total-price">合計金額：{{ Math.floor(noTaxSumPrice * 1.1).toLocaleString() }}円（税込）</div>
								<br>
							</div>
						</div>
					</div>

					<!-- 注文に進むボタン -->
					<div class="btnContainer">

						<div class="col-xs-offset-4 col-xs-4" style="margin: 0">
							<div class="form-group">
								<input class="form-control btn btn-warning btn-block" type="submit" value="注文に進む" @click="submit">
							</div>
						</div>
						
						<div class="col-xs-offset-4 col-xs-4" style="margin: 0">
							<div class="form-group">
								<router-link :to="{name: 'ItemList'}" style="text-decoration: none">
									<input class="form-control btn btn-warning btn-block" value="ホーム画面に戻る">
								</router-link>
							</div>
						</div>

					</div>
				</div>


			</div>
		</div>
		<!-- 何もないとき -->
		<div v-else class="empty">カートに商品はありません</div>


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
				{title: "詳細情報"},
			],
			paymentMethods: [
				{title: "代金引換", status: 1},
				{title: "クレジットカード", status: 2},
			],
		}
	},
	computed: {
		...mapGetters(['cart', 'uid', 'items', 'noTaxSumPrice'])
	},

	methods: {
		submit(){
			if(!this.uid) {
				this.login();

			// 以下のコメントアウトは、ログイン時のカート保持に失敗した残骸です。
			// if(this.cart.length > 0) {
			// 	console.log('出てる？');
			// 	const newCart = [];

			// 	this.cart.forEach(cartItem => {
			// 		const newCartItemItem = cartItem.item;
			// 		delete newCartItemItem.userId;

			// 		newCart.push(newCartItemItem);
			// 	});

			// 	console.log(newCart);

			// }

			} else {
				// this.settleAction(this.cart)
				this.$router.push({name: 'OrderConfirm'})
			}
		},
		deleteCart(selectedItem){
			if(confirm('本当にカートから消去しますか？')) {

				if(this.uid) {
					this.deleteCartAction(selectedItem)
				} else {
					this.deleteCartNoUserAction(selectedItem)
				}
			}
		},
		...mapActions(['deleteCartAction', 'fetchUserInfo', 'settleAction','login','deleteCartNoUserAction'])
	}

})
</script>

<style scoped>
	.table{
		margin-left: auto;
		margin-right: auto;
	}
	.empty{
		text-align: center;
		margin-top: 100px;
		height: 100px;
		font-size: 40px;
	}
	.btnContainer{
		display: flex;
		justify-content: center;
	}
	.bold{
		font-weight: bold;
	}
	.description{
		font-size: 25px
	}
	button, input {
		text-decoration: none;
		opacity: 1;
		transition: all 0.3s;
	}
	button:hover {
		opacity: 0.7;
	}
	input:hover {
		opacity: 0.7;
	}
	.item-description-title {
		font-size: 14px;
		color: rgba(0, 0, 0, 1)
	}
	.item-description {
		font-size: 12px;
		color: rgba(0, 0, 0, 0.5)
	}
	.price-and-quantity {
		font-size: 15px;
		font-weight: bold;
	}
	.page-title {
		margin-bottom: 30px
	}
	.marker {
		background: linear-gradient(transparent 50%, #ffcc66 80%);
		width: 250px;
		margin: 30px auto;
	}


</style>