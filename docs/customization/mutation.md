# Mutation

Mutations are a way to create new breeds of plants from two plants.
AgriCraft ships default mutations for plants (you can view the defaults [here](https://github.com/AgriCraft/todo-kether-fix-this)).
However, you can modify these mutations or add new ones.

To create your own mutation, add a new json file in the directory `data/<datapack_id>/agricraft/mutations/<mutation_id>.json`
where `datapack_id` is the id of your datapack and`mutation_id` is the id of this mutation (it can be whatever you want).
In our case it will be `tuto` and `tomato`.

There can be multiple mutation for the same plant, as long as the id of the mutation is different.

The json file must have the following structure:
```json5
{
	// mods needed for the mutation to be loaded
	"mods": [],
	// the chance of the mutation occurring on any given random tick, in the range [0.0, 1.0]
	"chance": 0.75,
	// the plant id of the child resulting of the mutation
	"child": "tuto:tomato",
	// the plant id of the first parent
	"parent1": "minecraft:poppy",
	// the plant id of the second parent
	"parent2": "minecraft:potato"
}

```