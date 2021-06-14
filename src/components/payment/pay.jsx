// import React, { useState } from "react";
// // import logo from "./logo.svg";
// import "./Payment.css";
// import Navbar from "../navbar/Navbar"
// import StripeCheckout from "react-stripe-checkout";

// function Payment() {
//   const [product, setProduct] = useState({
//     name: "React from FB",
//     price: 10,
//     productBy: "facebook"
//   });

//   const makePayment = token => {
//     const body = {
//       token,
//       product
//     };
//     const headers = {
//       "Content-Type": "application/json"
//     };

//     return fetch(`http://localhost:8080/payment`, {
//       method: "POST",
//       headers,
//       body: JSON.stringify(body)
//     })
//       .then(response => {
//         console.log("RESPONSE ", response);
//         const { status } = response;
//         console.log("STATUS ", status);
//       })
//       .catch(error => console.log(error));
//   };

//   return (
//       <>
//       <Navbar />
//     <div className="App">
//       <header className="App-header">
//         {/* <img src={logo} className="App-logo" alt="logo" /> */}

//         <a
//           className="App-link"
//           href="#"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           {/* Learn React */}
//         </a>
//         <StripeCheckout  
//         // className="container"
//           // stripeKey={process.env.REACT_APP_KEY}
//           token={makePayment}// yeh jaruuri h
//           name="Buy React"
//           amount={product.price * 100}
//           shippingAddress
//           billingAddress
//         >
//            {/* <button className="btn-large blue" style={{justifyContent: 'center'}}  > */}
//            {/* <button className="btn-large" style={{margin: "0 auto"}}>

//            Pay 
//             {/* react is just {product.price} $ */}
//           {/* </button>  */} 

//         </StripeCheckout>
//       </header>
//     </div>
//     </>
//   );
// }

// export default Payment;


// useRouter.js se header


// //  router.post("/payment", (req, res) => {
// //     const { product, token } = req.body;
// //     console.log("PRODUCT ", product);
// //     console.log("PRICE ", product.price);
// //     const idempontencyKey = uuid();
  
// //     return stripe.customers
// //       .create({
// //         email: token.email,
// //         source: token.id
// //       })
// //       .then(customer => {
// //         stripe.charges.create(
// //           {
// //             amount: product.price * 100,
// //             currency: "usd",
// //             customer: customer.id,
// //             receipt_email: token.email,
// //             description: `purchase of ${product.name}`,
// //             shipping: {
// //               name: token.card.name,
// //               address: {
// //                 country: token.card.address_country
// //               }
// //             }
// //           },
// //           { idempontencyKey }
// //         );
// //       })
// //       .then(result => res.status(200).json(result))
// //       .catch(err => console.log(err));
// //   });
// // Add headers


// // import React from 'react';
// // import { render } from 'react-dom';

// class Button extends React.Component {

//   constructor(props) {
//     super(props);
//     this.handleClick = this.handleClick.bind(this);
//     this.state = { random: 0 };
//   }

//   handleClick() {
//     const min = 1;
//     const max = 100;
//     const rand = min + Math.random() * (max - min);
//     this.setState({ random: this.state.random + rand });
//   }

//   render() {
//     return (
//       <div>
//         <button onClick={this.handleClick.bind(this)}>Click</button>
//         <div>The number is: {this.state.random}</div>
//       </div>
//     );
//   }
// }

// render(<Button />, document.getElementById('container'));
