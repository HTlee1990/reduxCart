import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    title: "My First book",
    price: 6,
    description: "This is a first product - amazing!",
  },
  {
    title: "The book",
    price: 300,
    description: "This is The BOOK!",
  },
  {
    title: "My dog's poop",
    price: 2,
    description: "This is My dog's poop!",
  },
  {
    title: "My labtop",
    price: 100,
    description: "This is a labtop",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((i, idx) => {
          return (
            <ProductItem
              key={i.idx}
              title={i.title}
              price={i.price}
              description={i.description}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default Products;
