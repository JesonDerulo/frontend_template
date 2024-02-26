import React ,{useEffect} from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { listProductDetails } from "../actions/productActions";
function ProductScreen() {
  const productId = useParams().id;

  const dispatch = useDispatch()


  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    dispatch(listProductDetails(productId));
  }, [dispatch, productId]);



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
        </>
      )}
    </div>
  );
}

export default ProductScreen;
