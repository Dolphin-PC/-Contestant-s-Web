import React, { Component } from 'react';
import { Badge, Container, Row, Col } from 'reactstrap';

export default class MainContent extends Component {
  render() {
    const MapData = this.props.Input;
    return (
      <div>
        {MapData.map((Contact, i) => {
          return (
            <section className='section section-lg'>
              <Container>
                <Row className='row-grid '>
                  <Col className='order-md-2' md='9'>
                    <ul>
                      {Contact.detail.map((detailContact, i) => {
                        return (
                          <li style={{ listStyle: 'none' }}>
                            <Badge
                              className='text-uppercase'
                              color={Contact.badgeInfo.color}
                              pill
                            >
                              #{i + 1}
                            </Badge>

                            <h3>{detailContact.main}</h3>
                            <p>{detailContact.sub}</p>
                          </li>
                        );
                      })}
                    </ul>
                  </Col>
                  <Col className='order-md-1' md='3'>
                    <div className='pr-md-5'>
                      <div className={Contact.property}>
                        <i className={Contact.cardIcon} />
                      </div>
                      <h3>{Contact.title}</h3>
                      <p>{Contact.text}</p>

                      {Contact.badgeInfo.map((BadgeContact, i) => {
                        return (
                          <Badge
                            color={BadgeContact.color}
                            pill
                            className='mr-1'
                          >
                            {BadgeContact.text}
                          </Badge>
                        );
                      })}
                    </div>
                  </Col>
                </Row>
              </Container>
            </section>
          );
        })}
      </div>
    );
  }
}
