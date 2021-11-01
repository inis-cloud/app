<template>
	<view id="links">
		<view class="container-fluid">
			<view class="content-page">
				<view class="content">
					<!-- Tabs - 开始 -->
					<view class="row">
						<view class="col-12">
							<view class="card mb-1">
								<view class="card-body p-1">
									<v-tabs v-model="tab.current" :tabs="tab.tabs" lineHeight="3px" v-on:change="changeTab"></v-tabs>
								</view>
							</view>
						</view>
					</view>
					<view class="row">
						<view class="col-12">
							<view class="card mb-1">
								<view class="card-body p-1">
									<view class="alert alert-primary bg-white text-primary mt-3 mb-4" role="alert">
										<view class="mb-1">
											<text class="font-15">{{links.description || ""}}</text>
										</view>
										<view class="flex-end mb-0">该分组创建于：
											<text class="font-15">{{links.create_time || ""}}</text>
										</view>
									</view>
									<view class="row">
										<view v-for="(item,index) in preview.data" :key="item.id" class="col-12">
											<view class="card text-white bg-white">
												<view class="card-body pb-2">
													<blockquote class="card-bodyquote">
														<view class="head">
															<image :src="item.head_img || ''" class="rounded-circle shadow-sm head-img">
															<text class="text-muted font-13">{{item.name || ""}}</text>
														</view>
														<view class="text-muted font-15 mt-2 mb-0">{{item.description || ""}}</view>
													</blockquote>
												</view>
												<view class="card-footer text-muted font-15"> 相识于：{{natureTime(item.create_time) || ""}}</view>
											</view>
										</view>
										<view class="col-12">
										    <view class="card-body pt-0">
										        <view class="flex-center">
										            <text v-show="last_page" class="see-more pt-1 pb-1 pl-3 pr-3 font-13">再怎么找也没有啦~</text>
													<button v-show="!last_page" v-on:click="getLinks(self_page + 1)" type="button" class="btn pt-1 pb-1 btn-link text-muted font-13 see-more">
														<text class="pl-3 pr-3">
															查看更多
														</text>
													</button>
										        </view>
										    </view>
										</view>
									</view>
								</view>
							</view>
						</view>
					</view>
					<!-- Tabs - 结束 -->
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import vTabs from "@/components/v-tabs/v-tabs.vue"
	export default {
		components: {
			vTabs
		},
		data() {
			return {
				tab: {
					is_show: true,
					current: 0,
					tabs: [],
				},
				id: null,			// 分组ID
				sort: [],			// 分组数据
				links: [],			// 友链数据
				preview: {			// 预览数据
					count: 0,
					page: 1,
					data: []
				},
				self_page: 1,       // 当前页码
				last_page: false,   // 最后一页
			}
		},
		onLoad() {
			this.getLinksSort()
		},
		methods: {
			// 获取友链分组
			getLinksSort(){
				this.$http.get('/links-sort',{
					params: {
						limit: 20,
					}
				}).then(res => {
					if (res.data.code == 200) {
						
						let data  = res.data.data
						this.sort = data
						
						if (data.count > 0) {
							
							// 是否显示
							this.tab.is_show = true
							data.data.forEach(item=>{
								this.tab.tabs.push(item.name)
							})
							this.changeTab(0)
							
						} else this.tab.is_show = false
					}
				})
			},
			// Tab选中项
			changeTab(index) {
				let id = this.sort.data[index].id
				this.id= id
				this.getLinks()
			},
			// 获取友链数据
			getLinks(page = 1){
				this.$http.get('/links-sort',{
					params: {
						id: this.id,
						page,
						limit: 1,
					}
				}).then(res => {
					if (res.data.code == 200) {
						let data     = res.data.data
						this.links   = data
						
						this.preview.count = data.expand.count
						this.preview.page  = data.expand.page
						data.expand.data.forEach(item=>{
							this.preview.data.push(item)
						})
						
						// 设置当前分页码
						this.self_page = page
						this.last_page = (page == this.preview.page) ? true : false
					}
				})
			},
			// 人性化时间
			natureTime(date){
			    let time = this.$inisHelper.date.to.time(date)
			    return this.$inisHelper.time.nature(time)
			}
		},
		watch:{
			id: {
				handler(newValue, oldValue) {
					if (newValue != oldValue) this.preview.data = []
				},
			}
		}
	}
</script>

<style>

</style>
