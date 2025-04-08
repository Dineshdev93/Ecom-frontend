import React from 'react';
import './policy.scss';

export default function Terms() {
  return (
    <div className="terms-container" style={{marginTop:"7rem"}}>
      <h1>Terms and Conditions</h1>
      <section className="terms-section">
        <h2>1. Introduction</h2>
        <p>
          Welcome to our eCommerce platform. By accessing or using our website, you agree to be bound by these Terms and Conditions.
        </p>
      </section>

      <section className="terms-section">
        <h2>2. User Responsibilities</h2>
        <p>
          Users are expected to provide accurate information during purchases and must not misuse any services provided on the platform.
        </p>
      </section>

      <section className="terms-section">
        <h2>3. Payments</h2>
        <p>
          All transactions are processed in a secure manner. We accept credit card payments and other methods mentioned at checkout.
        </p>
      </section>

      <section className="terms-section">
        <h2>4. Return & Refund Policy</h2>
        <p>
          Please read our refund policy carefully. Returns are accepted within 7 days of delivery for eligible items.
        </p>
      </section>

      <section className="terms-section">
        <h2>5. Privacy Policy</h2>
        <p>
          Your privacy is important to us. Read our privacy policy to learn how we handle your data.
        </p>
      </section>

      <section className="terms-section">
        <h2>6. Changes to Terms</h2>
        <p>
          We reserve the right to modify these terms at any time. Please check this page periodically for updates.
        </p>
      </section>
    </div>
  );
}

