import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { ExecutiveCard } from '../../components/cards/ExecutiveCard';
import { TeamMemberCard } from '../../components/cards/TeamMemberCard';
import { executives, teamMembers } from '../../config/team';

// Sample data for demonstration
const sampleExecutive = executives[0];
const sampleTeamMember = teamMembers[0];

const sampleFeatures = [
  'Feature One',
  'Feature Two',
  'Feature Three',
];

const sampleSteps = [
  {
    id: 1,
    title: 'Create Account',
    description: 'Sign up for a free account to get started.',
    action: 'Get Started',
    href: '#',
    imageUrl: '/get-started/signup.jpg',
  },
];

const Blocks: NextPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>UI Blocks - Corporate Website</title>
        <meta
          name="description"
          content="Collection of UI components and blocks used across the website"
        />
      </Head>

      <Navbar />

      <main className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              UI Blocks
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Collection of reusable UI components and blocks used across the website
            </p>
          </div>

          {/* Section: Cards */}
          <div className="mt-24">
            <h2 className="text-2xl font-bold mb-8">Cards</h2>
            
            <div className="space-y-16">
              {/* Executive Card */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Executive Card</h3>
                <div className="max-w-sm">
                  <ExecutiveCard {...sampleExecutive} />
                </div>
              </div>

              {/* Team Member Card */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Team Member Card</h3>
                <div className="max-w-sm">
                  <TeamMemberCard {...sampleTeamMember} />
                </div>
              </div>
            </div>
          </div>

          {/* Section: Buttons */}
          <div className="mt-24">
            <h2 className="text-2xl font-bold mb-8">Buttons</h2>
            
            <div className="space-y-4">
              {/* Primary Button */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Primary Button</h3>
                <button className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
                  Primary Action
                </button>
              </div>

              {/* Secondary Button */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Secondary Button</h3>
                <button className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                  Secondary Action
                </button>
              </div>

              {/* Text Button */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Text Button</h3>
                <button className="text-sm font-semibold leading-6 text-gray-900">
                  Text Action <span aria-hidden="true">→</span>
                </button>
              </div>
            </div>
          </div>

          {/* Section: Feature Lists */}
          <div className="mt-24">
            <h2 className="text-2xl font-bold mb-8">Feature Lists</h2>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Checkmark List</h3>
              <ul role="list" className="space-y-3">
                {sampleFeatures.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-x-3 text-base leading-7 text-gray-900"
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

          {/* Section: Step Cards */}
          <div className="mt-24">
            <h2 className="text-2xl font-bold mb-8">Step Cards</h2>
            
            <div className="grid gap-12 lg:grid-cols-2">
              {sampleSteps.map((step) => (
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

          {/* Section: Text Styles */}
          <div className="mt-24">
            <h2 className="text-2xl font-bold mb-8">Text Styles</h2>
            
            <div className="space-y-8">
              {/* Headings */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Headings</h3>
                <div className="space-y-4">
                  <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                    Heading 1
                  </h1>
                  <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Heading 2
                  </h2>
                  <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                    Heading 3
                  </h3>
                </div>
              </div>

              {/* Body Text */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Body Text</h3>
                <div className="space-y-4">
                  <p className="text-lg leading-8 text-gray-600">
                    Large body text for important paragraphs and introductions.
                  </p>
                  <p className="text-base leading-7 text-gray-600">
                    Regular body text for general content and descriptions.
                  </p>
                  <p className="text-sm leading-6 text-gray-600">
                    Small text for secondary information and metadata.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blocks; 