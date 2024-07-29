import React from 'react';
import './Contact.css'; 
import Layout from '../layout/Layout';
const Contact = () => {
  return (
    <Layout>
    <div className="contact-container">
      <h1>Contact Us</h1>
      <section>
        <p>
          We'd love to hear from you! Whether you have a question, feedback, or a collaboration idea, feel free to reach out. Your thoughts and opinions are important to us and we strive to respond to all inquiries promptly.
        </p>
      </section>
      <section>
        <h2>How to Reach Us</h2>
        <p>You can contact us via the following methods:</p>
        <ul>
          <li><strong>Email-1:</strong> <a href="abhay@inzint.com">abhay@inzint.com</a></li>
          <li><strong>Email-2:</strong> <a href="adarsh@inzint.com">adarsh@inzint.com</a></li>
          <li><strong>Phone:</strong> +123-456-7890</li>
        </ul>
      </section>
    </div>
    </Layout>
  );
};

export default Contact;
