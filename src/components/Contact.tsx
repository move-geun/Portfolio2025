import { motion } from "framer-motion";
import { Mail, Github, Phone } from "lucide-react";

const contacts = [
  {
    icon: Mail,
    title: "이메일",
    value: "ehdrms1426@email.com",
    color: "bg-primary",
    link: "mailto:ehdrms1426@email.com",
  },
  {
    icon: Github,
    title: "GitHub",
    value: "github.com/move-geun",
    color: "bg-gray-800",
    link: "https://github.com/move-geun",
  },
  {
    icon: Phone,
    title: "전화",
    value: "010-6419-0743",
    color: "bg-green-500",
    link: "tel:010-6419-0743",
  },
];

export default function Contact() {
  return (
    <footer
      id="contact"
      className="py-16 bg-gradient-to-br from-secondary-dark to-neutral-dark text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">연락하기</h2>
          <p className="text-lg text-gray-300">
            프로젝트 의뢰, 채용 제안이나 협업 제안이 있으시면 언제든 연락주세요
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {contacts.map((contact, index) => (
            <motion.a
              key={contact.title}
              href={contact.link}
              className="text-center group block"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className={`w-16 h-16 mx-auto mb-4 ${contact.color} rounded-full flex items-center justify-center`}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <contact.icon className="text-white text-2xl" />
              </motion.div>
              <h3 className="font-semibold mb-2">{contact.title}</h3>
              <p className="text-gray-300 text-sm">{contact.value}</p>
            </motion.a>
          ))}
        </div>

        <motion.div
          className="text-center border-t border-gray-700 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-gray-400">© 2025 이동근. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}
