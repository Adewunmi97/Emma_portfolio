import React from 'react';
import { Card } from '../ui/Card';
import type { Testimonial } from '../../types';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <Card className="p-6">
      <div className="flex items-center mb-4">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h3 className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            {testimonial.role} at {testimonial.company}
          </p>
        </div>
      </div>
      <p className="text-gray-600 dark:text-gray-300 italic">"{testimonial.content}"</p>
    </Card>
  );
}