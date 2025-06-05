import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { categories, posts } from '../../config/articles';
import MainLayout from '../../components/layouts/MainLayout';

const BlogPage: NextPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredPosts = selectedCategory === 'all'
    ? posts
    : posts.filter(post => post.category === selectedCategory);

  return (
    <MainLayout
      title="Blog - Technology Company Official Website"
      description="Read our latest blog posts and insights"
    >
      <div className="min-h-screen bg-white">
        <Head>
          <title>Blog - Technology Company Official Website</title>
          <meta name="description" content="Latest technology trends, industry insights, and case studies" />
        </Head>

        <Navbar />

        <main>
          {/* Header */}
          <div className="bg-white px-6 pt-16 pb-20 lg:px-8 lg:pt-24 lg:pb-28">
            <div className="mx-auto max-w-7xl">
              <div className="text-center">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                  Blog
                </h1>
                <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
                  Latest technology trends, industry insights, and case studies
                </p>
              </div>

              {/* Categories */}
              <div className="mt-12 flex justify-center space-x-4">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`rounded-full px-4 py-2 text-sm font-medium ${
                      selectedCategory === category.id
                        ? 'bg-primary text-white'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>

              {/* Blog posts */}
              <div className="mx-auto mt-16 grid max-w-lg gap-12 lg:max-w-none lg:grid-cols-3">
                {filteredPosts.map((post) => (
                  <div key={post.id} className="flex flex-col overflow-hidden rounded-lg shadow-lg">
                    <div className="flex-shrink-0">
                      <Image
                        className="h-48 w-full object-cover"
                        src={post.imageUrl}
                        alt={post.title}
                        width={600}
                        height={300}
                      />
                    </div>
                    <div className="flex flex-1 flex-col justify-between bg-white p-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-x-4 text-xs">
                          <time dateTime={post.date} className="text-gray-500">
                            {post.date}
                          </time>
                          <span className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600">
                            {categories.find(cat => cat.id === post.category)?.name}
                          </span>
                        </div>
                        <Link href={post.href} className="mt-2 block">
                          <h3 className="text-xl font-semibold text-gray-900 hover:text-primary">
                            {post.title}
                          </h3>
                          <p className="mt-3 text-base text-gray-500 line-clamp-3">
                            {post.description}
                          </p>
                        </Link>
                      </div>
                      <div className="mt-6 flex items-center">
                        <div className="flex-shrink-0">
                          <Image
                            className="h-10 w-10 rounded-full"
                            src={post.author.imageUrl}
                            alt={post.author.name}
                            width={40}
                            height={40}
                          />
                        </div>
                        <div className="ml-3">
                          <p className="text-sm font-medium text-gray-900">{post.author.name}</p>
                          <p className="text-xs text-gray-500">{post.author.role}</p>
                        </div>
                        <span className="ml-auto text-sm text-gray-500">{post.readingTime}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>

      </div>
    </MainLayout>
  );
};

export default BlogPage; 