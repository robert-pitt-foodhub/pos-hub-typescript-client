export * from "./generated/index.schemas";
export * from "./generated/index";

import { useGetV1ResellersResellerId } from "./generated/index";

const resellerLocations = useGetV1ResellersResellerId("resellerId", {
  axios: {},
  query: {},
});
