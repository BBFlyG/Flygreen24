export const metadata = {
  title: 'Technology - FlyGreen',
  description: 'Learn about the innovative technology behind FlyGreen that makes sustainable aviation accessible to everyone.',
};

export default function Technology() {
  return (
    <main>
      {/* Page Hero Section */}
      <section className="page-hero">
        <div className="container">
          <h1>Our Technology</h1>
          <p>Innovative solutions for sustainable aviation</p>
        </div>
      </section>

      {/* Tech Overview Section */}
      <section className="section">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2>Revolutionary Approach to Sustainable Aviation</h2>
            <p className="text-lg">
              FlyGreen combines blockchain technology with the Book-and-Claim concept to make sustainable aviation fuel 
              accessible to everyone, regardless of location or aircraft type. Our platform ensures transparency, 
              traceability, and prevents double counting of emission credits.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative h-[450px] bg-gray-800 rounded-lg flex items-center justify-center mb-4">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full flex items-center justify-center border-2 border-white cursor-pointer">
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 3L19 12L5 21V3Z" fill="white"/>
                  </svg>
                </div>
              </div>
            </div>
            <p className="text-center text-gray-400 italic">See how our technology is transforming sustainable aviation</p>
          </div>
        </div>
      </section>

      {/* Book-and-Claim Section */}
      <section className="section bg-gray-900">
        <div className="container">
          <h2>Book-and-Claim Concept</h2>
          <div className="flex flex-col lg:flex-row items-center gap-16 mt-12">
            <div className="lg:w-1/2">
              <p className="mb-6">
                The Book-and-Claim concept decouples sustainability attributes from physical fuel flow, 
                enabling flexibility and scalability in sustainability efforts.
              </p>
              
              <h3 className="mb-6">How Book-and-Claim Works:</h3>
              <ol className="space-y-8">
                <li className="flex gap-6">
                  <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 bg-[#00E676] text-black rounded-full font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="text-[#00E676] mb-2">Booking</h4>
                    <p>You purchase the environmental attributes of SAF without physically refueling your aircraft with it.</p>
                  </div>
                </li>
                <li className="flex gap-6">
                  <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 bg-[#00E676] text-black rounded-full font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="text-[#00E676] mb-2">SAF Introduction</h4>
                    <p>The equivalent amount of SAF is introduced into the aviation fuel system at a location where it's available.</p>
                  </div>
                </li>
                <li className="flex gap-6">
                  <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 bg-[#00E676] text-black rounded-full font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="text-[#00E676] mb-2">Claiming</h4>
                    <p>You claim the environmental benefits of the SAF, reducing your flight's carbon footprint.</p>
                  </div>
                </li>
                <li className="flex gap-6">
                  <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 bg-[#00E676] text-black rounded-full font-bold">
                    4
                  </div>
                  <div>
                    <h4 className="text-[#00E676] mb-2">Verification</h4>
                    <p>The entire process is verified and recorded on our blockchain system, ensuring transparency and preventing double counting.</p>
                  </div>
                </li>
              </ol>
            </div>
            <div className="lg:w-1/2 h-[400px] bg-gray-800 rounded-lg flex items-center justify-center text-gray-600">
              Book and Claim Concept Diagram
            </div>
          </div>
        </div>
      </section>

      {/* Blockchain Section */}
      <section className="section">
        <div className="container">
          <h2>Blockchain Technology</h2>
          <div className="flex flex-col lg:flex-row items-center gap-16 mt-12">
            <div className="lg:w-1/2 h-[400px] bg-gray-800 rounded-lg flex items-center justify-center text-gray-600 lg:order-1 order-2">
              Blockchain Technology Visualization
            </div>
            <div className="lg:w-1/2 lg:order-2 order-1">
              <p className="mb-8">
                Our platform leverages blockchain technology to create a decentralized system for automated carbon credit management. 
                This ensures that all emission certificates are unique, traceable, and cannot be double-counted.
              </p>
              
              <h3 className="mb-6">Key Benefits:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-800 p-6 rounded-lg">
                  <div className="text-[#00E676] mb-4">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 5L5 12.5L20 20L35 12.5L20 5Z" stroke="#00E676" strokeWidth="2"/>
                      <path d="M5 27.5L20 35L35 27.5" stroke="#00E676" strokeWidth="2"/>
                      <path d="M5 20L20 27.5L35 20" stroke="#00E676" strokeWidth="2"/>
                    </svg>
                  </div>
                  <h4 className="text-[#00E676] mb-2">Transparency</h4>
                  <p>All transactions are recorded on a public ledger, ensuring complete transparency in the sustainability process.</p>
                </div>
                <div className="bg-gray-800 p-6 rounded-lg">
                  <div className="text-[#00E676] mb-4">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M30 15L17.5 27.5L10 20" stroke="#00E676" strokeWidth="2"/>
                      <circle cx="20" cy="20" r="15" stroke="#00E676" strokeWidth="2"/>
                    </svg>
                  </div>
                  <h4 className="text-[#00E676] mb-2">Traceability</h4>
                  <p>Every certificate can be traced back to its origin, providing a complete audit trail of the sustainability journey.</p>
                </div>
                <div className="bg-gray-800 p-6 rounded-lg">
                  <div className="text-[#00E676] mb-4">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="10" y="15" width="20" height="15" rx="2" stroke="#00E676" strokeWidth="2"/>
                      <path d="M15 15V12.5C15 9.73858 17.2386 7.5 20 7.5C22.7614 7.5 25 9.73858 25 12.5V15" stroke="#00E676" strokeWidth="2"/>
                      <circle cx="20" cy="22.5" r="2.5" stroke="#00E676" strokeWidth="2"/>
                    </svg>
                  </div>
                  <h4 className="text-[#00E676] mb-2">Security</h4>
                  <p>Advanced cryptography ensures that all transactions are secure and cannot be tampered with.</p>
                </div>
                <div className="bg-gray-800 p-6 rounded-lg">
                  <div className="text-[#00E676] mb-4">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.5 20H27.5" stroke="#00E676" strokeWidth="2"/>
                      <path d="M12.5 27.5H27.5" stroke="#00E676" strokeWidth="2"/>
                      <path d="M12.5 12.5H27.5" stroke="#00E676" strokeWidth="2"/>
                      <rect x="7.5" y="7.5" width="25" height="25" rx="2" stroke="#00E676" strokeWidth="2"/>
                    </svg>
                  </div>
                  <h4 className="text-[#00E676] mb-2">Automation</h4>
                  <p>Smart contracts automate the verification and issuance of certificates, reducing administrative overhead.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SAF Info Section */}
      <section className="section bg-gray-900">
        <div className="container">
          <h2>Sustainable Aviation Fuel (SAF)</h2>
          <div className="flex flex-col lg:flex-row items-center gap-16 mt-12">
            <div className="lg:w-1/2">
              <p className="mb-6">
                Sustainable Aviation Fuel (SAF) is produced from waste materials or renewable resources and is the most promising 
                tool for significantly reducing emissions up to 80%! It's a direct replacement for conventional jet fuel but with 
                a much lower carbon footprint.
              </p>
              
              <h3 className="mb-6">SAF Benefits:</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <div className="text-[#00E676] mt-1 flex-shrink-0">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#00E676" strokeWidth="2"/>
                      <path d="M7.5 12L10.5 15L16.5 9" stroke="#00E676" strokeWidth="2"/>
                    </svg>
                  </div>
                  <span>Up to 80% reduction in carbon emissions compared to conventional fuel</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="text-[#00E676] mt-1 flex-shrink-0">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#00E676" strokeWidth="2"/>
                      <path d="M7.5 12L10.5 15L16.5 9" stroke="#00E676" strokeWidth="2"/>
                    </svg>
                  </div>
                  <span>Drop-in replacement for conventional jet fuel, requiring no engine modifications</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="text-[#00E676] mt-1 flex-shrink-0">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#00E676" strokeWidth="2"/>
                      <path d="M7.5 12L10.5 15L16.5 9" stroke="#00E676" strokeWidth="2"/>
                    </svg>
                  </div>
                  <span>Produced from sustainable feedstocks like waste oils, agricultural residues, and algae</span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="text-[#00E676] mt-1 flex-shrink-0">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#00E676" strokeWidth="2"/>
                      <path d="M7.5 12L10.5 15L16.5 9" stroke="#00E676" strokeWidth="2"/>
                    </svg>
                  </div>
                  <span>Reduced particulate matter and sulfur emissions, improving air quality</span>
                </li>
              </ul>
            </div>
            <div className="lg:w-1/2 h-[400px] bg-gray-800 rounded-lg flex items-center justify-center text-gray-600">
              Sustainable Aviation Fuel Production
            </div>
          </div>
        </div>
      </section>

      {/* Tech Specs Section */}
      <section className="section">
        <div className="container">
          <h2>Technical Specifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="bg-gray-800 p-8 rounded-lg">
              <h3 className="text-center text-[#00E676] mb-6">Certification Standards</h3>
              <ul className="space-y-4">
                <li className="py-3 border-b border-gray-700">ASTM D7566 compliant</li>
                <li className="py-3 border-b border-gray-700">CORSIA eligible</li>
                <li className="py-3 border-b border-gray-700">EU RED II compliant</li>
                <li className="py-3">ISO 14064 certified carbon accounting</li>
              </ul>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg">
              <h3 className="text-center text-[#00E676] mb-6">Blockchain Implementation</h3>
              <ul className="space-y-4">
                <li className="py-3 border-b border-gray-700">Ethereum-based smart contracts</li>
                <li className="py-3 border-b border-gray-700">ERC-721 non-fungible tokens for certificates</li>
                <li className="py-3 border-b border-gray-700">Proof of Authority consensus mechanism</li>
                <li className="py-3">IPFS for decentralized data storage</li>
              </ul>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg">
              <h3 className="text-center text-[#00E676] mb-6">Integration Capabilities</h3>
              <ul className="space-y-4">
                <li className="py-3 border-b border-gray-700">API connections to flight logging systems</li>
                <li className="py-3 border-b border-gray-700">OpenAPI 3.0 specification</li>
                <li className="py-3 border-b border-gray-700">OAuth 2.0 authentication</li>
                <li className="py-3">WebSocket support for real-time updates</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gray-900">
        <div className="container text-center">
          <h2>Experience Our Technology Firsthand</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Join the FlyGreen platform and see how our innovative technology can help you make your flights sustainable.
          </p>
          <button className="btn-primary">Get Started Now</button>
        </div>
      </section>
    </main>
  );
}
