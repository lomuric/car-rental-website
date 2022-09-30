import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/about-section.css";
import aboutImg from "../../assets/all-images/cars-img/bmw-offer.png";

const AboutSection = () => {
  return (
    <section className="about__section">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__section-content">
              <h4 className="section__subtitle">About Us</h4>
              <h2 className="section__title">Welcome to Car Rent Service</h2>
              <p className="section___description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad ex a
                mollitia, expedita quia ipsa minus dolorem tenetur, corporis,
                reiciendis sed ut sit repudiandae asperiores fuga porro facere
                natus? Enim sit odit unde voluptatem provident! Ab adipisci vero
                ea facilis!
              </p>
              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items center gap-2">
                  <i class="ri-checkbox-circle-line"></i>Lorem ipsum dolor sit
                  amet.
                </p>

                <p className="section__description d-flex align-items center gap-2">
                  <i class="ri-checkbox-circle-line"></i>Lorem ipsum dolor sit
                  amet.
                </p>
              </div>

              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items center gap-2">
                  <i class="ri-checkbox-circle-line"></i>Lorem ipsum dolor sit
                  amet.
                </p>

                <p className="section__description d-flex align-items center gap-2">
                  <i class="ri-checkbox-circle-line"></i>Lorem ipsum dolor sit
                  amet.
                </p>
              </div>
            </div>
          </Col>
          <Col lg="6" md="6">
            <div className="about__img">
              <img src={aboutImg} alt="" className="w-100" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
