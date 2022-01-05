import './footer.scss';

import React from 'react';
import FooterTop from './footer-top';
import FooterBottom from './footer-bottom';

function Footer() {
  return (
    <div className="footer">
      <FooterTop />
      <FooterBottom />
    </div>
  );
}

export default Footer;
