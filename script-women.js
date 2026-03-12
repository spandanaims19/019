const products = [
    {
    id: 'W 001', name: 'Oversized Flannel',  type: 'jacket', price: '₹6,499',
    img: 'reve-images-1/Urban_Female_3.png',
    video: 'videos/Model_Video_Shoot_For_Clothing_Brand_slow.mp4'
    },
    {
    id: 'W 002', name: 'Wide Leg Cargo',      type: 'bottom', price: '₹3,999',
    img: 'reve-images-1/Korean_girl_wide_cargo_pants.png',
    video: 'videos/Model_Flaunts_Cargo_Pants_In_Video.mp4'
    },
    {
    id: 'W 003', name: 'Drop Shoulder Hoodie',type: 'hoodie', price: '₹5,199',
    img: 'reve-images-1/girl-drop-shoulder-hoodie.png',
    video: 'videos/Streetwear_Model_Video_Generation.mp4'
    },
    {
    id: 'W 004', name: 'Flare Cargo Pants',   type: 'bottom', price: '₹3,799',
    img: 'reve-images-1/female_flare_cargo_pants_1.png',
    video: 'videos/download.mp4'
    },
    // {
    // id: 'W 005', name: 'Tech Zip Jacket',     type: 'jacket', price: '₹7,299',
    // img: 'reve-images-1/Female_Model_2.png',
    // video: 'videos/w-zip.mp4'
    // },
    // {
    // id: 'W 006', name: 'Structured Overshirt',type: 'jacket', price: '₹5,899',
    // img: 'reve-images-1/Female_Model_3.png',
    // video: 'videos/w-overshirt.mp4'
    // },
];

/* ── RENDER ─────────────────────────────── */
function renderProducts(filter = 'all') {
    const grid = document.getElementById('product-grid');
    grid.innerHTML = '';

    const filtered = filter === 'all'
    ? products
    : products.filter(p => p.type === filter);

    filtered.forEach((p, i) => {
    const card = document.createElement('div');
    card.className = 'flip-card';
    card.style.animationDelay = `${i * 0.06}s`;

    card.innerHTML = `
        <div class="flip-card-inner">

        <!-- FRONT: image -->
        <div class="flip-front">
            <img src="${p.img}" alt="${p.name}" loading="lazy" />
            <div class="card-info">
            <div class="card-title">
                <span class="id">${p.id}</span>
                <span class="name">${p.name}</span>
            </div>
            <span class="card-price">${p.price}</span>
            </div>
        </div>

        <!-- BACK: video -->
        <div class="flip-back">
            <video
            src="${p.video}"
            muted
            loop
            playsinline
            preload="none"
            ></video>
            <div class="card-info">
            <div class="card-title">
                <span class="id">${p.id}</span>
                <span class="name">${p.name}</span>
            </div>
            <span class="video-tag">▶ Preview</span>
            </div>
        </div>

        </div>
    `;

    /* ── play video on hover, pause on leave ── */
    const video = card.querySelector('video');

    card.addEventListener('mouseenter', () => {
        video.play().catch(() => {}); // catch autoplay block silently
    });

    card.addEventListener('mouseleave', () => {
        video.pause();
        video.currentTime = 0; // reset to start
    });

    grid.appendChild(card);
    });
}

/* ── FILTER ─────────────────────────────── */
function filterProducts(type, btn) {
    document.querySelectorAll('.filter-btn').forEach(b => {
    b.classList.remove('active');
    b.classList.add('ghost');
    });
    btn.classList.add('active');
    btn.classList.remove('ghost');
    renderProducts(type);
}

/* ── TICKER ─────────────────────────────── */
function buildTicker() {
    const msgs = ['Drop 01 Now Live','Free Shipping Above ₹2,999','No Restocks. Ever.','Limited Units Per Drop','Women\'s Drop 01'];
    const track = document.getElementById('ticker-track');
    [...msgs, ...msgs].forEach(m => {
    const span = document.createElement('span');
    span.textContent = m;
    track.appendChild(span);
    });
}

/* ── LOGO FLIPPER ───────────────────────── */
function buildLogo() {
    const logoEl = document.getElementById('logo');
    const dot = document.getElementById('logo-dot');
    const digits = ['0', '1', '9'];
    logoEl.innerHTML = '';
    logoEl.appendChild(dot);
    digits.forEach((d, i) => {
    const wrap = document.createElement('span');
    wrap.className = 'flipper-digit';
    const span = document.createElement('span');
    span.textContent = d;
    wrap.appendChild(span);
    logoEl.insertBefore(wrap, dot);
    setTimeout(() => span.classList.add('visible'), 400 + i * 160);
    });
    setTimeout(() => dot.classList.add('visible'), 1050);
}

/* ── NAV ────────────────────────────────── */
function openNav() {
    document.getElementById('nav-panel').classList.add('open');
    document.getElementById('nav-overlay').classList.add('open');
}

function closeNav() {
    document.getElementById('nav-panel').classList.remove('open');
    document.getElementById('nav-overlay').classList.remove('open');
}

/* ── CURSOR ─────────────────────────────── */
const cursor = document.getElementById('cursor');
if (cursor) {
    document.addEventListener('mousemove', e => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top  = e.clientY + 'px';
    });
    document.querySelectorAll('a, button').forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
    });
}

/* ── INIT ───────────────────────────────── */
buildTicker();
buildLogo();
renderProducts();