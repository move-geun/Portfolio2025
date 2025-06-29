import { motion } from "framer-motion";

export default function About() {
  const scrollToProjects = () => {
    const element = document.querySelector("#projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const goToResume = () => {
    window.open(
      "https://drive.google.com/file/d/1xCbDC7_GwrmsRAEDTVc5BXWdPRLW4sbP/view?usp=sharing",
      "_blank"
    );
  };

  return (
    <section
      id="about"
      className="pt-20 pb-16 bg-gradient-to-br from-primary/5 to-accent/5"
    >
      <div className="max-w-7xl mx-auto pt-10 px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-neutral-dark">
                안녕하세요,
                <br />
                <span className="text-primary">웹 프론트엔드</span>
                <br />
                개발자 이동근입니다
              </h1>
              <p className="text-lg text-neutral-medium leading-relaxed">
                사용자 행동을 이끌 수 있는 UI/UX에 집중하고 있습니다. 사용자
                데이터를 기반으로 개발하는 것을 좋아합니다.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-md hover:bg-primary/20">
                1년+ 경력
              </span>
              <span className="px-4 py-2 bg-accent/10 text-accent rounded-md hover:bg-accent/20">
                React 전문
              </span>
              <span className="px-4 py-2 bg-green-100 text-green-700 rounded-md hover:bg-green-200">
                데이터 기반 개선 및 개발
              </span>
            </div>

            <div className="flex space-x-4">
              <button
                onClick={scrollToProjects}
                className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90"
              >
                프로젝트 보기
              </button>
              <button
                onClick={goToResume}
                className="px-4 py-2 border-primary text-primary rounded-md hover:bg-primary/5"
              >
                이력서 보러가기
              </button>
            </div>
          </motion.div>
          <div className="flex justify-center">
            <motion.div
              className="relative max-w-[400px] w-full"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img
                src="https://github.com/user-attachments/assets/a37d4e4d-88a7-4188-a6c5-7ad6f98002d3"
                alt="캐릭터사진"
                className="rounded-2xl shadow-2xl w-full h-auto max-w-[400px] max-h-[400px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
