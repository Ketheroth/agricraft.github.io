"use strict";(self.webpackChunkagridocs=self.webpackChunkagridocs||[]).push([[506],{5161:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>l,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var i=e(5893),o=e(1151);const a={sidebar_label:"Mutation"},r="AgriCraft Mutation JSON",s={id:"customization/1.18/mutation",title:"AgriCraft Mutation JSON",description:"Structure",source:"@site/docs/customization/1.18/mutation.md",sourceDirName:"customization/1.18",slug:"/customization/1.18/mutation",permalink:"/agricraft.github.io/docs/customization/1.18/mutation",draft:!1,unlisted:!1,editUrl:"https://github.com/AgriCraft/agricraft.github.io/tree/main/docs/customization/1.18/mutation.md",tags:[],version:"current",frontMatter:{sidebar_label:"Mutation"},sidebar:"customizationSidebar",previous:{title:"Weed",permalink:"/agricraft.github.io/docs/customization/1.18/weed"},next:{title:"Soil",permalink:"/agricraft.github.io/docs/customization/1.18/soil"}},c={},u=[{value:"Structure",id:"structure",level:2}];function d(t){const n={code:"code",h1:"h1",h2:"h2",pre:"pre",...(0,o.a)(),...t.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"agricraft-mutation-json",children:"AgriCraft Mutation JSON"}),"\n",(0,i.jsx)(n.h2,{id:"structure",children:"Structure"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json5",children:'{\r\n  "path": "vanilla/mutations/cactus_mutation.json", // An internal field used for the transmission of JSON definitions.\r\n  "version": "1.16.4", // The version of the AgriCraft Mutation JSON\r\n  "json_documentation": "https://agridocs.readthedocs.io/en/master/agri_mutation/", // Documentation of the AgriCraft Mutation JSON\r\n  "enabled": true, // Determines if the mutation should be loaded or not.\r\n  "mods": [ // An array of mod ids. The mutation will be loaded only if all mods using those ids are present.\r\n    "agricraft",\r\n    "minecraft"\r\n  ],\r\n  "chance": 0.5, // The chance of the mutation occurring on any given random tick, a p-value in the range 0.0 to 1.0.\r\n  "child": "vanilla:cactus_plant",      // The unique id of the child AgriPlant.\r\n  "parent1": "vanilla:sugarcane_plant", // The unique id of the first  parent AgriPlant.\r\n  "parent2": "vanilla:potato_plant"     // The unique id of the second parent AgriPlant.\r\n}\n'})})]})}function l(t={}){const{wrapper:n}={...(0,o.a)(),...t.components};return n?(0,i.jsx)(n,{...t,children:(0,i.jsx)(d,{...t})}):d(t)}},1151:(t,n,e)=>{e.d(n,{Z:()=>s,a:()=>r});var i=e(7294);const o={},a=i.createContext(o);function r(t){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof t?t(n):{...n,...t}}),[n,t])}function s(t){let n;return n=t.disableParentContext?"function"==typeof t.components?t.components(o):t.components||o:r(t.components),i.createElement(a.Provider,{value:n},t.children)}}}]);