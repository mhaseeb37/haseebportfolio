import Link from "next/link";
import Image from "next/image";
const ProjectItem = ({ project }) => {
    return (
      <Link href={project.url} target="_blank" rel="noopener noreferrer" className="group relative block w-full md:w-[30%]">
        <div className="relative transition-transform group-hover:scale-[0.9] before:block before:absolute before:-inset-0 before:rotate-0 before:w-full before:border before:border-[#000000] before:z-[-1] before:transition-transform before:duration-300 after:block after:absolute after:-inset-0 after:-rotate-0 after:w-full after:border after:border-[#000000] after:z-[-1] after:transition-transform after:duration-300 hover:before:rotate-2 hover:after:-rotate-2">
          <Image
            src="/assets/project-one.png"
            width={100}
            height={100}
            alt={project.name}
            className="w-full h-auto transform transition duration-300 group-hover:scale-105"
          />
        </div>
        <div className="mt-4">
          <h3 className="text-2xl font-bold">{project.name}</h3>
          <p className="text-lg">{project.desc}</p>
          <p className="mt-2 text-sm font-bold">{project.tags.join(" - ")}</p>
        </div>
      </Link>
    );
  };
  
  export default ProjectItem;