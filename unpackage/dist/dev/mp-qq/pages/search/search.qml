<view id="search" class="data-v-4cedc0c6"><view class="container-fluid data-v-4cedc0c6"><view class="content-page data-v-4cedc0c6"><view class="content data-v-4cedc0c6"><view class="row data-v-4cedc0c6"><view class="col-12 data-v-4cedc0c6"><view class="card mb-0 data-v-4cedc0c6"><view class="card-body data-v-4cedc0c6"><view class="card-title _h5 data-v-4cedc0c6">搜索</view><text class="card-text font-15 data-v-4cedc0c6">擅用搜索，事半功倍！</text><view class="input-group mt-2 data-v-4cedc0c6"><input class="form-control data-v-4cedc0c6" type="text" placeholder="搜索一下" data-event-opts="{{[['input',[['__set_model',['','value','$event',[]]]]]]}}" value="{{value}}" bindinput="__e"/><image class="search-svg data-v-4cedc0c6" src="/static/svg/search.svg"></image></view></view></view></view></view><view class="row data-v-4cedc0c6"><view class="col-12 data-v-4cedc0c6"><view class="card-body pl-1 data-v-4cedc0c6"><view class="align-center mb-0 _h5 data-v-4cedc0c6"><image class="h-3em w-3em data-v-4cedc0c6" src="/static/svg/hot.svg"></image><text class="ml-2 data-v-4cedc0c6">{{title||'热门文章'}}</text></view></view></view></view><block qq:for="{{article.data}}" qq:for-item="item" qq:for-index="index" qq:key="id"><view class="row data-v-4cedc0c6"><navigator class="col-12 data-v-4cedc0c6" open-type="navigate" url="{{'../article/article?id='+item.id}}"><view class="card mb-2 data-v-4cedc0c6"><view class="card-body p-2 data-v-4cedc0c6"><view class="row data-v-4cedc0c6"><view class="col-4 data-v-4cedc0c6"><image class="card-img-left data-v-4cedc0c6" src="{{item.expand.img_src}}" mode="widthFix"></image></view><view class="col-8 data-v-4cedc0c6"><view class="_h6 data-v-4cedc0c6"><block qq:if="{{item.is_top==1}}"><text class="badge badge-danger mr-1 data-v-4cedc0c6">置顶</text></block>{{''+(item.title||"")+''}}</view><view class="data-v-4cedc0c6"><text class="absolute left-13px font-13 text-muted data-v-4cedc0c6">{{''+(item.expand.author.nickname||'')+''}}</text><text class="absolute right-13px font-13 text-muted data-v-4cedc0c6"><text class="ml-1 data-v-4cedc0c6">{{item.create_time||''}}</text></text></view></view></view></view></view></navigator></view></block><view hidden="{{!(article.count==0)}}" class="row data-v-4cedc0c6"><view class="col-12 flex-center data-v-4cedc0c6"><text class="data-v-4cedc0c6">找不到您搜索的内容</text></view></view></view></view></view></view>