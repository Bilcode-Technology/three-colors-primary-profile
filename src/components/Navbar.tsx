import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logoImg from "@/assets/logo.jpeg";

const links = [
// ... (lines 4-28 unchanged)
        <a href="#hero" className="flex items-center gap-2 font-display font-bold text-lg">
          <img src={logoImg} alt="Logo Perusahaan" className="h-[30px]" />
          <span className="tracking-tight">Tiga Warna Primer</span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#kontak"
          className="hidden md:inline-flex items-center rounded-full bg-foreground text-background px-5 py-2 text-sm font-medium hover:opacity-90 transition"
        >
          Hubungi Kami
        </a>

        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background border-b border-border">
          <nav className="flex flex-col px-6 py-4 gap-3 text-sm">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-1.5 text-muted-foreground">
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
