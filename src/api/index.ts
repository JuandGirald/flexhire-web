import { request } from "graphql-request";

const _request = async (apiKey: string, query: any, variables?: any) => {
  return await request({
    url: `${process.env.REACT_APP_API_URL}`,
    document: query,
    variables,
    requestHeaders: {
      "FLEXHIRE-API-KEY": apiKey,
    },
  });
};

const client = { request: _request };
export default client;
