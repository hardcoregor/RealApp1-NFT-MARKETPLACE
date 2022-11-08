import useSWR from "swr";
import { CryptoHookFactory } from "../../../types/hooks";

export const hookFactory: CryptoHookFactory = (deps) => (params) => {
  const swrRes = useSWR("web3/useAccount", () => {
    console.log(deps);
    console.log(params);
    return "Hello User"
  })

  return swrRes;
}

export const useAccount = hookFactory({ ethereum: undefined, provider: undefined});