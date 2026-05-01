import "./App.css";
import RouterProvider from "./routes/routes";
import { injectSpeedInsights } from "@vercel/speed-insights";
function App() {
  injectSpeedInsights();
  return (
    <>
      <RouterProvider />
    </>
  );
}

export default App;
