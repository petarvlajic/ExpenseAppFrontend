import { Outlet } from 'react-router-dom';
import Sidenav from './components/Sidenav';

function App() {
  return (
    <main className="flex">
      <Sidenav />
      <div className="my-11 mr-9 rounded-md bg-[#0b0b0b] flex-1 p-10 pt-12">
        <div id="detail">
          <Outlet />
        </div>
        {/* <Home /> */}
      </div>
    </main>
  );
}

export default App;
