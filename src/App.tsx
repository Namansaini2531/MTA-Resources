
import { useState, useEffect, useRef } from 'react';
import './index.css';
import { resourcesData } from './data/resources';
import type { ResourceItem, ArticleComment, ContentBlock } from './data/resources';

interface ScrollRevealProps {
    children: React.ReactNode;
    className?: string;
    animation?: 'fade-in' | 'slide-up' | 'slide-down' | 'slide-left' | 'slide-right' | 'zoom-in';
    delay?: number;
    duration?: number;
}

const ScrollReveal = ({
    children,
    className = '',
    animation = 'slide-up',
    delay = 0,
    duration = 1000
}: ScrollRevealProps) => {
    const elementRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                } else {
                    // Only reset animation state if the element exits through the bottom of the viewport (scrolling up)
                    const exitedBottom = entry.boundingClientRect.top > window.innerHeight / 2;
                    if (exitedBottom) {
                        setIsVisible(false);
                    }
                }
            },
            {
                threshold: 0.05,
                rootMargin: '0px 0px -40px 0px'
            }
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => {
            if (elementRef.current) {
                observer.unobserve(elementRef.current);
            }
        };
    }, []);

    const style: React.CSSProperties = {
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
    };

    return (
        <div
            ref={elementRef}
            className={`reveal-element ${animation} ${isVisible ? 'active' : ''} ${className}`}
            style={style}
        >
            {children}
        </div>
    );
};

interface HeaderProps {
    onHome: () => void;
}

const Header = ({ onHome }: HeaderProps) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="main-header">
            <div className="container header-container">
                <div className="logo-container" onClick={onHome} style={{ cursor: 'pointer' }}>
                    <svg width="38" height="28" viewBox="0 0 84 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="header-logo-icon">
                        {/* Teal / Mint Ring */}
                        <circle cx="26" cy="38" r="12" stroke="#00a082" strokeWidth="3.5" fill="none" />
                        <circle cx="26" cy="18" r="4" fill="#00a082" />

                        {/* Charcoal Ring */}
                        <circle cx="42" cy="38" r="12" stroke="#111111" strokeWidth="3.5" fill="none" />
                        <circle cx="42" cy="18" r="4" fill="#111111" />

                        {/* Coral / Orange Ring */}
                        <circle cx="58" cy="38" r="12" stroke="#f15b24" strokeWidth="3.5" fill="none" />
                        <circle cx="58" cy="18" r="4" fill="#f15b24" />
                    </svg>
                    <span className="logo-text">MarTechAdda</span>
                </div>
                <nav className={`nav-links ${isMenuOpen ? 'mobile-open' : ''}`}>
                    <a href="#" onClick={() => { setIsMenuOpen(false); onHome(); }}>Marketing Services</a>
                    <a href="#" onClick={() => { setIsMenuOpen(false); onHome(); }}>How It Works</a>
                    <a href="#" onClick={() => { setIsMenuOpen(false); onHome(); }}>Resources</a>
                    <a href="#" onClick={() => { setIsMenuOpen(false); onHome(); }}>For Experts</a>
                    <a href="#" className="login-link mobile-only-login" onClick={() => setIsMenuOpen(false)}>Login</a>
                </nav>
                <div className="header-actions">
                    <a href="#" className="login-link desktop-only-login">Login</a>
                    <button className="mobile-menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
                        <span className={`bar ${isMenuOpen ? 'open' : ''}`}></span>
                        <span className={`bar ${isMenuOpen ? 'open' : ''}`}></span>
                        <span className={`bar ${isMenuOpen ? 'open' : ''}`}></span>
                    </button>
                </div>
            </div>
        </header>
    );
};

const HeroSection = () => (
    <section className="hero-section">
        <div className="container">
            <ScrollReveal animation="fade-in" duration={1000}>
                <div className="hero-banner" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=1200')" }}>
                    <div className="hero-content">
                        <h1>Resource Center</h1>
                        <p>Tools, insights, and inspirations about the world of work.</p>
                    </div>
                </div>
            </ScrollReveal>
        </div>
    </section>
);

const PopularTopics = () => (
    <section className="popular-topics">
        <div className="container">
            <ScrollReveal animation="slide-up">
                <span className="section-label">TOPICS</span>
                <h2>Explore popular topics</h2>
                <div className="topic-chips">
                    <a href="#" className="chip">Marketing Automation</a>
                    <a href="#" className="chip">CRM & Analytics</a>
                    <a href="#" className="chip">Hiring MarTech Experts</a>
                    <a href="#" className="chip">MarTech Stack Audit</a>
                </div>
            </ScrollReveal>
        </div>
    </section>
);

interface FeaturedResourcesProps {
    onSelectArticle: (id: string) => void;
}

const FeaturedResources = ({ onSelectArticle }: FeaturedResourcesProps) => (
    <section className="featured-resources-section">
        <div className="container">
            <ScrollReveal animation="slide-up">
                <span className="section-label">HIGHLIGHTS</span>
                <h2 className="featured-title">Featured Resources</h2>
            </ScrollReveal>

            {/* Top row - large highlighted resource */}
            <ScrollReveal animation="slide-up" delay={100}>
                <div 
                    className="featured-hero"
                    onClick={() => onSelectArticle('a5')}
                    style={{ cursor: 'pointer' }}
                >
                    <div className="featured-hero-image-container">
                        <div className="featured-hero-image" style={{ backgroundImage: "url('/tandem_bicycle.png')" }}></div>
                    </div>
                    <div className="featured-hero-content">
                        <div className="featured-tags">
                            <span className="featured-tag">Hiring & Management</span>
                            <span className="featured-tag">Article</span>
                        </div>
                        <h3>How To Build a Successful Team in a Growing Small Business</h3>
                        <p className="featured-date">Mar 30, 2026</p>
                    </div>
                </div>
            </ScrollReveal>

            {/* Bottom row - 3 columns of card resources */}
            <div className="featured-cards-grid">
                <ScrollReveal animation="slide-up" delay={100} className="resource-card-reveal">
                    <div 
                        onClick={() => onSelectArticle('a2')}
                        className="resource-card"
                        style={{ cursor: 'pointer' }}
                    >
                        <div className="resource-card-image-container">
                            <div className="resource-card-image" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?auto=format&fit=crop&q=80&w=600')" }}></div>
                        </div>
                        <div className="resource-card-content">
                            <div className="featured-tags">
                                <span className="featured-tag">Work & Career</span>
                                <span className="featured-tag">Article</span>
                            </div>
                            <h4>How To Onboard a New Client: A Step-by-Step Guide</h4>
                            <p className="featured-date">Apr 3, 2026</p>
                        </div>
                    </div>
                </ScrollReveal>

                <ScrollReveal animation="slide-up" delay={200} className="resource-card-reveal">
                    <div 
                        onClick={() => onSelectArticle('a3')}
                        className="resource-card"
                        style={{ cursor: 'pointer' }}
                    >
                        <div className="resource-card-image-container">
                            <div className="resource-card-image" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600')" }}></div>
                        </div>
                        <div className="resource-card-content">
                            <div className="featured-tags">
                                <span className="featured-tag">AI Services</span>
                                <span className="featured-tag">Article</span>
                            </div>
                            <h4>5 Ways Organizations Can Engage and Advance Women in the Workplace</h4>
                            <p className="featured-date">Mar 24, 2026</p>
                        </div>
                    </div>
                </ScrollReveal>

                <ScrollReveal animation="slide-up" delay={300} className="resource-card-reveal">
                    <div 
                        onClick={() => onSelectArticle('a4')}
                        className="resource-card"
                        style={{ cursor: 'pointer' }}
                    >
                        <div className="resource-card-image-container">
                            <div className="resource-card-image" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=600')" }}></div>
                        </div>
                        <div className="resource-card-content">
                            <div className="featured-tags">
                                <span className="featured-tag">Work & Career</span>
                                <span className="featured-tag">Article</span>
                            </div>
                            <h4>Build Better Client Relationships: 10 Communication Strategies for Freelancers</h4>
                            <p className="featured-date">Apr 9, 2026</p>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </div>
    </section>
);

const LatestBlogs = () => (
    <section className="blogs-section">
        <div className="container">
            <ScrollReveal animation="slide-up">
                <span className="section-label">BLOGS</span>
                <div className="section-header">
                    <h2>Blogs</h2>
                    <a href="https://mar-tech-adda-blog-frontend-a4ql.vercel.app/" className="view-all-btn">View All &rarr;</a>
                </div>
            </ScrollReveal>
            <div className="blogs-layout">
                {/* Left Column - Large Cards */}
                <div className="blogs-left-col">
                    <ScrollReveal animation="slide-up" delay={100}>
                        <a href="#" className="large-blog-card">
                            <div className="card-image" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800')" }}></div>
                            <div className="card-content-no-bg">
                                <p className="blog-meta">Talent Intelligence &nbsp;|&nbsp; &lt; 1 min</p>
                                <h3>GitHub Profile Checklist 2026: What Recruiters Actually Look At</h3>
                                <p className="blog-desc">GitHub can be a powerful job-search asset — for freshers and career-switchers especially, it's often the proof that you can actually build things.</p>
                            </div>
                        </a>
                    </ScrollReveal>
                    <ScrollReveal animation="slide-up" delay={200}>
                        <a href="#" className="large-blog-card">
                            <div className="card-image" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800')" }}></div>
                            <div className="card-content-no-bg">
                                <p className="blog-meta">Talent Intelligence &nbsp;|&nbsp; &lt; 1 min</p>
                                <h3>Resume Headline & Summary 2026: Examples, Templates & Action Verbs</h3>
                                <p className="blog-desc">The top third of your resume gets read first and decides whether the rest gets read at all. This guide shows you the modern alternative.</p>
                            </div>
                        </a>
                    </ScrollReveal>
                </div>
                {/* Right Column - Compact Cards */}
                <div className="blogs-right-col">
                    <ScrollReveal animation="slide-up" delay={100}>
                        <a href="#" className="compact-blog-card">
                            <div className="compact-image" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=200')" }}></div>
                            <div className="compact-content">
                                <p className="blog-meta">Talent Intelligence &nbsp;|&nbsp; &lt; 1 min</p>
                                <h4>Product Manager Resume 2026: What Hiring Managers Actually Read</h4>
                            </div>
                        </a>
                    </ScrollReveal>
                    <ScrollReveal animation="slide-up" delay={150}>
                        <a href="#" className="compact-blog-card">
                            <div className="compact-image" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=200')" }}></div>
                            <div className="compact-content">
                                <p className="blog-meta">Talent Intelligence &nbsp;|&nbsp; &lt; 1 min</p>
                                <h4>LinkedIn Profile Optimization 2026: Get Recruiters to Message You</h4>
                            </div>
                        </a>
                    </ScrollReveal>
                    <ScrollReveal animation="slide-up" delay={200}>
                        <a href="#" className="compact-blog-card">
                            <div className="compact-image" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=200')" }}></div>
                            <div className="compact-content">
                                <p className="blog-meta">Talent Intelligence &nbsp;|&nbsp; &lt; 1 min</p>
                                <h4>Career Gap on Resume: How to Explain It Honestly (2026)</h4>
                            </div>
                        </a>
                    </ScrollReveal>
                    <ScrollReveal animation="slide-up" delay={250}>
                        <a href="#" className="compact-blog-card">
                            <div className="compact-image" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=200')" }}></div>
                            <div className="compact-content">
                                <p className="blog-meta">Talent Intelligence &nbsp;|&nbsp; &lt; 1 min</p>
                                <h4>How to List Projects on a Tech Resume (2026 Examples)</h4>
                            </div>
                        </a>
                    </ScrollReveal>
                    <ScrollReveal animation="slide-up" delay={300}>
                        <a href="#" className="compact-blog-card">
                            <div className="compact-image" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=200')" }}></div>
                            <div className="compact-content">
                                <p className="blog-meta">Talent Intelligence &nbsp;|&nbsp; &lt; 1 min</p>
                                <h4>Cover Letter for Indian Tech Jobs 2026: Template + When to Skip It</h4>
                            </div>
                        </a>
                    </ScrollReveal>
                </div>
            </div>
        </div>
    </section>
);

interface AllResourcesSectionProps {
    onSelectArticle: (id: string) => void;
}

const AllResourcesSection = ({ onSelectArticle }: AllResourcesSectionProps) => {
    const [activeCategory, setActiveCategory] = useState<string>('All');
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [bookmarkedIds, setBookmarkedIds] = useState<Set<string>>(new Set());
    const [visibleCount, setVisibleCount] = useState<number>(6);

    const categories = ['All', 'Guides', 'Articles', 'Case Studies', 'E-books', 'Checklists'];

    // Reset pagination limit when category or search changes
    const handleCategoryChange = (category: string) => {
        setActiveCategory(category);
        setVisibleCount(6);
    };

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
        setVisibleCount(6);
    };

    const clearSearch = () => {
        setSearchQuery('');
        setVisibleCount(6);
    };

    const toggleBookmark = (id: string) => {
        setBookmarkedIds(prev => {
            const next = new Set(prev);
            if (next.has(id)) {
                next.delete(id);
            } else {
                next.add(id);
            }
            return next;
        });
    };

    // Filter resources (excluding Videos category)
    const filteredResources = resourcesData.filter(item => {
        if (item.category === 'Videos') return false;

        const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
        const matchesSearch = searchQuery.trim() === '' || 
            item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.subMeta.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.tag.toLowerCase().includes(searchQuery.toLowerCase());
            
        return matchesCategory && matchesSearch;
    });

    const displayedResources = filteredResources.slice(0, visibleCount);
    const hasMore = filteredResources.length > visibleCount;

    return (
        <section className="resources-section">
            <div className="container">
                <ScrollReveal animation="slide-up">
                    <div className="resources-header">
                        <div className="resources-title-area">
                            <h2>All Resources</h2>
                            <p className="resources-found-count">
                                {filteredResources.length} {filteredResources.length === 1 ? 'resource' : 'resources'} found
                            </p>
                        </div>
                        <div className="search-container">
                            <span className="search-icon">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="11" cy="11" r="8"></circle>
                                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                </svg>
                            </span>
                            <input
                                type="text"
                                className="search-input"
                                placeholder="Search resources..."
                                value={searchQuery}
                                onChange={handleSearchChange}
                            />
                            {searchQuery && (
                                <button className="search-clear-btn" onClick={clearSearch} aria-label="Clear search">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="18" y1="6" x2="6" y2="18"></line>
                                        <line x1="6" y1="6" x2="18" y2="18"></line>
                                    </svg>
                                </button>
                            )}
                        </div>
                    </div>
                </ScrollReveal>

                <ScrollReveal animation="slide-up" delay={50}>
                    <ul className="category-chips">
                        {categories.map(cat => (
                            <li
                                key={cat}
                                className={`category-chip ${activeCategory === cat ? 'selected' : ''}`}
                                onClick={() => handleCategoryChange(cat)}
                            >
                                {cat}
                            </li>
                        ))}
                    </ul>
                </ScrollReveal>

                <div className="resources-grid">
                    {displayedResources.length > 0 ? (
                        displayedResources.map((resource, idx) => {
                            const isBookmarked = bookmarkedIds.has(resource.id);
                            return (
                                <ScrollReveal
                                    key={resource.id}
                                    animation="slide-up"
                                    delay={(idx % 3) * 80}
                                    className="resource-card-reveal"
                                >
                                    <div 
                                        className="resource-item-card" 
                                        onClick={() => onSelectArticle(resource.id)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        <div className="resource-image-container">
                                            <div
                                                className="resource-card-image"
                                                style={{ backgroundImage: `url('${resource.imageUrl}')` }}
                                            />
                                            <span className="resource-overlay-badge">{resource.category}</span>
                                            <button
                                                className={`resource-bookmark-btn ${isBookmarked ? 'active' : ''}`}
                                                onClick={(e) => { e.stopPropagation(); toggleBookmark(resource.id); }}
                                                aria-label={isBookmarked ? "Remove bookmark" : "Bookmark resource"}
                                            >
                                                <svg
                                                    width="18"
                                                    height="18"
                                                    viewBox="0 0 24 24"
                                                    fill={isBookmarked ? "currentColor" : "none"}
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                >
                                                    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                                                </svg>
                                            </button>
                                        </div>
                                        <div className="resource-content">
                                            <span className="resource-meta-label">{resource.subMeta}</span>
                                            <h3 className="resource-item-title">{resource.title}</h3>
                                            <p className="resource-item-desc">{resource.description}</p>
                                        </div>
                                    </div>
                                </ScrollReveal>
                            );
                        })
                    ) : (
                        <div className="no-results">
                            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '16px', color: '#94a3b8' }}>
                                <circle cx="11" cy="11" r="8"></circle>
                                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                <line x1="8" y1="11" x2="14" y2="11"></line>
                            </svg>
                            <h3>No resources found</h3>
                            <p>We couldn't find any resources matching "{searchQuery}". Try a different search term.</p>
                        </div>
                    )}
                </div>

                {hasMore && (
                    <div className="load-more-container">
                        <ScrollReveal animation="fade-in" delay={100}>
                            <button
                                className="load-more-btn"
                                onClick={() => setVisibleCount(prev => prev + 6)}
                            >
                                Load More ↓
                            </button>
                        </ScrollReveal>
                    </div>
                )}
            </div>
        </section>
    );
};

const FeaturedProfiles = () => {
    const profiles = [
        {
            name: "Sarah Jenkins",
            role: "Lead MarTech Architect",
            company: "HubSpot",
            avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150",
            skills: ["HubSpot", "Lead Scoring", "RevOps"],
            color: "#f15b24"
        },
        {
            name: "Arjun Mehta",
            role: "Marketing Automation Director",
            company: "Adobe",
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150",
            skills: ["Marketo", "Campaign Tech", "Deliverability"],
            color: "#00a082"
        },
        {
            name: "Elena Rostova",
            role: "CRM Architect",
            company: "Salesforce",
            avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150",
            skills: ["Salesforce", "Customer Journeys", "Analytics"],
            color: "#18181b"
        },
        {
            name: "David Chen",
            role: "Head of Analytics",
            company: "Google",
            avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150",
            skills: ["GA4", "Tag Manager", "Conversion Tech"],
            color: "#f15b24"
        },
        {
            name: "Aisha Rahman",
            role: "SEO & Content Tech Lead",
            company: "Semrush",
            avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150",
            skills: ["SEO Tech", "Content Automation", "A/B Testing"],
            color: "#00a082"
        },
        {
            name: "Carlos Silva",
            role: "Email Marketing Lead",
            company: "Mailchimp",
            avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=150",
            skills: ["Campaigns", "Personalisation", "Data Tech"],
            color: "#18181b"
        },
        {
            name: "Priya Sharma",
            role: "Growth Marketing Manager",
            company: "Shopify",
            avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150",
            skills: ["Ecommerce", "Growth Stacks", "Data Flows"],
            color: "#f15b24"
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const getVisibleCount = () => {
        if (windowWidth <= 768) return 1;
        if (windowWidth <= 1024) return 2;
        return 3;
    };

    const visibleCount = getVisibleCount();
    const maxIndex = profiles.length - visibleCount;

    useEffect(() => {
        if (isPaused) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => {
                return prev >= maxIndex ? 0 : prev + 1;
            });
        }, 3000);

        return () => clearInterval(interval);
    }, [isPaused, maxIndex]);

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    };

    return (
        <section className="profiles-section bg-light">
            <div className="container">
                <ScrollReveal animation="slide-up">
                    <span className="section-label">EXPERTS</span>
                    <div className="section-header">
                        <h2>Featured Profiles</h2>
                        <div className="carousel-nav-arrows">
                            <button className="nav-arrow-btn" onClick={prevSlide}>&larr;</button>
                            <button className="nav-arrow-btn" onClick={nextSlide}>&rarr;</button>
                        </div>
                    </div>
                </ScrollReveal>

                <ScrollReveal animation="slide-up" delay={100}>
                    <div 
                        className="profiles-carousel-viewport"
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                    >
                        <div 
                            className="profiles-carousel-track"
                            style={{ 
                                transform: `translateX(calc(-${currentIndex} * (100% + 30px) / ${visibleCount}))`
                            }}
                        >
                            {profiles.map((profile, idx) => (
                                <div className="profile-card" key={idx}>
                                    <div className="profile-card-header">
                                        <div className="profile-avatar" style={{ backgroundImage: `url('${profile.avatar}')` }}></div>
                                        <span className="expert-badge" style={{ backgroundColor: profile.color }}>Expert</span>
                                    </div>
                                    <div className="profile-body">
                                        <h3>{profile.name}</h3>
                                        <p className="profile-title">{profile.role}</p>
                                        <p className="profile-company">at <strong>{profile.company}</strong></p>
                                        
                                        <div className="profile-skills">
                                            {profile.skills.map((skill, sIdx) => (
                                                <span className="tag" key={sIdx}>{skill}</span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="profile-footer">
                                        <a href="#" className="view-profile-btn">View Profile &rarr;</a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
};



const Newsletter = () => (
    <section className="newsletter-section">
        <div className="container newsletter-container">
            <ScrollReveal animation="zoom-in" duration={1000}>
                <div className="newsletter-content">
                    <h2>Stay ahead of the curve.</h2>
                    <p>Join 15,000+ MarTech leaders receiving our weekly strategic briefing on the future of marketing technology.</p>
                    <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                        <input type="email" placeholder="work@company.com" required />
                        <button type="submit" className="subscribe-btn">Subscribe Now</button>
                    </form>
                </div>
            </ScrollReveal>
        </div>
    </section>
);

const Footer = () => (
    <footer className="main-footer">
        <div className="container footer-top">
            <div className="footer-brand-col">
                <div className="footer-logo-svg">
                    <svg width="84" height="60" viewBox="0 0 84 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                        {/* Teal / Mint Ring */}
                        <circle cx="26" cy="38" r="12" stroke="#2bc0a4" strokeWidth="3.5" fill="none" />
                        <circle cx="26" cy="18" r="4" fill="#2bc0a4" />

                        {/* Charcoal Ring */}
                        <circle cx="42" cy="38" r="12" stroke="#e5e7eb" strokeWidth="3.5" fill="none" />
                        <circle cx="42" cy="18" r="4" fill="#e5e7eb" />

                        {/* Coral / Orange Ring */}
                        <circle cx="58" cy="38" r="12" stroke="#ff7043" strokeWidth="3.5" fill="none" />
                        <circle cx="58" cy="18" r="4" fill="#ff7043" />
                    </svg>
                </div>
                <p className="footer-desc">
                    Built for businesses and marketing professionals. A neutral, marketing-only platform designed for clarity before commitment.
                </p>
                <p className="footer-service">
                    Service availability (current phase):<strong>Currently serving across the Mumbai Metropolitan Region (MMR).</strong>
                </p>
                <div className="footer-social-icons">
                    <a href="#" className="social-icon-btn"><span className="icon-in">in</span></a>
                    <a href="#" className="social-icon-btn">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram">
                            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                        </svg>
                    </a>
                    <a href="#" className="social-icon-btn"><span className="icon-f">f</span></a>
                </div>
            </div>

            <div className="footer-links-column">
                <h4>Platform</h4>
                <a href="#">Home</a>
                <a href="#">Resources</a>
                <a href="#">About Us</a>
                <a href="#">How It Works</a>
                <a href="#">Why This Works</a>
                <a href="#">Join as an Expert</a>
                <a href="#">Login</a>
            </div>

            <div className="footer-links-column">
                <h4>Support</h4>
                <a href="#">FAQs</a>
                <a href="#">Contact Us</a>
                <a href="#">Feedback</a>
            </div>

            <div className="footer-links-column">
                <h4>Legal</h4>
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Service</a>
                <a href="#">Refund & Cancellation Policy</a>
            </div>
        </div>

        <hr className="footer-divider" />

        <div className="container footer-bottom-meta">
            <div className="footer-bottom-left">
                <strong>MarTechAdda Private Limited</strong>
                <p className="address">
                    <svg className="meta-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    A-1702, 17th FLR, Parinee Crescenzo, Bandra Kurla Complex (BKC), Mumbai – 400051, Maharashtra, India
                </p>
                <p className="email">
                    <svg className="meta-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                    <a href="mailto:support@martechadda.com">support@martechadda.com</a>
                </p>
            </div>

            <div className="footer-bottom-middle">
                <p>CIN: U62099MH2025PTC456979</p>
                <p>GSTIN: 27AATCM871681Z6</p>
                <p>Udyam: UDYAM-MH-19-0393544</p>
                <p>DPIIT Startup India: DIPP237729</p>
            </div>

            <div className="footer-bottom-right">
                <p>&copy; 2026 MarTechAdda Private Limited. All rights reserved.</p>
            </div>
        </div>
    </footer>
);

interface ArticleDetailViewProps {
    articleId: string;
    onBack: () => void;
    onSelectArticle: (id: string) => void;
}

const ArticleDetailView = ({ articleId, onBack, onSelectArticle }: ArticleDetailViewProps) => {
    const resource = resourcesData.find(item => item.id === articleId);
    
    if (!resource) {
        return (
            <section className="article-detail-section">
                <div className="container" style={{ textAlign: 'center', padding: '100px 20px' }}>
                    <h2>Article not found</h2>
                    <button className="load-more-btn" onClick={onBack}>Back to Resources</button>
                </div>
            </section>
        );
    }

    const [commentsList, setCommentsList] = useState<ArticleComment[]>(resource.comments || []);
    const [newCommentText, setNewCommentText] = useState<string>('');
    const [isBookmarked, setIsBookmarked] = useState<boolean>(false);

    useEffect(() => {
        setCommentsList(resource.comments || []);
        setNewCommentText('');
        setIsBookmarked(false);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [resource]);

    const handlePostComment = (e: React.FormEvent) => {
        e.preventDefault();
        if (!newCommentText.trim()) return;

        const newComment: ArticleComment = {
            authorName: 'Guest User',
            avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=100',
            date: 'Just now',
            content: newCommentText.trim()
        };

        setCommentsList(prev => [newComment, ...prev]);
        setNewCommentText('');
    };

    const getArticleBlocks = (res: ResourceItem): ContentBlock[] => {
        if (res.articleContent && res.articleContent.length > 0) {
            return res.articleContent;
        }
        
        return [
            {
                type: 'paragraph',
                text: `${res.description} This detailed guide explores essential concepts, workflows, and tools designed to optimize this topic for B2B brands and agencies alike.`
            },
            {
                type: 'paragraph',
                text: 'When implementing this solution, the first step is analyzing your current organizational maturity and defining a set of core milestones. Too often, organizations run headfirst into implementation without setting benchmarks.'
            },
            {
                type: 'heading',
                text: 'Key Core Abstractions'
            },
            {
                type: 'paragraph',
                text: 'To get started effectively, focus on structural alignment across your teams. This ensures that everyone is moving in the same direction and metrics are tracked under a single source of truth.'
            },
            {
                type: 'blockquote',
                text: 'Execution quality is direct proof of operational maturity. Keep your configurations clean and consistent.'
            },
            {
                type: 'list',
                items: [
                    'Milestone 1: Define clear requirements and track metrics from day one.',
                    'Milestone 2: Eliminate duplicate workflows and consolidate overlapping platforms.',
                    'Milestone 3: Invest in robust team training and standard operating procedures.'
                ]
            },
            {
                type: 'paragraph',
                text: 'Following these guidelines will help secure a durable and scalable growth process, driving actual value straight to your bottom line.'
            }
        ];
    };

    const author = resource.author || {
        name: 'Sarah Jenkins',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150',
        role: 'Lead MarTech Architect',
        bio: 'Sarah is a Lead Architect specializing in database schemas, automated marketing flows, and software integrations.'
    };

    const publishDate = resource.publishDate || 'May 14, 2026';
    const tags = resource.tags || [resource.tag, 'Marketing Technology', 'SaaS', 'Automation'];
    const articleBlocks = getArticleBlocks(resource);

    // Pick 3 related articles (excluding current article and Videos)
    const relatedArticles = resourcesData
        .filter(item => item.id !== resource.id && item.category !== 'Videos')
        .slice(0, 3);

    return (
        <>
            <section className="article-detail-section">
                <div className="container">
                    <ScrollReveal animation="fade-in">
                        <div className="article-back-link" onClick={onBack}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="19" y1="12" x2="5" y2="12"></line>
                                <polyline points="12,19 5,12 12,5"></polyline>
                            </svg>
                            Back to Resources
                        </div>
                    </ScrollReveal>

                    <ScrollReveal animation="slide-up">
                        <span className="article-category-badge">{resource.category} / {resource.tag}</span>
                        <h1 className="article-detail-title">{resource.title}</h1>
                    </ScrollReveal>

                    <ScrollReveal animation="slide-up" delay={50}>
                        <div className="article-author-bar">
                            <div className="article-author-info">
                                <div className="article-author-avatar" style={{ backgroundImage: `url('${author.avatar}')` }} />
                                <div className="article-author-meta">
                                    <span className="article-author-name">{author.name}</span>
                                    <span className="article-publish-date">{publishDate} • {resource.readTime}</span>
                                </div>
                            </div>
                            <div className="article-actions">
                                <button 
                                    className={`article-action-btn ${isBookmarked ? 'active' : ''}`}
                                    onClick={() => setIsBookmarked(!isBookmarked)}
                                    aria-label="Bookmark article"
                                >
                                    <svg 
                                        width="18" 
                                        height="18" 
                                        viewBox="0 0 24 24" 
                                        fill={isBookmarked ? "currentColor" : "none"} 
                                        stroke="currentColor" 
                                        strokeWidth="2"
                                        strokeLinecap="round" 
                                        strokeLinejoin="round"
                                    >
                                        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                                    </svg>
                                </button>
                                <button className="article-action-btn" aria-label="Share article">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="18" cy="5" r="3"></circle>
                                        <circle cx="6" cy="12" r="3"></circle>
                                        <circle cx="18" cy="19" r="3"></circle>
                                        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                                        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal animation="slide-up" delay={100}>
                        <div className="article-hero-image" style={{ backgroundImage: `url('${resource.imageUrl}')` }} />
                    </ScrollReveal>

                    <div className="article-body-container">
                        {articleBlocks.map((block: ContentBlock, index: number) => {
                            if (block.type === 'paragraph') {
                                return <p key={index} className={index === 0 ? "article-lead" : ""}>{block.text}</p>;
                            } else if (block.type === 'heading') {
                                return <h3 key={index}>{block.text}</h3>;
                            } else if (block.type === 'blockquote') {
                                return <blockquote key={index}>{block.text}</blockquote>;
                            } else if (block.type === 'list') {
                                return (
                                    <ul key={index}>
                                        {block.items?.map((item: string, iIdx: number) => (
                                            <li key={iIdx}>{item}</li>
                                        ))}
                                    </ul>
                                );
                            }
                            return null;
                        })}

                        <div className="article-tags">
                            {tags.map((t, idx) => (
                                <span key={idx} className="article-tag-pill">#{t.replace(/\s+/g, '')}</span>
                            ))}
                        </div>

                        <div className="author-bio-card">
                            <div className="bio-avatar" style={{ backgroundImage: `url('${author.avatar}')` }} />
                            <div className="bio-content">
                                <span className="bio-name">{author.name}</span>
                                <p className="bio-text">{author.bio}</p>
                                <span className="bio-view-profile">
                                    View profile 
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="5" y1="12" x2="19" y2="12"></line>
                                        <polyline points="12,5 19,12 12,19"></polyline>
                                    </svg>
                                </span>
                            </div>
                        </div>

                        <div className="responses-section">
                            <h3>Responses ({commentsList.length})</h3>
                            <form className="comment-box-container" onSubmit={handlePostComment}>
                                <textarea 
                                    className="comment-textarea"
                                    placeholder="What are your thoughts?"
                                    value={newCommentText}
                                    onChange={(e) => setNewCommentText(e.target.value)}
                                    required
                                />
                                <div className="comment-submit-row">
                                    <button type="submit" className="comment-submit-btn">Post Response</button>
                                </div>
                            </form>

                            <div className="comments-list">
                                {commentsList.map((comment: ArticleComment, index: number) => (
                                    <div key={index} className="comment-card">
                                        <div className="comment-header">
                                            <div className="comment-user">
                                                <div className="comment-avatar" style={{ backgroundImage: `url('${comment.avatar}')` }} />
                                                <div className="comment-user-info">
                                                    <span className="comment-user-name">
                                                        {comment.authorName}
                                                        {comment.role === 'Author' && (
                                                            <span className="comment-author-badge">Author</span>
                                                        )}
                                                    </span>
                                                    <span className="comment-date">{comment.date}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="comment-body">{comment.content}</p>
                                        <div className="comment-actions">
                                            <span className="comment-action-link">
                                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                                                </svg>
                                                Like
                                            </span>
                                            <span className="comment-action-link">
                                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                                                </svg>
                                                Reply
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="article-newsletter-banner">
                            <h3>Enjoyed this article?</h3>
                            <p>Get the latest MarTech insights, tutorials, and benchmarks delivered straight to your inbox weekly.</p>
                            <form className="article-newsletter-form" onSubmit={(e) => e.preventDefault()}>
                                <input 
                                    type="email" 
                                    className="article-newsletter-input" 
                                    placeholder="Your email address" 
                                    required 
                                />
                                <button type="submit" className="article-newsletter-btn">Subscribe</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <section className="related-articles-section">
                <div className="container">
                    <div className="related-header">
                        <h2>Related Articles</h2>
                        <div className="related-read-more" onClick={onBack} style={{ cursor: 'pointer' }}>
                            Read More
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                <polyline points="12,5 19,12 12,19"></polyline>
                            </svg>
                        </div>
                    </div>

                    <div className="resources-grid">
                        {relatedArticles.map((art, idx) => (
                            <ScrollReveal 
                                key={art.id} 
                                animation="slide-up" 
                                delay={idx * 100}
                                className="resource-card-reveal"
                            >
                                <div 
                                    className="resource-item-card"
                                    onClick={() => onSelectArticle(art.id)}
                                    style={{ cursor: 'pointer' }}
                                >
                                    <div className="resource-image-container">
                                        <div 
                                            className="resource-card-image" 
                                            style={{ backgroundImage: `url('${art.imageUrl}')` }} 
                                        />
                                        <span className="resource-overlay-badge">{art.category}</span>
                                    </div>
                                    <div className="resource-content">
                                        <span className="resource-meta-label">{art.subMeta}</span>
                                        <h3 className="resource-item-title">{art.title}</h3>
                                        <p className="resource-item-desc">{art.description}</p>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

function App() {
    const [activeArticleId, setActiveArticleId] = useState<string | null>(null);

    const handleSelectArticle = (id: string) => {
        setActiveArticleId(id);
    };

    const handleGoHome = () => {
        setActiveArticleId(null);
    };

    return (
        <>
            <Header onHome={handleGoHome} />
            <main>
                {activeArticleId ? (
                    <ArticleDetailView 
                        articleId={activeArticleId} 
                        onBack={handleGoHome} 
                        onSelectArticle={handleSelectArticle}
                    />
                ) : (
                    <>
                        <HeroSection />
                        <PopularTopics />
                        <FeaturedResources onSelectArticle={handleSelectArticle} />
                        <AllResourcesSection onSelectArticle={handleSelectArticle} />
                        <FeaturedProfiles />
                        <LatestBlogs />
                        <Newsletter />
                    </>
                )}
            </main>
            <Footer />
        </>
    );
}

export default App;
