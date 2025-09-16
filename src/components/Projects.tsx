import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ExternalLink, Github, Figma } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const figmaProjects = [
  {
    id: 1,
    title: "E-commerce Mobile App",
    description: "My first mobile e-commerce project. This project still has several shortcomings in terms of visuals and interface display.",
    image: "assets/img/Screenshot_4.png",
    tags: ["UI Design", "Mobile", "Design System"],
    type: "figma",
    figmaUrl: "https://www.figma.com/design/7FP4aoiMyINEfwB53SRppq/EAZZYSTEP.?node-id=240-189&t=5jvCK9VHH4bzMRFT-1"
  },
  {
    id: 2,
    title: "Property Listing Website",
    description: "Designing a property website with a modern look and intuitive user experience, including dashboard, admin, and user features.",
    image: "assets/img/Screenshot_5.png",
    tags: ["Dashboard", "Website"],
    type: "figma",
    figmaUrl : "https://www.figma.com/design/da8xTcSicE8g0r9A7Cjfm7/HAAKON?node-id=39-64683&t=79iEHuoZwPmdyvmU-1"
  },
  {
    id: 3,
    title: "Event Ticketing Website ",
    description: "Designing a concert and tournament ticket booking platform with a modern design and a fast purchasing process.",
    image: "assets/img/Screenshot_7.png",
    tags: ["Dashboard", "Website", "Accessibility"],
    type: "figma",
    figmaUrl : "https://www.figma.com/design/qrhUMrfyH2tHN7pH5ZuRpb/EVENTIC.IO?node-id=318-16205&t=kbbQsxm78jz1ka6i-1"
  }
];

/*const codeProjects = [
  {
    id: 4,
    title: "React Task Management",
    description: "Full-stack task management application built with React, Node.js, and PostgreSQL with real-time updates.",
    image: "https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RlJTIwZWRpdG9yJTIwcHJvZ3JhbW1pbmd8ZW58MXx8fHwxNzU3NzY4NjAyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["React", "Node.js", "PostgreSQL"],
    type: "code",
    github: "https://github.com/username/task-management",
    live: "https://task-management-demo.com"
  },
  {
    id: 5,
    title: "E-learning Platform",
    description: "Interactive learning platform with video streaming, progress tracking, and quiz functionality.",
    image: "https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RlJTIwZWRpdG9yJTIwcHJvZ3JhbW1pbmd8ZW58MXx8fHwxNzU3NzY4NjAyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Next.js", "TypeScript", "Prisma"],
    type: "code",
    github: "https://github.com/username/elearning-platform",
    live: "https://elearning-demo.com"
  },
  {
    id: 6,
    title: "Weather Dashboard",
    description: "Real-time weather dashboard with interactive maps, forecasts, and location-based alerts.",
    image: "https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RlJTIwZWRpdG9yJTIwcHJvZ3JhbW1pbmd8ZW58MXx8fHwxNzU3NzY4NjAyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Vue.js", "API Integration", "Charts"],
    type: "code",
    github: "https://github.com/username/weather-dashboard",
    live: "https://weather-dashboard-demo.com"
  }
];*/

export function Projects() {
  // Fungsi untuk membuka link Figma
  const openFigmaProject = (figmaUrl?: string) => {
    if (figmaUrl) window.open(figmaUrl, '_blank');
  };

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container px-4 mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">My Projects</h2>
          <p className="text-lg text-muted-foreground max-w-1xl mx-auto">
            A collection of design and development projects showcasing my skills in UI/UX Design
          </p>
        </div>

        {/* Figma Projects */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Figma className="h-6 w-6 text-primary" />
            <h3 className="text-2xl font-semibold">Figma Design Projects</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {figmaProjects.map((project) => (
              <Card key={project.id} className="group hover:shadow-lg transition-shadow overflow-hidden">
                <div className="relative overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Button size="sm" variant="secondary" onClick={() => openFigmaProject(project.figmaUrl)}>
                      <Figma className="mr-2 h-4 w-4" />
                      View in Figma
                    </Button>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="line-clamp-1">{project.title}</CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

       {/* Code Projects 
        <div>
          <div className="flex items-center gap-3 mb-8">
            <Github className="h-6 w-6 text-primary" />
            <h3 className="text-2xl font-semibold">Development Projects</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {codeProjects.map((project) => (
              <Card key={project.id} className="group hover:shadow-lg transition-shadow overflow-hidden">
                <div className="relative overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                    <Button size="sm" variant="secondary">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                    <Button size="sm" variant="secondary">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live
                    </Button>
                  </div>
                </div>*
                
                <CardHeader>
                  <CardTitle className="line-clamp-1">{project.title}</CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-4" >
                  <p className="text-sm text-muted-foreground line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-2 pt-2">
                    <Button size="sm" variant="outline" className="flex-1">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>*/}
      </div>
    </section>
  );
}