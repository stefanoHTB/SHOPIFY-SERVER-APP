import { Shopify } from "@shopify/shopify-api";

const FETCH_ORDERS_QUERY = `{
    orders(first: 2) {
      edges {
        node {    
          id
        }
      }
    }
  }`

export default async function fetchOrders(session) {
    const client = new Shopify.Clients.Graphql(session?.shop, session?.accessToken)

    const res = await client.query({
        data: {
            query: FETCH_ORDERS_QUERY
        }
    });

    return res 

}