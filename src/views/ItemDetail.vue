<template>
	<div class="container">

		<form action="cart_list.html">
			<div class="row">
				<div class="col-xs-offset-2 col-xs-8">

					<h3 class="text-center page-title marker">商品詳細</h3>
					<div class="row">
						<div class="margin-auto">
							<img :src="currentItem.path" class="img-responsive img-rounded item-img-center">
						</div>
					</div>

					<div class="row" style="margin: 40px">
						<div class="col-xs-offset-2 col-xs-8">
							<!-- <div>
								<label for="">商品キャプション</label>
							</div> -->
							<p>
								{{ currentItem.description ? currentItem.description : '商品キャプションが登録されていません' }}
							</p>
						</div>
					</div><br>
					<div class="row">
						<div class="col-xs-offset-2 col-xs-8">
							<div class="form-group">
								<div class="row">
									<!-- <div class="col-sm-12">
										<label for="inputResponsibleCompany">価格</label>
									</div> -->
									<div class="col-sm-12 center price-and-quantity">
										<label class="radio-inline" style="margin-bottom: 30px">
											<!-- <span class="price">&nbsp;&nbsp;</span>&nbsp;&nbsp;{{ currentItem.price.toLocaleString() }}円(税抜) -->
											価格：{{ currentItem.price.toLocaleString() }}円(税抜)
										</label>
									</div>
									<div class="col-sm-12 center price-and-quantity">
										<label class="radio-inline" for="quantity">
											数量：
										</label>
										<input type="number" v-model="quantity" min="1" step=1 style="width: 60px" id="quantity">
									</div>
								</div>
							</div>
						</div>
					</div><br>
					<!-- <div class="row">
						<div class="col-xs-offset-2 col-xs-8">
							<div class="form-group">
								<div class="row">
									<div class="col-xs-5 col-sm-5">
										<label for="">数量:</label>
										<input type="number" v-model="quantity" min="1" step=1>
									</div>
								</div>
							</div>
						</div>
					</div> -->
					<br>
					<div class="row border-top" style="padding-bottom: 20px">
						<div class="col-xs-offset-2 col-xs-10 center" style="margin: 0 auto; width: 100%">
							<div class="form-group">
								<span id="total-price">合計金額：{{ (currentItem.price * quantity).toLocaleString() }}円(税抜)</span>
							</div>
						</div>
					</div>
					<!-- <div class="row text-center bottom-btn">
							<button class="btn-to-cart" @click.prevent="addToCart">
								カートに入れる
							</button>
							<router-link :to="{name: 'ItemList'}">
								<button class="btn-to-return">
									商品一覧に戻る
								</button>
							</router-link>
					</div> -->
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
								<input class="form-control btn btn-warning btn-block bottom-btn" value="カートに入れる" @click.prevent="addToCart" >
							</div>
						</div>

					</div>
					
				</div>
			</div>
		</form>

	</div>
	<!-- end container -->
	<!-- <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
	<script src="../static/js/bootstrap.min.js"></script> -->

</template>

<script>
import { mapActions, mapGetters } from 'vuex';
// import {} from '';

export default {
  name:'itemDetail',
  data() {
	return {
		quantity: 1,
	}
  },
  computed:{
	...mapGetters(['items', 'uid']),
	currentItem() {
        const itemIndex = this.items.findIndex(item => item.id === this.$route.params.itemId);
        return this.items[itemIndex]
    },
  },
  methods: {
	addToCart() {
		if(this.uid !== null) {
			const itemToCart = {
				userId: this.uid,
				quantity: this.quantity,
				...this.currentItem,
			};
			this.addToCartAction(itemToCart);
		} else {
			const itemToCartNotUser = {
				userId: null,
				quantity: this.quantity,
				...this.currentItem,
			}
			this.addToCartAction(itemToCartNotUser);
		}
		this.$router.push({name: 'ItemList'});

	},
	...mapActions(['addToCartAction'])
  }
}
</script>

<style lang="css" scoped>
	.page-title {
		margin-bottom: 30px;
	}
	.marker {
		background: linear-gradient(transparent 50%, #ffcc66 80%);
		width: 250px;
		margin: 0 auto 60px;
	}	
	.btnContainer{
		display: flex;
		justify-content: center;
	}
	.btn-to-cart {
		padding: 5px 20px;
		background-color: orange;
		border: none;
		border-radius: 5px;
		margin-right: 20px;
	}
	.btn-to-return {
		padding: 5px 20px;
		background-color: grey;
		border: none;
		border-radius: 5px;
	}
	.margin-auto {
		margin: 0 auto;
	}
	.center{
		text-align: center;
	}
	.price-and-quantity{
		font-size: 25px;
	}
	.border-top{
		border-top: 1px solid rgba(0,0,0,0.4);
		border-bottom: 1px solid rgba(0,0,0,0.4);
		padding-top: 30px;
	}
	.bottom-btn {
		margin: 40px 0 100px 0;
	}
	.ul-container{
		display: flex;
		justify-content: center;
	}
	
</style>