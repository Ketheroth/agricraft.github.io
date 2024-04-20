"use strict";(self.webpackChunkagridocs=self.webpackChunkagridocs||[]).push([[663],{4708:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=r(5893),i=r(1151);const a={},o="Fertilizer",s={id:"customization/fertilizer",title:"Fertilizer",description:"Fertilizers are items used to force growth tick of the plant (i.e. making the plant grow faster).",source:"@site/docs/customization/fertilizer.md",sourceDirName:"customization",slug:"/customization/fertilizer",permalink:"/agricraft.github.io/docs/customization/fertilizer",draft:!1,unlisted:!1,editUrl:"https://github.com/AgriCraft/agricraft.github.io/tree/main/docs/customization/fertilizer.md",tags:[],version:"current",frontMatter:{},sidebar:"customizationSidebar",previous:{title:"Soil",permalink:"/agricraft.github.io/docs/customization/soil"},next:{title:"Weed",permalink:"/agricraft.github.io/docs/customization/weed"}},l={},c=[{value:"Plant tags",id:"plant-tags",level:2}];function d(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"fertilizer",children:"Fertilizer"}),"\n",(0,n.jsx)(t.p,{children:"Fertilizers are items used to force growth tick of the plant (i.e. making the plant grow faster).\r\nAgriCraft ships default fertilizers (mainly the bone meal), but you can modify them or add new ones with a datapack."}),"\n",(0,n.jsxs)(t.p,{children:["To create your own fertilizer, add a new json file in the directory ",(0,n.jsx)(t.code,{children:"data/<datapack_id>/agricraft/fertilizers/<fertilizer_id>.json"}),"\r\nwhere ",(0,n.jsx)(t.code,{children:"datapack_id"})," is the id of your datapack and",(0,n.jsx)(t.code,{children:"fertilizer_id"})," is the id of this fertilizer (it can be whatever you want).\r\nIn our case it will be ",(0,n.jsx)(t.code,{children:"tuto"})," and ",(0,n.jsx)(t.code,{children:"tomato_fertilizer"}),"."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json5",children:'{\r\n  // mods needed for the fertilizer to be loaded\r\n  "mods": [],\r\n  // an array of items representing this fertilizer\r\n  "variants": [\r\n    {\r\n      // tag or element id of items to use\r\n      "item": "minecraft:bone_meal"\r\n    }\r\n  ],\r\n  // Determine if the fertilizer trigger mutation in the crop\r\n  "trigger_mutation": true,\r\n  // Determine if the fertilizer trigger weed growth in the crop\r\n  "trigger_weeds": true,\r\n  // Determine the potency of the fertilizerk, bigger values equals faster growth\r\n  "potency": 1,\r\n  // Determine if the fertilizer can reduce the growth of negatively affected plants\r\n  "reduce_growth": true,\r\n  // Determine if the fertilizer can kill negatively affected plants.\r\n  "kill_plant": true,\r\n  // The list of unaffected plants by this fertilizer. Can be a tag or element id.\r\n  "neutral_on": [\r\n    "minecraft:wheat",\r\n  ],\r\n  // The list of negatively affected plants by the fertilizer\r\n  "negative_on": [\r\n  ],\r\n  // An array of particles that are spawned in the world when the fertilizer is used on a plant.\r\n  "particles": [\r\n    {\r\n      // The amount of particles\r\n      "amount": 2,\r\n      // How far from the center of the block the particle can spawn (X axis)\r\n      "delta_x": 0.6,\r\n      // How high from the center of the block the particle can spawn (Y axis)\r\n      "delta_y": 0.4,\r\n      // How high from the center of the block the particle can spawn (Z axis)\r\n      "delta_z": 0.6,\r\n      // The id of the particle\r\n      "particle": "minecraft:happy_villager",\r\n      // Determine when the particle should spawn\r\n      "when": [\r\n        "positive",\r\n        "neutral",\r\n        "negative"\r\n      ]\r\n    },\r\n    {\r\n      "amount": 2,\r\n      "delta_x": 0.6,\r\n      "delta_y": 0.4,\r\n      "delta_z": 0.6,\r\n      "particle": "minecraft:smoke",\r\n      "when": [\r\n        "negative"\r\n      ]\r\n    }\r\n  ],\r\n}\n'})}),"\n",(0,n.jsx)(t.h2,{id:"plant-tags",children:"Plant tags"}),"\n",(0,n.jsxs)(t.p,{children:["Plant tags are like block tags or item tags, but for plants instead.\r\nThey must be placed in the directory ",(0,n.jsx)(t.code,{children:"data/<datapack_id>/tags/agricraft/plants/<tag_id>.json"}),"."]})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},1151:(e,t,r)=>{r.d(t,{Z:()=>s,a:()=>o});var n=r(7294);const i={},a=n.createContext(i);function o(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);