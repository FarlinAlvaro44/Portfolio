import React from "react";
import { Separator } from "./ui/separator";

export function Footer() {
  return (
    <footer className="py-12 bg-background">
      <div className="container px-4 mx-auto max-w-6xl">
        <Separator className="mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2025 Portfolio. All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a href="#home" className="text-sm text-muted-foreground hover:text-primary transition-colors"> Home </a>
            <a href="#projects" className="text-sm text-muted-foreground hover:text-primary transition-colors" > Projects </a>
              
            <a
              href="#skills"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Skills
            </a>
            <a
              href="#contact"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
