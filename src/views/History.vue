<template>
    <div class="container">
        <nav class="navbar navbar-default">
            <div class="container-fluid">
                <!-- Brand and toggle get grouped for better mobile display -->
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed"
                        data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"
                        aria-expanded="false">
                        <span class="sr-only">Toggle navigation</span> <span
                            class="icon-bar"></span> <span class="icon-bar"></span> <span
                            class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand"> <!-- 企業ロゴ --> <img
                        alt="main log" src="" height="35">
                    </a>
                </div>

                <!-- Collect the nav links, forms, and other content for toggling -->

				<!-- リンク -->
                <div class="collapse navbar-collapse"
                    id="bs-example-navbar-collapse-1">
                    <p class="navbar-text navbar-right">
                        <a href="" class="navbar-link">ショッピングカート</a>&nbsp;&nbsp;
                        <a href="" class="navbar-link">注文履歴</a>&nbsp;&nbsp;
                        <a href="" class="navbar-link">ログイン</a>&nbsp;&nbsp;
                        <a href="" class="navbar-link">ログアウト</a>
                    </p>
                </div>
                <!-- /.navbar-collapse -->
            </div>
        </nav>

        <!-- table -->
		<div class="row">
			<div
				class="table-responsive col-lg-offset-1 col-lg-10 col-md-offset-1 col-md-10 col-sm-10 col-xs-12">
				<h3 class="text-center">注文履歴</h3>

			
				<table class="table table-striped item-list-table">
					<tbody>
						<tr>
							<th v-for="header in tableHeaders" :key="header.title" width="200px">
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
							<td width="100px">
								<div>
									{{item.name}}
								</div>
								<div class="price">
									{{item.price}}円
                                    <!-- キャンセルボタンを押したら区分値を変えるメソッドが欲しい（cancel()） -->
                                    <button>キャンセル</button>	
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

        <!-- table（お届け先情報） -->
		<form action="order_finished.html">
			<div class="row">
				<div
					class="table-responsive col-lg-offset-3 col-lg-6 col-md-offset-1 col-md-10 col-sm-10 col-xs-12">
					<h3 class="text-center">お届け先情報</h3>
					<table class="table table-striped item-list-table">
						<tbody>
							<tr>
								<td>
									<div class="text-center">
										お名前
									</div>
								</td>
								<td>
									<input type="text" v-model="info.destinationName">
								</td>
							</tr>
							<tr>
								<td>
									<div class="text-center">
										メールアドレス
									</div>
								</td>
								<td>
									<input type="email" v-model="info.email">
								</td>
							</tr>
							<tr>
								<td>
									<div class="text-center">
										郵便番号
									</div>
								</td>
								<td>
									<input type="number" v-model.number="info.destinationZipcode">
								</td>
							</tr>
							<tr>
								<td>
									<div class="text-center">
										住所
									</div>
								</td>
								<td>
									<input type="text" v-model="info.destinationAddress">
								</td>
							</tr>
							
							<tr>
								<td>
									<div class="text-center">
										配達日時
									</div>
								</td>
								<td>
									<div class="form-group">
										<div class="row">
											<div class="col-sm-12">
												<label
													class="control-label" style="color: red" for="inputPeriod">配達日時を入力してください</label>
											</div>

											<!-- カレンダー -->
											<div class="col-sm-5">
												<input type="date" name="name" id="name"
													class="form-control input-sm" v-model="info.orderDate"/>
											</div>

										</div>

										<!-- ラジオボタン（配送時間） -->
											<tr>
												<td class="row">
													<div class="col-sm-12">
														<label class="radio-inline">
															<input type="radio"
																name="responsibleCompany" checked="checked" value="10" v-model.number="info.time">10時
														</label>
														<br>
													</div>
												</td>
												<td class="row">
													<div class="col-sm-12">
														<label class="radio-inline">
															<input type="radio"
																name="responsibleCompany" checked="checked" value="11" v-model.number="info.time">11時
														</label>
														<br>
													</div>
												</td>
												<td class="row">
													<div class="col-sm-12">
														<label class="radio-inline">
															<input type="radio"
																name="responsibleCompany" checked="checked" value="12" v-model.number="info.time">12時
														</label>
														<br>
													</div>
												</td>
												
											</tr>

											<tr>
												<td class="row">
													<div class="col-sm-12">
														<label class="radio-inline">
															<input type="radio"
																name="responsibleCompany" checked="checked" value="13" v-model.number="info.time">13時
														</label>
														<br>
													</div>
												</td>
												<td class="row">
													<div class="col-sm-12">
														<label class="radio-inline">
															<input type="radio"
																name="responsibleCompany" checked="checked" value="14" v-model.number="info.time">14時
														</label>
														<br>
													</div>
												</td>
												<td class="row">
													<div class="col-sm-12">
														<label class="radio-inline">
															<input type="radio"
																name="responsibleCompany" checked="checked" value="15" v-model.number="info.time">15時
														</label>
														<br>
													</div>
												</td>
											</tr>

											<tr>
												<td class="row">
													<div class="col-sm-12">
														<label class="radio-inline">
															<input type="radio"
																name="responsibleCompany" checked="checked" value="16" v-model.number="info.time">16時
														</label>
														<br>
													</div>
												</td>
												<td class="row">
													<div class="col-sm-12">
														<label class="radio-inline">
															<input type="radio"
																name="responsibleCompany" checked="checked" value="17" v-model.number="info.time">17時
														</label>
														<br>
													</div>
												</td>
												<td class="row">
													<div class="col-sm-12">
														<label class="radio-inline">
															<input type="radio"
																name="responsibleCompany" checked="checked" value="18" v-model.number="info.time">18時
														</label>
														<br>
													</div>
												</td>
											</tr>


									</div>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>

			<!-- table(お支払い方法) -->
			<div class="row">
				<div
					class="table-responsive col-lg-offset-3 col-lg-6 col-md-offset-1 col-md-10 col-sm-10 col-xs-12">
					<h3 class="text-center">お支払い方法</h3>
					<table class="table table-striped item-list-table">
						<tbody>
							<tr>
								<td>
									<div class="row">
										<div class="col-sm-12">
											<label class="radio-inline">
												<input type="radio"
													name="responsibleCompany" checked="checked" value='0' v-model.number="info.status">代金引換
											</label>
										</div>
									</div>
								</td>
								<td>
									<div class="row">
										<div class="col-sm-12">
											<label class="radio-inline">
												<input type="radio"
													name="responsibleCompany" checked="checked" value='1' v-model.number="info.status">クレジットカード
											</label>
										</div>
									</div>
								</td>
							</tr>
						</tbody>
					</table>
				</div>

			</div>

			<!-- 注文ボタン -->
			<div class="row">
				<div class="col-xs-offset-4 col-xs-4">
					<div class="form-group">

						<router-link :to="{name: 'OrderFinished'}">
							<input class="form-control btn btn-warning btn-block" type="submit" value="この内容で注文する" @click="submit()">
						</router-link>

					</div>
				</div>
			</div>
		</form>

    </div>
    
</template>

<script>

import {mapGetters} from 'vuex'
import {mapActions} from 'vuex'

export default({
    name: 'OrderConfirm',
	created(){
		this.info = this.loginUser
	},
	data(){
		return {
			tableHeaders: [
				{title: "商品名"},
				{title: "価格（税込）"},
			],
			
			paymentMethods: [
				{title: "代金引換", status: 1},
				{title: "クレジットカード", status: 2},
			],
			info: {
				orderDate: '',
				destinationName: '',
				destinationZipcode: '',
				destinationAddress: '',
				destinationTel: '',
				destinationTime: '',
				creditcardNo: '' 
			},
			
			// 練習
			items: [
				{name: "りんご"}
			],
			prices: [],
			totalPrice: ''
		}
	},
	computed: {
		...mapGetters(['loginUser']),
		// ...mapState[('login_user')]
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
