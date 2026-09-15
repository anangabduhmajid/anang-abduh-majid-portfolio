const moduleNames = ['hero', 'about', 'skills', 'academic', 'work', 'experience', 'contact'];
const page = document.querySelector('#top');

async function loadModules() {
  const responses = await Promise.all(moduleNames.map((name) => fetch(`modules/${name}.html`)));
  if (responses.some((response) => !response.ok)) {
    throw new Error('Salah satu modul halaman tidak dapat dimuat.');
  }
  page.innerHTML = (await Promise.all(responses.map((response) => response.text()))).join('');
  window.initPortfolio?.();
}

loadModules().catch((error) => {
  page.innerHTML = `<p class="module-error">Halaman belum dapat dimuat. Jalankan melalui Apache XAMPP agar modul dapat dibaca.</p>`;
  console.error(error);
});
