function Footer () {
    return (
        <div className="footer">
            <section className="subscription">
              <h3>Subscribe</h3>
              <p>Subscribe to get exclusive news & offer</p>
              <div className="subscribe">
                <input type="email" placeholder="Email address"/>
                <button>Subscribe</button>
              </div>
            </section>
            <section className="contents">
              <div className="wrapper">
                <div className="resource">
                  <h4>Resource</h4>
                  <nav>
                    <ul>
                      <li>
                        <a href="./pages/about.html">About Us</a>
                      </li>
                      <li>
                        <a href="#">Blog</a>
                      </li>
                      <li>
                        <a href="#">Contact</a>
                      </li>
                      <li>
                        <a href="#">FAQ</a>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div className="legal">
                  <h4>Legal Stuff</h4>
                  <nav>
                    <ul>
                      <li>
                        <a href="#">Terms of service</a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </section>
        </div>
    );
}

export default Footer;