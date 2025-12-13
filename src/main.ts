import './style.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `
  <!-- Fixed Navigation Bar -->
  <nav id="navbar" class="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md z-50 transition-all duration-500">
    <div class="container mx-auto px-8 py-5">
      <div class="flex justify-between items-center">
        <div class="font-display text-3xl font-bold tracking-tight text-coffee-dark">MILE HIGH ROASTERS</div>
        <ul class="flex gap-10 font-body text-sm tracking-widest uppercase">
          <li><a href="#home" class="nav-link relative hover:text-coffee-dark transition-colors duration-300">Home</a></li>
          <li><a href="#about" class="nav-link relative hover:text-coffee-dark transition-colors duration-300">Our Story</a></li>
          <li><a href="#products" class="nav-link relative hover:text-coffee-dark transition-colors duration-300">Products</a></li>
          <li><a href="#learn" class="nav-link relative hover:text-coffee-dark transition-colors duration-300">Learn</a></li>
          <li><a href="#gallery" class="nav-link relative hover:text-coffee-dark transition-colors duration-300">Gallery</a></li>
          <li><a href="#visit" class="nav-link relative hover:text-coffee-dark transition-colors duration-300">Visit</a></li>
        </ul>
      </div>
    </div>
  </nav>

  <!-- Hero Section -->
  <section id="home" class="relative h-screen flex items-center justify-center overflow-hidden">
    <div class="absolute inset-0 bg-gradient-to-br from-coffee-cream via-stone-100 to-coffee-light"></div>
    <div class="hero-overlay absolute inset-0 bg-[url('https://images.unsplash.com/photo-1511920170033-83939d329638?w=1200')] bg-cover bg-center opacity-10"></div>
    
    <!-- Floating decorative elements -->
    <div class="absolute top-20 left-10 w-32 h-32 bg-coffee/20 rounded-full blur-3xl animate-float"></div>
    <div class="absolute bottom-20 right-10 w-40 h-40 bg-coorg-light/20 rounded-full blur-3xl animate-float-delayed"></div>
    
    <div class="relative z-10 text-center px-6 max-w-4xl">
      <div class="hero-ornament mb-8 opacity-0">
        <svg class="w-20 h-20 mx-auto text-coffee-dark" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
        </svg>
      </div>
      <h1 class="hero-title font-display text-7xl md:text-8xl font-bold mb-6 opacity-0 text-coffee-roast tracking-tight">MILE HIGH ROASTERS</h1>
      <div class="hero-divider w-24 h-1 bg-coffee-dark mx-auto mb-6 opacity-0"></div>
      <p class="hero-subtitle font-body text-2xl md:text-3xl text-stone-700 mb-4 opacity-0 tracking-wide">From Our Coorg Estate to Your Cup</p>
      <p class="hero-tagline font-body text-lg text-stone-600 mb-10 opacity-0 italic">Estate-grown Arabica, freshly roasted, specialty brewed</p>
      <div class="flex gap-4 justify-center flex-wrap">
        <a href="#products" class="hero-button inline-block px-12 py-5 bg-coffee-dark text-white hover:bg-coffee-roast transition-all duration-500 font-body tracking-widest text-sm uppercase opacity-0 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
          Explore Our Coffee
        </a>
        <a href="#visit" class="hero-button-secondary inline-block px-12 py-5 border-2 border-coffee-dark text-coffee-dark hover:bg-coffee-dark hover:text-white transition-all duration-500 font-body tracking-widest text-sm uppercase opacity-0 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
          Visit Our Café
        </a>
      </div>
    </div>
  </section>

  <!-- About / Story Section -->
  <section id="about" class="py-32 px-6 bg-gradient-to-b from-white to-stone-50 relative overflow-hidden">
    <div class="absolute top-0 right-0 w-96 h-96 bg-coffee-cream/30 rounded-full blur-3xl"></div>
    <div class="container mx-auto max-w-6xl relative z-10">
      <div class="text-center mb-16">
        <span class="about-badge inline-block font-body text-sm tracking-widest text-coffee-dark uppercase mb-4 opacity-0">Our Origin</span>
        <h2 class="about-title font-display text-6xl mb-6 opacity-0 text-black">Farm-to-Cup Excellence</h2>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-20">
        <div class="about-image opacity-0 relative">
          <div class="aspect-[3/4] bg-stone-200 overflow-hidden shadow-2xl relative">
            <div class="story-slideshow relative w-full h-full">
              <img src="https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=800" alt="Coorg Plantation" class="story-slide absolute inset-0 w-full h-full object-cover">
              <img src="https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=800" alt="Coffee Beans" class="story-slide absolute inset-0 w-full h-full object-cover">
              <img src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800" alt="Roasting Process" class="story-slide absolute inset-0 w-full h-full object-cover">
              <img src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800" alt="Fresh Brew" class="story-slide absolute inset-0 w-full h-full object-cover">
            </div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none z-10"></div>
          </div>
          <div class="absolute -bottom-6 -right-6 w-48 h-48 border-2 border-coffee-dark/20 -z-10"></div>
        </div>
        <div class="about-text opacity-0 space-y-6">
          <div class="flex items-center gap-4 mb-8">
            <div class="w-16 h-1 bg-coffee-dark"></div>
            <span class="font-body text-sm tracking-widest text-coffee-dark uppercase">The Coorg Estate</span>
          </div>
          <h3 class="font-display text-5xl mb-8 text-black leading-tight">Estate-Grown<br/>Arabica Excellence</h3>
          <div class="space-y-5 font-body text-stone-700 text-lg leading-relaxed">
            <p>Nestled in the misty hills of Coorg, our estate is where it all begins. We control every step from seed to cup, ensuring the highest quality Arabica beans. Our plantation benefits from Coorg's unique terroir—elevation, rainfall, and soil composition that create beans with distinctive flavor profiles.</p>
            <p>We harvest at peak ripeness, process with care, and roast in small batches to preserve the unique characteristics of each crop. This farm-to-cup approach means you're getting coffee that's not just fresh, but traceable—you know exactly where your beans come from.</p>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-12 mt-20">
        <div class="feature-card opacity-0 text-center p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <div class="w-16 h-16 bg-coffee-dark rounded-full flex items-center justify-center mx-auto mb-6">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
          </div>
          <h4 class="font-display text-2xl mb-4 text-black">Estate-Grown</h4>
          <p class="font-body text-stone-600">100% traceable Arabica from our Coorg plantation, ensuring quality and freshness from source to cup.</p>
        </div>
        <div class="feature-card opacity-0 text-center p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <div class="w-16 h-16 bg-coffee-dark rounded-full flex items-center justify-center mx-auto mb-6">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
          </div>
          <h4 class="font-display text-2xl mb-4 text-black">Freshly Roasted</h4>
          <p class="font-body text-stone-600">Small-batch roasting ensures peak flavor. We roast regularly to guarantee you receive beans at their freshest.</p>
        </div>
        <div class="feature-card opacity-0 text-center p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <div class="w-16 h-16 bg-coffee-dark rounded-full flex items-center justify-center mx-auto mb-6">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
            </svg>
          </div>
          <h4 class="font-display text-2xl mb-4 text-black">Specialty Brews</h4>
          <p class="font-body text-stone-600">Curated signature blends and single-origin coffees, each crafted to highlight unique flavor profiles and brewing methods.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Products / Menu Section -->
  <section id="products" class="py-32 px-6 bg-coffee-roast text-white relative overflow-hidden">
    <div class="absolute inset-0 opacity-5 bg-[url('https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=1200')] bg-cover bg-center"></div>
    <div class="container mx-auto max-w-7xl relative z-10">
      <div class="text-center mb-20">
        <span class="products-badge inline-block font-body text-sm tracking-widest text-coffee-cream uppercase mb-4 opacity-0">Our Offerings</span>
        <h2 class="products-title font-display text-6xl mb-6 opacity-0">Signature Coffee Collection</h2>
        <p class="products-subtitle font-body text-stone-300 text-xl opacity-0 max-w-2xl mx-auto">Estate-grown beans, expertly roasted and ready to brew</p>
      </div>
      
      <!-- Auto-Scrolling Products Carousel -->
      <div class="relative mb-16">
        <div class="products-carousel-wrapper overflow-hidden">
          <div id="products-carousel" class="flex gap-8 products-carousel">
            <!-- Coorg Estate Blend -->
            <div class="product-card bg-white text-black overflow-hidden group flex-shrink-0 w-80 shadow-2xl hover:shadow-coffee-dark/50 transition-all duration-500">
              <div class="aspect-[4/5] bg-stone-200 overflow-hidden relative">
                <img src="https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400" alt="Coorg Estate Blend" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700">
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div class="p-8">
                <div class="flex items-center gap-2 mb-2">
                  <span class="font-body text-xs tracking-widest text-coffee-dark uppercase">Single Origin</span>
              </div>
                <h3 class="font-display text-2xl mb-3">Coorg Estate Blend</h3>
                <p class="font-body text-stone-600 text-sm leading-relaxed mb-4">Medium roast with notes of chocolate, caramel, and a hint of spice. Our signature blend from the estate.</p>
                <div class="flex items-center justify-between">
                  <span class="font-display text-xl text-coffee-dark">₹450</span>
                  <button class="px-6 py-2 bg-coffee-dark text-white hover:bg-coffee-roast transition-colors text-sm uppercase tracking-wide">Order</button>
            </div>
              </div>
            </div>

            <!-- Dark Roast -->
            <div class="product-card bg-white text-black overflow-hidden group flex-shrink-0 w-80 shadow-2xl hover:shadow-coffee-dark/50 transition-all duration-500">
              <div class="aspect-[4/5] bg-stone-200 overflow-hidden relative">
                <img src="https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400" alt="Dark Roast" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700">
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div class="p-8">
                <div class="flex items-center gap-2 mb-2">
                  <span class="font-body text-xs tracking-widest text-coffee-dark uppercase">Dark Roast</span>
              </div>
                <h3 class="font-display text-2xl mb-3">Bold & Rich</h3>
                <p class="font-body text-stone-600 text-sm leading-relaxed mb-4">Full-bodied dark roast with deep, smoky flavors and a robust finish. Perfect for espresso.</p>
                <div class="flex items-center justify-between">
                  <span class="font-display text-xl text-coffee-dark">₹480</span>
                  <button class="px-6 py-2 bg-coffee-dark text-white hover:bg-coffee-roast transition-colors text-sm uppercase tracking-wide">Order</button>
            </div>
              </div>
            </div>

            <!-- Light Roast -->
            <div class="product-card bg-white text-black overflow-hidden group flex-shrink-0 w-80 shadow-2xl hover:shadow-coffee-dark/50 transition-all duration-500">
              <div class="aspect-[4/5] bg-stone-200 overflow-hidden relative">
                <img src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400" alt="Light Roast" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700">
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div class="p-8">
                <div class="flex items-center gap-2 mb-2">
                  <span class="font-body text-xs tracking-widest text-coffee-dark uppercase">Light Roast</span>
              </div>
                <h3 class="font-display text-2xl mb-3">Bright & Fruity</h3>
                <p class="font-body text-stone-600 text-sm leading-relaxed mb-4">Delicate light roast highlighting bright, fruity notes with a clean, crisp finish. Ideal for pour-over.</p>
                <div class="flex items-center justify-between">
                  <span class="font-display text-xl text-coffee-dark">₹420</span>
                  <button class="px-6 py-2 bg-coffee-dark text-white hover:bg-coffee-roast transition-colors text-sm uppercase tracking-wide">Order</button>
            </div>
              </div>
            </div>

            <!-- Signature Cold Brew -->
            <div class="product-card bg-white text-black overflow-hidden group flex-shrink-0 w-80 shadow-2xl hover:shadow-coffee-dark/50 transition-all duration-500">
              <div class="aspect-[4/5] bg-stone-200 overflow-hidden relative">
                <img src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400" alt="Cold Brew" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700">
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div class="p-8">
                <div class="flex items-center gap-2 mb-2">
                  <span class="font-body text-xs tracking-widest text-coffee-dark uppercase">Cold Brew</span>
              </div>
                <h3 class="font-display text-2xl mb-3">Signature Cold Brew</h3>
                <p class="font-body text-stone-600 text-sm leading-relaxed mb-4">Smooth, refreshing cold brew concentrate. Perfect for hot days or iced coffee lovers.</p>
                <div class="flex items-center justify-between">
                  <span class="font-display text-xl text-coffee-dark">₹350</span>
                  <button class="px-6 py-2 bg-coffee-dark text-white hover:bg-coffee-roast transition-colors text-sm uppercase tracking-wide">Order</button>
            </div>
              </div>
            </div>

            <!-- Espresso Blend -->
            <div class="product-card bg-white text-black overflow-hidden group flex-shrink-0 w-80 shadow-2xl hover:shadow-coffee-dark/50 transition-all duration-500">
              <div class="aspect-[4/5] bg-stone-200 overflow-hidden relative">
                <img src="https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=400" alt="Espresso Blend" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700">
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div class="p-8">
                <div class="flex items-center gap-2 mb-2">
                  <span class="font-body text-xs tracking-widest text-coffee-dark uppercase">Espresso</span>
              </div>
                <h3 class="font-display text-2xl mb-3">Espresso Blend</h3>
                <p class="font-body text-stone-600 text-sm leading-relaxed mb-4">Rich, balanced espresso blend with crema-perfect characteristics. Crafted for espresso machines.</p>
                <div class="flex items-center justify-between">
                  <span class="font-display text-xl text-coffee-dark">₹500</span>
                  <button class="px-6 py-2 bg-coffee-dark text-white hover:bg-coffee-roast transition-colors text-sm uppercase tracking-wide">Order</button>
            </div>
              </div>
            </div>

            <!-- Duplicate items for seamless loop -->
            <div class="product-card bg-white text-black overflow-hidden group flex-shrink-0 w-80 shadow-2xl hover:shadow-coffee-dark/50 transition-all duration-500">
              <div class="aspect-[4/5] bg-stone-200 overflow-hidden relative">
                <img src="https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400" alt="Coorg Estate Blend" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700">
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div class="p-8">
                <div class="flex items-center gap-2 mb-2">
                  <span class="font-body text-xs tracking-widest text-coffee-dark uppercase">Single Origin</span>
              </div>
                <h3 class="font-display text-2xl mb-3">Coorg Estate Blend</h3>
                <p class="font-body text-stone-600 text-sm leading-relaxed mb-4">Medium roast with notes of chocolate, caramel, and a hint of spice. Our signature blend from the estate.</p>
                <div class="flex items-center justify-between">
                  <span class="font-display text-xl text-coffee-dark">₹450</span>
                  <button class="px-6 py-2 bg-coffee-dark text-white hover:bg-coffee-roast transition-colors text-sm uppercase tracking-wide">Order</button>
            </div>
              </div>
            </div>

            <div class="product-card bg-white text-black overflow-hidden group flex-shrink-0 w-80 shadow-2xl hover:shadow-coffee-dark/50 transition-all duration-500">
              <div class="aspect-[4/5] bg-stone-200 overflow-hidden relative">
                <img src="https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400" alt="Dark Roast" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700">
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div class="p-8">
                <div class="flex items-center gap-2 mb-2">
                  <span class="font-body text-xs tracking-widest text-coffee-dark uppercase">Dark Roast</span>
              </div>
                <h3 class="font-display text-2xl mb-3">Bold & Rich</h3>
                <p class="font-body text-stone-600 text-sm leading-relaxed mb-4">Full-bodied dark roast with deep, smoky flavors and a robust finish. Perfect for espresso.</p>
                <div class="flex items-center justify-between">
                  <span class="font-display text-xl text-coffee-dark">₹480</span>
                  <button class="px-6 py-2 bg-coffee-dark text-white hover:bg-coffee-roast transition-colors text-sm uppercase tracking-wide">Order</button>
            </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="text-center">
        <button id="view-all-btn" class="px-14 py-5 border-2 border-white hover:bg-white hover:text-coffee-roast transition-all duration-500 font-body tracking-widest text-sm uppercase shadow-xl transform hover:-translate-y-1">
          View All Products
        </button>
      </div>
      
      <!-- Notification Toast -->
      <div id="products-notification" class="fixed top-24 left-8 bg-white border-2 border-coffee-dark px-10 py-6 shadow-2xl z-[9999] opacity-0 max-w-md">
        <div class="flex items-center gap-4">
          <div class="w-10 h-10 bg-coffee-dark flex items-center justify-center flex-shrink-0">
            <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
          </div>
          <div>
            <p class="font-display text-xl text-black">Online Ordering Coming Soon</p>
            <p class="font-body text-sm text-stone-600 mt-1">Visit our café or contact us to order</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Education / Learn Section -->
  <section id="learn" class="py-32 px-6 bg-gradient-to-b from-stone-50 to-white">
    <div class="container mx-auto max-w-6xl">
      <div class="text-center mb-20">
        <span class="learn-badge inline-block font-body text-sm tracking-widest text-coffee-dark uppercase mb-4 opacity-0">Coffee Knowledge</span>
        <h2 class="learn-title font-display text-6xl mb-6 opacity-0 text-black">Learn the Craft</h2>
        <p class="learn-subtitle font-body text-stone-600 text-xl opacity-0 max-w-2xl mx-auto">From roast levels to brewing methods, deepen your coffee knowledge</p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <div class="learn-card bg-white p-10 shadow-xl opacity-0 hover:shadow-2xl transition-all duration-500">
          <div class="w-16 h-16 bg-coffee-dark rounded-full flex items-center justify-center mb-6">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
          </div>
          <h3 class="font-display text-3xl mb-4 text-black">Understanding Roast Levels</h3>
          <p class="font-body text-stone-700 text-lg leading-relaxed mb-4">Learn the difference between light, medium, and dark roasts, and how each affects flavor, acidity, and body.</p>
          <ul class="space-y-2 font-body text-stone-600">
            <li>• Light Roast: Bright, fruity, higher acidity</li>
            <li>• Medium Roast: Balanced, caramel notes</li>
            <li>• Dark Roast: Bold, smoky, lower acidity</li>
          </ul>
        </div>
        
        <div class="learn-card bg-white p-10 shadow-xl opacity-0 hover:shadow-2xl transition-all duration-500">
          <div class="w-16 h-16 bg-coffee-dark rounded-full flex items-center justify-center mb-6">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/>
            </svg>
          </div>
          <h3 class="font-display text-3xl mb-4 text-black">Brewing Methods</h3>
          <p class="font-body text-stone-700 text-lg leading-relaxed mb-4">Master different brewing techniques to extract the best flavors from your beans.</p>
          <ul class="space-y-2 font-body text-stone-600">
            <li>• Pour-Over: Clean, bright, full control</li>
            <li>• French Press: Rich, full-bodied</li>
            <li>• Espresso: Concentrated, intense</li>
            <li>• Cold Brew: Smooth, low acidity</li>
          </ul>
        </div>
        
        <div class="learn-card bg-white p-10 shadow-xl opacity-0 hover:shadow-2xl transition-all duration-500">
          <div class="w-16 h-16 bg-coffee-dark rounded-full flex items-center justify-center mb-6">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>
            </svg>
          </div>
          <h3 class="font-display text-3xl mb-4 text-black">Bean Storage & Care</h3>
          <p class="font-body text-stone-700 text-lg leading-relaxed mb-4">Proper storage is key to maintaining freshness and flavor. Learn how to keep your beans at their best.</p>
          <ul class="space-y-2 font-body text-stone-600">
            <li>• Store in airtight containers</li>
            <li>• Keep away from light and moisture</li>
            <li>• Grind just before brewing</li>
            <li>• Use within 2-3 weeks of roasting</li>
          </ul>
        </div>
        
        <div class="learn-card bg-white p-10 shadow-xl opacity-0 hover:shadow-2xl transition-all duration-500">
          <div class="w-16 h-16 bg-coffee-dark rounded-full flex items-center justify-center mb-6">
            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
            </svg>
          </div>
          <h3 class="font-display text-3xl mb-4 text-black">Origin & Terroir</h3>
          <p class="font-body text-stone-700 text-lg leading-relaxed mb-4">Discover how geography, climate, and processing methods create unique flavor profiles in coffee.</p>
          <ul class="space-y-2 font-body text-stone-600">
            <li>• Coorg's elevation and climate</li>
            <li>• Arabica vs Robusta</li>
            <li>• Processing methods</li>
            <li>• Single-origin characteristics</li>
          </ul>
        </div>
      </div>

      <div class="text-center">
        <a href="#visit" class="inline-block px-12 py-5 bg-coffee-dark text-white hover:bg-coffee-roast transition-all duration-500 font-body tracking-widest text-sm uppercase shadow-xl transform hover:-translate-y-1">
          Join Our Workshops
        </a>
      </div>
    </div>
  </section>

  <!-- Gallery Section -->
  <section id="gallery" class="py-32 px-6 bg-gradient-to-b from-white to-stone-50">
    <div class="container mx-auto max-w-7xl">
      <div class="text-center mb-20">
        <span class="gallery-badge inline-block font-body text-sm tracking-widest text-coffee-dark uppercase mb-4 opacity-0">Visual Journey</span>
        <h2 class="gallery-title font-display text-6xl mb-6 opacity-0 text-black">The Mile High Experience</h2>
        <p class="gallery-subtitle font-body text-stone-600 text-xl opacity-0 max-w-2xl mx-auto">From plantation to cup, see our journey</p>
      </div>
      
      <div class="grid grid-cols-2 md:grid-cols-3 gap-6">
        <!-- Gallery Slideshow 0 (Tall Section) -->
        <div class="gallery-item col-span-1 row-span-2 opacity-0">
          <div class="h-full overflow-hidden relative group">
            <div class="gallery-slideshow-0 relative w-full h-full bg-transparent">
              <img src="https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=600" alt="Plantation" class="gallery-slide-0 absolute inset-0 w-full h-full object-cover">
              <img src="https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600" alt="Coffee Beans" class="gallery-slide-0 absolute inset-0 w-full h-full object-cover">
              <img src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600" alt="Roasting" class="gallery-slide-0 absolute inset-0 w-full h-full object-cover">
              <img src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600" alt="Brewing" class="gallery-slide-0 absolute inset-0 w-full h-full object-cover">
            </div>
            <div class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500 pointer-events-none z-10"></div>
          </div>
        </div>
        
        <!-- Gallery Slideshow 1 -->
        <div class="gallery-item col-span-1 opacity-0 bg-transparent">
          <div class="aspect-square overflow-hidden relative group bg-transparent">
            <div class="gallery-slideshow-1 relative w-full h-full bg-transparent">
              <img src="https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=600" alt="Espresso" class="gallery-slide-1 absolute inset-0 w-full h-full object-cover">
              <img src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600" alt="Pour Over" class="gallery-slide-1 absolute inset-0 w-full h-full object-cover">
              <img src="https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600" alt="Beans" class="gallery-slide-1 absolute inset-0 w-full h-full object-cover">
            </div>
            <div class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500 pointer-events-none z-10"></div>
          </div>
        </div>
        
        <!-- Gallery Slideshow 2 -->
        <div class="gallery-item col-span-1 opacity-0 bg-transparent">
          <div class="aspect-square overflow-hidden relative group bg-transparent">
            <div class="gallery-slideshow-2 relative w-full h-full bg-transparent">
              <img src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600" alt="Roasting" class="gallery-slide-2 absolute inset-0 w-full h-full object-cover">
              <img src="https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=600" alt="Plantation" class="gallery-slide-2 absolute inset-0 w-full h-full object-cover">
              <img src="https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=600" alt="Café" class="gallery-slide-2 absolute inset-0 w-full h-full object-cover">
            </div>
            <div class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500 pointer-events-none z-10"></div>
          </div>
        </div>
        
        <!-- Gallery Slideshow 3 -->
        <div class="gallery-item col-span-1 opacity-0 bg-transparent">
          <div class="aspect-square overflow-hidden relative group bg-transparent">
            <div class="gallery-slideshow-3 relative w-full h-full bg-transparent">
              <img src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600" alt="Brewing" class="gallery-slide-3 absolute inset-0 w-full h-full object-cover">
              <img src="https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?w=600" alt="Café Ambience" class="gallery-slide-3 absolute inset-0 w-full h-full object-cover">
              <img src="https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600" alt="Coffee" class="gallery-slide-3 absolute inset-0 w-full h-full object-cover">
            </div>
            <div class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500 pointer-events-none z-10"></div>
          </div>
        </div>
        
        <!-- Gallery Slideshow 4 -->
        <div class="gallery-item col-span-1 opacity-0 bg-transparent">
          <div class="aspect-square overflow-hidden relative group bg-transparent">
            <div class="gallery-slideshow-4 relative w-full h-full bg-transparent">
              <img src="https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=600" alt="Estate" class="gallery-slide-4 absolute inset-0 w-full h-full object-cover">
              <img src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600" alt="Roasting" class="gallery-slide-4 absolute inset-0 w-full h-full object-cover">
              <img src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600" alt="Brew" class="gallery-slide-4 absolute inset-0 w-full h-full object-cover">
            </div>
            <div class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500 pointer-events-none z-10"></div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Testimonials Section -->
  <section class="py-32 px-6 bg-coffee-cream">
    <div class="container mx-auto max-w-6xl">
      <div class="text-center mb-20">
        <span class="testimonial-badge inline-block font-body text-sm tracking-widest text-coffee-dark uppercase mb-4 opacity-0">Community Stories</span>
        <h2 class="testimonial-title font-display text-6xl opacity-0 text-black">Loved by Coffee Enthusiasts</h2>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="testimonial-card bg-white p-10 shadow-xl opacity-0 relative overflow-hidden group hover:shadow-2xl transition-all duration-500">
          <div class="absolute top-0 left-0 w-2 h-full bg-coffee-dark transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
          <div class="text-coffee-dark mb-6 text-5xl font-serif">"</div>
          <p class="font-body text-stone-700 text-lg leading-relaxed mb-6 italic">The Coorg Estate Blend is exceptional. You can truly taste the quality and care in every cup.</p>
          <div class="flex items-center gap-4">
            <div class="w-12 h-12 bg-coffee-cream rounded-full"></div>
            <div>
              <p class="font-display text-lg font-semibold text-black">Rajesh Kumar</p>
              <p class="font-body text-sm text-stone-500">Coffee Enthusiast</p>
            </div>
          </div>
        </div>
        
        <div class="testimonial-card bg-white p-10 shadow-xl opacity-0 relative overflow-hidden group hover:shadow-2xl transition-all duration-500">
          <div class="absolute top-0 left-0 w-2 h-full bg-coffee-dark transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
          <div class="text-coffee-dark mb-6 text-5xl font-serif">"</div>
          <p class="font-body text-stone-700 text-lg leading-relaxed mb-6 italic">Mile High Roasters has transformed my morning routine. Fresh, flavorful, and ethically sourced.</p>
          <div class="flex items-center gap-4">
            <div class="w-12 h-12 bg-coffee-cream rounded-full"></div>
            <div>
              <p class="font-display text-lg font-semibold text-black">Priya Menon</p>
              <p class="font-body text-sm text-stone-500">Regular Customer</p>
            </div>
          </div>
        </div>
        
        <div class="testimonial-card bg-white p-10 shadow-xl opacity-0 relative overflow-hidden group hover:shadow-2xl transition-all duration-500">
          <div class="absolute top-0 left-0 w-2 h-full bg-coffee-dark transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
          <div class="text-coffee-dark mb-6 text-5xl font-serif">"</div>
          <p class="font-body text-stone-700 text-lg leading-relaxed mb-6 italic">The café ambiance is perfect for late-night work sessions. Great coffee, great vibes.</p>
          <div class="flex items-center gap-4">
            <div class="w-12 h-12 bg-coffee-cream rounded-full"></div>
            <div>
              <p class="font-display text-lg font-semibold text-black">Arjun Nair</p>
              <p class="font-body text-sm text-stone-500">Local Professional</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Visit Section -->
  <section id="visit" class="py-32 px-6 bg-coffee-roast text-white">
    <div class="container mx-auto max-w-7xl">
      <div class="text-center mb-20">
        <span class="visit-badge inline-block font-body text-sm tracking-widest text-coffee-cream uppercase mb-4 opacity-0">Find Us</span>
        <h2 class="visit-title font-display text-6xl mb-6 opacity-0">Visit Our Café</h2>
        <p class="visit-subtitle font-body text-stone-300 text-xl opacity-0">Experience specialty coffee in the heart of Mysuru</p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-16">
        <div class="visit-info space-y-10 opacity-0">
          <div class="group">
            <div class="flex items-center gap-4 mb-4">
              <div class="w-12 h-12 bg-coffee-dark flex items-center justify-center">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
              </div>
              <h3 class="font-display text-2xl">Location</h3>
            </div>
            <a href="https://maps.app.goo.gl/3Ay2yoQXaxcWN9C97" target="_blank" rel="noopener noreferrer" class="font-body text-stone-300 text-lg pl-16 leading-relaxed hover:text-coffee-cream transition-colors duration-300 cursor-pointer block">
              No 825, Vijayanagar 4th stage, Ring Rd,<br/>near Extreme Detailers, 1st Phase, Signal,<br/>Mysuru, Karnataka 570030
            </a>
          </div>
          
          <div class="group">
            <div class="flex items-center gap-4 mb-4">
              <div class="w-12 h-12 bg-coffee-dark flex items-center justify-center">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
              </div>
              <h3 class="font-display text-2xl">Contact</h3>
            </div>
            <p class="font-body text-stone-300 text-lg pl-16 leading-relaxed">+91 XXXXX XXXXX<br/>hello@milehighroasters.in</p>
          </div>
          
          <div class="group">
            <div class="flex items-center gap-4 mb-4">
              <div class="w-12 h-12 bg-coffee-dark flex items-center justify-center">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 class="font-display text-2xl">Hours</h3>
            </div>
            <p class="font-body text-stone-300 text-lg pl-16 leading-relaxed">Monday - Sunday<br/>8:00 AM – 11:00 PM</p>
            <p class="font-body text-stone-400 text-sm pl-16 mt-2 italic">Late-night café vibes for night owls</p>
          </div>
          
          <div class="pl-16 pt-4">
            <a href="#products" class="inline-block px-12 py-5 bg-coffee-dark text-white hover:bg-coffee-light transition-all duration-500 font-body tracking-widest text-sm uppercase shadow-xl transform hover:-translate-y-1">
              Order Coffee Beans
            </a>
          </div>
        </div>
        
        <div class="visit-map opacity-0">
          <div class="aspect-square bg-stone-800 overflow-hidden shadow-2xl">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3897.945766330284!2d76.596402!3d12.319437299999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf7b3565a7767b%3A0x2b93ff9820315e51!2sMile%20High%20Roasters!5e0!3m2!1sen!2sin!4v1765253520874!5m2!1sen!2sin"
              width="100%" 
              height="100%" 
              style="border:0;filter:grayscale(100%) invert(92%) contrast(83%);" 
              allowfullscreen="" 
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="bg-black text-white py-16 px-6">
    <div class="container mx-auto max-w-6xl">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        <div>
          <h3 class="font-display text-3xl mb-6">MILE HIGH ROASTERS</h3>
          <p class="font-body text-stone-400 leading-relaxed">From our Coorg estate to your cup. Estate-grown Arabica, freshly roasted, specialty brewed in Mysuru.</p>
        </div>
        <div>
          <h4 class="font-display text-lg mb-4 text-coffee-cream">Quick Links</h4>
          <ul class="space-y-2 font-body text-stone-400">
            <li><a href="#home" class="hover:text-white transition-colors duration-300">Home</a></li>
            <li><a href="#about" class="hover:text-white transition-colors duration-300">Our Story</a></li>
            <li><a href="#products" class="hover:text-white transition-colors duration-300">Products</a></li>
            <li><a href="#learn" class="hover:text-white transition-colors duration-300">Learn</a></li>
            <li><a href="#visit" class="hover:text-white transition-colors duration-300">Visit Us</a></li>
          </ul>
        </div>
  <div>
          <h4 class="font-display text-lg mb-4 text-coffee-cream">Connect</h4>
          <p class="font-body text-stone-400 mb-4">Follow us for coffee tips, roast updates, and community stories</p>
          <div class="flex gap-4">
            <a href="https://www.instagram.com/milehighroaster/?hl=en" target="_blank" rel="noopener noreferrer" class="w-12 h-12 bg-stone-800 hover:bg-coffee-dark flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
          </div>
        </div>
      </div>
      <div class="border-t border-stone-800 pt-8 text-center">
        <p class="font-body text-sm text-stone-500">© 2025 Mile High Roasters. All rights reserved. Crafted with passion in Mysuru.</p>
      </div>
    </div>
  </footer>
`

// Enhanced Animation System
function initAnimations() {
  // Navbar scroll effect
  const navbar = document.getElementById('navbar')
  
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset
    
    if (currentScroll > 100) {
      navbar?.classList.add('shadow-2xl', 'bg-white')
      navbar?.classList.remove('bg-white/90')
    } else {
      navbar?.classList.remove('shadow-2xl', 'bg-white')
      navbar?.classList.add('bg-white/90')
    }
  })

  // Hero Section - Staggered entrance
  const heroTimeline = gsap.timeline({ defaults: { ease: 'power3.out' } })
  
  heroTimeline
    .to('.hero-ornament', { opacity: 1, y: 0, duration: 1, delay: 0.3 })
    .to('.hero-title', { opacity: 1, y: 0, duration: 1.2, ease: 'power4.out' }, '-=0.5')
    .to('.hero-divider', { opacity: 1, scaleX: 1, duration: 0.8 }, '-=0.6')
    .to('.hero-subtitle', { opacity: 1, y: 0, duration: 1 }, '-=0.6')
    .to('.hero-tagline', { opacity: 1, duration: 0.8 }, '-=0.5')
    .to('.hero-button', { opacity: 1, y: 0, duration: 1, ease: 'back.out(1.5)' }, '-=0.5')
    .to('.hero-button-secondary', { opacity: 1, y: 0, duration: 1, ease: 'back.out(1.5)' }, '-=0.7')

  // Parallax effect on hero overlay
  gsap.to('.hero-overlay', {
    scrollTrigger: {
      trigger: '#home',
      start: 'top top',
      end: 'bottom top',
      scrub: 1
    },
    y: 200,
    opacity: 0.02
  })

  // About Section
  gsap.to('.about-badge', {
    scrollTrigger: {
      trigger: '.about-badge',
      start: 'top 80%',
    },
    opacity: 1,
    y: 0,
    duration: 0.6
  })

  gsap.to('.about-title', {
    scrollTrigger: {
      trigger: '.about-title',
      start: 'top 80%',
    },
    opacity: 1,
    y: 0,
    duration: 0.8,
    delay: 0.2
  })

  gsap.to('.about-image', {
    scrollTrigger: {
      trigger: '.about-image',
      start: 'top 75%',
    },
    opacity: 1,
    x: 0,
    duration: 1.2,
    ease: 'power3.out'
  })

  gsap.to('.about-text', {
    scrollTrigger: {
      trigger: '.about-text',
      start: 'top 75%',
    },
    opacity: 1,
    x: 0,
    duration: 1.2,
    delay: 0.3,
    ease: 'power3.out'
  })

  gsap.utils.toArray('.feature-card').forEach((card: any, index: number) => {
    gsap.to(card, {
      scrollTrigger: {
        trigger: card,
        start: 'top 85%',
      },
      opacity: 1,
      y: 0,
      duration: 0.8,
      delay: index * 0.1,
      ease: 'power2.out'
    })
  })

  // Story Slideshow
  setTimeout(() => {
    const storySlides = document.querySelectorAll<HTMLImageElement>('.story-slide')
    
    if (storySlides.length > 1) {
      let currentSlide = 0
      let isAnimating = false
      
      storySlides.forEach((slide, index) => {
        gsap.set(slide, { 
          x: index === 0 ? 0 : '100%',
          opacity: 1,
          zIndex: index === 0 ? 2 : 1
        })
      })
      
      function showNextSlide() {
        if (isAnimating) return
        isAnimating = true
        
        const prevSlide = storySlides[currentSlide]
        currentSlide = (currentSlide + 1) % storySlides.length
        const nextSlide = storySlides[currentSlide]
        
        gsap.set(nextSlide, { zIndex: 2 })
        gsap.set(prevSlide, { zIndex: 1 })
        
        const tl = gsap.timeline({
          onComplete: () => {
            gsap.set(prevSlide, { x: '100%' })
            isAnimating = false
          }
        })
        
        tl.to(prevSlide, {
          x: '-100%',
          duration: 1.2,
          ease: 'power2.inOut'
        }, 0)
        .to(nextSlide, {
          x: 0,
          duration: 1.2,
          ease: 'power2.inOut'
        }, 0)
      }
      
      setTimeout(() => {
        showNextSlide()
        setInterval(showNextSlide, 4000)
      }, 3000)
    }
  }, 500)

  // Products Section
  gsap.to('.products-badge', {
    scrollTrigger: {
      trigger: '.products-badge',
      start: 'top 80%',
    },
    opacity: 1,
    y: 0,
    duration: 0.6
  })

  gsap.to('.products-title', {
    scrollTrigger: {
      trigger: '.products-title',
      start: 'top 80%',
    },
    opacity: 1,
    y: 0,
    duration: 0.8,
    delay: 0.2
  })

  gsap.to('.products-subtitle', {
    scrollTrigger: {
      trigger: '.products-subtitle',
      start: 'top 80%',
    },
    opacity: 1,
    duration: 0.8,
    delay: 0.4
  })

  // Auto-scrolling Products Carousel
  const carousel = document.getElementById('products-carousel')
  if (carousel) {
    const cardWidth = 320 + 32
    const totalItems = 5
    const loopWidth = cardWidth * totalItems
    
    gsap.set(carousel, { x: 0 })
    
    const animation = gsap.to(carousel, {
      x: -loopWidth,
      duration: 35,
      ease: 'none',
      repeat: -1,
      onRepeat: function() {
        gsap.set(carousel, { x: 0 })
      }
    })
    
    carousel.addEventListener('mouseenter', () => {
      gsap.to(animation, { timeScale: 0, duration: 0.5, ease: 'power2.out' })
    })
    
    carousel.addEventListener('mouseleave', () => {
      gsap.to(animation, { timeScale: 1, duration: 0.5, ease: 'power2.in' })
    })
  }

  // Learn Section
  gsap.to('.learn-badge', {
    scrollTrigger: {
      trigger: '.learn-badge',
      start: 'top 80%',
    },
    opacity: 1,
    y: 0,
    duration: 0.6
  })

  gsap.to('.learn-title', {
    scrollTrigger: {
      trigger: '.learn-title',
      start: 'top 80%',
    },
    opacity: 1,
    y: 0,
    duration: 0.8,
    delay: 0.2
  })

  gsap.to('.learn-subtitle', {
    scrollTrigger: {
      trigger: '.learn-subtitle',
      start: 'top 80%',
    },
    opacity: 1,
    duration: 0.8,
    delay: 0.4
  })

  gsap.utils.toArray('.learn-card').forEach((card: any, index: number) => {
    gsap.to(card, {
      scrollTrigger: {
        trigger: card,
        start: 'top 85%',
      },
      opacity: 1,
      y: 0,
      duration: 0.8,
      delay: index * 0.15,
      ease: 'power2.out'
    })
  })

  // Gallery Section
  gsap.to('.gallery-badge', {
    scrollTrigger: {
      trigger: '.gallery-badge',
      start: 'top 80%',
    },
    opacity: 1,
    y: 0,
    duration: 0.6
  })

  gsap.to('.gallery-title', {
    scrollTrigger: {
      trigger: '.gallery-title',
      start: 'top 80%',
    },
    opacity: 1,
    y: 0,
    duration: 0.8,
    delay: 0.2
  })

  gsap.to('.gallery-subtitle', {
    scrollTrigger: {
      trigger: '.gallery-subtitle',
      start: 'top 80%',
    },
    opacity: 1,
    duration: 0.8,
    delay: 0.4
  })

  gsap.utils.toArray('.gallery-item').forEach((item: any, index: number) => {
    gsap.to(item, {
      scrollTrigger: {
        trigger: item,
        start: 'top 85%',
      },
      opacity: 1,
      scale: 1,
      duration: 0.8,
      delay: index * 0.08,
      ease: 'power2.out'
    })
  })

  // Gallery Slideshows
  setTimeout(() => {
    function createGallerySlideshow(slideClass: string) {
      const slides = document.querySelectorAll<HTMLImageElement>(`.${slideClass}`)
      
      if (slides.length > 1) {
        let currentSlide = 0
        let isAnimating = false
        
        slides.forEach((slide, index) => {
          if (index === 0) {
            gsap.set(slide, { 
              x: 0,
              opacity: 1,
              zIndex: 2,
              display: 'block'
            })
          } else {
            gsap.set(slide, { 
              x: '100%',
              opacity: 1,
              zIndex: 1,
              display: 'block'
            })
          }
        })
        
        function showNextSlide() {
          if (isAnimating) return
          isAnimating = true
          
          const prevSlide = slides[currentSlide]
          currentSlide = (currentSlide + 1) % slides.length
          const nextSlide = slides[currentSlide]
          
          gsap.set(nextSlide, { zIndex: 2 })
          gsap.set(prevSlide, { zIndex: 1 })
          
          const tl = gsap.timeline({
            onComplete: () => {
              gsap.set(prevSlide, { x: '100%' })
              isAnimating = false
            }
          })
          
          tl.to(prevSlide, {
            x: '-100%',
            duration: 1.2,
            ease: 'power2.inOut'
          }, 0)
          .to(nextSlide, {
            x: 0,
            duration: 1.2,
            ease: 'power2.inOut'
          }, 0)
        }
        
        return showNextSlide
      }
      return null
    }
    
    const slideshow0 = createGallerySlideshow('gallery-slide-0')
    const slideshow1 = createGallerySlideshow('gallery-slide-1')
    const slideshow2 = createGallerySlideshow('gallery-slide-2')
    const slideshow3 = createGallerySlideshow('gallery-slide-3')
    const slideshow4 = createGallerySlideshow('gallery-slide-4')
    
    let currentSection = 0
    const slideshows = [slideshow0, slideshow1, slideshow2, slideshow3, slideshow4].filter((s): s is () => void => s !== null)
    
    function triggerNextSection() {
      const slideshow = slideshows[currentSection]
      if (slideshow) {
        slideshow()
      }
      currentSection = (currentSection + 1) % slideshows.length
    }
    
    if (slideshows.length > 0) {
      setTimeout(() => {
        triggerNextSection()
        setInterval(triggerNextSection, 2500)
      }, 3000)
    }
  }, 1000)

  // Testimonials
  gsap.to('.testimonial-badge', {
    scrollTrigger: {
      trigger: '.testimonial-badge',
      start: 'top 80%',
    },
    opacity: 1,
    y: 0,
    duration: 0.6
  })

  gsap.to('.testimonial-title', {
    scrollTrigger: {
      trigger: '.testimonial-title',
      start: 'top 80%',
    },
    opacity: 1,
    y: 0,
    duration: 0.8,
    delay: 0.2
  })

  gsap.utils.toArray('.testimonial-card').forEach((card: any, index: number) => {
    gsap.to(card, {
      scrollTrigger: {
        trigger: card,
        start: 'top 85%',
      },
      opacity: 1,
      y: 0,
      duration: 0.8,
      delay: index * 0.2,
      ease: 'power3.out'
    })
  })

  // Visit Section
  gsap.to('.visit-badge', {
    scrollTrigger: {
      trigger: '.visit-badge',
      start: 'top 80%',
    },
    opacity: 1,
    y: 0,
    duration: 0.6
  })

  gsap.to('.visit-title', {
    scrollTrigger: {
      trigger: '.visit-title',
      start: 'top 80%',
    },
    opacity: 1,
    y: 0,
    duration: 0.8,
    delay: 0.2
  })

  gsap.to('.visit-subtitle', {
    scrollTrigger: {
      trigger: '.visit-subtitle',
      start: 'top 80%',
    },
    opacity: 1,
    duration: 0.8,
    delay: 0.4
  })

  gsap.to('.visit-info', {
    scrollTrigger: {
      trigger: '.visit-info',
      start: 'top 80%',
    },
    opacity: 1,
    x: 0,
    duration: 1,
    ease: 'power3.out'
  })

  gsap.to('.visit-map', {
    scrollTrigger: {
      trigger: '.visit-map',
      start: 'top 80%',
    },
    opacity: 1,
    x: 0,
    duration: 1,
    delay: 0.3,
    ease: 'power3.out'
  })
}

// Smooth scroll for navigation
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault()
    const target = (e.target as HTMLAnchorElement).getAttribute('href')
    if (target) {
      document.querySelector(target)?.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  })
})

// Products notification handler
const viewAllBtn = document.getElementById('view-all-btn')
const productsNotification = document.getElementById('products-notification')

if (viewAllBtn && productsNotification) {
  gsap.set(productsNotification, {
    x: -500,
    opacity: 0
  })
  
  viewAllBtn.addEventListener('click', () => {
    gsap.to(productsNotification, {
      x: 0,
      opacity: 1,
      duration: 0.6,
      ease: 'power3.out'
    })
    
    setTimeout(() => {
      gsap.to(productsNotification, {
        x: -500,
        opacity: 0,
        duration: 0.5,
        ease: 'power3.in'
      })
    }, 3500)
  })
}

// Initialize all animations
initAnimations()
