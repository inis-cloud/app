// +----------------------------------------------------------------------
// | INIS [ WE CAN DO IT JUST THINK ]
// +----------------------------------------------------------------------
// | Copyright (c) 2020~2021 http://inis.cc All rights reserved.
// +----------------------------------------------------------------------
// | Author: racns <email: racns@qq.com> <url: https://inis.cn>
// +----------------------------------------------------------------------
// | 作用：助手函数 - 支持链式操作
// +----------------------------------------------------------------------

class helper{
    /**
     * @name 构造器
     * @description 初始化函数
     */
    constructor()
    {
        /* 定义 get 方法 */
        const get_cookie    = (name) => this.getCookie(name)
        const query         = {string:(name)=>this.getQueryString(name)}
        const page          = {name:()=>this.getPageName()}
        const str_count     = {count:(string,search)=>this.getStringCount(string,search)}
        const get_storage   = (namespace,key) => this.getStorage(namespace,key)
        const get_browser   = () => this.getBrowser()
        const get_random_num= {num:(min,max) => this.getRandomNum(min,max)}
        const get_key_name  = {name:(keycode)=>this.getKeyName(keycode)}

        // 链式操作 get 属性
        this.get         = { cookie:get_cookie, query, page, string:str_count, storage:get_storage, browser:get_browser, random:get_random_num, key:get_key_name }



        /* 定义 set 方法 */
        const set_cookie = (name,value,exdays)   => this.setCookie(name,value,exdays)
        const set_storage= (namespace,key,value) => this.setStorage(namespace,key,value)
        const css        = (classOrId,css,cover) => this.setCss(classOrId,css,cover)
        const copy_text  = {text: (text,remark)  => this.setCopyText(text,remark)}

        // 链式操作 set 属性
        this.set         = { cookie:set_cookie, storage:set_storage, css, copy:copy_text }



        /* 定义 clear 方法 */
        const has_storage= (key)  => this.hasStorage(key)

        // 链式操作 has 属性
        this.has         = { storage:has_storage }




        /* 定义 clear 方法 */
        const clear_cookie = (name) => this.clearCookie(name)
        const clear_storage= (key)  => this.clearStorage(key)

        // 链式操作 delete 属性
        this.clear      = { cookie:clear_cookie, storage:clear_storage }



        /* 定义 create 方法 */
        const paging = (item,page,numb) => this.createPaging(item,page,numb)
        const create_array  = (min,max,step)   => this.createArray(min,max,step)

        // 链式操作 create 属性
        this.create  = { paging, array:create_array }



        /* 定义 is 方法 */
        const mobile = () => this.isMobile()
        const NULL   = (value) => this.isNull(value)
        const empty  = (value) => this.isEmpty(value)
        const email  = (value,bool) => this.isEmail(value,bool)
        const is_url = (url) => this.isUrl(url)
        const is_phone = (string) => this.isPhone(string)
        const is_id_card = {card:(string) => this.isIdCard(string)}

        // 链式操作 is 属性
        this.is      = { mobile, NULL, empty, email, url:is_url, id:is_id_card, phone:is_phone }



        /* 定义 in 方法 */
        const in_array = (search,array) => this.inArray(search,array)

        // 链式操作 in 属性
        this.in        = { array:in_array }



        /* 定义 time 方法 */
        const nature  = (timestamp,type) => this.natureTime(timestamp,type)
        const to      = {date:(unixTime,type)=>this.timeToDate(unixTime,type)}
        const response= () =>this.responseTime()

        // 链式操作 time 属性
        this.time     = { nature, to, response }




        /* 定义 date 方法 */
        const date_to = {time:(date)=>this.dateToTime(date)}

        // 链式操作 date 属性
        this.date     = { to:date_to }




        /* 定义 trim 方法 */
        const trim_array  = (arr) => this.trimArray(arr)
        const trim_string = (value,type) => this.trimString(value,type)

        // 链式操作 trim 属性
        this.trim   = {array:trim_array, string:trim_string}



        /* 定义 format 方法 */
        const bytes = (bytes,decimals,unit) => this.formatBytes(bytes,decimals,unit)
        const number= (number,unit) => this.formatNumber(number,unit)

        // 链式操作 format 属性
        this.format = { bytes, number }



        /* 定义 array 方法 */
        const unique = (array) => this.arrayUnique(array)
        const arraySortTwo = {two:(array,key,sort) => this.arraySortTwo(array,key,sort)}

        // 链式操作 array 属性
        this.array = { unique, sort:arraySortTwo }




        /* 定义 compare 方法 */
        const CompareVersion = (versionA,versionB,parting) => this.CompareVersion(versionA,versionB,parting)

        // 链式操作 compare 属性
        this.compare = { version:CompareVersion }







        /* 定义 to 方法 */
        const toScroll = (y,time) => this.toScroll(y,time)

        // 链式操作 to 属性
        this.to = { scroll:toScroll }



    }

    /**
     * @name 生成分页码
     * @description 生成一个分页码
     * @param {number} item 当前页码
     * @param {number} page 一共几页
     * @param {number} numb 显示页脚数量
     * @return {Array} result 返回一维数组
     */
    createPaging(item,page,numb)
    {
        item = item || 1;
        page = page || 4;
        numb = numb || 7;

        let [result, mean] = [[],[]];

        if(item > page) item = page;
        if(item <= 0) item = 1;

        if(numb % 2 == 0) mean = numb / 2;
        else mean = (numb-1)/2;

        let min = ((item - mean) <= 0) ? 1 : item - mean;
        let max = item + mean;

        if(numb % 2 == 0){
            if(min <= 0 || item <= numb) [min = 1, max = numb];
            else if(item > page-numb) [min = page-numb+1, max = page];
            else [min = item-mean+1, max = min + numb-1];
            if(max >= page) max = page;
        }else{
            if(min <= 0) min = 1;
            if(max >= page) max = page;
            else if(item <= mean+1 && item <= page) max = numb;
            // if(item > page-(mean+1)) min = page-(numb-1);
        }

        result = this.createArray(min,max)

        return result;
    }

    /**
     * @name 生成一维数组
     * @description 可以搭配分页使用
     * @param {number} [min=1] 从哪里开始
     * @param {number} [max=7] 到哪里结束
     * @param {number} [step=1] 步长是多少
     * @return {Array} result 返回一维数组
     */
    createArray(min = 1 , max = 7, step = 1)
    {
        let result = [];
        let len = Math.abs(max - min);
        if (len <= 0) result;
        let arr = new Array(len);
        let cNum = min;
        let cIndex = 0;
        let addArr = (index) => {
            if (cNum >= min && cNum <= max) {
                arr[index] = cNum;
                cNum++;
                cIndex++;
                addArr(cIndex, cNum)
            }
        }
        addArr(cIndex, cNum);
        result = arr.filter(item => item % step == 0);
        return result;
    }

    /**
     * @name 获取URL GET参数
     * @param {string} name
     * @return {*}
     */
    getQueryString(name)
    {
        let result = [];
        let reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
        let param = window.location.search.substr(1).match(reg);
        if(param != null) result = unescape(param[2]); else result = null;
        return result;
    }

    /**
     * @name 获取当前页面名称
     * @return {string}
     */
    getPageName()
    {
        let strUrl = window.location.href;
        let arrUrl = strUrl.split("/");
        let strPage = arrUrl[arrUrl.length - 1];
        if (strPage.indexOf("?") > -1) {
            let pageName = strPage.split("?");
            strPage = pageName[0];
        }
        return strPage;
    }

    /**
     * @name 获取字符串中包含某个字符串是次数
     * @param {string} string
     * @param {string} search
     * @return {number}
     */
    getStringCount(string,search)
    {
        // 使用g表示整个字符串都要匹配
        let regex  =  new RegExp(search, 'g');
        let result =  string.match(regex);
        let count  =! result ? 0 : result.length;
        return count;
    }

    /**
     * @desc 根据keycode获得键名
     * @param  {Number} keycode
     * @return {String}
     */
    getKeyName(keycode)
    {
        let result = null

        const keyCodeMap = {
            8: 'Backspace',
            9: 'Tab',
            13: 'Enter',
            16: 'Shift',
            17: 'Ctrl',
            18: 'Alt',
            19: 'Pause',
            20: 'Caps Lock',
            27: 'Escape',
            32: 'Space',
            33: 'Page Up',
            34: 'Page Down',
            35: 'End',
            36: 'Home',
            37: 'Left',
            38: 'Up',
            39: 'Right',
            40: 'Down',
            42: 'Print Screen',
            45: 'Insert',
            46: 'Delete',

            48: '0',
            49: '1',
            50: '2',
            51: '3',
            52: '4',
            53: '5',
            54: '6',
            55: '7',
            56: '8',
            57: '9',

            65: 'A',
            66: 'B',
            67: 'C',
            68: 'D',
            69: 'E',
            70: 'F',
            71: 'G',
            72: 'H',
            73: 'I',
            74: 'J',
            75: 'K',
            76: 'L',
            77: 'M',
            78: 'N',
            79: 'O',
            80: 'P',
            81: 'Q',
            82: 'R',
            83: 'S',
            84: 'T',
            85: 'U',
            86: 'V',
            87: 'W',
            88: 'X',
            89: 'Y',
            90: 'Z',

            91: 'Windows',
            93: 'Right Click',

            96: 'Numpad 0',
            97: 'Numpad 1',
            98: 'Numpad 2',
            99: 'Numpad 3',
            100: 'Numpad 4',
            101: 'Numpad 5',
            102: 'Numpad 6',
            103: 'Numpad 7',
            104: 'Numpad 8',
            105: 'Numpad 9',
            106: 'Numpad *',
            107: 'Numpad +',
            109: 'Numpad -',
            110: 'Numpad .',
            111: 'Numpad /',

            112: 'F1',
            113: 'F2',
            114: 'F3',
            115: 'F4',
            116: 'F5',
            117: 'F6',
            118: 'F7',
            119: 'F8',
            120: 'F9',
            121: 'F10',
            122: 'F11',
            123: 'F12',

            144: 'Num Lock',
            145: 'Scroll Lock',
            182: 'My Computer',
            183: 'My Calculator',
            186: ';',
            187: '=',
            188: ',',
            189: '-',
            190: '.',
            191: '/',
            192: '`',
            219: '[',
            220: '\\',
            221: ']',
            222: '\''
        };

        if (keyCodeMap[keycode]) result = keyCodeMap[keycode];
        else console.warn('Unknow Key(Key Code:' + keycode + ')');

        return result
    }

    /**
     * @name 获取localStorage数据
     * @param {string} namespace [localStorage的key值]
     * @param {string} key [localStorage的value中JSON对象的key值]
     * @return {string}
     */
    getStorage(namespace, key = true)
    {
        let result = false
        let time   = Math.round(new Date / 1000)

        if (this.isEmpty(namespace)) console.warn('请输入需要查询的key!')
        else {

            let storage = localStorage.getItem(namespace)

            if (!this.isEmpty(storage)) {
                if (typeof key == "boolean" && key) {

                    result = JSON.parse(storage)
                    // 判断是否已过期
                    if (result.hasOwnProperty("end_time") && !this.isEmpty(result.end_time) && result.end_time <= time) result = "expire"

                } else if (typeof key == "boolean") result = storage
                else {

                    storage = JSON.parse(storage)

                    if (this.isEmpty(storage[key])) result = null
                    else {
                        result = storage[key]
                        // 判断是否已过期
                        if (typeof result == "object" && result.hasOwnProperty("end_time") && !this.isEmpty(result.end_time) && result.end_time <= time) result = "expire"
                    }
                }
            }
        }

        return result
    }

    /**
     * @name 设置localStorage数据
     * @param {string} namespace [localStorage的key值]
     * @param {string || object} key [localStorage的value中JSON对象的key值]
     * @param {string} value [localStorage的value中JSON对象的value值]
     * @return {boolean}
     */
    setStorage(namespace, key, value)
    {
        // 返回结果
        let result = false

        if (this.isEmpty(namespace)) console.warn('请输入需要存储的key名称！')
        else if (this.isEmpty(key))  console.warn('键值key不得为空！')
        else {

            let storage  = localStorage.getItem(namespace)

            // 如果不存在，则新建
            if (!storage) storage = {}
            else storage = JSON.parse(storage)

            if (typeof key == 'string') {

                // 如果不存在，则新建
                if (!storage[key]) storage[key] = {}

                if (typeof value == 'object') {

                    // 动态保存
                    for (let item in value) {
                        if (item == 'time' && this.isEmpty(value[item])) storage[key]["end_time"] = null
                        else if (item == 'time') storage[key]["end_time"] = value[item] + Math.round(new Date / 1000)
                        else storage[key][item] = value[item]
                    }

                } else storage[key]["value"] = value

            } else if (typeof key == 'object') for (let item in key) {

                if (item == 'time' && this.isEmpty(key[item])) storage["end_time"] = null
                else if (item == 'time') storage["end_time"] = key[item] + Math.round(new Date / 1000)
                else storage[item] = key[item]
            }

            result = true
            localStorage.setItem(namespace, JSON.stringify(storage))
        }

        return result
    }

    /**
     * @name 判断缓存是否存在
     * @param {string} key
     * @return {object}
     */
    hasStorage(key)
    {
        let result = false

        if (this.isEmpty(key)) console.warn('请给一个localStorage的key值')
        else if (localStorage.getItem(key) != null) result = true

        return result
    }

     /**
     * @name 清除指定缓存
     * @param {string} key
     * @return {object}
     */
    clearStorage(key)
    {
        let result = false

        if (this.isEmpty(key)) console.warn('请给一个localStorage的key值')
        else {
            localStorage.removeItem(key)
            result = true
        }

        return result
    }

    /**
     * @name 设置CSS
     * @param {string} classOrId [class或ID]
     * @param {string} css [CSS]
     * @param {boolean} cover [是否覆盖]
     * @return {boolean}
     */
    setCss(classOrId, css, cover = false)
    {
        let result = false
        if (this.isEmpty(classOrId)) console.warn('请选择需要设置的DOM元素')
        else if (this.isEmpty(css))  console.warn('请设置CSS')
        else {

            let DOM = document.querySelector(classOrId)

            // 覆盖
            if (cover) DOM.style.cssText = css
            else {

                let css_arr = this.trimArray(css.split(';'))
                for (let item of css_arr) {

                    let arr = item.split(":")

                    if (item.indexOf('!important') != -1) {
                        let suffix = arr[1].split("!")
                        DOM.style.setProperty(this.trimString(arr[0], 2), this.trimString(suffix[0], 2), this.trimString(suffix[1], 2))
                    } else DOM.style.setProperty(this.trimString(arr[0], 2), this.trimString(arr[1], 2))
                }
            }

            result = true
        }

        return result
    }

    /**
     * @name 人性化时间
     * @param {number} timestamp 时间戳
     * @param {number} type 1-详细日期 2-简易日期 3-时间戳 4-日期格式
     * @return {string} result
     */
    natureTime(timestamp,type)
    {
        let result = Math.round(new Date() / 1000)
        type = type || 1
        timestamp = timestamp || result

        if (type == 1) {

            let zeroize = (num) => { return (String(num).length == 1 ? '0': '') + num; }
            let curTimestamp = parseInt(new Date().getTime() / 1000);
            let timestampDiff = curTimestamp - timestamp;
            let curDate = new Date(curTimestamp * 1000);
            let tmDate = new Date(timestamp * 1000);

            let Y = tmDate.getFullYear(),
            m = tmDate.getMonth() + 1,
            d = tmDate.getDate();

            let H = tmDate.getHours(),
            i = tmDate.getMinutes(),
            s = tmDate.getSeconds();

            if (timestampDiff < 60) {
                result = "刚刚";
            } else if (timestampDiff < 3600) {
                result = Math.floor(timestampDiff / 60) + "分钟前";
            } else if (curDate.getFullYear() == Y && curDate.getMonth() + 1 == m && curDate.getDate() == d) {
                result = '今天' + zeroize(H) + ':' + zeroize(i);
            } else {
                let newDate = new Date((curTimestamp - 86400) * 1000);

                if (newDate.getFullYear() == Y && newDate.getMonth() + 1 == m && newDate.getDate() == d) {
                    result = '昨天' + zeroize(H) + ':' + zeroize(i);
                } else if (curDate.getFullYear() == Y) {
                    result = zeroize(m) + '-' + zeroize(d) + ' ' + zeroize(H) + ':' + zeroize(i);
                } else {
                    result = Y + '-' + zeroize(m) + '-' + zeroize(d) + ' ' + zeroize(H) + ':' + zeroize(i);
                }
            }
        } else if(type == 2){
            let mistiming = Math.round(new Date() / 1000) - timestamp;
            let postfix = mistiming > 0 ? "前" : "后";
            mistiming = Math.abs(mistiming);
            let arrr = ["年", "个月", "星期", "天", "小时", "分钟", "秒"];
            let arrn = [31536000, 2592000, 604800, 86400, 3600, 60, 1];

            for (let i = 0; i < 7; i++) {
                let inm = Math.floor(mistiming / arrn[i]);
                if (inm != 0) result = inm + arrr[i] + postfix;
            }
        } else if (type == 4) {
            result = new Date(parseInt(timestamp) * 1000).toLocaleString().replace(/:\d{1,2}$/,' ');
        }

        return result;
    }

    /**
     * @name 时间戳转日期格式
     * @param {number} unixTime 时间戳
     * @param {string} type
     * @return {string} result
     *
     * Y-m-d           = 2018-01-11
     * Y-m-d H:i       = 2018-01-11 11:08
     * Y-m-d H:i:s     = 2018-01-11 11:08:31
     * Y/m/d           = 2018/01/11
     * Y/m/d H:i:s     = 2018/01/11 11:08:31
     * Y年m月d日       = 2018年01月11日
     * Y年m月d日 H:i:s = 2018年01月11日 11:08:31
    */
    timeToDate(unixTime, type = "Y-M-D H:i:s")
    {
        let date = new Date(unixTime * 1000);
        let datetime = "";
        datetime += date.getFullYear() + type.substring(1, 2);
        datetime += (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + type.substring(3, 4);
        datetime += (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate());
        if (type.substring(5, 6)) {
            if (type.substring(5, 6).charCodeAt() > 255) {
                datetime += type.substring(5, 6);
                if (type.substring(7, 8)) {
                    datetime += " " + (date.getHours() < 10 ? '0' + (date.getHours()) : date.getHours());
                    if (type.substring(9, 10)) {
                        datetime += type.substring(8, 9) + (date.getMinutes() < 10 ? '0' + (date.getMinutes()) : date.getMinutes());
                        if (type.substring(11, 12)) {
                            datetime += type.substring(10, 11) + (date.getSeconds() < 10 ? '0' + (date.getSeconds()) : date.getSeconds());
                        };
                    };
                };
            } else {
                datetime += " " + (date.getHours() < 10 ? '0' + (date.getHours()) : date.getHours());
                if (type.substring(8, 9)) {
                    datetime += type.substring(7, 8) + (date.getMinutes() < 10 ? '0' + (date.getMinutes()) : date.getMinutes());
                    if (type.substring(10, 11)) {
                        datetime += type.substring(9, 10) + (date.getSeconds() < 10 ? '0' + (date.getSeconds()) : date.getSeconds());
                    };
                };
            };
        };
        return datetime;
    }

    /**
     * @name 日期格式转时间戳
     * @return {number} result
     */
    dateToTime(date)
    {
        if (this.isEmpty(date)) console.warn("请输入一个日期格式，如：2021-5-20 13:14:00")
        else {
            const time = new Date(date);
            let result = Date.parse(time);
            result = result.toString()
            result = result.substring(0,10)
            result = parseInt(result)
            return result
        }
    }

    /**
     * @name WEB性能监控
     * @return {object}
     */
    performance(storage = false)
    {
        let result = {}

        try {

            let timing   = performance.timing;
            let loadTime = (timing.loadEventEnd - timing.loadEventStart) / 1000;

            if (loadTime < 0) {
                setTimeout(()=>{
                    this.performance(storage);
                }, 200);
                return;
            }

            result.redirect = {
                'des':'重定向时间',
                'reason':'拒绝重定向！比如，https://inis.cn/ 就不该写成 https://inis.cn',
                'unit':'毫秒(ms)',
                'value':(timing.redirectEnd - timing.redirectStart) / 1000
            }
            result.dns = {
                lookup: {
                    'des':'DNS解析时间',
                    'unit':'毫秒(ms)',
                    'value':(timing.domainLookupEnd - timing.domainLookupStart) / 1000
                },
                cache: {
                    'des':'DNS缓存时间',
                    'unit':'毫秒(ms)',
                    'value':(timing.domainLookupStart - timing.fetchStart) / 1000
                }
            }
            result.tcp = {
                'des':'TCP完成握手时间',
                'unit':'毫秒(ms)',
                'value':(timing.connectEnd - timing.connectStart) / 1000
            }
            result.http = {
                'des':'HTTP请求响应完成时间',
                'reason':'页面内容经过 gzip 压缩了么，静态资源 css/js 等压缩了么？',
                'unit':'毫秒(ms)',
                'value':(timing.responseEnd - timing.requestStart) / 1000
            }
            result.dom = {
                before: {
                    'des':'DOM开始加载前所花费时间',
                    'unit':'毫秒(ms)',
                    'value':(timing.responseEnd - timing.navigationStart) / 1000
                },
                completed: {
                    'des':'DOM加载完成时间',
                    'unit':'毫秒(ms)',
                    'value':(timing.domComplete - timing.domLoading) / 1000
                },
                parse: {
                    'des':'DOM结构解析完成时间',
                    'reason':'反省下你的 DOM 树嵌套是不是太多了！',
                    'unit':'毫秒(ms)',
                    'value':(timing.domInteractive - timing.domLoading) / 1000
                }
            }
            result.script = {
                'des':'脚本加载时间',
                'unit':'毫秒(ms)',
                'value':(timing.domContentLoadedEventEnd - timing.domContentLoadedEventStart) / 1000
            }
            result.onload = {
                'des':'onload事件时间',
                'reason':'是否太多不必要的操作都放到 onload 回调函数里执行了，考虑过延迟加载、按需加载的策略么？',
                'unit':'毫秒(ms)',
                'value':(timing.loadEventEnd - timing.loadEventStart) / 1000
            }
            result.load = {
                'des':'页面完全加载时间',
                'reason':'这几乎代表了用户等待页面可用的时间',
                'unit':'毫秒(ms)',
                'value':(result.redirect.value + result.dns.lookup.value + result.tcp.value + result.http.value + result.dom.parse.value + result.dom.completed.value) || (timing.responseEnd - timing.requestStart) / 1000,
            }
            result.ram = {
                'des':'内存占用',
                'unit':'兆(MB)',
                'value':Math.floor(performance.memory.usedJSHeapSize / 1024 / 1024, 4),
                'rate':performance.memory.usedJSHeapSize / performance.memory.totalJSHeapSize
            }
            result.blank = {
                'des':'白屏时间',
                'unit':'毫秒(ms)',
                'value':(timing.domLoading - timing.fetchStart)  / 1000
            }
            result.ttfb = {
                'des':'到第一个字节的时间，用作指示Web 服务器或其他网络资源的响应能力，TTFB 即 Time To First Byte 的意思',
                'reason':'这可以理解为用户拿到你的资源占用的时间，加异地机房了么，加CDN 处理了么？加带宽了么？加 CPU 运算速度了么？',
                'unit':'毫秒(ms)',
                'value':(timing.responseStart - timing.navigationStart)  / 1000
            }
            result.unload = {
                'des':'卸载页面的时间',
                'unit':'毫秒(ms)',
                'value':(timing.unloadEventEnd - timing.unloadEventStart)  / 1000
            }

        } catch(e) {
            console.warn(e)
        }

        // 设置缓存
        if (storage) this.setStorage('performance', result)

        return result;
    }

    /**
     * @name 是否为NULL
     * @param {string} value 字符串
     * @return {boolean} result
     */
    isNull(value = "")
    {
        let result = false;

        if (value == null || typeof(value) == 'undefined' || value === undefined || value.length === 0) result = true;
        else result = false;

        return result;
    }

    /**
     * @name 判断是否为空 (包括空字符串、空格、null,{})
     * @param {string} string 字符串
     * @return {boolean} result
     */
    isEmpty(string = "")
    {
        let result = false;

        if (Array.isArray(string)){

            if (Array.prototype.isPrototypeOf(string) && string.length === 0) result = true;

        } else if (!this.isNull(string)) {

            if (string instanceof Object) {

                if (JSON.stringify(string) == "{}") result = true

            } else if ((string + '').replace(/(^\s*)|(\s*$)/g, '').length === 0) result = true;

        } else result = true;

        return result;
    }

    /**
     * @name 判断是否为邮箱
     * @param {string} value 邮箱
     * @param {boolean} bool [bool=false] 严格模式
     * @return {boolean} result
     */
    isEmail(value, bool = false)
    {
        let [result, pattern]  = [false, ''];

        if (bool) {

            pattern = /^[0-9a-zA-Z_]{5,12}@(163|126|qq|yahoo|gmail|sina)\.(com|com\.cn|cn|la)$/;

        } else {

            pattern = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
        }

        result = pattern.test(value);

        return result;
    }

    /**
     *
     * @name  判断是否为身份证号
     * @param  {String|Number} string
     * @return {Boolean}
     */
    isIdCard(string = "")
    {
        if (this.isEmpty(string)) console.warn("请输入一个身份证号码")
        else {
            return /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/.test(string)
        }
    }

    /**
     * @name 根据操作系统
     * @return {boolean}
     */
    isMobile()
    {
        let isMobile = {
            Android: function () {
                 return navigator.userAgent.match(/Android/i) ? true : false;
            },
            BlackBerry: function () {
                 return navigator.userAgent.match(/BlackBerry/i) ? true : false;
            },
            iOS: function () {
                 return navigator.userAgent.match(/iPhone|iPad|iPod/i) ? true : false;
            },
            Windows: function () {
                 return navigator.userAgent.match(/IEMobile/i) ? true : false;
            },
            any: function () {
                 return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Windows());
            }
        };
        return isMobile.any();
    }

    /**
     *
     * @name   判断是否为手机号
     * @param  {String|Number} string
     * @return {Boolean}
     */
    isPhone(string = "")
    {
        if (this.isEmpty(string)) console.warn("请输入一个电话号码")
        else return /^(\+?0?86\-?)?1[3456789]\d{9}$/.test(string)
    }

    /**
     * @name 设置cookie
     * @param {string} name
     * @param {string} value
     * @param {number} exdays
     */
    setCookie(name, value, exdays = 1)
    {
        let result = true;

        if (this.isEmpty(name)) result = '请设置 cookie 名称！'
        else {

            let time = new Date();

            time.setTime(time.getTime() + (exdays * 24 * 60 * 60 * 1000));

            let expires = "expires=" + time.toUTCString();

            document.cookie = name + "=" + value + "; " + expires;
        }

        return result;
    }

    /**
     * @name 获取cookie
     * @param {string} name
     * @return {string} [result=null]
     */
    getCookie(name)
    {
        let result = null;
        if (this.isEmpty(name)) result = '请输入需要查询的 cookie 名称！'
        else if (document.cookie.length > 0) {

            let begin = document.cookie.indexOf(name + '=');

            if (begin !== -1) {
                // cookie值的初始位置
                begin += name.length + 1;
                // 结束位置
                let end = document.cookie.indexOf(';', begin);
                if (end === -1) {
                    // 没有;则end为字符串结束位置
                    end = document.cookie.length;
                }
                result = unescape(document.cookie.substring(begin, end));
            }
        }
        return result
    }

    /**
     * @name 清除cookie
     * @param {string} name
     */
    clearCookie(name)
    {
        let result = true;

        if (this.isEmpty(name)) result = '请输入需要删除的 cookie 名称！'
        else this.setCookie(name, "", -1);

        return result;
    }

    /**
     * @name 判断字符串是否在数组里面
     * @param {string} search
     * @param {array} arr
     * @return {string} [result=false]
     */
    inArray(search,array)
    {
        let result = false;

        for (let i in array) if (array[i] == search) result = true;

        return result;
    }

    /**
     * @name 数组去空
     * @param {array} arr
     * @return {string} [result=false]
     */
    trimArray(arr)
    {

        let result = arr.filter(function (s) {
           return s && s.trim();
        });

        return result;
    }

    /**
     * @name 去除字符串空格
     * @param {string} value 字符串
     * @param {number} type  1-所有空格  2-前后空格  3-前空格 4-后空格
     * @return {string} value
     */
    trimString(value, type = 1)
    {
        let result = value

        if(!this.isEmpty(value)){
            switch (type) {
            case 1:
                result = value.replace(/\s+/g, '')
                break;
            case 2:
                result = value.replace(/(^\s*)|(\s*$)/g, '')
                break;
            case 3:
                result = value.replace(/(^\s*)/g, '')
                break;
            case 4:
                result = value.replace(/(\s*$)/g, '')
                break;
            default:
                result = value
            }
        }

        return result;
    }

    arrayUnique(arr = [])
    {
        return Array.from(new Set(arr))
    }

    /*
     * @name Bytes格式化
     * @param {number} bytes
     * @param {number} decimals
     * @return {string}
     */
    formatBytes (bytes, decimals, unit = true)
    {
        let result = '';

        if (bytes === 0) result = '0';
        else {
            let k = 1024;
            let dm = decimals + 1 || 3;
            let sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
            let i = Math.floor(Math.log(bytes) / Math.log(k));

            if (unit) result = (bytes / Math.pow(k, i)).toPrecision(dm) + ' ' + sizes[i];
            else result = (bytes / Math.pow(k, i)).toPrecision(dm)
        }

        return result;
    }

    /*
     * @name 格式化数字
     * @param {number} bytes
     * @param {boolean} unit
     * @return {string}
     */
    formatNumber (number = 1, unit = true)
    {
        number = parseInt(number)

        let [result,units] = [null,null]

        if (number >= 100000000) {
            units  = '亿'
            result = Math.round(number / 10000000) / 10
        } else if (number >= 10000) {
            units  = '万'
            result = Math.round(number / 1000) / 10
        } else result = number

        if (unit) result = result + units

        return result
    }

    /*
     * @name 图片转base64
     * @param {Object} config
     */
    base64(config)
    {
        let options = {
            // 清晰度比率 0-1 越小照片大小越小，但越不清晰 默认0.8
            rate	 : config.rate 	   || 0.8,
            // 压缩后照片 最大宽度/高度
            maxWidth : config.maxNum   || 680,
            // 回调函数返回压缩成功后的
            callBack : config.callBack || (()=>{
                console.warn("回调函数callBack未定义!")
            }),
            // 绑定的DOM元素的#id或.class
            el		 : config.el 	   || '',
            files    : config.files    || '',
        }

        if(this.is.empty(options.el)) handleImg(files)
        else document.querySelector(options.el).onchange = ((e) => {

            /* 多图上传 */
            let files = e.target.files;
            handleImg(files)
        })

        function handleImg(files){

            if(this.is.empty(files)) return (()=>{
                console.warn('未找到files文件')
            })

            let imgData = []

            for(let item of files){

                let data = {
                    'file': item,
                    'name': item.name,
                    'size': (new helper()).formatBytes(item.size),
                    'type': item.type,
                }

                let reader = new FileReader();
                reader.readAsDataURL(item)
                reader.onload = function (e) {
                    // 得到base64 url
                    let dataUrl = this.result;
                    let image = new Image();
                    image.src = dataUrl;
                    image.onload = function (e) {
                        let width = image.width, height = image.height;
                        let scale = width / height;
                        let canvas = document.createElement("canvas");
                        let ctx = canvas.getContext('2d');
                        ctx.clearRect(0, 0, canvas.width, canvas.height);
                        if (width - height >= 0) {
                            let width1 = options.maxWidth;
                            let height1 = parseInt(width1 / scale);
                            if (width >= width1) {
                                canvas.width = width1;
                                canvas.height = height1;
                                ctx.drawImage(image, 0, 0, width1, height1);
                            } else {
                                canvas.width = width;
                                canvas.height = height;
                                ctx.drawImage(image, 0, 0, width, height);
                            }
                        } else {
                            scale = height / width;
                            height1 = options.maxWidth;
                            width1 = parseInt(height1 / scale);
                            if (height >= height1) {
                                canvas.width = width1;
                                canvas.height = height1;
                                ctx.drawImage(image, 0, 0, width1, height1);
                            } else {
                                canvas.width = width;
                                canvas.height = height;
                                ctx.drawImage(image, 0, 0, width, height);
                            }
                        }
                        let cropStr = canvas.toDataURL("image/jpeg", options.rate);
                        data['base64'] = cropStr
                        imgData = data
                        options.callBack(imgData);
                    }
                }
            }
        }
    }

    /*
     * @name 获取浏览器类型和版本
     * @return {Object}
     */
    getBrowser()
    {
        let result = {name:'other',version:''}

        let sys = {},
            ua = navigator.userAgent.toLowerCase(),
            s;
        (s = ua.match(/rv:([\d.]+)\) like gecko/)) ? sys.ie = s[1]:
            (s = ua.match(/msie ([\d\.]+)/)) ? sys.ie = s[1] :
            (s = ua.match(/edge\/([\d\.]+)/)) ? sys.edge = s[1] :
            (s = ua.match(/firefox\/([\d\.]+)/)) ? sys.firefox = s[1] :
            (s = ua.match(/(?:opera|opr).([\d\.]+)/)) ? sys.opera = s[1] :
            (s = ua.match(/chrome\/([\d\.]+)/)) ? sys.chrome = s[1] :
            (s = ua.match(/version\/([\d\.]+).*safari/)) ? sys.safari = s[1] : 0;

        // 根据关系进行判断
        if (sys.ie)      result = {name:'IE',version:sys.ie}
        if (sys.edge)    result = {name:'EDGE',version:sys.edge}
        if (sys.firefox) result = {name:'Firefox',version:sys.firefox}
        if (sys.chrome)  result = {name:'Chrome',version:sys.chrome}
        if (sys.opera)   result = {name:'Opera',version:sys.opera}
        if (sys.safari)  result = {name:'Safari',version:sys.safari}

        return result;
    }

    /*
     * @name 获取范围内的随机数
     */
    getRandomNum(min = 0, max = 100)
    {
        let range = max - min;
        let rand = Math.random();
        // 四舍五入
        let result = min + Math.round(rand * range);
        return result;
    }

    /*
     * @name 设置鼠标复制内容
     * @param {string} text [设置鼠标文本内容]
     * @param {string} remark [如果不为空，则往内容末尾添加备注]
     * @return {boolean}
     */
    setCopyText(text = '', remark = '')
    {
        let result  = false
        const textarea = document.createElement("textarea");
        textarea.value = text
        document.body.appendChild(textarea);

        textarea.select();

        // 为textarea添加监听事件方便对剪贴板内容进行二次修改
        if (!this.isEmpty(remark)) textarea.addEventListener("copy", (event)=>{
            let clipboardData = event.clipboardData || window.clipboardData;
            if (!clipboardData) return;
            let text = window.getSelection().toString();
            if (text) {
                event.preventDefault();
                clipboardData.setData("text/plain", text + remark);
            }
        });

        // 执行复制操作
        if (document.execCommand("copy")) result = true

        // document.execCommand('copy') 如果内容复制的不全
        // document.execCommand('copy') // 前先进行document.execCommand('selectAll')选中所有内容即可

        // 移除input框
        document.body.removeChild(textarea);

        return result;
    }

    /*
     * @name 二维数组冒泡排序 [{key:1},{key:2}]
     * @param {string} key [排序的键]
     * @param {string} sort [排序方式，升序或降序]
     * @return {array}
     */
    arraySortTwo(array, key, sort = 'acs')
    {
        if (sort == 'acs') {
            for (let i = 0; i < array.length; i++) for (let j = i; j < array.length; j++) if (array[i][key]>array[j][key]) {
                let temp = array[i]
                array[i] = array[j]
                array[j] = temp
            }
        } else if (sort == 'desc') {
            for (let i = 0; i < array.length; i++) for (let j = i; j < array.length; j++) if (array[i][key]<array[j][key]) {
                let temp = array[i]
                array[i] = array[j]
                array[j] = temp
            }
        }
        return array
    }

    /*
     * @name 是否为有效链接
     * @param {string} url [链接]
     * @return {boolean}
     */
    isUrl(str)
    {
        let v = new RegExp('^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$', 'i');
        return v.test(str);
    }

    /*
     * @name 版本比对
     * @param {string} versionA [新版本]
     * @param {string} versionB [旧版本]
     * @param {string} parting [分隔符]
     * @return {boolean}
     */
    CompareVersion(versionA, versionB, parting = '.')
    {
        if (versionA && versionB) {

            // 将两个版本号拆成数字
            let arrayA = versionA.split(parting)
            let arrayB = versionB.split(parting)
            let minLength = Math.min(arrayA.length, arrayB.length)
            let position = 0
            let diff = 0

            // 依次比较版本号每一位大小，当对比得出结果后跳出循环（后文有简单介绍）
            while (position < minLength && ((diff = parseInt(arrayA[position]) - parseInt(arrayB[position])) == 0)) position++;

            diff = (diff != 0) ? diff: (arrayA.length - arrayB.length);

            // 若versionA大于versionB，则返回true
            return diff > 0;

        } else {
            // 输入为空
            console.warn("版本号不能为空");
            return false;
        }
    }

    /*
     * @name 定位滚动条
     * @param {number} number [Y坐标]
     * @param {number} time [时间]
     */
    toScroll(number = 0, time)
    {
        if (!time) {
            document.body.scrollTop = document.documentElement.scrollTop = number;
            return number;
        }
        const spacingTime = 20; // 设置循环的间隔时间  值越小消耗性能越高
        let spacingInex = time / spacingTime; // 计算循环的次数
        let nowTop = document.body.scrollTop + document.documentElement.scrollTop; // 获取当前滚动条位置
        let everTop = (number - nowTop) / spacingInex; // 计算每次滑动的距离
        let scrollTimer = setInterval(() => {
            if (spacingInex > 0) {
                spacingInex--;
                this.toScroll(nowTop += everTop);
            } else {
                clearInterval(scrollTimer); // 清除计时器
            }
        }, spacingTime);
    }

    /*
     * @name 自定义处理API
     * @param {string} url [API地址]
     * @param {string} api [API应用名]
     */
    customProcessApi(url = "", api = "api")
    {
        let result = url

        if (!this.is.empty(url)) {

            let prefix = "//"

            if (url.indexOf("https://") != -1)     prefix = "https://"
            else if (url.indexOf("http://") != -1) prefix = "http://"

            // 过滤http(s)://
            result = url.replace(/http(s)?:\/\//g,"")

            // URL转数组
            result = result.split("/")

            // 去除空数组
            result = result.filter((s)=>{
                return s && s.trim();
            });

            if (result.length == 1) result = prefix + result[0] + "/" + api + "/"
            else if (result.length == 2) {
                result = prefix + result[0] + "/" + result[1] + "/"
            }
        }
        return result
    }

    /**
     *
     * @name   url参数转对象
     * @param  {String} url  default: window.location.href
     * @return {Object}
     */
    parseUrl(url)
    {
        url = !url ? window.location.href : url;

        if (url.indexOf('?') === -1) return {};

        let search = url[0] === '?' ? url.substr(1) : url.substring(url.lastIndexOf('?') + 1);

        if (search === '') return {};

        search = search.split('&');

        let query = {};

        for (let i = 0; i < search.length; i++) {
            let pair = search[i].split('=');
            query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
        }

        return query;
    }

    /**
     *
     * @name   对象序列化
     * @param  {Object} obj
     * @return {String}
     */
    stringfy(obj)
    {
        let s = [],

        add = function( key, value ) {
            s[ s.length ] = encodeURIComponent( key ) + "=" + encodeURIComponent( value );
        };

        if (Array.isArray(obj)) for ( let v in obj ) add(v, obj[v]);
        else for ( let prefix in obj ) {
            this.stringfyBuild( prefix, obj[ prefix ], add );
        }

        return s.join( "&" );
    }

    /**
     *
     * @name   对象序列化 - 格式数据
     * @param  {String} prefix 前缀
     * @param  {Object} obj 对象数据
     * @param  {function} add 回调函数
     */
    stringfyBuild(prefix, obj, add)
    {
        if (Array.isArray(obj)) {
            for ( let i = 0; i < obj.length; i++) {
                this.stringfyBuild(prefix + "[" + ( typeof obj[i] === "object" ? i : "" ) + "]", obj[i], add);
            }
        } else if (typeof(obj) == "object") {
            for ( let name in obj ) {
                this.stringfyBuild( prefix + "[" + name + "]", obj[ name ], add );
            }
        } else add( prefix, obj );
    }


    // END
}

export const inisHelper = new helper