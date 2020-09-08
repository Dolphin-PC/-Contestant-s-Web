import React, { Component } from "react";
import { Col, Card, Badge, CardBody } from "reactstrap";

class TeamList extends Component {
   render() {
      const { title, description } = this.props;
      return (
         <>
            <Col lg="3">
               <Card className="card-lift--hover shadow border-0">
                  <CardBody className="py-5">
                     <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                        <i className="ni ni-notification-70" />
                     </div>
                     <h6 className="text-primary text-uppercase">{title}</h6>
                     <p className="description mt-3">{description}</p>
                     <div>
                        <Badge color="primary" pill className="mr-1" onClick={this.props.JoinClickHandler}>
                           참가하기
                        </Badge>
                     </div>
                  </CardBody>
               </Card>
            </Col>
         </>
      );
   }
}

export default TeamList;
