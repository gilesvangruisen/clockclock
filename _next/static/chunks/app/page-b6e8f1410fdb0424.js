(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{1797:function(e,t,n){Promise.resolve().then(n.bind(n,3052))},8707:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return y}});let r=n(6927),a=n(5909),i=a._(n(6006)),o=r._(n(9209)),l=n(3930),s=n(8706),u=n(3278);n(4745);let c=r._(n(8685)),d={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function f(e){return void 0!==e.default}function p(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function m(e,t,n,r,a,i,o){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let l="decode"in e?e.decode():Promise.resolve();l.catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("blur"===n&&i(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let n=!1,a=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>n,isPropagationStopped:()=>a,persist:()=>{},preventDefault:()=>{n=!0,t.preventDefault()},stopPropagation:()=>{a=!0,t.stopPropagation()}})}(null==a?void 0:a.current)&&a.current(e)}})}function b(e){let[t,n]=i.version.split("."),r=parseInt(t,10),a=parseInt(n,10);return r>18||18===r&&a>=3?{fetchPriority:e}:{fetchpriority:e}}let g=(0,i.forwardRef)((e,t)=>{let{imgAttributes:n,heightInt:r,widthInt:a,qualityInt:o,className:l,imgStyle:s,blurStyle:u,isLazy:c,fetchPriority:d,fill:f,placeholder:p,loading:g,srcString:h,config:y,unoptimized:v,loader:x,onLoadRef:_,onLoadingCompleteRef:w,setBlurComplete:j,setShowAltText:S,onLoad:O,onError:E,...P}=e;return g=c?"lazy":g,i.default.createElement("img",{...P,...b(d),loading:g,width:a,height:r,decoding:"async","data-nimg":f?"fill":"1",className:l,style:{...s,...u},...n,ref:(0,i.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(E&&(e.src=e.src),e.complete&&m(e,h,p,_,w,j,v))},[h,p,_,w,j,E,v,t]),onLoad:e=>{let t=e.currentTarget;m(t,h,p,_,w,j,v)},onError:e=>{S(!0),"blur"===p&&j(!0),E&&E(e)}})}),h=(0,i.forwardRef)((e,t)=>{var n;let r,a,{src:m,sizes:h,unoptimized:y=!1,priority:v=!1,loading:x,className:_,quality:w,width:j,height:S,fill:O,style:E,onLoad:P,onLoadingComplete:C,placeholder:k="empty",blurDataURL:M,fetchPriority:I,layout:A,objectFit:z,objectPosition:R,lazyBoundary:N,lazyRoot:D,...U}=e,L=(0,i.useContext)(u.ImageConfigContext),T=(0,i.useMemo)(()=>{let e=d||L||s.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),n=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:n}},[L]),W=U.loader||c.default;delete U.loader;let F="__next_img_default"in W;if(F){if("custom"===T.loader)throw Error('Image with src "'+m+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=W;W=t=>{let{config:n,...r}=t;return e(r)}}if(A){"fill"===A&&(O=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[A];e&&(E={...E,...e});let t={responsive:"100vw",fill:"100vw"}[A];t&&!h&&(h=t)}let B="",G=p(j),H=p(S);if("object"==typeof(n=m)&&(f(n)||void 0!==n.src)){let e=f(m)?m.default:m;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(r=e.blurWidth,a=e.blurHeight,M=M||e.blurDataURL,B=e.src,!O){if(G||H){if(G&&!H){let t=G/e.width;H=Math.round(e.height*t)}else if(!G&&H){let t=H/e.height;G=Math.round(e.width*t)}}else G=e.width,H=e.height}}let V=!v&&("lazy"===x||void 0===x);(!(m="string"==typeof m?m:B)||m.startsWith("data:")||m.startsWith("blob:"))&&(y=!0,V=!1),T.unoptimized&&(y=!0),F&&m.endsWith(".svg")&&!T.dangerouslyAllowSVG&&(y=!0),v&&(I="high");let[$,q]=(0,i.useState)(!1),[Y,J]=(0,i.useState)(!1),K=p(w),Q=Object.assign(O?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:z,objectPosition:R}:{},Y?{}:{color:"transparent"},E),X="blur"===k&&M&&!$?{backgroundSize:Q.objectFit||"cover",backgroundPosition:Q.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'+(0,l.getImageBlurSvg)({widthInt:G,heightInt:H,blurWidth:r,blurHeight:a,blurDataURL:M,objectFit:Q.objectFit})+'")'}:{},Z=function(e){let{config:t,src:n,unoptimized:r,width:a,quality:i,sizes:o,loader:l}=e;if(r)return{src:n,srcSet:void 0,sizes:void 0};let{widths:s,kind:u}=function(e,t,n){let{deviceSizes:r,allSizes:a}=e;if(n){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let r;r=e.exec(n);r)t.push(parseInt(r[2]));if(t.length){let e=.01*Math.min(...t);return{widths:a.filter(t=>t>=r[0]*e),kind:"w"}}return{widths:a,kind:"w"}}if("number"!=typeof t)return{widths:r,kind:"w"};let i=[...new Set([t,2*t].map(e=>a.find(t=>t>=e)||a[a.length-1]))];return{widths:i,kind:"x"}}(t,a,o),c=s.length-1;return{sizes:o||"w"!==u?o:"100vw",srcSet:s.map((e,r)=>l({config:t,src:n,quality:i,width:e})+" "+("w"===u?e:r+1)+u).join(", "),src:l({config:t,src:n,quality:i,width:s[c]})}}({config:T,src:m,unoptimized:y,width:G,quality:K,sizes:h,loader:W}),ee=m,et=(0,i.useRef)(P);(0,i.useEffect)(()=>{et.current=P},[P]);let en=(0,i.useRef)(C);(0,i.useEffect)(()=>{en.current=C},[C]);let er={isLazy:V,imgAttributes:Z,heightInt:H,widthInt:G,qualityInt:K,className:_,imgStyle:Q,blurStyle:X,loading:x,config:T,fetchPriority:I,fill:O,unoptimized:y,placeholder:k,loader:W,srcString:ee,onLoadRef:et,onLoadingCompleteRef:en,setBlurComplete:q,setShowAltText:J,...U};return i.default.createElement(i.default.Fragment,null,i.default.createElement(g,{...er,ref:t}),v?i.default.createElement(o.default,null,i.default.createElement("link",{key:"__nimg-"+Z.src+Z.srcSet+Z.sizes,rel:"preload",as:"image",href:Z.srcSet?void 0:Z.src,imageSrcSet:Z.srcSet,imageSizes:Z.sizes,crossOrigin:U.crossOrigin,referrerPolicy:U.referrerPolicy,...b(I)})):null)}),y=h;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1909:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"AmpStateContext",{enumerable:!0,get:function(){return i}});let r=n(6927),a=r._(n(6006)),i=a.default.createContext({})},7060:function(e,t){"use strict";function n(e){let{ampFirst:t=!1,hybrid:n=!1,hasQuery:r=!1}=void 0===e?{}:e;return t||n&&r}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return n}})},9209:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{defaultHead:function(){return c},default:function(){return m}});let r=n(6927),a=n(5909),i=a._(n(6006)),o=r._(n(9797)),l=n(1909),s=n(5415),u=n(7060);function c(e){void 0===e&&(e=!1);let t=[i.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(i.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function d(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===i.default.Fragment?e.concat(i.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}n(4745);let f=["name","httpEquiv","charSet","itemProp"];function p(e,t){let{inAmpMode:n}=t;return e.reduce(d,[]).reverse().concat(c(n).reverse()).filter(function(){let e=new Set,t=new Set,n=new Set,r={};return a=>{let i=!0,o=!1;if(a.key&&"number"!=typeof a.key&&a.key.indexOf("$")>0){o=!0;let t=a.key.slice(a.key.indexOf("$")+1);e.has(t)?i=!1:e.add(t)}switch(a.type){case"title":case"base":t.has(a.type)?i=!1:t.add(a.type);break;case"meta":for(let e=0,t=f.length;e<t;e++){let t=f[e];if(a.props.hasOwnProperty(t)){if("charSet"===t)n.has(t)?i=!1:n.add(t);else{let e=a.props[t],n=r[t]||new Set;("name"!==t||!o)&&n.has(e)?i=!1:(n.add(e),r[t]=n)}}}}return i}}()).reverse().map((e,t)=>{let r=e.key||t;if(!n&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let t={...e.props||{}};return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,i.default.cloneElement(e,t)}return i.default.cloneElement(e,{key:r})})}let m=function(e){let{children:t}=e,n=(0,i.useContext)(l.AmpStateContext),r=(0,i.useContext)(s.HeadManagerContext);return i.default.createElement(o.default,{reduceComponentsToState:p,headManager:r,inAmpMode:(0,u.isInAmpMode)(n)},t)};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3930:function(e,t){"use strict";function n(e){let{widthInt:t,heightInt:n,blurWidth:r,blurHeight:a,blurDataURL:i,objectFit:o}=e,l=r||t,s=a||n,u=i.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return l&&s?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 "+l+" "+s+"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='"+(r&&a?"1":"20")+"'/%3E"+u+"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='"+i+"'/%3E%3C/svg%3E":"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' preserveAspectRatio='"+("contain"===o?"xMidYMid":"cover"===o?"xMidYMid slice":"none")+"' x='0' y='0' height='100%25' width='100%25' href='"+i+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return n}})},3278:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ImageConfigContext",{enumerable:!0,get:function(){return o}});let r=n(6927),a=r._(n(6006)),i=n(8706),o=a.default.createContext(i.imageConfigDefault)},8706:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{VALID_LOADERS:function(){return n},imageConfigDefault:function(){return r}});let n=["default","imgix","cloudinary","akamai","custom"],r={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"inline",remotePatterns:[],unoptimized:!1}},8685:function(e,t){"use strict";function n(e){let{config:t,src:n,width:r,quality:a}=e;return t.path+"?url="+encodeURIComponent(n)+"&w="+r+"&q="+(a||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r}}),n.__next_img_default=!0;let r=n},9797:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return l}});let r=n(5909),a=r._(n(6006)),i=a.useLayoutEffect,o=a.useEffect;function l(e){let{headManager:t,reduceComponentsToState:n}=e;function r(){if(t&&t.mountedInstances){let r=a.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(n(r,e))}}return i(()=>{var n;return null==t||null==(n=t.mountedInstances)||n.add(e.children),()=>{var n;null==t||null==(n=t.mountedInstances)||n.delete(e.children)}}),i(()=>(t&&(t._pendingUpdate=r),()=>{t&&(t._pendingUpdate=r)})),o(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null}},4745:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"warnOnce",{enumerable:!0,get:function(){return n}});let n=e=>{}},3052:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u}});var r=n(9268),a=n(6006);n(6394);let i=[[{a:0,b:90},{a:180,b:90},{a:-90,b:90},{a:-90,b:90},{a:-90,b:0},{a:-90,b:180}],[{a:135,b:135},{a:90,b:90},{a:135,b:135},{a:-90,b:90},{a:135,b:135},{a:-90,b:-90}],[{a:0,b:0},{a:180,b:90},{a:90,b:0},{a:-90,b:180},{a:0,b:-90},{a:180,b:180}],[{a:0,b:0},{a:180,b:90},{a:0,b:0},{a:-90,b:180},{a:0,b:0},{a:-90,b:180}],[{a:90,b:90},{a:90,b:90},{a:-90,b:0},{a:-90,b:180},{a:135,b:135},{a:-90,b:-90}],[{a:90,b:0},{a:180,b:180},{a:0,b:-90},{a:90,b:180},{a:0,b:0},{a:180,b:-90}],[{a:90,b:0},{a:180,b:180},{a:90,b:-90},{a:90,b:180},{a:-90,b:0},{a:180,b:-90}],[{a:0,b:0},{a:180,b:90},{a:135,b:135},{a:90,b:-90},{a:135,b:135},{a:-90,b:-90}],[{a:0,b:90},{a:180,b:90},{a:-90,b:0},{a:-90,b:180},{a:-90,b:0},{a:-90,b:180}],[{a:90,b:0},{a:180,b:90},{a:0,b:-90},{a:90,b:-90},{a:0,b:0},{a:180,b:-90}]],o=[{x:0,y:0},{x:1,y:0},{x:0,y:1},{x:1,y:1},{x:0,y:2},{x:1,y:2}];function l(e){let{value:t,x:n=0}=e,a=i[t];return(0,r.jsx)("g",{style:{transform:"translate(".concat(400*n,"px, 0)")},children:a.map((e,t)=>(0,r.jsx)(s,{...o[t],...e},t))})}function s(e){let{a:t=0,b:n=0,x:a=0,y:i=0}=e;return(0,r.jsxs)("g",{style:{transition:"all 1000ms ease-in-out",transform:"translate(".concat(200*a,"px, ").concat(200*i,"px)")},children:[(0,r.jsx)("g",{children:(0,r.jsx)("foreignObject",{x:7,y:7,width:200,height:200,children:(0,r.jsx)("div",{xmlns:"http://www.w3.org/1999/xhtml",className:"rounded-full",style:{width:"186px",height:"186px",boxShadow:"inset -10px 6px 30px -10px rgba(0,0,0,0.4)"}})})}),(0,r.jsx)("g",{style:{transition:"all 1000ms ease-in-out",transform:"translate(".concat(100,"px, ").concat(100,"px) rotate(").concat(t,"deg)")},children:(0,r.jsx)("line",{x1:0,y1:0,x2:72,y2:0,strokeWidth:16,stroke:"black",strokeLinecap:"round"})}),(0,r.jsx)("g",{style:{transition:"all 1000ms ease-in-out",transform:"translate(".concat(100,"px, ").concat(100,"px) rotate(").concat(n,"deg)")},children:(0,r.jsx)("line",{x1:0,y1:0,x2:72,y2:0,strokeWidth:16,stroke:"black",strokeLinecap:"round"})})]})}function u(){let e=function(){let[e,t]=(0,a.useState)(c());return(0,a.useEffect)(()=>{let e=setInterval(()=>{t(c())},1e3);return()=>clearInterval(e)},[]),e}();return(0,r.jsx)("main",{className:"flex h-full",children:(0,r.jsx)("svg",{className:"mx-auto self-center",width:"600",viewBox:"0 0 1600 600",children:e.map((e,t)=>(0,r.jsx)(l,{value:e,x:t},String(t)))})})}function c(){let e=new Date,t=String(e.getHours()%12||12).padStart(2,"0"),n=String(e.getMinutes()).padStart(2,"0");return[...t.split("").map(String),...n.split("").map(String)]}},3177:function(e,t,n){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(6006),a=Symbol.for("react.element"),i=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function s(e,t,n){var r,s={},u=null,c=null;for(r in void 0!==n&&(u=""+n),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(c=t.ref),t)i.call(t,r)&&!l.hasOwnProperty(r)&&(s[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===s[r]&&(s[r]=t[r]);return{$$typeof:a,type:e,key:u,ref:c,props:s,_owner:o.current}}t.jsx=s,t.jsxs=s},9268:function(e,t,n){"use strict";e.exports=n(3177)},6394:function(e,t,n){n(8707)}},function(e){e.O(0,[253,488,744],function(){return e(e.s=1797)}),_N_E=e.O()}]);