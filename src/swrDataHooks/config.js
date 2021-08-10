import { defaultFetcher } from "./fetchers";

export default {
  fetcher: defaultFetcher,
  refreshInterval: 300000,
  dedupingInterval: 30000,
  errorRetryInterval: 10000,
  errorRetryCount: 3,
};