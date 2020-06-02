// Set your secret key. Remember to switch to your live secret key in production!
// See your keys here: https://dashboard.stripe.com/account/apikeys
const stripe = require('stripe')('sk_test_Zk6Sn8a5xMIzjU1MSMzbfusB00Z0bKupYV');

async function createCustomer() {
  // Create a new customer object
  const customer = await stripe.customers.create({
    email: 'test@example.com',
  });
  console.log(customer);
}

createCustomer();
