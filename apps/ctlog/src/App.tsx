import { HomePage } from "./pages/HomePage";
import { StoreReduxProvider } from "./redux/ui/StoreProvider";

function App() {
  return (
    <StoreReduxProvider>
      <HomePage />
    </StoreReduxProvider>
  );
}

export default App;
