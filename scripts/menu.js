  const menuBtn = document.querySelector('.menu-btn');
  const nav     = document.getElementById('siteNav');
  const overlay = document.getElementById('overlay');

  function openMenu(){
    nav.classList.add('open');
    overlay.hidden = false;
    menuBtn.setAttribute('aria-expanded','true');
    document.body.style.overflow = 'hidden'; // يمنع تمرير الصفحة تحت القائمة
  }
  function closeMenu(){
    nav.classList.remove('open');
    overlay.hidden = true;
    menuBtn.setAttribute('aria-expanded','false');
    document.body.style.overflow = '';
  }

  menuBtn?.addEventListener('click', () => {
    nav.classList.contains('open') ? closeMenu() : openMenu();
  });

  overlay?.addEventListener('click', closeMenu);

  // إغلاق بزر Esc
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && nav.classList.contains('open')) closeMenu();
  });

  // إغلاق تلقائي بعد الضغط على رابط
  nav?.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', closeMenu);
  });

