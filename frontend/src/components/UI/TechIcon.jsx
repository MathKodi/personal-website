import React from 'react';
import { 
  SiJavascript, 
  SiHtml5, 
  SiCss3, 
  SiNodedotjs, 
  SiExpress, 
  SiMongodb, 
  SiPython, 
} from 'react-icons/si';
import {
    FaReact,
    FaJava,
    FaFigma
} from 'react-icons/fa';


const TechIcon = ({ name }) => {
  const iconSize = 24;
  
  const iconMap = {
    js: <SiJavascript size={iconSize} color="#F7DF1E" />,
    react: <FaReact size={iconSize} color="#61DAFB" />,
    html: <SiHtml5 size={iconSize} color="#E34F26" />,
    css: <SiCss3 size={iconSize} color="#1572B6" />,
    node: <SiNodedotjs size={iconSize} color="#339933" />,
    express: <SiExpress size={iconSize} color="#FFFFFF" />,
    java: <FaJava size={iconSize} color="#007396" />,
    mongodb: <SiMongodb size={iconSize} color="#47A248" />,
    python: <SiPython size={iconSize} color="#3776AB" />,
    figma: <FaFigma size={iconSize} color="#F24E1E" />
  };
  
  return (
    <div className="tech-icon">
      {iconMap[name] || <div className="placeholder-icon"></div>}
    </div>
  );
};

export default TechIcon;