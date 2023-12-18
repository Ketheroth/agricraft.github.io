---
hide_table_of_contents: true
---

# AgriCraft Customization

This documentation will guide you on how to customize AgriCraft 3.2.0 with a datapack and a resourcepack.  
It is assumed you know how to create datapacks and resourcepacks for Minecraft.

This guide is split on 5 parts, one for each datapack registry AgriCraft exposes:
- [Add a new plant](./plant)
- [Add a new plant mutation](./mutation)
- [Add a new soil](./soil)
- [Add a new fertilizer](./fertilizer)
- [Add a new weed](./weed)

## Migrating from AgriCraft 3.1.0 to 3.2.0

Follow these steps to convert your 3.1.0 json config files:

- copy your AgriCraft config folder (of 3.1.0) to the new minecraft instance
- launch the new minecraft instance and join a local world
- run the command `/agricraft convert`
- you can exit the world and close minecraft
- your old config jsons should be converted as a datapack/resourcepack in the world save your ran the command
- some manual editing may need to be done as the tool isn't perfect