"use strict";(self.webpackChunkagridocs=self.webpackChunkagridocs||[]).push([[807],{6090:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=r(5893),a=r(1151);const i={sidebar_label:"Plant"},o="AgriCraft Plant JSON",s={id:"customization/1.18/plant",title:"AgriCraft Plant JSON",description:"AgriCraft 2.0.0 introduces an exciting new feature: JSON Custom Plants!",source:"@site/docs/customization/1.18/plant.md",sourceDirName:"customization/1.18",slug:"/customization/1.18/plant",permalink:"/agricraft.github.io/docs/customization/1.18/plant",draft:!1,unlisted:!1,editUrl:"https://github.com/AgriCraft/agricraft.github.io/tree/main/docs/customization/1.18/plant.md",tags:[],version:"current",frontMatter:{sidebar_label:"Plant"},sidebar:"customizationSidebar",previous:{title:"AgriCraft JSON",permalink:"/agricraft.github.io/docs/customization/1.18/"},next:{title:"Weed",permalink:"/agricraft.github.io/docs/customization/1.18/weed"}},l={},c=[{value:"Note",id:"note",level:2},{value:"Structure",id:"structure",level:2},{value:"Render types",id:"render-types",level:2},{value:"About Mystical Agriculture",id:"about-mystical-agriculture",level:2}];function h(e){const t={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"agricraft-plant-json",children:"AgriCraft Plant JSON"}),"\n",(0,n.jsxs)(t.p,{children:["AgriCraft 2.0.0 introduces an exciting new feature: ",(0,n.jsx)(t.strong,{children:"JSON Custom Plants"}),"!"]}),"\n",(0,n.jsx)(t.p,{children:"JSON Custom Plants (i.e. AgriPlants) allow for total control of your agricultural experience,\r\nand even work in multiplayer environments!"}),"\n",(0,n.jsx)(t.p,{children:"This page will serve as a guide to using this awesome new feature of AgriCraft!"}),"\n",(0,n.jsx)(t.h2,{id:"note",children:"Note"}),"\n",(0,n.jsxs)(t.p,{children:["The JSON file may be located in any folder under the ",(0,n.jsx)(t.code,{children:"config\\agricraft\\json\\default"})," directory.\r\nFurthermore, the file must end in with ",(0,n.jsx)(t.code,{children:"_plant.json"})," so that for a plant like wheat, the file name would be ",(0,n.jsx)(t.code,{children:"wheat_plant.json"}),".\r\nThis requirement is made so that the JSON file loader can differentiate between the different JSON file types."]}),"\n",(0,n.jsx)(t.h2,{id:"structure",children:"Structure"}),"\n",(0,n.jsx)(t.p,{children:"This is the structure for Agricraft 3.0.0"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json5",children:'{\r\n  "path": "vanilla/plants/wheat_plant.json", // An internal field used for the transmission of JSON definitions.\r\n  "version": "1.16.4", // The version of the AgriCraft Plant JSON.\r\n  "json_documentation": "https://agridocs.readthedocs.io/en/master/agri_plant/", // Documentation of the AgriCraft Plant JSON.\r\n  "enabled": true, // Determines if the plant should be loaded or not.\r\n  "mods": [ // An array of mod ids. The plant will be loaded only if all mods using those ids are present.\r\n    "agricraft",\r\n    "minecraft"\r\n  ],\r\n  "id": "vanilla:wheat_plant", // The unique string id for the plant.\r\n  "plant_lang_key": "block.minecraft.wheat",     // The name of the plant. Can be a lang key.\r\n  "seed_lang_key": "item.minecraft.wheat_seeds", // The name of the seed. Can be a lang key.\r\n  "desc_lang_key": "agricraft.plant.wheat.desc", // The description of the plant. Can be a lang key.\r\n  "seed_items": [ // An array containing the seed items that map to this plant.\r\n    {\r\n      "overridePlanting": true, // Determines if the agricraft should override the object right click action. (if true, using the object will place the agricraft crop instead of the original action)\r\n      "type": "item",\r\n      "object": "minecraft:wheat_seeds", // The resource location of the object ("<mod_id>:<object_id>").\r\n      "useTag": false, // Determines if the object field should be considered as a tag.\r\n      "data": "",\r\n      "ignoredData": [\r\n        "*"\r\n      ]\r\n    }\r\n  ],\r\n  "stages": [ // An array containing the height of the plant for each growth stage.\r\n    2,\r\n    4,\r\n    6,\r\n    8,\r\n    10,\r\n    12,\r\n    14,\r\n    16\r\n  ],\r\n  "harvestStage": 4, // After harvest, the growth stage is set to be this one.\r\n  "growth_chance": 0.65, // The chance the plant has of growing on a random tick [range: 0.0-1.0].\r\n  "growth_bonus": 0.025, // The chance the plant has of growing bonus on a random tick [range: 0.0-1.0].\r\n  "tier": 2, // The tier of the plant. A legacy value.\r\n  "cloneable": true,\r\n  "spread_chance": 0.1, // Determines the chance the plant has of attempting to move to a neighboring crop [range: 0.0-1.0].\r\n  "grass_drop_chance": 0.0, // Determines the chance the seed of this plant drops when breaking a grass block [range: 0.0-1.0].\r\n  "seed_drop_chance": 1.0, // Determines the chance the seed of the plant drop when breaking the crop [range: 0.0-1.0].\r\n  "seed_drop_bonus": 0.0,\r\n  "products": {\r\n    "products": [ // A list containing the possible products of the plant.\r\n      {\r\n        "min": 1,\r\n        "max": 1,\r\n        "chance": 0.75,\r\n        "required": true,\r\n        "type": "item",\r\n        "object": "minecraft:wheat",\r\n        "useTag": false,\r\n        "data": "",\r\n        "ignoredData": []\r\n      }\r\n    ]\r\n  },\r\n  "clip_products": {\r\n    "products": [ // A list containing the possible clipping products of the plant.\r\n      {\r\n        "min": 0,\r\n        "max": 1,\r\n        "chance": 0.5,\r\n        "required": true,\r\n        "type": "item",\r\n        "object": "minecraft:wheat_seeds",\r\n        "useTag": false,\r\n        "data": "",\r\n        "ignoredData": []\r\n      }\r\n    ]\r\n  },\r\n  "requirement": { // Determines the growth requirements of the plant.\r\n    "soil_humidity": {\r\n      "condition": "damp",     // Determines the required humidity condition of the plant. (see AgriSoils for more information)\r\n      "type": "equal",         // Determines when the condition is met.\r\n      "tolerance_factor": 0.15 // Determines the tolerance factor of the humidity condition [range 0.0-1.0].\r\n    },\r\n    "soil_acidity": {\r\n      "condition": "slightly_acidic",\r\n      "type": "equal",\r\n      "tolerance_factor": 0.2\r\n    },\r\n    "soil_nutrients": {\r\n      "condition": "very_high",\r\n      "type": "equal_or_higher",\r\n      "tolerance_factor": 0.1\r\n    },\r\n    "min_light": 10, // The min integer light value that the plant can grow in [min: 0].\r\n    "max_light": 16, // The max integer light value that the plant can grow in [max: 16].\r\n    "light_tolerance_factor": 0.5, // The tolerance of the light value that the plant can grow in [range 0.0-1.0].\r\n    "seasons": [ // An array containing the seasons the plant can grow in. It is used only if a season mod is present (like Serene Season).\r\n      "spring",\r\n      "summer",\r\n      "autumn",\r\n      "winter"\r\n    ],\r\n    "conditions": [ // An array containing all the growth conditions to be met.\r\n      {\r\n        "strength": 11,\r\n        "amount": 1, // the amount required in the given range\r\n        "min_x": 0,  // The bounding box, relative to the crop at 0, 0, 0 in which the block(s) are to be placed.\r\n        "min_y": -2, // In this case we specify the box {(0, -2, 0), (0, -2, 0)}, which is the single block directly\r\n        "min_z": 0,  // below the soil block. Notice that the upper bound is inclusive, so that to specify a\r\n        "max_x": 0,  // single block we use the same point twice, not the upper left and lower right points.\r\n        "max_y": -2,\r\n        "max_z": 0,\r\n        "type": "block",\r\n        "object": "forge:ores/gold", // This part specifies information about the block required.\r\n        "useTag": true, // The block required should match the tag in the `object` value\r\n        "data": "",\r\n        "ignoredData": []\r\n      }\r\n    ],\r\n    "fluid": { // The required fluid the plant needs to be in to grow.\r\n      "type": "fluid",\r\n      "object": "minecraft:empty",\r\n      "useTag": false,\r\n      "data": "",\r\n      "ignoredData": []\r\n    }\r\n  },\r\n  "callbacks": [ // An array of callbacks the crop will use. Those are all the default callbacks.\r\n    "agricraft:brightness", // the crop emit light\r\n    "agricraft:burn",       // the crop burn colliding entities\r\n    "agricraft:bushy",      // the crop slow down colliding entities\r\n    "agricraft:experience", // the corp drop experience on harvest\r\n    "agricraft:poisoning",  // the crop apply the poison effect to colliding entities\r\n    "agricraft:redstone",   // the crop emit redstone signal\r\n    "agricraft:thorns",     // the crop hurt colliding entities (like a cactus)\r\n    "agricraft:withering"   // the crop apply the wither effect to colliding entities\r\n  ],\r\n  "texture": {\r\n    "render_type": "hash", // Can be either "cross", "hash", "plus", or "gourd". This determines the method used to render the plant. (More info below)\r\n    "plant_models": [ // An array of strings representing the plant models.\r\n      // The elements are ordered, that means the first element is for the first growth stage, the second element is for the second growth stage, and so on.\r\n      // If an element is empty, agricraft bake the model with the stage texture.\r\n      // This array override the texture array for the in-world crop.\r\n    ],\r\n    "plant_textures": [ // An array of strings representing the plant textures.\r\n      // The elements are ordered, that means the first element is for the first growth stage, the second element is for the second growth stage, and so on.\r\n      [\r\n        "agricraft:plant/wither_rose1" // Amount of textures needed : floor(<stage_height> / 16) + 1\r\n      ],\r\n      [\r\n        "agricraft:plant/wither_rose1"\r\n      ],\r\n      [\r\n        "agricraft:plant/wither_rose2"\r\n      ],\r\n      [\r\n        "agricraft:plant/wither_rose2"\r\n      ],\r\n      [\r\n        "agricraft:plant/wither_rose2"\r\n      ],\r\n      [\r\n        "agricraft:plant/wither_rose3"\r\n      ],\r\n      [\r\n        "agricraft:plant/wither_rose3"\r\n      ],\r\n      [\r\n        "agricraft:plant/wither_rose4"\r\n      ]\r\n    ]\r\n  },\r\n  "seed_texture": "agricraft:seed/wither_rose", // A string representing the seed texture. This is used for the autogenerated seed items.\r\n  "seed_model": "agricraft:seed/wither_rose", // A string representing the seed model. This is used for the autogenerated seed items.\r\n  "particle_effects": [ // An array describing the particles the plant produce.\r\n    {\r\n      "probability": 0.5, // The probability the particle will spawn [range 0.0-1.0].\r\n      "stages": [ // An array containing the indexes of the stages the plant can produce particles.\r\n        7\r\n      ],\r\n      "particle": "minecraft:smoke", // The id of the particle\r\n      "delta_x": 0.3, // How far from the center of the block the particle can spawn (X axis).\r\n      "delta_y": 0.4, // How high from the center of the block the particle can spawn (Y axis).\r\n      "delta_z": 0.3  // How far from the center of the block the particle can spawn (Z axis).\r\n    }\r\n  ]\r\n}\n'})}),"\n",(0,n.jsx)(t.h2,{id:"render-types",children:"Render types"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Hashtag"})," (#) : 4 faces parallel with the block faces, similar to Vanilla wheat."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Cross"}),"   (x) : 2 faces along the diagonals, similar to Vanilla flowers."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Plus"}),"    (+) : Similar to cross, but instead 4 crosses at each crop stick."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Gourd"}),"   (@) : i.e. for pumpkins and melons: renders a hash pattern for the initial stages, with a small gourd for the final stage."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Rhombus"})," (\u25c7) : 4 faces spanning between the centers of the block faces, only used for weeds."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"about-mystical-agriculture",children:"About Mystical Agriculture"}),"\n",(0,n.jsxs)(t.p,{children:["Mystical Agriculture and its addon have non-usual plants. Their plants/seeds are dynamically colored.\r\nWe thus introduced a new render type ",(0,n.jsx)(t.strong,{children:"mysticalagriculture"})," which render the plant like the ",(0,n.jsx)(t.strong,{children:"plus"})," render type.\r\nThis render type expects the last texture in the textures array to contain two textures: one for the stem, and another for the flowers:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json",children:'[\r\n\t"mysticalagriculture:block/mystical_resource_crop_7",\r\n\t"mysticalagriculture:block/flower_ingot"\r\n]\n'})})]})}function d(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},1151:(e,t,r)=>{r.d(t,{Z:()=>s,a:()=>o});var n=r(7294);const a={},i=n.createContext(a);function o(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);