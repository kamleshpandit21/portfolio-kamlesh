import React from 'react';
import { Link } from 'react-router-dom';

function Blog() {
  const posts = [
    {
      id: 1,
      title: 'Getting Started with React',
      date: 'October 2025',
      description:
        'A beginner-friendly guide to building your first React app with modern tools like Vite, Hooks, and reusable components.',
      image:
        'https://images.unsplash.com/photo-1581276879432-15e50529f34b?auto=format&fit=crop&w=800&q=60',
    },
    {
      id: 2,
      title: 'Improving UI with AOS Animations',
      date: 'September 2025',
      description:
        'Learn how to use AOS (Animate on Scroll) to bring your website elements to life and improve user experience.',
      image:
        'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=60',
    },
    {
      id: 3,
      title: 'Boosting Performance in React',
      date: 'August 2025',
      description:
        'Practical tips to optimize rendering, use lazy loading, and enhance overall app performance.',
      image:
        'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=800&q=60',
    },
  ];

  return (
    <section id="blog" className="blog-section py-5" data-aos="fade-up">
      <div className="container">
        <h2 className="section-title text-center mb-5">
          <span className="gradient-text">Latest Blog Posts</span>
        </h2>

        <div className="row g-4">
          {posts.map((post) => (
            <div className="col-md-4" key={post.id} data-aos="zoom-in">
              <div className="blog-card">
                <div className="image-wrapper">
                  <img src={post.image} alt={post.title} className="blog-img" />
                </div>
                <div className="blog-body">
                  <h5>{post.title}</h5>
                  <p className="date">{post.date}</p>
                  <p className="desc">{post.description}</p>
                  {/* Use React Router Link */}
                  <Link to={`/blog/${post.id}`} className="read-more">
                    Read More →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blog;
