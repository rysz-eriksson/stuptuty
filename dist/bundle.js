!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(4);t.uuid=function(){return r.v4()};var o={v4:/(?:^[0-9a-f]{8}\x2D[0-9a-f]{4}\x2D4[0-9a-f]{3}\x2D[0-9a-f]{4}\x2D[0-9a-f]{12}$)|(?:^0{8}\x2D0{4}\x2D0{4}\x2D0{4}\x2D0{12}$)/,v5:/(?:^[0-9a-f]{8}\x2D[0-9a-f]{4}\x2D5[0-9a-f]{3}\x2D[0-9a-f]{4}\x2D[0-9a-f]{12}$)|(?:^0{8}\x2D0{4}\x2D0{4}\x2D0{4}\x2D0{12}$)/};t.regex=o;t.isUuid=function(e){return o.v4.test(e)||o.v5.test(e)};t.empty=function(){return"00000000-0000-0000-0000-000000000000"};t.fromString=function(e){return r.v5(e,"bb5d0ffa-9a4c-4d7c-8fc2-0a7d2220ba45")}},function(e,t,n){n(2),e.exports=n(5)},function(e,t,n){"use strict";n.r(t),t.default=n.p+"bundle.css"},function(e,t){for(var n=[],r=1;r<6;r++)n.push({index:r,src:"images/stuptuty-slider".concat(r,".jpg")});var o=function(e){var t=n.find((function(t){return e.target.src.includes(t.src)})),r=document.querySelector(".slider__item > img");r.src=t.src,r.setAttribute("data-key","".concat(t.index))};window.location.href.includes("product.html")&&n.forEach((function(e){var t=document.createElement("img");t.src=e.src,t.classList.add("slider__thumbItem"),document.querySelector(".slider__thumbNav").appendChild(t),t.addEventListener("click",o)})),window.location.href.includes("product.html")&&(document.querySelector(".slider__prev").addEventListener("click",(function(){var e=document.querySelector(".slider__thumbNav"),t=e.style.transform.length>0?e.style.transform.slice(10,-3):0;0!=t&&e.animate([{transform:"translate(".concat(parseInt(t),"px)")},{transform:"translate(".concat(parseInt(t)+205,"px)")}],500).addEventListener("finish",(function(){e.style.transform="translate(".concat(parseInt(t)+205,"px)")}))})),document.querySelector(".slider__next").addEventListener("click",(function(){var e=document.querySelector(".slider__thumbNav"),t=e.style.transform.length>0?e.style.transform.slice(10,-3):0;Math.abs(t)<205*(n.length-3)&&e.animate([{transform:"translate(".concat(t,"px)")},{transform:"translate(".concat(t-205,"px)")}],500).addEventListener("finish",(function(){e.style.transform="translate(".concat(t-205,"px)")}))})))},function(e,t,n){"use strict";n.r(t);var r="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto),o=new Uint8Array(16);function a(){if(!r)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return r(o)}for(var c=[],i=0;i<256;++i)c[i]=(i+256).toString(16).substr(1);var u,s,l=function(e,t){var n=t||0,r=c;return[r[e[n++]],r[e[n++]],r[e[n++]],r[e[n++]],"-",r[e[n++]],r[e[n++]],"-",r[e[n++]],r[e[n++]],"-",r[e[n++]],r[e[n++]],"-",r[e[n++]],r[e[n++]],r[e[n++]],r[e[n++]],r[e[n++]],r[e[n++]]].join("")},d=0,f=0;var v=function(e,t,n){var r=t&&n||0,o=t||[],c=(e=e||{}).node||u,i=void 0!==e.clockseq?e.clockseq:s;if(null==c||null==i){var v=e.random||(e.rng||a)();null==c&&(c=u=[1|v[0],v[1],v[2],v[3],v[4],v[5]]),null==i&&(i=s=16383&(v[6]<<8|v[7]))}var m=void 0!==e.msecs?e.msecs:(new Date).getTime(),p=void 0!==e.nsecs?e.nsecs:f+1,h=m-d+(p-f)/1e4;if(h<0&&void 0===e.clockseq&&(i=i+1&16383),(h<0||m>d)&&void 0===e.nsecs&&(p=0),p>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");d=m,f=p,s=i;var y=(1e4*(268435455&(m+=122192928e5))+p)%4294967296;o[r++]=y>>>24&255,o[r++]=y>>>16&255,o[r++]=y>>>8&255,o[r++]=255&y;var g=m/4294967296*1e4&268435455;o[r++]=g>>>8&255,o[r++]=255&g,o[r++]=g>>>24&15|16,o[r++]=g>>>16&255,o[r++]=i>>>8|128,o[r++]=255&i;for(var b=0;b<6;++b)o[r+b]=c[b];return t||l(o)};var m=function(e,t,n){var r=function(e,r,o,a){var c=o&&a||0;if("string"==typeof e&&(e=function(e){e=unescape(encodeURIComponent(e));for(var t=new Array(e.length),n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}(e)),"string"==typeof r&&(r=function(e){var t=[];return e.replace(/[a-fA-F0-9]{2}/g,(function(e){t.push(parseInt(e,16))})),t}(r)),!Array.isArray(e))throw TypeError("value must be an array of bytes");if(!Array.isArray(r)||16!==r.length)throw TypeError("namespace must be uuid string or an Array of 16 byte values");var i=n(r.concat(e));if(i[6]=15&i[6]|t,i[8]=63&i[8]|128,o)for(var u=0;u<16;++u)o[c+u]=i[u];return o||l(i)};try{r.name=e}catch(e){}return r.DNS="6ba7b810-9dad-11d1-80b4-00c04fd430c8",r.URL="6ba7b811-9dad-11d1-80b4-00c04fd430c8",r};function p(e,t){var n=(65535&e)+(65535&t);return(e>>16)+(t>>16)+(n>>16)<<16|65535&n}function h(e,t,n,r,o,a){return p((c=p(p(t,e),p(r,a)))<<(i=o)|c>>>32-i,n);var c,i}function y(e,t,n,r,o,a,c){return h(t&n|~t&r,e,t,o,a,c)}function g(e,t,n,r,o,a,c){return h(t&r|n&~r,e,t,o,a,c)}function b(e,t,n,r,o,a,c){return h(t^n^r,e,t,o,a,c)}function w(e,t,n,r,o,a,c){return h(n^(t|~r),e,t,o,a,c)}var x=m("v3",48,(function(e){if("string"==typeof e){var t=unescape(encodeURIComponent(e));e=new Array(t.length);for(var n=0;n<t.length;n++)e[n]=t.charCodeAt(n)}return function(e){var t,n,r,o=[],a=32*e.length;for(t=0;t<a;t+=8)n=e[t>>5]>>>t%32&255,r=parseInt("0123456789abcdef".charAt(n>>>4&15)+"0123456789abcdef".charAt(15&n),16),o.push(r);return o}(function(e,t){var n,r,o,a,c;e[t>>5]|=128<<t%32,e[14+(t+64>>>9<<4)]=t;var i=1732584193,u=-271733879,s=-1732584194,l=271733878;for(n=0;n<e.length;n+=16)r=i,o=u,a=s,c=l,i=y(i,u,s,l,e[n],7,-680876936),l=y(l,i,u,s,e[n+1],12,-389564586),s=y(s,l,i,u,e[n+2],17,606105819),u=y(u,s,l,i,e[n+3],22,-1044525330),i=y(i,u,s,l,e[n+4],7,-176418897),l=y(l,i,u,s,e[n+5],12,1200080426),s=y(s,l,i,u,e[n+6],17,-1473231341),u=y(u,s,l,i,e[n+7],22,-45705983),i=y(i,u,s,l,e[n+8],7,1770035416),l=y(l,i,u,s,e[n+9],12,-1958414417),s=y(s,l,i,u,e[n+10],17,-42063),u=y(u,s,l,i,e[n+11],22,-1990404162),i=y(i,u,s,l,e[n+12],7,1804603682),l=y(l,i,u,s,e[n+13],12,-40341101),s=y(s,l,i,u,e[n+14],17,-1502002290),u=y(u,s,l,i,e[n+15],22,1236535329),i=g(i,u,s,l,e[n+1],5,-165796510),l=g(l,i,u,s,e[n+6],9,-1069501632),s=g(s,l,i,u,e[n+11],14,643717713),u=g(u,s,l,i,e[n],20,-373897302),i=g(i,u,s,l,e[n+5],5,-701558691),l=g(l,i,u,s,e[n+10],9,38016083),s=g(s,l,i,u,e[n+15],14,-660478335),u=g(u,s,l,i,e[n+4],20,-405537848),i=g(i,u,s,l,e[n+9],5,568446438),l=g(l,i,u,s,e[n+14],9,-1019803690),s=g(s,l,i,u,e[n+3],14,-187363961),u=g(u,s,l,i,e[n+8],20,1163531501),i=g(i,u,s,l,e[n+13],5,-1444681467),l=g(l,i,u,s,e[n+2],9,-51403784),s=g(s,l,i,u,e[n+7],14,1735328473),u=g(u,s,l,i,e[n+12],20,-1926607734),i=b(i,u,s,l,e[n+5],4,-378558),l=b(l,i,u,s,e[n+8],11,-2022574463),s=b(s,l,i,u,e[n+11],16,1839030562),u=b(u,s,l,i,e[n+14],23,-35309556),i=b(i,u,s,l,e[n+1],4,-1530992060),l=b(l,i,u,s,e[n+4],11,1272893353),s=b(s,l,i,u,e[n+7],16,-155497632),u=b(u,s,l,i,e[n+10],23,-1094730640),i=b(i,u,s,l,e[n+13],4,681279174),l=b(l,i,u,s,e[n],11,-358537222),s=b(s,l,i,u,e[n+3],16,-722521979),u=b(u,s,l,i,e[n+6],23,76029189),i=b(i,u,s,l,e[n+9],4,-640364487),l=b(l,i,u,s,e[n+12],11,-421815835),s=b(s,l,i,u,e[n+15],16,530742520),u=b(u,s,l,i,e[n+2],23,-995338651),i=w(i,u,s,l,e[n],6,-198630844),l=w(l,i,u,s,e[n+7],10,1126891415),s=w(s,l,i,u,e[n+14],15,-1416354905),u=w(u,s,l,i,e[n+5],21,-57434055),i=w(i,u,s,l,e[n+12],6,1700485571),l=w(l,i,u,s,e[n+3],10,-1894986606),s=w(s,l,i,u,e[n+10],15,-1051523),u=w(u,s,l,i,e[n+1],21,-2054922799),i=w(i,u,s,l,e[n+8],6,1873313359),l=w(l,i,u,s,e[n+15],10,-30611744),s=w(s,l,i,u,e[n+6],15,-1560198380),u=w(u,s,l,i,e[n+13],21,1309151649),i=w(i,u,s,l,e[n+4],6,-145523070),l=w(l,i,u,s,e[n+11],10,-1120210379),s=w(s,l,i,u,e[n+2],15,718787259),u=w(u,s,l,i,e[n+9],21,-343485551),i=p(i,r),u=p(u,o),s=p(s,a),l=p(l,c);return[i,u,s,l]}(function(e){var t,n=[];for(n[(e.length>>2)-1]=void 0,t=0;t<n.length;t+=1)n[t]=0;var r=8*e.length;for(t=0;t<r;t+=8)n[t>>5]|=(255&e[t/8])<<t%32;return n}(e),8*e.length))}));var L=function(e,t,n){var r=t&&n||0;"string"==typeof e&&(t="binary"===e?new Array(16):null,e=null);var o=(e=e||{}).random||(e.rng||a)();if(o[6]=15&o[6]|64,o[8]=63&o[8]|128,t)for(var c=0;c<16;++c)t[r+c]=o[c];return t||l(o)};function S(e,t,n,r){switch(e){case 0:return t&n^~t&r;case 1:return t^n^r;case 2:return t&n^t&r^n&r;case 3:return t^n^r}}function E(e,t){return e<<t|e>>>32-t}var q=m("v5",80,(function(e){var t=[1518500249,1859775393,2400959708,3395469782],n=[1732584193,4023233417,2562383102,271733878,3285377520];if("string"==typeof e){var r=unescape(encodeURIComponent(e));e=new Array(r.length);for(var o=0;o<r.length;o++)e[o]=r.charCodeAt(o)}e.push(128);var a=e.length/4+2,c=Math.ceil(a/16),i=new Array(c);for(o=0;o<c;o++){i[o]=new Array(16);for(var u=0;u<16;u++)i[o][u]=e[64*o+4*u]<<24|e[64*o+4*u+1]<<16|e[64*o+4*u+2]<<8|e[64*o+4*u+3]}for(i[c-1][14]=8*(e.length-1)/Math.pow(2,32),i[c-1][14]=Math.floor(i[c-1][14]),i[c-1][15]=8*(e.length-1)&4294967295,o=0;o<c;o++){for(var s=new Array(80),l=0;l<16;l++)s[l]=i[o][l];for(l=16;l<80;l++)s[l]=E(s[l-3]^s[l-8]^s[l-14]^s[l-16],1);var d=n[0],f=n[1],v=n[2],m=n[3],p=n[4];for(l=0;l<80;l++){var h=Math.floor(l/20),y=E(d,5)+S(h,f,v,m)+p+t[h]+s[l]>>>0;p=m,m=v,v=E(f,30)>>>0,f=d,d=y}n[0]=n[0]+d>>>0,n[1]=n[1]+f>>>0,n[2]=n[2]+v>>>0,n[3]=n[3]+m>>>0,n[4]=n[4]+p>>>0}return[n[0]>>24&255,n[0]>>16&255,n[0]>>8&255,255&n[0],n[1]>>24&255,n[1]>>16&255,n[1]>>8&255,255&n[1],n[2]>>24&255,n[2]>>16&255,n[2]>>8&255,255&n[2],n[3]>>24&255,n[3]>>16&255,n[3]>>8&255,255&n[3],n[4]>>24&255,n[4]>>16&255,n[4]>>8&255,255&n[4]]}));n.d(t,"v1",(function(){return v})),n.d(t,"v3",(function(){return x})),n.d(t,"v4",(function(){return L})),n.d(t,"v5",(function(){return q}))},function(e,t,n){"use strict";n.r(t);var r=n(0);function o(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var a=[],c=function(){var e=localStorage.getItem("selectedProducts");return e?JSON.parse(e):[]};a=c();var i=function(){localStorage.setItem("selectedProducts",JSON.stringify(a));var e=document.createEvent("Event");e.initEvent("storage",!0,!0),window.dispatchEvent(e)};document.querySelector(".hamburger").addEventListener("click",(function(e){e.target.classList.toggle("side-active"),e.toElement.nextElementSibling.classList.toggle("side-slide")})),document.querySelectorAll(".side-menu > nav > ul > li > a").forEach((function(e){e.addEventListener("click",(function(e){document.querySelector(".side-menu").classList.toggle("side-slide")}))}));document.querySelectorAll(".form__input").forEach((function(e){e.addEventListener("focus",(function(e){e.target.labels[0].classList.add("label__active")})),e.addEventListener("blur",(function(t){0===e.value.length&&t.target.labels[0].classList.remove("label__active")}))}));var u=document.querySelector(".price > h2");document.querySelectorAll(".change-quantity").forEach((function(e){e.addEventListener("click",(function(e){var t=document.querySelector("[name=quantity]");"+"===e.target.value?t.value=parseInt(t.value)+1:t.value>1&&(t.value=t.value-1),u.textContent="".concat(150*t.value," zł")}))})),window.location.href.includes("product.html")&&document.querySelector("[name=quantity]").addEventListener("change",(function(e){var t=e.target.value;u.textContent="".concat(150*t," zł")}));var s=function e(){var t=[];t=c();var n=document.querySelector(".basket-content > p:nth-child(1)"),r=document.querySelector(".basket-icon > p"),o=document.querySelector(".basket-content > p:nth-child(2)"),u=document.querySelector(".tooltip"),s=document.querySelector(".to-checkout");if(u.innerHTML="",0===t.length)n.classList.add("no-show"),r.classList.add("no-show"),o.classList.add("no-show"),s&&s.classList.add("no-show"),u.classList.remove("borders-on");else{n.classList.remove("no-show"),r.classList.remove("no-show"),o.classList.remove("no-show"),s&&s.classList.remove("no-show"),u.classList.add("borders-on");var l=0;t.forEach((function(t){l+=t.prize;var n=document.createElement("div");n.classList.add("tooltip-product-item"),n.innerHTML='\n            <img src="'.concat(t.img,'" width="40px" height="40px">\n            <div>\n              <p>Rozmiar: ').concat(t.size,"</p>\n              <p>Ilość: ").concat(t.quantity,'</p>\n            </div>\n              <p class="basket-price">Cena: ').concat(t.prize," zł</p>\n            ");var r=document.createElement("button");r.textContent="Usuń",n.appendChild(r),r.addEventListener("click",(function(){var n,r;event.preventDefault(),n=t.id,(r=a.findIndex((function(e){return e.id===n})))>-1&&a.splice(r,1),i(),e()})),u.appendChild(n)})),o.textContent="".concat(l," zł"),r.textContent=t.length;var d=document.createElement("div");d.classList.add("tooltip-summary"),d.innerHTML='\n        <button class="button" id="tooltip-to-checkout" onclick="window.location.href = \'checkout.html\';">do kasy</button>\n        <p>Razem: '.concat(l," zł</p>\n        "),u.appendChild(d)}};s();n(3);c(),document.querySelector("#product-form").addEventListener("submit",(function(e){var t;e.preventDefault(),function(e){var t=o(e.target.elements.size).find((function(e){return e.checked})),n=o(e.target.elements.pattern).find((function(e){return e.checked})),c=n.nextElementSibling.src,i=e.target.elements.quantity.value;a.push({id:Object(r.uuid)(),size:t.id,pattern:n.id,img:c,quantity:i,prize:150*i})}(e),i(),s(),(t=document.querySelector(".added-to-basket")).classList.add("visible"),t.addEventListener("animationend",(function(){t.classList.remove("visible")}))})),window.addEventListener("storage",(function(e){"selectedProducts"===e.key&&(c(),s())}))}]);
//# sourceMappingURL=bundle.js.map