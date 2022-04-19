import { useState, useEffect } from 'react'
import { Container, Row, Col, Dropdown } from 'react-bootstrap'

const query = `
        {
        propertyCollection(limit:6) {
                items {
                    id
                    title
                    address
                    category    
                    image {
                        url
                    }
                }
            }
        }
`;

const Properties = () => {

    const [data, setData] = useState(null);
    const [currentCategory, setCurrentCategory] = useState(null);

    const graphQlEndpoint = process.env.REACT_APP_GRAPHQL_ENDPOINT;
    const accessToken = process.env.REACT_APP_GRAPHQL_ACCESS_TOKEN;

    useEffect((graphQlEndpoint) => {
        window
          .fetch(`https://graphql.contentful.com/content/v1/spaces/${graphQlEndpoint}`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${accessToken}`,
            },
            body: JSON.stringify({ query }),
          })
          .then((response) => response.json())
          .then(({ data, errors }) => {
            if (errors) {
              console.error(errors);
            }
    
            setData(data);
          });
      }, []);

    const categoryData = [];

    if(data) {

        const propertyData = data.propertyCollection.items;
        
        propertyData.forEach(function(item) {
            if(!categoryData.includes(item.category)) {
                categoryData.push(item.category);
            }
        })  
    } 

    return (
        <div className="properties-section">
            <Container>
                <Row className="properties-info">
                    <Col>
                        <h2>Properties</h2>
                        <p>Turpis facilisis tempor pulvinar in lobortis ornare magna.</p>
                    </Col>
                </Row>
                    <Row className="property-listings">
                        <div className="all-categories-link">
                            <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                {currentCategory ? currentCategory : 'All categories'}
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                {categoryData ? categoryData.map((category) => {
                                    return (
                                        <Dropdown.Item onClick={() => setCurrentCategory(category)}>{category}</Dropdown.Item>
                                    )
                                }) : ''}
                            </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    {data ? data.propertyCollection.items.map((listing) => {
                        if(currentCategory === listing.category) {
                            return (
                                <>
                                <Col lg={4}>
                                    <div className="single-property-listing">
                                        <img src={listing.image.url} />
                                        <div className="single-property-info">
                                            <h4>{listing.title}</h4>
                                            <p>{listing.address}</p>
                                        </div>
                                    </div>
                                </Col>
                                </>
                            )
                        } else if(!currentCategory) {
                            return (
                                <>
                                <Col lg={4}>
                                    <div className="single-property-listing">
                                        <img src={listing.image.url} />
                                        <div className="single-property-info">
                                            <h4>{listing.title}</h4>
                                            <p>{listing.address}</p>
                                        </div>
                                    </div>
                                </Col>
                                </>
                            )
                        }      
                    }) : ''}
                </Row>
            </Container>
        </div>
    )

}

export default Properties