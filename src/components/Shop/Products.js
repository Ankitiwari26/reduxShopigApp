import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCT = [
  {
    id: "p1",
    price: 6,
    title: "The Book",
    description: "Best Book ever written",
  },
  {
    id: "p2",
    price: 16,
    title: "The Car",
    description: "Best Car ever written",
  },
  {
    id: "p3",
    price: 19,
    title: "The Bike",
    description: "Best bike ever written",
  },
  {
    id: "p4",
    price: 20,
    title: "The Plane",
    description: "Best Plane ever written",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCT.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
