/* =========================================================
   MAIN.JS — Instagram UI (3 Screens)
   Handles: profile tab switching, like button toggle,
            bottom nav active state
   ========================================================= */

document.addEventListener('DOMContentLoaded', () => {

  /* ---- 1. Profile tabs (Posts / Reels / Tagged) ---- */
  const profileTabs = document.querySelectorAll('.profile-tab');
  profileTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Remove active from all tabs
      profileTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
    });
  });

  /* ---- 2. Like button toggle ---- */
  const likeButtons = document.querySelectorAll('.like-btn');
  likeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const isLiked = btn.classList.toggle('liked');
      const svg = btn.querySelector('svg');
      if (isLiked) {
        svg.setAttribute('fill', 'var(--pink)');
        svg.setAttribute('stroke', 'none');
      } else {
        svg.setAttribute('fill', 'none');
        svg.setAttribute('stroke', 'currentColor');
      }

      // Update like count
      const post = btn.closest('.feed-post');
      if (post) {
        const likesEl = post.querySelector('.feed-post-likes');
        if (likesEl) {
          const current = parseInt(likesEl.dataset.count);
          const newCount = isLiked ? current + 1 : current - 1;
          likesEl.dataset.count = newCount;
          likesEl.textContent = newCount.toLocaleString() + ' likes';
        }
      }
    });
  });

  /* ---- 3. Bottom nav active state per phone ---- */
  const phones = document.querySelectorAll('.phone');
  phones.forEach(phone => {
    const navItems = phone.querySelectorAll('.bn-item');
    navItems.forEach(item => {
      item.addEventListener('click', () => {
        navItems.forEach(n => n.classList.remove('active'));
        item.classList.add('active');
      });
    });
  });

  /* ---- 4. Highlight / story click ripple ---- */
  const highlights = document.querySelectorAll('.hl, .story-item');
  highlights.forEach(hl => {
    hl.style.cursor = 'pointer';
    hl.addEventListener('click', () => {
      const ring = hl.querySelector('.hl-ring, .story-ring');
      if (ring) {
        ring.style.transform = 'scale(0.92)';
        setTimeout(() => ring.style.transform = '', 150);
      }
    });
  });

});
