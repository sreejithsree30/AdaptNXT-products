import React, { useState, useEffect } from 'react';
import './App.css';

const productsList = [
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

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('products');
  const [message, setMessage] = useState({ text: '', type: '' });
  const [newProduct, setNewProduct] = useState({
    name: '',
    price: '',
    category: '',
    stock: '',
    image: ''
  });
  const [isEditing, setIsEditing] = useState(null);

  useEffect(() => {
    setProducts(productsList);
    setFilteredProducts(productsList);
  }, []);

  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  }, [searchTerm, products]);

  const addToCart = (productId) => {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.productId === productId);

    if (existingItem) {
      setCart(cart.map(item =>
        item.productId === productId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([
        ...cart,
        {
          productId: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          quantity: 1
        }
      ]);
    }

    showMessage(`${product.name} added to cart`, 'success');
  };

  const updateCartItem = (productId, quantity) => {
    if (quantity < 1) return;

    setCart(cart.map(item =>
      item.productId === productId
        ? { ...item, quantity: parseInt(quantity) }
        : item
    ));
  };

  const removeFromCart = (productId) => {
    const product = products.find(p => p.id === productId);
    setCart(cart.filter(item => item.productId !== productId));
    showMessage(`${product.name} removed from cart`, 'success');
  };

  const placeOrder = () => {
    if (cart.length === 0) {
      showMessage('Your cart is empty', 'danger');
      return;
    }

    setCart([]);
    showMessage('Order placed successfully!', 'success');
  };

  const handleAddProduct = (e) => {
    e.preventDefault();
    const id = products.length ? products[products.length - 1].id + 1 : 1;
    const newProd = { ...newProduct, id };
    setProducts([...products, newProd]);
    setFilteredProducts([...products, newProd]);
    setNewProduct({
      name: '',
      price: '',
      category: '',
      stock: '',
      image: ''
    });
    showMessage('Product added successfully', 'success');
  };

  const handleEditProduct = (e) => {
    e.preventDefault();
    const updated = products.map(p =>
      p.id === isEditing ? { ...p, ...newProduct, id: isEditing } : p
    );
    setProducts(updated);
    setFilteredProducts(updated);
    setNewProduct({
      name: '',
      price: '',
      category: '',
      stock: '',
      image: ''
    });
    setIsEditing(null);
    showMessage('Product updated successfully', 'success');
  };

  const deleteProduct = (productId) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      const updated = products.filter(product => product.id !== productId);
      setProducts(updated);
      setFilteredProducts(updated);
      showMessage('Product deleted successfully', 'success');
    }
  };

  const setupEditProduct = (product) => {
    setIsEditing(product.id);
    setNewProduct({
      name: product.name,
      price: product.price,
      category: product.category,
      stock: product.stock,
      image: product.image
    });
  };

  const cancelEdit = () => {
    setIsEditing(null);
    setNewProduct({
      name: '',
      price: '',
      category: '',
      stock: '',
      image: ''
    });
  };

  const showMessage = (text, type) => {
    setMessage({ text, type });
    setTimeout(() => setMessage({ text: '', type: '' }), 3000);
  };

  const cartTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="app">
      <header className="header">
        <div className="container header-content">
          <div className="logo">AdaptNXT digital Store</div>
          <div className="cart-icon" onClick={() => setActiveTab('cart')}>
            🛒 {cart.length > 0 && <span className="cart-count">{cart.length}</span>}
          </div>
        </div>
      </header>

      <div className="container">
        {message.text && (
          <div className={`alert alert-${message.type}`}>
            {message.text}
          </div>
        )}

        <div className="tabs">
          <button className={`tab ${activeTab === 'products' ? 'active' : ''}`} onClick={() => setActiveTab('products')}>Products</button>
          <button className={`tab ${activeTab === 'cart' ? 'active' : ''}`} onClick={() => setActiveTab('cart')}>Cart ({cart.length})</button>
          <button className={`tab ${activeTab === 'admin' ? 'active' : ''}`} onClick={() => setActiveTab('admin')}>Admin</button>
        </div>

        <div className="tab-content">
          {activeTab === 'products' && (
            <>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="grid">
                {filteredProducts.map(product => (
                  <div key={product.id} className="card product-card">
                    <div className="product-image">
                      <img src={product.image} alt={product.name} />
                    </div>
                    <h3>{product.name}</h3>
                    <div className="price">₹{product.price.toFixed(2)}</div>
                    <p>Category: {product.category}</p>
                    <button className="btn btn-primary" onClick={() => addToCart(product.id)}>Add to Cart</button>
                  </div>
                ))}
              </div>
            </>
          )}

          {activeTab === 'cart' && (
            <>
              <div className="cart-items">
                {cart.length === 0 ? (
                  <p>Your cart is empty</p>
                ) : (
                  <>
                    {cart.map(item => (
                      <div key={item.productId} className="cart-item">
                        <div className="cart-item-details">
                          <div className="cart-item-image">
                            <img src={item.image} alt={item.name} />
                          </div>
                          <div>
                            <div className="cart-item-name">{item.name}</div>
                            <div>₹{item.price.toFixed(2)}</div>
                          </div>
                        </div>
                        <div>
                          <input
                            type="number"
                            className="cart-item-quantity"
                            value={item.quantity}
                            min="1"
                            onChange={(e) => updateCartItem(item.productId, e.target.value)}
                          />
                          <button className="btn btn-danger" onClick={() => removeFromCart(item.productId)}>Remove</button>
                        </div>
                      </div>
                    ))}
                    <div className="cart-total">Total: ₹{cartTotal.toFixed(2)}</div>
                    <button className="btn btn-primary" onClick={placeOrder}>Place Order</button>
                  </>
                )}
              </div>
            </>
          )}

          {activeTab === 'admin' && (
            <>
              <div className="card">
                <h2 className="card-title">{isEditing ? 'Edit Product' : 'Add New Product'}</h2>
                <form onSubmit={isEditing ? handleEditProduct : handleAddProduct}>
                  <div className="form-group">
                    <label>Product Name</label>
                    <input type="text" className="form-control" value={newProduct.name} onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })} required />
                  </div>
                  <div className="form-group">
                    <label>Price</label>
                    <input type="number" className="form-control" step="0.01" value={newProduct.price} onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })} required />
                  </div>
                  <div className="form-group">
                    <label>Category</label>
                    <input type="text" className="form-control" value={newProduct.category} onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })} required />
                  </div>
                  <div className="form-group">
                    <label>Stock</label>
                    <input type="number" className="form-control" value={newProduct.stock} onChange={(e) => setNewProduct({ ...newProduct, stock: e.target.value })} required />
                  </div>
                  <div className="form-group">
                    <label>Image URL</label>
                    <input type="text" className="form-control" value={newProduct.image} onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })} />
                  </div>
                  <div className="form-actions">
                    <button type="submit" className="btn btn-primary">{isEditing ? 'Update Product' : 'Add Product'}</button>
                    {isEditing && <button type="button" className="btn btn-secondary" onClick={cancelEdit}>Cancel</button>}
                  </div>
                </form>
              </div>

              <h2 className="card-title" style={{ marginTop: '30px' }}>Manage Products</h2>
              <div className="grid">
                {products.map(product => (
                  <div key={product.id} className="card product-card">
                    <div className="product-image">
                      <img src={product.image} alt={product.name} />
                    </div>
                    <h3>{product.name}</h3>
                    <div className="price">₹{product.price.toFixed(2)}</div>
                    <p>Category: {product.category}</p>
                    <p>Stock: {product.stock}</p>
                    <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
                      <button className="btn btn-primary" onClick={() => setupEditProduct(product)}>Edit</button>
                      <button className="btn btn-danger" onClick={() => deleteProduct(product.id)}>Delete</button>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
