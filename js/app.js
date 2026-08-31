/**
 * LOVEMARK PUBLICIDAD - INTERACTIVE LOGIC & APP SIMULATOR
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Toggle
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      const icon = navToggle.querySelector('i');
      if (icon) {
        if (navMenu.classList.contains('open')) {
          icon.classList.remove('fa-bars');
          icon.classList.add('fa-times');
        } else {
          icon.classList.remove('fa-times');
          icon.classList.add('fa-bars');
        }
      }
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        const icon = navToggle.querySelector('i');
        if (icon) {
          icon.classList.remove('fa-times');
          icon.classList.add('fa-bars');
        }
      });
    });
  }

  // 2. Navbar Scroll Behavior
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar?.classList.add('scrolled');
    } else {
      navbar?.classList.remove('scrolled');
    }
  });

  // 3. Interactive Gallery Filter & Lightbox
  const filterBtns = document.querySelectorAll('.filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxTitle = document.getElementById('lightboxTitle');
  const lightboxDesc = document.getElementById('lightboxDesc');
  const lightboxClose = document.getElementById('lightboxClose');

  // Filter Buttons
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      galleryItems.forEach(item => {
        if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
          item.style.display = 'block';
          item.style.animation = 'fadeIn 0.4s ease';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  // Lightbox click
  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      const img = item.querySelector('img');
      const title = item.querySelector('.gallery-title')?.textContent || '';
      const sub = item.querySelector('.gallery-sub')?.textContent || '';

      if (img && lightbox && lightboxImg) {
        lightboxImg.src = img.src;
        if (lightboxTitle) lightboxTitle.textContent = title;
        if (lightboxDesc) lightboxDesc.textContent = sub;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  // Close Lightbox
  const closeLightbox = () => {
    if (lightbox) {
      lightbox.classList.remove('active');
      document.body.style.overflow = 'auto';
    }
  };

  lightboxClose?.addEventListener('click', closeLightbox);
  lightbox?.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox?.classList.contains('active')) {
      closeLightbox();
    }
  });

  // 4. Interactive Attendance App Simulator (Control de Asistencia)
  const appTabPromotor = document.getElementById('appTabPromotor');
  const appTabSupervisor = document.getElementById('appTabSupervisor');
  const promotorView = document.getElementById('promotorView');
  const supervisorView = document.getElementById('supervisorView');
  const checkinBtn = document.getElementById('checkinBtn');
  const appToast = document.getElementById('appToast');
  const appToastText = document.getElementById('appToastText');
  const appClock = document.getElementById('appClock');
  const appDate = document.getElementById('appDate');
  const sampleCount = document.getElementById('sampleCount');
  const attendanceCountBadge = document.getElementById('attendanceCountBadge');

  // Live Clock for Simulator
  function updateAppTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    if (appClock) {
      appClock.textContent = `${hours}:${minutes}:${seconds}`;
    }

    if (appDate) {
      const options = { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' };
      appDate.textContent = now.toLocaleDateString('es-PE', options);
    }
  }
  updateAppTime();
  setInterval(updateAppTime, 1000);

  // Tab Switch: Promotor vs Supervisor
  if (appTabPromotor && appTabSupervisor && promotorView && supervisorView) {
    appTabPromotor.addEventListener('click', () => {
      appTabPromotor.classList.add('active');
      appTabSupervisor.classList.remove('active');
      promotorView.style.display = 'flex';
      supervisorView.style.display = 'none';
    });

    appTabSupervisor.addEventListener('click', () => {
      appTabSupervisor.classList.add('active');
      appTabPromotor.classList.remove('active');
      promotorView.style.display = 'none';
      supervisorView.style.display = 'flex';
    });
  }

  // Simulator Check-in Button Action
  let isCheckedIn = false;
  let samplesTotal = 138;

  function showToast(message) {
    if (appToast && appToastText) {
      appToastText.textContent = message;
      appToast.classList.add('show');
      setTimeout(() => {
        appToast.classList.remove('show');
      }, 3200);
    }
  }

  if (checkinBtn) {
    checkinBtn.addEventListener('click', () => {
      if (!isCheckedIn) {
        isCheckedIn = true;
        checkinBtn.classList.add('checked');
        checkinBtn.innerHTML = '<i class="fas fa-check-circle"></i> Asistencia Registrada (08:30 AM)';
        showToast('📍 GPS Validado: Mercado Central de Lima. Asistencia enviada a Lovemark Hub.');
        
        // Update supervisor view status
        const luciaStatus = document.getElementById('luciaStatus');
        if (luciaStatus) {
          luciaStatus.textContent = 'En Punto (Activa)';
          luciaStatus.className = 'sup-status active';
        }
        if (attendanceCountBadge) {
          attendanceCountBadge.textContent = '38/40 Activos';
        }
      } else {
        // Evidence / Photo capture simulation
        samplesTotal += 5;
        if (sampleCount) sampleCount.textContent = samplesTotal;
        showToast(`📸 Foto de reporte enviada. Degustaciones actualizadas: ${samplesTotal}`);
      }
    });
  }

  // 5. Interactive Campaign Calculator (Cotizador BTL)
  const brandOptionBtns = document.querySelectorAll('.brand-opt-btn');
  const typeOptionBtns = document.querySelectorAll('.type-opt-btn');
  const daysSlider = document.getElementById('daysSlider');
  const daysVal = document.getElementById('daysVal');
  const promotersSlider = document.getElementById('promotersSlider');
  const promotersVal = document.getElementById('promotersVal');

  const calcSummaryBrand = document.getElementById('calcSummaryBrand');
  const calcSummaryType = document.getElementById('calcSummaryType');
  const calcSummaryDays = document.getElementById('calcSummaryDays');
  const calcSummaryPromoters = document.getElementById('calcSummaryPromoters');
  const calcSummaryContacts = document.getElementById('calcSummaryContacts');
  const calcSummaryCost = document.getElementById('calcSummaryCost');

  let selectedBrand = 'Ajinomoto Universal';
  let selectedType = 'Mercados Mayoristas';
  let daysCount = 3;
  let promotersCount = 4;

  function recalculateCampaign() {
    if (daysVal) daysVal.textContent = `${daysCount} días`;
    if (promotersVal) promotersVal.textContent = `${promotersCount} personas`;

    if (calcSummaryBrand) calcSummaryBrand.textContent = selectedBrand;
    if (calcSummaryType) calcSummaryType.textContent = selectedType;
    if (calcSummaryDays) calcSummaryDays.textContent = `${daysCount} días de activación`;
    if (calcSummaryPromoters) calcSummaryPromoters.textContent = `${promotersCount} promotores / chefs`;

    // Estimate direct impacts: ~120 samples per promoter per day
    const totalImpacts = daysCount * promotersCount * 135;
    if (calcSummaryContacts) {
      calcSummaryContacts.textContent = `~${totalImpacts.toLocaleString('es-PE')} personas`;
    }

    // Dynamic indicative cost estimation based on standard BTL rate
    const baseDailyPromoterRate = 180; // S/ per promoter/day inclusive of logistics/reporting
    const supervisionFee = 450;
    const materialEst = daysCount * 250;
    const totalEst = (daysCount * promotersCount * baseDailyPromoterRate) + supervisionFee + materialEst;

    if (calcSummaryCost) {
      calcSummaryCost.textContent = `S/ ${totalEst.toLocaleString('es-PE')}`;
    }
  }

  brandOptionBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      brandOptionBtns.forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      selectedBrand = btn.getAttribute('data-brand') || 'Ajinomoto';
      recalculateCampaign();
    });
  });

  typeOptionBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      typeOptionBtns.forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      selectedType = btn.getAttribute('data-type') || 'Activación BTL';
      recalculateCampaign();
    });
  });

  daysSlider?.addEventListener('input', (e) => {
    daysCount = parseInt(e.target.value, 10);
    recalculateCampaign();
  });

  promotersSlider?.addEventListener('input', (e) => {
    promotersCount = parseInt(e.target.value, 10);
    recalculateCampaign();
  });

  // Initial calculation
  recalculateCampaign();

  // 6. Contact Form & WhatsApp Dynamic Proposal Link
  const contactForm = document.getElementById('contactForm');
  const quoteWhatsappBtn = document.getElementById('quoteWhatsappBtn');

  if (quoteWhatsappBtn) {
    quoteWhatsappBtn.addEventListener('click', () => {
      const message = encodeURIComponent(
        `¡Hola Lovemark Publicidad! Deseo cotizar una campaña para *${selectedBrand}* en *${selectedType}* con *${promotersCount} promotores* durante *${daysCount} días*. ¿Me pueden enviar una propuesta formal?`
      );
      window.open(`https://wa.me/51999999999?text=${message}`, '_blank');
    });
  }

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('formName')?.value || 'Cliente';
      alert(`¡Gracias ${name}! Tu solicitud ha sido enviada con éxito al equipo de Lovemark Publicidad. Nos comunicaremos contigo en breve.`);
      contactForm.reset();
    });
  }
});
