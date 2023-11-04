const db = require('../config/connection');
const { User, Item, Fridge } = require('../models');
const userSeeds = require('./userSeeds.json');
const itemSeeds = require('./itemSeeds.json');
const fridgeSeeds = require('./fridgeSeeds.json');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
    try {
        await cleanDB('User', 'users');
        await cleanDB('Item', 'items');
        await cleanDB('Fridge', 'fridges');

        await User.create(userSeeds);
        
        for (let i = 0; i < fridgeSeeds.length; i++) {
            const { _id, username } = 
            await Fridge.create(fridgeSeeds[i]);
            const user = await User.findOneAndUpdate(
                { username: username },
                { $addToSet: { fridges: _id } }
            )
        };

        for (let i = 0; i < itemSeeds.length; i++) {
            const { _id, itemUsername, itemFridgename } = await Item.create(itemSeeds[i]);
            const user = await User.findOneAndUpdate(
                { username: itemUsername },
                { $addToSet: { items: _id } }
            );
            const fridge = await Fridge.findOneAndUpdate(
                { name: itemFridgename },
                { $addToSet: { items: _id } }
            );
        };

      } catch (error) {
        console.error(error);
        process.exit(1);
    }

    console.log('seed successful')
    process.exit(0);
});

