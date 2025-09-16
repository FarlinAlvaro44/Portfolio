import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import {
  Palette,
  Code2,
  Smartphone,
  Monitor,
  Figma,
  Github,
  Layers,
  Zap
} from 'lucide-react';

const highlights = [
  {
    icon: Smartphone,
    title: "Mobile-First Design",
    description: "Creating responsive designs that work beautifully across all devices"
  },
  {
    icon: Monitor,
    title: "Design Systems",
    description: "Building scalable design systems for consistent user experiences"
  },
  {
    icon: Code2,
    title: "Code Implementation",
    description: "Translating designs into clean, manageable code components"
  },
  {
    icon: Zap,
    title: "Performance Focus",
    description: "Optimizing both design and code for the best user experience"
  }
];

const skillCategories = [
  {
    title: "Tools",
    icon: Palette,
    skills: [
      { name: "Figma", level: 95 },
      { name: "VS Code", level: 80 },
      { name: "Git & GitHub", level: 70 },
      { name: "Canva", level: 80 },
    ]
  },
  
  {
    title: "UI/UX Design",
    icon: Layers,
    skills: [
      { name: "User Research", level: 85 },
      { name: "Prototyping", level: 90 },
      { name: "Design Systems", level: 95 },
      { name: "Accessibility", level: 80 },
    ]
  },

];
export function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="container px-4 mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-5xl lg:text-6xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            I combine design thinking with technical skills to create exceptional digital experiences
          </p>
        </div>

        {/* Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {highlights.map((highlight, index) => (
            <Card key={index} className="text-center">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <highlight.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <h3 className="font-semibold mb-2">{highlight.title}</h3>
                <p className="text-base text-muted-foreground">
                  {highlight.description}
                </p>
              </CardContent>
            </Card>
          ))}

        </div>
        {/* Detailed Skills */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {skillCategories.map((category, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-3">
                          <category.icon className="h-6 w-6 text-primary" />
                          {category.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        {category.skills.map((skill, skillIndex) => (
                          <div key={skillIndex} className="space-y-2">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                
                                <span className="font-medium">{skill.name}</span>
                              </div>
                              <Badge variant="secondary">{skill.level}%</Badge>
                            </div>
                            <Progress value={skill.level} className="h-2" />
                          </div>
                        ))}
                      </CardContent>
                    </Card>
                  ))}
                </div>

        {/* Technologies */}
        <div className="mt-16">
          <h3 className="text-4xl font-semibold text-center mb-8">Skills & Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "React", "Html", "Flutter", "Tailwind CSS", "Figma",
              "Knime", "Github", "Sublime Text", "Canva", "Framer Motion", "Zustand",
              "PHP", "mysql", "Google Colab", "Pyton", "Javascript"
            ].map((tech) => (
              <Badge key={tech} variant="outline" className="px-3 py-1">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
