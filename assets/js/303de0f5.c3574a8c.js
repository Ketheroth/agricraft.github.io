"use strict";(self.webpackChunkagridocs=self.webpackChunkagridocs||[]).push([[604],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>m});var r=n(7294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var s=r.createContext({}),u=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},c=function(t){var e=u(t.components);return r.createElement(s.Provider,{value:e},t.children)},h="mdxType",p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,i=t.mdxType,a=t.originalType,s=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),h=u(n),d=i,m=h["".concat(s,".").concat(d)]||h[d]||p[d]||a;return n?r.createElement(m,o(o({ref:e},c),{},{components:n})):r.createElement(m,o({ref:e},c))}));function m(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l[h]="string"==typeof t?t:i,o[1]=l;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1231:(t,e,n)=>{n.r(e),n.d(e,{Calculator:()=>h,assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(7462),i=n(7294),a=n(3905);const o={pagination_next:null},l="Tolerance calculator",s={unversionedId:"customization/tolerance-calculator",id:"customization/tolerance-calculator",title:"Tolerance calculator",description:"A calculator to determine the tolerance factor for each soil requirements of the plant.",source:"@site/docs/customization/tolerance-calculator.mdx",sourceDirName:"customization",slug:"/customization/tolerance-calculator",permalink:"/agricraft.github.io/docs/customization/tolerance-calculator",draft:!1,editUrl:"https://github.com/AgriCraft/agricraft.github.io/tree/main/docs/customization/tolerance-calculator.mdx",tags:[],version:"current",frontMatter:{pagination_next:null},sidebar:"customizationSidebar",previous:{title:"Wrapping up",permalink:"/agricraft.github.io/docs/customization/wrapping-up"}},u={},c=[];class h extends i.Component{constructor(t){super(t),this.state={humidity:0,acidity:0,nutrients:0,other_humidity:0,other_acidity:0,other_nutrients:0,strength:7,result:""},this.update=this.update.bind(this)}update(){let t=Math.ceil(100*Math.abs((this.state.humidity-this.state.other_humidity)/this.state.strength))/100,e=Math.ceil(100*Math.abs((this.state.acidity-this.state.other_acidity)/this.state.strength))/100,n=Math.ceil(100*Math.abs((this.state.nutrients-this.state.other_nutrients)/this.state.strength))/100;this.setState({result:`"soil_humidity": {\n\t...\n\t"tolerance_factor": ${t.toFixed(2)}\n}\n"soil_acidity": {\n\t...\n\t"tolerance_factor": ${e.toFixed(2)}\n}\n"soil_nutrients": {\n\t...\n\t"tolerance_factor": ${n.toFixed(2)}\n}`})}componentDidMount(){this.update()}render(){return(0,a.kt)("div",null,(0,a.kt)("div",{style:{display:"flex",justifyContent:"space-evenly"}},(0,a.kt)("div",null,(0,a.kt)("p",null,"The soil:"),(0,a.kt)("label",{htmlFor:"humidity"},"Humidity "),(0,a.kt)("input",{type:"number",id:"humidity",max:"5",min:"0",value:this.state.humidity,onChange:t=>this.setState({humidity:parseInt(t.target.value)},(()=>this.update()))}),(0,a.kt)("br",null),(0,a.kt)("label",{htmlFor:"acidity"},"Acidity "),(0,a.kt)("input",{type:"number",id:"acidity",max:"6",min:"0",value:this.state.acidity,onChange:t=>this.setState({acidity:parseInt(t.target.value)},(()=>this.update()))}),(0,a.kt)("br",null),(0,a.kt)("label",{htmlFor:"nutrients"},"Nutrients "),(0,a.kt)("input",{type:"number",id:"nutrients",max:"5",min:"0",value:this.state.nutrients,onChange:t=>this.setState({nutrients:parseInt(t.target.value)},(()=>this.update()))}),(0,a.kt)("br",null)),(0,a.kt)("div",null,(0,a.kt)("p",null,"The other soil:"),(0,a.kt)("label",{htmlFor:"other_humidity"},"Humidity "),(0,a.kt)("input",{type:"number",id:"other_humidity",max:"5",min:"0",value:this.state.other_humidity,onChange:t=>this.setState({other_humidity:parseInt(t.target.value)},(()=>this.update()))}),(0,a.kt)("br",null),(0,a.kt)("label",{htmlFor:"other_acidity"},"Acidity "),(0,a.kt)("input",{type:"number",id:"other_acidity",max:"6",min:"0",value:this.state.other_acidity,onChange:t=>this.setState({other_acidity:parseInt(t.target.value)},(()=>this.update()))}),(0,a.kt)("br",null),(0,a.kt)("label",{htmlFor:"other_nutrients"},"Nutrients "),(0,a.kt)("input",{type:"number",id:"other_nutrients",max:"5",min:"0",value:this.state.other_nutrients,onChange:t=>this.setState({other_nutrients:parseInt(t.target.value)},(()=>this.update()))}),(0,a.kt)("br",null))),(0,a.kt)("br",null),(0,a.kt)("div",{style:{display:"flex",justifyContent:"space-evenly"}},(0,a.kt)("div",null,(0,a.kt)("label",{htmlFor:"strength"},"Strength "),(0,a.kt)("input",{type:"number",id:"strengthumidity",max:"10",min:"1",value:this.state.strength,onChange:t=>this.setState({strength:parseInt(t.target.value)},(()=>this.update()))}),(0,a.kt)("br",null))),(0,a.kt)("br",null),(0,a.kt)("code",null,this.state.result))}}const p={toc:c,Calculator:h},d="wrapper";function m(t){let{components:e,...n}=t;return(0,a.kt)(d,(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"tolerance-calculator"},"Tolerance calculator"),(0,a.kt)("p",null,"A calculator to determine the tolerance factor for each soil requirements of the plant.\nThe tolerance factor is used to determine the soils the plant can grow on after a specific strength."),(0,a.kt)("p",null,"To use this calculator, first you need to choose:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"the soil of the plant at strength 1"),(0,a.kt)("li",{parentName:"ul"},"the strength at which it can grow on the other soil"),(0,a.kt)("li",{parentName:"ul"},"the other soil")),(0,a.kt)("p",null,"Input each value in th box below and the tolerance factor for each soil condition will be calculated."),(0,a.kt)(h,{mdxType:"Calculator"}),(0,a.kt)("p",null,"The formula used is the following: ",(0,a.kt)("inlineCode",{parentName:"p"},"tolerance = ceil(abs((soil_condition - other_soil_condition) / strength) * 100) / 100")))}m.isMDXComponent=!0}}]);