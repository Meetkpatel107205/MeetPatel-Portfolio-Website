import { HeroFrame } from "@/components/HeroFrame";
import { anton } from "@/fonts/anton";
import { twMerge } from "tailwind-merge";
import ProjectCard from "@/components/ProjectCard";

const portfolioProjects = [
  {
    category: "ML Regression",
    year: "2026",
    title: "Mental Health Score",
    subtitle: "Sklearn Pipeline + FastAPI",
    description:
      "Predicts student mental health scores from behavioral & lifestyle data — social media usage, sleep, study hours, and physical activity — using a tuned Random Forest with R² of 0.88.",
    highlight:
      "R² 0.88 · MAE 0.35 · Random Forest · Randomized Search CV · joblib Pipeline Serialization",
    link: "https://mental-health-score-85zu.onrender.com/",
    image: "/mental-health-score-prediction.png",
  },
  {
    category: "ML Classification + XAI",
    year: "2026",
    title: "Credit Risk Assessment",
    subtitle: "XGBoost + SHAP Explainability",
    description:
      "End-to-end explainable credit default prediction with class-imbalance handling, custom threshold optimization, probability calibration, and SHAP-based global & local explanations.",
    highlight:
      "ROC-AUC 0.94 · 97% Precision on Defaulters · SHAP · Calibration · Stratified 5-Fold CV",
    link: "https://credit-risk-assessment-using-shap.onrender.com/",
    image: "/credit-ledger.png",
  },
  {
    category: "Deep Learning / NLP",
    year: "2026",
    title: "Emotion Classifier",
    subtitle: "RNN · LSTM · Bidirectional GRU",
    description:
      "6-class emotion classifier (sadness, joy, love, anger, fear, surprise) benchmarking plain RNN/LSTM/GRU models against an advanced Bidirectional GRU — jumping from ~34% to 92.1% accuracy.",
    highlight:
      "92.1% Test Accuracy · Bidirectional GRU · 300D Embeddings · Class Weights · Early Stopping",
    link: "https://sentimental-analysis-using-nlp.onrender.com",
    image: "/sentimental-analysis.png",
  },
  {
    category: "Full-Stack GenAI",
    year: "2025",
    title: "Interview AI",
    subtitle: "MERN + Generative AI Platform",
    description:
      "Full-stack AI platform that analyzes resumes against job descriptions to identify skill gaps, generate tailored interview questions, build prep plans, and produce ATS-friendly resumes downloadable as PDFs.",
    highlight:
      "MERN Stack · JWT Auth · MongoDB Atlas · Generative AI · PDF Generation · Postman Tested",
    link: "https://github.com/Meetkpatel107205/Sentimental-Analysis-Using-NLP",
    image: "/interview-ai.png",
  },
];

export const ProjectsSection = () => {
  return (
    <div id="work" className="relative min-h-[3624px] md:min-h-[2555px]">
      <HeroFrame classname="h-fit py-24 absolute inset-x-4">
        <div
          className="
            absolute inset-0
            pointer-events-none
            opacity-[0.03]
            text-[#2546BD]
        
            bg-[linear-gradient(currentColor_1px,transparent_1px),linear-gradient(90deg,currentColor_1px,transparent_1px)]
            bg-[length:40px_40px]
          "
        />

        <div className="h-fit w-auto pb-5 mx-5 mb-20 border-b-2 border-[#2546BD]">
          <div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 bg-[#2546BD] inline-block"></span>
              <div className="font-mono text-[#2546BD] text-[12px] [word-spacing:0.2rem] uppercase">
                Fig. 002 - Projects
              </div>
            </div>
          </div>

          <div className="flex gap-2 items-end justify-between flex-wrap">
            <div>
              <h2
                className={twMerge(
                  "uppercase text-4xl sm:text-5xl md:text-8xl text-[#2546BD]",
                  anton.className,
                )}
              >
                Selected Works
              </h2>
            </div>

            <div className="flex flex-col gap-1 self-end items-start min-[845px]:items-end">
              <span className="w-fit px-2 py-1 text-[12px] font-mono font-bold bg-[#2546BD] text-[#fdf9f2] uppercase">
                Index: 001 - 004
              </span>
              <span className="text-[10px] font-mono text-[#2546BD] [word-spacing:0.2rem] uppercase">
                System Status: Deployed
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-12">
          {portfolioProjects.map((project, index) => (
            <ProjectCard
              key={index}
              index={index + 1}
              category={project.category}
              year={project.year}
              title={project.title}
              subtitle={project.subtitle}
              description={project.description}
              highlight={project.highlight}
              link={project.link}
              image={project.image}
            />
          ))}
        </div>
      </HeroFrame>
    </div>
  );
};
