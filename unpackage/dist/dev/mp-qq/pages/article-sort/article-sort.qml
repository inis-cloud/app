<view id="article-sort"><view class="container-fluid"><view class="content-page"><view class="content"><view class="row"><view class="col-12"><view class="card mb-2"><view class="card-body"><view class="header-title mb-2 _h4">{{sort.name||""}}</view><view class="alert alert-primary bg-white text-primary" role="alert"><view class="mb-1 font-15 _p">{{sort.description||""}}</view><view class="flex-end mb-0 font-15 _p">{{"该分类创建于："+(sort.create_time||"")}}</view></view></view></view></view></view><view class="row"><block qq:for="{{preview_article}}" qq:for-item="item" qq:for-index="index" qq:key="id"><view class="col-12"><navigator open-type="navigate" url="{{'../article/article?id='+item.id}}"><view class="card d-block"><view><image class="card-img-top" src="{{item.expand.img_src}}"></image><view class="card-img-overlay"><text class="badge badge-secondary p-1">{{''+(item.views||'0')+''}}</text></view></view><view class="card-body position-relative p-2"><text class="d-block mb-1"><block qq:if="{{item.is_top==1}}"><label class="badge badge-danger mr-1 _span">置顶</label></block>{{''+(item.title||'')+''}}</text><block qq:if="{{item.description!='\n'}}"><text class="d-block text-muted font-13">{{item.description}}</text></block></view></view></navigator></view></block><view class="col-12"><view class="card-body pt-0"><view class="flex-center"><text hidden="{{!(last_page)}}" class="see-more pt-1 pb-1 pl-3 pr-3 font-13">再怎么找也没有啦~</text><button hidden="{{!(!last_page)}}" class="btn pt-1 pb-1 btn-link text-muted font-13 see-more" type="button" data-event-opts="{{[['tap',[['getArticle',[self_page+1]]]]]}}" bindtap="__e"><text class="pl-3 pr-3">查看更多</text></button></view></view></view></view></view></view></view></view>