<template>
	<view id="article-sort">
		<view class="container-fluid">
			<view class="content-page">
				<view class="content">
					<view class="row">
						<view class="col-12">
							<view class="card mb-2">
								<view class="card-body">
									<h4 class="header-title mb-2">{{sort.name || ""}}</h4>
									<view class="alert alert-primary bg-white text-primary" role="alert">
										<p class="mb-1 font-15">{{sort.description || ""}}</p>
										<p class="flex-end mb-0 font-15">该分类创建于：{{sort.create_time || ""}}</p>
									</view>
								</view>
							</view>
						</view>
					</view>
					<view class="row">
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
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				params : [],
				sort: [],				// 分类数据
				article: {				// 文章数据
					page:2,
				},
				preview_article: [],    // 展示文章
				self_page: 1,           // 当前页码
				last_page: false,       // 最后一页
			}
		},
		onLoad(params) {
			this.params = params
			this.getArticle()
		},
		methods: {
			// 获取文章数据
			getArticle(page = 1){
				if (page <= this.article.page) {
				    if (page == this.article.page) this.last_page = true
					this.$http.get('/article-sort',{
						params: {
							id: this.params.id,
							limit: 5,
							page
						}
					}).then(res => {
						if (res.data.code == 200) {
							let data  = res.data.data
							this.sort = data
							data.expand.data.forEach(item=>{
								item.views = this.$inisHelper.format.number(item.views)
								this.preview_article.push(item)
							})
							this.article = data.expand
							// 设置当前分页码
							this.self_page = page
						}
					})
				} else this.last_page = true
			}
		}
	}
</script>

<style>

</style>
