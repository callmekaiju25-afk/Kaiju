/* ============================================================
   KAIJU BEATS — script.js v3.0
   Features: cursor magnet, ripple clicks, toast notifs,
   staggered grid, glitch titles, keyboard shortcuts,
   audio visualizer bars, smooth scroll, skeleton loading
   ============================================================ */

const database = [
    { id:1,  title:"BERGHAIN",      genre:"hood-trap", cover:"assets/IMAGE/Rosalia.jpg",         audio:"assets/MP3/Berghain.mp3" },
    { id:2,  title:"MIRAGE",        genre:"trap",      cover:"assets/IMAGE/MIRAGE.jpg",           audio:"assets/MP3/MIRAGE.mp3" },
    { id:3,  title:"Distancia",     genre:"afro",      cover:"assets/IMAGE/Distancia.png",        audio:"assets/MP3/Distancia.mp3" },
    { id:4,  title:"Sunset",        genre:"afro",      cover:"assets/IMAGE/Sun-Set.png",          audio:"assets/MP3/Sun-Set.mp3" },
    { id:5,  title:"BAD",           genre:"afro",      cover:"assets/IMAGE/BAD.png",              audio:"assets/MP3/Bad.mp3" },
    { id:6,  title:"Elevation",     genre:"trap",      cover:"assets/IMAGE/Elevation.png",        audio:"assets/MP3/Elevation.mp3" },
    { id:7,  title:"Sabah",         genre:"Oriental",  cover:"assets/IMAGE/Sabah.png",            audio:"assets/MP3/Laïle.mp3" },
    { id:8,  title:"CARNAGE",       genre:"hood-trap", cover:"assets/IMAGE/CARNAGE.png",          audio:"assets/MP3/Carnage.mp3" },
    { id:9,  title:"EMPIRE",        genre:"trap",      cover:"assets/IMAGE/EMPIRE.png",           audio:"assets/MP3/EMPIRE.mp3" },
    { id:10, title:"Renaissance",   genre:"Boom bap",  cover:"assets/IMAGE/Renaissance.png",      audio:"assets/MP3/Renaissance.mp3" },
    { id:11, title:"MEMORIES",      genre:"Drill",     cover:"assets/IMAGE/MEMORIES.png",         audio:"assets/MP3/MEMORIES.mp3" },
    { id:12, title:"SHAKE",         genre:"Amapiano",  cover:"assets/IMAGE/SHAKE.png",            audio:"assets/MP3/SHAKE.mp3" },
    { id:13, title:"ECLIPSE",       genre:"Drill",     cover:"assets/IMAGE/ECLIPSE.png",          audio:"assets/MP3/ECLIPSE.mp3" },
    { id:14, title:"Solitude",      genre:"Acoustic",  cover:"assets/IMAGE/Solitude.png",         audio:"assets/MP3/Solitude.mp3" },
    { id:16, title:"Aurore",        genre:"Acoustic",  cover:"assets/IMAGE/Aurore.png",           audio:"assets/MP3/Aurore.mp3" },
    { id:17, title:"SOLUNA",        genre:"trap",      cover:"assets/IMAGE/SOLUNA.jpg",           audio:"assets/MP3/SOLUNA.mp3" },
    { id:18, title:"Ombre",         genre:"Drill",     cover:"assets/IMAGE/Ombre.png",            audio:"assets/MP3/Ombre.mp3" },
    { id:19, title:"LARME",         genre:"Acoustic",  cover:"assets/IMAGE/LARME.png",            audio:"assets/MP3/LARME.mp3" },
    { id:20, title:"TRUTH",         genre:"afro",      cover:"assets/IMAGE/TRUTH.png",            audio:"assets/MP3/TRUTH.mp3" },
    { id:21, title:"Illusion",      genre:"afro",      cover:"assets/IMAGE/Illusion.png",         audio:"assets/MP3/Illusion.mp3" },
    { id:22, title:"ZURA",          genre:"afro",      cover:"assets/IMAGE/ZURA.png",             audio:"assets/MP3/Zura.mp3" },
    { id:23, title:"ANUBIS",        genre:"trap",      cover:"assets/IMAGE/Anubis.png",           audio:"assets/MP3/Anubis.mp3" },
    { id:24, title:"Brooklyn 1964", genre:"trap",      cover:"assets/IMAGE/BROOKLYN_1964.png",    audio:"assets/MP3/BROOKLYN_1964.mp3" },
    { id:25, title:"I KNOW",        genre:"afro",      cover:"assets/IMAGE/I_KNOW.png",           audio:"assets/MP3/I_Know.mp3" },
    { id:26, title:"SMOKE",         genre:"trap",      cover:"assets/IMAGE/SMOKE.png",            audio:"assets/MP3/SMOKE.mp3" },
    { id:27, title:"NIGHT",         genre:"afro",      cover:"assets/IMAGE/NIGHT.png",            audio:"assets/MP3/NIGHT.mp3" },
    { id:28, title:"Heaven",        genre:"afro",      cover:"assets/IMAGE/Heaven.png",           audio:"assets/MP3/Heaven.mp3" },
    { id:29, title:"RANSOM",        genre:"Drill",     cover:"assets/IMAGE/Ransom.png",           audio:"assets/MP3/Ransom.mp3" },
    { id:30, title:"Vulture",       genre:"trap",      cover:"assets/IMAGE/VULTURE.png",          audio:"assets/MP3/vautour.mp3" },
    { id:31, title:"Heart Break",   genre:"Acoustic",  cover:"assets/IMAGE/HEARTBREAK.png",       audio:"assets/MP3/HeartBreak.mp3" },
];

// ==================== TRANSLATIONS ====================
const translations = {
    fr: {
        search:"Rechercher un beat...", allStyles:"TOUS LES STYLES",
        addToCart:"39.99€ — AJOUTER AU PANIER", cartTitle:"VOTRE PANIER",
        cartSub:"Beats sélectionnés", cartEmpty:"Votre panier est vide.",
        promo:"OFFRE 2+1 APPLIQUÉE ✅", checkout:"PASSER LA COMMANDE",
        contactSub:"Contactez-moi pour vos projets",
        promoBar:"2 BEATS ACHETÉS = LE 3ÈME OFFERT (AUTO-APPLIQUÉ)",
        prodBy:"PROD BY KAIJU", beatsSelected:"Beats sélectionnés",
        socialsSub:"Retrouve-moi sur les réseaux",
        toastAdded:"ajouté au panier 🎵", toastDuplicate:"déjà dans le panier",
        shuffleLabel:"SHUFFLE", testimonialsSubtitle:"Ce que disent les artistes",
    },
    en: {
        search:"Search a beat...", allStyles:"ALL STYLES",
        addToCart:"39.99€ — ADD TO CART", cartTitle:"YOUR CART",
        cartSub:"Selected beats", cartEmpty:"Your cart is empty.",
        promo:"2+1 DEAL APPLIED ✅", checkout:"PLACE ORDER",
        contactSub:"Contact me for your projects",
        promoBar:"BUY 2 BEATS = GET THE 3RD FREE (AUTO-APPLIED)",
        prodBy:"PROD BY KAIJU", beatsSelected:"Selected beats",
        socialsSub:"Find me on social media",
        toastAdded:"added to cart 🎵", toastDuplicate:"already in cart",
        shuffleLabel:"SHUFFLE", testimonialsSubtitle:"What artists say",
    }
};

let currentLang = localStorage.getItem('kaijuLang') || 'fr';

const readmeContent = {
    fr:`<div class="readme-warn">⚠️</div><h2>ATTENTION – CONDITIONS D'UTILISATION</h2>
        <div class="readme-block"><p>L'utilisation <strong>gratuite</strong> est autorisée uniquement sur <span class="highlight">YouTube</span>, y compris pour les vidéos monétisées, à condition de créditer correctement le producteur.</p></div>
        <div class="readme-block"><p>Toute <strong>utilisation commerciale</strong> (Spotify, Apple Music, etc.) nécessite l'achat d'une <strong>licence</strong>.</p></div>
        <div class="readme-block"><p>Il est <strong>strictement interdit</strong> d'enregistrer cette prod auprès d'organismes <span class="highlight">(BMI, ASCAP, OMPI…)</span> ou d'activer un <strong>Content ID</strong> sans licence exclusive.</p></div>
        <div class="readme-divider"></div>
        <div class="readme-important"><p><strong>Important :</strong> Crédite obligatoirement <span class="highlight">"prod. Kaiju"</span> et inclue le lien du beat dans la description.</p></div>`,
    en:`<div class="readme-warn">⚠️</div><h2>WARNING – USAGE TERMS</h2>
        <div class="readme-block"><p><strong>Free use</strong> is permitted on <span class="highlight">YouTube</span> only, including monetized videos, provided proper credit is given.</p></div>
        <div class="readme-block"><p>Any <strong>commercial use</strong> (Spotify, Apple Music, etc.) requires the purchase of a <strong>license</strong>.</p></div>
        <div class="readme-block"><p>It is <strong>strictly prohibited</strong> to register any song with PROs <span class="highlight">(BMI, ASCAP, WIPO…)</span> or apply <strong>Content ID</strong> without an exclusive license.</p></div>
        <div class="readme-divider"></div>
        <div class="readme-important"><p><strong>Important:</strong> Credit <span class="highlight">"prod. Kaiju"</span> and include the beat link in the video description.</p></div>`
};

// ==================== CURSOR PREMIUM ====================
// Déclaration globale pour que les fonctions cursor soient accessibles partout
let _cursorDot, _cursorRing, _cmx=0, _cmy=0, _crx=0, _cry=0;

function _initCursor() {
    _cursorDot  = document.getElementById('cursorDot');
    _cursorRing = document.getElementById('cursorRing');
    if (!_cursorDot || !_cursorRing) return;

    // Rendre visible dès le premier move
    document.addEventListener('mousemove', e => {
        _cmx = e.clientX; _cmy = e.clientY;
        _cursorDot.style.left = _cmx + 'px';
        _cursorDot.style.top  = _cmy + 'px';
        _cursorDot.style.opacity = '1';
        _cursorRing.style.opacity = '1';
    });

    // Ring avec lag fluide
    (function _animRing() {
        _crx += (_cmx - _crx) * 0.1;
        _cry += (_cmy - _cry) * 0.1;
        _cursorRing.style.left = _crx + 'px';
        _cursorRing.style.top  = _cry + 'px';
        requestAnimationFrame(_animRing);
    })();

    // Click
    document.addEventListener('mousedown', () => {
        _cursorDot.classList.add('clicking');
        _cursorRing.classList.add('clicking');
        createClickRipple(_cmx, _cmy);
    });
    document.addEventListener('mouseup', () => {
        _cursorDot.classList.remove('clicking');
        _cursorRing.classList.remove('clicking');
    });

    _bindCursorHover();

    // Observer cartes dynamiques
    new MutationObserver(() => {
        document.querySelectorAll('.beat-card:not([data-cursor])').forEach(card => {
            card.setAttribute('data-cursor', '1');
            _addCursorHover(card);
        });
    }).observe(document.getElementById('beatsGrid') || document.body, { childList:true, subtree:true });
}

function _addCursorHover(el) {
    el.addEventListener('mouseenter', () => {
        _cursorDot  && _cursorDot.classList.add('hovering');
        _cursorRing && _cursorRing.classList.add('hovering');
    });
    el.addEventListener('mouseleave', () => {
        _cursorDot  && _cursorDot.classList.remove('hovering');
        _cursorRing && _cursorRing.classList.remove('hovering');
    });
}

function _bindCursorHover() {
    document.querySelectorAll('button, a, input, .lang-btn, .beat-card, .custom-select-item').forEach(_addCursorHover);
}

// Init dès que le DOM est prêt (pas besoin d'attendre load)
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', _initCursor);
} else {
    _initCursor();
}

// Ripple visuel au clic
function createClickRipple(x, y) {
    const r = document.createElement('div');
    r.style.cssText = `
        position:fixed; left:${x}px; top:${y}px; width:6px; height:6px;
        border-radius:50%; border:1px solid rgba(193,18,31,0.8);
        transform:translate(-50%,-50%) scale(1); pointer-events:none; z-index:999997;
        animation:click-ripple .5s ease-out forwards;
    `;
    document.head.insertAdjacentHTML('beforeend',
        `<style>@keyframes click-ripple{to{transform:translate(-50%,-50%) scale(5);opacity:0}}</style>`
    );
    document.body.appendChild(r);
    setTimeout(() => r.remove(), 500);
}

// ==================== TOAST NOTIFICATIONS ====================
function showToast(msg, type = 'success') {
    const existing = document.querySelector('.kaiju-toast');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.className = 'kaiju-toast';
    const color = type === 'warn' ? '#F59E0B' : type === 'error' ? '#EF4444' : '#C1121F';
    toast.style.cssText = `
        position:fixed; bottom:90px; right:24px; z-index:99998;
        background:#0f0f0f; border:1px solid ${color}40;
        border-left:3px solid ${color};
        color:#F1F5F9; font-family:'Space Mono',monospace; font-size:0.72rem;
        padding:12px 18px; border-radius:10px;
        box-shadow:0 8px 32px rgba(0,0,0,0.6);
        animation:toast-in .4s cubic-bezier(0.34,1.56,0.64,1);
        max-width:260px; letter-spacing:0.5px;
    `;
    toast.textContent = msg;
    document.head.insertAdjacentHTML('beforeend',
        `<style>@keyframes toast-in{from{opacity:0;transform:translateX(30px) scale(0.9)}to{opacity:1;transform:translateX(0) scale(1)}}
         @keyframes toast-out{from{opacity:1;transform:translateX(0)}to{opacity:0;transform:translateX(30px)}}</style>`
    );
    document.body.appendChild(toast);
    setTimeout(() => {
        toast.style.animation = 'toast-out .3s ease forwards';
        setTimeout(() => toast.remove(), 300);
    }, 2800);
}

// ==================== LANGUE ====================
window.setLang = (lang) => {
    currentLang = lang;
    localStorage.setItem('kaijuLang', lang);
    document.getElementById('langModal').classList.add('hidden');
    document.getElementById('readmeBtnLabel').textContent = lang === 'fr' ? 'LIS MOI' : 'READ ME';
    applyTranslations(lang);
};

function applyTranslations(lang) {
    const t = translations[lang];
    document.getElementById('searchInput').placeholder = t.search;
    document.getElementById('cartTitle')  && (document.getElementById('cartTitle').textContent  = t.cartTitle);
    document.getElementById('cartSub')    && (document.getElementById('cartSub').textContent    = t.cartSub);
    document.getElementById('socialsSub') && (document.getElementById('socialsSub').textContent = t.socialsSub);
    document.querySelector('.promo-bar span') && (document.querySelector('.promo-bar span').textContent = t.promoBar);
    document.getElementById('shuffleBtnLabel') && (document.getElementById('shuffleBtnLabel').textContent = t.shuffleLabel);
    document.getElementById('testimonialsSubtitle') && (document.getElementById('testimonialsSubtitle').textContent = t.testimonialsSubtitle);
    render();
}

// ==================== AUDIO ====================
let cart = JSON.parse(localStorage.getItem('kaijuCart') || '[]');
const mainAudio  = document.getElementById('mainAudio');
const pBtn       = document.getElementById('pPlayPause');
const progressBar = document.getElementById('pProgress');
const PREVIEW_LIMIT = 30;
const YOUTUBE_URL   = 'https://www.youtube.com/@Call_Me_KaijuBeats';

window.playBeat = (id) => {
    const b = database.find(x => x.id === id);
    if (!b) return;
    const player = document.getElementById('audioPlayer');

    if (mainAudio.dataset.currentId == id) {
        toggleAudio();
        return;
    }

    mainAudio.dataset.currentId = id;
    mainAudio.src = b.audio;
    document.getElementById('pTitle').textContent = b.title;
    document.getElementById('pCover').src = b.cover;

    // Afficher player avec animation
    player.style.display = 'block';
    player.style.animation = 'none';
    void player.offsetWidth;
    player.style.animation = 'player-slide-up .4s cubic-bezier(0.34,1.56,0.64,1)';

    mainAudio.play().then(() => {
        pBtn.innerHTML = '<i class="fas fa-pause"></i>';
        animateNowPlaying(id);
    }).catch(() => {});
};

// Animation "now playing" sur la card
function animateNowPlaying(id) {
    document.querySelectorAll('.beat-card').forEach(c => c.classList.remove('now-playing'));
    // Ajouter style dynamique une seule fois
    if (!document.getElementById('now-playing-style')) {
        const s = document.createElement('style');
        s.id = 'now-playing-style';
        s.textContent = `.now-playing{border-color:rgba(193,18,31,0.5)!important;box-shadow:0 0 0 1px rgba(193,18,31,0.2),var(--shadow-hover)!important}
        .now-playing::before{transform:scaleX(1)!important}`;
        document.head.appendChild(s);
    }
    const card = document.querySelector(`.beat-card[data-id="${id}"]`);
    if (card) { card.classList.add('now-playing'); }
}

function toggleAudio() {
    if (mainAudio.paused) {
        mainAudio.play();
        pBtn.innerHTML = '<i class="fas fa-pause"></i>';
    } else {
        mainAudio.pause();
        pBtn.innerHTML = '<i class="fas fa-play"></i>';
    }
}

pBtn.onclick = toggleAudio;
window.changeTime = (amount) => { mainAudio.currentTime = Math.max(0, mainAudio.currentTime + amount); };

function updateSliderGradient(el, pct) {
    el.style.background = `linear-gradient(to right, var(--violet) 0%, var(--violet) ${pct}%, rgba(123,44,191,0.15) ${pct}%, rgba(123,44,191,0.15) 100%)`;
}

progressBar.oninput = (e) => {
    const seekTime = (e.target.value / 100) * mainAudio.duration;
    mainAudio.currentTime = seekTime;
    updateSliderGradient(progressBar, e.target.value);
};

mainAudio.ontimeupdate = () => {
    if (isNaN(mainAudio.duration)) return;
    if (mainAudio.currentTime >= PREVIEW_LIMIT) {
        mainAudio.pause();
        mainAudio.currentTime = 0;
        pBtn.innerHTML = '<i class="fas fa-play"></i>';
        showYoutubePopup();
        return;
    }
    const prog = (mainAudio.currentTime / mainAudio.duration) * 100;
    progressBar.value = prog;
    updateSliderGradient(progressBar, prog);
    document.querySelector('.player-progress-fill').style.width = prog + '%';
    document.getElementById('timeCurrent').textContent = formatTime(mainAudio.currentTime);
    document.getElementById('timeTotal').textContent   = formatTime(Math.min(PREVIEW_LIMIT, mainAudio.duration));
};

mainAudio.onended = () => {
    pBtn.innerHTML = '<i class="fas fa-play"></i>';
    if (shuffleMode) { shuffleIndex++; if (shuffleIndex >= shuffleQueue.length) buildShuffleQueue(lastPlayedId); playShuffle(shuffleIndex); }
};

function formatTime(sec) {
    const m = Math.floor(sec/60), s = Math.floor(sec%60);
    return `${m}:${s<10?'0':''}${s}`;
}

function showYoutubePopup() {
    document.getElementById('ytPopup') && document.getElementById('ytPopup').remove();
    const isFr = currentLang === 'fr';
    const popup = document.createElement('div');
    popup.id = 'ytPopup';
    popup.innerHTML = `
        <div class="yt-popup-overlay" onclick="this.parentElement.remove()"></div>
        <div class="yt-popup-card">
            <div class="yt-popup-icon">🎵</div>
            <h3 class="yt-popup-title">${isFr?'EXTRAIT TERMINÉ':'PREVIEW ENDED'}</h3>
            <p class="yt-popup-msg">${isFr?'Fais un tour sur ma chaîne YouTube pour écouter la version complète !':'Check out my YouTube channel for the full version!'}</p>
            <a href="${YOUTUBE_URL}" target="_blank" class="yt-popup-btn"><i class="fab fa-youtube"></i> ${isFr?'VOIR SUR YOUTUBE':'WATCH ON YOUTUBE'}</a>
            <button class="yt-popup-close" onclick="this.closest('#ytPopup').remove()">${isFr?'Fermer':'Close'}</button>
        </div>`;
    document.body.appendChild(popup);
}

// ==================== VOLUME ====================
document.getElementById('volControl').oninput = (e) => {
    mainAudio.volume = e.target.value;
    updateSliderGradient(document.getElementById('volControl'), e.target.value * 100);
};
// Mute toggle
document.getElementById('volBtn') && (document.getElementById('volBtn').onclick = () => {
    const vol = document.getElementById('volControl');
    if (mainAudio.volume > 0) {
        mainAudio._prevVol = mainAudio.volume;
        mainAudio.volume = 0;
        vol.value = 0;
    } else {
        mainAudio.volume = mainAudio._prevVol || 1;
        vol.value = mainAudio.volume;
    }
    updateSliderGradient(vol, mainAudio.volume * 100);
    document.querySelector('.vol-icon i').className = mainAudio.volume === 0 ? 'fas fa-volume-mute' : 'fas fa-volume-up';
});

// ==================== CART ====================
window.addToCart = (id) => {
    const b = database.find(x => x.id === id);
    const t = translations[currentLang];
    if (cart.find(item => item.id === id)) {
        showToast(`"${b.title}" ${t.toastDuplicate}`, 'warn');
        return;
    }
    cart.push(b);
    updateCart();
    saveCart();
    // Badge pop animation
    const badge = document.getElementById('cartCount');
    badge.classList.remove('pop');
    void badge.offsetWidth;
    badge.classList.add('pop');
    showToast(`"${b.title}" ${t.toastAdded}`, 'success');
};

function updateCart() {
    const t = translations[currentLang];
    document.getElementById('cartCount').textContent = cart.length;
    const itemsEl  = document.getElementById('cartItems');
    const totalArea = document.getElementById('cartTotalArea');
    if (cart.length === 0) {
        itemsEl.innerHTML  = `<p style="text-align:center;padding:24px;color:var(--text-soft);font-family:var(--font-b);font-size:0.75rem">${t.cartEmpty}</p>`;
        totalArea.innerHTML = '';
        return;
    }
    itemsEl.innerHTML = cart.map((b, i) => `
        <div class="cart-item">
            <span>${b.title}</span>
            <button onclick="removeFromCart(${i})" title="Retirer"><i class="fas fa-trash-alt"></i></button>
        </div>`).join('');
    let total = 0;
    for (let i=1;i<=cart.length;i++) { if(i%3!==0) total+=39.99; }
    totalArea.innerHTML = `
        <div class="total-box">
            <h3>TOTAL : ${total.toFixed(2)}€</h3>
            ${cart.length>=3?`<p style="color:var(--violet-hi);font-size:0.7rem;margin-bottom:10px;font-family:var(--font-b)">${t.promo}</p>`:''}
            <button class="checkout-btn" onclick="checkout()"><span>${t.checkout}</span></button>
        </div>`;
}

window.removeFromCart = (i) => {
    cart.splice(i,1);
    updateCart();
    saveCart();
};
window.checkout = () => { saveCart(); window.location.href='checkout.html'; };
function saveCart() { localStorage.setItem('kaijuCart', JSON.stringify(cart)); }

// ==================== MODALS ====================
const modals = {
    socials: ['socialsBtn','socialsModal','closeSocials'],
    cart:    ['cartBtn','cartModal','closeCart'],
    contact: ['contactBtn','contactModal','closeContact'],
};
Object.values(modals).forEach(([openId, modalId, closeId]) => {
    document.getElementById(openId)?.addEventListener('click',  () => document.getElementById(modalId).classList.add('active'));
    document.getElementById(closeId)?.addEventListener('click', () => document.getElementById(modalId).classList.remove('active'));
});
// Close on overlay click
document.querySelectorAll('.modal-overlay').forEach(el => {
    el.addEventListener('click', () => el.closest('.modal').classList.remove('active'));
});

document.getElementById('readmeBtn').onclick = () => {
    document.getElementById('readmeContent').innerHTML = readmeContent[currentLang];
    document.getElementById('readmeModal').classList.add('active');
};
document.getElementById('closeReadme').onclick = () => document.getElementById('readmeModal').classList.remove('active');

// ==================== KEYBOARD SHORTCUTS ====================
document.addEventListener('keydown', e => {
    if (e.target.tagName === 'INPUT') return;
    if (e.code === 'Space') { e.preventDefault(); toggleAudio(); }
    if (e.code === 'ArrowRight') changeTime(5);
    if (e.code === 'ArrowLeft')  changeTime(-5);
    if (e.code === 'ArrowUp')   { mainAudio.volume = Math.min(1, mainAudio.volume + 0.1); updateSliderGradient(document.getElementById('volControl'), mainAudio.volume*100); }
    if (e.code === 'ArrowDown') { mainAudio.volume = Math.max(0, mainAudio.volume - 0.1); updateSliderGradient(document.getElementById('volControl'), mainAudio.volume*100); }
    if (e.key === 'Escape') document.querySelectorAll('.modal.active').forEach(m => m.classList.remove('active'));
});

// ==================== FILTERS ====================
function runFilters() {
    const s = document.getElementById('searchInput').value.toLowerCase().trim();
    const g = document.getElementById('genreFilter').value;
    const filtered = database.filter(b =>
        b.title.toLowerCase().includes(s) &&
        (g === 'all' || b.genre === g)
    );
    render(filtered);
}

// Custom select dropdown
(function() {
    const select = document.getElementById('customSelect');
    const btn    = document.getElementById('customSelectBtn');
    const label  = document.getElementById('customSelectLabel');
    const list   = document.getElementById('customSelectList');
    const hidden = document.getElementById('genreFilter');
    const items  = list.querySelectorAll('.custom-select-item');

    btn.addEventListener('click', e => { e.stopPropagation(); select.classList.toggle('open'); });
    items.forEach(item => {
        item.addEventListener('click', () => {
            items.forEach(i => i.classList.remove('active'));
            item.classList.add('active');
            label.textContent = item.textContent;
            hidden.value = item.dataset.value;
            select.classList.remove('open');
            runFilters();
            if (shuffleMode) { buildShuffleQueue(); playShuffle(0); }
        });
    });
    document.addEventListener('click', () => select.classList.remove('open'));
})();

// ==================== SHUFFLE ====================
let shuffleMode  = false;
let shuffleQueue = [];
let shuffleIndex = 0;
let lastPlayedId = null;

function fisherYates(arr) {
    for (let i=arr.length-1;i>0;i--) {
        const j = Math.floor(Math.random()*(i+1));
        [arr[i],arr[j]] = [arr[j],arr[i]];
    }
    return arr;
}

function buildShuffleQueue(currentId=null) {
    const g = document.getElementById('genreFilter').value;
    const s = document.getElementById('searchInput').value.toLowerCase();
    const pool = database.filter(b => b.title.toLowerCase().includes(s) && (g==='all'||b.genre===g));
    let arr = fisherYates([...pool]);
    if (currentId && arr.length>1 && arr[0].id===currentId) arr.push(arr.shift());
    shuffleQueue = arr;
    shuffleIndex = 0;
}

function playShuffle(index) {
    if (!shuffleQueue.length) return;
    const b = shuffleQueue[index];
    lastPlayedId = b.id;
    document.getElementById('audioPlayer').style.display = 'block';
    document.getElementById('pTitle').textContent = b.title;
    document.getElementById('pCover').src = b.cover;
    pBtn.innerHTML = '<i class="fas fa-pause"></i>';
    mainAudio.src = b.audio;
    mainAudio.dataset.currentId = b.id;
    mainAudio.load();
    mainAudio.addEventListener('canplaythrough', function onReady() {
        mainAudio.play().catch(()=>{});
        mainAudio.removeEventListener('canplaythrough', onReady);
    });
    animateNowPlaying(b.id);
}

document.getElementById('shuffleBtn').onclick = () => {
    shuffleMode = !shuffleMode;
    document.getElementById('shuffleBtn').classList.toggle('active', shuffleMode);
    if (shuffleMode) { buildShuffleQueue(lastPlayedId); playShuffle(0); }
};

// ==================== RENDER ====================
const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add('animated'), i * 55);
            cardObserver.unobserve(entry.target);
        }
    });
}, { threshold:0.04 });

function observeCards() {
    document.querySelectorAll('.beat-card').forEach(card => cardObserver.observe(card));
}

function render(data = database) {
    const t    = translations[currentLang];
    const grid = document.getElementById('beatsGrid');

    // Skeleton fade out
    grid.style.opacity = '0.4';
    grid.style.transition = 'opacity .15s';

    setTimeout(() => {
        grid.innerHTML = data.length === 0
            ? `<div style="grid-column:1/-1;text-align:center;padding:60px;color:var(--text-soft);font-family:var(--font-b);font-size:0.8rem">
                Aucun beat trouvé 🔍
               </div>`
            : data.map((b, idx) => `
            <div class="beat-card" data-id="${b.id}" style="animation-delay:${idx*40}ms">
                <div class="card-shine"></div>
                <div class="img-box">
                    <img src="${b.cover}" loading="lazy" alt="${b.title}" onerror="this.src='assets/IMAGE/default.png'">
                    <div class="overlay-play">
                        <button onclick="playBeat(${b.id})" aria-label="Écouter ${b.title}">
                            <i class="fas fa-play"></i>
                        </button>
                    </div>
                </div>
                <div class="beat-meta" data-index="${String(idx+1).padStart(2,'0')}">
                    <div class="waveform">
                        <div class="wave-bar"></div><div class="wave-bar"></div><div class="wave-bar"></div>
                        <div class="wave-bar"></div><div class="wave-bar"></div><div class="wave-bar"></div>
                        <div class="wave-bar"></div>
                    </div>
                    <h3>${b.title}</h3>
                    <div class="genre-badge">${b.genre.toUpperCase()}</div>
                    <button class="buy-btn" onclick="addToCart(${b.id})">
                        <span>${t.addToCart}</span>
                    </button>
                </div>
            </div>`).join('');

        grid.style.opacity = '1';
        setTimeout(observeCards, 30);

        // Glitch sur titre principal
        const h1 = document.querySelector('.catalog-header h1');
        if (h1) { h1.classList.add('revealed'); }
    }, 120);
}

// ==================== NAVBAR SCROLL ====================
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('scrolled', window.scrollY > 40);
}, { passive:true });

// ==================== SCROLL REVEAL ====================
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); });
}, { threshold:0.08 });
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ==================== PARALLAX SUBTIL ===========================
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const svg = document.querySelector('.deco-svg');
    if (svg) svg.style.transform = `translateY(${scrollY * 0.08}px)`;
}, { passive:true });

// ==================== INIT ====================
document.addEventListener('DOMContentLoaded', () => {
    render();
    updateCart();
    updateSliderGradient(document.getElementById('volControl'), 100);

    document.getElementById('searchInput').addEventListener('input', runFilters);
    document.getElementById('genreFilter').addEventListener('change', runFilters);

    // Recherche live avec debounce
    let searchTimeout;
    document.getElementById('searchInput').addEventListener('input', () => {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(runFilters, 200);
    });

    // Animate catalog title
    setTimeout(() => {
        const h1 = document.querySelector('.catalog-header h1');
        if (h1) h1.classList.add('revealed');
    }, 400);
});
