import React from "react"
import Accordion from 'react-bootstrap/Accordion';
import "./faq.scss"
import { Col, Container, Row } from "react-bootstrap";
const FaqSection = () => {
  return (
    <section className="faq-parent">
      <Container>

        <Row className="faq-section">
          <h1 className="text-center" style={{fontWeight:"700",fontSize:"2rem"}}>Frequently Asked Questions</h1>
          <Col md={12} sm={12} xs={12} className="faq-parent">
            <Accordion defaultActiveKey={['0']} alwaysOpen>
              <Accordion.Item eventKey="0">
                <Accordion.Header><b>1. How do I track my order?</b></Accordion.Header>
                <Accordion.Body>
                  After placing an order, you’ll receive a confirmation email with a tracking link.
                  You can also log into your account and go to the "My Orders" section to see real-time updates.
                  Tracking typically becomes active within 24 hours after the order is shipped.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="1">
                <Accordion.Header><b>2. What payment methods are accepted?</b></Accordion.Header>
                <Accordion.Body>
                  We accept all major credit/debit cards, UPI, net banking, and wallets like Paytm and PhonePe.
                  EMI options are also available on select cards.
                  Cash on Delivery is available only for selected pin codes and order values.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="2">
                <Accordion.Header><b>3. Can I modify or cancel my order?</b></Accordion.Header>
                <Accordion.Body>
                  Orders can be modified or canceled within 1 hour of placing them.
                  If the order has already been packed or shipped, cancellation won't be possible.
                  In such cases, you can still initiate a return after delivery.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="3">
                <Accordion.Header><b>4. What is your return and refund policy?</b></Accordion.Header>
                <Accordion.Body>
                  We offer a 7-day easy return policy for most products.
                  Items must be unused and in their original packaging.
                  Refunds are processed within 5–7 business days after the return pickup and quality check.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="4">
                <Accordion.Header><b>5. Do you offer international shipping?</b></Accordion.Header>
                <Accordion.Body>
                  Currently, we only deliver across India.
                  However, we are working to expand our services internationally in the near future.
                  Stay tuned for updates on global shipping!
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="5">
                <Accordion.Header><b>6. Is it safe to shop on your website?</b></Accordion.Header>
                <Accordion.Body>
                  Yes, shopping with us is completely secure.
                  We use industry-standard SSL encryption and secure payment gateways.
                  Your personal information and payment details are always kept confidential.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="6">
                <Accordion.Header><b>7. How do I apply a discount or coupon code?</b></Accordion.Header>
                <Accordion.Body>
                  You can apply a valid coupon code at the checkout page before making the payment.
                  Make sure the coupon is applicable to your selected items.
                  If valid, the discount will be instantly applied to your order total.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="7">
                <Accordion.Header><b>8. What if I receive a damaged or wrong product?</b></Accordion.Header>
                <Accordion.Body>
                  We’re truly sorry for the inconvenience.
                  Please report the issue via your order page within 48 hours of delivery.
                  Our team will arrange a pickup and send you a replacement or refund quickly.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="8">
                <Accordion.Header><b>9. Do I need an account to place an order?</b></Accordion.Header>
                <Accordion.Body>
                  You can place orders as a guest without creating an account.
                  However, we recommend signing up for faster checkouts, tracking orders, and accessing exclusive deals.
                  Your account also stores your order history for future reference.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="9">
                <Accordion.Header><b>10. How do I contact customer support?</b></Accordion.Header>
                <Accordion.Body>
                  You can reach our support team through the "Contact Us" page, live chat, or email us at support@yourstore.com.
                  Our team is available from 10 AM to 6 PM, Monday to Saturday.
                  We usually respond within 24 hours of receiving your query.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>


        </Row>
      </Container>
    </section>
  )
}

export default FaqSection