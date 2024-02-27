import React, {useEffect} from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions";

const HomeScreen = () =>  {
  const dispatch = useDispatch();
  // Fetch products from the Redux store
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

 useEffect(() => {
    dispatch(listProducts())
 }, [dispatch])


  return (
    <div>
      <h2>Home Screen</h2>
      {products && products.length > 0 ? (
        // Render multiple products
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <div key={product.id}>
                {/* Render individual product details */}
                <Link to={`/product/${product.id}/`}>
                  {" "}
                  <p>{product.name}</p>
                </Link>
                {/* Add other product details as needed */}
              </div>
            </li>
          ))}
        </ul>
      ) : (
        // Render when there are no products or only one product
        <p>No products found.</p>
      )}
    </div>
  );
}

export default HomeScreen