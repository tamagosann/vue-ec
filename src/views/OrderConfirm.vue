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
				<h3 class="text-center">注文内容確認</h3>

			
				<table class="table table-striped item-list-table">
					<tbody>
						<tr>
							<th>
								<div class="text-center">
									商品名
								</div>
							</th>
							<th>
								<div class="text-center">
									価格(税抜)
								</div>
							</th>
						</tr>

						<tr v-for="item in items" :key="item.id">
							<td>
								<div class="center">
									<img :src="item.path"
										class="img-responsive img-rounded item-img-center" width="300" height="300">
										<br>
									{{item.name}}
								</div>
							</td>
							<td width="100px">
								<span class="price">
									{{item.price}}円	
								</span>
							</td>
						</tr>
						
					</tbody>
				</table>

			</div>
		</div>

        <div class="row">
			<div class="col-xs-offset-2 col-xs-8">
				<div class="form-group text-center">
					<span id="total-price">消費税：8,000円</span><br>
					<span id="total-price">ご注文金額合計：38,000円 (税込)</span>
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
							<tr v-for="title in addressInfoTitles" :key="title.title">
								<td>
									<div class="text-center">
										{{title.title}}
									</div>
								</td>
								<td>
									<input type="text">
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
													class="form-control input-sm" />
											</div>

										</div>

										<!-- ラジオボタン（配送時間） -->
										<div class="row">
											<div class="col-sm-12">
												<label class="radio-inline">
													<input type="radio"
														name="responsibleCompany" checked="checked">
													10時
												</label>
												<br>
											</div>
										</div>



									</div>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>

			<!-- table -->
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
													name="responsibleCompany" checked="checked">
												代金引換
											</label>
										</div>
									</div>
								</td>
							</tr>
							<tr>
								<td align="center">
									<div class="row">
										<div class="col-sm-12">
											<label class="radio-inline">
												<input type="radio"
													name="responsibleCompany" checked="checked">
												クレジットカード
											</label><br><br>
										</div>
									</div>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
			<div class="row">
				<div class="col-xs-offset-4 col-xs-4">
					<div class="form-group">
						<input class="form-control btn btn-warning btn-block" type="submit" value="この内容で注文する">
					</div>
				</div>
			</div>
		</form>

    </div>
    
</template>

<script>
import {mapGetters} from 'vuex'
export default({
    name: 'OrderConfirm',
	data(){
		return {
			addressInfoTitles: [
				{title: "お名前"},
				{title: "メールアドレス"},
				{title: "郵便番号"},
				{title: "住所"},
				{title: "電話番号"},
			],
			times: [
				{text: '10時'},
				{text: '11時'},
				{text: '12時'},
				{text: '13時'},
			],
		}
	},
	computed: {
		...mapGetters(['items'])
	}

})
</script>

<style>
	.table{
		margin-left: auto;
		margin-right: auto;
	}

</style>