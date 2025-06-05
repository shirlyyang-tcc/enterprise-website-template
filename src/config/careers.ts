export interface Benefit {
  title: string;
  description: string;
  icon: string;
}

export interface SimpleBenefit {
  name: string;
  description: string;
}

export interface Requirement {
  title: string;
  items: string[];
}

export interface JobPost {
  id: number;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  responsibilities: string[];
  requirements: Requirement[];
  benefits: Benefit[];
  salary: string;
  href: string;
  level?: string;
}

export const benefits: Benefit[] = [
  {
    title: "Competitive Salary",
    description: "We offer industry-leading compensation packages to attract and retain top talent.",
    icon: "CurrencyDollarIcon",
  },
  {
    title: "Health Insurance",
    description: "Comprehensive medical, dental, and vision coverage for you and your family.",
    icon: "HeartIcon",
  },
  {
    title: "Professional Development",
    description: "Continuous learning opportunities and career growth support.",
    icon: "AcademicCapIcon",
  },
  {
    title: "Flexible Work",
    description: "Remote work options and flexible scheduling to maintain work-life balance.",
    icon: "HomeIcon",
  },
];

export const simpleBenefits: SimpleBenefit[] = [
  {
    name: 'Competitive Salary',
    description: 'We offer industry-leading salaries to ensure employees receive fair compensation.',
  },
  {
    name: 'Flexible Work Hours',
    description: 'Flexible work arrangements to help you better balance work and life.',
  },
  {
    name: 'Career Development',
    description: 'Providing a comprehensive training system and promotion opportunities to support employee career growth.',
  },
  {
    name: 'Quality Team',
    description: 'Working with excellent colleagues, learning from each other, and progressing together.',
  },
  {
    name: 'Health Insurance',
    description: 'Offering comprehensive medical insurance and annual physical examinations, focusing on employee health.',
  },
  {
    name: 'Team Activities',
    description: 'Regularly organizing team-building activities to enhance team cohesion.',
  },
];

export const jobPosts: JobPost[] = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    department: "Engineering",
    location: "Shanghai, China",
    type: "Full-time",
    level: "Senior",
    description: "We are seeking an experienced Frontend Developer to join our engineering team. You will be responsible for building and maintaining high-quality web applications using modern technologies and best practices.",
    responsibilities: [
      "Develop and maintain complex web applications using React, TypeScript, and Next.js",
      "Collaborate with designers to implement responsive and intuitive user interfaces",
      "Write clean, maintainable, and well-documented code",
      "Participate in code reviews and provide constructive feedback",
      "Optimize applications for maximum speed and scalability",
      "Stay up-to-date with emerging technologies and industry trends",
    ],
    requirements: [
      {
        title: "Technical Skills",
        items: [
          "5+ years of experience in frontend development",
          "Expert knowledge of React, TypeScript, and modern JavaScript",
          "Experience with Next.js and server-side rendering",
          "Proficiency in HTML5, CSS3, and responsive design",
          "Understanding of RESTful APIs and GraphQL",
        ],
      },
      {
        title: "Professional Skills",
        items: [
          "Strong problem-solving abilities",
          "Excellent communication and teamwork skills",
          "Experience with agile development methodologies",
          "Ability to mentor junior developers",
        ],
      },
    ],
    benefits: benefits,
    salary: "$20,000 - $35,000/month",
    href: "/careers/senior-frontend-developer",
  },
  {
    id: 2,
    title: "Product Manager",
    department: "Product",
    location: "Beijing, China",
    type: "Full-time",
    level: "Mid-level/Senior",
    description: "We are looking for a Product Manager to drive the development of our digital transformation solutions. You will work closely with customers, engineers, and designers to deliver innovative products that solve real business problems.",
    responsibilities: [
      "Define product vision, strategy, and roadmap",
      "Gather and analyze customer requirements and feedback",
      "Write detailed product specifications and user stories",
      "Coordinate with engineering and design teams",
      "Monitor product metrics and make data-driven decisions",
      "Present product updates to stakeholders",
    ],
    requirements: [
      {
        title: "Experience",
        items: [
          "3+ years of experience in product management",
          "Track record of successful product launches",
          "Experience in B2B software products",
          "Background in digital transformation solutions",
        ],
      },
      {
        title: "Skills",
        items: [
          "Strong analytical and problem-solving abilities",
          "Excellent communication and presentation skills",
          "Data-driven decision making",
          "Agile project management",
        ],
      },
    ],
    benefits: benefits,
    salary: "$25,000 - $40,000/month",
    href: "/careers/product-manager",
  },
  {
    id: 3,
    title: "UI Designer",
    type: "Full-time",
    department: "Design",
    location: "Shenzhen, China",
    level: "Mid-level",
    description: "We are looking for a talented UI Designer to create beautiful and functional interfaces for our digital products.",
    responsibilities: [],
    requirements: [],
    benefits: benefits,
    salary: "$15,000 - $25,000/month",
    href: "/careers/ui-designer",
  },
  {
    id: 4,
    title: "Marketing Manager",
    type: "Full-time",
    department: "Marketing",
    location: "Guangzhou, China",
    level: "Senior",
    description: "We are seeking an experienced Marketing Manager to lead our marketing initiatives and drive business growth.",
    responsibilities: [],
    requirements: [],
    benefits: benefits,
    salary: "$20,000 - $30,000/month",
    href: "/careers/marketing-manager",
  },
];

export const getJobPost = (slug: string): JobPost | undefined => {
  return jobPosts.find(job => job.href.split('/').pop() === slug);
}; 