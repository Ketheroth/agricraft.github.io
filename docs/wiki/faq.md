# Frequently Asked Questions

## How do I prevent a plant from spawning? How do I disable it?

Like you would disable a recipe in minecraft, create a datapack that replace the corresponding JSON file by a file that contains just the following text: `{}`.

## How do I disable weeds?

Same as with any other plant.

## Why won't some plant seeds don't stack with others?

Probably because one of those stack doesn't have the same genes as the other. Each gene is saved in the itemstack.
The tooltip should show some of it. However, some genes are hidden by default.
You need to change the value `todo` to true in the config to be able to see these hidden genes.

## How do I use fertilizers from other mods?

Create the corresponding [fertilizer json](../customization/fertilizer).
Some mods fertilizers should already be present, if not, tell us on GitHub or Discord, so we can add them.

## Why can't I put the seed into the Seed Analyzer?

The seed is probably not supported by default. Check the default seed datapack for agricraft (you can have a web version
on the [GitHub repository](https://github.com/AgriCraft/AgriCraft/todo)) for a folder for the mod and the plant it this folder.
If there isn't, consider adding the plant yourself by following the [seed customization tutorial](../customization/plant.mdx),
or ask us to add it on GitHub or Discord.

## How can I use the Seed Analyzer?

Right-click to open the seed analyzer and Shift-right-click with a seed or a journal in your hand to insert it in the analyzer.
If the journal is present in the analyzer, and you analyze a seed, the page for that seed will show up in the journal.

[//]: # (## How can I use the Seed Bag?)
[//]: # ()
[//]: # (Hold the bag in your off-hand, then right click with a seed in your main hand to put the seed in the bag,)
[//]: # (or with an empty hand to retrieve one seed. You can shake the bag &#40;shift + right click&#41; to change the order of the seeds.)
[//]: # (You can plant seeds directly from the bag with a right click from the main hand.)

## How can I give myself a seed with specific genes values?

There is two ways to give you a seed with specific values:
- Use the AgriCraft give command as follows:
  - `/agricraft_seed <plant_id>`: give the seed for the given plant with default stats (1 to every stat)
  - `/agricraft_seed <plant_id> all <value>`: give the seed for the given plant with each stat set to the given value (must be between 1 and 10)
  - `/agricraft_seed <plant_id> distinct <format>`: give the seed for the given plant with each stat set to their own value. The format is the values with a comma between, ordered by the stats id alphabetical order.
    Example: To have a plant with the following stats: fertility=1, gain=2, growth=3, mutativity=4, resistance=5, strength=6; the command is `/agricraft_seed <plant_id> distinct 1,2,3,4,5,6`.
- Use the Minecraft give command and set the nbt of the AgriCraft seed according to your need.
