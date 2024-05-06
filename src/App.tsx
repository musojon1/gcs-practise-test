import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { routes } from "./routes/routes";
import { Main } from "./styles";
import Register from "./pages/register";
import Navbar from "./components/nav/Navbar";

const Private = lazy(() => import("./routes/private"));
const Loader = lazy(() => import("./components/loader"));

function App() {
  return (
    <Suspense
      fallback={
        <Main>
          <Loader />
        </Main>
      }
    >
      <Routes>
        <Route path="/login" element={<Register />} />
        {routes?.map(({ path, component: Component }) => (
          <Route
            key={path}
            path={path}
            element={
              <Private>
                <Navbar />
                <Component />
              </Private>
            }
          />
        ))}
      </Routes>
    </Suspense>
  );
}

export default App;
