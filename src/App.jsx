import React, { useState } from 'react';

export default function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [cartCount, setCartCount] = useState(0);

  const categories = ['All', 'Premium Audio', 'Smartphones & Tablets', 'Wearables'];

  const products = [
    { id: 1, name: 'Precision Titanium Watch', category: 'Wearables', price: '$299', img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500' },
    { id: 2, name: 'Wireless Headphones', category: 'Premium Audio', price: '$150', img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500' },
    { id: 3, name: 'Flagship Smartphone', category: 'Smartphones & Tablets', price: '$899', img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500' },
    { id: 4, name: 'Leather Travel Bag', category: 'Wearables', price: '$120', img: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500' }
  ];

  const filteredProducts = products.filter(p => {
    const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div style={{ fontFamily: 'system-ui, -apple-system, sans-serif', backgroundColor: '#f8fafc', minHeight: '100vh', margin: 0 }}>
      {/* Top Navbar */}
      <nav style={{ backgroundColor: '#ffffff', borderBottom: '1px solid #e2e8f0', padding: '12px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ backgroundColor: '#6366f1', color: '#fff', padding: '6px 12px', borderRadius: '8px', fontWeight: 'bold' }}>E</div>
          <div>
            <h3 style={{ margin: 0, fontSize: '18px', color: '#0f172a' }}>E - SHOP</h3>
            <span style={{ fontSize: '10px', color: '#64748b', letterSpacing: '1px' }}>MODERN COMMERCE</span>
          </div>
        </div>

        {/* Search Bar */}
        <div style={{ flex: '1', maxWidth: '400px', margin: '0 20px' }}>
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ width: '100%', padding: '8px 16px', borderRadius: '20px', border: '1px solid #cbd5e1', outline: 'none', backgroundColor: '#f1f5f9' }}
          />
        </div>

        {/* Cart & Icons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <span style={{ cursor: 'pointer', fontSize: '18px' }}>❤️</span>
          <div style={{ position: 'relative', cursor: 'pointer' }}>
            <span style={{ fontSize: '20px' }}>🛍️</span>
            {cartCount > 0 && (
              <span style={{ position: 'absolute', top: '-5px', right: '-8px', backgroundColor: '#ef4444', color: '#fff', fontSize: '10px', borderRadius: '50%', padding: '2px 6px' }}>{cartCount}</span>
            )}
          </div>
        </div>
      </nav>

      {/* Hero Banner */}
      <div style={{ margin: '20px', padding: '40px 20px', borderRadius: '16px', background: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)', color: '#fff', textAlign: 'center' }}>
        <span style={{ fontSize: '12px', letterSpacing: '2px', backgroundColor: '#4338ca', padding: '4px 12px', borderRadius: '12px' }}>FEATURED COLLECTION</span>
        <h1 style={{ fontSize: '24px', margin: '15px 0 10px' }}>Precision Engineered for Daily Excellence</h1>
        <p style={{ color: '#93c5fd', fontSize: '14px', maxWidth: '500px', margin: '0 auto 20px' }}>From aircraft-grade titanium watches to handcrafted leather goods, elevate every moment.</p>
        <button style={{ backgroundColor: '#6366f1', color: '#fff', border: 'none', padding: '10px 24px', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' }}>Explore Wearables →</button>
      </div>

      {/* Category Filter */}
      <div style={{ padding: '0 20px', marginBottom: '20px' }}>
        <h4 style={{ color: '#64748b', fontSize: '12px', letterSpacing: '1px', marginBottom: '10px' }}>CURATED COLLECTIONS</h4>
        <div style={{ display: 'flex', gap: '10px', overflowX: 'auto' }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              style={{
                padding: '8px 16px',
                borderRadius: '20px',
                border: 'none',
                backgroundColor: selectedCategory === cat ? '#6366f1' : '#e2e8f0',
                color: selectedCategory === cat ? '#fff' : '#334155',
                fontWeight: '500',
                cursor: 'pointer',
                whiteSpace: 'nowrap'
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div style={{ padding: '0 20px 40px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: '15px' }}>
          {filteredProducts.map((p) => (
            <div key={p.id} style={{ backgroundColor: '#fff', borderRadius: '12px', border: '1px solid #f1f5f9', overflow: 'hidden', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
              <img src={p.img} alt={p.name} style={{ width: '100%', height: '140px', objectFit: 'cover' }} />
              <div style={{ padding: '12px' }}>
                <span style={{ fontSize: '10px', color: '#6366f1', fontWeight: 'bold' }}>{p.category}</span>
                <h4 style={{ fontSize: '14px', margin: '4px 0 8px', color: '#0f172a', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{p.name}</h4>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontWeight: 'bold', color: '#0f172a' }}>{p.price}</span>
                  <button onClick={() => setCartCount(cartCount + 1)} style={{ backgroundColor: '#6366f1', color: '#fff', border: 'none', padding: '6px 10px', borderRadius: '6px', fontSize: '12px', cursor: 'pointer' }}>+ Add</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
