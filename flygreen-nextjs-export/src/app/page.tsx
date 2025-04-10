import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Enabling Sustainable Aviation</h1>
          <p>Making sustainable aviation fuel accessible to general aviation, reducing emissions flight by flight.</p>
          <Link href="/how-it-works" className="btn-primary">Join the Movement</Link>
        </div>
      </section>

      {/* Problem Section */}
      <section className="section bg-gray-900">
        <div className="container">
          <h2>The Challenge</h2>
          <div className="flex flex-col md:flex-row justify-center gap-16 my-12">
            <div className="stat-card">
              <div className="stat-number">70<span className="text-4xl">%</span></div>
              <p>Of all aircrafts will fail to meet the industries zero-emission targets</p>
            </div>
            <div className="stat-card">
              <div className="stat-number">65<span className="text-4xl">%</span></div>
              <p>of emissions reductions will be from the use of Sustainable Aviation Fuel</p>
            </div>
          </div>
          <p className="max-w-3xl mx-auto text-center text-lg">
            As air travel expands, so do its emissions, making the need for cleaner, more sustainable solutions more urgent than ever. 
            To align with the Paris Agreement's 1.5°C target, the aviation industry must revolutionize how aircraft are powered.
          </p>
        </div>
      </section>

      {/* Solution Section */}
      <section className="section">
        <div className="container">
          <h2>How FlyGreen Works</h2>
          <div className="flex flex-col md:flex-row justify-center gap-8 mt-12">
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
      <section className="section bg-gray-900">
        <div className="container">
          <h2>Revolutionary Technology</h2>
          <div className="flex flex-col lg:flex-row items-center gap-16 mt-12">
            <div className="lg:w-1/2 h-[400px] relative bg-gray-800 rounded-lg overflow-hidden">
              {/* Replace with actual image when available */}
              <div className="absolute inset-0 flex items-center justify-center text-gray-600">
                Technology Image Placeholder
              </div>
            </div>
            <div className="lg:w-1/2">
              <h3>Book-and-Claim with Blockchain</h3>
              <p className="mb-6">
                FlyGreen leverages the Book-and-Claim concept and blockchain technology to make SAF accessible worldwide. 
                This approach ensures transparency, traceability, and prevents the double counting of emission credits.
              </p>
              <div className="space-y-4">
                <div className="tech-feature">
                  <div className="text-[#00E676]">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#00E676" strokeWidth="2"/>
                      <path d="M7.5 12L10.5 15L16.5 9" stroke="#00E676" strokeWidth="2"/>
                    </svg>
                  </div>
                  <span>Emissions Claim Without Refueling</span>
                </div>
                <div className="tech-feature">
                  <div className="text-[#00E676]">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#00E676" strokeWidth="2"/>
                      <path d="M7.5 12L10.5 15L16.5 9" stroke="#00E676" strokeWidth="2"/>
                    </svg>
                  </div>
                  <span>Traceable Emission Certificates</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="section">
        <div className="container">
          <h2>Our Collective Impact</h2>
          <div className="flex flex-col md:flex-row justify-center gap-16 mt-12">
            <div className="stat-card">
              <div className="stat-number">4.5<span className="text-4xl">t</span></div>
              <p>CO₂ emissions offset through climate-friendly projects and SAF</p>
            </div>
            <div className="stat-card">
              <div className="stat-number">465.5<span className="text-4xl">kg</span></div>
              <p>of eco-conscious sustainable aviation fuel supplied</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gray-900">
        <div className="container">
          <h2>Join the FlyGreen Community</h2>
          <p className="max-w-2xl mx-auto text-center mb-8">
            Become part of the movement for sustainable aviation. Join the FlyGreen community to stay informed, 
            help shape our platform, and enjoy exclusive benefits.
          </p>
          <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
            <input 
              type="email" 
              placeholder="Your Email Address" 
              className="flex-1 px-4 py-3 rounded-md bg-gray-800 text-white"
            />
            <button type="submit" className="btn-primary whitespace-nowrap">Join Now</button>
          </form>
        </div>
      </section>

      {/* Partners Section */}
      <section className="section">
        <div className="container">
          <h2>Our Partners</h2>
          <div className="flex flex-wrap justify-center gap-8 mt-12">
            <div className="w-[200px] h-[100px] bg-gray-800 rounded-lg flex items-center justify-center text-gray-400">
              Aero-Club of Switzerland
            </div>
            <div className="w-[200px] h-[100px] bg-gray-800 rounded-lg flex items-center justify-center text-gray-400">
              Partner 2
            </div>
            <div className="w-[200px] h-[100px] bg-gray-800 rounded-lg flex items-center justify-center text-gray-400">
              Partner 3
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
