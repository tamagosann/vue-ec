<template>
	<div class="container">
		<nav class="navbar navbar-default">
			<div class="container-fluid">
				<!-- Brand and toggle get grouped for better mobile display -->
				<div class="navbar-header">
					<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
						<span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span>
					</button>
					<a class="navbar-brand" href=""> <!-- 企業ロゴ --> <img alt="main log" src="" height="35">
					</a>
				</div>

				<!-- Collect the nav links, forms, and other content for toggling -->
				<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
					<p class="navbar-text navbar-right">
						<a href="" class="navbar-link" >ショッピングカート</a>&nbsp;&nbsp;
						<a href="" class="navbar-link" >注文履歴</a>&nbsp;&nbsp;
						<a href="" class="navbar-link" >ログイン</a>&nbsp;&nbsp;
						<a href="" class="navbar-link" >ログアウト</a>
					</p>
				</div>
				<!-- /.navbar-collapse -->
			</div>
			<!-- /.container-fluid -->
		</nav>

		<!-- search form -->
		<div class="row">
			<div class="col-lg-offset-3 col-lg-6 col-md-offset-2 col-md-8 col-sm-10 col-xs-12">
				<div class="panel panel-default">
					<div class="panel-heading">
						<div class="panel-title">商品を検索する</div>
					</div>
					<div class="panel-body">
						<form method="post" action="#" class="form-horizontal">
							<div class="form-group">
								<label for="code" class="control-label col-sm-2">商品名</label>
								<div class="col-sm-9">
									<input type="text" name="code" id="code" class="form-control input-sm" v-model="keyword">
									<p v-show="show">※キーワードを入力してください</p>
								</div>
							</div>
							<div class="text-center">
								<button type="submit" value="検索" class="btn btn-primary" @click.prevent="submit">検索</button>
								<button type="reset" value="クリア" class="btn btn-default" @click="clear">クリア</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>

		<!-- table -->
		<div class="row">
			<div class="table-responsive col-lg-offset-1 col-lg-10 col-md-offset-1 col-md-10 col-sm-10 col-xs-12">
				<table class="table table-striped item-list-table" >
					<tbody>
						<tr v-for="item in items" :key="item.id">
							<th>
								<div style="display:block;width:200px;height:200px;overflow:hiden;margin:0 auto;" >
									<router-link :to="{name: 'ItemDetail', params:{itemId:item.id}}">
									<img :src="item.path" class="img-responsive img-rounded item-img-center" style="objectfit:cover;width:100%;height:100%;">
									</router-link>
								</div><br>
								<router-link to = "{name:'ItemDetail', params:{itemId}}">
								<a>{{item.name}}</a>
								</router-link>
								<br>
								<span class="price">価格</span>&nbsp;&nbsp;{{item.price}}<br>
							</th>
						</tr>
					</tbody>
				</table>

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
			show:false,
    }
  },
	computed:{
		...mapGetters(["items"]),
	},
	methods:{
		// 検索ボタン
		submit(){
			this.itemSearch(this.keyword);
			if(this.keyword==""){
				this.show = true
			}else{
				this.show = false
			}
		},
		// クリアボタン
		clear(){
			this.keyword = ""
		},
		...mapActions(["itemSearch"]),
	},
}

</script>
