function buildTicker() {
    const msgs = ['Drop 01 Now Live','Free Shipping Above ₹2,999','No Restocks. Ever.','Limited Units Per Drop','New Drop Every Month'];
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

/* ── SCROLL REVEAL ──────────────────────── */
const revealEls = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
    if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
    }
    });
}, { threshold: 0.1 });

revealEls.forEach(el => observer.observe(el));

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