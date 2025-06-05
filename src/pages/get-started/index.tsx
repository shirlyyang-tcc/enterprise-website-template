import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const steps = [
  {
    id: 1,
    title: 'Create an Account',
    description:
      'Sign up for a free account to access our platform and explore all features.',
    action: 'Sign Up Now',
    href: '/signup',
    imageUrl: '/get-started/signup.jpg',
  },
  {
    id: 2,
    title: 'Choose Your Plan',
    description:
      'Select a plan that best fits your business needs and scale as you grow.',
    action: 'View Plans',
    href: '/pricing',
    imageUrl: '/get-started/plans.jpg',
  },
  {
    id: 3,
    title: 'Set Up Your Project',
    description:
      'Configure your project settings and invite team members to collaborate.',
    action: 'Start Setup',
    href: '/dashboard/setup',
    imageUrl: '/get-started/setup.jpg',
  },
  {
    id: 4,
    title: 'Launch Your Solution',
    description:
      'Deploy your digital solution and start transforming your business.',
    action: 'Launch Now',
    href: '/dashboard/deploy',
    imageUrl: '/get-started/launch.jpg',
  },
];

const quickStartGuides = [
  {
    title: 'Platform Overview',
    description: 'Learn about our platform features and capabilities',
    href: '/docs/overview',
    icon: '📚',
  },
  {
    title: 'API Documentation',
    description: 'Explore our API endpoints and integration guides',
    href: '/docs/api',
    icon: '🔧',
  },
  {
    title: 'Best Practices',
    description: 'Discover tips and tricks for optimal usage',
    href: '/docs/best-practices',
    icon: '💡',
  },
  {
    title: 'Video Tutorials',
    description: 'Watch step-by-step guides and demonstrations',
    href: '/docs/tutorials',
    icon: '🎥',
  },
];

const features = [
  'Intuitive dashboard interface',
  'Real-time analytics and reporting',
  'Secure data encryption',
  'Automated backup systems',
  'Custom integration options',
  'Priority technical support',
  '24/7 system monitoring',
  'Regular feature updates',
];

const GetStarted: NextPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Get Started - Corporate Website</title>
        <meta
          name="description"
          content="Start your digital transformation journey with our step-by-step guide"
        />
      </Head>

      <Navbar />

      <main>
        {/* Hero Section */}
        <div className="relative isolate overflow-hidden bg-gradient-to-b from-primary/20 pt-14">
          <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Get Started
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Follow our simple guide to start your digital transformation journey
                and unlock the full potential of your business.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link
                  href="/signup"
                  className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  Start Free Trial
                </Link>
                <Link
                  href="/contact"
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  Contact Sales <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Steps Section */}
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Four Simple Steps to Success
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our streamlined onboarding process gets you up and running quickly
              and efficiently.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-2">
              {steps.map((step) => (
                <div
                  key={step.id}
                  className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-lg"
                >
                  <div className="flex-shrink-0">
                    <Image
                      className="h-48 w-full object-cover"
                      src={step.imageUrl}
                      alt={step.title}
                      width={600}
                      height={400}
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-between bg-white p-6">
                    <div className="flex-1">
                      <div className="flex items-center">
                        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary">
                          <span className="text-lg font-medium text-white">
                            {step.id}
                          </span>
                        </span>
                        <h3 className="ml-3 text-xl font-semibold text-gray-900">
                          {step.title}
                        </h3>
                      </div>
                      <p className="mt-3 text-base text-gray-500">
                        {step.description}
                      </p>
                    </div>
                    <div className="mt-6">
                      <Link
                        href={step.href}
                        className="text-base font-semibold text-primary hover:text-primary/80"
                      >
                        {step.action} →
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Start Guides */}
        <div className="bg-gray-50 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Quick Start Guides
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Access our comprehensive documentation and resources to help you get
                the most out of our platform.
              </p>
            </div>

            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
                {quickStartGuides.map((guide) => (
                  <Link
                    key={guide.title}
                    href={guide.href}
                    className="group rounded-2xl bg-white p-6 shadow-lg transition-all hover:scale-105"
                  >
                    <dt className="text-2xl">{guide.icon}</dt>
                    <dt className="mt-4 text-lg font-semibold leading-7 text-gray-900 group-hover:text-primary">
                      {guide.title}
                    </dt>
                    <dd className="mt-2 text-base leading-7 text-gray-600">
                      {guide.description}
                    </dd>
                  </Link>
                ))}
              </dl>
            </div>
          </div>
        </div>

        {/* Features List */}
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Everything You Need
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our platform provides all the essential features to support your
              digital transformation journey.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-3xl">
            <ul
              role="list"
              className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-x-3 text-base leading-7 text-gray-900 h-10 leading-[18px]"
                >
                  <CheckCircleIcon
                    className="h-5 w-5 flex-none text-primary"
                    aria-hidden="true"
                  />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default GetStarted; 