import type { ReactNode } from "react";
import { store } from "../config/store";
import { Provider } from "react-redux";

interface IStoreProviderProps {
  children: ReactNode;
}

export const StoreReduxProvider = ({ children }: IStoreProviderProps) => {
  return <Provider store={store}>{children}</Provider>;
};
