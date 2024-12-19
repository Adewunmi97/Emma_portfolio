import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Card } from '../ui/Card';
import type { Project } from '../../types';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card>
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-sm bg-purple-100 dark:bg-purple-900 
              text-purple-600 dark:text-purple-300 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <a
          href={project.link}
          className="inline-flex items-center text-purple-600 dark:text-purple-400 
          hover:text-purple-700 dark:hover:text-purple-300"
        >
          View Project <ExternalLink className="ml-2 h-4 w-4" />
        </a>
      </div>
    </Card>
  );
}