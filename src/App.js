import { RouterProvider } from "react-router-dom";
import { router } from "./Routers/Routes";
import { Toaster } from "react-hot-toast";
import './App.css'
import SocialBar from "./components/SocialBar/SocialBar";

function App() {
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="fixed bottom-5 right-5 z-50">
          <SocialBar/>
      </div>
      <Toaster/>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
