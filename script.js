const products = [
    {
    id: '019–001', name: 'Graphic Hoodie',        type: 'hoodie',  price: '₹4,999',
    img: "reve-images-1/indian-girl-graphic-hoodie.png",
    hoverImg: "reve-images-1/indian-girl-graphic hoodie.png"
    },
    {
    id: '019–002', name: 'Oversized Flannel Jacket', type: 'jacket', price: '₹6,499',
    img: "reve-images-1/Urban_Female_3.png",
    hoverImg: "reve-images-2/Female_Model_3.png"
    },
    {
    id: '019–003', name: 'Wide Leg Cargo Pants',   type: 'bottom',  price: '₹3,999',
    img: 'reve-images-1/Korean_girl_wide_cargo_pants.png',
    hoverImg: 'reve-images-1/korean-girl-wide-cargo-pants-2.png'
    },
    {
    id: '019–004', name: 'Tech Zip Jacket',        type: 'jacket',  price: '₹7,299',
    img: 'reve-images-1/tech-zip-jacket-1.png',
    hoverImg: 'reve-images-1/tech-zip-jacket-2.png'
    },
    {
    id: '019–005', name: 'Tank Top',          type: 'bottom',  price: '₹4,499',
    img: "reve-images-1/tank_top_2.png",
    hoverImg: "reve-images-1/tank_top.png"
    },
    {
    id: '019–006', name: 'Drop Shoulder Hoodie',   type: 'hoodie',  price: '₹5,199',
    img: 'reve-images-1/male-drop-shoulder-hoodie.jpg',
    hoverImg: 'reve-images-1/male-drop-shoulder-hoodie-2.png'
    },
    {
    id: '019–007', name: 'Flare Cargo Pants',      type: 'bottom',  price: '₹3,799',
    img: 'reve-images-1/female_flare_cargo_pants_1.png',
    hoverImg: "reve-images-1/female_flare_cargo_pants.png"
    },
    {
    id: '019–008', name: 'Structured Overshirt',   type: 'jacket',  price: '₹5,899',
    img: 'reve-images-1/british-boy-structured-overshirt.png',
    hoverImg: "reve-images-1/british-boy-structured-overshirt-2.png" 
    },
];

/* ── RENDER ─────────────────────────────── */
function renderProducts(filter = 'all') {
    const grid = document.getElementById('product-grid');
    grid.querySelectorAll('.product-card').forEach(c => c.remove());

    const filtered = filter === 'all'
    ? products
    : products.filter(p => p.type === filter);

    filtered.forEach((p, i) => {
    const card = document.createElement('div');
    card.className = 'card card-media product-card';
    card.style.animationDelay = `${i * 0.05}s`;
    card.innerHTML = `
        <div class="card-image-wrap">
        <img src="${p.img}" alt="${p.name}" loading="lazy" />
        ${p.hoverImg ? `<img class="img-hover" src="${p.hoverImg}" alt="${p.name} hover" loading="lazy" />` : ''}
        </div>
        <div class="card-info">
        <div class="card-title">
            <span class="id">${p.id}</span>
            <span class="name">${p.name}</span>
        </div>
        <span class="card-price">${p.price}</span>
        </div>
    `;
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

/* ── LOGO FLIPPER ───────────────────────── */
function buildLogo() {
    const logoEl = document.getElementById('logo');
    const dot = document.getElementById('logo-dot');
    const digits = ['0', '1', '9'];

    // Clear existing flipper digits (keep dot)
    logoEl.innerHTML = '';
    logoEl.appendChild(dot);

    digits.forEach((d, i) => {
    const wrap = document.createElement('span');
    wrap.className = 'flipper-digit';
    const span = document.createElement('span');
    span.textContent = d;
    wrap.appendChild(span);
    // Insert before the dot
    logoEl.insertBefore(wrap, dot);
    setTimeout(() => span.classList.add('visible'), 150 + i * 130);
    });

    setTimeout(() => dot.classList.add('visible'), 700);
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

/* ── TICKER ─────────────────────────────── */
function buildTicker() {
    const msgs = [
    'Drop 01 Now Live',
    'Free Shipping Above ₹2,999',
    'No Restocks. Ever.',
    'Limited Units Per Drop',
    'New Drop Every Month',
    "Just For You"
    ];
    const track = document.getElementById('ticker-track');
    // Duplicate for seamless loop
    [...msgs, ...msgs].forEach(m => {
    const span = document.createElement('span');
    span.textContent = m;
    track.appendChild(span);
    });
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