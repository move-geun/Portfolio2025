import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Github, ExternalLink } from "lucide-react";
import type { Project } from "@/pages/portfolio";

interface ProjectsSectionProps {
  projects: Project[];
  onProjectClick: (project: Project) => void;
}

export default function Projects({
  projects,
  onProjectClick,
}: ProjectsSectionProps) {
  return (
    <section
      id="projects"
      className="py-16 bg-gradient-to-br from-neutral-light to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-neutral-dark mb-4">
            프로젝트
          </h2>
          <p className="text-lg text-neutral-medium">
            개발한 주요 프로젝트들을 소개합니다
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
            >
              <Card
                className="group bg-white shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer h-full flex flex-col"
                onClick={() => onProjectClick(project)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6 flex flex-col flex-1 mt-3">
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md px-2 py-1 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-dark mb-2">
                    {project.title}
                  </h3>
                  <p className="text-neutral-medium text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex justify-between items-center mt-auto">
                    <span className="text-sm text-neutral-medium">
                      {project.period}
                    </span>
                    <div className="flex space-x-2">
                      {project.github && (
                        <Github className="w-4 h-4 text-neutral-medium hover:text-primary cursor-pointer transition-colors" />
                      )}
                      {project.demo && (
                        <ExternalLink className="w-4 h-4 text-neutral-medium hover:text-primary cursor-pointer transition-colors" />
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
