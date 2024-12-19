import { Palette, Layout, Lightbulb, Users } from 'lucide-react';

export function About() {
  const skills = [
    {
      icon: <Palette className="h-6 w-6" />,
      title: 'UI Design',
      description: 'Creating beautiful and intuitive interfaces that users love',
    },
    {
      icon: <Layout className="h-6 w-6" />,
      title: 'UX Design',
      description: 'Crafting seamless user experiences through research and testing',
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: 'Product Strategy',
      description: 'Developing strategic solutions to complex design problems',
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: 'User Research',
      description: 'Understanding user needs through qualitative and quantitative research',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="/emma.jpg"
              alt="Emmanuel"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">About Me</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
            I'm a creative brand designer and a UI/UX professional with over 7 years of experience in designing effective branding and marketing materials. I'm skilled in collaborating with cross-functional teams, both onsite and remotely. As a freelancer, I have worked with 10 different brands, creating logos, color schemes, brand guidelines, flyers, banners, and mockups for visual representation, ensuring consistency across all marketing and branding materials.
            In addition to my branding expertise, I specialize in UI/UX design, focusing on user needs to create visually appealing and functional designs. I am experienced in crafting design solutions from low-fidelity wireframes to high-fidelity prototypes, ensuring intuitive and engaging user experiences. I look forward to contributing to business growth by leveraging my skills in both branding and user-centric design.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill) => (
                <div
                  key={skill.title}
                  className="p-4 bg-white dark:bg-gray-700 rounded-lg shadow-sm"
                >
                  <div className="text-purple-600 dark:text-purple-400 mb-2">{skill.icon}</div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{skill.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{skill.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}