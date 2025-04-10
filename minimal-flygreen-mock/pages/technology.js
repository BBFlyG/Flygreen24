import Head from 'next/head';
import Link from 'next/link';
import '../styles/globals.css';

export default function Technology() {
  return (
    <div>
      <Head>
        <title>Technology - FlyGreen</title>
        <meta name="description" content="Learn about the innovative technology behind FlyGreen that makes sustainable aviation accessible to everyone." />
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
          <h1 style={{ fontSize: '3rem', textAlign: 'center', marginBottom: '2rem' }}>Our Technology</h1>
          <p style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3rem auto' }}>
            Innovative solutions for sustainable aviation
          </p>
          
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2>Revolutionary Approach to Sustainable Aviation</h2>
            <p style={{ marginBottom: '2rem' }}>
              FlyGreen combines blockchain technology with the Book-and-Claim concept to make sustainable aviation fuel 
              accessible to everyone, regardless of location or aircraft type. Our platform ensures transparency, 
              traceability, and prevents double counting of emission credits.
            </p>
            
            <div style={{ marginTop: '3rem' }}>
              <h2>Book-and-Claim Concept</h2>
              <p style={{ marginBottom: '2rem' }}>
                The Book-and-Claim concept decouples sustainability attributes from physical fuel flow, 
                enabling flexibility and scalability in sustainability efforts.
              </p>
              
              <h3 style={{ color: '#00E676', marginTop: '2rem' }}>How Book-and-Claim Works:</h3>
              <div style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <div style={{ backgroundColor: '#00E676', color: 'black', borderRadius: '50%', width: '30px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>1</div>
                <div>
                  <h4 style={{ margin: '0 0 0.5rem 0' }}>Booking</h4>
                  <p>You purchase the environmental attributes of SAF without physically refueling your aircraft with it.</p>
                </div>
              </div>
              
              <div style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <div style={{ backgroundColor: '#00E676', color: 'black', borderRadius: '50%', width: '30px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>2</div>
                <div>
                  <h4 style={{ margin: '0 0 0.5rem 0' }}>SAF Introduction</h4>
                  <p>The equivalent amount of SAF is introduced into the aviation fuel system at a location where it's available.</p>
                </div>
              </div>
              
              <div style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <div style={{ backgroundColor: '#00E676', color: 'black', borderRadius: '50%', width: '30px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>3</div>
                <div>
                  <h4 style={{ margin: '0 0 0.5rem 0' }}>Claiming</h4>
                  <p>You claim the environmental benefits of the SAF, reducing your flight's carbon footprint.</p>
                </div>
              </div>
              
              <div style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <div style={{ backgroundColor: '#00E676', color: 'black', borderRadius: '50%', width: '30px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>4</div>
                <div>
                  <h4 style={{ margin: '0 0 0.5rem 0' }}>Verification</h4>
                  <p>The entire process is verified and recorded on our blockchain system, ensuring transparency and preventing double counting.</p>
                </div>
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
