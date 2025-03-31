export default {
  "react-query": {
    input: "https://api.tryposhub.com/docs/specification.json",
    validation: true,
    output: {
      mode: "split",
      target: "./packages/react-query/src/generated/index.ts",
      client: "react-query",
      override: {
        query: {
          useQuery: true,
          useInfinite: true,
          useInfiniteQueryParam: "nextPageKey",
          options: { staleTime: 30_000 },
        },
      },
    },
  },
  axios: {
    input: "https://api.tryposhub.com/docs/specification.json",
    validation: true,
    output: {
      mode: "split",
      target: "./packages/axios/src/generated/index.ts",
      client: "axios",
    },
  },
};
