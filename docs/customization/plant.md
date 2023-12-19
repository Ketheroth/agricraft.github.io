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
 |- tuto  # the namespace of the resource location of your plant ("tuto" here)
     |- agricraft
         |- plant  # agricraft/plant is the folder used by agricraft to load plants in the game
             |- tomato.json  # The name of the file must match the id of your plant ("tomato" here)
```

[//]: # (todo: primer for agricraft 3.1.0 json to 3.2.0 json)

The json file have a specific format, described as follows:
```json5
{
  // if the plant will be registered in the game
  "enabled": true,
  // mods needed for the plant to be loaded
  "mods": [],
  // Items to use as seed for this plant.
  // Note that AgriCraft will always generate a seed for this plant
  // (regardless if there are elements in this seed list)
  "seeds": [
    {
      // tag or element id of items to use
      "item": "minecraft:potato",
      // override default item behaviour to place an agricraft plant instead
      "override_planting": true,
      // If this nbt is included in the item's nbt, then the item is considered as a seed for this plant
      // [optional] (default = "", no nbt) 
      "nbt": "",
      // chance for this plant's seed to drop when grass is broken
      "grass_drop_chance": 0.0,
      // chance for this plant's seed to drop when the crop is broken
      "seed_drop_chance": 1.0,
      // chance for a second seed to drop when the crop is broken
      "seed_drop_bonus": 0.0
    }
  ],
  // growth stages for the plant. each number correspond to the height of the plant at that stage.
  // add/remove a number to add/remove a growth stage
  "stages": [
    2,
    4,
    6,
    8,
    10,
    12,
    14,
    16
  ],
  // After harvest, the growth stage is set to be this one.
  "harvest_stage": 4,
  // The chance the plant has of growing on a random tick
  "growth_chance": 0.75,
  // The chance the plant has of growing bonus on a random tick
  "growth_bonus": 0.025,
  // Determine if the plant can be cloned
  "cloneable": true,
  // The spread chance of the plant on clone
  "spread_chance": 0.1,
  // The list of item produced on harvest. All products in the list is produced (according to the chance of course)
  "products": [
    {
      // tag or element id
      "item": "minecraft:wheat",
      // minimum amount
      "min": 1,
      // maximum amount
      "max": 3,
      // chance for this product to be produced
      "chance": 0.95,
      // if the item is required to be present in Minecraft for the product to exist
      "required": true,
      // nbt to add to the itemstack
      // [optional] (default = "", no nbt)
      "nbt": "",
    }
  ],
  // The list of item produced on clipping. objects are the same as harvest products
  "clip_products": [
  ],
  // Growth requirement of the plant (the plant will grow only if every requirement are met)
  "requirement": {
    // humidity of the soil.
    // see Soil customization for more information on each soil property
    "soil_humidity": {
      // The required humidity condition of the plant
      "condition": "wet",
      // Determine when the condition is met
      "type": "equal",
      // The tolerance factor of the condition
      "tolerance_factor": 0.15
    },
    // acidity of the soil
    "soil_acidity": {
      "condition": "slightly_acidic",
      "type": "equal",
      "tolerance_factor": 0.2
    },
    // nutrients of the soil
    "soil_nutrients": {
      "condition": "high",
      "type": "equal_or_higher",
      "tolerance_factor": 0.1
    },
    // minimum light present on the plant
    "min_light": 10,
    // maximum light present on the plant
    "max_light": 16,
    // tolerance factor of light values outside the min-max boundaries
    // todo: describe how the light requirement is computed
    "light_tolerance_factor": 0.5,
    // The list of biomes the plant must be in to grow
    // [optional] (default = empty blacklist)
    "biomes": {
      // list of biome resource locations (like "minecraft:plains")
      "values": [],
      // if the above list is used as a blacklist (plant won't grow if in the biomes)
      // or as a whitelist (plant will grow only in the biomes)
      "blacklist": true,
      // biome requirement is ignore if the strength of the plant is greater or equal to this value
      // [optional] (default = 11, effectively making biome requirement never ignored because the max strength of a plant is 10 by default)
      "ignore_from_strength": 11
    },
    // Same as the biome requirement above, but for dimensions
    // [optional] (default = empty blacklist)
    "dimensions": {
      "values": [],
      "blacklist": true,
      "ignore_from_strength": 11
    },
    // The list of seasons the plant can grow.
    // No seasons logic are provided by AgriCraft, you'll add to bring your own seasons mod.
    // [optional] (default = as below, the plant can grow in all seasons)
    "seasons": [
      "spring",
      "summer",
      "autumn",
      "winter"
    ],
    // The list of blocks that must be present near the plant so it can grow
    // [optional] (default = empty list)
    "block_conditions": [
      {
        // tag or element id of the required block
        "block": "#forge:ores/gold",
        // nbt that must be included in the block (or block entity) nbt
        // [optional] (default = "", no nbt) 
        "nbt": "",
        // list of states that must be present in the block
        // [optional] (default = [], all states matches) 
        "states": [],
        // strength at which this block condition become ignored
        "strength": 11,
        // the amount required in the given range
        "amount": 1,
        // The bounding box, relative to the crop at 0, 0, 0 in which the block(s) are to be placed.
        // In this case we specify the box {(0, -2, 0), (0, -2, 0)}, which is the single block directly
        // below the soil block. Notice that the upper bound is inclusive, so that to specify a
        // single block we use the same point twice, not the upper left and lower right points.
        "min_x": 0,
        "min_y": -2,
        "min_z": 0,
        "max_x": 0,
        "max_y": -2,
        "max_z": 0,
      }
    ],
    // The required fluid the plant needs to be in to grow
    // Warning, if the fluid condition is not met it is lethal for the crop
    // [optional] (default = no fluid)  
    "fluid_condition": {
      // tag or element id of the fluid
      "fluid": "minecraft:empty",
      // list of states that must be present in the fluid
      // [optional] (default = [], all states matches)
      "states": [],
    }
  },
  // An array of callbacks the crop will use.
  // Below are all the default callbacks.
  // [optional] (default = [], no callback)
  "callbacks": [
    // the crop emit light
    "agricraft:brightness",
    // the crop burn colliding entities
    "agricraft:burn",
    // the crop slow down colliding entities
    "agricraft:bushy",
    // the corp drop experience on harvest
    "agricraft:experience",
    // the crop apply the poison effect to colliding entities
    "agricraft:poisoning",
    // the crop emit redstone signal
    "agricraft:redstone",
    // the crop hurt colliding entities (like a cactus)
    "agricraft:thorns",
    // the crop apply the wither effect to colliding entities
    "agricraft:withering"
  ],
  // An array describing the particles the plant can emit.
  // [optional] (default=[])
  "particle_effects": [
    {
      // The probability the particle will spawn [range 0.0-1.0].
      "probability": 0.5,
      // An array containing the indexes (0-indexed) of the stages the plant can produce particles.
      "stages": [
        7  // in this example, the effect is only present on the last stage
      ],
      // The id of the particle
      "particle": "minecraft:smoke",
      // How far from the center of the block the particle can spawn (X axis).
      "delta_x": 0.3,
      // How high from the center of the block the particle can spawn (Y axis).
      "delta_y": 0.4,
      // How far from the center of the block the particle can spawn (Z axis).
      "delta_z": 0.3
    }
  ]
}
```

### Soil requirements

#### Humidity conditions

| Index | Condition | Alias                |
|-------|-----------|----------------------|
| 0     | `arid`    |                      |
| 1     | `dry`     |                      |
| 2     | `damp`    | `moist`              |
| 3     | `wet`     | `standard` `default` |
| 4     | `watery`  |                      |
| 5     | `flooded` |                      |

#### Acidity conditions

| Index | Condition           | Alias                                   |
|-------|---------------------|-----------------------------------------|
| 0     | `highly_acidic`     | `highly-acidic` `highly acidic`         |
| 1     | `acidic`            |                                         |
| 2     | `slightly_acidic`   | `slightly-acidic` `slightly acidic`     |
| 3     | `neutral`           |                                         |
| 4     | `slightly_alkaline` | `slightly-alkaline` `slightly alkaline` |
| 5     | `alkaline`          |                                         |
| 6     | `highly_alkaline`   | `highly-alkaline` `highly alkaline`     |

#### Nutrients conditions

| Index | Condition   | Alias           |
|-------|-------------|-----------------|
| 0     | `none`      | `zero` `empty`  |
| 1     | `very_low`  | `scarce` `poor` |
| 2     | `low`       |                 |
| 3     | `medium`    | `average`       |
| 4     | `high`      |                 |
| 5     | `very_high` | `rich`          |

The type of a condition can be one of the following values :
- `equal`: the condition of the soil must be equal to the plant condition.
Example: if the humidity condition of the plant is wet, the soil humidity must be wet too (the plant won't grow if it isn't this exact condition)
- `equal_or_lower`: the condition of the soil must be equal or lower than the plant condition.
Example: if the humidity condition of the plant is wet, the soil humidity must be arid, dry, damp or wet.
- `equal_or_hight`: the condition of the soil must be equal or higher than the plant condition.
Example: if the humidity condition of the plant is wet, the soil humidity must be wet, watery or flooded.



## Resourcepack

The resource part consists of multiple json file defining how the plant will be rendered in the game.
This is probably the most work you'll have to do.
Below is the location of each file, according to the plant json define above.

```
assets
 |- tuto
     |- lang
         |- en_us.json
     |- models
         |- crop
             |- tomato_stage0.json
             |- tomato_stage1.json
             |- tomato_stage2.json
             |- tomato_stage3.json
             |- tomato_stage4.json
             |- tomato_stage5.json
             |- tomato_stage6.json
             |- tomato_stage7.json
         |- seed
             |- tomato.json
     |- textures
         |- seed
             |- tomato.png
```

### Crop Models

AgriCraft will try to load a model for the plant block to its resource location and its growth stage.
It will load the plant models in `<namespace>/models/crop/<id>_stage<stage>.json` where the namespace and id correspond
to the namespace and the id of the plant (`tuto` and `tomato` in our example) and stage correspond to the growth stage of the plant.
This means you have to define one model per growth stage you defined in your plant json.

AgriCraft provides multiple default models for ease of use and are described as follows:

[//]: # (TODO: @Ketheroth describe each render type with an image for each)

- `crop_hash`: 4 faces parallel with the block faces, similar to Vanilla wheat.
```json
{
  "parent": "agricraft:crop/crop_hash",
  "textures": {
    "crop": "<your_crop_texture_here>"
  }
}
```
- `crop_plus`: Similar to cross, but instead 4 crosses at each crop stick.
```json
{
  "parent": "agricraft:crop/crop_plus",
  "textures": {
    "crop": "<your_crop_texture_here>"
  }
}
```
- `tall_crop_plus`: like `crop_plus` but 2 blocks high
```json
{
  "parent": "agricraft:crop/tall_crop_plus",
  "textures": {
    "crop": "<your_crop_texture_here>",
    "crop_top": "<your_crop_top_texture_here>"
  }
}
```
- `crop_gourd`: i.e. for pumpkins and melons: renders a hash pattern with the `crop` texture, and a small gourd with the `gourd` texture.
```json
{
  "parent": "agricraft:crop/tall_crop_plus",
  "textures": {
    "crop": "<your_crop_texture_here>",
    "gourd": "<your_gourd_texture_here>"
  }
}
```

old:
- **Hashtag** (#) : 
- **Cross**   (x) : 2 faces along the diagonals, similar to Vanilla flowers.
- **Plus**    (+) : 
- **Gourd**   (@) : 
- **Rhombus** (◇) : 4 faces spanning between the centers of the block faces, only used for weeds.

### Seed models

AgriCraft will try to load the model for the default plant seed from the path `<namespace>/models/seed/<id>.json`.

AgriCraft also load textures from `textures/seed/` too, so you can put your seed textures there if you want.

### Translation

AgriCraft will localize the name of the plant, its seed and its description according to the following keys:
- `plant.agricraft.<namespace>.<id>`: the name of the plant
- `seed.agricraft.<namespace>.<id>`: the name of the seed
- `description.agricraft.<namespace>.<id>`: the description of the plant

[//]: # (TODO: @Ketheroth add back this when mystical agriculture compat)
[//]: # (### About Mystical Agriculture)
[//]: # ()
[//]: # (Mystical Agriculture and its addon have non-usual plants. Their plants/seeds are dynamically colored.)
[//]: # (We thus introduced a new render type **mysticalagriculture** which render the plant like the **plus** render type.)
[//]: # (This render type expects the last texture in the textures array to contain two textures: one for the stem, and another)
[//]: # (for the flowers: [ "mysticalagriculture:block/mystical_resource_crop_7", "mysticalagriculture:block/flower_ingot" ])