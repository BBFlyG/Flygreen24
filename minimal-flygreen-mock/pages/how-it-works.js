import Head from 'next/head';
import Link from 'next/link';
import '../styles/globals.css';

export default function HowItWorks() {
  return (
    <div>
      <Head>
        <title>How It Works - FlyGreen</title>
        <meta name="description" content="Learn how FlyGreen makes sustainable aviation accessible through a simple, transparent process." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className="navbar">
        <div className="container">
          <div className="logo">
            <svg width="30" height="30" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M35 20C35 28.2843 28.2843 35 20 35C11.7157 35 5 28.2843 5 20C5 11.7157 11.7157 5 20 5C28.2843 5 35 11.7157 35 20Z" stroke="white" strokeWidth="2"/>
              <path d="M30 20L15 13V19L22 20L15 21V27L30 20Z" fill="#00E676"/>
            </svg>
            <span>FlyGreen</span>
          </div>
          <div className="nav-links">
            <Link href="/">Home</Link>
            <Link href="/how-it-works">How It Works</Link>
            <Link href="/technology">Technology</Link>
          </div>
        </div>
      </nav>

      <main style={{ paddingTop: '80px' }}>
        <div className="container">
          <h1 style={{ fontSize: '3rem', textAlign: 'center', marginBottom: '2rem' }}>How It Works</h1>
          <p style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3rem auto' }}>
            Making sustainable aviation accessible through a simple, transparent process
          </p>
          
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2>Sustainable Flying in Three Simple Steps</h2>
            
            <div style={{ marginTop: '3rem' }}>
              <div style={{ marginBottom: '3rem' }}>
                <h3 style={{ color: '#00E676' }}>1. Select Your Flight</h3>
                <p>
                  Connect your digital logbook or manually enter your flight details. Our system automatically 
                  calculates your emissions based on aircraft type, route, and fuel consumption.
                </p>
              </div>
              
              <div style={{ marginBottom: '3rem' }}>
                <h3 style={{ color: '#00E676' }}>2. Choose Your Compensation Method</h3>
                <p>
                  Select between Sustainable Aviation Fuel (SAF) or climate protection initiatives. You can flexibly 
                  select the desired proportion, allowing you to customize your emissions reduction according to your budget.
                </p>
              </div>
              
              <div style={{ marginBottom: '3rem' }}>
                <h3 style={{ color: '#00E676' }}>3. Receive Your Certificate</h3>
                <p>
                  After completing your purchase, you will receive an official emissions certificate confirming your CO₂ savings. 
                  This certificate is fully transparent and traceable through our blockchain system.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              <svg width="30" height="30" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M35 20C35 28.2843 28.2843 35 20 35C11.7157 35 5 28.2843 5 20C5 11.7157 11.7157 5 20 5C28.2843 5 35 11.7157 35 20Z" stroke="white" strokeWidth="2"/>
                <path d="M30 20L15 13V19L22 20L15 21V27L30 20Z" fill="#00E676"/>
              </svg>
              <span>FlyGreen</span>
            </div>
            <p>Sustainable Aviation Made Simple</p>
            <div className="footer-links">
              <Link href="/">Home</Link>
              <Link href="/how-it-works">How It Works</Link>
              <Link href="/technology">Technology</Link>
              <Link href="/impact">Impact</Link>
              <Link href="/community">Community</Link>
            </div>
            <div className="footer-copyright">
              © 2025 FlyGreen. All Rights Reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
