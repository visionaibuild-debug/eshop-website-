import React from 'react';

export default function App() {
  const products = [
    { id: 1, name: 'Wireless Headphones', price: '৳ ২৫০০', img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500' },
    { id: 2, name: 'Smart Watch', price: '৳ ৩২০০', img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500' },
    { id: 3, name: 'Running Shoes', price: '৳ ১৮০০', img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500' },
    { id: 4, name: 'Backpack', price: '৳ ১৫০০', img: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500' },
  ];

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f4f4f9', minHeight: '100vh', margin: 0, paddingBottom: '40px' }}>
      {/* Header */}
      <header style={{ backgroundColor: '#111827', color: '#fff', padding: '15px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2 style={{ margin: 0 }}>🛍️ EasyShop</h2>
        <span>Cart (0)</span>
      </header>

      {/* Hero Banner */}
      <div style={{ textAlign: 'center', padding: '30px 10px', backgroundColor: '#e5e7eb' }}>
        <h1 style={{ margin: 0, color: '#1f2937' }}>Welcome to EasyShop</h1>
        <p style={{ color: '#4b5563' }}>Find the best products at the best price!</p>
      </div>

      {/* Product List */}
      <div style={{ padding: '20px', maxWidth: '1000px', margin: '0 auto' }}>
        <h2 style={{ color: '#111827' }}>Featured Products</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
          {products.map((p) => (
            <div key={p.id} style={{ backgroundColor: '#fff', borderRadius: '8px', padding: '15px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)', textAlign: 'center' }}>
              <img src={p.img} alt={p.name} style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '6px' }} />
              <h3 style={{ fontSize: '18px', margin: '10px 0 5px' }}>{p.name}</h3>
              <p style={{ color: '#2563eb', fontWeight: 'bold', fontSize: '16px', margin: '5px 0 15px' }}>{p.price}</p>
              <button style={{ backgroundColor: '#2563eb', color: '#fff', border: 'none', padding: '10px 15px', borderRadius: '5px', cursor: 'pointer', width: '100%' }}>
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
