<template>
	<view class="box" :style="{'height':boxHeight,'background':background}">
		<view class="fk" :style="{'width':width,'height':height}" ></view>
		<scroll-view class="scroll-view_H" :style="{'width':width,'height':height,'color':color} " scroll-x="true" :scroll-left="scrollLeft">
			<view class="black"></view>
			<view class="list scroll-view-item_H uni-bg-green">
				<text v-for="(item,index) in lists" :key="index">
					<text class="font-13">
						{{item}}
					</text>
				</text>
				<text :style="{'width':fillWidth}" style="display: inline-block;"></text>
			</view>
			<view class="black"></view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		props:['lists','width','height','speed','background','color'],
		data() {
			return {
				 scrollLeft:0,
				 interval:null,
				 fillWidth:parseFloat(this.width)*2+'px',
				 boxHeight:(parseFloat(this.height)-16)+'px'
			};
		},
		mounted(){
			if(this.lists.length!==0){
				this.hd();
			}
		},
		methods:{
			hd:function(){
				var query = wx.createSelectorQuery().in(this);
				query.select('.scroll-view_H').boundingClientRect();
				query.select('.list').boundingClientRect();
				query.exec((res) => {
				  var containerWidth = res[0].width;
				  var listWidth = res[1].width;
				  // 滚动条的高度增加
				  clearInterval(this.interval)
				  this.interval = setInterval(() => {
				    if (this.scrollLeft < listWidth - containerWidth) {
						this.scrollLeft=this.scrollLeft + 1
				    } else {
				        this.scrollLeft=0
				    }
				  }, this.speed)
				})
			}
		}
	}
</script>

<style scoped>
	.box{
		position: relative;
		overflow: hidden;
	}
	scroll-view{
		white-space:nowrap;
	}
	scroll-view view{
		display: inline-block;
	}
	
	.list text{
		margin-left: 20px;
	}
	.black{
		width: 100%;
		height: 2px;
	}
	.fk{
		position: absolute;
		top: 0;
		left: 0;
		z-index: 99;
	}
</style>
