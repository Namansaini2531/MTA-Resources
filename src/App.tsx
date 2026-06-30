
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
    <section className="blogs-section">
        <div className="container">
            <div className="section-header">
                <h2>Blogs</h2>
                <a href="#" className="view-all-btn">View All &rarr;</a>
            </div>
            <div className="blogs-layout">
                {/* Left Column - Large Cards */}
                <div className="blogs-left-col">
                    <a href="#" className="large-blog-card">
                        <div className="card-image" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800')" }}></div>
                        <div className="card-content-no-bg">
                            <p className="blog-meta">Talent Intelligence &nbsp;|&nbsp; &lt; 1 min</p>
                            <h3>GitHub Profile Checklist 2026: What Recruiters Actually Look At</h3>
                            <p className="blog-desc">GitHub can be a powerful job-search asset — for freshers and career-switchers especially, it's often the proof that you can actually build things.</p>
                        </div>
                    </a>
                    <a href="#" className="large-blog-card">
                        <div className="card-image" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800')" }}></div>
                        <div className="card-content-no-bg">
                            <p className="blog-meta">Talent Intelligence &nbsp;|&nbsp; &lt; 1 min</p>
                            <h3>Resume Headline & Summary 2026: Examples, Templates & Action Verbs</h3>
                            <p className="blog-desc">The top third of your resume gets read first and decides whether the rest gets read at all. This guide shows you the modern alternative.</p>
                        </div>
                    </a>
                </div>
                {/* Right Column - Compact Cards */}
                <div className="blogs-right-col">
                    <a href="#" className="compact-blog-card">
                        <div className="compact-image" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=200')" }}></div>
                        <div className="compact-content">
                            <p className="blog-meta">Talent Intelligence &nbsp;|&nbsp; &lt; 1 min</p>
                            <h4>Product Manager Resume 2026: What Hiring Managers Actually Read</h4>
                        </div>
                    </a>
                    <a href="#" className="compact-blog-card">
                        <div className="compact-image" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=200')" }}></div>
                        <div className="compact-content">
                            <p className="blog-meta">Talent Intelligence &nbsp;|&nbsp; &lt; 1 min</p>
                            <h4>LinkedIn Profile Optimization 2026: Get Recruiters to Message You</h4>
                        </div>
                    </a>
                    <a href="#" className="compact-blog-card">
                        <div className="compact-image" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=200')" }}></div>
                        <div className="compact-content">
                            <p className="blog-meta">Talent Intelligence &nbsp;|&nbsp; &lt; 1 min</p>
                            <h4>Career Gap on Resume: How to Explain It Honestly (2026)</h4>
                        </div>
                    </a>
                    <a href="#" className="compact-blog-card">
                        <div className="compact-image" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=200')" }}></div>
                        <div className="compact-content">
                            <p className="blog-meta">Talent Intelligence &nbsp;|&nbsp; &lt; 1 min</p>
                            <h4>How to List Projects on a Tech Resume (2026 Examples)</h4>
                        </div>
                    </a>
                    <a href="#" className="compact-blog-card">
                        <div className="compact-image" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=200')" }}></div>
                        <div className="compact-content">
                            <p className="blog-meta">Talent Intelligence &nbsp;|&nbsp; &lt; 1 min</p>
                            <h4>Cover Letter for Indian Tech Jobs 2026: Template + When to Skip It</h4>
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
