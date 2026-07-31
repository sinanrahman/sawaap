import React from 'react';
import './OnlineBusiness.css';

const BackgroundOrbital = ({ position = 'right' }) => {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      {/* The large background curve */}
      <div
        className={`absolute top-[-20%] bottom-[-20%] w-[150%] md:w-[70%] rounded-[100%] border-[#29CD71]/20 ${position === 'left' ? 'left-[-50%] md:left-[-20%] border-r bg-gradient-to-l' : 'right-[-50%] md:right-[-20%] border-l bg-gradient-to-r'
          } from-transparent to-[#29CD71]/10 opacity-70`}
      ></div>

      {/* The Orbital Ring and Orb */}
      <div className={`absolute top-1/2 -translate-y-1/2 opacity-50 ${position === 'left' ? 'left-[-10%]' : 'right-[-10%]'}`}>
        {/* Glowing Orb */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-[#29CD71] rounded-full mix-blend-multiply filter blur-[100px] opacity-10"></div>

        {/* Orbital Ring Container */}
        <div className="relative w-[300px] md:w-[500px] h-[300px] md:h-[500px] flex items-center justify-center">
          {/* Ring */}
          <div className="absolute inset-0 rounded-full border border-[#29CD71]/20"></div>
          <div className="absolute inset-4 rounded-full border border-[#29CD71]/10 border-dashed"></div>

          {/* Orbiting Icon */}
          <div className="absolute inset-0 animate-spin-slow">
            <div className="absolute top-[-16px] left-1/2 -translate-x-1/2 w-8 h-8 bg-[#B269EC]/10 backdrop-blur-sm border border-[#B269EC]/30 rounded-full flex items-center justify-center text-[#B269EC] shadow-[0_0_15px_rgba(178,105,236,0.5)]">
              <iconify-icon icon="solar:bookmark-linear" width="16"></iconify-icon>
            </div>
            <div className="absolute bottom-[20%] right-[10%] w-2 h-2 bg-[#29CD71]/50 rounded-full shadow-[0_0_8px_#29CD71]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function OnlineBusiness() {
  const [showNavbar, setShowNavbar] = React.useState(true);
  const [lastScrollY, setLastScrollY] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowNavbar(false); // scrolling down
      } else {
        setShowNavbar(true); // scrolling up
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const handleSellerSubmit = (event) => {
    event.preventDefault();
    alert("Thanks—if you're a fit, we'll reply within 1–2 business days.");
  };

  const handleBuyerSubmit = (event) => {
    event.preventDefault();
    alert("You'll receive curated opportunities when available.");
  };

  return (
    <div className="selection:bg-[#29CD71] selection:text-white">
      {/* NAVIGATION */}
      <nav className={`fixed top-0 w-full z-50 transition-transform duration-300 ${showNavbar ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="glass-panel mx-auto max-w-7xl mt-4 mx-4 md:mx-auto rounded-full px-6 py-3 flex items-center justify-between shadow-sm">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <img src="/logo.png" alt="SawAap Logo" className="w-8 h-8 object-contain" />
            <span className="font-sans text-sm tracking-widest font-medium  text-[#1A1A1A]">SawAap</span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-6">
            <a href="#sell" className="text-xs font-medium uppercase tracking-wide text-[#1A1A1A] hover:text-[#29CD71] transition-colors">Home</a>
            <a href="#readiness" className="text-xs font-medium uppercase tracking-wide text-[#1A1A1A] hover:text-[#29CD71] transition-colors">Features</a>
            <a href="#how-it-works" className="text-xs font-medium uppercase tracking-wide text-[#1A1A1A] hover:text-[#29CD71] transition-colors">How It Works</a>
            <a href="#buyers" className="text-xs font-medium uppercase tracking-wide text-[#1A1A1A] hover:text-[#29CD71] transition-colors">About</a>
            <a href="#resources" className="text-xs font-medium uppercase tracking-wide text-[#1A1A1A] hover:text-[#29CD71] transition-colors">Blog</a>
            <a href="#resources" className="text-xs font-medium uppercase tracking-wide text-[#1A1A1A] hover:text-[#29CD71] transition-colors">FAQ</a>
          </div>

          {/* CTA */}
          <a href="#login" className="hidden md:flex items-center gap-2 bg-[#1A1A1A] hover:bg-[#29CD71] text-white px-5 py-2 rounded-full text-xs font-medium transition-all transform hover:scale-105">
            <span>Login</span>
            <iconify-icon icon="solar:login-2-linear"></iconify-icon>
          </a>

          {/* Mobile Menu */}
          <button className="md:hidden text-[#1A1A1A]">
            <iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
          </button>
        </div>
      </nav>

      {/* 1. HERO PAGE */}
      <header className="relative pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden border-b border-gray-100">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
          <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-[#29CD71] rounded-full mix-blend-multiply filter blur-[100px] opacity-10"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-[#29CD71] rounded-full mix-blend-multiply filter blur-[120px] opacity-10"></div>
          <div className="bg-grid-pattern absolute inset-0"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column: Text */}
            <div className="text-left animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-gray-200 text-[#1A1A1A] text-xs font-medium mb-8 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#29CD71]"></span>
                <span>India's First AI Powered 100% Secure</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-[#1A1A1A] mb-8 leading-[1.05]">
                Forward. <br />
                <span className="italic font-light text-[#29CD71]">Save.</span>
                <br />
                <span className="italic font-light text-[#29CD71]">Get it.</span>
              </h1>

              <p className="text-lg md:text-xl text-[#1A1A1A]/70 max-w-lg mb-10 leading-relaxed font-light">
                The smarter way to forward, save and find WhatsApp files instantly with AI.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-start gap-4 mb-8">
                <a href="#readiness" className="w-full sm:w-auto px-8 py-4 bg-[#1A1A1A] text-white rounded-full font-medium transition-all hover:bg-[#29CD71] hover:shadow-lg flex items-center justify-center gap-2">
                  Chat with us
                  <iconify-icon icon="solar:chat-round-line-linear"></iconify-icon>
                </a>
                <a href="#sell" className="w-full sm:w-auto px-8 py-4 bg-white text-[#1A1A1A] border border-gray-200 rounded-full font-medium transition-all hover:bg-gray-50 flex items-center justify-center gap-2">
                  Register Now
                </a>
              </div>

              <div className="flex flex-wrap items-center justify-start gap-6 text-xs text-gray-500 font-medium">
                <div className="flex items-center gap-1.5"><iconify-icon icon="solar:check-circle-linear" className="text-[#B269EC]"></iconify-icon> Now live on WhatsApp</div>
              </div>
            </div>

            {/* Right Column: Images */}
            <div className="relative flex justify-center items-center h-[400px] lg:h-[600px] mt-12 lg:mt-0 w-full">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-[35%] -translate-y-1/2 w-[80%] max-w-[500px] z-0">
                <div className="animate-wipe-in-bottom opacity-0" style={{ animationDelay: '0.2s' }}>
                  <img src="/cloud.png" alt="Cloud Dashboard" className="w-full object-contain opacity-90 hover:scale-105 transition-transform duration-700" />
                </div>
              </div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-[75%] -translate-y-[45%] w-[55%] max-w-[280px] z-10">
                <div className="animate-wipe-in-top opacity-0" style={{ animationDelay: '0.4s' }}>
                  <img src="/mobile.png" alt="Mobile App" className="w-full object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-700 delay-100" />
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 md:mt-24 text-left animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-start gap-4 p-5 rounded-2xl bg-white/70 border border-white/60 shadow-sm backdrop-blur-md hover:bg-white transition-colors">
              <div className="w-12 h-12 rounded-full bg-[#B269EC]/10 flex items-center justify-center text-[#B269EC] shrink-0">
                <iconify-icon icon="solar:shield-check-bold-duotone" width="28"></iconify-icon>
              </div>
              <div>
                <h4 className="font-semibold text-[#1A1A1A] text-sm mb-1">100% Secure</h4>
                <p className="text-xs text-gray-500 leading-relaxed">End-to-end protected</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 rounded-2xl bg-white/70 border border-white/60 shadow-sm backdrop-blur-md hover:bg-white transition-colors">
              <div className="w-12 h-12 rounded-full bg-[#B269EC]/10 flex items-center justify-center text-[#B269EC] shrink-0">
                <iconify-icon icon="solar:cpu-bolt-bold-duotone" width="28"></iconify-icon>
              </div>
              <div>
                <h4 className="font-semibold text-[#1A1A1A] text-sm mb-1">AI Powered</h4>
                <p className="text-xs text-gray-500 leading-relaxed">Smart file organization</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 rounded-2xl bg-white/70 border border-white/60 shadow-sm backdrop-blur-md hover:bg-white transition-colors">
              <div className="w-12 h-12 rounded-full bg-[#B269EC]/10 flex items-center justify-center text-[#B269EC] shrink-0">
                <iconify-icon icon="solar:lock-password-bold-duotone" width="28"></iconify-icon>
              </div>
              <div>
                <h4 className="font-semibold text-[#1A1A1A] text-sm mb-1">Private &amp; Safe</h4>
                <p className="text-xs text-gray-500 leading-relaxed">Only you have access</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* 2. WHAT WE DO (SERVICES) */}
      <section id="services" className="py-24 border-b border-gray-100 bg-white relative overflow-clip">
        <BackgroundOrbital position="right" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-16 gap-6">
            <div className="max-w-xl">
              <span className="section-label text-[#29CD71]">01 — What We Do</span>
              <h2 className="text-3xl md:text-5xl text-[#1A1A1A] mt-2 mb-4">Everything you need, organized beautifully.</h2>
            </div>
          </div>

          {/* Previews */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Service 1 */}
            <div className="group block p-8 bg-[#F8FAFC] rounded-2xl border border-transparent hover:border-gray-200 hover:bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="w-10 h-10 rounded-full bg-[#B269EC]/10 text-[#B269EC] flex items-center justify-center mb-6">
                <iconify-icon icon="solar:folder-with-files-bold-duotone" width="20"></iconify-icon>
              </div>
              <h3 className="text-lg font-medium text-[#1A1A1A] mb-2">Smart File Organization</h3>
              <p className="text-sm text-gray-500 font-light mb-4">AI automatically sorts your WhatsApp files by type, date and size.</p>
            </div>

            {/* Service 2 */}
            <div className="group block p-8 bg-[#F8FAFC] rounded-2xl border border-transparent hover:border-gray-200 hover:bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="w-10 h-10 rounded-full bg-[#B269EC]/10 text-[#B269EC] flex items-center justify-center mb-6">
                <iconify-icon icon="solar:magnifer-bold-duotone" width="20"></iconify-icon>
              </div>
              <h3 className="text-lg font-medium text-[#1A1A1A] mb-2">Instant Search</h3>
              <p className="text-sm text-gray-500 font-light mb-4">Find any file in seconds with powerful AI search technology.</p>
            </div>

            {/* Service 3 */}
            <div className="group block p-8 bg-[#F8FAFC] rounded-2xl border border-transparent hover:border-gray-200 hover:bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="w-10 h-10 rounded-full bg-[#B269EC]/10 text-[#B269EC] flex items-center justify-center mb-6">
                <iconify-icon icon="solar:diskette-bold-duotone" width="20"></iconify-icon>
              </div>
              <h3 className="text-lg font-medium text-[#1A1A1A] mb-2">Save with AI</h3>
              <p className="text-sm text-gray-500 font-light mb-4">Save important files automatically and never lose them again.</p>
            </div>

            {/* Service 4 */}
            <div className="group block p-8 bg-[#F8FAFC] rounded-2xl border border-transparent hover:border-gray-200 hover:bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="w-10 h-10 rounded-full bg-[#B269EC]/10 text-[#B269EC] flex items-center justify-center mb-6">
                <iconify-icon icon="solar:forward-bold-duotone" width="20"></iconify-icon>
              </div>
              <h3 className="text-lg font-medium text-[#1A1A1A] mb-2">Easy Forward</h3>
              <p className="text-sm text-gray-500 font-light mb-4">Forward files quickly without losing quality or original format.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. HOW IT WORKS */}
      <section id="how-it-works" className="py-24 bg-[#F8FAFC] border-b border-gray-100 relative overflow-clip">
        <BackgroundOrbital position="left" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-4 relative lg:sticky lg:top-24 z-10 bg-[#F8FAFC] lg:bg-transparent py-4 lg:py-0">
              <span className="section-label text-[#29CD71]">02 — Process</span>
              <h2 className="text-3xl md:text-5xl text-[#1A1A1A] mt-2 mb-6">How It Works</h2>

              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm mt-8">
                <div className="flex items-center gap-3 mb-3">
                  <iconify-icon icon="solar:shield-check-linear" className="text-[#B269EC] text-xl"></iconify-icon>
                  <h4 className="font-medium text-sm">Forward Once. Find Forever.</h4>
                </div>
                <p className="text-sm text-gray-500 font-light leading-relaxed">
                  Every file you forward is securely saved, intelligently organized, and instantly searchable. Access your WhatsApp files anytime, anywhere.
                </p>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-6">
              {/* Step 1 */}
              <div className="flex gap-6 bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:border-[#29CD71]/30 transition-colors">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1A1A1A] text-white flex items-center justify-center font-serif text-xl">01</div>
                <div>
                  <h3 className="text-xl font-medium text-[#1A1A1A] mb-2">Forward</h3>
                  <p className="text-gray-500 font-light text-sm leading-relaxed">Forward any file in WhatsApp to SawAap.</p>
                </div>
              </div>
              {/* Step 2 */}
              <div className="flex gap-6 bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:border-[#29CD71]/30 transition-colors">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1A1A1A] text-white flex items-center justify-center font-serif text-xl">02</div>
                <div>
                  <h3 className="text-xl font-medium text-[#1A1A1A] mb-2">Save with AI</h3>
                  <p className="text-gray-500 font-light text-sm leading-relaxed">Our AI saves and organizes it instantly.</p>
                </div>
              </div>
              {/* Step 3 */}
              <div className="flex gap-6 bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:border-[#29CD71]/30 transition-colors">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1A1A1A] text-white flex items-center justify-center font-serif text-xl">03</div>
                <div>
                  <h3 className="text-xl font-medium text-[#1A1A1A] mb-2">Find Instantly</h3>
                  <p className="text-gray-500 font-light text-sm leading-relaxed">Search and find any file in a second.</p>
                </div>
              </div>
              {/* Step 4 */}
              <div className="flex gap-6 bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:border-[#29CD71]/30 transition-colors">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1A1A1A] text-white flex items-center justify-center font-serif text-xl">04</div>
                <div>
                  <h3 className="text-xl font-medium text-[#1A1A1A] mb-2">Get It</h3>
                  <p className="text-gray-500 font-light text-sm leading-relaxed">Access, view or share whenever you need.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. WHO THIS IS FOR (QUALIFICATION) */}
      <section className="py-24 bg-white border-b border-gray-100 relative overflow-clip">
        <BackgroundOrbital position="right" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="section-label text-[#29CD71]">03 — Security</span>
              <h2 className="text-3xl md:text-5xl text-[#1A1A1A] mt-2 mb-8">Private file memory for your WhatsApp life.</h2>
              <p className="text-gray-500 mb-8 font-light leading-relaxed text-lg">
                Files stay in secure private storage with signed access links, consent tracking, deletion controls and safe retrieval.
              </p>

              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <iconify-icon icon="solar:check-circle-linear" className="text-[#B269EC] text-xl"></iconify-icon>
                  <span className="text-[#1A1A1A] font-medium">Secure private storage</span>
                </li>
                <li className="flex items-center gap-3">
                  <iconify-icon icon="solar:check-circle-linear" className="text-[#B269EC] text-xl"></iconify-icon>
                  <span className="text-[#1A1A1A] font-medium">Signed download links</span>
                </li>
                <li className="flex items-center gap-3">
                  <iconify-icon icon="solar:check-circle-linear" className="text-[#B269EC] text-xl"></iconify-icon>
                  <span className="text-[#1A1A1A] font-medium">WhatsApp consent onboarding</span>
                </li>
                <li className="flex items-center gap-3">
                  <iconify-icon icon="solar:check-circle-linear" className="text-[#B269EC] text-xl"></iconify-icon>
                  <span className="text-[#1A1A1A] font-medium">Email OTP activation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 6. READINESS SCORE CTA BAND */}
      <section id="cta" className="py-20 bg-[#29CD71] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-sans font-medium mb-4 leading-tight tracking-widest">SawAap</h2>
          <p className="text-xl text-white/90 mb-10 font-light max-w-2xl mx-auto">
            Forward. Save. Get it.
          </p>
          <div className="flex flex-col items-center justify-center gap-3">
            <a href="#" className="px-8 py-4 bg-white text-[#1A1A1A] rounded-full font-medium hover:bg-gray-100 transition-all shadow-lg flex items-center gap-3 transform hover:-translate-y-1">
              <iconify-icon icon="mdi:whatsapp" className="text-2xl text-[#25D366]"></iconify-icon>
              Chat with us
            </a>
            <span className="text-xs text-white/70 font-medium tracking-wide">WhatsApp is open</span>
          </div>
        </div>
      </section>



      {/* 10. FOOTER */}
      <footer className="bg-[#1A1A1A] text-white pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 border-b border-white/10 pb-16">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <img src="/logo.png" alt="SawAap Logo" className="w-8 h-8 object-contain" />
                <span className="font-sans text-lg tracking-widest font-medium">SawAap</span>
              </div>
              <p className="text-white/60 text-sm mb-6 max-w-sm">Forward. Save. Get it.</p>
            </div>

            {/* Product */}
            <div>
              <h4 className="text-sm font-semibold text-white mb-6">Product</h4>
              <ul className="space-y-4 text-sm text-white/60 font-light">
                <li><a href="#" className="hover:text-[#29CD71] transition-colors">Features</a></li>
                <li><a href="#how-it-works" className="hover:text-[#29CD71] transition-colors">How It Works</a></li>
                <li><a href="#" className="hover:text-[#29CD71] transition-colors">Security</a></li>
                <li><a href="#" className="hover:text-[#29CD71] transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-[#29CD71] transition-colors">Affiliate Program</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-sm font-semibold text-white mb-6">Company</h4>
              <ul className="space-y-4 text-sm text-white/60 font-light">
                <li><a href="#" className="hover:text-[#29CD71] transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-[#29CD71] transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-[#29CD71] transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-[#29CD71] transition-colors">Data Deletion</a></li>
              </ul>
            </div>

            {/* Stay in the loop */}
            <div>
              <h4 className="text-sm font-semibold text-white mb-6">Stay in the loop</h4>
              <p className="text-white/60 text-sm font-light mb-6">Get updates on new features and productivity tips.</p>
              <form className="mb-6 flex gap-2" onSubmit={(e) => e.preventDefault()}>
                <input type="email" placeholder="Enter your email" required className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#29CD71]" />
                <button type="submit" className="bg-[#29CD71] text-white px-4 py-2.5 rounded-lg text-sm flex items-center justify-center hover:bg-[#20a359] transition-colors">
                  <iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
                </button>
              </form>
              <p className="text-white/60 text-sm font-light flex items-center gap-2">
                <iconify-icon icon="solar:letter-linear" className="text-xl"></iconify-icon>
                Contact Us: <a href="mailto:info@sawaap.com" className="hover:text-[#29CD71] transition-colors">info@sawaap.com</a>
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40 font-light">
            <p>Sawaap is a software product owned and operated by Zpruners Innovations.</p>
            <p>© 2026 Sawaap. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
