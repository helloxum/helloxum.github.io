(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[9],{"0a08":function(t,s,e){"use strict";e.r(s);e("14d9");var a=function(){var t=this,s=t._self._c;return s("q-page",{staticClass:"col-12 row"},[s("TopHeader",{attrs:{title:t.title,right:!1,left:!1,backgroundColor:"#fafafa"},scopedSlots:t._u([{key:"right",fn:function(){return[t._e()]},proxy:!0}])}),t.lunar?s("div",{staticClass:"row col-12 items-center text-center justify-center bg-white"},[s("div",{staticClass:"col-12 row text-left q-px-md",staticStyle:{"margin-bottom":"70px","max-width":"500px"}},[s("div",{staticClass:"col-12"},[s("div",{staticClass:"col-10 row q-pa-md"},[s("div",{staticClass:"col-1 items-center justify-center text-left"},[s("q-icon",{staticClass:"app-color",attrs:{name:"chevron_left",size:"sm"},on:{click:t.backYear}})],1),s("div",{staticClass:"col-10 text-center"},[s("div",{staticClass:"row items-center justify-center"},[s("span",{staticClass:"f16 fc3 text-bold",on:{click:function(s){t.showSetDate?t.showSetDate=!1:t.showSetDate=!0}}},[t._v(t._s(t.lunar.getYearInChinese()+t.lunar.getYearShengXiaoExact()+"年"))])])]),s("div",{staticClass:"col-1 items-center justify-center text-right"},[s("q-icon",{staticClass:"app-color",attrs:{name:"chevron_right",size:"sm"},on:{click:t.nextYear}})],1)])]),s("div",{staticClass:"col-12 bg-card round-corner-5 q-pa-md row text-center items-center justify-center"},[s("span",{staticClass:"f14 fc6"},[t._v("岁次"+t._s(t.bazi.getYear())+" "),s("span",{staticClass:"text-bold"},[t._v(t._s(t.lunarYear.getDayCount()))]),t._v("天")]),s("span",{staticClass:"f14 fc6 q-ml-sm"},[t._v(t._s(0==t.lunarYear.getLeapMonth()?"":"闰"+t.lunarYear.getLeepMonthChinese(t.lunarYear.getLeapMonth())+"月"))])]),s("div",{staticClass:"row col-12 q-mt-sm"},[s("div",{staticClass:"col bg-card round-corner-5 q-pa-md row text-center items-center justify-center"},[s("div",{staticClass:"col-12 row"},[s("span",{staticClass:"text-bold col-12 f12"},[t._v("值太岁")]),s("span",{staticClass:"col-12 f14 fc3 q-mt-xs"},[t._v(t._s(t.lunar.getYearShengXiaoExact()))])])]),s("div",{staticClass:"col bg-card round-corner-5 q-ml-sm q-pa-md row text-center items-center justify-center"},[s("div",{staticClass:"col-12 row"},[s("span",{staticClass:"text-bold col-12 f12"},[t._v("冲太岁")]),s("span",{staticClass:"col-12 f14 fc3 q-mt-xs"},[t._v(t._s(t.lunarYear.getChongShengXiao()))])])]),s("div",{staticClass:"col bg-card round-corner-5 q-ml-sm q-pa-md row text-center items-center justify-center"},[s("div",{staticClass:"col-12 row"},[s("span",{staticClass:"text-bold col-12 f12"},[t._v("害太岁")]),s("span",{staticClass:"col-12 f14 fc3 q-mt-xs"},[t._v(t._s(t.lunarYear.getHaiShengXiao()))])])])]),s("div",{staticClass:"row col-12 q-mt-sm"},[s("div",{staticClass:"col bg-card round-corner-5 q-pa-md row text-center items-center justify-center"},[s("div",{staticClass:"col-12 row"},[s("span",{staticClass:"text-bold col-12 f12"},[t._v("破太岁")]),s("span",{staticClass:"col-12 f14 fc3 q-mt-xs"},[t._v(t._s(t.lunarYear.getPoShengXiao()))])])]),s("div",{staticClass:"col bg-card round-corner-5 q-ml-sm q-pa-md row text-center items-center justify-center"},[s("div",{staticClass:"col-12 row"},[s("span",{staticClass:"text-bold col-12 f12"},[t._v("刑太岁")]),s("span",{staticClass:"col-12 f14 fc3 q-mt-xs"},[t._v(t._s(t.lunarYear.getXingShengXiao()))])])]),s("div",{staticClass:"col bg-card round-corner-5 q-ml-sm q-pa-md row text-center items-center justify-center"},[s("div",{staticClass:"col-12 row"},[s("span",{staticClass:"text-bold col-12 f12 shen-color"},[t._v("桃花位")]),s("span",{staticClass:"col-12 f14 fc3 q-mt-xs"},[t._v(t._s(t.lunarYear.getTaoHuaWei()))])])])]),s("div",{staticClass:"row col-12 q-mt-sm"},[s("div",{staticClass:"col bg-card round-corner-5 q-pa-md row text-center items-center justify-center"},[s("div",{staticClass:"col-12 row"},[s("span",{staticClass:"text-bold col-12 f12 shen-color"},[t._v("三合贵人")]),s("span",{staticClass:"col-12 f14 fc3 q-mt-xs"},[t._v(t._s(t.lunarYear.getSanHeShengXiao()))])])]),s("div",{staticClass:"col bg-card round-corner-5 q-ml-sm q-pa-md row text-center items-center justify-center"},[s("div",{staticClass:"col-12 row"},[s("span",{staticClass:"text-bold col-12 f12 shen-color"},[t._v("六合贵人")]),s("span",{staticClass:"col-12 f14 fc3 q-mt-xs"},[t._v(t._s(t.lunarYear.getLiuHeShengXiao()))])])]),s("div",{staticClass:"col bg-card round-corner-5 q-ml-sm q-pa-md row text-center items-center justify-center"},[s("div",{staticClass:"col-12 row"},[s("span",{staticClass:"text-bold col-12 f12 shen-color"},[t._v("文昌贵人")]),s("span",{staticClass:"col-12 f14 fc3 q-mt-xs"},[t._v(t._s(t.lunarYear.getWenChangShengXiao()))])])])]),s("div",{staticClass:"row col-12 q-mt-sm"},[s("div",{staticClass:"col bg-card round-corner-5 q-pa-md row text-center items-center justify-center"},[s("div",{staticClass:"col-12 row"},[s("span",{staticClass:"text-bold col-12 f12"},[t._v("太岁方位")]),s("span",{staticClass:"col-12 f14 fc3 q-mt-xs"},[t._v(t._s(t.lunarYear.getPositionTaiSui()+t.lunarYear.getPositionTaiSuiDesc()))])])]),s("div",{staticClass:"col bg-card round-corner-5 q-ml-sm q-pa-md row text-center items-center justify-center"},[s("div",{staticClass:"col-12 row"},[s("span",{staticClass:"text-bold col-12 f12 shen-color"},[t._v("岁神")]),s("span",{staticClass:"col-12 f14 fc3 q-mt-xs"},[t._v(t._s(t.lunarYear.getSuiShen()))])])]),s("div",{staticClass:"col bg-card round-corner-5 q-ml-sm q-pa-md row text-center items-center justify-center"},[s("div",{staticClass:"col-12 row"},[s("span",{staticClass:"text-bold col-12 f12 shen-color"},[t._v("守护神")]),s("span",{staticClass:"col-12 f14 fc3 q-mt-xs"},[t._v(t._s(t.lunarYear.getShouHuShen()))])])])]),s("div",{staticClass:"row col-12 q-mt-sm"},[s("div",{staticClass:"col bg-card round-corner-5 q-pa-md row text-center items-center justify-center"},[s("div",{staticClass:"col-12 row"},[s("span",{staticClass:"f12 text-bold col-12 shen-color"},[t._v("\n                  喜神\n                ")]),s("span",{staticClass:"f12 col-12"},[t._v("\n                  "+t._s(t.lunarYear.getPositionXiDesc())+"\n                ")])])]),s("div",{staticClass:"col bg-card round-corner-5 q-ml-sm q-pa-md row text-center items-center justify-center"},[s("div",{staticClass:"col-12 row"},[s("span",{staticClass:"f12 text-bold col-12 shen-color"},[t._v("\n                  福神\n                ")]),s("span",{staticClass:"f12 col-12"},[t._v("\n                  "+t._s(t.lunarYear.getPositionFuDesc())+"\n                ")])])]),s("div",{staticClass:"col bg-card round-corner-5 q-ml-sm q-pa-md row text-center items-center justify-center"},[s("div",{staticClass:"col-12 row"},[s("span",{staticClass:"f12 text-bold col-12 shen-color"},[t._v("\n                  财神\n                ")]),s("span",{staticClass:"f12 col-12"},[t._v("\n                  "+t._s(t.lunarYear.getPositionCaiDesc())+"\n                ")])])]),s("div",{staticClass:"col bg-card round-corner-5 q-ml-sm q-pa-md row text-center items-center justify-center"},[s("div",{staticClass:"col-12 row"},[s("span",{staticClass:"f12 text-bold col-12 shen-color"},[t._v("\n                  阳贵\n                ")]),s("span",{staticClass:"f12 col-12"},[t._v("\n                  "+t._s(t.lunarYear.getPositionYangGuiDesc())+"\n                ")])])]),s("div",{staticClass:"col bg-card round-corner-5 q-ml-sm q-pa-md row text-center items-center justify-center"},[s("div",{staticClass:"col-12 row"},[s("span",{staticClass:"f12 text-bold col-12 shen-color"},[t._v("\n                  阴贵\n                ")]),s("span",{staticClass:"f12 col-12"},[t._v("\n                  "+t._s(t.lunarYear.getPositionYinGuiDesc())+"\n                ")])])])]),s("div",{staticClass:"row col-12 q-mt-sm bg-card round-corner-5 q-pa-sm",on:{click:function(s){t.showJiuXing=!t.showJiuXing}}},[s("div",{staticClass:"col-12 row"},[s("div",{staticClass:"col-12 text-center"},[s("span",{staticClass:"f14 text-bold",class:t.showJiuXing?"fc3":"fc9"},[t._v("九宫飞星")])])])]),t.showJiuXing?s("div",{staticClass:"col-12 row q-mt-xs"},[s("div",{staticClass:"col row q-pr-xs"},[s("div",{staticClass:"row col-12 round-corner-5 q-pa-sm row text-center items-center justify-center",class:"yun"==t.nowJiuXing?"bg-card2":"bg-card",on:{click:function(s){t.nowJiuXing="yun",t.getJiuXing(t.lunarYear.getYunNum()-1)}}},[s("span",{staticClass:"f12",class:"yun"==t.nowJiuXing?"fc3 text-bold":"fc9"},[t._v(t._s(t.lunarYear.getYuan()+t.lunarYear.getYun()))])])]),s("div",{staticClass:"col row"},[s("div",{staticClass:"row col-12 round-corner-5 q-pa-sm row text-center items-center justify-center",class:"year"==t.nowJiuXing?"bg-card2":"bg-card",on:{click:function(s){t.nowJiuXing="year",t.getJiuXing(t.lunar.getYearNineStar().getIndex())}}},[s("span",{staticClass:"f12",class:"year"==t.nowJiuXing?"fc3 text-bold":"fc9"},[t._v(t._s(t.bazi.getYear())+"年")])])])]):t._e(),t.showJiuXing?s("div",{staticClass:"col-12 row"},[s("div",{staticClass:"col-12 row"},t._l(t.jiuXing,(function(e,a){return s("div",{key:a,staticClass:"col-4 row q-pt-xs",class:a%3==0?"":"q-pl-xs"},[s("div",{staticClass:"row col-12 bg-card round-corner-5 baseBox"},[s("div",{staticClass:"row col-12 q-pa-md"},[s("div",{staticClass:"row col text-center items-center justify-center"},[s("div",{staticClass:"col-12 row q-py-xs text-center items-center justify-center"},[s("span",{staticClass:"f12 q-pr-xs fc6"},[t._v(t._s(e.getNameInBeiDou()))]),s("span",{staticClass:"f14 fc3"},[t._v(t._s(e.getPosition()+""))])]),s("div",{staticClass:"col-12 row q-py-xs text-center items-center justify-center"},[s("span",{staticClass:"f16 text-bold",class:t.getColor(e.getWuXing())},[t._v("\n                                        "+t._s(e.getNumber()+e.getColor()+e.getWuXing()))])]),s("span",{staticClass:"f12 q-py-xs",class:"吉"==e.getLuckInXuanKong()?"fc-shen":"fc6"},[t._v("\n                                    "+t._s(e.getNameInXuanKong()+" "+e.getWei())+"\n                                ")])]),"中"!=e.getPosition()?s("div",{staticClass:"row col-1 text-center items-center justify-center"},[s("span",{staticClass:"f12 col-12",class:e.getShan24YinYang(e.getShan24()[0])?"fc-shen":"fc6"},[t._v(t._s(e.getShan24()[0]))]),s("span",{staticClass:"f12 col-12",class:e.getShan24YinYang(e.getShan24()[1])?"fc-shen":"fc6"},[t._v(t._s(e.getShan24()[1]))]),s("span",{staticClass:"f12 col-12",class:e.getShan24YinYang(e.getShan24()[2])?"fc-shen":"fc6"},[t._v(t._s(e.getShan24()[2]))])]):t._e()]),s("div",{staticClass:"backStr"},[t._v("\n                  "+t._s(t.fangWei[a][0]+t.fangWei[a][1])+"\n                ")])])])})),0)]):t._e(),t._l(t.jieQis,(function(e,a){return s("div",{key:a,staticClass:"row col-12 q-mt-sm"},[s("div",{staticClass:"row col-4 q-pr-xs"},[s("div",{staticClass:"row col-12 bg-card round-corner-5 q-pa-sm text-center items-center justify-center"},[s("div",{staticClass:"row text-center justify-center"},[s("span",{staticClass:"f12 fc6 col-12"},[t._v(t._s(e.s))]),s("span",{staticClass:"f16 fc3 text-bold col-12"},[t._v(t._s(e.monthInChinese+(e.dayCount>29?"大":"小")))]),s("span",{staticClass:"f14 fc3 col-12"},[t._v(t._s("（"+e.dayCount+"天）"))])])])]),s("div",{staticClass:"row col-8"},t._l(e.jieQi,(function(e,a){return s("div",{key:a,staticClass:"row col-12 items-center bg-card q-pa-sm round-corner-5",class:a>0?"q-mt-xs":""},[s("span",{staticClass:"f12 fc6"},[t._v(t._s(e.day+e.name))]),s("span",{staticClass:"fc9 f12 col-12"},[t._v(t._s(e.time))])])})),0)])})),s("div",{staticClass:"row col-12 q-mt-sm bg-card round-corner-5 q-pa-sm"},[s("div",{staticClass:"col-12 text-center"},[s("span",{staticClass:"f14 text-bold"},[t._v("农事")])])]),s("div",{staticClass:"col-12 row q-mt-xs"},[s("div",{staticClass:"row col bg-card round-corner-5 q-pa-xs row text-center items-center justify-center"},[s("span",{staticClass:"col-12 f12"},[t._v(t._s(t.lunarYear.getTouLiang()))])]),s("div",{staticClass:"row col bg-card round-corner-5 q-ml-xs q-pa-xs row text-center items-center justify-center"},[s("span",{staticClass:"col-12 f12"},[t._v(t._s(t.lunarYear.getCaoZi()))])]),s("div",{staticClass:"row col bg-card round-corner-5 q-ml-xs q-pa-xs row text-center items-center justify-center"},[s("span",{staticClass:"col-12 f12"},[t._v(t._s(t.lunarYear.getGengTian()))])]),s("div",{staticClass:"row col bg-card round-corner-5 q-ml-xs q-pa-xs row text-center items-center justify-center"},[s("span",{staticClass:"col-12 f12"},[t._v(t._s(t.lunarYear.getHuaShou()))])]),s("div",{staticClass:"row col bg-card round-corner-5 q-ml-xs q-pa-xs row text-center items-center justify-center"},[s("span",{staticClass:"col-12 f12"},[t._v(t._s(t.lunarYear.getZhiShui()))])]),s("div",{staticClass:"row col bg-card round-corner-5 q-ml-xs q-pa-xs row text-center items-center justify-center"},[s("span",{staticClass:"col-12 f12"},[t._v(t._s(t.lunarYear.getTuoGu()))])]),s("div",{staticClass:"row col bg-card round-corner-5 q-ml-xs q-pa-xs row text-center items-center justify-center"},[s("span",{staticClass:"col-12 f12"},[t._v(t._s(t.lunarYear.getTuoGu()))])]),s("div",{staticClass:"row col bg-card round-corner-5 q-ml-xs q-pa-xs row text-center items-center justify-center"},[s("span",{staticClass:"col-12 f12"},[t._v(t._s(t.lunarYear.getKanCan()))])]),s("div",{staticClass:"row col bg-card round-corner-5 q-ml-xs q-pa-xs row text-center items-center justify-center"},[s("span",{staticClass:"col-12 f12"},[t._v(t._s(t.lunarYear.getGongZhu()))])]),s("div",{staticClass:"row col bg-card round-corner-5 q-ml-xs q-pa-xs row text-center items-center justify-center"},[s("span",{staticClass:"col-12 f12"},[t._v(t._s(t.lunarYear.getJiaTian()))])]),s("div",{staticClass:"row col bg-card round-corner-5 q-ml-xs q-pa-xs row text-center items-center justify-center"},[s("span",{staticClass:"col-12 f12"},[t._v(t._s(t.lunarYear.getFenBing()))])]),s("div",{staticClass:"row col bg-card round-corner-5 q-ml-xs q-pa-xs row text-center items-center justify-center"},[s("span",{staticClass:"col-12 f12"},[t._v(t._s(t.lunarYear.getDeJin()))])]),s("div",{staticClass:"row col bg-card round-corner-5 q-ml-xs q-pa-xs row text-center items-center justify-center"},[s("span",{staticClass:"col-12 f12"},[t._v(t._s(t.lunarYear.getRenBing()))])]),s("div",{staticClass:"row col bg-card round-corner-5 q-ml-xs q-pa-xs row text-center items-center justify-center"},[s("span",{staticClass:"col-12 f12"},[t._v(t._s(t.lunarYear.getRenChu()))])]),s("div",{staticClass:"row col bg-card round-corner-5 q-ml-xs q-pa-xs row text-center items-center justify-center"},[s("span",{staticClass:"col-12 f12"},[t._v(t._s(t.lunarYear.getQiangMi()))])])])],2),s("div",{staticClass:"div-fixed top-round-corner-8 iphone-bottom",staticStyle:{"max-width":"500px","background-color":"#fafafa !important"}},[s("div",{staticClass:"col-12 row q-pa-md"},[s("div",{staticClass:"col row",class:"today"==t.selectedTab?"fc3":"fc9",on:{click:function(s){return t.$router.push({name:"rili",query:{tab:"today"}})}}},[s("div",{staticClass:"col-12 text-center row items-center justify-center"},[s("div",{class:"today"==t.selectedTab?"mid-div":"",staticStyle:{width:"70px",height:"30px"}},[s("span",{class:"today"==t.selectedTab?"f16 text-bold":"f12"},[t._v("日历")])])])]),s("div",{staticClass:"col",class:"month"==t.selectedTab?"fc3":"fc9",on:{click:function(s){return t.$router.push({name:"rili",query:{tab:"month"}})}}},[s("div",{staticClass:"col-12 text-center row items-center justify-center"},[s("div",{class:"month"==t.selectedTab?"mid-div":"",staticStyle:{width:"70px",height:"30px"}},[s("span",{class:"month"==t.selectedTab?"f16 text-bold ":"f12"},[t._v("月历")])])])]),s("div",{staticClass:"col",class:"year"==t.selectedTab?"fc3":"fc9",on:{click:function(s){t.selectedTab="year"}}},[s("div",{staticClass:"col-12 text-center row items-center justify-center"},[s("div",{class:"year"==t.selectedTab?"mid-div":"",staticStyle:{width:"70px",height:"30px"}},[s("span",{class:"year"==t.selectedTab?"f16 text-bold ":"f12"},[t._v("年历")])])])]),s("div",{staticClass:"col",class:"settings"==t.selectedTab?"fc3":"fc9",on:{click:function(s){return t.$router.push({name:"settings"})}}},[s("div",{staticClass:"col-12 text-center row items-center justify-center"},[s("div",{class:"settings"==t.selectedTab?"mid-div":"",staticStyle:{width:"70px",height:"30px"}},[s("span",{class:"settings"==t.selectedTab?"f16 text-bold ":"f12"},[t._v("设置")])])])])])])]):t._e(),s("selected-day",{attrs:{selectedDate:t.date,show:t.showSetDate},on:{"update:selectedDate":function(s){t.date=s},"update:selected-date":function(s){t.date=s},cancelClick:function(s){t.showSetDate=!1},okClick:function(s){t.showSetDate=!1}}})],1)},i=[],n=e("af34"),c=e("df37"),r=e("137f"),o=e("2a19"),l={name:"year",components:{SelectedDay:r["a"],TopHeader:n["a"]},data(){return{title:"小鱼日历",lunar:null,solar:null,bazi:null,weekIndex:1,jie:"",prevJieQi:null,nextJieQi:null,yi:"",ji:"",dao:null,fo:null,sanYanJiuYun:"",yearTaiSui:"",monthTaiSui:"",dayTaiSui:"",date:null,lunarTimes:null,selectedTimeIndex:null,showYueLi:!1,solarMonth:null,months:[],showSetDate:!1,year:"",month:"",day:"",focus:"year",typing:null,nowJiuXing:"year",jiuXing:[],showJiuXing:!1,shuJiu:null,fu:null,startWeek:0,selectedTab:"year",isToday:!0,daysIndex:0,daysCount:"",lunarYear:null,jieQis:[],fangWei:[["巽","东南"],["离","南"],["坤","西南"],["震","东"],["",""],["兑","西"],["艮","东北"],["坎","北"],["乾","西北"]]}},mounted(){this.date=new Date((new Date).getFullYear(),6,6),this.init()},methods:{init(){this.solar=c["Solar"].fromDate(this.date),this.lunar=this.solar.getLunar(),this.bazi=this.lunar.getEightChar(),this.weekIndex=c["SolarWeek"].fromDate(this.date,this.startWeek).getIndexInYear(),this.prevJieQi=this.lunar.getPrevJieQi(),this.nextJieQi=this.lunar.getNextJieQi(),this.getDayYiJi(),this.lunarYear=c["LunarYear"].fromYear(this.lunar.getYear()),this.sanYanJiuYun=this.lunarYear.getYuan()+this.lunarYear.getYun(),this.yearTaiSui=this.lunarYear.getPositionTaiSui()+this.lunarYear.getPositionTaiSuiDesc();var t=this.lunarYear.getMonth(this.lunar.getMonth());this.monthTaiSui=t.getPositionTaiSui()+t.getPositionTaiSuiDesc(),this.dayTaiSui=this.lunar.getDayPositionTaiSui()+this.lunar.getDayPositionTaiSuiDesc(),this.dao=c["Tao"].fromLunar(this.lunar),this.fo=c["Foto"].fromLunar(this.lunar),this.lunarTimes=this.lunar.getTimes(),this.solarMonth=c["SolarMonth"].fromDate(this.date),this.shuJiu=this.lunar.getShuJiu(),this.fu=this.lunar.getFu(),this.daysIndex=c["SolarUtil"].getDaysInYear(this.solar.getYear(),this.solar.getMonth(),this.solar.getDay());var s=new Date,e=parseInt(Math.abs(new Date(s.getFullYear(),s.getMonth(),s.getDate())-this.date)/1e3/60/60/24);this.daysCount=0==e?"今天":1==e?s>this.date?"昨天":"明天":2==e?s>this.date?"前天":"后天":e+(s>this.date?"天前":"天后"),this.getJieQis(),"yun"==this.nowJiuXing?this.getJiuXing(this.lunarYear.getYunNum()-1):this.getJiuXing(this.lunar.getYearNineStar().getIndex())},getJieQis(){this.jieQis=[];let t=this.lunarYear.getMonths();for(var s=0,e=t.length;s<e;s++)if(t[s].getYear()==this.lunar.getYear()){var a=c["Solar"].fromJulianDay(t[s].getFirstJulianDay());let e={month:t[s].getMonth(),monthInChinese:t[s].getMonthInChinese(),dayCount:t[s].getDayCount(),s:a.toYmd()};this.jieQis.push(e)}let i=this.lunarYear.getJieQiJulianDays();for(s=0,e=i.length;s<e;s++){var n=i[s],r=(a=c["Solar"].fromJulianDay(n),a.getLunar());if(r.getYear()==this.lunar.getYear())for(var o=0,l=this.jieQis.length;o<l;o++)if(r.getMonth()===this.jieQis[o].month){let t={name:r.getJieQi(),day:r.getDayInChinese(),time:r.getJieQiTable()[r.getJieQi()].toYmdHms()};this.jieQis[o].jieQi?this.jieQis[o].jieQi.push(t):this.jieQis[o].jieQi=[t]}}},backYear(){this.date=new Date(this.solar._p.year-1,6,6),this.init(),this.$forceUpdate()},nextYear(){this.date=new Date(this.solar._p.year+1,6,6),this.init(),this.$forceUpdate()},getJiuXing(t){this.jiuXing=[c["NineStar"].fromIndex(t+8>=9?t+8-9:t+8),c["NineStar"].fromIndex(t+4>=9?t+4-9:t+4),c["NineStar"].fromIndex(t+6>=9?t+6-9:t+6),c["NineStar"].fromIndex(t+7>=9?t+7-9:t+7),c["NineStar"].fromIndex(t),c["NineStar"].fromIndex(t+2>=9?t+2-9:t+2),c["NineStar"].fromIndex(t+3>=9?t+3-9:t+3),c["NineStar"].fromIndex(t+5>=9?t+5-9:t+5),c["NineStar"].fromIndex(t+1>=9?t+1-9:t+1)]},getDayYiJi(){this.yi="",this.ji="";for(var t=this.lunar.getDayYi(),s=0,e=t.length;s<e;s++)this.yi+=t[s]+" ";t=this.lunar.getDayJi();for(s=0,e=t.length;s<e;s++)this.ji+=t[s]+" "},getColor(t){return"金庚辛申酉".includes(t)?"text-metal":"水壬癸亥子".includes(t)?"text-water":"木甲乙寅卯".includes(t)?"text-wood":"火丙丁巳午".includes(t)?"text-fire":"土戊己辰戌丑未".includes(t)?"text-earth":void 0},keyInput(t){"0123456789".includes(t.key)&&this.inputT(t.key),"Backspace"!=t.key&&"NumpadDecimal"!=t.code||this.deleteN()},inputT(t){this.typing=t,this[this.focus]+=String(t),setTimeout((()=>{this.typing=null}),100)},deleteN(){this.typing="del",setTimeout((()=>{this.typing=null}),100);let t=["year","month","day"];""==this[this.focus]&&"year"!=this.focus&&(this.focus=t[t.indexOf(this.focus)-1]),this[this.focus]=this[this.focus].substring(0,this[this.focus].length-1)},share(){o["a"].create({message:"即将到来",position:"center"})}},watch:{date(t){this.init(),this.$forceUpdate()}}},d=l,u=e("2877"),f=e("9989"),g=e("0016"),h=e("068f"),m=e("eebe"),v=e.n(m),C=Object(u["a"])(d,a,i,!1,null,"6b56d3e8",null);s["default"]=C.exports;v()(C,"components",{QPage:f["a"],QIcon:g["a"],QImg:h["a"]})}}]);