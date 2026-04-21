import { useState, useEffect } from "react";
import { Github, ArrowRight, Loader } from "lucide-react";

// ── Types ──────────────────────────────────────────────────
interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  github: string;
  liveUrl: string;
}

// ── Project Card ───────────────────────────────────────────
function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="bg-[#0e1230] border border-[#1e2451] rounded-2xl overflow-hidden flex flex-col group hover:border-[#3b2a6e] transition-colors duration-300">
      {/* Image — full bleed, fixed height */}
      <div className="w-full h-62.5 overflow-hidden shrink-0">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Card body */}
      <div className="px-5 pt-5 pb-6 flex flex-col flex-1 gap-3">
        <h3 className="text-white font-bold text-xl leading-snug">
          {project.title}
        </h3>

        <p className="text-[#8b8bb0] text-sm leading-relaxed flex-1">
          {project.description}
        </p>

        {/* Footer: GitHub icon left, Read more right */}
        <div className="flex items-center justify-between mt-2">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-white hover:text-[#a78bfa] transition-colors duration-200"
          >
            <Github size={24} />
          </a>

          <a
            href={project.liveUrl}
            className="flex items-center gap-1.5 text-white text-sm font-medium hover:text-[#a78bfa] transition-colors duration-200"
          >
            Read more <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </div>
  );
}

// ── Skeleton Card ──────────────────────────────────────────
function SkeletonCard() {
  return (
    <div className="bg-[#0e1230] border border-[#1e2451] rounded-2xl overflow-hidden animate-pulse">
      <div className="w-full h-62.5 bg-[#1a1f45]" />
      <div className="px-5 pt-5 pb-6 flex flex-col gap-3">
        <div className="h-5 bg-[#1a1f45] rounded w-3/4" />
        <div className="h-4 bg-[#1a1f45] rounded w-full" />
        <div className="h-4 bg-[#1a1f45] rounded w-5/6" />
        <div className="h-4 bg-[#1a1f45] rounded w-2/3" />
      </div>
    </div>
  );
}

// ── Main Component ─────────────────────────────────────────
export default function FeaturedProjects() {
  const [allProjects, setAllProjects] = useState<Project[]>([]);
  const [visibleCount, setVisibleCount] = useState(3);
  const [loadingData, setLoadingData] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoadingData(true);
        const res = await fetch("/Data/projects.json");
        if (!res.ok) throw new Error("Failed to load projects");
        const data: Project[] = await res.json();
        setAllProjects(data);
      } catch (err) {
        setError("Could not load projects. Please try again.");
        console.error(err);
      } finally {
        setLoadingData(false);
      }
    };
    fetchProjects();
  }, []);

  const handleLoadMore = async () => {
    setLoadingMore(true);
    await new Promise((r) => setTimeout(r, 700));
    setVisibleCount((prev) => Math.min(prev + 3, allProjects.length));
    setLoadingMore(false);
  };

  const visibleProjects = allProjects.slice(0, visibleCount);
  const hasMore = visibleCount < allProjects.length;

  return (
    <section id="projects" className="px-6 py-16">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-white text-4xl font-bold tracking-tight">
          Featured Projects
        </h2>
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {loadingData ? (
          [1, 2, 3].map((n) => <SkeletonCard key={n} />)
        ) : error ? (
          <div className="col-span-3 flex items-center justify-center py-20">
            <p className="text-[#f85149] text-sm">{error}</p>
          </div>
        ) : (
          visibleProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))
        )}
      </div>

      {/* Load More Button */}
      {!loadingData && !error && hasMore && (
        <div className="flex justify-center mt-14">
          <button
            onClick={handleLoadMore}
            disabled={loadingMore}
            className="
              flex items-center gap-3
              bg-[#6d28d9] hover:bg-[#5b21b6]
              disabled:opacity-60
              text-white font-semibold text-base
              px-14 py-4 rounded-full
              transition-colors duration-200
              shadow-[0_0_30px_rgba(109,40,217,0.5)]
            "
          >
            {loadingMore ? (
              <>
                <Loader size={18} className="animate-spin" />
                Loading...
              </>
            ) : (
              <>
                Load More
                {/* Sparkle / asterisk icon matching the image */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    fill="none"
                  />
                </svg>
              </>
            )}
          </button>
        </div>
      )}
    </section>
  );
}
