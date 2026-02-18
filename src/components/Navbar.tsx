import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Hair Oil", path: "/product/hair" },
  { label: "Body Oil", path: "/product/body" },
  { label: "Nails Oil", path: "/product/nails" },
  { label: "Eyebrows Oil", path: "/product/eyebrows" },
  { label: "FAQ", path: "/faq" },
  { label: "Contact", path: "https://wa.me/79403188", external: true },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="w-5 h-5 text-primary" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 3c-1.5 2-4 4-4 7a4 4 0 0 0 8 0c0-3-2.5-5-4-7Z" />
              <path d="M12 10v11" />
            </svg>
          </div>
          <div>
            <span className="font-semibold text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>Bloom Oil</span>
            <p className="text-[10px] text-primary leading-none">Natural Beauty Solutions</p>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) =>
            link.external ? (
              <a key={link.label} href={link.path} target="_blank" rel="noopener noreferrer"
                className="px-3 py-2 text-sm rounded-full text-muted-foreground hover:text-foreground hover:bg-accent transition-colors">
                {link.label}
              </a>
            ) : (
              <Link key={link.label} to={link.path}
                className={`px-3 py-2 text-sm rounded-full transition-colors ${location.pathname === link.path ? "bg-primary/10 text-primary font-medium" : "text-muted-foreground hover:text-foreground hover:bg-accent"}`}>
                {link.label}
              </Link>
            )
          )}
        </nav>

        <a href="https://wa.me/79403188" target="_blank" rel="noopener noreferrer" className="hidden md:block">
          <Button variant="outline" size="sm" className="rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            Cash on Delivery
          </Button>
        </a>

        <button className="md:hidden p-2" onClick={() => setOpen(!open)}>
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <nav className="md:hidden border-t border-border bg-background px-4 py-4 space-y-1">
          {navLinks.map((link) =>
            link.external ? (
              <a key={link.label} href={link.path} target="_blank" rel="noopener noreferrer"
                className="block px-3 py-2 text-sm rounded-lg text-muted-foreground hover:bg-accent" onClick={() => setOpen(false)}>
                {link.label}
              </a>
            ) : (
              <Link key={link.label} to={link.path}
                className={`block px-3 py-2 text-sm rounded-lg ${location.pathname === link.path ? "bg-primary/10 text-primary font-medium" : "text-muted-foreground hover:bg-accent"}`}
                onClick={() => setOpen(false)}>
                {link.label}
              </Link>
            )
          )}
        </nav>
      )}
    </header>
  );
};

export default Navbar;
