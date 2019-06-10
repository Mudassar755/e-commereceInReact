import React, { Component } from "react";
import { ProductConsumer } from "../Context";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./Button";

class Detail extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const {
            id,
            company,
            title,
            img,
            price,
            info,
            inCart
          } = value.detailProduct;
          return (
            <div className="container py-5">
              {/* Title */}
              <div className="row">
                <div className="col-10 text-center mx-auto text-blue text-slanted my-5">
                  <h1>{title}</h1>
                </div>
              </div>
              {/* Product Img */}
              <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3">
                  <img src={img} alt="Product" className="img-fluid" />
                </div>

                {/* Product Text */}
                <div className="col-10 text-capitalize mx-auto col-md-6 my-3">
                  <h3>model : { title }</h3>
                  <h4 className="text-uppercase text-muted text-title mt-3 mb-2">
                    made by : <span className="text-uppercase"> { company }</span>
                  </h4>
                  <h4 className="text-blue">
                    <strong>
                      price : <span>$</span>
                      { price }
                    </strong>
                  </h4>
                  <p className="text-capitalize mt-3 mb-0 font-weight-bold">
                    some info about product
                  </p>
                  <p className="text-muted lead">{info}</p>
                  <Link to="/">
                    <ButtonContainer>back to products</ButtonContainer>
                  </Link>
                  <ButtonContainer
                    cart
                    disabled={inCart ? true : false}
                    onClick={() => {
                      value.addToCart(id);
                      value.openModal(id);
                    }}
                  >
                    {inCart ? "inCart" : "add to cart"}
                  </ButtonContainer>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}

export default Detail;
