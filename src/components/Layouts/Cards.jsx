import React from "react";
import { Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Cards = ({ image, rating, title, paragraph, price , renderRatingIcons }) => {
    return (
        <Col sm={6} lg={4} xl={3}>
            <Card className="overflow-hidden mb-4">
                <div className="overflow-hidden">
                    <Card.Img variant="top" src={image} />
                </div>

                <Card.Body>

                <div className="d-flex align-items-center justify-content-between">
                    <div className="item_rating">{renderRatingIcons(rating)}</div>
                    <div className="wishlist">
                        <i class="bi bi-heart"></i>
                    </div>
                </div>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text> {paragraph} </Card.Text>
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="menu_price">
                            <h5 className="mb-0">${price}</h5>
                        </div>
                        <div className="add_to_cart">
                            <Link to="/" ><i class="bi bi-bag me-2"></i>Add To Cart</Link>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Cards;