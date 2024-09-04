type ProjectItemProps = {
    name: string;
    onClick: () => void;
  };
  
  function ProjectItem({ name, onClick }: ProjectItemProps) {
    return (
      <p 
        className="py-6 md:py-8 border-b-[1px] border-gray-400 cursor-pointer relative overflow-hidden group" 
        onClick={onClick}
      >
        {name}
        <span className="absolute left-0 bottom-0 w-full h-[1px] bg-gray-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></span>
      </p>
    );
  }
  
  export default ProjectItem;
  