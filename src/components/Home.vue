<template>
	<!-- [ Layout wrapper ] Start -->
	<div class="layout-wrapper layout-2">
		<div class="layout-inner">
			<!-- [sidenav] Start-->
			<div id="layout-sidenav" class="layout-sidenav sidenav sidenav-vertical bg-dark">
				<v-sidenav></v-sidenav>
			</div>
			<!-- [layout-container] Start-->
			<div class="layout-container">
				<!-- [ Layout navbar ( Header ) ] Start -->

				<v-headnav></v-headnav>

				<!-- [ Layout navbar ( Header ) ] End -->

				<!-- [ Layout content ] Start -->
				<div class="layout-content">

					<router-view></router-view>
					<!-- [ Layout footer ] Start -->
					<nav class="layout-footer footer bg-white">
						<div class="container-fluid d-flex flex-wrap justify-content-between text-center container-p-x pb-3">
							<div class="pt-3">
								<span class="footer-text font-weight-semibold">&copy; <a href="https://srthemesvilla.com"
										class="footer-link" target="_blank">Copyright</a></span>
							</div>
							<div>
								<a href="javascript:" class="footer-link pt-3">About Us</a>
								<a href="javascript:" class="footer-link pt-3 ml-4">Help</a>
								<a href="javascript:" class="footer-link pt-3 ml-4">Contact</a>
								<a href="javascript:" class="footer-link pt-3 ml-4">Terms &amp; Conditions</a>
							</div>
						</div>
					</nav>
					<!-- [ Layout footer ] End -->


				</div>
				<!-- [ Layout content ] End -->

			</div>
			<!-- layout-container End-->
		</div>
	</div>
	<!-- [ Layout wrapper] End -->
</template>
<script>
	import vSidenav from '@/components/common/Sidenav'
	import vHeadnav from '@/components/common/Headnav'


	export default {
		data() {
			return {

			}
		},

		components: {
			vSidenav,
			vHeadnav,

		}


	}

</script>

<style lang='scss'>


</style>
