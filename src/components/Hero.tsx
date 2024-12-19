import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-6">
          Hi, I'm{' '}
          <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Emmanuel Adebisi
          </span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8">
          Product/Graphic Designer crafting delightful digital experiences
        </p>
        <a
          href="#portfolio"
          className="inline-flex items-center px-6 py-3 text-base font-medium text-white 
          bg-purple-600 hover:bg-purple-700 rounded-full transition-colors"
        >
          View My Work
          <ArrowRight className="ml-2 h-5 w-5" />
        </a>
      </div>
    </section>
  );
}