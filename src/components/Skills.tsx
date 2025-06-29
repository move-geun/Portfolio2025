import { motion } from "framer-motion";
import {
  SiReact,
  SiJavascript,
  SiCss3,
  SiVuedotjs,
  SiTypescript,
  SiSass,
  SiGit,
  SiTailwindcss,
  SiFigma,
} from "react-icons/si";

const skills = [
  {
    name: "React",
    level: "중급",
    icon: SiReact,
    color: "from-blue-50 to-blue-100",
    iconBg: "bg-blue-500",
  },
  {
    name: "Vue",
    level: "중급",
    icon: SiVuedotjs,
    color: "from-green-50 to-green-100",
    iconBg: "bg-green-500",
  },
  {
    name: "JavaScript",
    level: "중급",
    icon: SiJavascript,
    color: "from-yellow-50 to-yellow-100",
    iconBg: "bg-yellow-500",
  },
  {
    name: "TypeScript",
    level: "초급",
    icon: SiTypescript,
    color: "from-blue-50 to-blue-100",
    iconBg: "bg-blue-600",
  },
  {
    name: "CSS3",
    level: "중급",
    icon: SiCss3,
    color: "from-blue-50 to-blue-100",
    iconBg: "bg-blue-600",
  },
  {
    name: "Sass/SCSS",
    level: "초급",
    icon: SiSass,
    color: "from-purple-50 to-purple-100",
    iconBg: "bg-purple-500",
  },
  {
    name: "Tailwind",
    level: "초급",
    icon: SiTailwindcss,
    color: "from-cyan-50 to-cyan-100",
    iconBg: "bg-cyan-500",
  },
  {
    name: "Figma",
    level: "초급",
    icon: SiFigma,
    color: "from-indigo-50 to-indigo-100",
    iconBg: "bg-indigo-500",
  },
  {
    name: "Git",
    level: "초급",
    icon: SiGit,
    color: "from-gray-50 to-gray-100",
    iconBg: "bg-gray-700",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-neutral-dark mb-4">
            기술 스택
          </h2>
          <p className="text-lg text-neutral-medium">
            현재 사용하고 있는 기술들과 도구들입니다
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className={`skill-card group bg-gradient-to-br ${skill.color}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-center">
                <motion.div
                  className={`w-16 h-16 mx-auto mb-4 ${skill.iconBg} rounded-full flex items-center justify-center`}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <skill.icon className="text-white text-2xl" />
                </motion.div>
                <h3 className="font-semibold text-neutral-dark mb-2">
                  {skill.name}
                </h3>
                <p className="text-sm text-neutral-medium">{skill.level}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
