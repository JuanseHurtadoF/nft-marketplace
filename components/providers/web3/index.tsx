import {
  createContext,
  useState,
  useContext,
  FunctionComponent,
  useEffect,
} from "react";
import { createDefaultState, Web3State } from "./utils";

const Web3Context = createContext<Web3State>(createDefaultState());

interface Props {
  children: React.ReactNode;
}

const Web3Provider: FunctionComponent<Props> = ({ children }) => {
  const [web3Api, setWeb3Api] = useState<Web3State>(createDefaultState());

  useEffect(() => {
    const initWeb3 = () => {
      
      setWeb3Api({
        ethereum: window.ethereum,
        provider: null,
        contract: null,
        isLoading: true
      })

    }
  }, []);

  return (
    <Web3Context.Provider value={web3Api}>{children}</Web3Context.Provider>
  );
};

export function useWeb3() {
  return useContext(Web3Context);
}

export default Web3Provider;
