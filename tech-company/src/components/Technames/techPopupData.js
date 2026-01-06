

/* ================= CATEGORY TEMPLATES ================= */
import { technologies } from "./data";


const categoryTemplates = {
  ai_ml: {
    years: "5+",
    experts: "12+",
    description:
      "We deliver advanced AI and Machine Learning solutions with strong expertise in data processing, model training, and intelligent automation.",
  },

  frontend: {
    years: "5+",
    experts: "15+",
    description:
      "We build modern, scalable, and high-performance frontend applications with excellent user experience and clean architecture.",
  },

  backend: {
    years: "6+",
    experts: "18+",
    description:
      "Robust, secure, and scalable backend systems built with industry best practices, APIs, and microservices architecture.",
  },

  frameworks: {
    years: "5+",
    experts: "14+",
    description:
      "Framework-based application development with strong architecture, maintainability, and enterprise-grade performance.",
  },

  mobile: {
    years: "4+",
    experts: "10+",
    description:
      "High-quality mobile application development across platforms with performance optimization and user-focused design.",
  },

  hi_tech: {
    years: "4+",
    experts: "8+",
    description:
      "Cutting-edge technology solutions built using modern architectures, real-time systems, and high-performance platforms.",
  },

  platforms_bi: {
    years: "5+",
    experts: "9+",
    description:
      "Enterprise platforms and BI tools implementation for workflow automation, analytics, and business intelligence.",
  },

  cms_ecommerce: {
    years: "6+",
    experts: "11+",
    description:
      "Scalable CMS and eCommerce solutions tailored for performance, customization, and seamless content management.",
  },

  cloud_devops: {
    years: "5+",
    experts: "10+",
    description:
      "Cloud-native and DevOps solutions focusing on scalability, security, CI/CD pipelines, and infrastructure automation.",
  },
};

/* ================= AUTO GENERATOR ================= */

export const techPopupData = Object.entries(technologies).reduce(
  (acc, [categoryKey, techList]) => {
    const template = categoryTemplates[categoryKey];

    techList.forEach((tech) => {
      acc[tech.name] = {
        stats: [
          { value: template.years, label: "Years Of Experience" },
          {
            value: template.experts,
            label: `${tech.name} Experts`,
          },
        ],
        description: template.description,
      };
    });

    return acc;
  },
  {}
);
