import Image from 'next/image';

const testimonials = [
  {
    content: 'This is the best corporate website solution I have seen, which has significantly improved our brand image and customer conversion rate.',
    author: {
      name: 'Manager Zhang',
      role: 'Marketing Director',
      company: 'Innovation Technology Co., Ltd.',
      imageUrl: '/team/1.webp',
    },
  },
  {
    content: 'The team\'s professionalism is impressive, from requirement analysis to final delivery, every step is done perfectly.',
    author: {
      name: 'Director Li',
      role: 'Technical Lead',
      company: 'Internet Technology Co., Ltd.',
      imageUrl: '/team/2.webp',
    },
  },
];

const Testimonials = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Customer Testimonials
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Hear what our customers say
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.author.name}
              className="flex flex-col justify-between bg-white p-8 ring-1 ring-gray-200 rounded-2xl"
            >
              <div>
                <div className="flex items-center gap-x-4">
                  <Image
                    src={testimonial.author.imageUrl}
                    alt={testimonial.author.name}
                    width={40}
                    height={40}
                    className="h-10 w-10 rounded-full bg-gray-50"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">
                      {testimonial.author.name}
                    </div>
                    <div className="text-sm leading-6 text-gray-600">
                      {testimonial.author.role} · {testimonial.author.company}
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <div className="text-lg font-semibold text-gray-900">
                    &ldquo;
                  </div>
                  <div className="mt-1 text-base leading-7 text-gray-700">
                    {testimonial.content}
                  </div>
                  <div className="text-lg font-semibold text-gray-900 text-right">
                    &rdquo;
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;