// novacss.js - Arbitrary value parser
(function () {
  function applyArbitrary(el, cls) {
    // get base (remove responsive prefixes like sm:, md:, etc)
    const base = cls.split(':').pop();
    const match = base.match(/([a-zA-Z0-9-]+)\[(.*)\]$/);
    if (!match) return;
    const prop = match[1]; // e.g., text-, bg-, m-, p-, w-, h-, bgimg-
    const value = match[2];

    // mapping
  if (prop === 'text-') {
  el.style.fontSize = value;
} else if (prop === 'text-color-') {
  el.style.color = value;
} else if (prop === 'bg-') {
  el.style.background = value;
} else if (prop === 'bgimg-') {
  el.style.backgroundImage = value;
  el.style.backgroundSize = 'cover';
  el.style.backgroundPosition = 'center';
} else if (prop === 'm-') {
      el.style.margin = value;
    } else if (prop === 'p-') {
      el.style.padding = value;
    } else if (prop === 'w-') {
      el.style.width = value;
    } else if (prop === 'h-') {
      el.style.height = value;
    } else if (prop === 'rounded-') {
      el.style.borderRadius = value;
    }
  }

  function handleElement(el) {
    if (!el.className) return;
    const classes = String(el.className).split(/\s+/);
    classes.forEach(c => {
      if (c.includes('[') && c.includes(']')) {
        // For responsive prefixes, apply only if media matches
        const parts = c.split(':');
        if (parts.length > 1) {
          const prefix = parts[0];
          let ok = true;
          // support simple prefixes: sm (>=640), md (>=768), lg (>=1024)
          if (prefix === 'sm') ok = window.matchMedia('(min-width:640px)').matches;
          if (prefix === 'md') ok = window.matchMedia('(min-width:768px)').matches;
          if (prefix === 'lg') ok = window.matchMedia('(min-width:1024px)').matches;
          if (ok) applyArbitrary(el, c);
        } else {
          applyArbitrary(el, c);
        }
      }
    });
  }

  function init() {
    document.querySelectorAll('*').forEach(el => handleElement(el));
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else { init(); }

  // Re-apply on resize (for responsive arbitrary classes)
  window.addEventListener('resize', function () {
    document.querySelectorAll('*').forEach(el => handleElement(el));
  });
})();
