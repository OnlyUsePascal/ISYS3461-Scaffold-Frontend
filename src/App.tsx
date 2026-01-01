import { BrowserRouter, Route, Routes } from "react-router";
import AlphaPage from "./domains/alpha/alpha-page";
import SignInPage from "./domains/auth/login-page";
import Layout from "./layouts/layout";
import ErrorPage from "./components/page/error-page";
import { ERRORS, ROUTES } from "./utils/constants";
import ProtectedRoute from "./routes/protected-route";
import BetaPage from "./domains/beta/beta-page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.LANDING} element={<Layout />}>
          <Route
            index
            element={
              <ProtectedRoute>
                <AlphaPage />
              </ProtectedRoute>
            }
          />
          <Route path={ROUTES.ALPHA} element={<AlphaPage />} />
          <Route path={ROUTES.BETA} element={<BetaPage />} />
          <Route path={ROUTES.LOGIN} element={<SignInPage />} />
          <Route path="*" element={<ErrorPage {...ERRORS.NOT_FOUND} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
