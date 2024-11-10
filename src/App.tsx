import { Outlet } from "react-router-dom";

import flower from "/flower_final.png";

const App = () => {
  return (
    <>
      <div className="decoration-container">
        <img className="decoration-flower" src={flower} alt="Decorative Flower" />
      </div>

      <Outlet />
    </>
  )
}

export default App
