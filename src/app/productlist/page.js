// "use client";
// import React, { useEffect ,useState} from "react";

// const ProductList = () => {
//     const [list, setList] = useState([])
//   useEffect(() => {
//     dataGet();
//   }, []);
//   async function dataGet() {
//     let data = await fetch("https://dummyjson.com/products");
//     let res = await data.json();
//     setList(res.products)
//     console.log("---", res);
//   }

//   return (
//     <div>
//       <h1>Products</h1>
//       {
//         list.map((item, index)=><h6 key={index}>{item.title}</h6>)
//       }
//     </div>
//   );
// };

// export default ProductList;
import Product from "./product";
async function productList(){
  let data = await fetch("https://dummyjson.com/products")
  data = await data.json();
  return data.products
}

export default async function Page(){
  let products = await productList();
  console.log(products);
  return (<div>
    {
      products.map ((item) => (<div key={item.title}> <h3>name : {item.title}</h3>
      <Product price = {item.price}/>
      </div>))
    }
  </div>)
}
