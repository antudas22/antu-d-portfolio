import { RouterProvider } from "react-router-dom";
import SocialBar from "./components/SocialBar/SocialBar";
import { router } from "./Routers/Routes";

function App() {
  return (
    <div className="max-w-screen-xl mx-auto">
      
      <SocialBar/>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
