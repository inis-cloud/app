<template>
	<view id="sort">
		<!-- 轮播组件 - 开始 -->
		<view class="banner">
			<xsuu-swiper :swiperItems="swiperItems" :button="0"></xsuu-swiper>
		</view>
		<!-- 轮播组件 - 结束 -->
		<view class="container-fluid">
			<view class="content-page">
				<view class="content">
					<view class="row">
						<view class="col-12">
							<view class="card mt-1">
								<view class="card-body">
									<h4 class="header-title mb-2">专题分类</h4>
									<view class="row">
										<view v-for="(item,index) in sort.data" :key="item.id" class="col-3">
											<navigator class="flex-wrap" open-type="navigate" :url="'../article-sort/article-sort?id=' + item.id">
												<image :src="item.opt.head_img || ''" class="d-block w-50px h-50px"></image>
												<text class="text-muted font-13 mt-1 mb-0">{{item.name || ""}}</text>
											</navigator>
										</view>
									</view>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import xsuuSwiper from "@/components/Xss-swiper/Xsuu-swiper.vue"
	export default {
		components: {
			xsuuSwiper
		},
		data() {
			return {
				swiperItems: [],	// 轮播内容
				sort: [],			// 分类数据
			}
		},
		onLoad() {
			this.getBanner()
			this.getSort()
		},
		methods: {
			// 获取轮播数据
			getBanner() {
				this.$http.get('/banner').then(res => {
					if (res.data.code == 200) {
						let data = res.data.data.data
						data.forEach(item => {
							item.Subtitle = item.description
							delete item.description
						})
						this.swiperItems = data
					}
				})
			},
			// 获取分类文章
			getSort(){
				this.$http.get('/article-sort',{
					params: {
						limit: 999
					}
				}).then(res => {
					if (res.data.code == 200) {
						let data  = res.data.data
						this.sort = data
					}
				})
			},
		}
	}
</script>

<style>

</style>
