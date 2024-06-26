// import { useDispatch, useSelector } from "react-redux";
// import Card from "../UI/Card";
// import classes from "./Cart.module.css";
// import CartItem from "./CartItem";
// import { cartActions } from "../../store/cart-slice";

// const Cart = (props) => {
//   const dispatch = useDispatch();
//   const cartItem = useSelector((state) => state.cart.items);

//   return (
//     <Card className={classes.cart}>
//       <h2>Your Shopping Cart</h2>
//       <ul>
//         {cartItem.map((item) => (
//           <CartItem
//             key={item.id}
//             item={{
//               id: item.id,
//               title: item.name,
//               quantity: item.quantity,
//               total: item.totalPrice,
//               price: item.price,
//             }}
//           />
//         ))}
//       </ul>
//     </Card>
//   );
// };

// export default Cart;

import { useSelector } from "react-redux";

import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            item={{
              id: item.id,
              title: item.name,
              quantity: item.quantity,
              total: item.totalPrice,
              price: item.price,
            }}
          />
        ))}
      </ul>
    </Card>
  );
};

export default Cart;
