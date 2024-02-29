import React ,{useEffect} from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { listProductDetails } from "../actions/productActions";
function ProductScreen() {
  const productId = useParams().id;

  const dispatch = useDispatch()
  const navigate = useNavigate()


  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    dispatch(listProductDetails(productId));
  }, [dispatch, productId]);


 const addToCartHandler = (id) => {
  navigate(`/cart/${productId}/`);
 }

  return (
    <div>
      <h2> Product Page</h2>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message error={error} />
      ) : (
        <>
          <p>{product.name}</p>
          <p>{product.id}</p>
          <p>{product.description}</p>
          <button onClick={() => addToCartHandler(product.id)}>
            Add to Cart
          </button>

          {product.reviews && product.reviews.length > 0 ? (
            <div>
              <h3>Reviews:</h3>
              {product.reviews.map((review, index) => (
                <div key={review.id}>
                  <p>
                    Name: {review.name} -- Rating:{review.rating}
                  </p>
                  <p>Comment: {review.comment}</p>
                  {index < product.reviews.length - 1 && <br />}{" "}
                  {/* Add break if it's not the last review */}
                </div>
              ))}
            </div>
          ) : (
            <p>No reviews available for this product.</p>
          )}
        </>
      )}
    </div>
  );
}

export default ProductScreen;
