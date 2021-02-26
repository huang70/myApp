<template>
	<div class="form-wrap">
		<el-form label-position="top" label-width="80px" :model="formdata" class="login-form">
			<h2>登录</h2>
			<el-form-item label="用户名">
				<el-input v-model="formdata.username"></el-input>
			</el-form-item>
			<el-form-item label="密码">
				<el-input v-model="formdata.password"></el-input>
			</el-form-item>
			<el-button type="primary" class="loginbtn" @click.prevent="login()">登录</el-button>

		</el-form>

	</div>
</template>

<script>

	export default {
		name: 'Login',
		data() {
			return {
				formdata: {
					username: '',
					password: ''
				}
			}
		},
		mounted() {

		},
		methods: {
			//登录请求
			login() {
				this.$axios.get('login', this.formdata).then(response => {
					if (this.formdata.username === "" || this.formdata.password === "") {
						this.$message.error('用户名或密码不可为空！');
						return 0;
					}
					var res = response.data,
						len = res.length,
						userNameArr = [],
						passWordArr = [],
						ses = window.sessionStorage;
					// 拿到所有的username
					for (let i = 0; i < len; i++) {
						userNameArr.push(res[i].username);
						passWordArr.push(res[i].password);
					}
					console.log(userNameArr, passWordArr);

					let index = userNameArr.indexOf(this.formdata.username);
					if (index === -1) {
						this.$message.error('用户名不存在！');
					}
					else {
						if (passWordArr[index] === this.formdata.password) {
							// 把token放在sessionStorage中
							ses.setItem('token', res[index].token);
							this.$parent.$data.userTitle = res[index].usertitle;
							//验证成功进入首页
							this.$message.success('登录成功！');
							// this.startHacking('登录成功！');
							//跳转到首页
							this.$router.push('/Home');
							// console.log(this.$router);
						}
						else {
							this.$message.error('密码错误！');
						}
					}
				}).catch(err => {
					console.log('连接数据库失败！');
					console.log(err);
				})
			},
		}
	};
</script>

<style scoped>
	.form-wrap {
		height: 100%;

		display: flex;
		justify-content: center;
		align-items: center;
		background-color: rgb(145, 166, 233);
	}

	.form-wrap .login-form {
		width: 350px;
		background-color: #fff;
		padding: 20px;
		border-radius: 30px;
	}

	.loginbtn {
		width: 100%;
	}

</style>
