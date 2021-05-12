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
									{{item.item.name}}
								</div>
								<div class="price">
									{{item.item.price}}円	
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

		<!-- 表示はできる -->
		<div>{{loginUser.cart}}</div>

    </div>
    
</template>

<script>

// import {mapGetters} from 'vuex'
import {mapActions} from 'vuex'

export default({
    name: 'CartList',
	created(){
		
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

			prices: [],
			totalPrice: ''
		}
	},
	computed: {
		items(){
			return this.$store.state.loginUser.cart
		},
		loginUser(){
			return this.$store.state.loginUser
		}
		// ...mapGetters(['loginUser'])
	},

	methods: {
		submit(){
			this.addUserInfo(this.info)
			console.log(this.$store.state.userInfo)
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

</style>