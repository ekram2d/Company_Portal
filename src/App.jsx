import { Outlet } from "react-router-dom";
import Navbar from "./pages/Header/Navbar";

function App() {
  return (
    <>
 <div className="w-[95%] mx-auto m-2 h-screen">
 <Navbar></Navbar>
 <Outlet></Outlet>
 </div>
      {/* <Footer/> */}
    </>
  );
}

export default App;
