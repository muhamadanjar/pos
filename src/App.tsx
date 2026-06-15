
import { BrowserRouter } from "react-router";
import { AppRouting } from "./routes";

const { BASE_URL } = import.meta.env;

console.log(BASE_URL);

function App() {
  return (
    <BrowserRouter>
      <AppRouting/>
    </BrowserRouter>
  )
}

export default App
