!function(){"use strict";var n={9307:function(n,r,t){var e=t(4942);function u(n,r){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(n);r&&(e=e.filter((function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable}))),t.push.apply(t,e)}return t}function o(n){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?u(Object(t),!0).forEach((function(r){(0,e.Z)(n,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))}))}return n}var i=t(181);function c(n,r){return function(n){if(Array.isArray(n))return n}(n)||function(n,r){var t=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=t){var e,u,o,i,c=[],a=!0,f=!1;try{if(o=(t=t.call(n)).next,0===r){if(Object(t)!==t)return;a=!1}else for(;!(a=(e=o.call(t)).done)&&(c.push(e.value),c.length!==r);a=!0);}catch(l){f=!0,u=l}finally{try{if(!a&&null!=t.return&&(i=t.return(),Object(i)!==i))return}finally{if(f)throw u}}return c}}(n,r)||(0,i.Z)(n,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var a,f={randomUUID:"undefined"!==typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)},l=new Uint8Array(16);function s(){if(!a&&!(a="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return a(l)}for(var d=[],v=0;v<256;++v)d.push((v+256).toString(16).slice(1));function p(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return(d[n[r+0]]+d[n[r+1]]+d[n[r+2]]+d[n[r+3]]+"-"+d[n[r+4]]+d[n[r+5]]+"-"+d[n[r+6]]+d[n[r+7]]+"-"+d[n[r+8]]+d[n[r+9]]+"-"+d[n[r+10]]+d[n[r+11]]+d[n[r+12]]+d[n[r+13]]+d[n[r+14]]+d[n[r+15]]).toLowerCase()}var b=function(n,r,t){if(f.randomUUID&&!r&&!n)return f.randomUUID();var e=(n=n||{}).random||(n.rng||s)();if(e[6]=15&e[6]|64,e[8]=63&e[8]|128,r){t=t||0;for(var u=0;u<16;++u)r[t+u]=e[u];return r}return p(e)},y=t(158),h=t(4436),g=function(n){var r,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,u=arguments.length>3?arguments[3]:void 0;return new y.Z(n.dice.concat(t.dice||[]),n.surgeAbilities,w(n.bonus,t.bonus),e,[n.rerollAbilities||[],t.rerollAbilities||[]],null===(r=n.diceSides)||void 0===r?void 0:r.concat(t.diceSides||[]),u)};var m=function(n){var r,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=n.dice.reduce((function(n,r){return h.Uw[r]+n}),0)+n.bonus[h.dU]+(t.bonus&&(null===t||void 0===t?void 0:t.bonus[h.dU])||0),u=n.dice.reduce((function(n,r){return h.bk[r]+n}),0)+n.bonus[h.dU]+(t.bonus&&(null===t||void 0===t?void 0:t.bonus[h.dU])||0)+((null===(r=n.surgeAbilities)||void 0===r?void 0:r.reduce((function(n,r){return n+r[h.dU]}),0))||0);return[e<0?0:e,u<0?0:u]};function w(){for(var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[0,0,0,0,0,0,0],r=arguments.length,t=new Array(r>1?r-1:0),e=1;e<r;e++)t[e-1]=arguments[e];return n.map((function(n,r){return n+t.reduce((function(n,t){return t?n+t[r]:n}),0)}))}t(3897),t(9226);onmessage=function(n){var r=0,t=function(n,r){var t=n.name,e=n.cardsAttack,u=n.customAttack,i=n.requiredAccuracy,a=g(u,{dice:[h.E5]},i,r),f=g(u,{dice:[h.Cj]},i,r),l=c(m(u),2),s=l[0],d=l[1];return o(o({id:b(),name:t},u),{},{requiredAccuracy:i,cardsAttack:e,whiteAvgDam:f.average,blackAvgDam:a.average,minAcc:s,maxAcc:d})}(n.data,(function(n){var t=Math.round(10*n)/20;t<r&&(t+=50),t!==r&&(postMessage(t),r=t)}));postMessage(t)}},7293:function(n,r,t){t.d(r,{$R:function(){return s},Cj:function(){return v},E5:function(){return d},Ej:function(){return a},KG:function(){return p},Uw:function(){return y},Yx:function(){return b},ZA:function(){return l},bk:function(){return h},hM:function(){return f},p7:function(){return g}});var e,u,o,i,c=t(4942),a="Blue",f="Red",l="Green",s="Yellow",d="Black",v="White",p=[f,l,a,s],b=[d,v],y=(e={},(0,c.Z)(e,l,"success"),(0,c.Z)(e,a,"info"),(0,c.Z)(e,s,"warning"),(0,c.Z)(e,f,"danger"),(0,c.Z)(e,d,"dark border border-light-gray"),(0,c.Z)(e,v,"white"),u={},(0,c.Z)(u,l,1),(0,c.Z)(u,a,2),(0,c.Z)(u,s,0),(0,c.Z)(u,f,0),(0,c.Z)(u,d,0),(0,c.Z)(u,v,0),u),h=(o={},(0,c.Z)(o,l,3),(0,c.Z)(o,a,5),(0,c.Z)(o,s,2),(0,c.Z)(o,f,0),(0,c.Z)(o,d,0),(0,c.Z)(o,v,0),o),g=(i={},(0,c.Z)(i,f,[[0,1,0,0,0,0,0],[0,2,0,0,0,0,0],[0,2,0,0,0,0,0],[0,2,1,0,0,0,0],[0,3,0,0,0,0,0],[0,3,0,0,0,0,0]]),(0,c.Z)(i,l,[[1,0,1,0,0,0,0],[1,1,1,0,0,0,0],[1,2,0,0,0,0,0],[2,1,1,0,0,0,0],[2,2,0,0,0,0,0],[3,2,0,0,0,0,0]]),(0,c.Z)(i,a,[[2,0,1,0,0,0,0],[2,1,0,0,0,0,0],[3,1,1,0,0,0,0],[3,2,0,0,0,0,0],[4,2,0,0,0,0,0],[5,1,0,0,0,0,0]]),(0,c.Z)(i,s,[[0,0,1,0,0,0,0],[0,1,2,0,0,0,0],[1,2,0,0,0,0,0],[1,1,1,0,0,0,0],[2,1,0,0,0,0,0],[2,0,1,0,0,0,0]]),(0,c.Z)(i,d,[[0,0,0,1,0,0,0],[0,0,0,1,0,0,0],[0,0,0,2,0,0,0],[0,0,0,2,0,0,0],[0,0,0,3,0,0,0],[0,0,0,0,1,0,0]]),(0,c.Z)(i,v,[[0,0,0,1,1,0,0],[0,0,0,1,1,0,0],[0,0,0,1,0,0,0],[0,0,0,0,1,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,1,0]]),i)},4436:function(n,r,t){t.d(r,{Cj:function(){return u.Cj},E5:function(){return u.E5},Ek:function(){return e.Ek},Ff:function(){return o.Ff},KG:function(){return u.KG},NN:function(){return o.NN},Nz:function(){return e.Nz},R3:function(){return o.R3},TH:function(){return o.TH},Uw:function(){return u.Uw},VT:function(){return e.VT},WC:function(){return o.WC},Yx:function(){return u.Yx},Zb:function(){return o.Zb},_:function(){return e._},bk:function(){return u.bk},dU:function(){return e.dU},hH:function(){return o.hH},p7:function(){return u.p7},re:function(){return e.re},v4:function(){return o.v4},w:function(){return e.w},wD:function(){return o.wD},wL:function(){return o.wL},wi:function(){return o.wi},wn:function(){return e.wn},zm:function(){return e.zm}});var e=t(7898),u=t(7293),o=t(5818);t(8808),t(5929),t(5438),t(2960)}},r={};function t(e){var u=r[e];if(void 0!==u)return u.exports;var o=r[e]={exports:{}};return n[e](o,o.exports,t),o.exports}t.m=n,t.x=function(){var n=t.O(void 0,[335],(function(){return t(9307)}));return n=t.O(n)},function(){var n=[];t.O=function(r,e,u,o){if(!e){var i=1/0;for(l=0;l<n.length;l++){e=n[l][0],u=n[l][1],o=n[l][2];for(var c=!0,a=0;a<e.length;a++)(!1&o||i>=o)&&Object.keys(t.O).every((function(n){return t.O[n](e[a])}))?e.splice(a--,1):(c=!1,o<i&&(i=o));if(c){n.splice(l--,1);var f=u();void 0!==f&&(r=f)}}return r}o=o||0;for(var l=n.length;l>0&&n[l-1][2]>o;l--)n[l]=n[l-1];n[l]=[e,u,o]}}(),t.d=function(n,r){for(var e in r)t.o(r,e)&&!t.o(n,e)&&Object.defineProperty(n,e,{enumerable:!0,get:r[e]})},t.f={},t.e=function(n){return Promise.all(Object.keys(t.f).reduce((function(r,e){return t.f[e](n,r),r}),[]))},t.u=function(n){return"static/js/"+n+".938b5ad9.chunk.js"},t.miniCssF=function(n){},t.o=function(n,r){return Object.prototype.hasOwnProperty.call(n,r)},t.p="/imperial-assault-calculator/",function(){var n={322:1};t.f.i=function(r,e){n[r]||importScripts(t.p+t.u(r))};var r=self.webpackChunkassault_calculator=self.webpackChunkassault_calculator||[],e=r.push.bind(r);r.push=function(r){var u=r[0],o=r[1],i=r[2];for(var c in o)t.o(o,c)&&(t.m[c]=o[c]);for(i&&i(t);u.length;)n[u.pop()]=1;e(r)}}(),function(){var n=t.x;t.x=function(){return t.e(335).then(n)}}();t.x()}();
//# sourceMappingURL=322.77dbe004.chunk.js.map