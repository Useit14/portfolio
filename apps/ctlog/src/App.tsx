import { HomePage } from "./pages/HomePage";
import { StoreReduxProvider } from "./redux/ui/StoreProvider";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n"; // Важно импортировать именно i18n, а не i18next

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <StoreReduxProvider>
        <HomePage />
      </StoreReduxProvider>
    </I18nextProvider>
  );
}

export default App;
