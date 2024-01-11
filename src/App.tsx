// COMPONENTS
import { Header } from '@components/Header/Header';

// ROUTES
import { AppRoutes } from '@routes/app.routes';

// APP
const App = () => {
  /* Renders */
  return (
    <>
      <Header />
      <AppRoutes />
    </>
  );
};

export default App;
