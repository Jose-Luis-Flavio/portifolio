import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "../styles/SkillsCarousel.css";

const tecnologias = [
  {
    nome: "React",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    nome: "Angular",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
  },
  {
    nome: "TypeScript",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    nome: "JavaScript",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    nome: "HTML",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    nome: "CSS",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    nome: "Node.js",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    nome: "Git",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    nome: "Docker",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  {
    nome: "PostgreSQL",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
];

function SkillsCarousel() {
  return (
    <div className="skills-swiper-wrapper">
      <Swiper
        modules={[EffectCoverflow, Autoplay]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        loop={true}
        autoplay={{ delay: 1500, disableOnInteraction: false }}
        speed={600}
        slideToClickedSlide={true}
        coverflowEffect={{
          rotate: 40,
          stretch: 0,
          depth: 0,
          modifier: 1,
          slideShadows: true,
        }}
      >
        {tecnologias.map((tech) => (
          <SwiperSlide key={tech.nome}>
            <div className="skill-slide">
              <img src={tech.url} alt={tech.nome} className="skill-logo" />
              <span className="skill-nome">{tech.nome}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default SkillsCarousel;
