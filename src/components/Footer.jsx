import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        {/* Logo and Description */}
        <div style={styles.section}>
          <img src="/logo.png" alt="ElectronixZone" style={styles.logo} />
          <p style={styles.text}>
            Your one-stop shop for all your needs. We offer the best products at unbeatable prices with exceptional customer service.
            "Electronix" gives a techy vibe, and "Zone" suggests a specialized place for all electronics needs.
          </p>
        </div>

        {/* Useful Links */}
        <div style={styles.section}>
          <h4>Useful Links</h4>
          <ul style={styles.linkList}>
            <li><a href="/about" style={styles.link}>About Us</a></li>
            <li><a href="/contact" style={styles.link}>Contact Us</a></li>
            <li><a href="/privacy" style={styles.link}>Privacy Policy</a></li>
            <li><a href="/terms" style={styles.link}>Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Customer Service */}
        <div style={styles.section}>
          <h4>Customer Service</h4>
          <ul style={styles.linkList}>
            <li><a href="/support" style={styles.link}>Support Center</a></li>
            <li><a href="/shipping" style={styles.link}>Shipping Information</a></li>
            <li><a href="/returns" style={styles.link}>Returns & Refunds</a></li>
            <li><a href="/faq" style={styles.link}>FAQs</a></li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div style={styles.section}>
          <h4>Follow Us</h4>
          <div style={styles.socialLinks}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src="/facebook-icon.png" alt="Facebook" style={styles.icon} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img src="/twitter-icon.png" alt="Twitter" style={styles.icon} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src="/instagram-icon.png" alt="Instagram" style={styles.icon} />
            </a>
          </div>
        </div>
      </div>

      <div style={styles.copyright}>
        <center>© 2024 www.myshopping.com. All rights reserved.</center>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: '#333',
    color: '#fff',
    padding: '20px 0',
    fontFamily: 'Arial, sans-serif',
    marginTop:"30"
  },
  container: {
    display: 'flex',
    justifyContent: 'space-around',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
    
  },
  section: {
    flex: 1,
    margin: '10px',
  },
  logo: {
    width: '150px',
  },
  text: {
    fontSize: '14px',
    lineHeight: '1.6',
    marginTop: '10px',
  },
  linkList: {
    listStyle: 'none',
    padding: 0,
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    display: 'block',
    marginBottom: '10px',
    fontSize: '14px',
  },
  socialLinks: {
    display: 'flex',
    gap: '10px',
  },
  icon: {
    width: '24px',
    height: '24px',
  },
  copyright: {
    marginTop: '20px',
    borderTop: '1px solid #444',
    paddingTop: '10px',
    fontSize: '12px',
  },
};

export default Footer;