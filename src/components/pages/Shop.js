import React, { Fragment } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import * as mutations from '../../graphql/mutations';

export const Shop = () => {
 
  // WORKING API CALL to DynamoDB
  const createCustomerMutation = async () => {
    try {
      await API.graphql(graphqlOperation(
        mutations.createCustomer,
        {input: {}},
        ));   
    } catch (error) {
      console.log(error);
    }
  };  

  // const getCustomer = async () => {
  //   try {
  //     await API.graphql(graphqlOperation(
  //       queries.getCustomer,
  //       {input: {id: "d8007083-335c-48bb-87e0-1188d9f7c0d3"}},
  //       ));   
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };  

  return (
    <Fragment>

      <div className="pricing-table">
        <div className="pricing-card">
          <h3 className="pricing-card-header">Zertifiziert</h3>
          <div className="price"><sup>€</sup>69</div>
          <ul>
          <li><strong>8</strong> Kurseinheiten</li>
            <li><strong>30 Min</strong> pro Kurseinheit</li>
            <li><strong>Kostenerstattung</strong> Bis zu 100%*</li>
            <li><strong>Chat</strong> per Email</li>
            <li><strong>Feedback</strong> Pro Kurseinheit</li>
            <li><strong>Zeitraum</strong> 12 Wochen </li>
          </ul>
          <a href="/shop" className="order-btn" onClick={createCustomerMutation}>Jetzt kaufen</a>
        </div>

        <div className="pricing-card">
          <h3 className="pricing-card-header">Basis</h3>
          <div className="price"><sup>€</sup>29</div>
          <ul>
            <li><strong>8</strong> Kurseinheiten</li>
            <li><strong>30 Min</strong> pro Kurseinheit</li>
            <li><strong>Kostenerstattung</strong> - nicht möglich</li>
            <li><strong>Chat</strong> - nicht enthalten</li>
            <li><strong>Feedback</strong> Pro Kurseinheit</li>
            <li><strong>Zeitraum</strong> Beliebig* </li>
          </ul>
          <a href="/shop" className="order-btn">Jetzt kaufen</a>
        </div>
      </div>
    </Fragment>
  );
};

// export const Purchase= () => {
//   return (
//     <div className='shop'>
//       <h1 className='h1'>Einkauf</h1>
//     </div>
//   );
// };

// export const Billing = () => {
//   return (
//     <div className='shop'>
//       <h1 className='h1'>Deine Rechnungen</h1>
//     </div>
//   );
// };
