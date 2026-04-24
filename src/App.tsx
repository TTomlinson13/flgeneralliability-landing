import { useState } from 'react'

function App() {
  const [showNavMenu, setShowNavMenu] = useState(false)
  return (
    <div className="min-h-screen bg-white">
      {/* Top Bar */}
      <div className="bg-green-800 text-white text-sm py-2 px-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <span>⚖️ Florida General Liability Insurance</span>
          <a href="tel:800-616-1418" className="hover:text-green-200">📞 800-616-1418</a>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-slate-800">FL<span className="text-green-600">General</span>Liability</h1>
            <p className="text-xs text-slate-500">Protect Your Florida Business</p>
          </div>
          <div className="relative">
            <button onClick={() => setShowNavMenu(!showNavMenu)} className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg font-semibold text-sm transition">
              Get a Quote {showNavMenu ? '▲' : '▼'}
            </button>
            {showNavMenu && (
              <div className="absolute right-0 top-full mt-2 w-56 bg-white rounded-xl shadow-2xl border border-green-100 overflow-hidden" style={{zIndex:9999}}>
                <a href="https://app.usecanopy.com/c/tomlinson-and-co" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-4 py-3 hover:bg-green-50 transition border-b border-gray-100" onClick={() => setShowNavMenu(false)}>
                  <span className="text-xl">⚡</span><div className="text-left"><div className="font-bold text-green-900 text-sm">Quick Quote</div><div className="text-xs text-gray-500">2 mins • Auto-fill</div></div>
                </a>
                <a href="https://hoinsurance.wufoo.com/forms/fl-commercial-liability-form/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-4 py-3 hover:bg-green-50 transition border-b border-gray-100" onClick={() => setShowNavMenu(false)}>
                  <span className="text-xl">📝</span><div className="text-left"><div className="font-bold text-green-900 text-sm">Full Quote Form</div><div className="text-xs text-gray-500">Detailed application</div></div>
                </a>
                <a href="tel:800-616-1418" className="flex items-center gap-3 px-4 py-3 hover:bg-green-50 transition" onClick={() => setShowNavMenu(false)}>
                  <span className="text-xl">📞</span><div className="text-left"><div className="font-bold text-green-900 text-sm">Call Us</div><div className="text-xs text-gray-500">800-616-1418</div></div>
                </a>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative bg-green-900 py-16 md:py-24 px-4 text-white overflow-hidden">
        <style>{`@keyframes kenBurnsGL{0%{transform:scale(1.0) translate(0%,0%)}25%{transform:scale(1.08) translate(-1.5%,-1%)}50%{transform:scale(1.12) translate(1%,-1.5%)}75%{transform:scale(1.08) translate(1.5%,1%)}100%{transform:scale(1.0) translate(0%,0%)}}.hero-bg-gl{animation:kenBurnsGL 30s ease-in-out infinite;will-change:transform;}`}</style>
        <div className="absolute inset-0 overflow-hidden"><div className="hero-bg-gl absolute inset-0 bg-cover bg-center" style={{backgroundImage:"url('/hero-gl.jpg')",opacity:0.4}}></div><div className="absolute inset-0 bg-gradient-to-br from-green-900/80 via-green-800/60 to-slate-900/70"></div></div>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-green-300 font-semibold mb-2 uppercase">General Liability Insurance</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Essential Protection for Your Business</h2>
          <p className="text-green-100 text-lg mb-8 max-w-2xl mx-auto">
            General liability insurance protects your Florida business from third-party claims of bodily injury, 
            property damage, and advertising injury. Required by most clients and landlords.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href="https://app.usecanopy.com/c/tomlinson-and-co" target="_blank" rel="noopener noreferrer" className="bg-yellow-400 hover:bg-yellow-300 text-black px-7 py-4 rounded-xl font-bold text-base transition shadow-lg text-center">
              <span className="block text-xl mb-0.5">⚡</span>
              Quick Quote
              <span className="block text-xs font-normal opacity-75">2 mins • Auto-fill</span>
            </a>
            <a href="https://hoinsurance.wufoo.com/forms/fl-commercial-liability-form/" target="_blank" rel="noopener noreferrer" className="bg-white hover:bg-green-50 text-green-800 px-7 py-4 rounded-xl font-bold text-base transition shadow-lg text-center">
              <span className="block text-xl mb-0.5">📝</span>
              Full Quote Form
              <span className="block text-xs font-normal opacity-60">Detailed application</span>
            </a>
            <a href="tel:800-616-1418" className="bg-green-700 hover:bg-green-600 text-white px-7 py-4 rounded-xl font-bold text-base transition shadow-lg text-center">
              <span className="block text-xl mb-0.5">📞</span>
              Call Us
              <span className="block text-xs font-normal opacity-75">800-616-1418</span>
            </a>
          </div>
        </div>
      </section>

      {/* What GL Covers */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-slate-800 mb-4">What Does General Liability Cover?</h3>
          <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
            GL is the foundation of business insurance — protecting you from claims that could otherwise bankrupt your company.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 border-2 border-green-200 rounded-xl bg-green-50">
              <div className="text-4xl mb-4">🤕</div>
              <h4 className="font-bold text-xl text-slate-800 mb-2">Bodily Injury</h4>
              <p className="text-slate-600">If someone is injured at your business or by your operations, GL covers medical costs and legal defense.</p>
            </div>
            <div className="p-6 border-2 border-green-200 rounded-xl bg-green-50">
              <div className="text-4xl mb-4">🏠</div>
              <h4 className="font-bold text-xl text-slate-800 mb-2">Property Damage</h4>
              <p className="text-slate-600">If you damage someone else's property while working, GL covers repair or replacement costs.</p>
            </div>
            <div className="p-6 border-2 border-green-200 rounded-xl bg-green-50">
              <div className="text-4xl mb-4">📢</div>
              <h4 className="font-bold text-xl text-slate-800 mb-2">Advertising Injury</h4>
              <p className="text-slate-600">Protection against claims of libel, slander, copyright infringement in your advertising.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Who Needs GL */}
      <section className="py-16 px-4 bg-slate-800 text-white">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-4">Who Needs General Liability?</h3>
          <p className="text-center text-slate-300 mb-12">Almost every business — and it's often required.</p>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-bold text-green-400 mb-4">Required By:</h4>
              <ul className="space-y-3 text-slate-300">
                <li>✓ Commercial landlords before signing a lease</li>
                <li>✓ General contractors before hiring subs</li>
                <li>✓ Clients before awarding contracts</li>
                <li>✓ Government contracts and permits</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold text-green-400 mb-4">Common Industries:</h4>
              <ul className="space-y-3 text-slate-300">
                <li>✓ Contractors & Construction</li>
                <li>✓ Retail & Restaurants</li>
                <li>✓ Professional Services</li>
                <li>✓ Manufacturing & Wholesale</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Limits */}
      <section className="py-16 px-4 bg-green-50">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-slate-800 mb-8">Common GL Limits</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <p className="text-3xl font-bold text-green-600">$1M / $2M</p>
              <p className="text-slate-600 mt-2">Most common: $1M per occurrence, $2M aggregate</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <p className="text-3xl font-bold text-green-600">$500K / $1M</p>
              <p className="text-slate-600 mt-2">Lower cost option for smaller operations</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <p className="text-3xl font-bold text-green-600">$2M / $4M</p>
              <p className="text-slate-600 mt-2">Higher limits for larger contracts</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-green-600 to-green-700">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Get Your GL Quote in Minutes</h3>
          <p className="text-green-100 text-lg mb-8">Fast quotes, competitive rates, certificates issued same day.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://app.usecanopy.com/c/tomlinson-and-co" target="_blank" rel="noopener noreferrer" className="bg-white text-green-700 font-bold text-xl py-4 px-8 rounded-lg shadow-lg hover:bg-slate-100 transition">
              Get GL Quote →
            </a>
            <a href="tel:800-616-1418" className="bg-green-800 hover:bg-green-900 text-white font-bold text-xl py-4 px-8 rounded-lg shadow-lg transition">
              📞 800-616-1418
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8 px-4 text-center">
        <h4 className="text-white font-bold text-xl mb-2">FLGeneralLiability.com</h4>
        <p className="text-sm">A Tomlinson & Co Agency • Florida Licensed Since 1966</p>
        <p className="text-xs mt-4">© {new Date().getFullYear()} Tomlinson & Co Inc. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
