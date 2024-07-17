import { useState } from 'react';

const testimonials = [
  {
    id: 1,
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    author: "John Doe",
    role: "Software Engineer",
    image: "https://via.placeholder.com/150",
    rating: 5, // Rating out of 5 stars
  },
  {
    id: 2,
    quote: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    author: "Jane Smith",
    role: "Product Manager",
    image: "https://via.placeholder.com/150",
    rating: 4,
  },
  {
    id: 3,
    quote: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    author: "Alice Johnson",
    role: "Marketing Specialist",
    image: "https://via.placeholder.com/150",
    rating: 3,
  },
  {
    id: 4,
    quote: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    author: "Michael Brown",
    role: "UI/UX Designer",
    image: "https://via.placeholder.com/150",
    rating: 5,
  },
  {
    id: 5,
    quote: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    author: "Emily Clark",
    role: "Frontend Developer",
    image: "https://via.placeholder.com/150",
    rating: 4,
  },
  {
    id: 6,
    quote: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
    author: "David Lee",
    role: "Backend Developer",
    image: "https://via.placeholder.com/150",
    rating: 3,
  },
  {
    id: 7,
    quote: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    author: "Sophia Brown",
    role: "Project Manager",
    image: "https://via.placeholder.com/150",
    rating: 4,
  },
  {
    id: 8,
    quote: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.",
    author: "James Wilson",
    role: "Senior Developer",
    image: "https://via.placeholder.com/150",
    rating: 5,
  },
  {
    id: 9,
    quote: "Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
    author: "Olivia Taylor",
    role: "Content Writer",
    image: "https://via.placeholder.com/150",
    rating: 4,
  },
  {
    id: 10,
    quote: "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.",
    author: "William Johnson",
    role: "Marketing Director",
    image: "https://via.placeholder.com/150",
    rating: 3,
  },
  {
    id: 11,
    quote: "Cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi.",
    author: "Lily Smith",
    role: "Graphic Designer",
    image: "https://via.placeholder.com/150",
    rating: 4,
  },
  {
    id: 12,
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    author: "Jack Wilson",
    role: "System Administrator",
    image: "https://via.placeholder.com/150",
    rating: 5,
  },
  {
    id: 13,
    quote: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    author: "Sophie Brown",
    role: "Business Analyst",
    image: "https://via.placeholder.com/150",
    rating: 3,
  },
  {
    id: 14,
    quote: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    author: "Benjamin Johnson",
    role: "Quality Assurance",
    image: "https://via.placeholder.com/150",
    rating: 4,
  },
];

const StarRating = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(
        <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-current text-yellow-400" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M10 1a.75.75 0 0 1 .68.42l1.9 3.81 4.24.62a.75.75 0 0 1 .42 1.28l-3.07 2.99.72 4.19a.75.75 0 0 1-1.09.79L10 14.77l-3.77 1.98a.75.75 0 0 1-1.09-.79l.72-4.19-3.07-2.99a.75.75 0 0 1 .42-1.28l4.24-.62 1.9-3.81A.75.75 0 0 1 10 1z"
          />
        </svg>
      );
    } else {
      stars.push(
        <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-current text-gray-300" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M10 1a.75.75 0 0 1 .68.42l1.9 3.81 4.24.62a.75.75 0 0 1 .42 1.28l-3.07 2.99.72 4.19a.75.75 0 0 1-1.09.79L10 14.77l-3.77 1.98a.75.75 0 0 1-1.09-.79l.72-4.19-3.07-2.99a.75.75 0 0 1 .42-1.28l4.24-.62 1.9-3.81A.75.75 0 0 1 10 1z"
          />
        </svg>
      );
    }
  }

  return <div className="flex">{stars}</div>;
};

const TestimonialSection = () => {
  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  const closeAll = () => {
    setShowAll(false);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-semibold text-red-500 text-center mb-4">Testimonials</h2>
      <div className="max-w-4xl mx-auto rounded-lg overflow-hidden shadow-lg bg-white p-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {showAll
            ? testimonials.map((testimonial) => (
                <div key={testimonial.id} className="p-4 border-b border-gray-200">
                  <p className="text-gray-700 text-base">{testimonial.quote}</p>
                  <div className="flex items-center mt-4">
                    <img
                      className="w-12 h-12 rounded-full mr-4"
                      src={testimonial.image}
                      alt={testimonial.author}
                    />
                    <div>
                      <p className="text-gray-900 font-semibold">{testimonial.author}</p>
                      <p className="text-gray-600 text-sm font-extralight">{testimonial.role}</p>
                      <StarRating rating={testimonial.rating} />
                    </div>
                  </div>
                </div>
              ))
            : testimonials.slice(0, 3).map((testimonial) => (
                <div key={testimonial.id} className="p-4 border-b border-gray-200">
                  <p className="text-gray-700 text-base">{testimonial.quote}</p>
                  <div className="flex items-center mt-4">
                    <img
                      className="w-12 h-12 rounded-full mr-4"
                      src={testimonial.image}
                      alt={testimonial.author}
                    />
                    <div>
                      <p className="text-gray-900 font-semibold">{testimonial.author}</p>
                      <p className="text-gray-600 text-sm">{testimonial.role}</p>
                      <StarRating rating={testimonial.rating} />
                    </div>
                  </div>
                </div>
              ))}
        </div>
        {!showAll && (
          <div className="flex justify-center mt-4">
            <button
              className="px-4 py-2 bg-red-500 text-white font-extralight rounded-lg hover:bg-red-700 focus:outline-none"
              onClick={toggleShowAll}
            >
              Show All Testimonials
            </button>
          </div>
        )}
        {showAll && (
          <div className="flex justify-center mt-4">
            <button
              className="px-4 py-2 bg-red-500 text-white rounded-lg font-extralight hover:bg-red-700 focus:outline-none"
              onClick={closeAll}
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TestimonialSection;
