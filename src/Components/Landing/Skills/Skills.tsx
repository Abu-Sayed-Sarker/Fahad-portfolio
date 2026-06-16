interface Skill {
  name: string;
  logo: string;
  highlight?: boolean;
}

const skills: Skill[] = [
  // Row 1
  {
    name: "Python",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    name: "TensorFlow",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
  },
  {
    name: "Numpy",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
  },
  {
    name: "Pytorch",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
    highlight: true,
  },
  {
    name: "Gitlab",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg",
  },
  {
    name: "Chatgpt",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg",
  },
  {
    name: "Seaborn",
    logo: "https://seaborn.pydata.org/_images/logo-mark-lightbg.svg",
  },
  {
    name: "GitHub",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  // Row 2
  {
    name: "Power BI",
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg",
  },
  {
    name: "Tableau",
    logo: "https://cdn.worldvectorlogo.com/logos/tableau-software.svg",
  },
  {
    name: "Matplot",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/84/Matplotlib_icon.svg",
  },
  {
    name: "Scipy",
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/b2/SCIPY_2.svg",
    highlight: true,
  },
  {
    name: "Scikit-Learn",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg",
    highlight: true,
  },
  {
    name: "Jira",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg",
  },
  {
    name: "Gemini Ai",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Google_Gemini_logo.svg",
  },
  {
    name: "Git",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
];

const row1 = skills.slice(0, 8);
const row2 = skills.slice(8, 16);

function SkillItem({ skill }: { skill: Skill }) {
  return (
    <div className="flex flex-col items-center gap-3 group cursor-default">
      <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center p-3 group-hover:border-[#7c3aed] group-hover:bg-white/10 transition-all duration-300">
        <img
          src={skill.logo}
          alt={skill.name}
          loading="lazy"
          className="w-full h-full object-contain"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src =
              "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-original.svg";
          }}
        />
      </div>
      <span
        className={`text-sm font-medium ${
          skill.highlight ? "text-[#a78bfa]" : "text-[#c8cee8]"
        } group-hover:text-white transition-colors duration-200`}
      >
        {skill.name}
      </span>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="w-full px-6 py-16 relative">
      {/* Purple glow blob center */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/4 w-150 h-100 rounded-full opacity-25"
        style={{
          background:
            "radial-gradient(ellipse at center, #5b21b6 0%, transparent 70%)",
        }}
      />

      {/* Heading */}
      <div className="text-center mb-12 relative z-10">
        <h2 className="text-white text-4xl font-bold mb-3">Skills</h2>
        <p className="text-[#8b8bb0] text-sm">
          The skills, tools and technologies I am really good at
        </p>
      </div>

      {/* Grid rows */}
      <div className="max-w-5xl mx-auto flex flex-col gap-10 relative z-10">
        {/* Row 1 */}
        <div className="grid grid-cols-4 sm:grid-cols-8 gap-6 justify-items-center">
          {row1.map((skill) => (
            <SkillItem key={skill.name} skill={skill} />
          ))}
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-4 sm:grid-cols-8 gap-6 justify-items-center">
          {row2.map((skill) => (
            <SkillItem key={skill.name} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
}
