# Anang Abduh Majid - Portfolio

Portfolio website untuk Anang Abduh Majid, kandidat IT Support, Helpdesk, IT Monitoring Support, dan Network Administrator.

## Menjalankan lokal

Gunakan Apache XAMPP lalu buka:

```text
http://localhost/Anang%20Abduh%20Majid/
```

Halaman memakai modul HTML di folder `modules/` yang dimuat oleh `app.js`, sehingga sebaiknya tidak dibuka langsung dengan `file://`.

## Deploy ke GitHub Pages

1. Buat repository baru di GitHub, misalnya `anang-portfolio`.
2. Upload seluruh isi folder ini ke repository. Pastikan `index.html` berada di root repository.
3. Buka `Settings` > `Pages`.
4. Pada `Build and deployment`, pilih `Deploy from a branch`.
5. Pilih branch `main` dan folder `/ (root)`, lalu klik `Save`.
6. Tunggu proses deployment selesai. GitHub akan memberikan URL Pages.

Semua asset menggunakan path relatif, jadi dapat berjalan di GitHub Pages tanpa konfigurasi server tambahan.
