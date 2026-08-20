import React from 'react';

interface ProjectImageProps {
  src: string;
  alt: string;
  className?: string;
}

const FALLBACK_SRC = '/img/helmet.png';

export const ProjectImage: React.FC<ProjectImageProps> = ({ src, alt, className }) => {
  return (
    <img
      src={src}
      alt={alt}
      onError={(e) => {
        (e.target as HTMLImageElement).src = FALLBACK_SRC;
      }}
      className={className}
    />
  );
};