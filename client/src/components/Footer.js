import React from 'react';

import { author_footer } from '../constants.js';


const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer-message">&copy; Copyright 2016. All rights reserved.</p>
        <p className="footer-creator">Created by <a href={author_footer} target="_black">Catvas</a></p>
    </footer>
  );
}

export default Footer;
