const ToolCard = ({ title, description, icon, badge, link }) => {

  return (
    <a href={link} className="flex flex-col p-6 border border-gray-300 rounded-lg shadow-sm bg-white w-full h-full hover:shadow-md transition-shadow duration-300 transform transition-transform duration-300 hover:scale-105">
      <div className="flex items-start mb-4">
        <img src={icon} alt={`${title} icon`} className="w-10 h-10 mr-2 transform transition-transform duration-300 hover:scale-110" />
      </div>
      <div className="flex items-start mb-4">
        <h3 className="text-xl font-semibold">{title}</h3>
        {badge && (
          <span className="ml-2 px-2 py-1 text-xs font-medium text-red-800 bg-red-200 rounded">
            {badge}
          </span>
        )}
      </div>
      <p className="text-sm text-gray-600">{description}</p>
    </a>
  );
};

export default ToolCard;
