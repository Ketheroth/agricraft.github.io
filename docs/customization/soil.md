# Soil

Soils are blocks where crops can grow on.
AgriCraft ships default soils, but you can modify them or add new ones with a datapack.

To create your own soil, add a new json file in the directory `data/<datapack_id>/agricraft/soils/<soil_id>.json`
where `datapack_id` is the id of your datapack and`soil_id` is the id of this soil (it can be whatever you want).
In our case it will be `tuto` and `tomato_soil`.

The structure of the json file is the following:
```json5
{
  // mods needed for the soil to be loaded
  "mods": [],
  // an array of blocks representing this soil
  "variants": [
    {
      // tag or element id of blocks to use
      "block": "minecraft:farmland",
      // list of blockstates the block must match
      "states": []
    }
  ],
  // the humidity condition of the block (see below for more information)
  "humidity": "wet",
  // the acidity condition of the block
  "acidity": "slightly_acidic",
  // the nutrient condition of the block
  "nutrients": "high",
  // a value used to modify the growth of the plants on this soil.
  // 1.0 is the default growth of the plant, a lower value will decrease the speed of growth,
  // and a higher value will increase its speed.
  "growth_modifier": 1.0,
}
```

## Soil conditions

### Humidity

| Index | Condition | Alias                |
|-------|-----------|----------------------|
| 0     | `arid`    |                      |
| 1     | `dry`     |                      |
| 2     | `damp`    | `moist`              |
| 3     | `wet`     | `standard` `default` |
| 4     | `watery`  |                      |
| 5     | `flooded` |                      |

### Acidity

| Index | Condition           | Alias                                   |
|-------|---------------------|-----------------------------------------|
| 0     | `highly_acidic`     | `highly-acidic` `highly acidic`         |
| 1     | `acidic`            |                                         |
| 2     | `slightly_acidic`   | `slightly-acidic` `slightly acidic`     |
| 3     | `neutral`           |                                         |
| 4     | `slightly_alkaline` | `slightly-alkaline` `slightly alkaline` |
| 5     | `alkaline`          |                                         |
| 6     | `highly_alkaline`   | `highly-alkaline` `highly alkaline`     |

### Nutrients

| Index | Condition   | Alias           |
|-------|-------------|-----------------|
| 0     | `none`      | `zero` `empty`  |
| 1     | `very_low`  | `scarce` `poor` |
| 2     | `low`       |                 |
| 3     | `medium`    | `average`       |
| 4     | `high`      |                 |
| 5     | `very_high` | `rich`          |
