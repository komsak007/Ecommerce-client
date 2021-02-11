import React, {useState} from "react";
import { Card, Tooltip } from "antd";
import { EyeOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import laptop from "../../laptop.png";
import { Link } from "react-router-dom";
import { showAverage } from "../../functions/rating";
import _ from 'lodash'
import {useSelector, useDispatch} from 'react-redux'

const ProductCard = ({ product }) => {

  const [tooltip, setTooltip] = useState('Clck to add')

  //destructure
  const { images, title, description, slug, price } = product;
  const { Meta } = Card;

  // redux
  const {user, cart} = useSelector(state => ({...state}))
  const dispatch = useDispatch()

  const handleAddToCart = () => {
    // create cart array
    let cart = []
    if(typeof window !== undefined) {
      // if cart is in localStorage GET it
      if(localStorage.getItem('cart')) {
        cart = JSON.parse(localStorage.getItem('cart'));
      }

      cart.push({
        ...product,
        count: 1,
      })
      // remove duplications
      let unique = _.uniqWith(cart, _.isEqual)
      // save to localStorage
      // console.log("unique", unique);
      localStorage.setItem('cart', JSON.stringify(unique))
      // show tooltip
      setTooltip("Added")

      // add to redux state
      dispatch({
        type: "ADD_TO_CART",
        payload: unique
      })

      // show cart item in side drawer
      dispatch({
        type: "SET_VISIBLE",
        payload: true
      })
    }
  }

  return (
    <>
      {product && product.ratings && product.ratings.length > 0 ? (
        showAverage(product)
      ) : (
        <div className="text-center pt-1 pb-3">No rating yet</div>
      )}
      <Card
        cover={
          <img
            src={images && images.length ? images[0].url : laptop}
            style={{ height: "150px", objectFit: "cover" }}
            className="p-2"
          />
        }
        actions={[
          <Link to={`/product/${slug}`}>
            <EyeOutlined className="text-primary" />
            <br /> View Product
          </Link>,
          <Tooltip title={tooltip}>
            <a onClick={handleAddToCart} disabled={product.quantity < 1}>
              <ShoppingCartOutlined className="text-danger" /> <br />
              {product.quantity < 1 ? 'Out of stock' : 'Add to cart'}
            </a>
          </Tooltip>,
        ]}
      >
        <Meta
          title={`${title} - ฿${price}`}
          description={`${description && description.substring(0, 40)}...`}
        />
      </Card>
    </>
  );
};

export default ProductCard;
