import { RouterProvider } from "react-router-dom";
import SocialBar from "./components/SocialBar/SocialBar";
import { router } from "./Routers/Routes";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="max-w-screen-xl mx-auto">
      <Toaster/>
      <SocialBar/>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
