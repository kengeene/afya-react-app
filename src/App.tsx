import '@/assets/css/App.css'
import SideBar from '@/components/SideBar/index';

function App() {
  return (
    <div className="h-screen w-screen bg-gray-300 p-10">
      <h1>Analytics</h1>
      <div className="grid grid-cols-3 gap-10 h-full">
        <SideBar />
        <div className="col-span-2 bg-white p-5 rounded-lg grid grid-cols-3 gap-10">
          <div className="col-span-3">1</div>
          <div className="col-span-3">2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
          <div className="col-span-3">6</div>
        </div>
      </div>
    </div>
  );
}

export default App
