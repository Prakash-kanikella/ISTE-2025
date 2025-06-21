import './Page_01.css';

function Page_01() {
    return (
        <div className="container">
            <div className="background-image">
                <img src="/pictures/unsplash_FPSrDsq5i20.svg" className="centered-image" alt="Unsplash" />
            </div>
            <div className="nav">
                <div className="nav-left">
                    <img src="/pictures/Mask group.svg" alt="Logo" className="logo"/>
                    <h1 className="iste-text">ISTE</h1>
                </div>
                <button className="nav-button">
                    <img src="/pictures/Group 55.svg" alt="Button"/>
                </button>
            </div>

            <div className="main-content">
                <div className="content-text">
                    <h1>Indian Society For<br />Technical Education</h1>
                    <p>Your name, your organization name, contact information, the URL of your site, a list of any URLs from which you intend to link to our Website, and a list of any URLs on our site that you would like to link to should all be included in your application. Wait two to three weeks for a reply.</p>
                    <p className="join-text">Join ISTE CLUB</p>
                    <a href="#" className="register-btn">Register Now</a>
                </div>
             <div className="video-glow-wrapper">
                <div className="video-circle">
                        <div className="scrolling-map">
                            <img src="/pictures/globemap.png" alt="Scrolling Globe" />
                        </div>
                </div>
                </div>
            </div>

            <img src="/pictures/pixelcut-export (17) 2.svg" alt='Group' className='astronaut' />
            <img src="/pictures/unsplash_FPSrDsq5i20.svg" className="centered-image foreground-image" alt="Unsplash" />

            <div className="white-section">
                <h2>Welcome to the ISTE Community</h2>
                <p>We are glad to have you here. Explore our events, workshops, and more.</p>
            </div>
        </div>
    );
}

export default Page_01;