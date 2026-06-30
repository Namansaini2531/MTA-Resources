
import './index.css';

const Header = () => (
    <header className="main-header">
        <div className="container header-container">
            <div className="logo">MarTechAdda</div>
            <nav className="nav-links">
                <a href="#">Find Experts</a>
                <a href="#">Find Work</a>
                <a href="#">Why MarTechAdda</a>
            </nav>
            <div className="header-actions">
                <a href="#" className="login-btn">Log In</a>
                <a href="#" className="signup-btn">Sign Up</a>
            </div>
        </div>
    </header>
);

const HeroSection = () => (
    <section className="hero-section">
        <div className="container">
            <div className="hero-banner" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=1200')" }}>
                <div className="hero-content">
                    <h1>Resource Center</h1>
                    <p>Tools, insights, and inspirations about the world of work.</p>
                </div>
            </div>
        </div>
    </section>
);

const PopularTopics = () => (
    <section className="popular-topics">
        <div className="container">
            <h2>Explore popular topics</h2>
            <div className="topic-chips">
                <a href="#" className="chip">Upwork vs. Fiverr</a>
                <a href="#" className="chip">Best freelance websites</a>
                <a href="#" className="chip">Online jobs for students</a>
            </div>
        </div>
    </section>
);

const FeaturedResources = () => (
    <section className="featured-resources bg-light">
        <div className="container">
            <h2>Featured Resources</h2>
            <div className="featured-grid">
                <a href="#" className="featured-card large-card">
                    <div className="card-image" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800')" }}></div>
                    <div className="card-content">
                        <div className="tags">
                            <span className="tag">Hiring</span> <span className="tag">Article</span>
                        </div>
                        <h3>How to Find Your Agency Match</h3>
                        <p className="date">Mar 30, 2026</p>
                    </div>
                </a>
                
                <div className="small-cards">
                    <a href="#" className="featured-card small-card">
                        <div className="card-image" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=400')" }}></div>
                        <div className="card-content">
                            <div className="tags">
                                <span className="tag">Tech</span>
                            </div>
                            <h3>Connecting with Verified Experts</h3>
                            <p className="date">Apr 9, 2026</p>
                        </div>
                    </a>
                    <a href="#" className="featured-card small-card">
                        <div className="card-image" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=400')" }}></div>
                        <div className="card-content">
                            <div className="tags">
                                <span className="tag">Market</span>
                            </div>
                            <h3>Marketing Portfolio Guide</h3>
                            <p className="date">Mar 6, 2026</p>
                        </div>
                    </a>
                    <a href="#" className="featured-card small-card">
                        <div className="card-image" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=400')" }}></div>
                        <div className="card-content">
                            <div className="tags">
                                <span className="tag">AI</span>
                            </div>
                            <h3>How to Set up a Search</h3>
                            <p className="date">Apr 3, 2026</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </section>
);

const LatestBlogs = () => (
    <section className="latest-blogs">
        <div className="container">
            <div className="section-header">
                <h2>Latest Blogs</h2>
                <a href="#" className="view-all">View all ↗</a>
            </div>
            <div className="blogs-grid">
                <a href="#" className="blog-card featured-blog">
                    <div className="card-image" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800')" }}></div>
                    <div className="card-content">
                        <div className="tags">
                            <span className="tag">AI</span>
                        </div>
                        <h3>AI Tools Every Marketer Should Learn</h3>
                        <p>Discover the top AI tools that are transforming the marketing landscape.</p>
                        <p className="date">Apr 12, 2026</p>
                    </div>
                </a>
                <div className="compact-blogs">
                    <a href="#" className="compact-blog-card">
                        <div className="compact-image" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=200')" }}></div>
                        <div className="compact-content">
                            <h4>How to Build a Marketing Portfolio</h4>
                            <span className="tag">Career</span>
                        </div>
                    </a>
                    <a href="#" className="compact-blog-card">
                        <div className="compact-image" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=200')" }}></div>
                        <div className="compact-content">
                            <h4>Client Communication Tips</h4>
                            <span className="tag">Management</span>
                        </div>
                    </a>
                    <a href="#" className="compact-blog-card">
                        <div className="compact-image" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80&w=200')" }}></div>
                        <div className="compact-content">
                            <h4>AI era: Boon or Bane</h4>
                            <span className="tag">Opinion</span>
                        </div>
                    </a>
                    <a href="#" className="compact-blog-card">
                        <div className="compact-image" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=200')" }}></div>
                        <div className="compact-content">
                            <h4>UI/UX designer salary insights</h4>
                            <span className="tag">Salary</span>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </section>
);

const ReportsSection = () => (
    <section className="reports-section bg-light">
        <div className="container">
            <h2>Reports & E-books</h2>
            <div className="reports-grid">
                <div className="report-card">
                    <div className="report-cover" style={{ backgroundColor: "#fce4e4" }}>
                        <span className="report-icon">📄</span>
                    </div>
                    <div className="report-content">
                        <h3>State of Marketing Report</h3>
                        <p>An in-depth look at marketing trends for the upcoming year.</p>
                        <a href="#" className="download-btn">Download ↓</a>
                    </div>
                </div>
                <div className="report-card">
                    <div className="report-cover" style={{ backgroundColor: "#e4f0fc" }}>
                        <span className="report-icon">📘</span>
                    </div>
                    <div className="report-content">
                        <h3>Agency Growth Handbook</h3>
                        <p>Strategies to scale your marketing agency effectively.</p>
                        <a href="#" className="download-btn">Download ↓</a>
                    </div>
                </div>
                <div className="report-card">
                    <div className="report-cover" style={{ backgroundColor: "#eefce4" }}>
                        <span className="report-icon">📊</span>
                    </div>
                    <div className="report-content">
                        <h3>Digital Marketing Trends</h3>
                        <p>What to expect in SEO, paid ads, and content.</p>
                        <a href="#" className="download-btn">Download ↓</a>
                    </div>
                </div>
                <div className="report-card">
                    <div className="report-cover" style={{ backgroundColor: "#fce4f4" }}>
                        <span className="report-icon">📈</span>
                    </div>
                    <div className="report-content">
                        <h3>Tech Salary Index</h3>
                        <p>Comprehensive salary data for marketing roles.</p>
                        <a href="#" className="download-btn">Download ↓</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

const VideoTutorials = () => (
    <section className="video-tutorials">
        <div className="container">
            <h2>Video Tutorials</h2>
            <div className="videos-grid">
                <a href="https://youtube.com" target="_blank" rel="noreferrer" className="video-card">
                    <div className="video-thumbnail" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=400')" }}>
                        <div className="play-icon">▶</div>
                        <span className="duration">12:30</span>
                    </div>
                    <div className="video-info">
                        <span className="tag">Platform</span>
                        <h3>Website Walkthrough</h3>
                    </div>
                </a>
                <a href="https://youtube.com" target="_blank" rel="noreferrer" className="video-card">
                    <div className="video-thumbnail" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=400')" }}>
                        <div className="play-icon">▶</div>
                        <span className="duration">08:15</span>
                    </div>
                    <div className="video-info">
                        <span className="tag">Setup</span>
                        <h3>How to Setup your MarTechAdda profile</h3>
                    </div>
                </a>
                <a href="https://youtube.com" target="_blank" rel="noreferrer" className="video-card">
                    <div className="video-thumbnail" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=400')" }}>
                        <div className="play-icon">▶</div>
                        <span className="duration">15:45</span>
                    </div>
                    <div className="video-info">
                        <span className="tag">Career</span>
                        <h3>Personal Branding Masterclass</h3>
                    </div>
                </a>
                <a href="https://youtube.com" target="_blank" rel="noreferrer" className="video-card">
                    <div className="video-thumbnail" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=400')" }}>
                        <div className="play-icon">▶</div>
                        <span className="duration">10:05</span>
                    </div>
                    <div className="video-info">
                        <span className="tag">Hiring</span>
                        <h3>Tips to find the best Marketing expert</h3>
                    </div>
                </a>
            </div>
            <div className="center-cta">
                <button className="load-more-btn">Load More ↓</button>
            </div>
        </div>
    </section>
);

const Newsletter = () => (
    <section className="newsletter-section">
        <div className="container newsletter-container">
            <div className="newsletter-content">
                <h2>Subscribe to our newsletter</h2>
                <p>Get weekly updates on industry news, marketing insights, hiring resources, and salary updates.</p>
                <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                    <input type="email" placeholder="Enter your email address" required />
                    <button type="submit" className="subscribe-btn">Subscribe</button>
                </form>
            </div>
        </div>
    </section>
);

const Footer = () => (
    <footer className="main-footer">
        <div className="container footer-container">
            <div className="footer-logo-col">
                <div className="footer-logo">MarTechAdda</div>
                <div className="social-links">
                    <a href="#">Fb</a>
                    <a href="#">Tw</a>
                    <a href="#">Li</a>
                    <a href="#">In</a>
                    <a href="#">Yt</a>
                </div>
            </div>
            <div className="footer-links-col">
                <h4>For Clients</h4>
                <a href="#">How to hire</a>
                <a href="#">Talent Marketplace</a>
                <a href="#">Project Catalog</a>
                <a href="#">Hire an agency</a>
                <a href="#">Enterprise</a>
            </div>
            <div className="footer-links-col">
                <h4>For Talent</h4>
                <a href="#">How to find work</a>
                <a href="#">Direct Contracts</a>
                <a href="#">Find freelance jobs worldwide</a>
            </div>
            <div className="footer-links-col">
                <h4>Resources</h4>
                <a href="#">Help & Support</a>
                <a href="#">Success Stories</a>
                <a href="#">Upwork Reviews</a>
                <a href="#">Resources</a>
                <a href="#">Blog</a>
            </div>
            <div className="footer-links-col">
                <h4>Company</h4>
                <a href="#">About Us</a>
                <a href="#">Leadership</a>
                <a href="#">Investor Relations</a>
                <a href="#">Careers</a>
                <a href="#">Our Impact</a>
            </div>
        </div>
        <div className="container footer-bottom">
            <p>&copy; 2026 MarTechAdda Global Inc.</p>
            <div className="legal-links">
                <a href="#">Terms of Service</a>
                <a href="#">Privacy Policy</a>
                <a href="#">CA Notice at Collection</a>
                <a href="#">Cookie Settings</a>
                <a href="#">Accessibility</a>
            </div>
        </div>
    </footer>
);

function App() {
    return (
        <>
            <Header />
            <main>
                <HeroSection />
                <PopularTopics />
                <FeaturedResources />
                <LatestBlogs />
                <ReportsSection />
                <VideoTutorials />
                <Newsletter />
            </main>
            <Footer />
        </>
    );
}

export default App;
