import { Container, Row, Col } from 'react-bootstrap'
import statisticsImg from '../img/statistics-section-img.jpg'

const Statistics = () => {
    return (
        <div className="statistics-section">
            <Container>
                <Row>
                    <Col className="left" lg={5}>
                        <img className="statistics-image" src={statisticsImg} />
                    </Col>
                    <Col className="right" lg={7}>
                        <h2>Award winning real estate company in Dubai</h2>
                        <p>Semper arcu mauris aliquam lacus. Massa erat vitae ultrices pharetra scelerisque. Ipsum, turpis facilisis tempor pulvinar in lobortis ornare magna.</p>
                        <Row className="statistics-info">
                            <Col className="single-statistic" lg={4}>
                                <p>Previous Projects</p>
                                <h3>34+</h3>
                            </Col>
                            <Col className="single-statistic" lg={4}>
                                <p>Years Experience</p>
                                <h3>20y</h3>
                            </Col>
                            <Col className="single-statistic" lg={4}>
                                <p>Ongoing Projects</p>
                                <h3>12</h3>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Statistics