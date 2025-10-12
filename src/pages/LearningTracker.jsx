import React, { useState, useEffect, useMemo } from 'react';
import { Search, RotateCcw, Download, Plus, Trash2, Check } from 'lucide-react';

const roadmapData = [
  {
    id: 'basics',
    title: 'BASICS',
    items: [
      { id: 'intro', title: 'Introduction - What is Laravel, MVC' },
      { id: 'install', title: 'Installation & Setup (Composer, laravel new, .env)' },
      { id: 'routing', title: 'Routing (basic, params, named, groups, model binding)' },
      { id: 'controllers', title: 'Controllers (resource controllers, single action)' },
      { id: 'views', title: 'Views & Blade Templating (extends, sections, components, slots)' },
      { id: 'models', title: 'Models & Eloquent ORM (CRUD, timestamps, mass assignment)' },
      { id: 'migrations', title: 'Database Basics (migrations, seeders, factories, config)' },
      { id: 'validation', title: 'Validation (request validation, custom rules)' },
      { id: 'forms', title: 'Form Handling & CSRF (old input, error display, file uploads)' },
      { id: 'fileuploads', title: 'File Uploads and Local Storage (filesystem basics)' }
    ]
  },
  {
    id: 'intermediate',
    title: 'INTERMEDIATE',
    items: [
      { id: 'auth', title: 'Authentication (Laravel Breeze, Jetstream, Fortify, UI)' },
      { id: 'authorization', title: 'Authorization (Gates, Policies, @can)' },
      { id: 'relationships', title: 'Eloquent Relationships (1:1, 1:N, N:N, hasManyThrough, polymorphic)' },
      { id: 'middleware', title: 'Middleware (create custom, use in routes/groups)' },
      { id: 'storage', title: 'File Storage (public, private disks, access & retrieval)' },
      { id: 'notifications', title: 'Notifications (mail, database, slack, queued channels)' },
      { id: 'mail', title: 'Mail (mailable classes, templates, SMTP setup)' },
      { id: 'artisanschedule', title: 'Tasks Scheduling & Artisan Commands (Kernel, cron)' }
    ]
  },
  {
    id: 'advanced',
    title: 'ADVANCED',
    items: [
      { id: 'api', title: 'API Development (routes/api.php, resources, pagination, error handling)' },
      { id: 'apiAuth', title: 'API Auth (Passport, Sanctum, JWT)' },
      { id: 'multiAuth', title: 'Multi-Auth (guards, providers, admin vs user panels)' },
      { id: 'advancedEloquent', title: 'Advanced Eloquent (scopes, accessors, mutators, casting)' },
      { id: 'queues', title: 'Queues & Jobs (dispatching, workers, failed jobs)' },
      { id: 'broadcast', title: 'Broadcasting & Real-Time (Laravel Echo, Pusher, WebSockets)' },
      { id: 'testing', title: 'Testing (unit, feature, factories, testing DB)' },
      { id: 'events', title: 'Events & Listeners (event-driven design, listeners, queued listeners)' },
      { id: 'packages', title: 'Packages & Composer (installing packages, creating your own)' },
      { id: 'security', title: 'Security (CSRF, XSS, SQL injection protection, hashing)' },
      { id: 'localization', title: 'Localization (lang files, switching languages)' },
      { id: 'deployment', title: 'Deployment & Hosting (Forge, Envoyer, VPS, shared hosting)' }
    ]
  },
  {
    id: 'bonus',
    title: 'BONUS / SPECIALIZED',
    items: [
      { id: 'docker', title: 'Docker & Laravel Sail (dockerize app, containers for queue/db)' },
      { id: 'performance', title: 'Performance Optimization (caching, eager loading, query optimization)' },
      { id: 'cleanarch', title: 'Clean Architecture (services, repositories, separation of concerns)' },
      { id: 'microservices', title: 'Microservices with Laravel (APIs, service boundaries)' },
      { id: 'multitenancy', title: 'Multi-Tenancy (tenant isolation, data separation)' },
      { id: 'saas', title: 'Building SaaS with Cashier & Billing (Stripe integration)' },
      { id: 'packageDev', title: 'Package Development (create publishable package)' },
      { id: 'sso', title: 'SSO & OAuth (social login, token flows)' }
    ]
  }
];

export default function LearningTracker() {
  const [checkedItems, setCheckedItems] = useState({});
  const [customTopics, setCustomTopics] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState('all');
  const [customInput, setCustomInput] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  // Load data on mount (simulate DB fetch)
  useEffect(() => {
    const loadData = async () => {
      try {
        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 500));
        
        // TODO: Replace with actual API call
        // const response = await fetch('/api/roadmap/progress');
        // const data = await response.json();
        
        // For now, load from memory or use empty state
        const savedData = {
          checkedItems: {},
          customTopics: []
        };
        
        setCheckedItems(savedData.checkedItems);
        setCustomTopics(savedData.customTopics);
        setIsLoading(false);
      } catch (error) {
        console.error('Error loading data:', error);
        setIsLoading(false);
      }
    };

    loadData();
  }, []);

  // Auto-save when checkedItems change (debounced)
  useEffect(() => {
    if (isLoading) return;

    const timer = setTimeout(() => {
      // TODO: Replace with actual API call
      // saveProgressToDb(checkedItems);
      console.log('Auto-saving progress...', checkedItems);
    }, 1000);

    return () => clearTimeout(timer);
  }, [checkedItems, isLoading]);

  // Auto-save when customTopics change
  useEffect(() => {
    if (isLoading) return;

    const timer = setTimeout(() => {
      // TODO: Replace with actual API call
      // saveCustomTopicsToDb(customTopics);
      console.log('Auto-saving custom topics...', customTopics);
    }, 1000);

    return () => clearTimeout(timer);
  }, [customTopics, isLoading]);

  const allItems = useMemo(() => {
    const items = [];
    roadmapData.forEach(group => {
      group.items.forEach(item => {
        items.push({ ...item, group: group.id, groupTitle: group.title });
      });
    });
    customTopics.forEach(topic => {
      items.push({ ...topic, group: 'custom', groupTitle: 'CUSTOM TOPICS' });
    });
    return items;
  }, [customTopics]);

  const stats = useMemo(() => {
    const total = allItems.length;
    const done = allItems.filter(item => checkedItems[item.id]).length;
    const remaining = total - done;
    const percent = total > 0 ? Math.round((done / total) * 100) : 0;

    const basicsCount = roadmapData[0].items.filter(item => checkedItems[item.id]).length;
    const interCount = roadmapData[1].items.filter(item => checkedItems[item.id]).length;
    const advCount = roadmapData[2].items.filter(item => checkedItems[item.id]).length;
    const bonusCount = roadmapData[3].items.filter(item => checkedItems[item.id]).length;

    return {
      total,
      done,
      remaining,
      percent,
      basics: `${basicsCount}/${roadmapData[0].items.length}`,
      intermediate: `${interCount}/${roadmapData[1].items.length}`,
      advanced: `${advCount}/${roadmapData[2].items.length}`,
      bonus: `${bonusCount}/${roadmapData[3].items.length}`
    };
  }, [checkedItems, allItems]);

  const filteredGroups = useMemo(() => {
    const groups = [...roadmapData];
    if (customTopics.length > 0) {
      groups.push({
        id: 'custom',
        title: 'CUSTOM TOPICS',
        items: customTopics
      });
    }

    return groups.map(group => ({
      ...group,
      items: group.items.filter(item => {
        const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase());
        const isChecked = checkedItems[item.id];
        
        if (!matchesSearch) return false;
        if (filter === 'done' && !isChecked) return false;
        if (filter === 'todo' && isChecked) return false;
        
        return true;
      })
    })).filter(group => group.items.length > 0);
  }, [searchQuery, filter, checkedItems, customTopics]);

  const toggleItem = (id) => {
    setCheckedItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleReset = () => {
    if (window.confirm('Reset all progress?')) {
      setCheckedItems({});
    }
  };

  const handleMarkAllDone = () => {
    const newChecked = {};
    allItems.forEach(item => {
      newChecked[item.id] = true;
    });
    setCheckedItems(newChecked);
  };

  const handleClearDone = () => {
    setCheckedItems({});
  };

  const handleAddCustom = () => {
    if (!customInput.trim()) {
      alert('Enter topic name');
      return;
    }
    const newTopic = {
      id: `custom_${Date.now()}`,
      title: customInput.trim()
    };
    setCustomTopics(prev => [...prev, newTopic]);
    setCustomInput('');
  };

  const handleDeleteCustom = (id) => {
    setCustomTopics(prev => prev.filter(t => t.id !== id));
    setCheckedItems(prev => {
      const newChecked = { ...prev };
      delete newChecked[id];
      return newChecked;
    });
  };

  const handleExport = () => {
    const data = JSON.stringify({ checkedItems, customTopics }, null, 2);
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'laravel-roadmap-progress.json';
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  };

  // Loading state
  if (isLoading) {
    return (
      <div className="d-flex justify-content-center align-items-center min-vh-100 bg-dark">
        <div className="text-center">
          <div className="spinner-border text-primary mb-3" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="text-light">Loading your progress...</p>
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
        }
        .logo-gradient {
          background: linear-gradient(135deg, #7c3aed, #06b6d4);
        }
        .progress-gradient {
          background: linear-gradient(90deg, #7c3aed, #06b6d4);
        }
        .btn-gradient {
          background: linear-gradient(90deg, #7c3aed, #06b6d4);
          border: none;
          color: white !important;
        }
        .btn-gradient:hover {
          opacity: 0.9;
          color: white !important;
        }
        .btn-outline-secondary {
          color: white !important;
          border-color: rgba(255, 255, 255, 0.2);
        }
        .btn-outline-secondary:hover {
          background-color: rgba(255, 255, 255, 0.1);
          color: white !important;
          border-color: rgba(255, 255, 255, 0.3);
        }
        .btn-outline-danger {
          color: #ff6b6b !important;
          border-color: #ff6b6b;
        }
        .btn-outline-danger:hover {
          background-color: rgba(255, 107, 107, 0.1);
          color: #ff6b6b !important;
          border-color: #ff6b6b;
        }
        .card-dark {
          background-color: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
        }
        .form-control-dark {
          background-color: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.05);
          color: white !important;
        }
        .form-control-dark:focus {
          background-color: rgba(255, 255, 255, 0.05);
          border-color: #7c3aed;
          color: white !important;
          box-shadow: 0 0 0 0.25rem rgba(124, 58, 237, 0.25);
        }
        .form-control-dark::placeholder {
          color: rgba(255, 255, 255, 0.5) !important;
        }
        .form-select-dark {
          background-color: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.05);
          color: white !important;
        }
        .form-select-dark option {
          background-color: #0f1724;
          color: white !important;
        }
        .form-select-dark:focus {
          background-color: rgba(255, 255, 255, 0.05);
          border-color: #7c3aed;
          color: white !important;
          box-shadow: 0 0 0 0.25rem rgba(124, 58, 237, 0.25);
        }
        .input-group-text {
          background-color: rgba(255, 255, 255, 0.03) !important;
          border-color: rgba(255, 255, 255, 0.05) !important;
          color: white !important;
        }
        .task-item {
          background: linear-gradient(180deg, rgba(255, 255, 255, 0.01), rgba(255, 255, 255, 0.006));
          border: 1px solid rgba(255, 255, 255, 0.02);
          transition: border-color 0.2s;
        }
        .task-item:hover {
          border-color: rgba(255, 255, 255, 0.08);
        }
        .custom-checkbox {
          width: 20px;
          height: 20px;
          min-width: 20px;
          border: 2px solid rgba(255, 255, 255, 0.2);
          border-radius: 0.375rem;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s;
        }
        .custom-checkbox.checked {
          background: linear-gradient(135deg, #7c3aed, #06b6d4);
          border: none;
        }
        .badge-dark {
          background-color: rgba(255, 255, 255, 0.08);
          color: white !important;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .list-group-item {
          background-color: transparent !important;
          color: white !important;
          border-color: rgba(255, 255, 255, 0.1) !important;
        }
        .text-muted {
          color: rgba(255, 255, 255, 0.6) !important;
        }
        h1, h2, h3, h4, h5, h6, p, span, div, small {
          color: white !important;
        }
        
        /* Responsive improvements */
        @media (max-width: 575.98px) {
          .logo-gradient {
            width: 48px !important;
            height: 48px !important;
            font-size: 1.5rem !important;
          }
          h1.h4 {
            font-size: 1rem !important;
          }
          .badge {
            font-size: 0.65rem !important;
            padding: 0.25rem 0.5rem !important;
          }
          .btn-sm {
            font-size: 0.75rem !important;
            padding: 0.25rem 0.5rem !important;
          }
          .task-item {
            flex-direction: column;
            gap: 0.5rem !important;
          }
          .task-item .d-flex.ms-auto {
            margin-left: 0 !important;
            width: 100%;
            justify-content: space-between;
          }
        }
        
        @media (max-width: 767.98px) {
          .container {
            padding-left: 0.75rem;
            padding-right: 0.75rem;
          }
          .card {
            padding: 1rem !important;
          }
        }
        
        @media (min-width: 992px) and (max-width: 1199.98px) {
          .badge {
            font-size: 0.7rem;
            padding: 0.35rem 0.6rem;
          }
        }
      `}</style>

      <div className="min-vh-100 py-4 py-md-5">
        <div className="container">
          {/* Header */}
          <div className="card card-dark shadow-lg mb-4 p-3 p-md-4">
            <div className="row align-items-center g-3">
              <div className="col-12 col-lg-6">
                <div className="d-flex align-items-center gap-3">
                  <div className="logo-gradient rounded-3 d-flex align-items-center justify-content-center fw-bold fs-3 text-white" style={{ width: '64px', height: '64px' }}>
                    L
                  </div>
                  <div>
                    <h1 className="h4 mb-1">Laravel Roadmap — Interactive Checklist</h1>
                    <p className="mb-0" style={{ fontSize: '0.85rem' }}>Track your Laravel learning progress</p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-6">
                <div className="d-flex flex-wrap gap-2 justify-content-lg-end">
                  <span className="badge badge-dark px-2 px-sm-3 py-2">Total: {stats.total}</span>
                  <span className="badge badge-dark px-2 px-sm-3 py-2">Completed: {stats.done}</span>
                  <span className="badge badge-dark px-2 px-sm-3 py-2">Remaining: {stats.remaining}</span>
                  <button onClick={handleReset} className="btn btn-sm btn-outline-secondary">
                    <RotateCcw size={16} className="me-1" />
                    <span className="d-none d-sm-inline">Reset</span>
                  </button>
                  <button onClick={handleExport} className="btn btn-sm btn-gradient">
                    <Download size={16} className="me-1" />
                    <span className="d-none d-sm-inline">Export</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="row g-4">
            {/* Left Panel */}
            <div className="col-12 col-lg-8">
              <div className="card card-dark shadow p-3 p-md-4">
                {/* Search & Filter */}
                <div className="row g-2 mb-3 mb-md-4">
                  <div className="col-12 col-md-9">
                    <div className="input-group">
                      <span className="input-group-text bg-transparent border-secondary">
                        <Search size={18} />
                      </span>
                      <input
                        type="text"
                        className="form-control form-control-dark"
                        placeholder="Search topics..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-12 col-md-3">
                    <select
                      className="form-select form-select-dark w-100"
                      value={filter}
                      onChange={(e) => setFilter(e.target.value)}
                    >
                      <option value="all">All</option>
                      <option value="todo">Remaining</option>
                      <option value="done">Completed</option>
                    </select>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-3 mb-md-4">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <small>Progress</small>
                    <small>{stats.percent}%</small>
                  </div>
                  <div className="progress" style={{ height: '12px' }}>
                    <div
                      className="progress-bar progress-gradient"
                      role="progressbar"
                      style={{ width: `${stats.percent}%` }}
                      aria-valuenow={stats.percent}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>

                {/* Tasks */}
                {filteredGroups.map(group => (
                  <div key={group.id} className="mb-3 mb-md-4">
                    <h5 className="mb-3 fw-bold" style={{ fontSize: '1rem' }}>{group.title}</h5>
                    <div className="d-flex flex-column gap-2">
                      {group.items.map(item => (
                        <div key={item.id} className="task-item rounded p-2 p-sm-3 d-flex align-items-start gap-2 gap-sm-3">
                          <div className="form-check m-0">
                            <input
                              className="form-check-input visually-hidden"
                              type="checkbox"
                              id={`check-${item.id}`}
                              checked={checkedItems[item.id] || false}
                              onChange={() => toggleItem(item.id)}
                            />
                            <label 
                              className="form-check-label d-flex align-items-start gap-2 gap-sm-3 flex-grow-1 cursor-pointer w-100"
                              htmlFor={`check-${item.id}`}
                              style={{ cursor: 'pointer' }}
                            >
                              <div className={`custom-checkbox ${checkedItems[item.id] ? 'checked' : ''}`}>
                                {checkedItems[item.id] && <Check size={14} className="text-white" />}
                              </div>
                              <div className="flex-grow-1">
                                <div className="fw-semibold" style={{ fontSize: '0.9rem' }}>{item.title}</div>
                                <small style={{ fontSize: '0.75rem', opacity: 0.7 }}>
                                  Topic: {group.title} — Practice with a mini project
                                </small>
                              </div>
                            </label>
                          </div>
                          <div className="d-flex align-items-center gap-2 ms-auto flex-shrink-0">
                            {group.id === 'custom' && (
                              <button
                                onClick={() => handleDeleteCustom(item.id)}
                                className="btn btn-sm btn-outline-danger p-1"
                              >
                                <Trash2 size={14} />
                              </button>
                            )}
                            <span className="badge badge-dark d-none d-sm-inline" style={{ fontSize: '0.7rem' }}>{group.title}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Panel */}
            <div className="col-12 col-lg-4">
              <div className="card card-dark shadow p-3 p-md-4">
                <h5 className="mb-3 fw-bold" style={{ fontSize: '1rem' }}>Quick Overview</h5>
                <div className="list-group list-group-flush mb-3">
                  <div className="list-group-item bg-transparent border-secondary d-flex justify-content-between align-items-center py-2">
                    <span style={{ fontSize: '0.9rem' }}>Basics</span>
                    <span className="badge badge-dark">{stats.basics}</span>
                  </div>
                  <div className="list-group-item bg-transparent border-secondary d-flex justify-content-between align-items-center py-2">
                    <span style={{ fontSize: '0.9rem' }}>Intermediate</span>
                    <span className="badge badge-dark">{stats.intermediate}</span>
                  </div>
                  <div className="list-group-item bg-transparent border-secondary d-flex justify-content-between align-items-center py-2">
                    <span style={{ fontSize: '0.9rem' }}>Advanced</span>
                    <span className="badge badge-dark">{stats.advanced}</span>
                  </div>
                  <div className="list-group-item bg-transparent border-secondary d-flex justify-content-between align-items-center py-2">
                    <span style={{ fontSize: '0.9rem' }}>Bonus / Specialized</span>
                    <span className="badge badge-dark">{stats.bonus}</span>
                  </div>
                </div>

                <hr className="border-secondary my-3" />

                <div className="d-flex flex-wrap gap-2 mb-3">
                  <button onClick={handleMarkAllDone} className="btn btn-sm btn-outline-secondary flex-fill">
                    Mark All Done
                  </button>
                  <button onClick={handleClearDone} className="btn btn-sm btn-outline-secondary flex-fill">
                    Clear Done
                  </button>
                </div>

                <hr className="border-secondary my-3" />

                <h5 className="mb-2 fw-bold" style={{ fontSize: '1rem' }}>Add Custom Topic</h5>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control form-control-dark"
                    placeholder="Topic name..."
                    value={customInput}
                    onChange={(e) => setCustomInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleAddCustom()}
                  />
                  <button onClick={handleAddCustom} className="btn btn-gradient">
                    <Plus size={16} />
                  </button>
                </div>

                <hr className="border-secondary my-3" />

                <small className="text-center d-block" style={{ fontSize: '0.75rem', opacity: 0.7 }}>
                  Tip: Data stored in component state. Export to save backup.
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}