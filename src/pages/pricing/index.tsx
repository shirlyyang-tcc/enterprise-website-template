import { NextPage } from 'next';
import Head from 'next/head';
import { CheckIcon } from '@heroicons/react/24/outline';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const tiers = [
  {
    name: 'Basic',
    id: 'basic',
    price: '999',
    description: 'Perfect for small businesses and startups',
    features: [
      'Basic digital solutions',
      'Standard technical support',
      '1 project management account',
      'Basic data analytics',
      '5 consulting sessions per month',
      'System usage training',
    ],
    featured: false,
  },
  {
    name: 'Professional',
    id: 'professional',
    price: '2999',
    description: 'Ideal for medium-sized businesses',
    features: [
      'Advanced digital solutions',
      'Priority technical support',
      '5 project management accounts',
      'Advanced data analytics',
      '15 consulting sessions per month',
      'Customized training program',
      'API integration support',
      'Dedicated account manager',
    ],
    featured: true,
  },
  {
    name: 'Enterprise',
    id: 'enterprise',
    price: '9999',
    description: 'For large enterprises and corporations',
    features: [
      'Complete digital solutions',
      '24/7 technical support',
      'Unlimited project accounts',
      'Enterprise-grade analytics',
      'Unlimited consulting',
      'On-site implementation training',
      'Full API integration',
      'Dedicated service team',
      'Custom development',
      'Strategic partnership benefits',
    ],
    featured: false,
  },
];

const faqs = [
  {
    question: 'How do I choose the right plan?',
    answer:
      'You can choose a plan based on your company size, business needs, and budget. Our account managers can also provide professional consultation.',
  },
  {
    question: 'Do you offer annual billing?',
    answer:
      'Yes, we offer annual billing with a 15% discount. Contact our account manager for specific discount plans.',
  },
  {
    question: 'Can I change my plan?',
    answer:
      'Yes. You can upgrade your plan at any time to access more services. Downgrades will take effect at the end of the current billing cycle.',
  },
  {
    question: 'Is there a trial period?',
    answer:
      'We offer a 15-day free trial period where you can experience all features and receive professional technical support.',
  },
];

const Pricing: NextPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Pricing - Corporate Website</title>
        <meta
          name="description"
          content="Choose the perfect digital solution package for your business"
        />
      </Head>

      <Navbar />

      <main>
        {/* Page Title */}
        <div className="relative isolate overflow-hidden bg-gradient-to-b from-primary/20 pt-14">
          <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Pricing Plans
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Choose the right solution to start your digital transformation journey
              </p>
            </div>
          </div>
        </div>

        {/* Pricing Tiers */}
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {tiers.map((tier) => (
              <div
                key={tier.id}
                className={`flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-gray-200 xl:p-10 ${
                  tier.featured
                    ? 'ring-2 ring-primary shadow-xl scale-105'
                    : 'shadow-sm'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-x-4">
                    <h3 className="text-2xl font-bold text-gray-900">
                      {tier.name}
                    </h3>
                    {tier.featured && (
                      <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold leading-5 text-primary">
                        Popular
                      </span>
                    )}
                  </div>
                  <p className="mt-4 text-sm leading-6 text-gray-600">
                    {tier.description}
                  </p>
                  <p className="mt-6 flex items-baseline gap-x-1">
                    <span className="text-4xl font-bold tracking-tight text-gray-900">
                      ${tier.price}
                    </span>
                    <span className="text-sm font-semibold leading-6 text-gray-600">
                      /month
                    </span>
                  </p>
                  <ul
                    role="list"
                    className="mt-8 space-y-3 text-sm leading-6 text-gray-600"
                  >
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex gap-x-3">
                        <CheckIcon
                          className="h-6 w-5 flex-none text-primary"
                          aria-hidden="true"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <button
                  type="button"
                  className={`mt-8 block w-full rounded-md px-3 py-2 text-center text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                    tier.featured
                      ? 'bg-primary text-white hover:bg-primary/90 focus-visible:outline-primary'
                      : 'bg-primary/10 text-primary hover:bg-primary/20 focus-visible:outline-primary'
                  }`}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-gray-50 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Frequently Asked Questions
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Learn more about our services and pricing plans
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl">
              <dl className="space-y-10">
                {faqs.map((faq) => (
                  <div key={faq.question}>
                    <dt className="text-lg font-semibold leading-7 text-gray-900">
                      {faq.question}
                    </dt>
                    <dd className="mt-2 text-base leading-7 text-gray-600">
                      {faq.answer}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Pricing; 