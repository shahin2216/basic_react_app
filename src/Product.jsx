import "./Product.css";
import Price from "./Price.jsx";

function Product({ title, idx }) {
  // dynamic styling
  // let isDiscount = price > 30000;
  // let styles = { backgroundColor: isDiscount ? "skyblue" : "" };
  let oldPrices = ["12,495", "11,000", "5000", "6000"];
  let newPrices = ["9000", "45,000", "23,000", "10,000"];
  return (
    <div className="Product">
      <h4>{title}</h4>
      <p>Description</p>
      <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]} />
    </div>

    // <div className="Product" style={styles}>
    //   <h3>Title:{title}</h3>
    //   <h5>Price:{price}</h5>
    //   {/* conditional first */}
    //   {/* {price > 30000 ? <p>Discount of 5%</p> : null} */}
    //   {/* conditional second if first true second will not check */}
    //   {isDiscount && <p>Discount of 5%</p>}

    //   {/* <p>
    //     {Array.isArray(features)
    //       ? features.map((feature, index) => <li key={index}>{feature}</li>)
    //       : null}
    //   </p> */}
    // </div>
  );
}

export default Product;
