import React, { useState } from 'react';

export default function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [activeTab, setActiveTab] = useState('Home');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const categories = ['All', 'Premium Audio', 'Smartphones & Tablets', 'Wearables'];

  const products = [
    { id: 1, name: 'Precision Titanium Watch', category: 'Wearables', price: '$299', desc: 'Aircraft-grade titanium watch with premium leather strap and sapphire glass.', img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500' },
    { id: 2, name: 'Wireless Headphones', category: 'Premium Audio', price: '$150', desc: 'Active noise cancelling wireless headphones with 30-hour battery life.', img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500' },
    { id: 3, name: 'Flagship Smartphone', category: 'Smartphones & Tablets', price: '$899', desc: 'OLED Display, Ultra-fast processor, and pro-grade triple camera system.', img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500' },
    { id: 4, name: 'Leather Travel Bag', category: 'Wearables', price: '$120', desc: 'Handcrafted genuine leather backpack for daily commute and travel.', img: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500' }
  ];

  const toggleWishlist = (id) => {
    if (wishlist.includes(id)) {
      setWishlist(wishlist.filter(item => item !== id));
    } else {
      setWishlist([...wishlist, id]);
    }
  };

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const filteredProducts = products.filter(p => {
    const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div style={{ fontFamily: 'system-ui, -apple-system, sans-serif', backgroundColor: '#f8fafc', minHeight: '100vh', margin: 0, paddingBottom: '40px' }}>
      
      {/* Top Navigation Bar */}
      <nav style={{ backgroundColor: '#ffffff', borderBottom: '1px solid #e2e8f0', padding: '12px 24px', position: 'sticky', top: 0, zIndex: 50, boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '15px' }}>
          
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }} onClick={() => setActiveTab('Home')}>
            <div style={{ backgroundColor: '#6366f1', color: '#fff', padding: '8px 12px', borderRadius: '10px', fontWeight: 'bold', fontSize: '18px' }}>E</div>
            <div>
              <h3 style={{ margin: 0, fontSize: '18px', color: '#0f172a', fontWeight: 'bold' }}>E - SHOP</h3>
              <span style={{ fontSize: '9px', color: '#64748b', letterSpacing: '1px', display: 'block' }}>MODERN COMMERCE</span>
            </div>
          </div>

          {/* Search Bar - Responsive */}
          <div style={{ flex: '1', maxWidth: '500px' }}>
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ width: '100%', padding: '10px 18px', borderRadius: '24px', border: '1px solid #cbd5e1', outline: 'none', backgroundColor: '#f1f5f9', fontSize: '14px', boxSizing: 'border-box' }}
            />
          </div>

          {/* Desktop Navigation Links & Action Icons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
              {['Home', 'Products', 'Categories'].map((item) => (
                <span
                  key={item}
                  onClick={() => setActiveTab(item)}
                  style={{ cursor: 'pointer', color: activeTab === item ? '#6366f1' : '#475569', fontWeight: activeTab === item ? 'bold' : '500', fontSize: '14px' }}
                >
                  {item}
                </span>
              ))}
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', borderLeft: '1px solid #e2e8f0', paddingLeft: '15px' }}>
              <button onClick={() => setActiveTab('Wishlist')} style={{ background: 'none', border: 'none', fontSize: '20px', cursor: 'pointer', position: 'relative', padding: '4px' }}>
                ❤️
                {wishlist.length > 0 && (
                  <span style={{ position: 'absolute', top: '-2px', right: '-4px', backgroundColor: '#ef4444', color: '#fff', fontSize: '10px', borderRadius: '50%', padding: '2px 6px', fontWeight: 'bold' }}>{wishlist.length}</span>
                )}
              </button>

              <button onClick={() => setActiveTab('Cart')} style={{ background: 'none', border: 'none', fontSize: '20px', cursor: 'pointer', position: 'relative', padding: '4px' }}>
                🛍️
                {cart.length > 0 && (
                  <span style={{ position: 'absolute', top: '-2px', right: '-4px', backgroundColor: '#6366f1', color: '#fff', fontSize: '10px', borderRadius: '50%', padding: '2px 6px', fontWeight: 'bold' }}>{cart.length}</span>
                )}
              </button>
            </div>
          </div>

        </div>
      </nav>

      {/* Main Container */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px 15px' }}>
        
        {/* Home & Products Page */}
        {(activeTab === 'Home' || activeTab === 'Products' || activeTab === 'Categories') && (
          <>
            {/* Hero Banner */}
            <div style={{ padding: '40px 20px', borderRadius: '20px', background: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)', color: '#fff', textAlign: 'center', marginBottom: '30px', boxShadow: '0 10px 25px -5px rgba(49, 46, 129, 0.3)' }}>
              <span style={{ fontSize: '11px', letterSpacing: '2px', backgroundColor: '#4338ca', padding: '6px 14px', borderRadius: '20px', fontWeight: 'bold' }}>FEATURED COLLECTION</span>
              <h1 style={{ fontSize: 'clamp(20px, 4vw, 36px)', margin: '16px 0 10px', fontWeight: 'bold' }}>Precision Engineered for Daily Excellence</h1>
              <p style={{ color: '#93c5fd', fontSize: 'clamp(12px, 2vw, 16px)', maxWidth: '600px', margin: '0 auto 24px', lineHeight: '1.5' }}>From aircraft-grade titanium watches to handcrafted leather luggage, elevate every moment.</p>
              <button onClick={() => setSelectedCategory('Wearables')} style={{ backgroundColor: '#6366f1', color: '#fff', border: 'none', padding: '12px 28px', borderRadius: '10px', fontWeight: 'bold', cursor: 'pointer', fontSize: '14px', boxShadow: '0 4px 12px rgba(99, 102, 241, 0.4)' }}>
                Explore Wearables →
              </button>
            </div>

            {/* Categories Selection */}
            <div style={{ marginBottom: '25px' }}>
              <h4 style={{ color: '#64748b', fontSize: '12px', letterSpacing: '1px', margin: '0 0 12px', textTransform: 'uppercase', fontWeight: 'bold' }}>Curated Collections</h4>
              <div style={{ display: 'flex', gap: '10px', overflowX: 'auto', paddingBottom: '8px' }}>
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    style={{
                      padding: '10px 20px',
                      borderRadius: '24px',
                      border: 'none',
                      backgroundColor: selectedCategory === cat ? '#6366f1' : '#ffffff',
                      color: selectedCategory === cat ? '#fff' : '#334155',
                      fontSize: '13px',
                      fontWeight: '600',
                      cursor: 'pointer',
                      whiteSpace: 'nowrap',
                      boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
                      transition: 'all 0.2s'
                    }}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Products Responsive Grid (Auto-fits on Mobile, Tablet & Desktop) */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '20px' }}>
              {filteredProducts.map((p) => (
                <div key={p.id} style={{ backgroundColor: '#fff', borderRadius: '16px', border: '1px solid #f1f5f9', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
                  
                  {/* Clickable Area to Open Modal */}
                  <div onClick={() => setSelectedProduct(p)} style={{ cursor: 'pointer' }}>
                    <div style={{ width: '100%', height: '180px', overflow: 'hidden', backgroundColor: '#f8fafc' }}>
                      <img src={p.img} alt={p.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <div style={{ padding: '15px' }}>
                      <span style={{ fontSize: '10px', color: '#6366f1', fontWeight: 'bold', textTransform: 'uppercase' }}>{p.category}</span>
                      <h4 style={{ fontSize: '15px', margin: '6px 0', color: '#0f172a', fontWeight: 'bold', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{p.name}</h4>
                      <p style={{ fontSize: '12px', color: '#64748b', margin: '0 0 10px', height: '32px', overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>{p.desc}</p>
                      <span style={{ fontWeight: 'bold', color: '#0f172a', fontSize: '16px' }}>{p.price}</span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div style={{ padding: '0 15px 15px', display: 'flex', gap: '8px' }}>
                    <button onClick={() => toggleWishlist(p.id)} style={{ backgroundColor: '#f1f5f9', border: 'none', padding: '10px 12px', borderRadius: '8px', cursor: 'pointer', fontSize: '14px' }}>
                      {wishlist.includes(p.id) ? '❤️' : '🤍'}
                    </button>
                    <button onClick={() => addToCart(p)} style={{ flex: 1, backgroundColor: '#6366f1', color: '#fff', border: 'none', padding: '10px', borderRadius: '8px', fontSize: '13px', fontWeight: 'bold', cursor: 'pointer' }}>
                      + Add to Cart
                    </button>
                  </div>

                </div>
              ))}
            </div>
          </>
        )}

        {/* Cart Page */}
        {activeTab === 'Cart' && (
          <div style={{ backgroundColor: '#fff', padding: '24px', borderRadius: '16px', maxWidth: '600px', margin: '0 auto', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
            <h2 style={{ marginTop: 0, color: '#0f172a' }}>Shopping Cart ({cart.length})</h2>
            {cart.length === 0 ? <p style={{ color: '#64748b' }}>Your cart is empty.</p> : (
              <div>
                {cart.map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '12px 0', borderBottom: '1px solid #f1f5f9' }}>
                    <img src={item.img} alt={item.name} style={{ width: '50px', height: '50px', objectFit: 'cover', borderRadius: '8px' }} />
                    <div style={{ flex: 1 }}>
                      <h4 style={{ margin: 0, fontSize: '14px', color: '#0f172a' }}>{item.name}</h4>
                      <span style={{ fontSize: '13px', color: '#6366f1', fontWeight: 'bold' }}>{item.price}</span>
                    </div>
                  </div>
                ))}
                <button style={{ width: '100%', backgroundColor: '#22c55e', color: '#fff', border: 'none', padding: '14px', borderRadius: '10px', fontWeight: 'bold', marginTop: '20px', cursor: 'pointer', fontSize: '15px' }}>
                  Proceed to Checkout
                </button>
              </div>
            )}
          </div>
        )}

        {/* Wishlist Page */}
        {activeTab === 'Wishlist' && (
          <div style={{ backgroundColor: '#fff', padding: '24px', borderRadius: '16px', maxWidth: '800px', margin: '0 auto', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
            <h2 style={{ marginTop: 0, color: '#0f172a' }}>My Wishlist ({wishlist.length})</h2>
            {wishlist.length === 0 ? <p style={{ color: '#64748b' }}>No saved products in wishlist.</p> : (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '15px' }}>
                {products.filter(p => wishlist.includes(p.id)).map(p => (
                  <div key={p.id} style={{ border: '1px solid #f1f5f9', padding: '12px', borderRadius: '12px', textAlign: 'center' }}>
                    <img src={p.img} alt={p.name} style={{ width: '100%', height: '120px', objectFit: 'cover', borderRadius: '8px' }} />
                    <h4 style={{ fontSize: '13px', margin: '8px 0' }}>{p.name}</h4>
                    <span style={{ fontWeight: 'bold', color: '#6366f1', display: 'block', marginBottom: '8px' }}>{p.price}</span>
                    <button onClick={() => addToCart(p)} style={{ width: '100%', backgroundColor: '#6366f1', color: '#fff', border: 'none', padding: '8px', borderRadius: '6px', fontSize: '12px', fontWeight: 'bold', cursor: 'pointer' }}>
                      Add to Cart
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

      </div>

      {/* Product Details Modal (প্রডাক্ট ডিটেইলস পপ-আপ) */}
      {selectedProduct && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(15, 23, 42, 0.6)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '15px', zIndex: 100 }}>
          <div style={{ backgroundColor: '#fff', borderRadius: '20px', padding: '24px', maxWidth: '420px', width: '100%', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)' }}>
            <img src={selectedProduct.img} alt={selectedProduct.name} style={{ width: '100%', height: '220px', objectFit: 'cover', borderRadius: '12px', marginBottom: '15px' }} />
            <span style={{ fontSize: '11px', color: '#6366f1', fontWeight: 'bold', textTransform: 'uppercase' }}>{selectedProduct.category}</span>
            <h3 style={{ margin: '6px 0', fontSize: '18px', color: '#0f172a' }}>{selectedProduct.name}</h3>
            <p style={{ fontSize: '13px', color: '#64748b', lineHeight: '1.5' }}>{selectedProduct.desc}</p>
            <h3 style={{ color: '#0f172a', fontSize: '20px', margin: '12px 0' }}>{selectedProduct.price}</h3>
            <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
              <button onClick={() => { addToCart(selectedProduct); setSelectedProduct(null); }} style={{ flex: 1, backgroundColor: '#6366f1', color: '#fff', border: 'none', padding: '12px', borderRadius: '10px', fontWeight: 'bold', cursor: 'pointer' }}>
                Add to Cart
              </button>
              <button onClick={() => setSelectedProduct(null)} style={{ backgroundColor: '#f1f5f9', color: '#475569', border: 'none', padding: '12px 18px', borderRadius: '10px', fontWeight: 'bold', cursor: 'pointer' }}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
