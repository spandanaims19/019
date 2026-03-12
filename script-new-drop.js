    /* ═══════════════════════════════════════════
       ← CHANGE THIS DATE TO SET YOUR DROP TIME
       Format: 'YYYY-MM-DDTHH:MM:SS'
    ═══════════════════════════════════════════ */

const DROP_DATE = new Date('2026-04-01T12:00:00');

    /* ── PRODUCTS ───────────────────────────── */
    const products = [
      {
        id: 'D01–001', name: 'Graphic Hoodie',type: 'hoodie',  price: '₹4,999',
        img: 'reve-images-1/indian-girl-graphic-hoodie.png'
      },
      {
        id: 'D01–002', name: 'Oversized Flannel',type: 'jacket',  price: '₹6,499',
        img: 'reve-images-1/british-boy-structured-overshirt.png'
      },
      {
        id: 'D01–003', name: 'Wide Leg Cargo', type: 'bottom',  price: '₹3,999',
        img: 'reve-images-1/Korean_girl_wide_cargo_pants.png'
      },
      {
        id: 'D01–004', name: 'Tech Zip Jacket',type: 'jacket',  price: '₹7,299',
        img: 'reve-images-1/tech-zip-jacket-1.png'
      },
      {
        id: 'D01–005', name: 'Drop Shoulder Hoodie',type: 'hoodie',  price: '₹5,199',
        img: 'reve-images-1/male-drop-shoulder-hoodie.jpg'
      },
      {
        id: 'D01–006', name: 'Tank Top',type: 'jacket',  price: '₹4,499',
        img: 'reve-images-1/tank_top_2.png'
      },
    ];

    /* ── STATE ──────────────────────────────── */
    let isLive = false;

    /* ── RENDER CARDS ───────────────────────── */
    function renderCards() {
      const grid = document.getElementById('drop-grid');
      grid.innerHTML = '';

      products.forEach((p) => {
        const card = document.createElement('div');
        card.className = 'drop-card';

        card.innerHTML = `
          <div class="drop-card-img">
            <img src="${p.img}" alt="${p.name}" loading="lazy" />
          </div>
          <div class="drop-card-info">
            <div class="drop-card-title">
              <span class="id">${p.id}</span>
              <span class="name">${p.name}</span>
            </div>
            <span class="drop-card-price">${isLive ? p.price : '—'}</span>
          </div>
          <!-- lock overlay — hidden when live -->
          <div class="lock-overlay ${isLive ? 'hidden' : ''}">
            <div class="lock-icon">🔒</div>
            <div class="lock-text">Drops Soon</div>
          </div>
        `;

        grid.appendChild(card);
      });

      /* if already live on page load, unlock immediately */
      if (isLive) unlockCards();
    }

    /* ── UNLOCK ANIMATION ───────────────────── */
    function unlockCards() {
      const cards = document.querySelectorAll('.drop-card');
      cards.forEach((card, i) => {
        setTimeout(() => {
          card.classList.add('unlocked');
          const overlay = card.querySelector('.lock-overlay');
          if (overlay) overlay.classList.add('hidden');
          /* update price from — to real price */
          const priceEl = card.querySelector('.drop-card-price');
          if (priceEl) priceEl.textContent = products[i].price;
        }, i * 120);
      });

      /* update section label */
      document.getElementById('section-label').textContent = 'Drop 01 — Now Live';

      /* show live banner */
      document.getElementById('live-banner').classList.add('visible');

      /* update status text */
      document.getElementById('drop-status').innerHTML =
        '<span class="live">●</span> Drop 01 is live — limited units';
    }

    /* ── COUNTDOWN ──────────────────────────── */
    function pad(n) { return String(n).padStart(2, '0'); }

    function animateTick(el, newVal) {
      if (el.textContent !== newVal) {
        el.textContent = newVal;
        el.classList.remove('tick');
        void el.offsetWidth; /* force reflow to restart animation */
        el.classList.add('tick');
      }
    }

    function updateCountdown() {
      const now  = new Date();
      const diff = DROP_DATE - now;

      if (diff <= 0) {
        /* DROP IS LIVE */
        document.getElementById('cd-days').textContent  = '00';
        document.getElementById('cd-hours').textContent = '00';
        document.getElementById('cd-mins').textContent  = '00';
        document.getElementById('cd-secs').textContent  = '00';

        if (!isLive) {
          isLive = true;
          unlockCards();
        }
        return;
      }

      const days  = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const mins  = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const secs  = Math.floor((diff % (1000 * 60)) / 1000);

      animateTick(document.getElementById('cd-days'),  pad(days));
      animateTick(document.getElementById('cd-hours'), pad(hours));
      animateTick(document.getElementById('cd-mins'),  pad(mins));
      animateTick(document.getElementById('cd-secs'),  pad(secs));
    }

    /* ── TICKER ─────────────────────────────── */
    function buildTicker() {
      const msgs = ['Drop 01 Coming','No Restocks. Ever.','Limited Units','Free Shipping Above ₹2,999','Set Your Alarm'];
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

    /* check if drop is already live before rendering */
    isLive = new Date() >= DROP_DATE;
    renderCards();

    /* start countdown — ticks every second */
    updateCountdown();
    setInterval(updateCountdown, 1000);