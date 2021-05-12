<template>
    <div class="container">
        <!-- table -->
		<div class="row">
			<div
				class="table-responsive col-lg-offset-1 col-lg-10 col-md-offset-1 col-md-10 col-sm-10 col-xs-12">
				<h3 class="text-center">注文履歴</h3>

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

						<tr v-for="history in histories" :key="history.id">
							<td>
								<div class="center">
									<img :src="history.path"
										class="img-responsive img-rounded item-img-center" width="150" height="150">
										<br>
								</div>
							</td>
							<td style="text-align: center">
								<div>
									<div>
										{{history.name}}
									</div>
									<div class="price">
										{{history.price}}円	
									</div>
									<div class="price">
										{{history.quantity}}個	
									</div>
									<br>
									<div>
										<button>購入をキャンセル</button>
									</div>
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

    </div>
    
</template>

<script>

import {mapGetters} from 'vuex'
import {mapActions} from 'vuex'

export default({
    name: 'History',
	created(){
		this.total()
        this.calcTax()
	},
	data(){
		return {
			prices: [],
			priceWithTax: '',
			priceWithoutTax: '',
			tax: '',
		}
	},
	computed: {
		histories(){
			return this.histories
		},
		...mapGetters(['loginUser', 'histories']),
	},

	methods: {
		total(){
			const length = this.histories.length
			for(let i = 0; i < length; i++){
				this.prices.push(this.histories[i].price * this.histories[i].quantity)
			}
			if(length > 0){
				let sum = this.prices.reduce((a, b) => a + b)
				// console.log(sum)
				this.priceWithoutTax = sum
				this.priceWithTax = Math.floor(sum * 1.1)
			}
		},
		
		calcTax(){
			const length = this.histories.length
			for(let i = 0; i < length; i++){
				this.prices.push(this.histories[i].price * this.histories[i].quantity)
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

</style>