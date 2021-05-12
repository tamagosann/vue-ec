<template>
    <div class="container">
		
		<!-- login form -->
		<div class="row">
			<div class="col-lg-offset-3 col-lg-6 col-md-offset-2 col-md-8 col-sm-10 col-xs-12">
				<div class="well">
					<form method="post" action="item_list_pizza.html">
						<fieldset>
							<legend>
								ログイン
							</legend>
							<label
									class="control-label" style="color: red" for="inputError">メールアドレス、またはパスワードが間違っています</label>
							<div class="form-group">
								<label for="inputEmail">メールアドレス:</label>
								<input type="text" id="inputEmail" class="form-control"
									placeholder="Email" v-model="userInfo.email">

								<div v-if="!userInfo.email" class="red">必須項目です</div>
							</div>
							<div class="form-group">
								<label for="inputPassword">パスワード:</label>
								<input type="text" id="inputPassword" class="form-control"
									placeholder="Password" v-model="userInfo.password">
							</div>
							<div class="form-group">
								<button type="submit" class="btn btn-primary" @click.prevent="login">ログイン</button>
							</div>
						</fieldset>
					</form>
				</div>
			</div>
		</div>

		<div class="row">
			<div class="text-center">
				<a href="">ユーザ登録はこちら</a>
			</div>
		</div>
		
	</div>
</template>

<script>
import { mapActions } from "vuex";

export default ({
	name: 'Login',
	data(){
		return {
			userInfo: {
				email: '',
				password: '',
			}
		}
	},
	methods: {
		...mapActions(['login'])
	}
})
</script>
