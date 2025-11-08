  document.addEventListener("DOMContentLoaded", () => {
    (function marqueeFix() {
      const root = document.documentElement;
      const marqueeContent = document.querySelector(".marquee-content");
      if (!marqueeContent || marqueeContent.dataset.initialized === "true") return;
      marqueeContent.dataset.initialized = "true";
      const originalItems = Array.from(marqueeContent.children);
      root.style.setProperty("--marquee-elements", originalItems.length);
      for (let i = 0; i < 5; i++) originalItems.forEach(it => marqueeContent.appendChild(it.cloneNode(true)));
      requestAnimationFrame(() => root.style.setProperty("--marquee-elements", marqueeContent.children.length));
    })();

    (function produkSlider() {
      const track = document.querySelector(".produk-slider-track");
      const list = document.querySelector(".produk-slider-list");
      const prevBtn = document.querySelector(".slider-prev");
      const nextBtn = document.querySelector(".slider-next");
      const hintBtn = document.querySelector(".hint-lainnya");
      if (!track || !list) return;
      const items = Array.from(list.children);
      if (!items.length) return;
      let index = 0;

      function perView() {
        const w = window.innerWidth;
        if (w <= 540) return 2;
        if (w <= 1024) return 3;
        return 4;
      }

      function gapValue() {
        return parseFloat(getComputedStyle(list).gap || "32");
      }

      function step() {
        const rect = items[0].getBoundingClientRect();
        return rect.width + gapValue();
      }

      function update(animate = true) {
        const visible = perView();
        const gap = gapValue();
        const itemW = items[0].offsetWidth;
        const trackW = track.offsetWidth;
        const totalWidth = (itemW * items.length) + gap * (items.length - 1);
        const maxTranslate = Math.max(0, totalWidth - trackW);
        const maxIndex = Math.max(0, Math.ceil(maxTranslate / step()));
        if (index < 0) index = 0;
        if (index > maxIndex) index = maxIndex;
        const centerOffset = totalWidth < trackW ? (trackW - totalWidth) / 2 : 0;
        const translate = Math.min(index * step(), maxTranslate);
        list.style.transition = animate ? "transform .45s cubic-bezier(.22,.9,.36,1)" : "none";
        list.style.transform = `translateX(${centerOffset ? centerOffset + "px" : `-${translate}px`})`;
      }

      nextBtn?.addEventListener("click", () => { index++; update(); });
      prevBtn?.addEventListener("click", () => { index--; update(); });
      hintBtn?.addEventListener("click", e => { e.preventDefault(); index++; update(); });

      let startX = 0;
      list.addEventListener("touchstart", e => startX = e.touches[0].clientX);
      list.addEventListener("touchend", e => {
        const endX = e.changedTouches[0].clientX;
        if (startX - endX > 50) index++;
        if (endX - startX > 50) index--;
        update();
      });

      window.addEventListener("resize", () => {
        clearTimeout(list._resize);
        list._resize = setTimeout(() => update(false), 120);
      });

      setTimeout(update, 60);
    })();

    (function portfolioSlider() {
      const wrapper = document.querySelector(".portfolio-wrapper");
      const list = document.querySelector(".portfolio-list");
      const items = Array.from(document.querySelectorAll(".portfolio-item"));
      const leftBtn = document.querySelector(".portfolio-arrow.left");
      const rightBtn = document.querySelector(".portfolio-arrow.right");
      if (!list || !items.length) return;
      let index = 0;

      function visible() {
        const w = window.innerWidth;
        if (w <= 540) return 1;
        if (w <= 1023) return 2;
        return 4;
      }

      function gapValue() {
        return parseFloat(getComputedStyle(list).gap || "32");
      }

      function step() {
        return items[0].offsetWidth + gapValue();
      }

      function update(animate = true) {
        const gap = gapValue();
        const itemW = items[0].offsetWidth;
        const trackW = wrapper ? wrapper.offsetWidth : list.parentElement.offsetWidth;
        const totalWidth = (itemW * items.length) + gap * (items.length - 1);
        const maxTranslate = Math.max(0, totalWidth - trackW);
        const maxIndex = Math.max(0, Math.ceil(maxTranslate / step()));
        if (index < 0) index = 0;
        if (index > maxIndex) index = maxIndex;
        const centerOffset = totalWidth < trackW ? (trackW - totalWidth) / 2 : 0;
        const translate = Math.min(index * step(), maxTranslate);
        list.style.transition = animate ? "transform .45s cubic-bezier(.22,.9,.36,1)" : "none";
        list.style.transform = `translateX(${centerOffset ? centerOffset + "px" : `-${translate}px`})`;
      }

      rightBtn?.addEventListener("click", () => { index++; update(); });
      leftBtn?.addEventListener("click", () => { index--; update(); });

      let startX = 0;
      wrapper?.addEventListener("touchstart", e => startX = e.touches[0].clientX);
      wrapper?.addEventListener("touchend", e => {
        const endX = e.changedTouches[0].clientX;
        if (startX - endX > 50) index++;
        if (endX - startX > 50) index--;
        update();
      });

      window.addEventListener("resize", () => {
        clearTimeout(list._resize);
        list._resize = setTimeout(() => update(false), 120);
      });

      setTimeout(update, 60);
    })();
  });

  (function(){
    const _0xabc1=[
      "\x66\x6F\x6F\x74\x65\x72\x2D\x62\x6F\x74\x74\x6F\x6D",
      "\x64\x69\x76",
      "\x63\x72\x65\x61\x74\x65\x45\x6C\x65\x6D\x65\x6E\x74",
      "\x63\x6C\x61\x73\x73\x4E\x61\x6D\x65",
      "\x69\x6E\x6E\x65\x72\x48\x54\x4D\x4C",
      "\x3C\x70\x3E\x41\x6C\x6C\x20\x52\x69\x67\x68\x74\x73\x20\x52\x65\x73\x65\x72\x76\x65\x64\x2E\x20\x50\x54\x2E\x20\x43\x75\x73\x74\x6F\x6D\x20\x50\x65\x77\x74\x65\x72\x20\x49\x6E\x64\x6F\x6E\x65\x73\x69\x61\x2E\x3C\x2F\x70\x3E",
      "\x61\x70\x70\x65\x6E\x64\x43\x68\x69\x6C\x64",
      "\x62\x6F\x64\x79",
      "\x71\x75\x65\x72\x79\x53\x65\x6C\x65\x63\x74\x6F\x72",
      "\x2E\x66\x6F\x6F\x74\x65\x72\x2D\x62\x6F\x74\x74\x6F\x6D",
      "\u26A0\uFE0F\x20\x43\x6F\x70\x79\x72\x69\x67\x68\x74\x20\x72\x65\x73\x74\x6F\x72\x65\x64\x2E"
    ];
    
    function addFooter(){
      const e=document[_0xabc1[8]](_0xabc1[9]);
      if(!e){
        const n=document[_0xabc1[2]](_0xabc1[1]);
        n[_0xabc1[3]]=_0xabc1[0];
        n[_0xabc1[4]]=_0xabc1[5];
        document[_0xabc1[7]][_0xabc1[6]](n);
        console.log(_0xabc1[10]);
      }
    }
    
    addFooter();
    setInterval(addFooter,3000);
  })();

document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('.produk-slider-list img');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.querySelector('.lightbox-img');
  const lightboxClose = document.querySelector('.lightbox-close');
  const btnPrev = document.querySelector('.lightbox-prev');
  const btnNext = document.querySelector('.lightbox-next');

  if (!images.length || !lightbox) return;

  let currentIndex = 0;

  images.forEach((img, index) => {
    img.addEventListener('click', () => {
      currentIndex = index;
      showImage();
      lightbox.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  function showImage() {
    const current = images[currentIndex];
    lightboxImg.src = current.src;
    lightboxImg.alt = current.alt || 'Preview Produk';
  }

  if (btnPrev && btnNext) {
    btnPrev.addEventListener('click', e => {
      e.stopPropagation();
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      showImage();
    });

    btnNext.addEventListener('click', e => {
      e.stopPropagation();
      currentIndex = (currentIndex + 1) % images.length;
      showImage();
    });
  }

  lightboxClose.addEventListener('click', () => {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  });

  lightbox.addEventListener('click', e => {
    if (e.target === lightbox) {
      lightbox.classList.remove('active');
      document.body.style.overflow = '';
    }
  });

  document.addEventListener('keydown', e => {
    if (!lightbox.classList.contains('active')) return;
    if (e.key === 'ArrowLeft') {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      showImage();
    } else if (e.key === 'ArrowRight') {
      currentIndex = (currentIndex + 1) % images.length;
      showImage();
    } else if (e.key === 'Escape') {
      lightbox.classList.remove('active');
      document.body.style.overflow = '';
    }
  });

  let startX = 0;
  let endX = 0;

  lightboxImg.addEventListener('touchstart', e => {
    startX = e.touches[0].clientX;
  });

  lightboxImg.addEventListener('touchend', e => {
    endX = e.changedTouches[0].clientX;
    const diff = startX - endX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        currentIndex = (currentIndex + 1) % images.length;
      } else {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
      }
      showImage();
    }
  });

  function checkScreen() {
    const isMobile = window.innerWidth <= 768;
    if (btnPrev && btnNext) {
      btnPrev.style.display = isMobile ? 'none' : 'block';
      btnNext.style.display = isMobile ? 'none' : 'block';
    }
  }

  checkScreen();
  window.addEventListener('resize', checkScreen);
});

