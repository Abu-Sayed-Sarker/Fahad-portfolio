import { useEffect, useState } from "react";
import { Briefcase, Calendar, MapPin, ChevronRight } from "lucide-react";

interface Experience {
  id: number;
  title: string;
  company: string;
  duration: string;
  location: string;
  description: string;
  responsibilities: string[];
  companyLogo: string;
}

export default function ExperienceSection() {
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        const response = await fetch("/Data/experiences.json");
        const data = await response.json();
        setExperiences(data);
      } catch (error) {
        console.error("Error fetching experiences:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchExperiences();
  }, []);

  if (loading) {
    return (
      <section className="py-20 px-6 text-center">
        <div className="animate-pulse flex flex-col items-center">
          <div className="h-10 w-48 bg-gray-700 rounded mb-8"></div>
          <div className="space-y-6 w-full max-w-4xl">
            {[1, 2].map((i) => (
              <div
                key={i}
                className="h-40 bg-gray-800 rounded-2xl w-full"
              ></div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="experience" className="py-24 px-6 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Professional <span className="text-purple-500">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-linear-to-r from-purple-500 to-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-12">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="group relative grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-8 transition-all duration-300"
            >
              {/* Left Column: Company & Date */}
              <div className="flex flex-col md:text-right mr-4">
                <div className="flex items-center md:justify-end gap-3 mb-2">
                  <span className="text-gray-400 font-medium">
                    {exp.duration}
                  </span>
                  <div className="p-2 bg-gray-800 rounded-lg group-hover:bg-purple-600/20 transition-colors">
                    <Calendar size={18} className="text-purple-400" />
                  </div>
                </div>
                <h4 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
                  {exp.company}
                </h4>
                <div className="flex items-center md:justify-end gap-1 text-gray-400 text-sm mt-1">
                  <MapPin size={14} />
                  <span>{exp.location}</span>
                </div>
              </div>

              {/* Right Column: Content Card */}
              <div className="relative pl-8 md:pl-0">
                {/* Timeline Line (Desktop only) */}
                <div className="absolute -left-9 top-0 bottom-0 w-px bg-linear-to-b from-purple-500/50 to-transparent hidden md:block">
                  <div className="absolute top-2 -left-1 w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.5)]"></div>
                </div>

                <div className="bg-[#0e1230] border border-[#1e2451] rounded-2xl p-8 hover:border-purple-500/30 transition-all duration-500 shadow-xl group-hover:shadow-purple-500/5">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                    <div className="flex items-center gap-4">
                      {exp.companyLogo && (
                        <div className="w-12 h-12 rounded-xl bg-white/5 p-2 flex items-center justify-center border border-white/10 overflow-hidden">
                          <img
                            src={exp.companyLogo}
                            alt={exp.company}
                            className="w-full h-full object-contain"
                          />
                        </div>
                      )}
                      <div>
                        <h3 className="text-2xl font-bold text-white leading-tight">
                          {exp.title}
                        </h3>
                        <div className="flex items-center gap-2 text-purple-400 font-medium md:hidden mt-1">
                          <Briefcase size={14} />
                          <span>{exp.company}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-400 leading-relaxed mb-6">
                    {exp.description}
                  </p>

                  <div className="space-y-3">
                    {exp.responsibilities.map((resp, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3 group/item"
                      >
                        <div className="mt-1.5 shrink-0 transition-transform group-hover/item:translate-x-1">
                          <ChevronRight size={16} className="text-purple-500" />
                        </div>
                        <span className="text-gray-300 text-sm leading-relaxed">
                          {resp}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
