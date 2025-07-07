import React, { useState, useEffect } from 'react';
import './App.css';

const API_BASE_URL = 'https://adapt-nxt-products.vercel.app/api';

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
    const fetchProducts = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/products`);
        const data = await response.json();
        setProducts(data);
        setFilteredProducts(data);
      } catch (error) {
        showMessage('Failed to load products',error);
      }
    };
    fetchProducts();
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

  const handleAddProduct = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_BASE_URL}/products`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newProduct)
      });
      
      if (!response.ok) throw new Error('Failed to add product');
      
      const addedProduct = await response.json();
      setProducts([...products, addedProduct]);
      setNewProduct({
        name: '',
        price: '',
        category: '',
        stock: '',
        image: ''
      });
      showMessage('Product added successfully', 'success');
    } catch (error) {
      showMessage(error.message, 'danger');
    }
  };


  const handleEditProduct = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_BASE_URL}/products/${isEditing}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newProduct)
      });
      
      if (!response.ok) throw new Error('Failed to update product');
      
      const updatedProduct = await response.json();
      setProducts(products.map(p => p.id === isEditing ? updatedProduct : p));
      setNewProduct({
        name: '',
        price: '',
        category: '',
        stock: '',
        image: ''
      });
      setIsEditing(null);
      showMessage('Product updated successfully', 'success');
    } catch (error) {
      showMessage(error.message, 'danger');
    }
  };


  const deleteProduct = async (productId) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      try {
        const response = await fetch(`${API_BASE_URL}/products/${productId}`, {
          method: 'DELETE'
        });
        
        if (!response.ok) throw new Error('Failed to delete product');
        
        setProducts(products.filter(product => product.id !== productId));
        showMessage('Product deleted successfully', 'success');
      } catch (error) {
        showMessage(error.message, 'danger');
      }
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
          <button
            className={`tab ${activeTab === 'products' ? 'active' : ''}`}
            onClick={() => setActiveTab('products')}
          >
            Products
          </button>
          <button
            className={`tab ${activeTab === 'cart' ? 'active' : ''}`}
            onClick={() => setActiveTab('cart')}
          >
            Cart ({cart.length})
          </button>
          <button
            className={`tab ${activeTab === 'admin' ? 'active' : ''}`}
            onClick={() => setActiveTab('admin')}
          >
            Admin
          </button>
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
                    <div className="price">${product.price.toFixed(2)}</div>
                    <p>Category: {product.category}</p>
                    <button
                      className="btn btn-primary"
                      onClick={() => addToCart(product.id)}
                    >
                      Add to Cart
                    </button>
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
                            <div>${item.price.toFixed(2)}</div>
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
                          <button
                            className="btn btn-danger"
                            onClick={() => removeFromCart(item.productId)}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    ))}
                    <div className="cart-total">
                      Total: ${cartTotal.toFixed(2)}
                    </div>
                    <button
                      className="btn btn-primary"
                      onClick={placeOrder}
                    >
                      Place Order
                    </button>
                  </>
                )}
              </div>
            </>
          )}

          {activeTab === 'admin' && (
            <>
              <div className="card">
                <h2 className="card-title">
                  {isEditing ? 'Edit Product' : 'Add New Product'}
                </h2>
                <form onSubmit={isEditing ? handleEditProduct : handleAddProduct}>
                  <div className="form-group">
                    <label>Product Name</label>
                    <input
                      type="text"
                      className="form-control"
                      value={newProduct.name}
                      onChange={(e) => setNewProduct({...newProduct, name: e.target.value})}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Price</label>
                    <input
                      type="number"
                      className="form-control"
                      step="0.01"
                      value={newProduct.price}
                      onChange={(e) => setNewProduct({...newProduct, price: e.target.value})}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Category</label>
                    <input
                      type="text"
                      className="form-control"
                      value={newProduct.category}
                      onChange={(e) => setNewProduct({...newProduct, category: e.target.value})}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Stock</label>
                    <input
                      type="number"
                      className="form-control"
                      value={newProduct.stock}
                      onChange={(e) => setNewProduct({...newProduct, stock: e.target.value})}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Image URL</label>
                    <input
                      type="text"
                      className="form-control"
                      value={newProduct.image}
                      onChange={(e) => setNewProduct({...newProduct, image: e.target.value})}
                    />
                  </div>
                  <div className="form-actions">
                    <button type="submit" className="btn btn-primary">
                      {isEditing ? 'Update Product' : 'Add Product'}
                    </button>
                    {isEditing && (
                      <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={cancelEdit}
                      >
                        Cancel
                      </button>
                    )}
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
                    <div className="price">${product.price.toFixed(2)}</div>
                    <p>Category: {product.category}</p>
                    <p>Stock: {product.stock}</p>
                    <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
                      <button 
                        className="btn btn-primary"
                        onClick={() => setupEditProduct(product)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-danger"
                        onClick={() => deleteProduct(product.id)}
                      >
                        Delete
                      </button>
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
