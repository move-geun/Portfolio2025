import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import type { Project } from "@/pages/portfolio";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  const openGithub = (pro: Project) => {
    window.open(pro.github, "_blank");
  };

  const openLive = (pro: Project) => {
    window.open(pro.demo, "_blank");
  };

  return (
    <AnimatePresence>
      <Dialog open={!!project} onOpenChange={onClose}>
        <DialogContent className="w-[65vw] max-w-none w-full max-h-[90vh] overflow-y-auto p-0">
          <DialogTitle>{project.title}</DialogTitle>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            {/* Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
              <h3 className="text-2xl font-bold text-neutral-dark">
                {project.title}
              </h3>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6">
              {/* Project Image */}
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-auto rounded-xl object-contain"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              />

              <div className="grid md:grid-cols-2 gap-6">
                {/* Left Column */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <h4 className="text-lg font-semibold mb-3">프로젝트 개요</h4>
                  <p className="text-neutral-medium mb-4">
                    {project.description}
                  </p>

                  <h4 className="text-lg font-semibold mb-3">주요 기능</h4>
                  <ul className="space-y-2 text-neutral-medium">
                    {project.features.map((feature, index) => (
                      <li key={index}>• {feature}</li>
                    ))}
                  </ul>
                </motion.div>

                {/* Right Column */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <h4 className="text-lg font-semibold mb-3">기술 스택</h4>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md px-2 py-1 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <h4 className="text-lg font-semibold mb-3">성과</h4>
                  <ul className="space-y-2 text-neutral-medium">
                    {project.achievements.map((achievement, index) => (
                      <li key={index}>• {achievement}</li>
                    ))}
                  </ul>
                </motion.div>
              </div>

              {/* Footer */}
              <motion.div
                className="flex justify-end space-x-4 pt-6 border-t border-gray-200"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                {project.github && (
                  <button
                    className="flex items-center space-x-1 sm:space-x-2 bg-transparent hover:bg-gray-500 text-gray-700 font-semibold hover:text-white py-1.5 px-3 sm:py-2 sm:px-4 text-sm sm:text-base border-2 border-gray-600 hover:border-gray-600 rounded transition-all duration-200"
                    onClick={() => openGithub(project)}
                  >
                    <Github className="h-4 w-4 sm:h-5 sm:w-5" />
                    <span>GitHub</span>
                  </button>
                )}

                {project.demo && (
                  <button
                    className="flex items-center space-x-1 sm:space-x-2 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1.5 px-3 sm:py-2 sm:px-4 text-sm sm:text-base border border-blue-500 hover:border-transparent rounded transition-all duration-200"
                    onClick={() => openLive(project)}
                  >
                    <ExternalLink className="h-4 w-4 sm:h-5 sm:w-5" />
                    <span>Live Demo</span>
                  </button>
                )}
              </motion.div>
            </div>
          </motion.div>
        </DialogContent>
      </Dialog>
    </AnimatePresence>
  );
}
