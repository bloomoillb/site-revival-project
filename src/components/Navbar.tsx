import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

const navLinks = [
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
      <div className="container mx-auto flex items-center justify-between h-14 sm:h-16 px-4">
        <div className="flex items-center gap-2 sm:gap-3">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center gap-1 px-2 py-1.5 text-sm rounded-full text-muted-foreground hover:text-foreground hover:bg-accent transition-colors">
                <Menu className="w-4 h-4" />
                <ChevronDown className="w-3 h-3" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-48">
              {navLinks.map((link) => (
                <DropdownMenuItem key={link.label} asChild>
                  <Link to={link.path} className={`cursor-pointer ${location.pathname === link.path ? "font-medium text-primary" : ""}`}>
                    {link.label}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <Link to="/" className="flex items-center gap-2">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary/10 flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-4 h-4 sm:w-5 sm:h-5 text-primary" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 3c-1.5 2-4 4-4 7a4 4 0 0 0 8 0c0-3-2.5-5-4-7Z" />
                <path d="M12 10v11" />
              </svg>
            </div>
            <div>
              <span className="font-semibold text-sm sm:text-base text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>Bloom Oil</span>
              <p className="text-[9px] sm:text-[10px] text-primary leading-none">Natural Beauty Solutions</p>
            </div>
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link key={link.label} to={link.path} className={`px-3 py-2 text-sm rounded-full transition-colors ${location.pathname === link.path ? "bg-primary/10 text-primary font-medium" : "text-muted-foreground hover:text-foreground hover:bg-accent"}`}>
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a href="https://wa.me/79403188" target="_blank" rel="noopener noreferrer" className="hidden md:block">
            <Button variant="outline" size="sm" className="rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              Cash on Delivery
            </Button>
          </a>
          <a href="https://wa.me/79403188" target="_blank" rel="noopener noreferrer" className="md:hidden">
            <Button variant="outline" size="sm" className="rounded-full border-primary text-primary text-xs px-3">
              Order
            </Button>
          </a>
          <button className="md:hidden p-2 rounded-lg hover:bg-accent transition-colors" onClick={() => setOpen(!open)}>
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="md:hidden border-t border-border bg-background px-4 py-3 space-y-1">
          {navLinks.map((link) => (
            <Link key={link.label} to={link.path} className={`block px-3 py-2.5 text-sm rounded-lg transition-colors ${location.pathname === link.path ? "bg-primary/10 text-primary font-medium" : "text-muted-foreground hover:bg-accent"}`} onClick={() => setOpen(false)}>
              {link.label}
            </Link>
          ))}
          <div className="pt-2 border-t border-border">
            <a href="https://wa.me/79403188" target="_blank" rel="noopener noreferrer">
              <Button className="w-full rounded-full" size="sm">
                Order via WhatsApp
              </Button>
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
