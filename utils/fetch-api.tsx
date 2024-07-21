

//TODO: Refactor to use dynamic urlParamsObject using the query object
    import qs from "query-string";
    import { getStrapiURL , getBackendURL} from "./api-helpers";
    
    export async function fetchAPI(
      path: string,
      urlParamsObject = {},
      options = {}
    ) {
      try {
        // Merge default and user options
        const mergedOptions = {
          next: { revalidate: 60 },
          headers: {
            "Content-Type": "application/json",
          },
          ...options,
        };
    
        // Build request URL
        const queryString = qs.stringify(urlParamsObject);
      //  console.log("decodedQUERY: ",decodedQuery)
        const requestUrl = `${getBackendURL(
          `${path}${queryString ? `?${queryString}` : ""}`
        )}`;
          
       // console.log("requestUrl",requestUrl)
        // Trigger API call
        const response = await fetch(requestUrl, mergedOptions);
        const data = await response.json();
        return data;
    
      } catch (error) {
        console.error(error);
        throw new Error(`Please check if your server is running and you set all the required tokens.`);
      }
    }