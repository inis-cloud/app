<template>
	<view id="index">
		<!-- 轮播组件 - 开始 -->
		<view class="banner">
			<xsuu-swiper :swiperItems="swiperItems" :button="0"></xsuu-swiper>
		</view>
		<!-- 轮播组件 - 结束 -->
		<view class="container-fluid">
			<view class="content-page">
				<view class="content">
					<!-- 分类卡片 - 开始 -->
					<i-nav></i-nav>
					<!-- 分类卡片 - 结束 -->
					<!-- 站内公告 - 开始 -->
					<view v-show="tips.is_show" class="row">
						<view class="col-12 mt-1">
							<view class="card mb-1">
								<view class="card-body p-1">
									<view class="row flex-center">
										<view class="col-3 flex-center">
											<image src="@/static/img/notice.png" class="w-100 h-25px"></image>
										</view>
										<view class="col-9">
											<dazhuangSubtitleScrolling :lists="tips.lists" :width="tips.width" :height='tips.height' :background='tips.background' :color='tips.color' :speed='tips.speed' />
										</view>
									</view>
								</view>
							</view>
						</view>
					</view>
					<!-- 站内公告 - 结束 -->
					<!-- Tabs - 开始 -->
					<view class="row">
						<view class="col-12 mt-1">
							<view class="card mb-2">
								<view class="card-body p-1">
									<v-tabs v-model="tab.current" :tabs="tab.tabs" lineHeight="3px" @change="changeTab"></v-tabs>
								</view>
							</view>
						</view>
					</view>
					<!-- Tabs - 结束 -->
					<view v-if="tab.current == 0" class="row">
						<view v-for="(item,index) in preview_article" :key="item.id" class="col-12">
							<navigator open-type="navigate" :url="'../article/article?id=' + item.id">
								<view class="card d-block">
									<view>
										<image :src="item.expand.img_src" class="card-img-top"></image>
										<view class="card-img-overlay">
											<text class="badge badge-secondary p-1">
												{{item.views || '0'}}
											</text>
										</view>
									</view>
									<view class="card-body position-relative p-2">
										<text class="d-block mb-1">
											<span v-if="item.is_top == 1" class="badge badge-danger mr-1">置顶</span>
											{{item.title || ''}}
										</text>
										<text v-if="item.description != '\n'" class="d-block text-muted font-13" v-text="item.description"></text>
									</view>
								</view>
							</navigator>
						</view>
						<view class="col-12">
						    <view class="card-body pt-0">
						        <view class="flex-center">
						            <text v-show="last_page" class="see-more pt-1 pb-1 pl-3 pr-3 font-13">再怎么找也没有啦~</text>
									<button v-show="!last_page" v-on:click="getArticle(self_page + 1)" type="button" class="btn pt-1 pb-1 btn-link text-muted font-13 see-more">
										<text class="pl-3 pr-3">
											查看更多
										</text>
									</button>
						        </view>
						    </view>
						</view>
					</view>
					<view v-if="tab.current == 1" class="row">
						<view v-for="(item,index) in hot_article.data" :key="item.id" class="col-12">
							<navigator open-type="navigate" :url="'../article/article?id=' + item.id">
								<view class="card d-block">
									<view>
										<image :src="item.expand.img_src" mode="widthFix" class="card-img-top"></image>
										<view class="card-img-overlay">
											<text class="badge badge-secondary p-1">
												{{item.views || '0'}}
											</text>
										</view>
									</view>
									<view class="card-body position-relative p-2">
										<text class="d-block mb-1">
											<span v-if="item.is_top == 1" class="badge badge-danger mr-1">置顶</span>
											{{item.title || ''}}
										</text>
										<text v-if="item.description != '\n'" class="d-block text-muted font-13" v-text="item.description"></text>
									</view>
								</view>
							</navigator>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import iNav from "@/components/inis/nav-bar.vue"
	import vTabs from "@/components/v-tabs/v-tabs.vue"
	import xsuuSwiper from "@/components/Xss-swiper/Xsuu-swiper.vue"
	import dazhuangSubtitleScrolling from "@/components/dazhuang-SubtitleScrolling/dazhuang-SubtitleScrolling.vue"
	export default {
		// 注册组件
		components: {
			iNav, vTabs, xsuuSwiper, dazhuangSubtitleScrolling
		},
		data() {
			return {
				inisENV: process.inisENV,
				swiperItems: [],
				tips: {
					lists:['这是一条公告信息！'],
					//滚动显示区域宽度
					width:'375px',
					//滚动显示区域高度，大于等于40
					height:'40px',
					//滚动显示区域背景颜色
					background:'#ffffff',
					//滚动显示字幕颜色
					color:'#98a6ad',
					//滚动速度
					speed:15,
					// 是否显示
					is_show: true,
				},
				tab: {
					current: 0,
					tabs: ['最新文章', '热门文章'],
				},
				article: {				// 文章数据
					page:2,
				},
				preview_article: [],    // 展示文章
				self_page: 1,           // 当前页码
				last_page: false,       // 最后一页
				hot_article: {},		// 热门文章
			}
		},
		onLoad() {
			this.getBanner()
			this.setTips()
			this.getArticle()
			this.getPlacard()
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
			// 设置公告
			setTips(){
				this.tips = {
					lists:['这是一条公告信息呀！'],
					//滚动显示区域宽度
					width:'375px',
					//滚动显示区域高度，大于等于40
					height:'40px',
					//滚动显示区域背景颜色
					background:'#ffffff',
					//滚动显示字幕颜色
					color:'#98a6ad',
					//滚动速度
					speed:15,
					// 是否显示
					is_show: true,
				}
			},
			// Tab选中项
			changeTab(index) {
				if (index == 1) {
					this.getHotArticle()
				}
			},
			// 获取文章
			getArticle(page = 1){
				if (page <= this.article.page) {
				    if (page == this.article.page) this.last_page = true
					this.$http.get('/article',{
						params: {
							limit: 5,
							page
						}
					}).then(res => {
						if (res.data.code == 200) {
							let data = res.data.data
							data.data.forEach(item=>{
								item.views = this.$inisHelper.format.number(item.views)
								this.preview_article.push(item)
							})
							this.article = data
							// 设置当前分页码
							this.self_page = page
						}
					})
				} else this.last_page = true
			},
			// 获取热门文章
			getHotArticle(){
				this.$http.get('/article',{
					params: {
						limit: 5,
						order: 'views desc'
					}
				}).then(res => {
					if (res.data.code == 200) {
						let data = res.data.data
						data.data.forEach(item=>{
							item.views = this.$inisHelper.format.number(item.views)
						})
						this.hot_article = data
					}
				})
			},
			// 获取公告信息
			getPlacard(){
				
				let whereOr = ''
				
				// #ifdef MP-QQ
				whereOr = 'type,=,qq;type,=,all;'
				// #endif
				
				// #ifdef MP-WEIXIN
				whereOr = 'type,=,wechat;type,=,all;'
				// #endif
				
				this.$http.get('/placard/sql',{
					params: { whereOr }
				}).then(res => {
					if (res.data.code == 200) {
						let data = res.data.data
						if (data.count > 0) {
							this.tips.lists = [data.data[0].content]
							this.tips.is_show = true
						} else this.tips.is_show = false
						
					}
				})
			},
		},
		computed: {
			
		}
	}
</script>

<style>
</style>