import '../scss/header.scss'
import logo from '../img/logo.png'
import houseImg from '../img/header-house-img.png'
import { Container, Row, Col } from 'react-bootstrap'

const Header = () => {
    return (
        <header className="homepage-header">
            <img className="header-house-img" src={houseImg} />
            <Container>
                <Row className="navbar-section">
                    <Col className="left" md={6}>
                        <img src={logo} alt="Lugar" height="16" width="109" />
                    </Col>
                    <Col className="right" md={6}>
                        <nav className="navbar">
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Projects</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </nav>
                    </Col>
                </Row>
                <Row className="homepage-header-main-section">
                    <Col lg={6}>
                        <h1>A home is built with love and dreams</h1>
                        <h2>Real estate farm that makes your dreams true</h2>
                        <div className="btn-holder">
                            <a className="our-projects-btn" href="#">Our projects</a>
                            <a className="contact-us-btn" href="#">Contact us</a>
                        </div>
                    </Col>
                </Row>
            </Container>
            
        </header>
    )
}

export default Header