document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initMobileMenu();
  initTypingEffect();
  initProjectFilters();
  initActiveNavOnScroll();
  initContactForm();
});

/* ==========================================================================
   Theme Management (Light / Dark)
   ========================================================================== */
function initTheme() {
  const toggleBtn = document.getElementById('theme-toggle');
  if (!toggleBtn) return;
  
  const savedTheme = localStorage.getItem('theme');
  const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const currentTheme = savedTheme || (systemDark ? 'dark' : 'light');
  
  applyTheme(currentTheme);
  
  toggleBtn.addEventListener('click', () => {
    const activeTheme = document.documentElement.getAttribute('data-theme');
    const targetTheme = activeTheme === 'dark' ? 'light' : 'dark';
    applyTheme(targetTheme);
  });
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
}

/* ==========================================================================
   Mobile Nav Menu
   ========================================================================== */
function initMobileMenu() {
  const toggle = document.getElementById('mobile-toggle');
  const menu = document.getElementById('nav-menu');
  const links = document.querySelectorAll('.nav-link');
  
  if (!toggle || !menu) return;
  
  toggle.addEventListener('click', (e) => {
    e.stopPropagation();
    menu.classList.toggle('open');
  });
  
  links.forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('open');
    });
  });
  
  document.addEventListener('click', (e) => {
    if (menu.classList.contains('open') && !menu.contains(e.target) && !toggle.contains(e.target)) {
      menu.classList.remove('open');
    }
  });
}

/* ==========================================================================
   Typing Roles
   ========================================================================== */
function initTypingEffect() {
  const target = document.getElementById('type-text');
  if (!target) return;
  // "PHP Laravel", "Node.js", "Express.js", "MySQL", "AWS", "Docker", "Web Development", "TypeScript", "React.js", "Flutter"
  
  const roles = ["Software Engineer Level 3", "Laravel & React.js", "DevOps", "Docker", "Flutter" ];
  let roleIdx = 0;
  let charIdx = 0;
  let deleting = false;
  let delay = 150;
  
  function typeCycle() {
    const currentText = roles[roleIdx];
    
    if (deleting) {
      target.textContent = currentText.substring(0, charIdx - 1);
      charIdx--;
      delay = 60;
    } else {
      target.textContent = currentText.substring(0, charIdx + 1);
      charIdx++;
      delay = 120;
    }
    
    if (!deleting && charIdx === currentText.length) {
      delay = 2000;
      deleting = true;
    } else if (deleting && charIdx === 0) {
      deleting = false;
      roleIdx = (roleIdx + 1) % roles.length;
      delay = 400;
    }
    
    setTimeout(typeCycle, delay);
  }
  
  setTimeout(typeCycle, 500);
}

/* ==========================================================================
   Project Filters
   ========================================================================== */
function initProjectFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectItems = document.querySelectorAll('.project-item');
  
  if (filterBtns.length === 0 || projectItems.length === 0) return;
  
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      const filter = btn.getAttribute('data-filter');
      
      projectItems.forEach(item => {
        const itemCat = item.getAttribute('data-category');
        
        if (filter === 'all' || itemCat === filter) {
          item.classList.remove('hide');
          item.style.opacity = '0';
          item.style.transform = 'scale(0.95)';
          setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'scale(1)';
          }, 30);
        } else {
          item.classList.add('hide');
        }
      });
    });
  });
}

/* ==========================================================================
   Active Navigation Observer
   ========================================================================== */
function initActiveNavOnScroll() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  
  if (sections.length === 0 || navLinks.length === 0) return;
  
  const observerOptions = {
    root: null,
    rootMargin: '-30% 0px -50% 0px',
    threshold: 0
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }, observerOptions);
  
  sections.forEach(sec => observer.observe(sec));
}

/* ==========================================================================
   Contact Form Submission Validation
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('contact-form');
  const feedback = document.getElementById('form-feedback');
  
  if (!form || !feedback) return;
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    
    if (!name || !email || !message) {
      showAlert('Please fill out all contact fields.', 'error');
      return;
    }
    
    const submitBtn = form.querySelector('.btn-submit');
    const originalText = submitBtn.textContent;
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';
    
    setTimeout(() => {
      showAlert('Message sent successfully. I will get back to you soon!', 'success');
      form.reset();
      submitBtn.disabled = false;
      submitBtn.textContent = originalText;
    }, 1200);
  });
  
  function showAlert(text, type) {
    feedback.textContent = text;
    feedback.className = `form-feedback ${type}`;
    
    if (type === 'error') {
      setTimeout(() => {
        feedback.className = 'form-feedback';
      }, 5000);
    }
  }
}
