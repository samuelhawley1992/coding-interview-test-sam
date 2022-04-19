import footerLogo from '../img/footer-logo.svg'
import mapIcon from '../img/map-icon.svg'
import phoneIcon from '../img/phone-icon.svg'
import emailIcon from '../img/email-icon.svg'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
    return (
        <footer className="footer-section">
            <Container>
                <Row>
                    <Col className="company-info-column" lg={6}>
                        <img src={footerLogo} alt="Lugar" height="16" width="109" />
                        <a className="single-link" href="#">
                            <img height="10px" width="10px" src={mapIcon} />
                            <span>2118 Thornridge Cir.<br/> Dubai, UAE 35624</span>
                        </a>
                        <a className="single-link" href="#">
                            <img height="10px" width="10px" src={phoneIcon} />
                            <span>+33 415 65356 - 9</span>
                        </a>
                        <a className="single-link" href="#">
                            <img height="10px" width="10px" src={emailIcon} />
                            <span>contact@lugar.com</span>
                        </a>
                    </Col>
                    <Col className="links-column" lg={2}>
                        <h5>Quick Links</h5>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Project</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </Col>
                    <Col className="links-column" lg={2}>
                        <h5>Legal Links</h5>
                        <ul>
                            <li><a href="#">Terms</a></li>
                            <li><a href="#">Conditions</a></li>
                            <li><a href="#">Policy</a></li>
                        </ul>
                    </Col>
                    <Col className="links-column" lg={2}>
                        <h5>Social Media</h5>
                        <ul>
                            <li><a href="#">Facebook</a></li>
                            <li><a href="#">Twitter</a></li>
                            <li><a href="#">YouTube</a></li>
                            <li><a href="#">LinkedIn</a></li>
                        </ul>
                    </Col>
                </Row>
                <Row className="copyright-footer">
                    <Col>
                        <a href="#" className="copyright-info">Copyright @ 2022 Lugar Inc.</a>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer