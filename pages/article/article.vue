<template>
	<view id="article">
		<view class="container-fluid">
			<view class="content-page">
				<view class="content">
					<view class="row pt-2 pb-2">
						<view class="col-12">
							<view class="card mb-0">
								<view class="card-body">
									<view class="col-12 flex-center">
										<text class="h4">
											{{article.title || ''}}
										</text>
									</view>
									<view class="col-12 flex-center">
										<view class="articl-svg">
											<image src="@/static/svg/user.svg" class="h-4em w-4em"></image>
											<text class="ml-1">{{article.expand.author.nickname || ''}}</text>
										</view>
										<view class="articl-svg">
											<image src="@/static/svg/clock.svg" class="h-4em w-4em"></image>
											<text class="ml-1">{{article.create_time || ''}}</text>
										</view>
										<view class="articl-svg">
											<image src="@/static/svg/views.svg" class="h-4em w-4em"></image>
											<text class="ml-1">{{article.views || '0'}}</text>
										</view>
										<view class="articl-svg">
											<image src="@/static/svg/edit.svg" class="h-4em w-4em"></image>
											<text class="ml-1">{{article.font_count || '0'}}</text>
										</view>
									</view>
								</view>
							</view>
						</view>
					</view>
					<view class="row">
						<view class="col-12 details">
							<view class="card">
								<view class="card-body">
									<MDParserHighlight :resource="article.content"></MDParserHighlight>
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
	import MDParserHighlight from '@/components/cmder-MDParserHighlight/index.vue'
	export default {
		components:{
			MDParserHighlight
		},
		data() {
			return {
				params : [],
				article: {
					expand: {
						author: {
							nickname: ""
						}
					}
				},
			}
		},
		onLoad(params) {
			this.params = params
			this.getArticle()
		},
		methods: {
			getArticle(){
				this.$http.get('/article', {
					params:{
						id  : this.params.id,
						mode: 'md'
					}
				}).then(res => {
					if (res.data.code == 200) {
						let data = res.data.data
						this.article = data
					}
				})
			}
		}
	}
</script>

<style>
	.articl-svg{
		color: #555;
		font-size: .5em;
		line-height: 16px;
		margin-right: 12px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.articl-svg text{
		white-space: nowrap;
	}
</style>
