import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import MainLayout from '../../components/layouts/MainLayout';

const news = [
  {
    id: 1,
    title: 'Company Completes New Round of Financing, Accelerating Product Development and Market Expansion',
    summary: 'Recently, our company completed B-round financing, with investors including several well-known venture capital firms. This round of financing will mainly be used for product development and market expansion.',
    imageUrl: '/news/funding.jpg',
    date: '2024-03-15',
    category: 'Company News',
    href: '/news/funding-announcement',
  },
  {
    id: 2,
    title: 'Launches New Digital Solution, Helping Enterprises Upgrade',
    summary: 'At today\'s product launch conference, we launched a new digital solution for enterprise digital transformation, attracting widespread attention from the industry.',
    imageUrl: '/news/product-launch.jpg',
    date: '2024-03-10',
    category: 'Product Dynamics',
    href: '/news/new-solution',
  },
  {
    id: 3,
    title: 'Wins "Best Technology Innovation Enterprise of the Year" Award',
    summary: 'At the 2024 Technology Innovation Conference, our company won the "Best Technology Innovation Enterprise of the Year" award, thanks to its excellent innovation capabilities and outstanding market performance.',
    imageUrl: '/news/award.jpg',
    date: '2024-03-05',
    category: 'Company Honors',
    href: '/news/innovation-award',
  },
  {
    id: 4,
    title: 'Successfully Holds 2024 Technology Open Day',
    summary: 'Our company successfully held the 2024 Technology Open Day at its Shanghai headquarters, exploring technology innovation and industry development with partners.',
    imageUrl: '/news/tech-day.jpg',
    date: '2024-02-28',
    category: 'Event Information',
    href: '/news/tech-day-2024',
  },
];

const NewsPage: NextPage = () => {
  return (
    <MainLayout
      title="News - Technology Company Official Website"
      description="Latest news and updates from our company"
    >
      <div className="min-h-screen bg-white">
        <Head>
          <title>News - Company Website</title>
          <meta
            name="description"
            content="Learn about our latest developments, product releases, and industry news"
          />
        </Head>

        <Navbar />

        <main>
          {/* Page Title */}
          <div className="relative isolate overflow-hidden bg-gradient-to-b from-primary/20 pt-14">
            <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
              <div className="mx-auto max-w-2xl text-center">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  News
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Stay up-to-date with our latest news and industry information
                </p>
              </div>
            </div>
          </div>

          {/* News List */}
          <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {news.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  className="group flex flex-col overflow-hidden rounded-lg shadow-lg transition-shadow hover:shadow-xl"
                >
                  <div className="aspect-[16/9] w-full overflow-hidden">
                    <Image
                      src={item.imageUrl}
                      alt={item.title}
                      width={800}
                      height={450}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-between bg-white p-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-x-4">
                        <time
                          dateTime={item.date}
                          className="text-sm text-gray-500"
                        >
                          {item.date}
                        </time>
                        <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                          {item.category}
                        </span>
                      </div>
                      <div className="mt-4">
                        <h3 className="text-xl font-semibold text-gray-900">
                          {item.title}
                        </h3>
                        <p className="mt-3 text-base text-gray-600">
                          {item.summary}
                        </p>
                      </div>
                    </div>
                    <div className="mt-6">
                      <div className="text-sm font-medium text-primary">
                        Read More
                        <span aria-hidden="true"> &rarr;</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </MainLayout>
  );
};

export default NewsPage;