<template>
	<div class="container">

		<!-- search form -->
		<div class="row">
			<div class="col-lg-offset-3 col-lg-6 col-md-offset-2 margin-auto">
				<div class="panel panel-default">
					<div class="panel-heading">
						<div class="panel-title">商品を検索する</div>
					</div>
					<div class="panel-body">
						<form method="post" action="#" class="form-horizontal">
							<div class="form-group">
								<label for="code" class="control-label col-sm-2">商品名</label>
								<div class="col-sm-9">
									<input type="text" name="code" id="code" class="form-control input-sm" @keyup="keywordKeyUp" v-model="keyword">
									<p v-show="keywordBlankFlag" class="alert">※キーワードを入力してください</p>
									<p v-show="searchMissedFlag" class="alert">※キーワードに一致するものがありません。</p>
								</div>
							</div>
							<div class="text-center">
								<button type="submit" value="検索" class="btn btn-primary mr-5" @click.prevent="submit">検索</button>
								<button type="reset" value="クリア" class="btn btn-default" @click="clear">クリア</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>

		<!-- table -->
		<div class="row">
			<div class="table-responsive col-lg-offset-1 margin-auto">
				<div class="table table-striped item-list-table cardstable">
					<div v-for="item in items" :key="item.id" class="card">
						<router-link :to="{name: 'ItemDetail', params:{itemId:item.id}}">		
							<a style="display:block">
								<div class="card-img-box">
										<img :src="item.path" class="card-img">
								</div><br>
								<div>{{item.name}}</div>
								<br>
								<span class="">価格</span>&nbsp;&nbsp;{{item.price}}円<br>
							</a>			
						</router-link>
					</div>
				</div>

			</div>
		</div>
	</div>
	<!-- end container -->
	<!-- <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
	<script src="../static/js/bootstrap.min.js"></script> -->

</template>

<script>
import { mapGetters } from "vuex"
import { mapActions } from "vuex"


export default {
  name:'itemList',
	data(){
    return {
		keyword: '',
		keywordBlankFlag: false,
    }
  },
	computed:{
		...mapGetters(["items", 'searchMissedFlag']),
	},
	methods:{
		// 検索ボタン
		submit(){
			if(this.keyword) {
				this.itemSearch(this.keyword);
			} else {
				this.keywordBlankFlag = true;
				return;
			}
		},
		// クリアボタン
		clear(){
			this.keyword = "";
		},
		keywordKeyUp() {
			if(!this.keyword) {
                this.keywordBlankFlag = true;
            } else {
                this.keywordBlankFlag = false;
            }
        },
		...mapActions(["itemSearch"]),
		},
}

</script>

<style scoped>
	.margin-auto {
		margin: 0 auto;
	}
	.mr-5 {
		margin-right: 20px;
	}
	.cardstable {
		display: flex;
		align-items: flex-start;
		flex-wrap: wrap;
		justify-content: space-between;
	}
	.card {
		border: 2px solid #ccc;
		padding: 10px;
		border-radius: 10px;
		margin: 10px;
		width: 224px;
		flex: 0 0 auto;
	}
	.card-img-box {
		display:block;
		width:200px;
		height:200px;
		overflow:hidden;
		margin:0 auto;
	}
	.card-img {
		object-fit:cover;
		width:100%;
		height:100%;
		max-width:200px;
		max-height:200px;
	}
	.alert {
		color: tomato;
	}
</style>