// components/Banner.js
import React from 'react';
import './banner.css'
const Banner = () => {
    return (
    <section className="cta-section">
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <div className="cta-text">
                    <h3>GeT Started Today</h3>
                    <p>Step inside and unlock exclusive fitness offers crafted to push you toward your best self!</p>
                </div>
                <a href="/ContactUs" className="primary-btn cta-btn">book now</a>
            </div>
        </div>
    </div>
</section>
)
}
export default Banner;
