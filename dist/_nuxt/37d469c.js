(window.webpackJsonp=window.webpackJsonp||[]).push([[14,2,7,8,9],{490:function(e,t,r){const n=r(491);e.exports=function(e){if("string"!=typeof e)return;const code=e.toUpperCase();return Object.prototype.hasOwnProperty.call(n,code)?n[code]:void 0},e.exports.currencySymbolMap=n},491:function(e,t){e.exports={AED:"د.إ",AFN:"؋",ALL:"L",AMD:"֏",ANG:"ƒ",AOA:"Kz",ARS:"$",AUD:"$",AWG:"ƒ",AZN:"₼",BAM:"KM",BBD:"$",BDT:"৳",BGN:"лв",BHD:".د.ب",BIF:"FBu",BMD:"$",BND:"$",BOB:"$b",BOV:"BOV",BRL:"R$",BSD:"$",BTC:"₿",BTN:"Nu.",BWP:"P",BYN:"Br",BYR:"Br",BZD:"BZ$",CAD:"$",CDF:"FC",CHE:"CHE",CHF:"CHF",CHW:"CHW",CLF:"CLF",CLP:"$",CNY:"¥",COP:"$",COU:"COU",CRC:"₡",CUC:"$",CUP:"₱",CVE:"$",CZK:"Kč",DJF:"Fdj",DKK:"kr",DOP:"RD$",DZD:"دج",EEK:"kr",EGP:"£",ERN:"Nfk",ETB:"Br",ETH:"Ξ",EUR:"€",FJD:"$",FKP:"£",GBP:"£",GEL:"₾",GGP:"£",GHC:"₵",GHS:"GH₵",GIP:"£",GMD:"D",GNF:"FG",GTQ:"Q",GYD:"$",HKD:"$",HNL:"L",HRK:"kn",HTG:"G",HUF:"Ft",IDR:"Rp",ILS:"₪",IMP:"£",INR:"₹",IQD:"ع.د",IRR:"﷼",ISK:"kr",JEP:"£",JMD:"J$",JOD:"JD",JPY:"¥",KES:"KSh",KGS:"лв",KHR:"៛",KMF:"CF",KPW:"₩",KRW:"₩",KWD:"KD",KYD:"$",KZT:"₸",LAK:"₭",LBP:"£",LKR:"₨",LRD:"$",LSL:"M",LTC:"Ł",LTL:"Lt",LVL:"Ls",LYD:"LD",MAD:"MAD",MDL:"lei",MGA:"Ar",MKD:"ден",MMK:"K",MNT:"₮",MOP:"MOP$",MRO:"UM",MRU:"UM",MUR:"₨",MVR:"Rf",MWK:"MK",MXN:"$",MXV:"MXV",MYR:"RM",MZN:"MT",NAD:"$",NGN:"₦",NIO:"C$",NOK:"kr",NPR:"₨",NZD:"$",OMR:"﷼",PAB:"B/.",PEN:"S/.",PGK:"K",PHP:"₱",PKR:"₨",PLN:"zł",PYG:"Gs",QAR:"﷼",RMB:"￥",RON:"lei",RSD:"Дин.",RUB:"₽",RWF:"R₣",SAR:"﷼",SBD:"$",SCR:"₨",SDG:"ج.س.",SEK:"kr",SGD:"S$",SHP:"£",SLL:"Le",SOS:"S",SRD:"$",SSP:"£",STD:"Db",STN:"Db",SVC:"$",SYP:"£",SZL:"E",THB:"฿",TJS:"SM",TMT:"T",TND:"د.ت",TOP:"T$",TRL:"₤",TRY:"₺",TTD:"TT$",TVD:"$",TWD:"NT$",TZS:"TSh",UAH:"₴",UGX:"USh",USD:"$",UYI:"UYI",UYU:"$U",UYW:"UYW",UZS:"лв",VEF:"Bs",VES:"Bs.S",VND:"₫",VUV:"VT",WST:"WS$",XAF:"FCFA",XBT:"Ƀ",XCD:"$",XOF:"CFA",XPF:"₣",XSU:"Sucre",XUA:"XUA",YER:"﷼",ZAR:"R",ZMW:"ZK",ZWD:"Z$",ZWL:"$"}},492:function(e,t,r){var content=r(498);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(17).default)("80562352",content,!0,{sourceMap:!1})},493:function(e,t,r){"use strict";r.r(t);var n=r(2),o=(r(19),r(26),r(9),r(8),r(12),r(13),r(10),r(14),r(490)),c=r.n(o),d=r(229);function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function v(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var f={props:{title:{type:String,required:!0},pricing:{type:Number,required:!0},img:{type:String,required:!0},originalPricing:{type:Number,required:!0},description:{type:String,required:!0},slug:{type:String,required:!0}},setup:function(e){var t=d.PackageFormFunction;return v(v({},t),{},{getPrice:function(e){return"".concat(c()("INR")).concat(e,".")},percentCalc:function(e,t){return"".concat(Math.floor(100-t/e*100),"% OFF")},openDialog:function(){t.updateTitle(e.title),t.state.dialog=!t.state.dialog}})}},m=(r(497),r(63)),h=r(75),w=r.n(h),y=r(222),k=r(86),P=r(170),component=Object(m.a)(f,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-card",{staticClass:"cus-card",attrs:{to:e.slug}},[r("v-img",{staticClass:"white--text align-end",attrs:{height:"200px",src:e.img}}),e._v(" "),r("h3",{staticClass:"cus-title"},[e._v(e._s(e.title))]),e._v(" "),r("v-card-subtitle",{staticClass:"cus-pricing"},[e._v("\n    "+e._s(e.getPrice(e.pricing.toLocaleString()))+"\n    "),r("s",{staticClass:"cus-pricing__original"},[e._v(e._s(e.getPrice(e.originalPricing.toLocaleString())))])])],1)}),[],!1,null,"fbdd2528",null);t.default=component.exports;w()(component,{VCard:y.a,VCardSubtitle:k.b,VImg:P.a})},494:function(e,t,r){var content=r(495);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(17).default)("7132a15d",content,!0,{sourceMap:!1})},495:function(e,t,r){var n=r(16)(!1);n.push([e.i,".primary-bg-color{background:#eb5757!important;background-color:#eb5757!important}.v-btn--active.nav-link,.v-list-item--active.nav-link{background:#eb5757;color:#fff}.theme--light.v-divider{border-color:rgba(0,0,0,.12)}.theme--dark.v-divider{border-color:hsla(0,0%,100%,.12)}.v-divider{display:block;flex:1 1 0px;max-width:100%;height:0;max-height:0;border:solid;border-width:thin 0 0;transition:inherit}.v-divider--inset:not(.v-divider--vertical){max-width:calc(100% - 72px)}.v-application--is-ltr .v-divider--inset:not(.v-divider--vertical){margin-left:72px}.v-application--is-rtl .v-divider--inset:not(.v-divider--vertical){margin-right:72px}.v-divider--vertical{align-self:stretch;border:solid;border-width:0 thin 0 0;display:inline-flex;height:inherit;min-height:100%;max-height:100%;max-width:0;width:0;vertical-align:text-bottom;margin:0 -1px}.v-divider--vertical.v-divider--inset{margin-top:8px;min-height:0;max-height:calc(100% - 16px)}",""]),e.exports=n},496:function(e,t,r){var content=r(504);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(17).default)("044ba9b0",content,!0,{sourceMap:!1})},497:function(e,t,r){"use strict";r(492)},498:function(e,t,r){var n=r(16)(!1);n.push([e.i,".primary-bg-color[data-v-fbdd2528]{background:#eb5757!important;background-color:#eb5757!important}.v-btn--active.nav-link[data-v-fbdd2528],.v-list-item--active.nav-link[data-v-fbdd2528]{background:#eb5757;color:#fff}.v-application .mx-auto[data-v-fbdd2528]{margin:5px 5px 20px!important}.cus-card[data-v-fbdd2528]{border-radius:0!important;box-shadow:0 0 10px 0 rgba(0,0,0,.1)!important;max-width:800px;padding-bottom:20px}.cus-card .description[data-v-fbdd2528]{max-height:2.5rem!important;display:-webkit-box;max-width:100%;-webkit-line-clamp:1;-webkit-box-orient:vertical;overflow:hidden;display:none}.cus-card .cus-title[data-v-fbdd2528]{color:#312f2f;padding:12px 16px;font-weight:400;font-size:16px}.cus-card .cus-pricing[data-v-fbdd2528]{font-size:20px;font-weight:bolder;padding-top:0;color:#222}.cus-card .cus-pricing__original[data-v-fbdd2528]{font-size:16px;font-weight:400;color:grey}",""]),e.exports=n},499:function(e,t,r){"use strict";r(9),r(8),r(12),r(13),r(10),r(14);var n=r(2),o=(r(494),r(21));function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function d(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}t.a=o.a.extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(e){var t;return this.$attrs.role&&"separator"!==this.$attrs.role||(t=this.vertical?"vertical":"horizontal"),e("hr",{class:d({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:d({role:"separator","aria-orientation":t},this.$attrs),on:this.$listeners})}})},500:function(e,t,r){"use strict";r.r(t),r.d(t,"WebDev",(function(){return n})),r.d(t,"DesignPackage",(function(){return o})),r.d(t,"GetWebDevPreview",(function(){return c})),r.d(t,"GetDesignPackagePreview",(function(){return d})),r.d(t,"CourseBySlug",(function(){return l}));r(50),r(8),r(51),r(43),r(115),r(26);var n=[{slug:"/forntend-designing",title:"Frontend designing with html, css and Javascript",price:5e3,original:7e3,description:"This package includes html, css, scss \n        javascript and material design to make a complete \n        website and deploy it on the internet",hours:21,hoursPerWeek:3,weekDay:["Sunday"],peoplePerCurse:10,img:"/image/frontend.webp",phone:"arun",step:["introduction to frontend web development","introduction to html5","how to use html form elements","html attributes","how to use html maps","how to use SVG","introduction to html iframe","play audio and video","introduction to css","using css with html","css box model","css alignment","css positioning","css grid system","css flex box","css media queries","css keyframe animations","website layout using html and css","introduction to javascript","data types in javascript","logs in javascript","javascript string methods","javascript object methods","javascript array methods","javascript functions","javascript event listener","javascript event bubbling","javascript DOM manipulation","creating todo app using javascript","adding and removing attributes using javascript","what is JSON","fetch API using javascript","fetch data from api to build html element","introduction ot scss","mixin with scss","reusing code in scss","functions in scss","variables in scss","introduction to material design","layout using material design","creating portfolio using html, css and javascript","deploying portfolio using netlify","preparing for interview"]},{slug:"/backend-designing",title:"Backend development With nodejs Mongodb",price:5e3,original:15e3,description:"This package will teach you NodeJs \n        with express framework, with mognodb and MySQL database\n        a complete package to become a backend developer",hours:21,phone:"arun",hoursPerWeek:3,weekDay:["Sunday"],peoplePerCurse:10,img:"/image/backend.png",step:["What is backed programing","what is a API","what are the types of api","what is a protocol","What are the methods used in REST API","what is nodejs","setup environment for developing nodejs","introduction to npm","creating small server using nodejs","introduction to expressjs","creating small server using nodejs","creating CRUD api using nodejs","Introduction to SQL language","installing SQL","perform CRUD using SQL with nodejs","introduction to mongodb","querying mongodb with shell","perform crud using mongoose","create a login system API using nodejs and mongodb","create a blog post API using nodejs and mongodb","create Documentation using Postman","publish Postman API documentation live","deploying mongodb application using heroku"]},{slug:"/react-course",title:"Complete React course with Redux",price:5e3,original:1e4,phone:"arun",description:"This package will teach you ReactJS with \n        React-Redux in a simplified manner with modern coding standers\n        for better scalability with typescript, live coding with 2 real world\n        application with deployment\n        ",hours:21,hoursPerWeek:6,weekDay:["Sunday"],peoplePerCurse:10,img:"/image/react.jpeg",step:["brief introduction to javascript","what is javascript library","what is react","how react works","syntax of JSX","use react with html","creating small app with react cdn","create a full react app with npx","introduction to npm","state in react","props in react","class based component in react","functional component in react","updating state in react","react hooks","use functional component with react hooks","react hook: useState","react hook: useEffect","react hook: useLayoutEffect","react hook: useReducer","react hook: useRef","react hook: memo","react hook: callback","react hook: use context","writing custom hooks in react","what is redux","how redux works","state management with redux","perform multi page action with out loosing state using redux","simple alternative for react state management","create project with react","deploying project in heroku","preparing for react interview"]},{slug:"/vuejs-cource",title:"Complete Vuejs Course with Vuex",price:5e3,original:1e4,phone:"arun",description:"This package will teach you VueJS with \n        Vuex state management in a simplified manner with modern coding standers\n        for better scalability with typescript, live coding with 2 real world\n        application with deployment",hours:21,hoursPerWeek:6,weekDay:["Sunday"],peoplePerCurse:10,img:"/image/vuejs.jpeg",step:["introduction to javascript","what is javascript library","what is vuejs","use vuejs with html as cdn","create simple application with vuejs cdn","dom manipulation with vuejs","dynamic attributes with vuejs","one way data binding","two way data binding","computed properties","watch in vuejs","created life cycle hooks","mounted life cycle hooks","get router param","fetch request in vuejs","user axios to fetch data","dynamicly load data and manipulate dom using vuejs","perform crud with vuejs","introduction to vue composition-api","how does vue composition defers from object api","reactive in vue composition","use ref in vue composition","useroute in vue composition","form validation with vuejs","create portfolio with vuejs","deploying project in heroku","preparing for interview"]},{slug:"/forntend-Web-Application",title:"Angular Development",price:5e3,original:7e3,description:"This package includes html, css, scss, Typescript,javascript and material design",hours:21,hoursPerWeek:3,weekDay:["Sunday"],peoplePerCurse:10,img:"/image/angular-logo.jpeg",phone:"karthick",step:["Why to Learn Angular","Angular - Overview","Environment Setup","Project Setup","javascript intro","typescript intro","HTMLt5 intro","scss intro","Components","Modules","Data Binding","Event Binding","Templates","Directives","Pipes","Routing","Services","Http Client","Dependency injection in Angular","CLI Prompts","Forms","Materials","Animations","Building a Project","preparing for interview"]}],o=[{slug:"/ui-ux-design-beginner",title:"UX and UI Designer (Beginners)",step:["Introduction of UX & UI","Usability of tools for UX & UI","Design Process","WireFrames & Prototyping","Visual Design and prototyping","Realtime scenario (each have to pick one concept to create a design)","Creating Portfolio & Training for a Interview process"],phone:"gopi",price:1e4,original:2e4,hours:21,hoursPerWeek:6,weekDay:["Saturday","Sunday"],description:"\nThis course will teach you the basic of UI & UX designing.\n        ",peoplePerCurse:10,img:"/image/ui-ux.png"},{slug:"/ui-ux-design-mid-level",title:"UX and UI designer (mid-level)",step:["Before introduction of ui & ux design","UX Design process & Research Process","Creating WireFrame and visual design (prototype)","Redesign (applying heuristic evaluation & laws)","realtime design concept to redesign and create new","presentation and validation","Tips for creating portfolio and case studies"],phone:"gopi",description:"This course will teach you the advance UI & UX designing.",price:15e3,original:3e4,hours:21,hoursPerWeek:6,weekDay:["Saturday","Sunday"],peoplePerCurse:10,img:"/image/ui-ux-2.jpeg"}],c=function(){return n.map((function(e){return{title:e.title,description:e.description,price:e.price,slug:e.slug,original:e.original,img:e.img}}))},d=function(){return o.map((function(e){return{title:e.title,description:e.description,price:e.price,slug:e.slug,original:e.original,img:e.img}}))},l=function(e){return[].concat(n,o).find((function(t){if(console.log(t.slug),r=t.slug,String(r).slice(1,r.length)==e)return t;var r}))}},502:function(e,t,r){var content=r(508);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(17).default)("5f6bd412",content,!0,{sourceMap:!1})},503:function(e,t,r){"use strict";r(496)},504:function(e,t,r){var n=r(16)(!1);n.push([e.i,".primary-bg-color{background:#eb5757!important;background-color:#eb5757!important}.v-btn--active.nav-link,.v-list-item--active.nav-link{background:#eb5757;color:#fff}.card-grid-wrapper{display:grid;grid-gap:1.2rem;grid-template-columns:repeat(auto-fit,minmax(250px,1fr))}",""]),e.exports=n},505:function(e,t,r){"use strict";r.r(t);var n={props:{data:{required:!0}},components:{"package-card":r(493).default}},o=(r(503),r(63)),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"card-grid-wrapper"},e._l(e.data,(function(e,i){return r("package-card",{key:i,attrs:{title:e.title,description:e.description,pricing:e.price,img:e.img,originalPricing:e.original,slug:"/courses"+e.slug}})})),1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{PackageCard:r(493).default})},507:function(e,t,r){"use strict";r(502)},508:function(e,t,r){var n=r(16)(!1);n.push([e.i,".primary-bg-color[data-v-0abfbbfd]{background:#eb5757!important;background-color:#eb5757!important}.v-btn--active.nav-link[data-v-0abfbbfd],.v-list-item--active.nav-link[data-v-0abfbbfd]{background:#eb5757;color:#fff}.v-application .mx-auto[data-v-0abfbbfd]{margin:5px 5px 20px!important}.cus-card[data-v-0abfbbfd]{border-radius:0!important;box-shadow:0 0 10px 0 rgba(0,0,0,.1)!important;max-width:800px}.cus-card .description[data-v-0abfbbfd]{max-height:2.5rem!important;display:-webkit-box;max-width:100%;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}",""]),e.exports=n},513:function(e,t,r){var content=r(530);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(17).default)("1b25d245",content,!0,{sourceMap:!1})},523:function(e,t,r){"use strict";r.r(t);r(9),r(8),r(12),r(13),r(10),r(14);var n=r(2),o=(r(19),r(26),r(490)),c=r.n(o),d=r(229);function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function v(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var f={props:{title:{type:String,required:!0},pricing:{type:Number,required:!0},description:{type:String,required:!0},slug:{type:String,required:!0}},setup:function(e){var t=d.PackageFormFunction;return v(v({},t),{},{getPrice:function(){return"".concat(c()("INR")).concat(this.pricing.toLocaleString(),".")},openDialog:function(){t.updateTitle(e.title),t.state.dialog=!t.state.dialog}})}},m=(r(507),r(63)),h=r(75),w=r.n(h),y=r(231),k=r(222),P=r(86),x=r(170),j=r(481),component=Object(m.a)(f,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-card",{staticClass:"cus-card"},[r("v-img",{staticClass:"white--text align-end",attrs:{height:"200px",src:"/image/frontend.webp"}}),e._v(" "),r("v-card-title",[e._v(e._s(e.title))]),e._v(" "),r("v-card-subtitle",[e._v(e._s(e.getPrice()))]),e._v(" "),r("v-card-text",{staticClass:"description"},[e._v("\n    "+e._s(e.state.dialog)+"\n    "+e._s(e.description)+"\n  ")]),e._v(" "),r("v-card-actions",[r("v-btn",{attrs:{to:e.slug,text:""}},[e._v("More Detail")]),e._v(" "),r("v-spacer"),e._v(" "),r("v-btn",{attrs:{color:"#2132ff",dark:""},on:{click:function(t){return e.openDialog()}}},[e._v("Select")])],1)],1)}),[],!1,null,"0abfbbfd",null);t.default=component.exports;w()(component,{VBtn:y.a,VCard:k.a,VCardActions:P.a,VCardSubtitle:P.b,VCardText:P.c,VCardTitle:P.d,VImg:x.a,VSpacer:j.a})},529:function(e,t,r){"use strict";r(513)},530:function(e,t,r){var n=r(16)(!1);n.push([e.i,".primary-bg-color[data-v-75383e07]{background:#eb5757!important;background-color:#eb5757!important}.v-btn--active.nav-link[data-v-75383e07],.v-list-item--active.nav-link[data-v-75383e07]{background:#eb5757;color:#fff}.page-class[data-v-75383e07]{min-height:100vh;max-width:1140px}.card-flex-wrapper[data-v-75383e07]{display:flex;justify-content:space-between;flex-wrap:wrap;width:100%}.title-divider[data-v-75383e07]{padding:10px 0}.spacer[data-v-75383e07]{height:30px}",""]),e.exports=n},574:function(e,t,r){"use strict";r.r(t);var n=r(523),o=r(493),c=r(505),d=r(500),l={layout:"main",components:{"package-card":o.default,"material-card":n.default,"package-grid":c.default},data:function(){return{title:"Cources available",webDev:Object(d.GetWebDevPreview)(),designeCource:Object(d.GetDesignPackagePreview)()}},head:function(){return{title:this.title}},created:function(){}},v=(r(529),r(63)),f=r(75),m=r.n(f),h=r(487),w=r(499),component=Object(v.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",{staticClass:"page-class"},[r("h1",[e._v("Web Developement")]),e._v(" "),r("v-divider",{staticClass:"title-divider"}),e._v(" "),r("package-grid",{attrs:{data:e.webDev}}),e._v(" "),r("br"),r("br"),e._v(" "),r("h1",[e._v("UX & UI Design Cource")]),e._v(" "),r("v-divider",{staticClass:"title-divider"}),e._v(" "),r("package-grid",{attrs:{data:e.designeCource}}),e._v(" "),r("div",[r("br"),e._v(" "),r("br"),e._v(" "),r("br"),e._v(" "),r("br")])],1)}),[],!1,null,"75383e07",null);t.default=component.exports;m()(component,{PackageGrid:r(505).default}),m()(component,{VContainer:h.a,VDivider:w.a})}}]);