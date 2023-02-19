import express from 'express';
import mongoose from 'mongoose';

const app = express();
app.use(express.json());

// Connect to MongoDB
// mongoose.connect('mongodb://mongodb:27017/mydb', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });

// const ItemSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true
//   },
//   date: {
//     type: Date,
//     default: Date.now
//   }
// });

// const Item = mongoose.model('Item', ItemSchema);

// // Create a new item
// app.post('/item', async (req, res) => {
//   const item = new Item({
//     name: req.body.name
//   });
//   try {
//     const savedItem = await item.save();
//     res.send(savedItem);
//   } catch (err) {
//     res.status(400).send(err);
//   }
// });

// // Get all items
// app.get('/items', async (req, res) => {
//   try {
//     const items = await Item.find();
//     res.send(items);
//   } catch (err) {
//     res.status(400).send(err);
//   }
// });

// // Get a single item by ID
// app.get('/item/:id', async (req, res) => {
//   try {
//     const item = await Item.findById(req.params.id);
//     res.send(item);
//   } catch (err) {
//     res.status(400).send(err);
//   }
// });

// // Update an item by ID
// app.patch('/item/:id', async (req, res) => {
//   try {
//     const updatedItem = await Item.updateOne(
//       { _id: req.params.id },
//       { $set: { name: req.body.name } }
//     );
//     res.send(updatedItem);
//   } catch (err) {
//     res.status(400).send(err);
//   }
// });

// // Delete an item by ID
// app.delete('/item/:id', async (req, res) => {
//   try {
//     const removedItem = await Item.remove({ _id: req.params.id });
//     res.send(removedItem);
//   } catch (err) {
//     res.status(400).send(err);
//   }
// });

app.get('/', (req, res) => {
  res.send('SERVER RUNNING');
});


const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));