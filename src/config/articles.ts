export interface Author {
  name: string;
  role: string;
  imageUrl: string;
  bio?: string;
}

export interface Post {
  id: number;
  title: string;
  description: string;
  content?: string;
  imageUrl: string;
  date: string;
  category: string;
  author: Author;
  readingTime: string;
  href: string;
}

export interface Category {
  id: string;
  name: string;
}

export const categories: Category[] = [
   { id: "all", name: "All" },
   { id: "tech", name: "Technology" },
   { id: "industry", name: "Industry" },
   { id: "insight", name: "Insights" },
   { id: "case", name: "Case Studies" },
 ];

export const posts: Post[] = [
  {
    id: 1,
    title: "AI Applications in Enterprise Digital Transformation",
    description:
      "Exploring how AI technology helps enterprises achieve intelligent upgrades and improve operational efficiency.",
    imageUrl: "/blog/ai-transformation.png",
    date: "2024-03-15",
    category: "tech",
    author: {
      name: "John Zhang",
      role: "Technical Director",
      imageUrl: "/team/1.webp",
    },
    readingTime: "8 min",
    href: "/blog/ai-transformation",
  },
  {
    id: 2,
    title: "2024 Enterprise Digital Transformation Trends",
    description:
      "In-depth analysis of major trends in enterprise digital transformation for 2024.",
    imageUrl: "/blog/digital-trends.png",
    date: "2024-03-10",
    category: "industry",
    author: {
      name: "Mike Li",
      role: "Research Director",
      imageUrl: "/team/2.webp",
    },
    readingTime: "10 min",
    href: "/blog/digital-trends-2024",
  },
  {
    id: 3,
    title: "Building an Efficient Data Analytics System",
    description:
      "Sharing best practices for building enterprise data analytics systems.",
    imageUrl: "/blog/data-analytics.png",
    date: "2024-03-05",
    category: "insight",
    author: {
      name: "Sarah Wang",
      role: "Data Expert",
      imageUrl: "/team/3.webp",
    },
    readingTime: "12 min",
    href: "/blog/data-analytics-system",
  },
  {
    id: 4,
    title: "Digital Transformation Case Study: Manufacturing Industry",
    description:
      "Detailed analysis of how a manufacturing company improved efficiency through digital transformation.",
    imageUrl: "/blog/case-study.png",
    date: "2024-03-01",
    category: "case",
    author: {
      name: "David Zhao",
      role: "Solution Expert",
      imageUrl: "/team/2.webp",
    },
    readingTime: "15 min",
    href: "/blog/manufacturing-case-study",
  },
];

export const getRelatedPosts = (currentPostId: number): Post[] => {
  return posts
    .filter(post => post.id !== currentPostId)
    .slice(0, 2);
};