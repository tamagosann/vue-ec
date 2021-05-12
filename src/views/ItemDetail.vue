<template>
	<div class="container">

		<form action="cart_list.html">
		<div class="row">
			<div class="col-xs-offset-2 col-xs-8">

				<h3 class="text-center">商品詳細</h3>
				<div class="row">
					<div class="margin-auto">
						<img :src="currentItem.path" class="img-responsive img-rounded item-img-center">
					</div>
				</div><br>
				<div class="row">
					<div class="col-xs-offset-2 col-xs-8">
						<div>
							<label for="">商品キャプション</label>
						</div>
						<p>
							{{ currentItem.description ? currentItem.description : '商品キャプションが登録されていません' }}
						</p>
					</div>
				</div><br>
				<div class="row">
					<div class="col-xs-offset-2 col-xs-8">
						<div class="form-group">
							<div class="row">
								<div class="col-sm-12">
									<label for="inputResponsibleCompany">価格</label>
								</div>
								<div class="col-sm-12">
									<label class="radio-inline">
										<span class="price">&nbsp;&nbsp;</span>&nbsp;&nbsp;{{ currentItem.price.toLocaleString() }}円(税抜)
									</label>
								</div>
							</div>
						</div>
					</div>
				</div><br>
				<div class="row">
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
				</div>
				<br>
				<div class="row">
					<div class="col-xs-offset-2 col-xs-10">
						<div class="form-group">
							<span id="total-price">合計金額：{{ (currentItem.price * quantity).toLocaleString() }}円(税抜)</span>
						</div>
					</div>
				</div>
				<div class="row text-center">
						<button class="btn-to-cart" @click.prevent="addToCart">
							カートに入れる
						</button>
						<router-link :to="{name: 'ItemList'}">
							<button class="btn-to-return">
								商品一覧に戻る
							</button>
						</router-link>
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
</style>