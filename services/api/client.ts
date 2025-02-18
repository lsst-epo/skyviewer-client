import merge from "lodash/merge";
import { cacheExchange, createClient, fetchExchange } from "@urql/core";
import type { AnyVariables, DocumentInput, OperationResult } from "@urql/core";
import { registerUrql } from "@urql/next/rsc";

const API_URL = process.env.NEXT_PUBLIC_API_URL as string;

interface QueryProps<T, P> {
  query: DocumentInput<T, P>;
  variables: P;
  previewToken?: string;
  fetchOptions?: RequestInit;
}

type APIClient = <Query, Variables extends AnyVariables = AnyVariables>(
  props: QueryProps<Query, Variables>
) => Promise<OperationResult<Query, Variables>>;

const queryAPI: APIClient = async ({
  query,
  variables,
  fetchOptions: inputFetchOptions,
  previewToken,
}) => {
  const url = previewToken ? `${API_URL}?token=${previewToken}` : API_URL;

  const defaultFetchOptions: RequestInit = {
    cache: "force-cache",
    next: {
      revalidate: previewToken ? 0 : undefined,
    },
  };
  const fetchOptions = merge({}, defaultFetchOptions, inputFetchOptions);

  if (typeof fetchOptions.next?.revalidate === "undefined") {
    delete fetchOptions.cache;
  }

  const makeClient = () => {
    return createClient({
      url,
      exchanges: [cacheExchange, fetchExchange],
      fetchOptions,
    });
  };

  const { getClient } = registerUrql(makeClient);

  return await getClient()
    .query(query, variables)
    .toPromise()
    .then((result) => {
      // https://formidable.com/open-source/urql/docs/basics/errors/
      if (result.error) {
        console.warn(result.error.message);

        // TODO: refresh token & rerun request if expired token error
        if (result.error.networkError) {
          process.exitCode = 1;
        }
      }

      return result;
    });
};

export default queryAPI;
