const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;


app.use(cors());
app.use(express.json());


const products = [
  {
    id: 1,
    name: 'Wireless Headphones',
    price: 99.99,
    category: 'Electronics',
    stock: 50,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 2,
    name: 'Smart Watch',
    price: 199.99,
    category: 'Electronics',
    stock: 30,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 3,
    name: 'Coffee Maker',
    price: 49.99,
    category: 'Home',
    stock: 20,
    image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 4,
    name: 'Yoga Mat',
    price: 29.99,
    category: 'Fitness',
    stock: 40,
    image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 5,
    name: 'Backpack',
    price: 39.99,
    category: 'Accessories',
    stock: 25,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 6,
    name: 'Bluetooth Speaker',
    price: 59.99,
    category: 'Electronics',
    stock: 35,
    image: 'https://images.unsplash.com/photo-1583223423876-1cf4d9e50585?auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 7,
    name: 'Running Shoes',
    price: 89.99,
    category: 'Fitness',
    stock: 60,
    image: 'https://images.unsplash.com/photo-1600180758890-6db55e60aa3a?auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 8,
    name: 'Water Bottle',
    price: 14.99,
    category: 'Fitness',
    stock: 100,
    image: 'https://images.unsplash.com/photo-1585238342028-3edff509f9b7?auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 9,
    name: 'Laptop Stand',
    price: 24.99,
    category: 'Accessories',
    stock: 45,
    image: 'https://images.unsplash.com/photo-1581349482210-3e6f81852c2c?auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 10,
    name: 'LED Desk Lamp',
    price: 32.99,
    category: 'Home',
    stock: 50,
    image: 'https://images.unsplash.com/photo-1582719478136-fd54e5b0a09c?auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 11,
    name: 'Gaming Mouse',
    price: 29.99,
    category: 'Electronics',
    stock: 70,
    image: 'https://images.unsplash.com/photo-1610394216081-3789d3d7d417?auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 12,
    name: 'Office Chair',
    price: 149.99,
    category: 'Home',
    stock: 15,
    image: 'https://images.unsplash.com/photo-1578898884035-62b23b5f6b38?auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 13,
    name: 'HD Webcam',
    price: 69.99,
    category: 'Electronics',
    stock: 40,
    image: 'https://images.unsplash.com/photo-1605121264314-019d9ec40a63?auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 14,
    name: 'Electric Toothbrush',
    price: 39.99,
    category: 'Health',
    stock: 80,
    image: 'https://images.unsplash.com/photo-1606813795451-bb8c8c2e1885?auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 15,
    name: 'Travel Mug',
    price: 19.99,
    category: 'Accessories',
    stock: 60,
    image: 'https://images.unsplash.com/photo-1564868489511-10fe0b5c5a09?auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 16,
    name: 'Table Clock',
    price: 24.99,
    category: 'Home',
    stock: 30,
    image: 'https://images.unsplash.com/photo-1541976844346-f18aeac57b6b?auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 17,
    name: 'Resistance Bands',
    price: 22.99,
    category: 'Fitness',
    stock: 75,
    image: 'https://images.unsplash.com/photo-1584467735871-bd39c56e68df?auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 18,
    name: 'Sunglasses',
    price: 49.99,
    category: 'Accessories',
    stock: 90,
    image: 'https://images.unsplash.com/photo-1582582494700-4a07118c4794?auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 19,
    name: 'Portable Charger',
    price: 29.99,
    category: 'Electronics',
    stock: 55,
    image: 'https://images.unsplash.com/photo-1580894894513-6a5c9131b3d3?auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 20,
    name: 'Desk Organizer',
    price: 18.99,
    category: 'Home',
    stock: 40,
    image: 'https://images.unsplash.com/photo-1557682224-5b8590cd9ec5?auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 21,
    name: 'Phone Tripod',
    price: 27.99,
    category: 'Electronics',
    stock: 48,
    image: 'https://images.unsplash.com/photo-1589394533303-08f35f0e0bc3?auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 22,
    name: 'Notebook Set',
    price: 12.99,
    category: 'Stationery',
    stock: 120,
    image: 'https://images.unsplash.com/photo-1505577058444-a3dab90d4253?auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 23,
    name: 'Essential Oil Diffuser',
    price: 39.99,
    category: 'Home',
    stock: 35,
    image: 'https://images.unsplash.com/photo-1598300058401-df560b5869e6?auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 24,
    name: 'Foot Massager',
    price: 79.99,
    category: 'Health',
    stock: 18,
    image: 'https://images.unsplash.com/photo-1633536779464-2b7e57e6c9cd?auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 25,
    name: 'Wall Art Set',
    price: 59.99,
    category: 'Home',
    stock: 20,
    image: 'https://images.unsplash.com/photo-1557991935-70c7e09e7035?auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 26,
    name: 'Wireless Keyboard',
    price: 49.99,
    category: 'Electronics',
    stock: 30,
    image: 'https://images.unsplash.com/photo-1611765082786-798c1b96b38e?auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 27,
    name: 'Noise Cancelling Earbuds',
    price: 119.99,
    category: 'Electronics',
    stock: 25,
    image: 'https://images.unsplash.com/photo-1606813904925-1d8237ec26f0?auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 28,
    name: 'Digital Thermometer',
    price: 19.99,
    category: 'Health',
    stock: 65,
    image: 'https://images.unsplash.com/photo-1588776814546-31e1f449b9b6?auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 29,
    name: 'Mini Blender',
    price: 34.99,
    category: 'Home',
    stock: 22,
    image: 'https://images.unsplash.com/photo-1611605698335-29e1ae6ee2ed?auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 30,
    name: 'Gym Gloves',
    price: 15.99,
    category: 'Fitness',
    stock: 80,
    image: 'https://images.unsplash.com/photo-1615826046747-1f8f518f0e83?auto=format&fit=crop&w=500&q=60'
  }
];


app.get('/api/products', (req, res) => {
  res.json(products);
});


app.get('/api/products/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product) return res.status(404).json({ message: 'Product not found' });
  res.json(product);
});


app.post('/api/products', (req, res) => {
  const newProduct = {
    id: products.length + 1,
    name: req.body.name,
    price: req.body.price,
    category: req.body.category,
    stock: req.body.stock,
    image: req.body.image || 'https://via.placeholder.com/500'
  };
  products.push(newProduct);
  res.status(201).json(newProduct);
});


app.put('/api/products/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product) return res.status(404).json({ message: 'Product not found' });

  product.name = req.body.name || product.name;
  product.price = req.body.price || product.price;
  product.category = req.body.category || product.category;
  product.stock = req.body.stock || product.stock;
  product.image = req.body.image || product.image;

  res.json(product);
});


app.delete('/api/products/:id', (req, res) => {
  const productIndex = products.findIndex(p => p.id === parseInt(req.params.id));
  if (productIndex === -1) return res.status(404).json({ message: 'Product not found' });

  const deletedProduct = products.splice(productIndex, 1);
  res.json(deletedProduct[0]);
});


app.get('/api/products/search/:query', (req, res) => {
  const query = req.params.query.toLowerCase();
  const results = products.filter(p => 
    p.name.toLowerCase().includes(query) || 
    p.category.toLowerCase().includes(query)
  );
  res.json(results);
});


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});