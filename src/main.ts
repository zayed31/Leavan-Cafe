import './style.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `
  <!-- Fixed Navigation Bar with Enhanced Design -->
  <nav id="navbar" class="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md z-50 transition-all duration-500">
    <div class="container mx-auto px-8 py-5">
      <div class="flex justify-between items-center">
        <div class="font-display text-3xl font-bold tracking-tight text-black">LEAVEN</div>
        <ul class="flex gap-10 font-body text-sm tracking-widest uppercase">
          <li><a href="#home" class="nav-link relative hover:text-amber-800 transition-colors duration-300">Home</a></li>
          <li><a href="#about" class="nav-link relative hover:text-amber-800 transition-colors duration-300">About</a></li>
          <li><a href="#menu" class="nav-link relative hover:text-amber-800 transition-colors duration-300">Menu</a></li>
          <li><a href="#gallery" class="nav-link relative hover:text-amber-800 transition-colors duration-300">Gallery</a></li>
          <li><a href="#visit" class="nav-link relative hover:text-amber-800 transition-colors duration-300">Visit</a></li>
        </ul>
      </div>
    </div>
  </nav>

  <!-- Hero Section with Parallax Effect -->
  <section id="home" class="relative h-screen flex items-center justify-center overflow-hidden">
    <div class="absolute inset-0 bg-gradient-to-br from-amber-50 via-stone-100 to-amber-100"></div>
    <div class="hero-overlay absolute inset-0 bg-[url('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1200')] bg-cover bg-center opacity-5"></div>
    
    <!-- Floating decorative elements -->
    <div class="absolute top-20 left-10 w-32 h-32 bg-amber-200/20 rounded-full blur-3xl animate-float"></div>
    <div class="absolute bottom-20 right-10 w-40 h-40 bg-stone-300/20 rounded-full blur-3xl animate-float-delayed"></div>
    
    <div class="relative z-10 text-center px-6 max-w-4xl">
      <div class="hero-ornament mb-8 opacity-0">
        <svg class="w-20 h-20 mx-auto text-amber-800" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
        </svg>
      </div>
      <h1 class="hero-title font-display text-8xl md:text-9xl font-bold mb-6 opacity-0 text-black tracking-tight">LEAVEN</h1>
      <div class="hero-divider w-24 h-1 bg-amber-800 mx-auto mb-6 opacity-0"></div>
      <p class="hero-subtitle font-body text-2xl md:text-3xl text-stone-700 mb-4 opacity-0 tracking-wide">Artisan Coffee & Fresh Baked Goods</p>
      <p class="hero-tagline font-body text-lg text-stone-600 mb-10 opacity-0 italic">Where every sip tells a story, every bite brings comfort</p>
      <a href="#menu" class="hero-button inline-block px-12 py-5 bg-black text-white hover:bg-amber-900 transition-all duration-500 font-body tracking-widest text-sm uppercase opacity-0 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
        Discover Our Menu
      </a>
    </div>
    
    <div class="absolute bottom-12 left-1/2 -translate-x-1/2 scroll-indicator opacity-0">
      <div class="flex flex-col items-center gap-2 animate-bounce">
        <span class="font-body text-xs tracking-widest text-stone-600 uppercase">Scroll</span>
        <div class="w-6 h-10 border-2 border-stone-400 rounded-full flex justify-center p-2">
          <div class="w-1 h-3 bg-stone-400 rounded-full"></div>
        </div>
      </div>
    </div>
  </section>

  <!-- Story Section with Enhanced Typography -->
  <section id="about" class="py-32 px-6 bg-gradient-to-b from-white to-stone-50 relative overflow-hidden">
    <div class="absolute top-0 right-0 w-96 h-96 bg-amber-100/30 rounded-full blur-3xl"></div>
    <div class="container mx-auto max-w-6xl relative z-10">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div class="about-image opacity-0 relative">
          <div class="aspect-[3/4] bg-stone-200 overflow-hidden shadow-2xl relative">
            <!-- Auto-changing slideshow -->
            <div class="story-slideshow relative w-full h-full">
              <img src="/images/OurStory/Image1.jpg" alt="Our Story 1" class="story-slide absolute inset-0 w-full h-full object-cover">
              <img src="/images/OurStory/Image4.jpg" alt="Our Story 2" class="story-slide absolute inset-0 w-full h-full object-cover">
              <img src="/images/OurStory/Image3.jpg" alt="Our Story 3" class="story-slide absolute inset-0 w-full h-full object-cover">
              <img src="/images/OurStory/Image5.jpg" alt="Our Story 4" class="story-slide absolute inset-0 w-full h-full object-cover">
            </div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none z-10"></div>
          </div>
          <div class="absolute -bottom-6 -right-6 w-48 h-48 border-2 border-amber-800/20 -z-10"></div>
        </div>
        <div class="about-text opacity-0 space-y-6">
          <div class="flex items-center gap-4 mb-8">
            <div class="w-16 h-1 bg-amber-800"></div>
            <span class="font-body text-sm tracking-widest text-amber-800 uppercase">Our Journey</span>
          </div>
          <h2 class="font-display text-6xl mb-8 text-black leading-tight">Crafted with<br/>Passion & Care</h2>
          <div class="space-y-5 font-body text-stone-700 text-lg leading-relaxed">
            <p>Nestled in the leafy lanes of Mysore's Vontikoppal / Vani Vilas neighbourhood, Leaven Bakery & Coffee House grew from a simple love for well-made bread and finely brewed coffee. From the very beginning the focus has been the same: slow, careful baking and coffees that honour the craft, not the clock.</p>
            <p>What started as a local spot for morning pastries has become a favourite for those who appreciate thoughtful baking. Guests come for the flaky croissants, artisan breads and seasonal pastries, and stay for the warm, minimalist space and carefully prepared coffee.</p>
            <p>Today, Leaven continues to balance tradition and simplicity: premium ingredients, hands-on baking, and a calm atmosphere where families and professionals alike can pause and enjoy a quiet moment. We open our doors each day to share small rituals, a fresh loaf, a perfect crema, and the kind of hospitality that makes a neighbourhood café feel like home.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Menu Section with Auto-Scrolling Carousel -->
  <section id="menu" class="py-32 px-6 bg-stone-900 text-white relative overflow-hidden">
    <div class="absolute inset-0 opacity-5 bg-[url('https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=1200')] bg-cover bg-center"></div>
    <div class="container mx-auto max-w-7xl relative z-10">
      <div class="text-center mb-20">
        <span class="menu-badge inline-block font-body text-sm tracking-widest text-amber-400 uppercase mb-4 opacity-0">Handcrafted Excellence</span>
        <h2 class="menu-title font-display text-6xl mb-6 opacity-0">Signature Selections</h2>
        <p class="menu-subtitle font-body text-stone-400 text-xl opacity-0 max-w-2xl mx-auto">Each item is crafted with premium ingredients and timeless techniques</p>
      </div>
      
      <!-- Auto-Scrolling Menu Carousel -->
      <div class="relative mb-16">
        <div class="menu-carousel-wrapper overflow-hidden">
          <div id="menu-carousel" class="flex gap-8 menu-carousel">
            <!-- Croissant -->
            <div class="menu-card bg-white text-black overflow-hidden group flex-shrink-0 w-80 shadow-2xl hover:shadow-amber-900/50 transition-all duration-500">
              <div class="aspect-[4/5] bg-stone-200 overflow-hidden relative">
                <img src="/images/MenuItems/croissant.jpg" alt="Butter Croissant" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700">
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div class="p-8">
                <h3 class="font-display text-2xl mb-3">Butter Croissant</h3>
                <p class="font-body text-stone-600 text-sm leading-relaxed">Golden, flaky layers made with French butter and patience</p>
              </div>
            </div>

            <!-- Classic Cheesecake -->
            <div class="menu-card bg-white text-black overflow-hidden group flex-shrink-0 w-80 shadow-2xl hover:shadow-amber-900/50 transition-all duration-500">
              <div class="aspect-[4/5] bg-stone-200 overflow-hidden relative">
                <img src="/images/MenuItems/Classic CheezCake.jpg" alt="Classic Cheesecake" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700">
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div class="p-8">
                <h3 class="font-display text-2xl mb-3">Classic Cheesecake</h3>
                <p class="font-body text-stone-600 text-sm leading-relaxed">Creamy, velvety perfection with a buttery graham cracker base</p>
              </div>
            </div>

            <!-- Crème Brûlée Doughnut -->
            <div class="menu-card bg-white text-black overflow-hidden group flex-shrink-0 w-80 shadow-2xl hover:shadow-amber-900/50 transition-all duration-500">
              <div class="aspect-[4/5] bg-stone-200 overflow-hidden relative">
                <img src="/images/MenuItems/Crème Brûlée doughnut.jpg" alt="Crème Brûlée Doughnut" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700">
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div class="p-8">
                <h3 class="font-display text-2xl mb-3">Crème Brûlée Doughnut</h3>
                <p class="font-body text-stone-600 text-sm leading-relaxed">Filled with vanilla custard and topped with caramelized sugar</p>
              </div>
            </div>

            <!-- Éclair -->
            <div class="menu-card bg-white text-black overflow-hidden group flex-shrink-0 w-80 shadow-2xl hover:shadow-amber-900/50 transition-all duration-500">
              <div class="aspect-[4/5] bg-stone-200 overflow-hidden relative">
                <img src="/images/MenuItems/Éclair.jpg" alt="Éclair" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700">
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div class="p-8">
                <h3 class="font-display text-2xl mb-3">Chocolate Éclair</h3>
                <p class="font-body text-stone-600 text-sm leading-relaxed">Light choux pastry filled with rich cream and glazed with chocolate</p>
              </div>
            </div>

            <!-- Macadamia Paris-Brest -->
            <div class="menu-card bg-white text-black overflow-hidden group flex-shrink-0 w-80 shadow-2xl hover:shadow-amber-900/50 transition-all duration-500">
              <div class="aspect-[4/5] bg-stone-200 overflow-hidden relative">
                <img src="/images/MenuItems/Macadamia Paris - Brest.jpg" alt="Macadamia Paris-Brest" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700">
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div class="p-8">
                <h3 class="font-display text-2xl mb-3">Macadamia Paris-Brest</h3>
                <p class="font-body text-stone-600 text-sm leading-relaxed">Ring-shaped choux with praline cream and macadamia nuts</p>
              </div>
            </div>

            <!-- Milk Cake -->
            <div class="menu-card bg-white text-black overflow-hidden group flex-shrink-0 w-80 shadow-2xl hover:shadow-amber-900/50 transition-all duration-500">
              <div class="aspect-[4/5] bg-stone-200 overflow-hidden relative">
                <img src="/images/MenuItems/Milk Cake.jpg" alt="Milk Cake" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700">
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div class="p-8">
                <h3 class="font-display text-2xl mb-3">Tres Leches Cake</h3>
                <p class="font-body text-stone-600 text-sm leading-relaxed">Moist sponge soaked in three kinds of milk, topped with whipped cream</p>
              </div>
            </div>

            <!-- Strawberry Cruffin -->
            <div class="menu-card bg-white text-black overflow-hidden group flex-shrink-0 w-80 shadow-2xl hover:shadow-amber-900/50 transition-all duration-500">
              <div class="aspect-[4/5] bg-stone-200 overflow-hidden relative">
                <img src="/images/MenuItems/Strawberry Cruffin.jpg" alt="Strawberry Cruffin" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700">
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div class="p-8">
                <h3 class="font-display text-2xl mb-3">Strawberry Cruffin</h3>
                <p class="font-body text-stone-600 text-sm leading-relaxed">Croissant-muffin hybrid filled with fresh strawberry cream</p>
              </div>
            </div>

            <!-- Duplicate items for seamless loop -->
            <div class="menu-card bg-white text-black overflow-hidden group flex-shrink-0 w-80 shadow-2xl hover:shadow-amber-900/50 transition-all duration-500">
              <div class="aspect-[4/5] bg-stone-200 overflow-hidden relative">
                <img src="/images/MenuItems/croissant.jpg" alt="Butter Croissant" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700">
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div class="p-8">
                <h3 class="font-display text-2xl mb-3">Butter Croissant</h3>
                <p class="font-body text-stone-600 text-sm leading-relaxed">Golden, flaky layers made with French butter and patience</p>
              </div>
            </div>

            <div class="menu-card bg-white text-black overflow-hidden group flex-shrink-0 w-80 shadow-2xl hover:shadow-amber-900/50 transition-all duration-500">
              <div class="aspect-[4/5] bg-stone-200 overflow-hidden relative">
                <img src="/images/MenuItems/Classic CheezCake.jpg" alt="Classic Cheesecake" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700">
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div class="p-8">
                <h3 class="font-display text-2xl mb-3">Classic Cheesecake</h3>
                <p class="font-body text-stone-600 text-sm leading-relaxed">Creamy, velvety perfection with a buttery graham cracker base</p>
              </div>
            </div>

            <div class="menu-card bg-white text-black overflow-hidden group flex-shrink-0 w-80 shadow-2xl hover:shadow-amber-900/50 transition-all duration-500">
              <div class="aspect-[4/5] bg-stone-200 overflow-hidden relative">
                <img src="/images/MenuItems/Crème Brûlée doughnut.jpg" alt="Crème Brûlée Doughnut" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700">
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div class="p-8">
                <h3 class="font-display text-2xl mb-3">Crème Brûlée Doughnut</h3>
                <p class="font-body text-stone-600 text-sm leading-relaxed">Filled with vanilla custard and topped with caramelized sugar</p>
              </div>
            </div>

            <div class="menu-card bg-white text-black overflow-hidden group flex-shrink-0 w-80 shadow-2xl hover:shadow-amber-900/50 transition-all duration-500">
              <div class="aspect-[4/5] bg-stone-200 overflow-hidden relative">
                <img src="/images/MenuItems/Éclair.jpg" alt="Éclair" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700">
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div class="p-8">
                <h3 class="font-display text-2xl mb-3">Chocolate Éclair</h3>
                <p class="font-body text-stone-600 text-sm leading-relaxed">Light choux pastry filled with rich cream and glazed with chocolate</p>
              </div>
            </div>

            <div class="menu-card bg-white text-black overflow-hidden group flex-shrink-0 w-80 shadow-2xl hover:shadow-amber-900/50 transition-all duration-500">
              <div class="aspect-[4/5] bg-stone-200 overflow-hidden relative">
                <img src="/images/MenuItems/Macadamia Paris - Brest.jpg" alt="Macadamia Paris-Brest" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700">
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div class="p-8">
                <h3 class="font-display text-2xl mb-3">Macadamia Paris-Brest</h3>
                <p class="font-body text-stone-600 text-sm leading-relaxed">Ring-shaped choux with praline cream and macadamia nuts</p>
              </div>
            </div>

            <div class="menu-card bg-white text-black overflow-hidden group flex-shrink-0 w-80 shadow-2xl hover:shadow-amber-900/50 transition-all duration-500">
              <div class="aspect-[4/5] bg-stone-200 overflow-hidden relative">
                <img src="/images/MenuItems/Milk Cake.jpg" alt="Milk Cake" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700">
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div class="p-8">
                <h3 class="font-display text-2xl mb-3">Tres Leches Cake</h3>
                <p class="font-body text-stone-600 text-sm leading-relaxed">Moist sponge soaked in three kinds of milk, topped with whipped cream</p>
              </div>
            </div>

            <div class="menu-card bg-white text-black overflow-hidden group flex-shrink-0 w-80 shadow-2xl hover:shadow-amber-900/50 transition-all duration-500">
              <div class="aspect-[4/5] bg-stone-200 overflow-hidden relative">
                <img src="/images/MenuItems/Strawberry Cruffin.jpg" alt="Strawberry Cruffin" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700">
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div class="p-8">
                <h3 class="font-display text-2xl mb-3">Strawberry Cruffin</h3>
                <p class="font-body text-stone-600 text-sm leading-relaxed">Croissant-muffin hybrid filled with fresh strawberry cream</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="text-center">
        <button id="view-menu-btn" class="px-14 py-5 border-2 border-white hover:bg-white hover:text-black transition-all duration-500 font-body tracking-widest text-sm uppercase shadow-xl transform hover:-translate-y-1">
          View Complete Menu
        </button>
      </div>
      
      <!-- Notification Toast -->
      <div id="menu-notification" class="fixed top-24 left-8 bg-white border-2 border-amber-800 px-10 py-6 shadow-2xl z-[9999] opacity-0 max-w-md">
        <div class="flex items-center gap-4">
          <div class="w-10 h-10 bg-amber-800 flex items-center justify-center flex-shrink-0">
            <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
          </div>
          <div>
            <p class="font-display text-xl text-black">Complete Menu Coming Soon</p>
            <p class="font-body text-sm text-stone-600 mt-1">We're crafting something special for you</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Gallery Section with Masonry Layout -->
  <section id="gallery" class="py-32 px-6 bg-gradient-to-b from-amber-50 to-white">
    <div class="container mx-auto max-w-7xl">
      <div class="text-center mb-20">
        <span class="gallery-badge inline-block font-body text-sm tracking-widest text-amber-800 uppercase mb-4 opacity-0">Visual Journey</span>
        <h2 class="gallery-title font-display text-6xl mb-6 opacity-0 text-black">The Leaven Experience</h2>
        <p class="gallery-subtitle font-body text-stone-600 text-xl opacity-0 max-w-2xl mx-auto">A space where aesthetics meet authenticity</p>
      </div>
      
      <div class="grid grid-cols-2 md:grid-cols-3 gap-6">
        <!-- Gallery Slideshow 0 (Tall Section) -->
        <div class="gallery-item col-span-1 row-span-2 opacity-0">
          <div class="h-full overflow-hidden relative group">
            <div class="gallery-slideshow-0 relative w-full h-full bg-transparent">
              <img src="/images/Gallery/1.jpg" alt="Gallery 1" class="gallery-slide-0 absolute inset-0 w-full h-full object-cover">
              <img src="/images/Gallery/6.jpg" alt="Gallery 6" class="gallery-slide-0 absolute inset-0 w-full h-full object-cover">
              <img src="/images/Gallery/11.jpg" alt="Gallery 11" class="gallery-slide-0 absolute inset-0 w-full h-full object-cover">
              <img src="/images/Gallery/16.png" alt="Gallery 16" class="gallery-slide-0 absolute inset-0 w-full h-full object-cover">
              <img src="/images/Gallery/21.jpg" alt="Gallery 21" class="gallery-slide-0 absolute inset-0 w-full h-full object-cover">
              <img src="/images/Gallery/26.jpg" alt="Gallery 26" class="gallery-slide-0 absolute inset-0 w-full h-full object-cover">
            </div>
            <div class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500 pointer-events-none z-10"></div>
          </div>
        </div>
        
        <!-- Gallery Slideshow 1 -->
        <div class="gallery-item col-span-1 opacity-0 bg-transparent">
          <div class="aspect-square overflow-hidden relative group bg-transparent">
            <div class="gallery-slideshow-1 relative w-full h-full bg-transparent">
              <img src="/images/Gallery/2.jpg" alt="Gallery 2" class="gallery-slide-1 absolute inset-0 w-full h-full object-cover">
              <img src="/images/Gallery/7.jpg" alt="Gallery 7" class="gallery-slide-1 absolute inset-0 w-full h-full object-cover">
              <img src="/images/Gallery/12.jpg" alt="Gallery 12" class="gallery-slide-1 absolute inset-0 w-full h-full object-cover">
              <img src="/images/Gallery/17.jpg" alt="Gallery 17" class="gallery-slide-1 absolute inset-0 w-full h-full object-cover">
              <img src="/images/Gallery/22.jpg" alt="Gallery 22" class="gallery-slide-1 absolute inset-0 w-full h-full object-cover">
              <img src="/images/Gallery/27.jpg" alt="Gallery 27" class="gallery-slide-1 absolute inset-0 w-full h-full object-cover">
            </div>
            <div class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500 pointer-events-none z-10"></div>
          </div>
        </div>
        
        <!-- Gallery Slideshow 2 -->
        <div class="gallery-item col-span-1 opacity-0 bg-transparent">
          <div class="aspect-square overflow-hidden relative group bg-transparent">
            <div class="gallery-slideshow-2 relative w-full h-full bg-transparent">
              <img src="/images/Gallery/3.jpg" alt="Gallery 3" class="gallery-slide-2 absolute inset-0 w-full h-full object-cover">
              <img src="/images/Gallery/8.jpg" alt="Gallery 8" class="gallery-slide-2 absolute inset-0 w-full h-full object-cover">
              <img src="/images/Gallery/13.jpg" alt="Gallery 13" class="gallery-slide-2 absolute inset-0 w-full h-full object-cover">
              <img src="/images/Gallery/18.jpg" alt="Gallery 18" class="gallery-slide-2 absolute inset-0 w-full h-full object-cover">
              <img src="/images/Gallery/23.jpg" alt="Gallery 23" class="gallery-slide-2 absolute inset-0 w-full h-full object-cover">
              <img src="/images/Gallery/28.jpg" alt="Gallery 28" class="gallery-slide-2 absolute inset-0 w-full h-full object-cover">
            </div>
            <div class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500 pointer-events-none z-10"></div>
          </div>
        </div>
        
        <!-- Gallery Slideshow 3 -->
        <div class="gallery-item col-span-1 opacity-0 bg-transparent">
          <div class="aspect-square overflow-hidden relative group bg-transparent">
            <div class="gallery-slideshow-3 relative w-full h-full bg-transparent">
              <img src="/images/Gallery/4.jpg" alt="Gallery 4" class="gallery-slide-3 absolute inset-0 w-full h-full object-cover">
              <img src="/images/Gallery/9.jpg" alt="Gallery 9" class="gallery-slide-3 absolute inset-0 w-full h-full object-cover">
              <img src="/images/Gallery/14.jpg" alt="Gallery 14" class="gallery-slide-3 absolute inset-0 w-full h-full object-cover">
              <img src="/images/Gallery/19.jpg" alt="Gallery 19" class="gallery-slide-3 absolute inset-0 w-full h-full object-cover">
              <img src="/images/Gallery/24.jpg" alt="Gallery 24" class="gallery-slide-3 absolute inset-0 w-full h-full object-cover">
              <img src="/images/Gallery/29.jpg" alt="Gallery 29" class="gallery-slide-3 absolute inset-0 w-full h-full object-cover">
            </div>
            <div class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500 pointer-events-none z-10"></div>
          </div>
        </div>
        
        <!-- Gallery Slideshow 4 -->
        <div class="gallery-item col-span-1 opacity-0 bg-transparent">
          <div class="aspect-square overflow-hidden relative group bg-transparent">
            <div class="gallery-slideshow-4 relative w-full h-full bg-transparent">
              <img src="/images/Gallery/5.jpg" alt="Gallery 5" class="gallery-slide-4 absolute inset-0 w-full h-full object-cover">
              <img src="/images/Gallery/10.jpg" alt="Gallery 10" class="gallery-slide-4 absolute inset-0 w-full h-full object-cover">
              <img src="/images/Gallery/15.jpg" alt="Gallery 15" class="gallery-slide-4 absolute inset-0 w-full h-full object-cover">
              <img src="/images/Gallery/20.jpg" alt="Gallery 20" class="gallery-slide-4 absolute inset-0 w-full h-full object-cover">
              <img src="/images/Gallery/25.jpg" alt="Gallery 25" class="gallery-slide-4 absolute inset-0 w-full h-full object-cover">
              <img src="/images/Gallery/30.jpg" alt="Gallery 30" class="gallery-slide-4 absolute inset-0 w-full h-full object-cover">
            </div>
            <div class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500 pointer-events-none z-10"></div>
          </div>
        </div>

        </div>
      </div>
    </div>
  </section>

  <!-- Testimonials with Enhanced Design -->
  <section class="py-32 px-6 bg-amber-50">
    <div class="container mx-auto max-w-6xl">
      <div class="text-center mb-20">
        <span class="testimonial-badge inline-block font-body text-sm tracking-widest text-amber-800 uppercase mb-4 opacity-0">Guest Stories</span>
        <h2 class="testimonial-title font-display text-6xl opacity-0 text-black">Loved by Many</h2>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="testimonial-card bg-white p-10 shadow-xl opacity-0 relative overflow-hidden group hover:shadow-2xl transition-all duration-500">
          <div class="absolute top-0 left-0 w-2 h-full bg-amber-800 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
          <div class="text-amber-800 mb-6 text-5xl font-serif">"</div>
          <p class="font-body text-stone-700 text-lg leading-relaxed mb-6 italic">Every visit feels like coming home. The croissants are absolute perfection.</p>
          <div class="flex items-center gap-4">
            <div class="w-12 h-12 bg-amber-200 rounded-full"></div>
            <div>
              <p class="font-display text-lg font-semibold text-black">Riya Kapoor</p>
              <p class="font-body text-sm text-stone-500">Regular Guest</p>
            </div>
          </div>
        </div>
        
        <div class="testimonial-card bg-white p-10 shadow-xl opacity-0 relative overflow-hidden group hover:shadow-2xl transition-all duration-500">
          <div class="absolute top-0 left-0 w-2 h-full bg-amber-800 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
          <div class="text-amber-800 mb-6 text-5xl font-serif">"</div>
          <p class="font-body text-stone-700 text-lg leading-relaxed mb-6 italic">Leaven is where my mornings begin calm, classy, and absolutely delicious.</p>
          <div class="flex items-center gap-4">
            <div class="w-12 h-12 bg-amber-200 rounded-full"></div>
            <div>
              <p class="font-display text-lg font-semibold text-black">Amit Sharma</p>
              <p class="font-body text-sm text-stone-500">Coffee Enthusiast</p>
            </div>
          </div>
        </div>
        
        <div class="testimonial-card bg-white p-10 shadow-xl opacity-0 relative overflow-hidden group hover:shadow-2xl transition-all duration-500">
          <div class="absolute top-0 left-0 w-2 h-full bg-amber-800 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
          <div class="text-amber-800 mb-6 text-5xl font-serif">"</div>
          <p class="font-body text-stone-700 text-lg leading-relaxed mb-6 italic">The ambience is unmatched. A true gem in the heart of Mysuru.</p>
          <div class="flex items-center gap-4">
            <div class="w-12 h-12 bg-amber-200 rounded-full"></div>
            <div>
              <p class="font-display text-lg font-semibold text-black">Priya Malhotra</p>
              <p class="font-body text-sm text-stone-500">Design Consultant</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Visit Section with Split Design -->
  <section id="visit" class="py-32 px-6 bg-stone-900 text-white">
    <div class="container mx-auto max-w-7xl">
      <div class="text-center mb-20">
        <span class="visit-badge inline-block font-body text-sm tracking-widest text-amber-400 uppercase mb-4 opacity-0">Find Us</span>
        <h2 class="visit-title font-display text-6xl mb-6 opacity-0">Visit Our Café</h2>
        <p class="visit-subtitle font-body text-stone-400 text-xl opacity-0">We're waiting to welcome you</p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-16">
        <div class="visit-info space-y-10 opacity-0">
          <div class="group">
            <div class="flex items-center gap-4 mb-4">
              <div class="w-12 h-12 bg-amber-800 flex items-center justify-center">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
              </div>
              <h3 class="font-display text-2xl">Location</h3>
            </div>
            <p class="font-body text-stone-400 text-lg pl-16 leading-relaxed">Valmiki Main Rd, Vani Vilas Mohalla<br/>Mysuru, Karnataka 570020</p>
          </div>
          
          <div class="group">
            <div class="flex items-center gap-4 mb-4">
              <div class="w-12 h-12 bg-amber-800 flex items-center justify-center">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
              </div>
              <h3 class="font-display text-2xl">Contact</h3>
            </div>
            <p class="font-body text-stone-400 text-lg pl-16 leading-relaxed">+91 98765 43210<br/>hello@leavencafe.in</p>
          </div>
          
          <div class="group">
            <div class="flex items-center gap-4 mb-4">
              <div class="w-12 h-12 bg-amber-800 flex items-center justify-center">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 class="font-display text-2xl">Hours</h3>
            </div>
            <p class="font-body text-stone-400 text-lg pl-16 leading-relaxed">Monday - Sunday<br/>8:00 AM – 10:00 PM</p>
          </div>
          
          <div class="pl-16 pt-4">
            <a href="https://maps.app.goo.gl/bPF4zdzmrdzYSFY1A" target="_blank" rel="noopener noreferrer" class="inline-block px-12 py-5 bg-amber-800 text-white hover:bg-amber-700 transition-all duration-500 font-body tracking-widest text-sm uppercase shadow-xl transform hover:-translate-y-1">
              Get Directions
            </a>
          </div>
        </div>
        
        <div class="visit-map opacity-0">
          <div class="aspect-square bg-stone-800 overflow-hidden shadow-2xl">
            <iframe 
              src="https://maps.google.com/maps?q=12.323187012249642,76.6352770527612&hl=en&z=17&output=embed"
              width="100%" 
              height="100%" 
              style="border:0;filter:grayscale(100%) invert(92%) contrast(83%);" 
              allowfullscreen="" 
              loading="lazy">
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
          <h3 class="font-display text-3xl mb-6">LEAVEN</h3>
          <p class="font-body text-stone-400 leading-relaxed">Crafting memorable experiences through exceptional coffee and baked goods since 2020.</p>
        </div>
        <div>
          <h4 class="font-display text-lg mb-4 text-amber-400">Quick Links</h4>
          <ul class="space-y-2 font-body text-stone-400">
            <li><a href="#home" class="hover:text-white transition-colors duration-300">Home</a></li>
            <li><a href="#about" class="hover:text-white transition-colors duration-300">About</a></li>
            <li><a href="#menu" class="hover:text-white transition-colors duration-300">Menu</a></li>
            <li><a href="#visit" class="hover:text-white transition-colors duration-300">Visit Us</a></li>
          </ul>
        </div>
  <div>
          <h4 class="font-display text-lg mb-4 text-amber-400">Follow Us</h4>
          <div class="flex gap-4">
            <a href="https://www.instagram.com/leaven_mysore?igsh=MWNmdjhqeHoycHdpZw==" target="_blank" rel="noopener noreferrer" class="w-12 h-12 bg-stone-800 hover:bg-amber-800 flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
          </div>
        </div>
      </div>
      <div class="border-t border-stone-800 pt-8 text-center">
        <p class="font-body text-sm text-stone-500">© 2025 Leaven Café. All rights reserved. Crafted with love in Mysuru.</p>
      </div>
    </div>
  </footer>
`

// Enhanced Animation System
function initAnimations() {
  // Navbar scroll effect with color change
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
    .to('.scroll-indicator', { opacity: 1, duration: 0.8 }, '-=0.3')

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

  // About Section - Split animation
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

  // Our Story Image Slideshow with Sliding Transition
  setTimeout(() => {
    const storySlides = document.querySelectorAll<HTMLImageElement>('.story-slide')
    
    if (storySlides.length > 1) {
      let currentSlide = 0
      let isAnimating = false
      
      // Initialize: Set first image visible at x:0, others off-screen to the right
      storySlides.forEach((slide, index) => {
        gsap.set(slide, { 
          x: index === 0 ? 0 : '100%',
          opacity: 1,
          zIndex: index === 0 ? 2 : 1
        })
      })
      
      // Function to slide to next image
      function showNextSlide() {
        if (isAnimating) return
        isAnimating = true
        
        const prevSlide = storySlides[currentSlide]
        currentSlide = (currentSlide + 1) % storySlides.length
        const nextSlide = storySlides[currentSlide]
        
        // Set next slide's z-index higher
        gsap.set(nextSlide, { zIndex: 2 })
        gsap.set(prevSlide, { zIndex: 1 })
        
        // Slide animation: current slides left, next slides in from right
        const tl = gsap.timeline({
          onComplete: () => {
            // Reset previous slide position for next cycle
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
      
      // Wait 3 seconds before starting, then change every 4 seconds
      setTimeout(() => {
        showNextSlide() // First transition
        setInterval(showNextSlide, 4000) // Then every 4 seconds
      }, 3000)
    }
  }, 500) // Wait for DOM to be fully ready

  // Gallery Slideshows with Staggered Transitions (All 5 sections including tall one)
  setTimeout(() => {
    console.log('Initializing gallery slideshows...')
    
    // Create slideshow function for each gallery section
    function createGallerySlideshow(slideClass: string) {
      const slides = document.querySelectorAll<HTMLImageElement>(`.${slideClass}`)
      console.log(`Found ${slides.length} slides for ${slideClass}`)
      
      if (slides.length > 1) {
        let currentSlide = 0
        let isAnimating = false
        
        // Initialize: Set first image visible at x:0, others off-screen to the right
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
        
        // Function to slide to next image
        function showNextSlide() {
          if (isAnimating) return
          isAnimating = true
          
          const prevSlide = slides[currentSlide]
          currentSlide = (currentSlide + 1) % slides.length
          const nextSlide = slides[currentSlide]
          
          // Set next slide's z-index higher
          gsap.set(nextSlide, { zIndex: 2 })
          gsap.set(prevSlide, { zIndex: 1 })
          
          // Slide animation: current slides left, next slides in from right
          const tl = gsap.timeline({
            onComplete: () => {
              // Reset previous slide position for next cycle
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
    
    // Create slideshow functions for all 5 sections (0-4, including tall section)
    const slideshow0 = createGallerySlideshow('gallery-slide-0')
    const slideshow1 = createGallerySlideshow('gallery-slide-1')
    const slideshow2 = createGallerySlideshow('gallery-slide-2')
    const slideshow3 = createGallerySlideshow('gallery-slide-3')
    const slideshow4 = createGallerySlideshow('gallery-slide-4')
    
    // Staggered transitions: one section at a time in sequence
    let currentSection = 0
    const slideshows = [slideshow0, slideshow1, slideshow2, slideshow3, slideshow4].filter((s): s is () => void => s !== null)
    
    function triggerNextSection() {
      const slideshow = slideshows[currentSection]
      if (slideshow) {
        slideshow()
      }
      currentSection = (currentSection + 1) % slideshows.length
    }
    
    // Start after 3 seconds, then trigger one section every 2.5 seconds
    if (slideshows.length > 0) {
      setTimeout(() => {
        triggerNextSection() // First section transitions
      setInterval(triggerNextSection, 2500) // Each section transitions every 2.5 seconds
    }, 3000)
  }
  
}, 1000) // Wait for DOM to be fully ready

  // Menu Section - Header reveal
  gsap.to('.menu-badge', {
    scrollTrigger: {
      trigger: '.menu-badge',
      start: 'top 80%',
    },
    opacity: 1,
    y: 0,
    duration: 0.6
  })

  gsap.to('.menu-title', {
    scrollTrigger: {
      trigger: '.menu-title',
      start: 'top 80%',
    },
    opacity: 1,
    y: 0,
    duration: 0.8,
    delay: 0.2,
    ease: 'power2.out'
  })

  gsap.to('.menu-subtitle', {
    scrollTrigger: {
      trigger: '.menu-subtitle',
      start: 'top 80%',
    },
    opacity: 1,
    duration: 0.8,
    delay: 0.4
  })

  // Auto-scrolling Carousel Animation with Seamless Loop
  const carousel = document.getElementById('menu-carousel')
  if (carousel) {
    const cardWidth = 320 + 32 // card width (w-80 = 320px) + gap (2rem = 32px)
    const totalItems = 7 // Number of unique items (duplicated once = 14 total)
    const loopWidth = cardWidth * totalItems
    
    // Start from 0 and animate to -loopWidth (one complete set)
    gsap.set(carousel, { x: 0 })
    
    const animation = gsap.to(carousel, {
      x: -loopWidth,
      duration: 35, // Speed of scrolling (higher = slower)
      ease: 'none',
      repeat: -1,
      // When animation completes one loop, reset to 0 (seamless because of duplicates)
      onRepeat: function() {
        gsap.set(carousel, { x: 0 })
      }
    })
    
    // Pause on hover with smooth transition
    carousel.addEventListener('mouseenter', () => {
      gsap.to(animation, { timeScale: 0, duration: 0.5, ease: 'power2.out' })
    })
    
    carousel.addEventListener('mouseleave', () => {
      gsap.to(animation, { timeScale: 1, duration: 0.5, ease: 'power2.in' })
    })
  }

  // Gallery Section - Masonry reveal
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

  // Testimonials - Fade in from bottom
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

// Menu notification handler
const viewMenuBtn = document.getElementById('view-menu-btn')
const menuNotification = document.getElementById('menu-notification')

if (viewMenuBtn && menuNotification) {
  // Set initial position off-screen to the left
  gsap.set(menuNotification, {
    x: -500,
    opacity: 0
  })
  
  viewMenuBtn.addEventListener('click', () => {
    // Show notification with smooth slide in from left animation
    gsap.to(menuNotification, {
      x: 0,
      opacity: 1,
      duration: 0.6,
      ease: 'power3.out'
    })
    
    // Hide notification after 3.5 seconds
    setTimeout(() => {
      gsap.to(menuNotification, {
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
