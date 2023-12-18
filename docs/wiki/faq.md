# Frequently Asked Questions

## How do I prevent a plant from spawning? How do I disable it?

In the corresponding JSON file, change the `enabled` value, or replace the file with and empty file.

## How do I disable weeds?

Same as with any other plant.

As part of the transition to using customizable JSON files for all the plants, weeds are now no longer special or
different from other plants. What gives them that annoying nature is that they have a non-zero chance to spontaneously spawn,
and because they're aggressive they have the ability to technically replace neighboring plants.
Except that, by default they're too weak to do that really.

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
If there isn't, consider adding the plant yourself by following the [seed customization tutorial](../customization/plant.md),
or ask us to add it on GitHub or Discord.

## How can I use the Seed Analyzer?

Right-click to open the seed analyzer and Shift-right-click with a seed or a journal in your hand to insert it in the analyzer.
If the journal is present in the analyzer, and you analyze a seed, the page for that seed will show up in the journal.

## How can I use the Seed Bag?

Hold the bag in your off-hand, then right click with a seed in your main hand to put the seed in the bag,
or with an empty hand to retrieve one seed. You can shake the bag (shift + right click) to change the order of the seeds.
You can plant seeds directly from the bag with a right click from the main hand.
