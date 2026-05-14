// Page navigation
function showPage(pageId) {
  // Hide all pages
  document.querySelectorAll('.page-section').forEach(p => p.classList.remove('active'));
  // Show target
  document.getElementById('page-' + pageId).classList.add('active');
  // Update nav active state
  document.querySelectorAll('.nav-link').forEach(l => {
    l.classList.toggle('active', l.dataset.page === pageId);
  });
  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });
  return false;
}

document.getElementById('contactForm').addEventListener('submit', async function(e) {
  e.preventDefault();
  const form = e.target;
  const data = new FormData(form);
  
  try {
    const response = await fetch('https://formspree.io/f/xkoyavqa', {
      method: 'POST',
      body: data,
      headers: { 'Accept': 'application/json' }
    });
    
    if (response.ok) {
      form.style.display = 'none';
      document.getElementById('successMsg').style.display = 'block';
      window.scrollTo(0, 0);
    } else {
      alert('Something went wrong. Please email me directly at shaan.wrench14@gmail.com');
    }
  } catch (error) {
    alert('Something went wrong. Please email me directly at shaan.wrench14@gmail.com');
  }
});