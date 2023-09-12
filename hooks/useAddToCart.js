import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/cart.slice";
import Toast from "react-native-toast-message";

const useAddToCart = () => {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    const exist = cartItems?.find((item) => item.id === product.id);

    if (exist) {
      Toast.show({
        type: "success",
        text2: `Quantity of Product ${exist?.title} incremented in your cart.`,
      });
      dispatch(addToCart(product));
    } else {
      dispatch(addToCart(product));
      Toast.show({
        type: "success",
        text2: `Product ${product?.title} added to your cart`,
      });
    }
  };

  return { handleAddToCart };
};

export default useAddToCart;
