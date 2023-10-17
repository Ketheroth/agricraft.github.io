# Plant

This page will guide you to create a custom plant for AgriCraft.  

Before starting to write anything, we have to choose a resource location for the plant.
We are creating the tomato plant, so let's use `tuto:tomato` as the plant's resource location.

This guide is split in two part:
- the datapack part, to define the behaviour of the plant
- the resourcepack part, to define how the plant is rendered

## Datapack

The data part consists of only one json file defining the plant.
Below is the location of the file.
```
data
 |- agricraft
     |- plant  # agricraft/plant is the folder used by agricraft to load plants in the game
         |- tuto  # the namespace of the resource location of your plant ("tuto" here)
             |- tomato.json  # The name of the file must match the id of your plant ("tomato" here)
```

The json file have a specific format, described as follows:
```json5
{
  "enabled": true,
  // if the plant will be registered in the game
  "mods": [],
  "seeds": [
    // seeds to use for this plant
    {
      "item": "minecraft:potato",
      // tag or element id of items to use
      "override_planting": true,
      // override default item behaviour to place an agricraft plant instead
      "nbt": "",
      // [optional] (default="") nbt to match the item
      "grass_drop_chance": 0.0,
      "seed_drop_chance": 1.0,
      "seed_drop_bonus": 0.0
    }
  ],
  "stages": [
    // growth stages for the plant. each number correspond to the height of the plant at that stage.
    2,
    4,
    6,
    8,
    // at the fourth stage, the plant is 8 pixel high
    10,
    12,
    14,
    16
  ],
  "harvest_stage": 4,
  // After harvest, the growth stage is set to be this one.
  "growth_chance": 0.75,
  // The chance the plant has of growing on a random tick
  "growth_bonus": 0.025,
  // The chance the plant has of growing bonus on a random tick
  "tier": 1,
  // The tier of the plant. A legacy value.
  "cloneable": true,
  "spread_chance": 0.1,
  "products": [
    // products produced on harvest
    {
      "item": "minecraft:wheat",
      // tog or element id
      "min": 1,
      "max": 3,
      "chance": 0.95,
      "required": true,
      "nbt": "",
      // [optional] (default="")
    }
  ],
  "clip_products": [
    // products produced on clipping. objects are the same as harvest products
  ],
  "requirement": {
    "soil_humidity": {
      "condition": "wet",
      "type": "equal",
      "tolerance_factor": 0.15
    },
    "soil_acidity": {
      "condition": "slightly_acidic",
      "type": "equal",
      "tolerance_factor": 0.2
    },
    "soil_nutrients": {
      "condition": "high",
      "type": "equal_or_higher",
      "tolerance_factor": 0.1
    },
    "min_light": 10,
    "max_light": 16,
    "light_tolerance_factor": 0.5,
    "biomes": {
      // [optional] (default=this)
      "values": [],
      // must be resource locations (like minecraft:plains)
      "blacklist": true,
      "ignore_from_strength": 11
      // [optional] (default=11) is ignored if strength of the plant is >= of this value
    },
    "dimensions": {
      // [optional] (default=this)
      "values": [],
      // must be resource locations (like minecraft:overworld)
      "blacklist": true,
      "ignore_from_strength": 11
      // [optional] (default=11) is ignored if strength of the plant is >= of this value
    },
    "seasons": [
      // [optional] (default=this)
      "spring",
      "summer",
      "autumn",
      "winter"
    ],
    "block_conditions": [
      // [optional] (default=[]) block condition
      {
        "block": "#forge:ores/gold",
        // tag or element id, block must be the element or in the tag
        "nbt": "",
        // [optional] (default="") all tags in this one must be present and of same value in the block entity. (if a tag isn't present in this one it will be ignored in the block entity)
        "states": [],
        // [optional] (default=[]) all states must be present in the blocks for the condition to be valid
        "strength": 11,
        // strength at which this block condition become ignored
        "amount": 1,
        // the amount required in the given range
        "min_x": 0,
        // The bounding box, relative to the crop at 0, 0, 0 in which the block(s) are to be placed.
        "min_y": -2,
        // In this case we specify the box {(0, -2, 0), (0, -2, 0)}, which is the single block directly
        "min_z": 0,
        // below the soil block. Notice that the upper bound is inclusive, so that to specify a
        "max_x": 0,
        // single block we use the same point twice, not the upper left and lower right points.
        "max_y": -2,
        "max_z": 0,
      }
    ],
    "fluid_condition": {
      // [optional] (default=this)  warning, if the fluid condition is unmatched it is lethal for the crop
      "fluid": "minecraft:empty",
      // tag or element id
      "states": [],
      // [optional] (default=[])
    }
  },
  "callbacks": [],
  // [optional] (default=[])
  "particle_effects": []
  // [optional] (default=[])
}
```

## Resourcepack


AgriCraft 2.0.0 introduces an exciting new feature: **JSON Custom Plants**!

JSON Custom Plants (i.e. AgriPlants) allow for total control of your agricultural experience, and even work in
multiplayer environments!

This page will serve as a guide to using this awesome new feature of AgriCraft!

## Note

The JSON file may be located in any folder under the `config\agricraft\json\default` directory. Furthermore, the file
must end in with `_plant.json` so that for a plant like wheat, the file name would be `wheat_plant.json`. This
requirement is made so that the JSON file loader can differentiate between the different JSON file types.

## Structure

/!\ This is the structure for Agricraft 3.0.0 /!\

```json5
{
  "path": "vanilla/plants/wheat_plant.json", // An internal field used for the transmission of JSON definitions.
  "version": "1.16.4", // The version of the AgriCraft Plant JSON.
  "json_documentation": "https://agridocs.readthedocs.io/en/master/agri_plant/", // Documentation of the AgriCraft Plant JSON.
  "enabled": true, // Determines if the plant should be loaded or not.
  "mods": [ // An array of mod ids. The plant will be loaded only if all mods using those ids are present.
    "agricraft",
    "minecraft"
  ],
  "id": "vanilla:wheat_plant", // The unique string id for the plant.
  "plant_lang_key": "block.minecraft.wheat",     // The name of the plant. Can be a lang key.
  "seed_lang_key": "item.minecraft.wheat_seeds", // The name of the seed. Can be a lang key.
  "desc_lang_key": "agricraft.plant.wheat.desc", // The description of the plant. Can be a lang key.
  "seed_items": [ // An array containing the seed items that map to this plant.
    {
      "overridePlanting": true, // Determines if the agricraft should override the object right click action. (if true, using the object will place the agricraft crop instead of the original action)
      "type": "item",
      "object": "minecraft:wheat_seeds", // The resource location of the object ("<mod_id>:<object_id>").
      "useTag": false, // Determines if the object field should be considered as a tag.
      "data": "",
      "ignoredData": [
        "*"
      ]
    }
  ],
  "stages": [ // An array containing the height of the plant for each growth stage.
    2,
    4,
    6,
    8,
    10,
    12,
    14,
    16
  ],
  "harvestStage": 4, // After harvest, the growth stage is set to be this one.
  "growth_chance": 0.65, // The chance the plant has of growing on a random tick [range: 0.0-1.0].
  "growth_bonus": 0.025, // The chance the plant has of growing bonus on a random tick [range: 0.0-1.0].
  "tier": 2, // The tier of the plant. A legacy value.
  "cloneable": true,
  "spread_chance": 0.1, // Determines the chance the plant has of attempting to move to a neighboring crop [range: 0.0-1.0].
  "grass_drop_chance": 0.0, // Determines the chance the seed of this plant drops when breaking a grass block [range: 0.0-1.0].
  "seed_drop_chance": 1.0, // Determines the chance the seed of the plant drop when breaking the crop [range: 0.0-1.0].
  "seed_drop_bonus": 0.0,
  "products": {
    "products": [ // A list containing the possible products of the plant.
      {
        "min": 1,
        "max": 1,
        "chance": 0.75,
        "required": true,
        "type": "item",
        "object": "minecraft:wheat",
        "useTag": false,
        "data": "",
        "ignoredData": []
      }
    ]
  },
  "clip_products": {
    "products": [ // A list containing the possible clipping products of the plant.
      {
        "min": 0,
        "max": 1,
        "chance": 0.5,
        "required": true,
        "type": "item",
        "object": "minecraft:wheat_seeds",
        "useTag": false,
        "data": "",
        "ignoredData": []
      }
    ]
  },
  "requirement": { // Determines the growth requirements of the plant.
    "soil_humidity": {
      "condition": "damp",     // Determines the required humidity condition of the plant. (see AgriSoils for more information)
      "type": "equal",         // Determines when the condition is met.
      "tolerance_factor": 0.15 // Determines the tolerance factor of the humidity condition [range 0.0-1.0].
    },
    "soil_acidity": {
      "condition": "slightly_acidic",
      "type": "equal",
      "tolerance_factor": 0.2
    },
    "soil_nutrients": {
      "condition": "very_high",
      "type": "equal_or_higher",
      "tolerance_factor": 0.1
    },
    "min_light": 10, // The min integer light value that the plant can grow in [min: 0].
    "max_light": 16, // The max integer light value that the plant can grow in [max: 16].
    "light_tolerance_factor": 0.5, // The tolerance of the light value that the plant can grow in [range 0.0-1.0].
    "seasons": [ // An array containing the seasons the plant can grow in. It is used only if a season mod is present (like Serene Season).
      "spring",
      "summer",
      "autumn",
      "winter"
    ],
    "conditions": [ // An array containing all the growth conditions to be met.
      {
        "strength": 11,
        "amount": 1, // the amount required in the given range
        "min_x": 0,  // The bounding box, relative to the crop at 0, 0, 0 in which the block(s) are to be placed.
        "min_y": -2, // In this case we specify the box {(0, -2, 0), (0, -2, 0)}, which is the single block directly
        "min_z": 0,  // below the soil block. Notice that the upper bound is inclusive, so that to specify a
        "max_x": 0,  // single block we use the same point twice, not the upper left and lower right points.
        "max_y": -2,
        "max_z": 0,
        "type": "block",
        "object": "forge:ores/gold", // This part specifies information about the block required.
        "useTag": true, // The block required should match the tag in the `object` value
        "data": "",
        "ignoredData": []
      }
    ],
    "fluid": { // The required fluid the plant needs to be in to grow.
      "type": "fluid",
      "object": "minecraft:empty",
      "useTag": false,
      "data": "",
      "ignoredData": []
    }
  },
  "callbacks": [ // An array of callbacks the crop will use. Those are all the default callbacks.
    "agricraft:brightness", // the crop emit light
    "agricraft:burn",       // the crop burn colliding entities
    "agricraft:bushy",      // the crop slow down colliding entities
    "agricraft:experience", // the corp drop experience on harvest
    "agricraft:poisoning",  // the crop apply the poison effect to colliding entities
    "agricraft:redstone",   // the crop emit redstone signal
    "agricraft:thorns",     // the crop hurt colliding entities (like a cactus)
    "agricraft:withering"   // the crop apply the wither effect to colliding entities
  ],
  "texture": {
    "render_type": "hash", // Can be either "cross", "hash", "plus", or "gourd". This determines the method used to render the plant. (More info below)
    "plant_models": [ // An array of strings representing the plant models.
      // The elements are ordered, that means the first element is for the first growth stage, the second element is for the second growth stage, and so on.
      // If an element is empty, agricraft bake the model with the stage texture.
      // This array override the texture array for the in-world crop.
    ],
    "plant_textures": [ // An array of strings representing the plant textures.
      // The elements are ordered, that means the first element is for the first growth stage, the second element is for the second growth stage, and so on.
      [
        "agricraft:plant/wither_rose1" // Amount of textures needed : floor(<stage_height> / 16) + 1
      ],
      [
        "agricraft:plant/wither_rose1"
      ],
      [
        "agricraft:plant/wither_rose2"
      ],
      [
        "agricraft:plant/wither_rose2"
      ],
      [
        "agricraft:plant/wither_rose2"
      ],
      [
        "agricraft:plant/wither_rose3"
      ],
      [
        "agricraft:plant/wither_rose3"
      ],
      [
        "agricraft:plant/wither_rose4"
      ]
    ]
  },
  "seed_texture": "agricraft:seed/wither_rose", // A string representing the seed texture. This is used for the autogenerated seed items.
  "seed_model": "agricraft:seed/wither_rose", // A string representing the seed model. This is used for the autogenerated seed items.
  "particle_effects": [ // An array describing the particles the plant produce.
    {
      "probability": 0.5, // The probability the particle will spawn [range 0.0-1.0].
      "stages": [ // An array containing the indexes of the stages the plant can produce particles.
        7
      ],
      "particle": "minecraft:smoke", // The id of the particle
      "delta_x": 0.3, // How far from the center of the block the particle can spawn (X axis).
      "delta_y": 0.4, // How high from the center of the block the particle can spawn (Y axis).
      "delta_z": 0.3  // How far from the center of the block the particle can spawn (Z axis).
    }
  ]
}
```

## Render types

- **Hashtag** (#) : 4 faces parallel with the block faces, similar to Vanilla wheat.
- **Cross**   (x) : 2 faces along the diagonals, similar to Vanilla flowers.
- **Plus**    (+) : Similar to cross, but instead 4 crosses at each crop stick.
- **Gourd**   (@) : i.e. for pumpkins and melons: renders a hash pattern for the initial stages, with a small gourd for
  the final stage.
- **Rhombus** (◇) : 4 faces spanning between the centers of the block faces, only used for weeds.

## About Mystical Agriculture

Mystical Agriculture and its addon have non-usual plants. Their plants/seeds are dynamically colored.
We thus introduced a new render type **mysticalagriculture** which render the plant like the **plus** render type.
This render type expects the last texture in the textures array to contain two textures: one for the stem, and another
for the flowers: [ "mysticalagriculture:block/mystical_resource_crop_7", "mysticalagriculture:block/flower_ingot" ]