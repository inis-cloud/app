<view id="links"><view class="container-fluid"><view class="content-page"><view class="content"><view class="row"><view class="col-12"><view class="card mb-1"><view class="card-body p-1"><v-tabs vue-id="40538e78-1" tabs="{{tab.tabs}}" lineHeight="3px" value="{{tab.current}}" data-event-opts="{{[['^change',[['changeTab']]],['^input',[['__set_model',['$0','current','$event',[]],['tab']]]]]}}" bind:change="__e" bind:input="__e" bind:__l="__l"></v-tabs></view></view></view></view><view class="row"><view class="col-12"><view class="card mb-1"><view class="card-body p-1"><view class="alert alert-primary bg-white text-primary mt-3 mb-4" role="alert"><view class="mb-1"><text class="font-15">{{links.description||""}}</text></view><view class="flex-end mb-0">该分组创建于：<text class="font-15">{{links.create_time||""}}</text></view></view><view class="row"><block qq:for="{{$root.l0}}" qq:for-item="item" qq:for-index="index" qq:key="id"><view class="col-12"><view class="card text-white bg-white"><view class="card-body pb-2"><view class="card-bodyquote _blockquote"><view class="head"><image class="rounded-circle shadow-sm head-img" src="{{item.$orig.head_img||''}}"></image><text class="text-muted font-13">{{item.$orig.name||""}}</text></view><view class="text-muted font-15 mt-2 mb-0">{{item.$orig.description||""}}</view></view></view><view class="card-footer text-muted font-15">{{'相识于：'+item.m0}}</view></view></view></block><view class="col-12"><view class="card-body pt-0"><view class="flex-center"><text hidden="{{!(last_page)}}" class="see-more pt-1 pb-1 pl-3 pr-3 font-13">再怎么找也没有啦~</text><button hidden="{{!(!last_page)}}" class="btn pt-1 pb-1 btn-link text-muted font-13 see-more" type="button" data-event-opts="{{[['tap',[['getLinks',[self_page+1]]]]]}}" bindtap="__e"><text class="pl-3 pr-3">查看更多</text></button></view></view></view></view></view></view></view></view></view></view></view></view>