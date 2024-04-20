# Fertilizer

Fertilizers are items used to force growth tick of the plant (i.e. making the plant grow faster).
AgriCraft ships default fertilizers (mainly the bone meal), but you can modify them or add new ones with a datapack.

To create your own fertilizer, add a new json file in the directory `data/<datapack_id>/agricraft/fertilizers/<fertilizer_id>.json`
where `datapack_id` is the id of your datapack and`fertilizer_id` is the id of this fertilizer (it can be whatever you want).
In our case it will be `tuto` and `tomato_fertilizer`.

```json5
{
  // mods needed for the fertilizer to be loaded
  "mods": [],
  // an array of items representing this fertilizer
  "variants": [
    {
      // tag or element id of items to use
      "item": "minecraft:bone_meal"
    }
  ],
  // Determine if the fertilizer trigger mutation in the crop
  "trigger_mutation": true,
  // Determine if the fertilizer trigger weed growth in the crop
  "trigger_weeds": true,
  // Determine the potency of the fertilizerk, bigger values equals faster growth
  "potency": 1,
  // Determine if the fertilizer can reduce the growth of negatively affected plants
  "reduce_growth": true,
  // Determine if the fertilizer can kill negatively affected plants.
  "kill_plant": true,
  // The list of unaffected plants by this fertilizer. Can be a tag or element id.
  "neutral_on": [
    "minecraft:wheat",
  ],
  // The list of negatively affected plants by the fertilizer
  "negative_on": [
  ],
  // An array of particles that are spawned in the world when the fertilizer is used on a plant.
  "particles": [
    {
      // The amount of particles
      "amount": 2,
      // How far from the center of the block the particle can spawn (X axis)
      "delta_x": 0.6,
      // How high from the center of the block the particle can spawn (Y axis)
      "delta_y": 0.4,
      // How high from the center of the block the particle can spawn (Z axis)
      "delta_z": 0.6,
      // The id of the particle
      "particle": "minecraft:happy_villager",
      // Determine when the particle should spawn
      "when": [
        "positive",
        "neutral",
        "negative"
      ]
    },
    {
      "amount": 2,
      "delta_x": 0.6,
      "delta_y": 0.4,
      "delta_z": 0.6,
      "particle": "minecraft:smoke",
      "when": [
        "negative"
      ]
    }
  ],
}
```

## Plant tags

Plant tags are like block tags or item tags, but for plants instead.
They must be placed in the directory `data/<datapack_id>/tags/agricraft/plants/<tag_id>.json`.

