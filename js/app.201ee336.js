(function(){"use strict";var t={5559:function(t,e,n){var i=n(9963),o=n(6252);const a={class:"App"};function r(t,e,n,i,r,s){const c=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)("div",a,[(0,o.Wm)(c)])}var s={name:"App"},c=n(3744);const l=(0,c.Z)(s,[["render",r]]);var d=l,u=n(2201),p=n.p+"img/close.259939d8.svg";const m=(0,o._)("a",{href:"#/"},[(0,o._)("img",{class:"closeBtn",src:p,alt:"close"})],-1),g=(0,o._)("h1",{class:"settings_title"},"Settings",-1),h={class:"list"};function v(t,e,n,i,a,r){const s=(0,o.up)("ListItem"),c=(0,o.up)("SearchField");return(0,o.wg)(),(0,o.iD)("div",null,[m,g,(0,o._)("ul",h,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(i.chosenCity,(t=>((0,o.wg)(),(0,o.j4)(s,{key:t.data.id,location:t},null,8,["location"])))),128))]),(0,o.Wm)(c)])}var f=n(3577),w=n.p+"img/burger.bc7b9f83.svg",y=n.p+"img/delete.6bf27f16.svg";const _={class:"list_item"},C=(0,o._)("img",{class:"li_img",src:w,alt:"burger"},null,-1);function b(t,e,n,i,a,r){return(0,o.wg)(),(0,o.iD)("li",_,[C,(0,o._)("p",null,(0,f.zw)(n.location.data.name),1),(0,o._)("img",{onClick:e[0]||(e[0]=(...t)=>r.deleteHandler&&r.deleteHandler(...t)),class:"li_img",src:y,alt:"delete"})])}var k=n(3907),z={name:"ListItem",props:{location:Object},setup(){const t=(0,k.oR)();return{store:t}},methods:{deleteHandler(){this.store.dispatch("removeCity",this.location.data.id)}}};const D=(0,c.Z)(z,[["render",b]]);var S=D,W=n.p+"img/enter.22cb1a3d.svg";const F={class:"input_field"};function O(t,e,n,a,r,s){return(0,o.wg)(),(0,o.iD)("div",F,[(0,o.wy)((0,o._)("input",{onKeydown:e[0]||(e[0]=(0,i.D2)(((...t)=>s.onClickHandler&&s.onClickHandler(...t)),["enter"])),"onUpdate:modelValue":e[1]||(e[1]=t=>r.inputValue=t),type:"text",name:"",id:""},null,544),[[i.nr,r.inputValue]]),(0,o._)("img",{onClick:e[2]||(e[2]=(...t)=>s.onClickHandler&&s.onClickHandler(...t)),src:W,alt:"enter"})])}var H={name:"SearchField",data(){return{inputValue:""}},setup(){const t=(0,k.oR)();return{store:t}},methods:{onClickHandler(){this.store.dispatch("fetchCity",this.inputValue),this.inputValue=""}}};const j=(0,c.Z)(H,[["render",O]]);var x=j,E={name:"SettingsPage",components:{ListItem:S,SearchField:x},setup(){const t=(0,k.oR)(),e=(0,o.Fl)((()=>t.getters.getChosenCity));return{chosenCity:e}}};const N=(0,c.Z)(E,[["render",v]]);var L=N,I=n.p+"img/setting.fc0bf70f.svg";const V=(0,o._)("a",{href:"#/settings"},[(0,o._)("img",{class:"settings",src:I,alt:"настройки"})],-1),Z={class:"weather-page__container"},P={key:0},A={key:1};function R(t,e,n,i,a,r){const s=(0,o.up)("InformationComponent");return(0,o.wg)(),(0,o.iD)("div",null,[V,(0,o._)("div",Z,[i.hasLocation?((0,o.wg)(),(0,o.iD)("div",P,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(i.chosenCity,(t=>((0,o.wg)(),(0,o.j4)(s,{key:t.data.id,location:t},null,8,["location"])))),128))])):((0,o.wg)(),(0,o.iD)("div",A,"Добавьте город"))])])}var K=n.p+"img/cloud.6cd01c31.svg",T=n.p+"img/wind.9fb88f3b.svg",M=n.p+"img/barometer.eb8847b7.svg";const U=t=>((0,o.dD)("data-v-21322d70"),t=t(),(0,o.Cn)(),t),Y={class:"title"},q={class:"temp"},B=U((()=>(0,o._)("div",null,[(0,o._)("img",{class:"image",src:K,alt:"cloud"})],-1))),$={class:"description"},G={class:"grid"},J={class:"item1 flex"},Q=U((()=>(0,o._)("img",{class:"grid_img",src:T,alt:"wind"},null,-1))),X={class:"item2 flex"},tt=U((()=>(0,o._)("img",{class:"grid_img",src:M,alt:"barometer"},null,-1))),et={class:"item3"},nt=U((()=>(0,o._)("div",{class:"item4"},[(0,o._)("p",null,"Dew point: 0%")],-1))),it={class:"item5"};function ot(t,e,n,i,a,r){return(0,o.wg)(),(0,o.iD)("div",null,[(0,o._)("h1",Y,(0,f.zw)(n.location.data.name)+", "+(0,f.zw)(n.location.data.sys.country),1),(0,o._)("div",q,[B,(0,o._)("div",null,(0,f.zw)((n.location.data.main.temp-273.15).toFixed(0))+" c",1)]),(0,o._)("div",$,[(0,o._)("p",null,"Feels like "+(0,f.zw)((n.location.data.main.feels_like-273.15).toFixed(0))+"C. "+(0,f.zw)(r.capitalizeFirstLetter(n.location.data.weather[0].main))+". "+(0,f.zw)(r.capitalizeFirstLetter(n.location.data.weather[0].description)),1),(0,o._)("div",G,[(0,o._)("div",J,[Q,(0,o._)("p",null,(0,f.zw)(n.location.data.wind.speed)+"m/s "+(0,f.zw)(r.getWindDirection(n.location.data.wind.deg)),1)]),(0,o._)("div",X,[tt,(0,o._)("p",null,(0,f.zw)(n.location.data.main.pressure)+"hPa",1)]),(0,o._)("div",et,[(0,o._)("p",null,"Humidity: "+(0,f.zw)(n.location.data.main.humidity)+"%",1)]),nt,(0,o._)("div",it,[(0,o._)("p",null,"Visibility: "+(0,f.zw)(n.location.data.visibility/1e3)+"km",1)])])])])}var at={name:"InformationComponent",props:{location:Object},methods:{capitalizeFirstLetter(t){return t.charAt(0).toUpperCase()+t.slice(1)},getWindDirection(t){const e=["N","NNE","NE","ENE","E","ESE","SE","SSE","S","SSW","SW","WSW","W","WNW","NW","NNW"],n=Math.round(t/22.5)%16;return e[n]}}};const rt=(0,c.Z)(at,[["render",ot],["__scopeId","data-v-21322d70"]]);var st=rt,ct={name:"WeatherPage",components:{InformationComponent:st},setup(){const t=(0,k.oR)(),e=(0,o.Fl)((()=>t.getters.getChosenCity)),n=(0,o.Fl)((()=>t.getters.getChosenCity.length));return{store:t,chosenCity:e,hasLocation:n}},data(){return{informationArr:[]}}};const lt=(0,c.Z)(ct,[["render",R]]);var dt=lt,ut=(0,u.p7)({history:(0,u.r5)(),routes:[{path:"/settings",component:L},{path:"/",component:dt,alias:"/"}]}),pt=(n(7658),n(6154));const mt=(0,k.MT)({state(){return{chosenCity:[]}},mutations:{addCity(t,e){t.chosenCity.push(e)},removeCity(t,e){console.log("state.chosenCity",t.chosenCity),t.chosenCity=t.chosenCity.filter((t=>t.data.id!==e))}},actions:{addCity(t,e){mt.commit("addCity",e)},removeCity(t,e){mt.commit("removeCity",e)},async fetchCity(t,e){try{const n=await pt.Z.get(`https://api.openweathermap.org/data/2.5/weather?q=${e}&appid=587e51c75b7ee1a646462b17302866a9`);t.dispatch("addCity",n)}catch(n){console.log(n)}}},getters:{getChosenCity(t){return t.chosenCity}}});var gt=mt;const ht=(0,i.ri)(d);ht.use(gt),ht.use(ut),ht.mount("#app")}},e={};function n(i){var o=e[i];if(void 0!==o)return o.exports;var a=e[i]={exports:{}};return t[i].call(a.exports,a,a.exports,n),a.exports}n.m=t,function(){var t=[];n.O=function(e,i,o,a){if(!i){var r=1/0;for(d=0;d<t.length;d++){i=t[d][0],o=t[d][1],a=t[d][2];for(var s=!0,c=0;c<i.length;c++)(!1&a||r>=a)&&Object.keys(n.O).every((function(t){return n.O[t](i[c])}))?i.splice(c--,1):(s=!1,a<r&&(r=a));if(s){t.splice(d--,1);var l=o();void 0!==l&&(e=l)}}return e}a=a||0;for(var d=t.length;d>0&&t[d-1][2]>a;d--)t[d]=t[d-1];t[d]=[i,o,a]}}(),function(){n.d=function(t,e){for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.p="/weather_widget/"}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,i){var o,a,r=i[0],s=i[1],c=i[2],l=0;if(r.some((function(e){return 0!==t[e]}))){for(o in s)n.o(s,o)&&(n.m[o]=s[o]);if(c)var d=c(n)}for(e&&e(i);l<r.length;l++)a=r[l],n.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return n.O(d)},i=self["webpackChunkweather_widget"]=self["webpackChunkweather_widget"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=n.O(void 0,[998],(function(){return n(5559)}));i=n.O(i)})();
//# sourceMappingURL=app.201ee336.js.map