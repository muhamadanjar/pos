
import { BrowserRouter } from "react-router";
import { AppRouting } from "./routes";

import { Toaster } from "@/components/ui/sonner";

const { BASE_URL } = import.meta.env;

console.log(BASE_URL);

function App() {
  return (
    <BrowserRouter>
      <AppRouting />
      <Toaster />
    </BrowserRouter>
  )
}

export default App
