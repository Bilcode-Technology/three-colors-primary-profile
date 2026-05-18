import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";

export const Route = createFileRoute("/berita")({
  component: Berita,
});

function Berita() {
  const articles = [
    {
      title: "Peluncuran Produk Pewarna Ramah Lingkungan Terbaru",
      date: "12 Mei 2026",
      category: "Inovasi",
      excerpt: "PT Tiga Warna Primer kembali menghadirkan inovasi dengan merilis lini pewarna tekstil ramah lingkungan yang dapat mengurangi limbah cair hingga 40%.",
    },
    {
      title: "Partisipasi di Indo Intertex 2026",
      date: "03 April 2026",
      category: "Event",
      excerpt: "Kunjungi booth kami di pameran tekstil terbesar di Asia Tenggara. Kami akan menampilkan berbagai solusi pewarnaan untuk industri tekstil masa depan.",
    },
    {
      title: "Pencapaian Sertifikasi ISO 9001:2015",
      date: "15 Februari 2026",
      category: "Perusahaan",
      excerpt: "Komitmen kami terhadap kualitas diakui secara internasional. PT Tiga Warna Primer resmi menerima sertifikasi sistem manajemen mutu ISO 9001:2015.",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-24 pb-20 px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="mb-12">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-blue mb-3">Berita & Artikel</div>
          <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight leading-tight">Kabar Terbaru</h1>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed max-w-2xl">
            Ikuti perkembangan, inovasi, dan acara terbaru dari PT Tiga Warna Primer.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, i) => (
            <div key={i} className="flex flex-col h-full rounded-3xl border border-border bg-background overflow-hidden hover:shadow-lg transition-shadow group cursor-pointer">
              <div className="aspect-video bg-muted relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/20 to-brand-red/20 group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center gap-3 mb-4 text-xs font-medium text-muted-foreground">
                  <span className="text-brand-blue">{article.category}</span>
                  <span>•</span>
                  <span>{article.date}</span>
                </div>
                <h3 className="font-display font-bold text-xl mb-3 leading-tight group-hover:text-brand-blue transition-colors">{article.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">{article.excerpt}</p>
                <div className="mt-6 text-sm font-semibold inline-flex items-center gap-1 group-hover:text-brand-blue transition-colors">
                  Baca Selengkapnya <span className="translate-x-0 group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 font-display font-bold">
            <span>PT Tiga Warna Primer</span>
          </div>
          <p className="text-sm text-muted-foreground">© 2026 PT Tiga Warna Primer. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
