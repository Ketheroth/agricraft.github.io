# Weed

Weeds are configured almost like the plants.

## Datapack

As with plants, the datapack part consists of one json defining the weed.
The location of the file is `data/<namespace>/agricraft/weeds/<weed_id>.json`.

The scheme of the file is as follows:
```json5
{
  // mods needed for the weed to be loaded
  "mods": [],
  // An array containing the height of the weed for each growth stage.
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
  // The chance the weed has of spawning on a random tick [range: 0.0-1.0].
  "spawn_chance": 0.25,
  // The chance the weed has of growing on a random tick [range: 0.0-1.0].
  "growth_chance": 0.9,
  // Defines if a weed is aggressive, aggressive weeds will try to spread to adjacent crops when mature.
  "aggressive": true,
  // Defines if a weed is lethal, lethal weeds will try to kill the host plant when mature.
  "lethal": true,
  // A list containing the possible raking products of the weed. The rake products have the same scheme as the plant products.
  "rake_products": [],
  // Determines the growth requirements of the weed. It is the same format as the plant requirements.
  "requirement": {
    "soil_humidity": {
      "condition": "damp",
      "type": "equal",
      "tolerance_factor": 0.15
    },
    "soil_acidity": {
      "condition": "neutral",
      "type": "equal",
      "tolerance_factor": 0.2
    },
    "soil_nutrients": {
      "condition": "medium",
      "type": "equal_or_higher",
      "tolerance_factor": 0.1
    },
    "min_light": 10,
    "max_light": 16,
    "light_tolerance_factor": 0.5,
    "seasons": [
      "spring",
      "summer",
      "autumn",
      "winter"
    ],
    "block_conditions": [],
    "fluid": {
      "fluid": "minecraft:empty",
      "states": [],
    }
  }
}
```

## Resourcepack

The resourcepack part describe how the weed is rendered, and follows the same architecture as the plants resourcepack part.
However, the models must be placed in the folder `weed` instead of `crop`.

### Textures

Agricraft will load the textures from `textures/weed/`, so you can put your weed textures there if you want.

### Translation

The key use to translate the name of the weed is: `weed.agricraft.<namespace>.<weed_id>`.
