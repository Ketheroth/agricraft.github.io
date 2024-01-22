"use strict";(self.webpackChunkagridocs=self.webpackChunkagridocs||[]).push([[681],{221:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(5893),i=n(1151);const a={sidebar_label:"Plant"},o="AgriCraft Plant JSON",s={id:"customization/1.12/plant",title:"AgriCraft Plant JSON",description:"AgriCraft 2.0.0 introduces an exciting new feature: JSON Custom Plants!",source:"@site/docs/customization/1.12/plant.md",sourceDirName:"customization/1.12",slug:"/customization/1.12/plant",permalink:"/agricraft.github.io/docs/customization/1.12/plant",draft:!1,unlisted:!1,editUrl:"https://github.com/AgriCraft/agricraft.github.io/tree/main/docs/customization/1.12/plant.md",tags:[],version:"current",frontMatter:{sidebar_label:"Plant"},sidebar:"customizationSidebar",previous:{title:"AgriCraft JSON",permalink:"/agricraft.github.io/docs/customization/1.12/"},next:{title:"Mutation",permalink:"/agricraft.github.io/docs/customization/1.12/mutation"}},l={},c=[{value:"Note",id:"note",level:2},{value:"Structure",id:"structure",level:2}];function h(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"agricraft-plant-json",children:"AgriCraft Plant JSON"}),"\n",(0,r.jsxs)(t.p,{children:["AgriCraft 2.0.0 introduces an exciting new feature: ",(0,r.jsx)(t.strong,{children:"JSON Custom Plants"}),"!"]}),"\n",(0,r.jsx)(t.p,{children:"JSON Custom Plants (i.e. AgriPlants) allow for total control of your agricultural experience,\r\nand even work in multiplayer environments!"}),"\n",(0,r.jsx)(t.p,{children:"This page will serve as a guide to using this awesome new feature of AgriCraft!"}),"\n",(0,r.jsx)(t.h2,{id:"note",children:"Note"}),"\n",(0,r.jsxs)(t.p,{children:["The JSON file may be located in any folder under the ",(0,r.jsx)(t.code,{children:"config\\agricraft\\json\\default"})," directory.\r\nFurthermore, the file must end in with ",(0,r.jsx)(t.code,{children:"_plant.json"})," so that for a plant like wheat, the file name would be ",(0,r.jsx)(t.code,{children:"wheat_plant.json"}),".\r\nThis requirement is made so that the JSON file loader can differentiate between the different JSON file types."]}),"\n",(0,r.jsx)(t.h2,{id:"structure",children:"Structure"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json5",children:'{\r\n  "enabled": true, // Determines if the plant should be loaded or not.\r\n  "path": "", // An internal field used for the transmission of JSON definitions.\r\n  "id": "", // The unique string id for the plant.\r\n  "plant_name": "", // The name of the plant. This does not need to be unique.\r\n  "seed_name": "", // The name of the auto-generated seed for the plant. This will not be used if a valid seed item is defined.\r\n  "seed_items": [ // An array containing the seed items that map to this plant.\r\n    {\r\n      "item": "minecraft:wheat_seeds",\r\n      "meta": 0,\r\n      "tags": "",\r\n      "ignoreMeta": false,\r\n      "ignoreTags": [\r\n        "*"\r\n      ],\r\n      "useOreDict": false\r\n    }\r\n  ],\r\n  "description": {\r\n    "translations": {}, // An array containing locale:translation entries.\r\n    "default": "" // The default description of the plant.\r\n  },\r\n  "growth_chance": 1.0, // The chance the plant has of growing on a random tick [range: 0.0-1.0].\r\n  "bonemeal": true, // Determines if the plant accepts fertilizer to accelerate its growth.\r\n  "tier": 1, // The tier of the plant. A legacy value.\r\n  "weedable": false, // Determines if the plant acts like a weed and cannot be harvested normally.\r\n  "aggressive": false, // Determines if the plant should try to overtake neighboring crops.\r\n  "spread_chance": 0.1, // Determines the chance the plant has of attempting to move to a neighboring crop [range: 0.0-1.0].\r\n  "spawn_chance": 0.0, // Determines the chance the plant has of randomly spawning in an unoccupied crop [range: 0.0-1.0].\r\n  "products": {\r\n    "products": [ // A list containing the possible products of the plant.\r\n      {\r\n        "min": 1,\r\n        "max": 3,\r\n        "chance": 0.95,\r\n        "required": true,\r\n        "item": "minecraft:wheat",\r\n        "meta": 0,\r\n        "tags": "",\r\n        "ignoreMeta": false,\r\n        "ignoreTags": [],\r\n        "useOreDict": false\r\n      }\r\n    ]\r\n  },\r\n  "requirement": {\r\n    "min_light": 10, // The min integer light value that the plant can grow in [min: 0].\r\n    "max_light": 16, // The max integer light value that the plant can grow in [max: 16].\r\n    "soils": [], // Array containing string ids for AgriSoils that are considered valid for this plant.\r\n    "conditions": [ // Array containing all the growth requirement conditions to be met.\r\n      {\r\n        "amount": 1,  // The amount required in the given range.\r\n        "min_x": 0,   // The bounding box, relative to the crop at 0, 0, 0 in which the block(s) are to be placed.\r\n        "min_y": -2,  // In this case we specify the box {(0, -2, 0), (0, -2, 0)}, which is the single block directly\r\n        "min_z": 0,   // below the soil block. Notice that the upper bound is inclusive, so that to specify a\r\n        "max_x": 0,   // single block we use the same point twice, not the upper left and lower right points.\r\n        "max_y": -2,\r\n        "max_z": 0,\r\n        "item": "minecraft:gold_ore", // This part specifies information about the block required.\r\n        "meta": 0, // This is a *direct* extension of an AgriStack meaning that it has all the same fields as\r\n        "tags": "", // would be found on say the seed_items field.\r\n        "ignoreMeta": true,\r\n        "ignoreTags": [],\r\n        "useOreDict": true\r\n      }\r\n    ]\r\n  },\r\n  "texture": {\r\n    "render_type": "", // Can be either "cross", "hash", or "stem". This determines the method used to render the plant.\r\n    "seed_texture": "", // A string representing the seed texture. This is used for the autogenerated seed items.\r\n    "plant_textures": [] // An array of strings representing the plant textures.\r\n  }\r\n}\n'})})]})}function d(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>s,a:()=>o});var r=n(7294);const i={},a=r.createContext(i);function o(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);