import './styles/index.css';

import { AppRouter } from "./routes/AppRouter";
import { AppProvider } from './components/context/AppContext';

function App() {
  return (
    <div className="App">
      <AppProvider>
        <AppRouter />
      </AppProvider>
    </div>
  );
}

export default App;
