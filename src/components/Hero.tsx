import React from "react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Github, Figma, Instagram, Mail, ArrowDown } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <div className="container px-4 mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-2">
              <Badge variant="secondary" className="w-fit">
                Available for work
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
                Muhamad
                <span className="text-primary block">Farlin Alvaro</span>
              </h1>
            </div>

            <p className="text-lg text-muted-foreground max-w-lg">
              Undergraduate student majoring in Information Systems with a focus
              on website development and UI/UX design. Interested in technology,
              modern design, and simple yet effective user experiences. Enjoys
              learning new things and is accustomed to working both in teams and
              individually.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="group" asChild>
                <a href="#projects">
                  View My Work
                  <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
                </a>
              </Button>
              <Button variant="outline" size="lg">
                <a
                  href="/assets/CV Muhamad farlin Alvaro.pdf"
                  download="CV Muhamad farlin Alvaro.pdf"
                >
                  Download CV
                </a>
              </Button>
            </div>

            
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="/assets/img/LOGO.png"
                alt="Logo"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-card border rounded-lg p-4 shadow-lg">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm">Available</span>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 bg-card border rounded-lg p-4 shadow-lg">
              <div className="text-sm">
                <div className="font-medium">Current Status</div>
                <div className="text-muted-foreground">
                  Building amazing things
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
