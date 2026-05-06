## Website Company Profile — PT Tiga Warna Primer

Single-page (one route) company profile yang clean, modern, dan terasa premium. Konten diambil dari PPT yang Anda upload.

### Design system
- **Palet**: putih dominan (~80%), aksen merah (#E63946), kuning (#F4C430), biru (#1E5BA8). Teks utama abu gelap.
- **Typography**: Inter / Plus Jakarta Sans (sans-serif modern, elegan). Heading tebal & lega, body 16px.
- **Whitespace**: padding section besar (py-24), max-width container ~1200px.
- **Animasi**: fade-in & slide-up saat scroll (Intersection Observer), smooth scroll antar anchor, hover scale halus pada card.

### Struktur halaman (anchor sections)

1. **Navbar sticky** — logo + menu: Tentang, Visi, Nilai, Produk, Kontak. Background blur saat di-scroll.

2. **Hero** — full viewport, gradient halus putih→biru muda dengan blob warna merah/kuning/biru blur di background.
   - H1: "Menciptakan Warna, Mendefinisikan Kualitas"
   - Sub: produsen pewarna tekstil & bahan kimia berkualitas tinggi.
   - CTA: "Pelajari Lebih Lanjut" (scroll ke About).

3. **Tentang Perusahaan** — 2 kolom: teks ringkasan + foto gedung pabrik (dari PPT). Lokasi Tangerang, Banten. Highlight: produksi pewarna & bahan kimia, profesional & inovatif.

4. **Visi & Misi** — 2 card berdampingan dengan border-top warna (merah & biru). Highlight kata "inovasi", "kualitas", "berkelanjutan".

5. **Nilai-Nilai & Komitmen** — grid 4 card dengan icon berwarna:
   - Inovasi · Keberlanjutan · Kualitas · Kepuasan Pelanggan

6. **Simbolisme Warna** — 3 color block besar (merah/kuning/biru) dengan deskripsi:
   - Merah: energi & inovasi
   - Kuning: pertumbuhan
   - Biru: kepercayaan & profesionalisme

7. **Proses Produksi** — timeline horizontal 5 step bernomor: R&D → Produksi → Quality Control → Packaging → Distribusi. Connector line + dot warna.

8. **Kategori Produk** — grid 4 card dengan gambar dari PPT:
   - Pewarna Disperse (polyester, tahan suhu tinggi)
   - Pewarna Reaktif
   - Pewarna Acid (wool, nylon, silk)
   - Liquid (siap pakai, hemat waktu)

9. **Kekuatan Kompetitif** — 4 item icon list:
   - Kualitas tinggi konsisten · Cepat kering · Konsultasi warna gratis · Jaminan kualitas (COA)

10. **Contact** — 2 kolom:
    - Kiri: alamat Jl. Imam Bonjol No. 133, Karawaci, Tangerang Banten 15115; telp +62 851 3603 5632; email tigawarnaprimer88@gmail.com; Google Maps embed.
    - Kanan: form sederhana (Nama, Email, Pesan) dengan validasi zod, tombol kirim memunculkan toast konfirmasi (form tidak terkirim ke backend — hanya UI).

11. **Footer** — logo + nama perusahaan, tagline, © 2026 PT Tiga Warna Primer.

### Catatan teknis
- TanStack Start, semua di `src/routes/index.tsx` + komponen section di `src/components/sections/`.
- Asset gambar dari PPT (gedung, produk powders, logo) di-copy ke `src/assets/`.
- Font via Google Fonts di `__root.tsx`.
- Smooth scroll via `scroll-behavior: smooth` + anchor `#id`.
- Animasi via util Tailwind (`animate-fade-in`) + hook IntersectionObserver kecil.
- Fully responsive (mobile drawer untuk navbar).

Form kontak hanya UI (tidak kirim email). Kalau nanti butuh kirim ke email/Telegram/database, bisa ditambah dengan Lovable Cloud.