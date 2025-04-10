export const metadata = {
  title: 'How It Works - FlyGreen',
  description: 'Learn how FlyGreen makes sustainable aviation accessible through a simple, transparent process.',
};

export default function HowItWorks() {
  return (
    <main>
      {/* Page Hero Section */}
      <section className="page-hero">
        <div className="container">
          <h1>How It Works</h1>
          <p>Making sustainable aviation accessible through a simple, transparent process</p>
        </div>
      </section>

      {/* Process Section */}
      <section className="section">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2>Sustainable Flying in Three Simple Steps</h2>
            <p className="text-lg">
              FlyGreen combines the Book-and-Claim concept with blockchain technology to make sustainable 
              aviation fuel accessible to everyone, regardless of where you fly.
            </p>
          </div>
          
          <div className="space-y-24">
            {/* Step 1 */}
            <div className="relative">
              <div className="absolute -top-8 -left-8 text-6xl font-black text-[#00E676] opacity-20 font-mono z-0">01</div>
              <div className="relative z-10">
                <h3>Select Your Flight</h3>
                <p className="mb-8">
                  Connect your digital logbook or manually enter your flight details. Our system automatically 
                  calculates your emissions based on aircraft type, route, and fuel consumption.
                </p>
                <div className="h-[300px] bg-gray-800 rounded-lg mb-8 flex items-center justify-center text-gray-600">
                  Flight Selection Interface
                </div>
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="flex items-start gap-2">
                    <div className="text-[#00E676] mt-1">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#00E676" strokeWidth="2"/>
                        <path d="M7.5 12L10.5 15L16.5 9" stroke="#00E676" strokeWidth="2"/>
                      </svg>
                    </div>
                    <span>Automatic logbook connection</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="text-[#00E676] mt-1">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#00E676" strokeWidth="2"/>
                        <path d="M7.5 12L10.5 15L16.5 9" stroke="#00E676" strokeWidth="2"/>
                      </svg>
                    </div>
                    <span>Precise emissions calculation</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Step 2 */}
            <div className="relative">
              <div className="absolute -top-8 -left-8 text-6xl font-black text-[#00E676] opacity-20 font-mono z-0">02</div>
              <div className="relative z-10">
                <h3>Choose Your Compensation Method</h3>
                <p className="mb-8">
                  Select between Sustainable Aviation Fuel (SAF) or climate protection initiatives. You can flexibly 
                  select the desired proportion, allowing you to customize your emissions reduction according to your budget.
                </p>
                <div className="h-[300px] bg-gray-800 rounded-lg mb-8 flex items-center justify-center text-gray-600">
                  Compensation Selection Interface
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-gray-800 p-6 rounded-lg">
                    <h4 className="text-[#00E676] mb-4">Sustainable Aviation Fuel</h4>
                    <p>Direct investment in SAF production and distribution, reducing aviation's carbon footprint at the source.</p>
                  </div>
                  <div className="bg-gray-800 p-6 rounded-lg">
                    <h4 className="text-[#00E676] mb-4">Climate Protection Initiatives</h4>
                    <p>Support verified climate projects through myclimate that reduce emissions and promote sustainable development.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Step 3 */}
            <div className="relative">
              <div className="absolute -top-8 -left-8 text-6xl font-black text-[#00E676] opacity-20 font-mono z-0">03</div>
              <div className="relative z-10">
                <h3>Receive Your Certificate</h3>
                <p className="mb-8">
                  After completing your purchase, you will receive an official emissions certificate confirming your CO₂ savings. 
                  This certificate is fully transparent and traceable through our blockchain system.
                </p>
                <div className="h-[300px] bg-gray-800 rounded-lg mb-8 flex items-center justify-center text-gray-600">
                  Certificate Display
                </div>
                <div className="flex flex-wrap gap-8">
                  <div className="flex items-start gap-2">
                    <div className="text-[#00E676] mt-1">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#00E676" strokeWidth="2"/>
                        <path d="M7.5 12L10.5 15L16.5 9" stroke="#00E676" strokeWidth="2"/>
                      </svg>
                    </div>
                    <span>Blockchain-verified</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="text-[#00E676] mt-1">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#00E676" strokeWidth="2"/>
                        <path d="M7.5 12L10.5 15L16.5 9" stroke="#00E676" strokeWidth="2"/>
                      </svg>
                    </div>
                    <span>Shareable on social media</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="text-[#00E676] mt-1">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#00E676" strokeWidth="2"/>
                        <path d="M7.5 12L10.5 15L16.5 9" stroke="#00E676" strokeWidth="2"/>
                      </svg>
                    </div>
                    <span>Detailed emissions data</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="section bg-gray-900">
        <div className="container">
          <h2>Calculate Your Flight Emissions</h2>
          <p className="max-w-2xl mx-auto text-center mb-12">
            Use our calculator to estimate the emissions of your flight and see how you can make a difference.
          </p>
          
          <div className="flex flex-col lg:flex-row gap-12 max-w-5xl mx-auto">
            <div className="flex-1 bg-gray-800 p-8 rounded-lg">
              <div className="space-y-6">
                <div>
                  <label className="block mb-2 font-semibold">Aircraft Type</label>
                  <select className="w-full p-3 rounded-md bg-gray-900 text-white border border-gray-700">
                    <option>Select aircraft type</option>
                    <option>SEP (Single Engine Piston)</option>
                    <option>MEP (Multi Engine Piston)</option>
                    <option>TMG (Touring Motor Glider)</option>
                  </select>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block mb-2 font-semibold">From</label>
                    <input 
                      type="text" 
                      placeholder="Departure airport" 
                      className="w-full p-3 rounded-md bg-gray-900 text-white border border-gray-700"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 font-semibold">To</label>
                    <input 
                      type="text" 
                      placeholder="Arrival airport" 
                      className="w-full p-3 rounded-md bg-gray-900 text-white border border-gray-700"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block mb-2 font-semibold">Flight Duration</label>
                  <input 
                    type="text" 
                    placeholder="Hours" 
                    className="w-full p-3 rounded-md bg-gray-900 text-white border border-gray-700"
                  />
                </div>
                
                <button className="btn-primary w-full">Calculate Emissions</button>
              </div>
            </div>
            
            <div className="flex-1 bg-gray-800 p-8 rounded-lg flex flex-col">
              <div>
                <h3 className="mb-6">Estimated Emissions</h3>
              </div>
              
              <div className="flex-1 space-y-4">
                <div className="flex justify-between py-4 border-b border-gray-700">
                  <span>CO₂ Emissions:</span>
                  <span className="font-bold text-[#00E676]">28.4 kg</span>
                </div>
                <div className="flex justify-between py-4 border-b border-gray-700">
                  <span>Compensation with SAF:</span>
                  <span className="font-bold text-[#00E676]">€15.05</span>
                </div>
                <div className="flex justify-between py-4 border-b border-gray-700">
                  <span>Emissions Reduction:</span>
                  <span className="font-bold text-[#00E676]">22.15 kg (75%)</span>
                </div>
              </div>
              
              <button className="btn-primary mt-6">Compensate Now</button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section">
        <div className="container">
          <h2>Frequently Asked Questions</h2>
          
          <div className="max-w-3xl mx-auto mt-12 space-y-6">
            <div className="border-b border-gray-800 pb-6">
              <div className="flex justify-between items-center cursor-pointer">
                <h3 className="text-xl">What is Sustainable Aviation Fuel (SAF)?</h3>
                <div className="text-2xl font-bold text-[#00E676]">+</div>
              </div>
              <div className="mt-4 pl-4 border-l-2 border-[#00E676]">
                <p>
                  Sustainable Aviation Fuel (SAF) is produced from waste materials or renewable resources and is the most promising 
                  tool for significantly reducing emissions up to 80%! It's a direct replacement for conventional jet fuel but with 
                  a much lower carbon footprint.
                </p>
              </div>
            </div>
            
            <div className="border-b border-gray-800 pb-6">
              <div className="flex justify-between items-center cursor-pointer">
                <h3 className="text-xl">How does the Book-and-Claim concept work?</h3>
                <div className="text-2xl font-bold text-[#00E676]">+</div>
              </div>
              <div className="mt-4 pl-4 border-l-2 border-[#00E676]">
                <p>
                  Book-and-Claim allows you to claim the environmental benefits of SAF without physically using it in your aircraft. 
                  You "book" the SAF, which is then used elsewhere in the aviation system, and you "claim" the environmental benefits. 
                  This approach ensures transparency, traceability, and prevents double counting of emission credits.
                </p>
              </div>
            </div>
            
            <div className="border-b border-gray-800 pb-6">
              <div className="flex justify-between items-center cursor-pointer">
                <h3 className="text-xl">How is blockchain technology used in FlyGreen?</h3>
                <div className="text-2xl font-bold text-[#00E676]">+</div>
              </div>
              <div className="mt-4 pl-4 border-l-2 border-[#00E676]">
                <p>
                  We use blockchain technology to create a decentralized system for automated carbon credit management. 
                  This ensures that all emission certificates are unique, traceable, and cannot be double-counted, 
                  providing complete transparency in the sustainability process.
                </p>
              </div>
            </div>
            
            <div className="border-b border-gray-800 pb-6">
              <div className="flex justify-between items-center cursor-pointer">
                <h3 className="text-xl">Which aircraft types are supported?</h3>
                <div className="text-2xl font-bold text-[#00E676]">+</div>
              </div>
              <div className="mt-4 pl-4 border-l-2 border-[#00E676]">
                <p>
                  Currently, we support aircraft of the TMG, SEP, and MEP classes with conventional combustion engines. 
                  We're continuously working to expand our support for additional aircraft types.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gray-900">
        <div className="container text-center">
          <h2>Ready to Make Your Flights Sustainable?</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Join thousands of pilots who are already making a difference in reducing aviation's carbon footprint.
          </p>
          <button className="btn-primary">Get Started Now</button>
        </div>
      </section>
    </main>
  );
}
