import Product from "./Product.jsx";

function ProductTab() {
  //passing array in props
  // let options = ["hi-tech", "durable", "fast"];
  let styles = {
    display: "flex",
    flexWrap: "wrap",
    justifyCntent: "center",
    alignItems: "center",
  };
  return (
    <>
      {/* <Product title="phone" price={30000} features={options} />
      <Product title="pen" price={15} />
      <Product title="laptop" price={80000} /> */}
      <div style={styles}>
        <Product title="master pen" idx={0} />
        <Product title="dell" idx={1} />
        <Product title="zebronics" idx={2} />
        <Product title="zerodha" idx={3} />
      </div>
    </>
  );
}
export default ProductTab;
