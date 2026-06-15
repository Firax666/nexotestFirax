import React from 'react';
import './App.css'; // Make sure this path matches where you saved the CSS file

export default function LandingPage() {
  return (
    <div className="container">
      {/* Navigation */}
      <nav className="navbar">
        <div className="logo">Velocity.</div>
        <div className="nav-links">
          <a href="#features">Features</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <h1>Build something amazing.</h1>
        <p>
          Velocity is the zero-dependency way to launch your ideas faster. 
          Clean code, lightweight structure, and a beautiful UI right out of the box.
        </p>
        <div className="hero-buttons">
          <button className="btn btn-primary">Start for free</button>
          <button className="btn btn-secondary">Read the docs</button>
        </div>
      </header>

      {/* Features Section */}
      <section id="features" className="features">
        <div className="feature-card">
          <div className="feature-icon">⚡</div>
          <h3>Lightning Fast</h3>
          <p>
            No bloated libraries dragging down your load times. Enjoy native performance.
          </p>
        </div>
        
        <div className="feature-card">
          <div className="feature-icon">🛡️</div>
          <h3>Rock Solid</h3>
          <p>
            Built on standard React principles, ensuring maximum stability and predictability.
          </p>
        </div>
        
        <div className="feature-card">
          <div className="feature-icon">🎨</div>
          <h3>Beautifully Simple</h3>
          <p>
            Carefully crafted CSS utilizing modern design principles like soft shadows and flexbox.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Velocity Inc. All rights reserved.</p>
      </footer>
    </div>
  );
}