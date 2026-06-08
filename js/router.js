import { products, getImageUrl } from './catalog.js';

const WISHLIST_KEY = 'suman-crochet-wishlist';
const state = {
    searchQuery: '',
    filter: 'all',
    priceFilter: 'all',
    colorFilter: 'all',
    wishlist: loadWishlist(),
    selectedInquiryItem: null,
    currentRoute: ''
};

const categoryLabels = {
    bookmarks: 'Bookmarks',
    earrings: 'Earrings',
    'hair-accessories': 'Hair Accessories',
    toys: 'Toys'
};

function getCategoryLabel(category) {
    return categoryLabels[category] || 'Items';
}

const views = {
    home: `
        <div class="container">
            <header class="hero">
                <h1>Handmade Magic!</h1>
                <p>100% handcrafted</p>
            </header>

            <h2 class="section-title">The Collection</h2>
            
            <div class="grid">
                <div class="card">
                    <div class="card-img-wrapper category-tile" style="cursor: pointer;" onclick="window.location.hash = '#/catalog/bookmarks'">🔖</div>
                    <div class="card-content">
                        <div>
                            <h3 class="card-title">Bookmarks</h3>
                            <p class="card-desc">Delicate, colorful structures to hold your place perfectly.</p>
                        </div>
                        <a href="#/catalog/bookmarks" class="btn btn-yellow" style="display: block; text-decoration: none; text-align: center;">Explore</a>
                    </div>
                </div>

                <div class="card">
                    <div class="card-img-wrapper category-tile" style="cursor: pointer;" onclick="window.location.hash = '#/catalog/earrings'">🌸</div>
                    <div class="card-content">
                        <div>
                            <h3 class="card-title">Earrings</h3>
                            <p class="card-desc">Intricately patterned, lightweight statements.</p>
                        </div>
                        <a href="#/catalog/earrings" class="btn btn-yellow" style="display: block; text-decoration: none; text-align: center;">Explore</a>
                    </div>
                </div>

                <div class="card">
                    <div class="card-img-wrapper category-tile" style="cursor: pointer;" onclick="window.location.hash = '#/catalog/hair-accessories'">🎀</div>
                    <div class="card-content">
                        <div>
                            <h3 class="card-title">Hair Accessories</h3>
                            <p class="card-desc">Charming, highly durable scrunchies and bands.</p>
                        </div>
                        <a href="#/catalog/hair-accessories" class="btn btn-yellow" style="display: block; text-decoration: none; text-align: center;">Explore</a>
                    </div>
                </div>

                <div class="card">
                    <div class="card-img-wrapper" style="cursor: pointer;" onclick="window.location.hash = '#/catalog/toys'">🧸</div>
                    <div class="card-content">
                        <div>
                            <h3 class="card-title">Toys</h3>
                            <p class="card-desc">Soft, structural amigurumi figures built with care.</p>
                        </div>
                        <a href="#/catalog/toys" class="btn btn-yellow" style="display: block; text-decoration: none; text-align: center;">Explore</a>
                    </div>
                </div>
            </div>
        </div>
    `,
    catalog: `
        <div class="container">
            <div class="catalog-header">
                <div>
                    <h2 class="section-title" id="catalog-title" style="margin-bottom: 0;">The Studio Collection</h2>
                    <p class="catalog-meta" id="catalog-meta">Search, filter, and save your favorite handmade pieces.</p>
                </div>
                <div class="catalog-actions">
                    <div class="search-group">
                        <input id="catalog-search" class="search-input" type="search" placeholder="Search bookmarks, earrings, hair accessories..." aria-label="Search products">
                        <div id="search-suggestions" class="search-suggestions" role="listbox" aria-label="Search suggestions"></div>
                    </div>
                    <a href="#/wishlist" class="btn btn-pink">Wishlist <span id="wishlist-count" class="badge">0</span></a>
                </div>
            </div>

            <div class="catalog-filters" style="display: flex; gap: 1rem; flex-wrap: wrap; margin-bottom: 1.5rem;">
                <div class="filter-group">
                    <label>Category</label>
                    <div>
                        <button class="btn btn-yellow active-filter" data-filter="all">All Items</button>
                        <button class="btn" data-filter="bookmarks">Bookmarks</button>
                        <button class="btn" data-filter="earrings">Earrings</button>
                        <button class="btn" data-filter="hair-accessories">Hair Accessories</button>
                    </div>
                </div>
                <div class="filter-group">
                    <label for="catalog-price-filter">Price</label>
                    <select id="catalog-price-filter" class="filter-select" aria-label="Filter by price range">
                        <option value="all">All Prices</option>
                        <option value="under-250">Under ₹250</option>
                        <option value="250-350">₹250 - ₹350</option>
                        <option value="over-350">Over ₹350</option>
                    </select>
                </div>
                <div class="filter-group">
                    <label for="catalog-color-filter">Color</label>
                    <select id="catalog-color-filter" class="filter-select" aria-label="Filter by color">
                        <option value="all">All Colors</option>
                    </select>
                </div>
            </div>

            <div class="grid" id="catalog-grid"></div>
        </div>
    `,
    wishlist: `
        <div class="container">
            <div class="catalog-header">
                <div>
                    <h2 class="section-title" style="margin-bottom: 0;">My Wishlist</h2>
                    <p class="catalog-meta">Saved favorites are kept here for easy browsing and ordering.</p>
                </div>
                <div class="catalog-actions">
                    <input id="catalog-search" class="search-input" type="search" placeholder="Search wishlist..." aria-label="Search wishlist">
                    <a href="#/catalog" class="btn btn-yellow">Shop All</a>
                </div>
            </div>

            <div class="grid" id="catalog-grid"></div>
            <div id="wishlist-empty" class="wishlist-empty">Your wishlist is empty. Browse the catalog to save favorites.</div>
        </div>
    `,
    contact: `
        <div class="container" style="max-width: 600px;">
            <div class="card" style="background-color: var(--white); padding: 3rem; transform: none; cursor: default;">
                <h2 class="section-title" style="margin-top: 0; background-color: var(--blue);">Send an Inquiry</h2>
                <p class="card-desc" style="text-align: left; font-size: 1.1rem; margin-bottom: 2rem;">
                    Interested in an item from the collection or want to request a custom creation? Drop a message here and we'll get right back to you!
                </p>

                <form id="inquiry-form" class="contact-form">
                    <div class="form-row">
                        <div class="form-control">
                            <label>Your Name</label>
                            <input type="text" id="form-name" required>
                        </div>
                        <div class="form-control">
                            <label>Email Address</label>
                            <input type="email" id="form-email" required>
                        </div>
                    </div>

                    <div class="form-control">
                        <label>Inquiry About</label>
                        <select id="form-item" class="filter-select" aria-label="Select item of inquiry">
                            <option value="">Select an item (optional)</option>
                        </select>
                    </div>

                    <div id="selected-product-preview" class="inquiry-product-preview" hidden></div>

                    <div class="form-control">
                        <label>Subject</label>
                        <input type="text" id="form-subject" required>
                    </div>

                    <div class="form-control">
                        <label>Phone Number (optional)</label>
                        <input type="tel" id="form-phone" placeholder="+91 123 456 7890">
                    </div>

                    <div class="form-control">
                        <label>Message or Custom Details</label>
                        <textarea id="form-message" rows="5" required></textarea>
                    </div>

                    <div id="form-feedback" class="form-feedback" aria-live="polite"></div>
                    <button type="submit" class="btn btn-pink submit-full">Submit Inquiry 💌</button>
                </form>
            </div>
        </div>
    `
};

function loadWishlist() {
    const raw = localStorage.getItem(WISHLIST_KEY);
    try {
        return raw ? JSON.parse(raw) : [];
    } catch {
        return [];
    }
}

function saveWishlist() {
    localStorage.setItem(WISHLIST_KEY, JSON.stringify(state.wishlist));
    updateWishlistBadge();
}

function updateWishlistBadge() {
    const count = state.wishlist.length;
    const headerBadge = document.getElementById('wishlist-count');
    const navBadge = document.getElementById('nav-wishlist-count');
    if (headerBadge) headerBadge.textContent = count;
    if (navBadge) navBadge.textContent = count;
}

function handleLocation() {
    const hash = window.location.hash || '#/';
    const [route, category] = hash.slice(2).split('/');
    const appContainer = document.getElementById('app');
    if (!appContainer) return;

    state.wishlist = loadWishlist();
    state.currentRoute = route;

    if (route === 'catalog') {
        state.filter = category || 'all';
        appContainer.innerHTML = views.catalog;
        initCatalogView();
    } else if (route === 'product') {
        const product = products.find(item => item.id === category);
        if (product) {
            appContainer.innerHTML = renderProductDetail(product);
            initProductDetailView(product);
        } else {
            appContainer.innerHTML = renderNotFound();
        }
    } else if (route === 'wishlist') {
        appContainer.innerHTML = views.wishlist;
        initWishlistView();
    } else if (route === 'contact') {
        state.selectedInquiryItem = category || null;
        appContainer.innerHTML = views.contact;
        initContactForm();
    } else {
        appContainer.innerHTML = views.home;
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
    updateQuickNav();
}

function renderCatalog(filterValue, searchQuery = '', wishlistPage = false) {
    const gridContainer = document.getElementById('catalog-grid');
    if (!gridContainer) return;

    let filteredProducts = wishlistPage
        ? products.filter(item => state.wishlist.includes(item.id))
        : products.filter(item => filterValue === 'all' || item.category === filterValue);

    const searchTerm = String(searchQuery || '').trim().toLowerCase();
    if (searchTerm) {
        filteredProducts = filteredProducts.filter(item => {
            const content = `${item.title} ${item.desc}`.toLowerCase();
            return content.includes(searchTerm);
        });
    }

    filteredProducts = applyFilterSets(filteredProducts);

    const wishlistEmpty = document.getElementById('wishlist-empty');
    if (wishlistEmpty) {
        wishlistEmpty.style.display = !filteredProducts.length ? 'block' : 'none';
    }

    if (!filteredProducts.length) {
        gridContainer.innerHTML = wishlistPage ? '' : `<div class="empty-state">${'No items found. Try a different search or category.'}</div>`;
        return;
    }

    gridContainer.innerHTML = filteredProducts.map(item => {
        const cardSrc = getImageUrl(item.imageId);
        let fallbackEmoji = '🧵';
        if (item.category === 'bookmarks') fallbackEmoji = '🔖';
        if (item.category === 'toys') fallbackEmoji = '🧸';
        if (item.id.startsWith('e')) fallbackEmoji = '🌸';
        if (item.id.startsWith('h')) fallbackEmoji = '🎀';
        const inWishlist = state.wishlist.includes(item.id);
        const wishlistLabel = wishlistPage ? 'Remove from Wishlist' : (inWishlist ? 'Remove from Wishlist' : 'Add to Wishlist');
        const wishlistButtonClass = inWishlist ? 'btn btn-yellow' : 'btn btn-pink';

        return `
            <div class="card">
                <div class="card-img-wrapper" ${cardSrc ? `onclick="openLightbox('${cardSrc}', '${item.title}')" onkeydown="if(event.key==='Enter'){openLightbox('${cardSrc}', '${item.title}')}" role="button" tabindex="0" aria-label="View image of ${item.title}"` : ''} style="${cardSrc ? 'cursor: zoom-in;' : 'cursor: default;'}">
                    ${cardSrc ? `<img src="${cardSrc}" alt="${item.title}" loading="lazy" decoding="async">` : `<span style="font-size: 4.5rem;">${fallbackEmoji}</span>`}
                </div>
                <div class="card-content">
                    <div>
                        <h3 class="card-title">${item.title}</h3>
                        <p class="card-desc">${item.desc}</p>
                        <p class="card-price">₹${item.price}</p>
                    </div>
                    <div class="card-actions">
                        <button type="button" class="${wishlistButtonClass} btn-wishlist" data-wishlist-id="${item.id}">${wishlistLabel}</button>
                        <a href="#/product/${item.id}" class="btn btn-yellow" style="width: 100%; display: block; text-decoration: none; text-align: center;">View Details</a>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    attachWishlistHandlers();
}

function initCatalogView() {
    const searchInput = document.getElementById('catalog-search');
    if (searchInput) {
        searchInput.value = state.searchQuery;
        searchInput.addEventListener('input', (event) => {
            state.searchQuery = event.target.value;
            renderSearchSuggestions(state.searchQuery);
            renderCatalog(state.filter, state.searchQuery, false);
        });
        searchInput.addEventListener('blur', () => setTimeout(() => renderSearchSuggestions(''), 150));
    }
    updateWishlistBadge();
    setActiveFilterButtons(state.filter);
    highlightCategoryHeader();
    renderCatalog(state.filter, state.searchQuery, false);
    initFilterEvents();
    initFilterSelectors();
}

function initWishlistView() {
    const searchInput = document.getElementById('catalog-search');
    if (searchInput) {
        searchInput.value = state.searchQuery;
        searchInput.addEventListener('input', (event) => {
            state.searchQuery = event.target.value;
            renderSearchSuggestions(state.searchQuery);
            renderCatalog('all', state.searchQuery, true);
        });
        searchInput.addEventListener('blur', () => setTimeout(() => renderSearchSuggestions(''), 150));
    }
    updateWishlistBadge();
    renderCatalog('all', state.searchQuery, true);
    initFilterEvents();
    initFilterSelectors();
}

function initFilterSelectors() {
    const priceFilter = document.getElementById('catalog-price-filter');
    const colorFilter = document.getElementById('catalog-color-filter');
    if (priceFilter) {
        priceFilter.value = state.priceFilter;
        priceFilter.addEventListener('change', (event) => {
            state.priceFilter = event.target.value;
            renderCatalog(state.filter, state.searchQuery, state.currentRoute === 'wishlist');
        });
    }
    if (colorFilter) {
        const uniqueColors = [...new Set(products.flatMap(item => item.colors || []))];
        colorFilter.innerHTML = '<option value="all">All Colors</option>' + uniqueColors.map(color => `<option value="${color.toLowerCase()}">${color}</option>`).join('');
        colorFilter.value = state.colorFilter;
        colorFilter.addEventListener('change', (event) => {
            state.colorFilter = event.target.value;
            renderCatalog(state.filter, state.searchQuery, state.currentRoute === 'wishlist');
        });
    }
}

function applyFilterSets(items) {
    return items.filter(item => {
        if (state.priceFilter === 'under-250' && item.price >= 250) return false;
        if (state.priceFilter === '250-350' && (item.price < 250 || item.price > 350)) return false;
        if (state.priceFilter === 'over-350' && item.price <= 350) return false;
        if (state.colorFilter !== 'all' && item.colors) {
            return item.colors.some(color => color.toLowerCase() === state.colorFilter);
        }
        return true;
    });
}

function highlightCategoryHeader() {
    const catalogTitle = document.getElementById('catalog-title');
    const catalogMeta = document.getElementById('catalog-meta');
    if (!catalogTitle || !catalogMeta) return;
    if (state.filter === 'bookmarks') {
        catalogTitle.textContent = 'Bookmarks';
        catalogMeta.textContent = 'Find the perfect stitched bookmark for your reading ritual.';
    } else if (state.filter === 'earrings') {
        catalogTitle.textContent = 'Crochet Earrings';
        catalogMeta.textContent = 'Lightweight handmade earrings for everyday wear and gifting.';
    } else if (state.filter === 'hair-accessories') {
        catalogTitle.textContent = 'Hair Accessories';
        catalogMeta.textContent = 'Charming handmade bands, clips, and scrunchies.';
    } else if (state.filter === 'toys') {
        catalogTitle.textContent = 'Crochet Toys';
        catalogMeta.textContent = 'Soft toys crafted for playtime, gifting, and keepsakes.';
    } else {
        catalogTitle.textContent = 'The Studio Collection';
        catalogMeta.textContent = 'Search, filter, and save your favorite handmade pieces.';
    }
}

function renderSearchSuggestions(term) {
    const suggestions = document.getElementById('search-suggestions');
    if (!suggestions) return;
    const normalized = String(term || '').trim().toLowerCase();
    if (!normalized) {
        suggestions.innerHTML = '';
        return;
    }
    const matches = products
        .filter(item => item.title.toLowerCase().includes(normalized))
        .slice(0, 6)
        .map(item => `<button type="button" class="search-suggestion" role="option" data-id="${item.id}">${item.title}</button>`)
        .join('');
    suggestions.innerHTML = matches;
    suggestions.querySelectorAll('.search-suggestion').forEach(button => {
        button.addEventListener('click', () => {
            const id = button.getAttribute('data-id');
            if (id) {
                window.location.hash = `#/product/${id}`;
            }
        });
    });
}

function initFilterEvents() {
    const filterButtons = document.querySelectorAll('[data-filter]');
    filterButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const filter = e.target.getAttribute('data-filter');
            if (!filter) return;
            window.location.hash = `#/catalog/${filter}`;
        });
    });
}

function attachWishlistHandlers() {
    const buttons = document.querySelectorAll('[data-wishlist-id]');
    buttons.forEach((button) => {
        button.addEventListener('click', (event) => {
            event.stopPropagation();
            const itemId = button.getAttribute('data-wishlist-id');
            toggleWishlist(itemId);
            renderCurrentView();
        });
    });
}

function toggleWishlist(itemId) {
    const itemIndex = state.wishlist.indexOf(itemId);
    if (itemIndex === -1) {
        state.wishlist.push(itemId);
    } else {
        state.wishlist.splice(itemIndex, 1);
    }
    saveWishlist();
}

function setActiveFilterButtons(filterValue) {
    const filterButtons = document.querySelectorAll('[data-filter]');
    filterButtons.forEach(button => {
        if (button.getAttribute('data-filter') === filterValue) {
            button.classList.add('btn-yellow');
        } else {
            button.classList.remove('btn-yellow');
        }
    });
}

function renderCurrentView() {
    handleLocation();
}

function initContactForm() {
  const form = document.getElementById("inquiry-form");
  if (!form) return;

  const itemSelect = document.getElementById("form-item");
  const selectedProduct = products.find(p => p.id === state.selectedInquiryItem);

  if (itemSelect) {
    itemSelect.innerHTML = `
      <option value="">Select an item (optional)</option>
      ${products.map(product => `<option value="${product.id}">${product.title}</option>`).join('')}
    `;
    if (selectedProduct) {
      itemSelect.value = selectedProduct.id;
    }
    itemSelect.addEventListener('change', () => {
      renderInquiryProductPreview(products.find(p => p.id === itemSelect.value));
    });
  }

  if (selectedProduct) {
    const subjectInput = document.getElementById("form-subject");
    const messageInput = document.getElementById("form-message");
    if (subjectInput && !subjectInput.value) {
      subjectInput.value = `Inquiry about ${selectedProduct.title}`;
    }
    if (messageInput && !messageInput.value) {
      messageInput.value = `Hello, I am interested in the ${selectedProduct.title}. Please share availability, shipping, and pricing details.`;
    }
  }

  renderInquiryProductPreview(selectedProduct);

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn.innerHTML;
    submitBtn.innerHTML = "Sending... ⏳";
    submitBtn.disabled = true;

    const payload = {
      name: document.getElementById("form-name").value,
      email: document.getElementById("form-email").value,
      itemId: itemSelect ? itemSelect.value : "",
      itemTitle: itemSelect ? (products.find(p => p.id === itemSelect.value) || {}).title || "" : "",
      itemPrice: itemSelect ? (products.find(p => p.id === itemSelect.value) || {}).price || "" : "",
      subject: document.getElementById("form-subject").value,
      message: document.getElementById("form-message").value
    };

    try {
      // REPLACE WITH YOUR ACTUAL GOOGLE APPS SCRIPT URL
      const scriptURL = "https://script.google.com/macros/s/AKfycbxKvO1Sz-FBvHF1OpZcOVQuvB4eapqFAs7fF9KbP9nXk4rxV3vJqCu5sKr2U7NLqkEX/exec";

      // Using mode: "no-cors" forces the browser to send the payload safely 
      // without getting blocked by Google's server redirect headers.
      await fetch(scriptURL, {
        method: "POST",
        mode: "no-cors", 
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      alert(`Thanks ${payload.name}! Your inquiry has been sent straight to Suman's inbox. 💌`);
      form.reset();

    } catch (error) {
      console.error("Submission Error:", error);
      alert("Oops! Something went wrong while sending the message. Please try again.");
    } finally {
      submitBtn.innerHTML = originalBtnText;
      submitBtn.disabled = false;
    }
  });
}

function renderInquiryProductPreview(product) {
  const preview = document.getElementById("selected-product-preview");
  if (!preview) return;
  if (!product) {
    preview.hidden = true;
    preview.innerHTML = "";
    return;
  }

  preview.hidden = false;
  preview.innerHTML = `
    <img src="${getImageUrl(product.imageId)}" alt="${product.title}" loading="lazy" decoding="async">
    <div>
      <h3>${product.title}</h3>
      <p>${getCategoryLabel(product.category)} · ₹${product.price}</p>
    </div>
  `;
}

window.openLightbox = function(src, title) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');

    if (!lightbox || !src) return;

    lightboxImg.src = src;
    lightboxCaption.textContent = title;
    lightbox.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    lightbox.setAttribute('aria-modal', 'true');
    lightbox.focus();
};

window.closeLightbox = function() {
    const lightbox = document.getElementById('lightbox');
    if (!lightbox) return;
    lightbox.style.display = 'none';
    document.body.style.overflow = 'auto';
};

window.addEventListener('hashchange', handleLocation);
document.addEventListener('DOMContentLoaded', handleLocation);
document.addEventListener('DOMContentLoaded', initQuickNav);
window.addEventListener('scroll', updateQuickNav, { passive: true });
window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
});

function initQuickNav() {
    const scrollTopButton = document.getElementById('scroll-top-button');
    if (scrollTopButton) {
        scrollTopButton.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
    updateQuickNav();
}

function updateQuickNav() {
    const scrollTopButton = document.getElementById('scroll-top-button');
    if (!scrollTopButton) return;
    scrollTopButton.classList.toggle('is-visible', window.scrollY > 240);
}

function renderProductDetail(product) {
    const colorsHtml = (product.colors || []).map(color => `<span class="product-chip">${color}</span>`).join('');
    const materialsHtml = (product.materials || []).map(material => `<li>${material}</li>`).join('');
    return `
        <div class="container">
            <div class="product-detail-grid">
                <div class="product-media">
                    <img src="${getImageUrl(product.imageId)}" alt="${product.title}" loading="lazy" decoding="async">
                </div>
                <div class="product-detail-copy">
                    <span class="product-category">${getCategoryLabel(product.category).toUpperCase()}</span>
                    <h2 class="section-title">${product.title}</h2>
                    <p class="product-price-detail">₹${product.price}</p>
                    <p class="card-desc">${product.desc}</p>
                    <div class="product-meta">
                        <div><strong>Colors:</strong> ${colorsHtml}</div>
                        <div><strong>Materials:</strong> <ul>${materialsHtml}</ul></div>
                    </div>
                    <div class="product-actions">
                        <button type="button" class="btn btn-pink" id="product-wishlist-button" data-wishlist-id="${product.id}">${state.wishlist.includes(product.id) ? 'Remove from Wishlist' : 'Add to Wishlist'}</button>
                        <a href="#/contact/${product.id}" class="btn btn-yellow">Inquire About This Item</a>
                        <a href="#/catalog/${product.category}" class="btn">Back to ${getCategoryLabel(product.category)}</a>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function initProductDetailView(product) {
    const wishlistButton = document.getElementById('product-wishlist-button');
    if (wishlistButton) {
        wishlistButton.addEventListener('click', () => {
            toggleWishlist(product.id);
            wishlistButton.textContent = state.wishlist.includes(product.id) ? 'Remove from Wishlist' : 'Add to Wishlist';
        });
    }
}

function renderNotFound() {
    return `
        <div class="container">
            <div class="empty-state">Item not found. Please return to the catalog.</div>
        </div>
    `;
}
