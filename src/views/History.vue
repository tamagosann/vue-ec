<template>
    <div class="container">
        <!-- table -->
		<div v-show="histories.length > 0">

			<div class="row">
				<!-- <div class="col-lg-offset-3 col-lg-6 col-md-offset-2"> -->
				<div class="table-responsive col-lg-offset-1 col-lg-10 col-md-offset-1 col-md-10 col-sm-10 col-xs-12">
					<h3 class="text-center page-title marker">注文履歴</h3>

				<!-- 商品名 / 価格ヘッダー -->
					<table class="table table-striped item-list-table">
						<tbody>
							<tr>
								<th width="150px">
									<span class="text-center">
										商品
									</span>
								</th>
								<th width="150px">
									<span class="text-center">
										詳細情報
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
										<div class="item-container">
											{{history.item.name}}
										</div>
										<div class="price price-and-quantity">
											{{history.item.price.toLocaleString()}}円 × {{history.item.quantity}}個	
										</div>
										<div class="ul-container">
											<ul class="order-info-ul delivery-info">
												<li>
													状態：{{history.status | status}}
												</li>
												<li>
													<div v-if="history.status !== 9">
														お届け先住所：{{history.destinationAddress}}
													</div>
												</li>
												<li>
													<div v-if="history.status !== 9">
														お届け予定日：{{history.destinationTime}}
													</div>
												</li>
											</ul>
										</div>
										
										
										
										<br>
										<div v-if="history.status !== 9">
											<button @click.prevent="orderCancell(history)" class="small-bottom-btn">購入をキャンセル</button>
										</div>
									</div>
								</td>
							</tr>
							
						</tbody>
					</table>

					<!-- 注文に進むボタン -->
					<div class="btnContainer">

						<div class="col-xs-offset-4 col-xs-4" style="margin: 0">
							<div class="form-group">
								<router-link :to="{name: 'ItemList'}" style="text-decoration: none">
									<input class="form-control btn btn-warning btn-block bottom-btn" value="ホーム画面に戻る">
								</router-link>
							</div>
						</div>

						<div class="col-xs-offset-4 col-xs-4" style="margin: 0">
							<div class="form-group">
								<router-link :to="{name: 'CartList'}" style="text-decoration: none">
									<input class="form-control btn btn-warning btn-block bottom-btn" value="カート画面に戻る">
								</router-link>
							</div>
						</div>

					</div>

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
	button input {
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
		margin:  25px 0;
	}
	.order-info-ul {
		list-style-type: none;
		text-align: left;
		/* margin-left: 15px; */
		margin: 0 auto; 

	}
	.page-title {
		margin-bottom: 30px
	}
	/* .marker {
		background: linear-gradient(transparent 50%, #ffcc66 80%);
		width: 250px;
		margin: 30px auto;
	} */
	.marker {
		background: linear-gradient(transparent 50%, #ffcc66 80%);
		width: 250px;
		margin: 0 auto 60px;
	}	
	.bottom-btn {
		margin: 40px 0 100px 0;
	}
	.small-bottom-btn{
		margin: 0 0 20px 0;
	}
	.delivery-info {
		font-size: 12px;
		color: rgba(0, 0, 0, 0.5)
	}
	.item-container{
		padding-top: 20px;
	}
	.display-center{
		padding: 0 auto;
	}
	.ul-container{
		display: flex;

	}

</style>