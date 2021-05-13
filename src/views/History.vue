<template>
    <div class="container">
        <!-- table -->
		<div v-show="histories.length > 0">

			<div class="row">
				<div
					class="col-lg-offset-3 col-lg-6 col-md-offset-2 margin-auto">
					<h3 class="text-center">注文履歴</h3>

				<!-- 商品名 / 価格ヘッダー -->
					<table class="table table-striped item-list-table" style="max-width: 600px">
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
							<tr v-for="history in histories" :key="history.historyItemId">
								<td>
									<div class="center">
										<img :src="history.item.path"
											class="img-responsive img-rounded item-img-center" width="150" height="150">
											<br>
									</div>
								</td>
								<td style="text-align: center">
									<div>
										<div>
											{{history.item.name}}
										</div>
										<div class="price">
											{{history.item.price.toLocaleString()}}円	
										</div>
										<div class="price">
											{{history.item.quantity}}個	
										</div>
										<div>
											状態：{{history.status | status}}	
										</div>
										<div v-if="history.status !== 9">
											お届け先住所：{{history.destinationAddress}}
										</div>
										<div v-if="history.status !== 9">
											お届け予定日：{{history.destinationTime}}
										</div>
										<br>
										<div v-if="history.status !== 9">
											<button @click.prevent="orderCancell(history)">購入をキャンセル</button>
										</div>
									</div>
								</td>
							</tr>
							
						</tbody>
					</table>

				</div>
			</div>
		</div>

		<div v-show="histories.length === 0" class="empty">
			<p>注文履歴がありません</p>
		</div>

    </div>
    
</template>

<script>

import {mapGetters} from 'vuex'
import {mapActions} from 'vuex'

export default({
    name: 'History',
	filters: {
		status(item) {
			if(item === 0) {
				return '未入金'
			} else if(item === 1) {
				return '入金済み'
			} else if(item === 9) {
				return 'キャンセル済み'
			}
		},
	},
	computed: {
		...mapGetters(['loginUser', 'histories']),
	},
	methods: {
		orderCancell(history) {
			if(confirm('本当にキャンセルしますか？')) {
				this.deleteOrderAction(history);
			}
		},
		...mapActions(['deleteOrderAction'])
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
	.margin-auto {
		margin: 0 auto;
	}
	.empty{
		text-align: center;
		margin-top: 100px;
		height: 100px;
		font-size: 40px;
	}

</style>