import React from 'react';

function Footer() {
  return (
    <div className="Footer">
      <div className="container">
        <div className="row">
          <div className="footer_company col-3">
            <h3 className="name">Piroll Design, Inc.</h3>
            <p className="rights">© 2017 Piroll. All rights served</p>
            <p className="designer">Designed by robirurk.</p>
          </div>
          <div className="footer_contacts col-4 col-sm-3 col-md-3 col-lg-3 col-xl-3 offset-sm-1 offset-md-1 offset-lg-1 offset-xl-1">
            <a href="#" className="mail">
              {' '}
              hello@pirolltheme.com{' '}
            </a>
            <p className="phone">+44 987 065 908</p>
          </div>
          <div className="footer_links col-3">
            <div className="links_col">
              <a href="#" className="link">
                {' '}
                Projects{' '}
              </a>
              <a href="#" className="link">
                {' '}
                About{' '}
              </a>
              <a href="#" className="link">
                {' '}
                Services{' '}
              </a>
              <a href="#" className="link">
                {' '}
                Carreer{' '}
              </a>
            </div>
            <div className="links_col">
              <a href="#" className="link">
                {' '}
                News{' '}
              </a>
              <a href="#" className="link">
                {' '}
                Events{' '}
              </a>
              <a href="#" className="link">
                {' '}
                Contact{' '}
              </a>
              <a href="#" className="link">
                {' '}
                Legals{' '}
              </a>
            </div>
          </div>
          <div className="footer_social col-2">
            <a href="#" className="link facebook">
              {' '}
              Facebook{' '}
            </a>
            <a href="#" className="link twitter">
              {' '}
              Twitter{' '}
            </a>
            <a href="#" className="link instagram">
              {' '}
              Instagram{' '}
            </a>
            <a href="#" className="link dribbble">
              {' '}
              Dribbble{' '}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
