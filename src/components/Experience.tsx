import { motion } from "framer-motion";

const experiences = [
  {
    title: "주니어 프론트엔드 개발자",
    company: "QED",
    period: "2023.08 - 2024.09",
    type: "experience",
    color: "bg-primary",
    bgColor: "from-primary/5",
    textColor: "text-primary",
    achievements: [
      "Vue 기반 웹 애플리케이션 개발 및 유지보수",
      "React 기반 키오스크 개발 및 유지보수",
      "Google Analytics, Clarity 도입",
      "Socket 통신 및 IoT 기기 제어",
      "PG사 결제 연동 기능 개발",
      "데이터 기반 UI/UX 개선 (CS 인입 70% 개선)",
      "페이지 로딩 속도 40% 개선",
    ],
  },
];

const education = [
  {
    title: "삼성청년SW아카데미 7기",
    company: "멀티캠퍼스",
    period: "2022.01 - 2022.12",
    type: "education",
    color: "bg-green-500",
    bgColor: "from-green-50",
    textColor: "text-green-600",
    achievements: ["웹 프론트엔드 개발 학습", "프로젝트 우수상 수상 (2회)"],
  },
  {
    title: "경영학과 학사",
    company: "동아대학교",
    period: "2014.03 - 2020.08",
    type: "education",
    color: "bg-purple-500",
    bgColor: "from-purple-50",
    textColor: "text-purple-600",
    achievements: [
      "브랜드 관리 및 소비자 행동 패턴 학습",
      "고객 행동 유발을 위한 전략 학습",
    ],
  },
  {
    title: "교육 & 자격증",
    company: "지속적인 학습",
    period: "2014 - 현재",
    type: "education",
    color: "bg-blue-500",
    bgColor: "from-blue-50",
    textColor: "text-blue-600",
    achievements: ["SQLD", "컴퓨터 활용 능력 1급", "워드프로세서 1급"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-neutral-dark mb-4">
            경력 & 교육
          </h2>
          <p className="text-lg text-neutral-medium">
            저의 성장 과정과 경험을 소개합니다
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* 경력 */}
          <div>
            <h3 className="text-2xl font-semibold text-neutral-dark mb-8">
              경력 사항
            </h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  className="timeline-item"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <div className={`timeline-dot ${exp.color}`}></div>
                  <div
                    className={`timeline-content bg-gradient-to-r ${exp.bgColor} to-transparent`}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-lg font-semibold text-neutral-dark">
                        {exp.title}
                      </h4>
                      <span className={`text-sm ${exp.textColor} font-medium`}>
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-neutral-medium mb-2">{exp.company}</p>
                    <ul className="text-sm text-neutral-medium space-y-1">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i}>• {achievement}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* 교육 */}
          <div>
            <h3 className="text-2xl font-semibold text-neutral-dark mb-8">
              교육 사항
            </h3>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  className="timeline-item"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <div className={`timeline-dot ${edu.color}`}></div>
                  <div
                    className={`timeline-content bg-gradient-to-r ${edu.bgColor} to-transparent`}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-lg font-semibold text-neutral-dark">
                        {edu.title}
                      </h4>
                      <span className={`text-sm ${edu.textColor} font-medium`}>
                        {edu.period}
                      </span>
                    </div>
                    <p className="text-neutral-medium mb-2">{edu.company}</p>
                    <ul className="text-sm text-neutral-medium space-y-1">
                      {edu.achievements.map((achievement, i) => (
                        <li key={i}>• {achievement}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
