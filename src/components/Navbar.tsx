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

        {/* Left: dropdown + logo */}
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
                  <Link
                    to={link.path}
                    className={`cursor-pointer ${location.pathname === link.path ? "font-medium text-primary" : ""}`}
                  >
                    {link.la
