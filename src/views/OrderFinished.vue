<template>
    <div class="container">

		<!-- table -->
		<div class="row">
			<div
				class="table-responsive col-lg-offset-1 col-lg-10 col-md-offset-1 col-md-10 col-sm-10 col-xs-12">
				<h3 class="text-center">決済が完了しました！</h3>
				<div class="text-center">
					<p>この度はご注文ありがとうございます。</p>
					<p>お支払い先は、お送りしたメールに記載してありますのでご確認ください。</p>
					<p>メールが届かない場合は「注文履歴」からご確認ください。</p>
				</div>
			</div>
		</div>

		<br><br>
		<div class="row">
			<div class="col-xs-offset-5 col-xs-2 btn-container">
				<div class="form-group">
					<router-link :to="{name: 'ItemList'}" style="text-decoration: none">
						<form action="order_finished.html" style="margin-right: 40px">
							<input class="form-control btn btn-warning btn-block"
								type="submit" value="ホーム画面に戻る">
						</form>
					</router-link>
				</div>

				<div class="form-group">
					<router-link :to="{name: 'History'}" style="text-decoration: none">
						<form action="order_finished.html">
							<input class="form-control btn btn-warning btn-block"
								type="submit" value="注文履歴画面へ">
						</form>
					</router-link>
				</div>
				
			</div>
		</div>
	</div>
</template>

<script>

export default ({
    name: 'OrderFinished'
})
</script>

<style scoped>
	input {
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
	.btn-container{
		display: flex;
		justify-content: center;
		/* justify-content: space-between; */
	}
</style>
