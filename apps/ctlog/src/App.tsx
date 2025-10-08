import i18next from "i18next";
import { HomePage } from "./pages/HomePage";
import { StoreReduxProvider } from "./redux/ui/StoreProvider";
import { I18nextProvider } from "react-i18next";

function App() {
  return (
    <I18nextProvider i18n={i18next}>
      <StoreReduxProvider>
        <HomePage />
      </StoreReduxProvider>
    </I18nextProvider>
  );
}

export default App;
