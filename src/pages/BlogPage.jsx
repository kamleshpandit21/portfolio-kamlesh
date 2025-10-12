import React, { useState, useEffect } from "react";
import {
  ArrowLeft,
  Calendar,
  Clock,
  User,
  Tag,
  Heart,
  Share2,
  Bookmark,
  Eye,
  MessageCircle,
  ThumbsUp,
  ChevronRight,
  Facebook,
  Twitter,
  Linkedin,
  Link2,
} from "lucide-react";

// Sample article data
const article = {
  id: 1,
  title: "Getting Started with Laravel 11: A Complete Guide",
  author: {
    name: "John Doe",
    avatar:
      "https://ui-avatars.com/api/?name=John+Doe&background=7c3aed&color=fff",
    bio: "Senior Laravel Developer with 8+ years of experience",
    role: "Lead Developer",
  },
  date: "2025-01-15",
  readTime: "8 min read",
  category: "Laravel",
  tags: ["Laravel", "PHP", "Web Development", "Tutorial", "Beginner"],
  image:
    "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&h=600&fit=crop",
  views: 1234,
  likes: 89,
  shares: 45,
  content: `
    <h2>Introduction to Laravel 11</h2>
    <p>Laravel 11 brings a fresh wave of improvements and features that make PHP development more enjoyable and productive. In this comprehensive guide, we'll explore everything you need to know to get started with Laravel 11.</p>
    
    <h3>What's New in Laravel 11?</h3>
    <p>Laravel 11 introduces several exciting features that enhance developer experience and application performance:</p>
    <ul>
      <li><strong>Improved Performance:</strong> Faster application bootstrapping and optimized query execution</li>
      <li><strong>Enhanced Security:</strong> Better CSRF protection and authentication mechanisms</li>
      <li><strong>New Artisan Commands:</strong> More powerful CLI tools for rapid development</li>
      <li><strong>Better Testing Tools:</strong> Enhanced testing utilities for more reliable code</li>
    </ul>

    <h3>Installation Requirements</h3>
    <p>Before diving into Laravel 11, ensure your system meets these requirements:</p>
    <ul>
      <li>PHP 8.2 or higher</li>
      <li>Composer 2.0 or higher</li>
      <li>Node.js 18+ and NPM</li>
      <li>A database system (MySQL, PostgreSQL, SQLite, or SQL Server)</li>
    </ul>

    <h3>Setting Up Your First Laravel Project</h3>
    <p>Getting started with Laravel is straightforward. Follow these steps to create your first project:</p>
    
    <pre><code>composer create-project laravel/laravel my-app
cd my-app
php artisan serve</code></pre>

    <p>This will create a new Laravel project and start the development server at <code>http://localhost:8000</code>.</p>

    <h3>Understanding the MVC Architecture</h3>
    <p>Laravel follows the Model-View-Controller (MVC) architectural pattern, which separates your application into three main components:</p>
    
    <h4>Models</h4>
    <p>Models represent your application's data structure and business logic. They interact with the database using Laravel's Eloquent ORM.</p>

    <h4>Views</h4>
    <p>Views are responsible for presenting data to users. Laravel uses the Blade templating engine, which provides a clean and powerful syntax for working with HTML.</p>

    <h4>Controllers</h4>
    <p>Controllers handle incoming HTTP requests, process them, and return appropriate responses. They act as the intermediary between Models and Views.</p>

    <h3>Building Your First Route</h3>
    <p>Routes define how your application responds to HTTP requests. Here's a simple example:</p>
    
    <pre><code>Route::get('/welcome', function () {
    return view('welcome');
});</code></pre>

    <h3>Working with Eloquent ORM</h3>
    <p>Eloquent is Laravel's powerful ORM that makes database interactions elegant and intuitive. Here's a quick example:</p>
    
    <pre><code>// Create a new user
$user = User::create([
    'name' => 'John Doe',
    'email' => 'john@example.com',
    'password' => Hash::make('password')
]);

// Retrieve users
$users = User::where('active', true)->get();</code></pre>

    <h3>Blade Templating</h3>
    <p>Blade provides a clean way to work with views. It includes control structures, template inheritance, and component systems:</p>
    
    <pre><code>@extends('layouts.app')

@section('content')
    <h1>Welcome, {{ $user->name }}</h1>
    
    @if($user->isAdmin())
        <p>You have admin privileges</p>
    @endif
@endsection</code></pre>

    <h3>Authentication Made Easy</h3>
    <p>Laravel provides robust authentication scaffolding out of the box. With Laravel Breeze or Jetstream, you can set up a complete authentication system in minutes.</p>

    <h3>Testing Your Application</h3>
    <p>Laravel makes testing a breeze with PHPUnit integration and helpful testing utilities:</p>
    
    <pre><code>public function test_user_can_view_dashboard()
{
    $user = User::factory()->create();
    
    $response = $this->actingAs($user)->get('/dashboard');
    
    $response->assertStatus(200);
}</code></pre>

    <h3>Best Practices</h3>
    <p>To write maintainable Laravel code, follow these best practices:</p>
    <ul>
      <li>Use form requests for validation</li>
      <li>Keep controllers thin, move logic to services</li>
      <li>Use resource classes for API responses</li>
      <li>Implement repositories for complex queries</li>
      <li>Write comprehensive tests</li>
    </ul>

    <h3>Conclusion</h3>
    <p>Laravel 11 provides an excellent foundation for building modern web applications. With its elegant syntax, powerful features, and comprehensive documentation, you're well-equipped to create robust applications.</p>
    
    <p>In the next article, we'll dive deeper into advanced Laravel features like queues, events, and API development. Stay tuned!</p>
  `,
};

const relatedArticles = [
  {
    id: 2,
    title: "Advanced Eloquent Techniques",
    image:
      "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=400&h=200&fit=crop",
    category: "Laravel",
    readTime: "12 min read",
  },
  {
    id: 3,
    title: "Building RESTful APIs",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=200&fit=crop",
    category: "API Development",
    readTime: "10 min read",
  },
  {
    id: 4,
    title: "Laravel Queue Best Practices",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=200&fit=crop",
    category: "Backend",
    readTime: "6 min read",
  },
];

const comments = [
  {
    id: 1,
    author: "Sarah Johnson",
    avatar:
      "https://ui-avatars.com/api/?name=Sarah+Johnson&background=06b6d4&color=fff",
    date: "2025-01-16",
    content:
      "Great article! Very helpful for beginners. The code examples are clear and easy to follow.",
    likes: 12,
  },
  {
    id: 2,
    author: "Mike Wilson",
    avatar:
      "https://ui-avatars.com/api/?name=Mike+Wilson&background=7c3aed&color=fff",
    date: "2025-01-16",
    content:
      "Thanks for this comprehensive guide. Looking forward to the next article on advanced features!",
    likes: 8,
  },
  {
    id: 3,
    author: "Emily Chen",
    avatar:
      "https://ui-avatars.com/api/?name=Emily+Chen&background=ec4899&color=fff",
    date: "2025-01-17",
    content:
      "The MVC explanation was particularly helpful. Could you cover middleware in the next tutorial?",
    likes: 15,
  },
];

export default function BlogArticlePage() {
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [commentText, setCommentText] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 500);
    window.scrollTo(0, 0);
  }, []);

  const handleShare = (platform) => {
    console.log(`Sharing to ${platform}`);
    setShowShareMenu(false);
  };

  const handleComment = () => {
    if (commentText.trim()) {
      console.log("New comment:", commentText);
      setCommentText("");
    }
  };

  if (isLoading) {
    return (
      <div className="d-flex justify-content-center align-items-center min-vh-100 bg-dark">
        <div className="text-center">
          <div className="spinner-border text-primary mb-3" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="text-light">Loading article...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
        crossOrigin="anonymous"
      />
      <style>{`
        * {
          color: white !important;
        }
        body {
          background: linear-gradient(180deg, #081226 0%, #071427 50%, #051021 100%);
          min-height: 100vh;
          color: white !important;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
        }
        .gradient-primary {
          background: linear-gradient(135deg, #7c3aed, #06b6d4);
        }
        .gradient-text {
          background: linear-gradient(135deg, #7c3aed, #06b6d4);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .btn-gradient {
          background: linear-gradient(90deg, #7c3aed, #06b6d4);
          border: none;
          color: white !important;
          transition: transform 0.2s, opacity 0.2s;
        }
        .btn-gradient:hover {
          opacity: 0.9;
          transform: translateY(-2px);
          color: white !important;
        }
        .btn-outline-light {
          color: white !important;
          border-color: rgba(255, 255, 255, 0.2);
        }
        .btn-outline-light:hover {
          background-color: rgba(255, 255, 255, 0.1);
          color: white !important;
          border-color: rgba(255, 255, 255, 0.3);
        }
        .card-dark {
          background-color: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
          transition: transform 0.3s, border-color 0.3s;
        }
        .card-dark:hover {
          transform: translateY(-5px);
          border-color: rgba(124, 58, 237, 0.3);
        }
        .form-control-dark, .form-control-dark:focus {
          background-color: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.05);
          color: white !important;
        }
        .form-control-dark:focus {
          border-color: #7c3aed;
          box-shadow: 0 0 0 0.25rem rgba(124, 58, 237, 0.25);
        }
        .form-control-dark::placeholder {
          color: rgba(255, 255, 255, 0.5) !important;
        }
        .badge-custom {
          background-color: rgba(255, 255, 255, 0.08);
          color: white !important;
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 0.35rem 0.75rem;
          font-weight: 500;
        }
        .badge-gradient {
          background: linear-gradient(90deg, #7c3aed, #06b6d4);
          color: white !important;
        }
        .navbar-dark {
          background-color: rgba(255, 255, 255, 0.02);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }
        .article-image {
          width: 100%;
          height: 400px;
          object-fit: cover;
          border-radius: 1rem;
        }
        .article-content {
          line-height: 1.8;
          font-size: 1.1rem;
        }
        .article-content h2 {
          margin-top: 2rem;
          margin-bottom: 1rem;
          font-size: 1.75rem;
          font-weight: 700;
        }
        .article-content h3 {
          margin-top: 1.5rem;
          margin-bottom: 0.75rem;
          font-size: 1.4rem;
          font-weight: 600;
        }
        .article-content h4 {
          margin-top: 1.25rem;
          margin-bottom: 0.5rem;
          font-size: 1.2rem;
          font-weight: 600;
        }
        .article-content p {
          margin-bottom: 1.25rem;
          opacity: 0.9;
        }
        .article-content ul, .article-content ol {
          margin-bottom: 1.25rem;
          padding-left: 2rem;
        }
        .article-content li {
          margin-bottom: 0.5rem;
          opacity: 0.9;
        }
        .article-content pre {
          background-color: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 0.5rem;
          padding: 1.5rem;
          margin: 1.5rem 0;
          overflow-x: auto;
        }
        .article-content code {
          font-family: 'Courier New', monospace;
          font-size: 0.9rem;
          color: #06b6d4 !important;
        }
        .icon-btn {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 0.5rem 1rem;
          border-radius: 0.5rem;
          transition: all 0.2s;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
        }
        .icon-btn:hover {
          background: rgba(255, 255, 255, 0.1);
          transform: translateY(-2px);
        }
        .icon-btn.active {
          background: linear-gradient(90deg, #7c3aed, #06b6d4);
          border-color: transparent;
        }
        .author-card {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 1rem;
          padding: 1.5rem;
        }
        .comment-card {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 0.75rem;
          padding: 1rem;
        }
        .share-menu {
          position: absolute;
          top: 100%;
          right: 0;
          margin-top: 0.5rem;
          background: rgba(15, 23, 42, 0.95);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 0.5rem;
          padding: 0.5rem;
          z-index: 1000;
          min-width: 200px;
        }
        .sticky-sidebar {
          position: sticky;
          top: 100px;
        }
        
        @media (max-width: 575.98px) {
          .article-image {
            height: 250px;
          }
          .article-content {
            font-size: 1rem;
          }
          .article-content h2 {
            font-size: 1.5rem;
          }
          .article-content h3 {
            font-size: 1.25rem;
          }
        }
        
        @media (max-width: 991.98px) {
          .sticky-sidebar {
            position: static;
          }
        }
      `}</style>

      <div className="min-vh-100">
        <div className="container py-4 py-md-5">
          <div className="row g-4">
            {/* Main Content */}
            <div className="col-12 col-lg-8">
              {/* Article Header */}
              <div className="mb-4">
                <div className="d-flex flex-wrap gap-2 mb-3">
                  <span className="badge badge-gradient">
                    {article.category}
                  </span>
                  {article.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="badge badge-custom">
                      <Tag size={12} className="me-1" />
                      {tag}
                    </span>
                  ))}
                </div>

                <h1 className="display-5 fw-bold mb-4">{article.title}</h1>

                <div
                  className="d-flex flex-wrap align-items-center gap-3 mb-4"
                  style={{ opacity: 0.8 }}
                >
                  <div className="d-flex align-items-center gap-2">
                    <img
                      src={article.author.avatar}
                      alt={article.author.name}
                      className="rounded-circle"
                      style={{ width: "40px", height: "40px" }}
                    />
                    <div>
                      <div className="fw-semibold">{article.author.name}</div>
                      <small>{article.author.role}</small>
                    </div>
                  </div>
                  <span className="d-flex align-items-center gap-1">
                    <Calendar size={16} />
                    {new Date(article.date).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                  <span className="d-flex align-items-center gap-1">
                    <Clock size={16} />
                    {article.readTime}
                  </span>
                  <span className="d-flex align-items-center gap-1">
                    <Eye size={16} />
                    {article.views} views
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="d-flex flex-wrap gap-2 mb-4">
                  <button
                    className={`icon-btn ${isLiked ? "active" : ""}`}
                    onClick={() => setIsLiked(!isLiked)}
                  >
                    <Heart size={18} fill={isLiked ? "white" : "none"} />
                    <span>{article.likes + (isLiked ? 1 : 0)}</span>
                  </button>
                  <button
                    className={`icon-btn ${isBookmarked ? "active" : ""}`}
                    onClick={() => setIsBookmarked(!isBookmarked)}
                  >
                    <Bookmark
                      size={18}
                      fill={isBookmarked ? "white" : "none"}
                    />
                    <span className="d-none d-sm-inline">Save</span>
                  </button>
                  <div style={{ position: "relative" }}>
                    <button
                      className="icon-btn"
                      onClick={() => setShowShareMenu(!showShareMenu)}
                    >
                      <Share2 size={18} />
                      <span>{article.shares} Shares</span>
                    </button>
                    {showShareMenu && (
                      <div className="share-menu">
                        <button
                          className="btn btn-outline-light btn-sm w-100 mb-2"
                          onClick={() => handleShare("facebook")}
                        >
                          <Facebook size={16} className="me-2" />
                          Facebook
                        </button>
                        <button
                          className="btn btn-outline-light btn-sm w-100 mb-2"
                          onClick={() => handleShare("twitter")}
                        >
                          <Twitter size={16} className="me-2" />
                          Twitter
                        </button>
                        <button
                          className="btn btn-outline-light btn-sm w-100 mb-2"
                          onClick={() => handleShare("linkedin")}
                        >
                          <Linkedin size={16} className="me-2" />
                          LinkedIn
                        </button>
                        <button
                          className="btn btn-outline-light btn-sm w-100"
                          onClick={() => handleShare("copy")}
                        >
                          <Link2 size={16} className="me-2" />
                          Copy Link
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Featured Image */}
              <img
                src={article.image}
                alt={article.title}
                className="article-image mb-5"
              />

              {/* Article Content */}
              <div
                className="article-content"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />

              {/* Author Bio */}
              <div className="author-card mt-5">
                <div className="d-flex gap-3 align-items-start">
                  <img
                    src={article.author.avatar}
                    alt={article.author.name}
                    className="rounded-circle"
                    style={{ width: "80px", height: "80px" }}
                  />
                  <div className="flex-grow-1">
                    <h5 className="fw-bold mb-1">
                      About {article.author.name}
                    </h5>
                    <p className="mb-2" style={{ opacity: 0.8 }}>
                      {article.author.bio}
                    </p>
                    <button className="btn btn-gradient btn-sm">Follow</button>
                  </div>
                </div>
              </div>

              {/* Comments Section */}
              <div className="mt-5">
                <h4 className="fw-bold mb-4">
                  <MessageCircle size={24} className="me-2" />
                  Comments ({comments.length})
                </h4>

                {/* Add Comment */}
                <div className="card-dark p-3 mb-4">
                  <textarea
                    className="form-control form-control-dark mb-3"
                    rows="3"
                    placeholder="Share your thoughts..."
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                  ></textarea>
                  <div className="d-flex justify-content-end">
                    <button
                      className="btn btn-gradient"
                      onClick={handleComment}
                    >
                      Post Comment
                    </button>
                  </div>
                </div>

                {/* Comments List */}
                <div className="d-flex flex-column gap-3">
                  {comments.map((comment) => (
                    <div key={comment.id} className="comment-card">
                      <div className="d-flex gap-3">
                        <img
                          src={comment.avatar}
                          alt={comment.author}
                          className="rounded-circle"
                          style={{ width: "48px", height: "48px" }}
                        />
                        <div className="flex-grow-1">
                          <div className="d-flex justify-content-between align-items-start mb-2">
                            <div>
                              <div className="fw-semibold">
                                {comment.author}
                              </div>
                              <small style={{ opacity: 0.7 }}>
                                {new Date(comment.date).toLocaleDateString()}
                              </small>
                            </div>
                            <button className="btn btn-sm btn-outline-light">
                              <ThumbsUp size={14} className="me-1" />
                              {comment.likes}
                            </button>
                          </div>
                          <p className="mb-0" style={{ opacity: 0.9 }}>
                            {comment.content}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="col-12 col-lg-4">
              <div className="sticky-sidebar">
                {/* Table of Contents */}
                <div className="card card-dark p-3 mb-4">
                  <h5 className="fw-bold mb-3">Table of Contents</h5>
                  <ul className="list-unstyled mb-0">
                    <li className="mb-2">
                      <a
                        href="#"
                        className="text-decoration-none d-flex align-items-center gap-2"
                      >
                        <ChevronRight size={16} />
                        Introduction to Laravel 11
                      </a>
                    </li>
                    <li className="mb-2">
                      <a
                        href="#"
                        className="text-decoration-none d-flex align-items-center gap-2"
                      >
                        <ChevronRight size={16} />
                        Installation Requirements
                      </a>
                    </li>
                    <li className="mb-2">
                      <a
                        href="#"
                        className="text-decoration-none d-flex align-items-center gap-2"
                      >
                        <ChevronRight size={16} />
                        Understanding MVC
                      </a>
                    </li>
                    <li className="mb-2">
                      <a
                        href="#"
                        className="text-decoration-none d-flex align-items-center gap-2"
                      >
                        <ChevronRight size={16} />
                        Eloquent ORM
                      </a>
                    </li>
                    <li className="mb-2">
                      <a
                        href="#"
                        className="text-decoration-none d-flex align-items-center gap-2"
                      >
                        <ChevronRight size={16} />
                        Best Practices
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Related Articles */}
                <div className="card card-dark p-3">
                  <h5 className="fw-bold mb-3">Related Articles</h5>
                  <div className="d-flex flex-column gap-3">
                    {relatedArticles.map((related) => (
                      <div key={related.id} className="d-flex gap-2">
                        <img
                          src={related.image}
                          alt={related.title}
                          className="rounded"
                          style={{
                            width: "80px",
                            height: "80px",
                            objectFit: "cover",
                          }}
                        />
                        <div>
                          <h6
                            className="fw-semibold mb-1"
                            style={{ fontSize: "0.9rem" }}
                          >
                            {related.title}
                          </h6>
                          <div className="d-flex gap-2">
                            <small className="badge badge-custom">
                              {related.category}
                            </small>
                            <small style={{ opacity: 0.7 }}>
                              {related.readTime}
                            </small>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
