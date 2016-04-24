import React    from 'react';
var Footer = React.createClass({
  render: () => {
    let year            = new Date().getFullYear();
    let copyrightSymbol = String.fromCharCode(169);
    let footerMessage   = `Copyright  ${copyrightSymbol} Matt Bourke ${year}`;
    return (
         <p className="footer-text">{footerMessage}</p>
    )
  }
});

module.exports = Footer;