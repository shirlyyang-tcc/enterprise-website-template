import { NextPage } from 'next';
import MainLayout from '../../components/layouts/MainLayout';
import { PricingTier } from '../../components/pricing/PricingTier';
import { tiers, faqs } from '../../config/pricing';

const PricingPage: NextPage = () => {
  return (
    <MainLayout
      title="Pricing - Technology Company Official Website"
      description="Choose the right plan for your business"
    >
      <div className="bg-white">
        {/* Pricing section */}
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {tiers.map((tier) => (
              <PricingTier key={tier.id} {...tier} />
            ))}
          </div>
        </div>

        {/* FAQ section */}
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
            <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
              Frequently asked questions
            </h2>
            <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
              {faqs.map((faq) => (
                <div
                  key={faq.question}
                  className="pt-6"
                >
                  <dt>
                    <h3 className="text-base font-semibold leading-7 text-gray-900">
                      {faq.question}
                    </h3>
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
    </MainLayout>
  );
};

export default PricingPage; 