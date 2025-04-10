import Head from 'next/head';
import Link from 'next/link';
import '../styles/globals.css';

export default function Home() {
  return (
    <div>
      <Head>
        <title>FlyGreen - Sustainable Aviation Made Simple</title>
        <meta name="description" content="Making sustainable aviation fuel accessible to general aviation, reducing emissions flight by flight." />
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

      <main>
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-content">
            <h1>Enabling Sustainable Aviation</h1>
            <p>Making sustainable aviation fuel accessible to general aviation, reducing emissions flight by flight.</p>
            <Link href="/how-it-works" className="btn-primary">Join the Movement</Link>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="section">
          <div className="container">
            <h2>How FlyGreen Works</h2>
            <div className="step-cards">
              <div className="step-card">
                <div className="step-number">01</div>
                <h3>Select Flight</h3>
                <p>Connect your digital logbook or manually enter your flight details to calculate emissions.</p>
              </div>
              <div className="step-card">
                <div className="step-number">02</div>
                <h3>Choose Compensation</h3>
                <p>Select between SAF or climate initiatives and customize your emissions reduction percentage.</p>
              </div>
              <div className="step-card">
                <div className="step-number">03</div>
                <h3>Receive Certificate</h3>
                <p>Get a blockchain-verified certificate confirming your CO₂ savings and environmental impact.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Section */}
        <section className="section bg-dark">
          <div className="container">
            <h2>Revolutionary Technology</h2>
            <p style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3rem auto' }}>
              FlyGreen leverages the Book-and-Claim concept and blockchain technology to make SAF accessible worldwide. 
              This approach ensures transparency, traceability, and prevents the double counting of emission credits.
            </p>
          </div>
        </section>
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
