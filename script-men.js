const products = [
    // {
    // id: 'M 001', name: 'Graphic Hoodie',       type: 'hoodie',  price: '₹4,999',
    // img: 'reve-images-1/Male_Model_1.png',
    // video: 'videos/m-graphic-hoodie.mp4'
    // },
    {
    id: 'M 001', name: 'Structured Overshirt',     type: 'jacket',  price: '₹6,499',
    img: 'reve-images-1/british-boy-structured-overshirt.png',
    video: 'videos/structured-overshirt-video.mp4'
    },
    {
    id: 'M 002', name: 'Tank Top', type: 'jacket',  price: '₹4,499',
    img: 'reve-images-1/tank_top_2.png',
    video: 'videos/tanktop-male-video.mp4'
    },
    {
    id: 'M 003', name: 'Tech Zip Jacket',       type: 'jacket',  price: '₹7,299',
    img: 'reve-images-1/tech-zip-jacket-1.png',
    video: 'videos/m-zip-jacket.mp4'
    },
    {
    id: 'M 004', name: 'Drop Shoulder Hoodie',  type: 'hoodie',  price: '₹5,199',
    img: 'reve-images-1/male-drop-shoulder-hoodie.jpg',
    video: 'videos/Streetwear_Avant_Garde_Model_Video.mp4'
    },
    {
    id: 'M 005', name: 'Wide Cargo Pants',      type: 'bottom',  price: '₹3,999',
    img: 'reve-images-1/male-wide-cargo-pants.png',
    video: 'videos/m-cargo.mp4'
    },
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
        <div class="flip-back">
            <video src="${p.video}" muted loop playsinline preload="none"></video>
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

    const video = card.querySelector('video');
    card.addEventListener('mouseenter', () => video.play().catch(() => {}));
    card.addEventListener('mouseleave', () => { video.pause(); video.currentTime = 0; });

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
    const msgs = ['Drop 01 Now Live','Free Shipping Above ₹2,999','No Restocks. Ever.','Limited Units Per Drop','Men\'s Drop 01'];
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