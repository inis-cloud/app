<template>
	<view class="row">
		<view class="col-12 mt-1">
			<view class="card mb-1">
				<view class="card-body">
					<view class="row hr pb-1">
						<view class="col-3">
							<navigator class="flex-wrap" open-type="navigate" url="../search/search">
								<image src="@/static/img/search.png" class="d-block w-50px h-50px"></image>
								<text class="text-muted font-15 mt-1 mb-0">搜索</text>
							</navigator>
						</view>
						<view class="col-3">
							<navigator class="flex-wrap" open-type="navigate" url="../sort/sort">
								<image src="@/static/img/sort.png" class="d-block w-50px h-50px"></image>
								<text class="text-muted font-15 mt-1 mb-0">分类</text>
							</navigator>
						</view>
						<view class="col-3">
							<navigator class="flex-wrap" open-type="navigate" url="../tool/tool">
								<image src="@/static/img/tool.png" class="d-block w-50px h-50px"></image>
								<text class="text-muted font-15 mt-1 mb-0">工具</text>
							</navigator>
						</view>
						<view class="col-3">
							<navigator class="flex-wrap" open-type="navigate" url="../links/links">
								<image src="@/static/img/users.png" class="d-block w-50px h-50px"></image>
								<text class="text-muted font-15 mt-1 mb-0">友链</text>
							</navigator>
						</view>
					</view>
					<view class="row mt-2 flex-center">
						<view class="col-2">
							<image src="@/static/logo.png" class="d-block w-50px h-50px"></image>
						</view>
						<view class="col-6">
							<text class="text-muted nowrap font-13">{{inisENV.description || ''}}</text>
						</view>
						<view class="col-4">
							<button v-on:click="share()" type="default" class="share">分享</button>
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
				inisENV: process.inisENV,
			}
		},
		onLoad() {
			
		},
		methods: {
			share(){
				console.log('分享？')
			}
		}
	}
</script>

<style>
	
</style>
