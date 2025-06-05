import { CogIcon, DevicePhoneMobileIcon, RocketLaunchIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

const features = [
  {
    name: 'Customization',
    description: 'Customize every detail of your website according to your needs, creating a unique brand image.',
    icon: CogIcon,
    href: '/features/customize',
  },
  {
    name: 'Responsive Design',
    description: 'Perfectly adapt to various devices, providing users with the best browsing experience.',
    icon: DevicePhoneMobileIcon,
    href: '/features/responsive',
  },
  {
    name: 'Future-Proof',
    description: 'Adopt the latest technology to ensure your website always stays ahead.',
    icon: RocketLaunchIcon,
    href: '/features/future-proof',
  },
];

const Features = () => {
  return (
    <div className="py-12 sm:py-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">Features</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            One-Stop Enterprise Website Solution
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We offer a rich set of features and components to meet the needs of various enterprise websites.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <feature.icon className="h-5 w-5 flex-none text-primary" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                  <p className="mt-6">
                    <Link
                      href={feature.href}
                      className="text-sm font-semibold leading-6 text-primary"
                    >
                      Learn More <span aria-hidden="true">→</span>
                    </Link>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Features; 