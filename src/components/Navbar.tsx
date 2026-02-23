import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.28 6.28 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/>
  </svg>
);

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Hair Oil", path: "/product/hair" },
  { label: "Body Oil", path: "/product/body" },
  { label: "Nails Oil", path: "/product/nails" },
  { label: "Eyebrows Oil", path: "/product/eyebrows" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
      <div className="flex items-center gap-3">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center gap-1 px-2 py-1.5 text-sm rounded-full text-muted-foreground hover:text-foreground hover:bg-accent transition-colors">
                <Menu className="w-4 h-4" />
                <ChevronDown className="w-3 h-3" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-48">
              {navLinks.map((link, i) => (
                <div key={link.label}>
                  <DropdownMenuItem asChild>
                    <Link to={link.path} className={`cursor-pointer ${location.pathname === link.path ? "font-medium text-primary" : ""}`}>
                      {link.label}
                    </Link>
                  </DropdownMenuItem>
                  {i === 0 && <DropdownMenuSeparator />}
                </div>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

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
        </div>

        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
              <Link key={link.label} to={link.path}
                className={`px-3 py-2 text-sm rounded-full transition-colors ${location.pathname === link.path ? "bg-primary/10 text-primary font-medium" : "text-muted-foreground hover:text-foreground hover:bg-accent"}`}>
                {link.label}
              </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <a href="https://wa.me/79403188" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="sm" className="rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              Cash on Delivery
            </Button>
          </a>
        </div>

        <button className="md:hidden p-2" onClick={() => setOpen(!open)}>
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <nav className="md:hidden border-t border-border bg-background px-4 py-4 space-y-1">
          {navLinks.map((link) => (
              <Link key={link.label} to={link.path}
                className={`block px-3 py-2 text-sm rounded-lg ${location.pathname === link.path ? "bg-primary/10 text-primary font-medium" : "text-muted-foreground hover:bg-accent"}`}
                onClick={() => setOpen(false)}>
                {link.label}
              </Link>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Navbar;
