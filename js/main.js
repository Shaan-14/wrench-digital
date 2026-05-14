// Page navigation
function showPage(pageId) {
  document.querySelectorAll('.page-section').forEach(p => p.classList.remove('active'));
  document.getElementById('page-' + pageId).classList.add('active');
  document.querySelectorAll('.nav-link').forEach(l => {
    l.classList.toggle('active', l.dataset.page === pageId);
  });
  window.scrollTo({ top: 0, behavior: 'smooth' });
  return false;
}

document.getElementById('contactForm').addEventListener('submit', async function(e) {
  e.preventDefault();
  const form = e.target;
  
  const data = {
    name: form.querySelector('[name="name"]').value,
    business: form.querySelector('[name="business"]').value,
    email: form.querySelector('[name="email"]').value,
    phone: form.querySelector('[name="phone"]').value,
    industry: form.querySelector('[name="industry"]').value,
    package: form.querySelector('[name="package"]').value,
    ongoing_services: form.querySelector('[name="ongoing_services"]').value,
    message: form.querySelector('[name="message"]').value,
  };

  try {
    const response = await fetch('/.netlify/functions/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });

    if (response.ok) {
      form.style.display = 'none';
      document.getElementById('successMsg').style.display = 'block';
      window.scrollTo(0, 0);
    } else {
      alert('Something went wrong. Please email me at shaan.wrench14@gmail.com');
    }
  } catch (error) {
    alert('Something went wrong. Please email me at shaan.wrench14@gmail.com');
  }
});