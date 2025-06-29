import { useState } from "react";
import Navigation from "@/components/Navigation";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import ProjectModal from "@/components/ProjectModal";

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  period: string;
  github?: string;
  demo?: string;
  features: string[];
  achievements: string[];
}

const projects: Project[] = [
  {
    id: "1",
    title: "[개인] 포트폴리오(ver.2025)",
    description: "React와 Tailwind를 활용한 웹 포트폴리오 페이지",
    image:
      "https://github.com/user-attachments/assets/6896545b-3f55-4553-8ebc-03e6382d40e7",
    technologies: ["React", "Tailwind", "TypeScript"],
    period: "2025.03 - 2025.06",
    features: ["반응형 디자인 및 모바일 최적화"],
    achievements: [
      "Tailwind를 활용한 빠른 제작",
      "TypeScript 활용능력 증진",
      "포트폴리오 페이지 리뉴얼",
    ],
    github: "https://github.com/move-geun/Portfolio2025",
    demo: "",
  },
  {
    id: "2",
    title: "[개인] UI-Frame",
    description: "React와 Module.css를 활용한 UI 집중 페이지",
    image:
      "https://github.com/user-attachments/assets/876fd48c-1827-4537-892e-6fcb37ab3c99",
    technologies: ["React", "Module.css", "TypeScript", "Three.js"],
    period: "2025.06- 2025.06",
    features: [
      "반응형 디자인",
      "Css 애니메이션",
      "Dom 조작을 활용한 애니메이션",
      "Three.js 활용 페이지",
    ],
    achievements: ["FE 기본기인 UI 제작 능력 향상"],
    github: "https://github.com/move-geun/ui_frame",
    demo: "https://ui-frame.vercel.app/",
  },
  {
    id: "3",
    title: "[경력] CMS",
    description:
      "QED 근무 당시 유지보수한 프로젝트, Vue.js와 Vuex를 활용한 1700여개 매장이 사용하는 매장 관리 시스템",
    image:
      "https://github.com/user-attachments/assets/14a0641d-dd26-42cc-8186-19e67ea2720a",
    technologies: [
      "Vue.js",
      "Vuex",
      "i18n",
      "socket.js",
      "Google Analytics",
      "Clarity",
      "Sentry",
      "JavaScript",
    ],
    period: "2023.08 - 2024.09",
    features: [
      "본사 어드민 페이지",
      "매장 회원 관리",
      "매장 내 기기 관리",
      "매장 매출 관리",
      "매장 예약 관리",
      "매장 결제 관리",
    ],
    achievements: [
      "GA,Clarity,Sentry 도입 및 사용자 데이터 기반 UI/UX 개선",
      "컴포넌트화를 통한 반응형 웹으로 개선",
      "정기 구독 서비스 개발",
      "CS 70% 해결",
      "API 호출 최소화",
      "페이지 렌더링 최적화",
    ],
  },
  {
    id: "4",
    title: "[경력] KIOSK 제작",
    description:
      "QED 근무 당시 신규 개발한 프로젝트, React와 Redux를 활용한 무인 매장 운영을 위한 키오스크",
    image:
      "https://github.com/user-attachments/assets/14a0641d-dd26-42cc-8186-19e67ea2720a",
    technologies: ["React", "Redux", "i18n", "Sentry", "JavaScript"],
    period: "2024.01- 2024.09",
    features: [
      "매장 회원 가입",
      "이용권 구매",
      "자리 예약 및 이용",
      "자리 이동",
    ],
    achievements: [
      "CMS API 사용을 위한 JWT 토큰 도입",
      "PG사 연동을 통한 결제 기능 도입",
      "간편 결제 기능 도입",
      "결제간 오류시 자동 환불 기능 추가",
      "socket 통신을 활용한 정보 업데이트 최적화",
      "매장 유형에 따른 UI 최적화 및 기능 변경",
      "Sentry를 활용한 에러 대응 최적화",
    ],
  },
  {
    id: "5",
    title: "[경력] 이벤트 페이지",
    description:
      "QED 근무 당시 신규 개발한 프로젝트, React를 활용한 이벤트 참여 전용 도메인",
    image:
      "https://github.com/user-attachments/assets/14a0641d-dd26-42cc-8186-19e67ea2720a",
    technologies: ["React", "JavaScript"],
    period: "2023.08- 2023.11",
    features: ["랭킹 조회", "검색 기능", "반응형 서비스"],
    achievements: [
      "컴포넌트화를 통한 반응형 제작",
      "랭킹에 따른 UI변경, 렌더링 최적화",
    ],
  },
  {
    id: "6",
    title: "[개인] 포트폴리오(ver.2022)",
    description: "React와 Recoil을 활용한 개인 포트폴리오 페이지(2022년)",
    image:
      "https://github.com/user-attachments/assets/874cbff1-83dc-4a57-84bf-671a7cdcb1aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    technologies: ["React", "Recoil", "JavaScript"],
    period: "2022.11- 2022.12",
    features: ["포트폴리오 페이지"],
    achievements: [
      "Navigation 기능",
      "터미널 명령어 입력을 통한 페이지 이동 기능",
    ],
    github: "https://github.com/move-geun/ui_frame",
    demo: "https://ui-frame.vercel.app/",
  },
  {
    id: "7",
    title: "[SSAFY] D-station",
    description: "SSAFY 7기, React와 Three.js를 활용한 개발 공부 도움 서비스",
    image:
      "https://github.com/user-attachments/assets/e8e4d6d6-7f65-49cb-af49-16f5752a434d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    technologies: ["React", "Recoil", "Three.js", "JavaScript"],
    period: "2022.10- 2022.11",
    features: ["학습 진도 기록", "개발 성향 추천", "학습 레퍼런스 추천"],
    achievements: [
      "Three.js 활용 능력 증진",
      "Three.js 도입 및 메인 페이지 구현",
      "검색 및 Navigation 구현",
      "MyPage 구현",
      "Figma 및 FE 스켈레톤 코드 작성",
    ],
    github: "https://github.com/move-geun/D-Station",
  },
  {
    id: "8",
    title: "[SSAFY] MLBTI",
    description: "SSAFY 7기, React와 빅데이터를 활용한 MLB 경기 예측 서비스",
    image:
      "https://github.com/user-attachments/assets/70771200-bebf-4f6f-804f-47d6600ccad7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    technologies: ["React", "Redux", "JavaScript"],
    period: "2022.08- 2022.10",
    features: ["경기 시뮬레이션 기능", "팀 커스터마이징", "경기 일정 알림"],
    achievements: [
      "프로젝트 우수상 1등 수상",
      "컴포넌트화를 통한 반응형 제작",
      "메인 페이지 구현",
      "로그인 및 회원가입 구현",
      "경기 시뮬레이션 기능 구현",
      "로그인 유무에 따른 접근 권한 제한",
      "Figma 및 FE 스켈레톤 코드 작성",
    ],
    github: "https://github.com/move-geun/MLBTI",
  },
  {
    id: "9",
    title: "[SSAFY] Onsikgo",
    description: "SSAFY 7기, Vue.js를 활용한 마감 할인 판매 서비스",
    image:
      "https://github.com/user-attachments/assets/dc13ecc1-dc45-452b-abd4-43b033ca5ba9",
    technologies: ["Vue.js", "Vuex", "JavaSciprt"],
    period: "2022.07- 2022.08",
    features: [
      "점주 어드민 페이지와 고객 구매 페이지 분리",
      "근처 매장 확인",
      "재고 확인",
      "예약 및 판매",
      "알림기능",
    ],
    achievements: [
      "프로젝트 우수상 2등 수상",
      "컴포넌트화를 통한 반응형 제작",
      "메인 페이지(카테고리별, 현재 위치별 가게 표시) 구현",
      "로그인 주체별 분리된 알림 페이지 구현",
      "상품 등록 및 재고 CRUD 페이지 구현",
      "판매 데이터 시각화",
      "Figma 및 FE 스켈레톤 코드 작성",
    ],
    github: "https://github.com/move-geun/OnSikGo",
  },
];

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="min-h-screen bg-secondary-dark">
      <Navigation />
      <About />
      <Skills />
      <Projects projects={projects} onProjectClick={setSelectedProject} />
      <Experience />
      <Contact />
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
