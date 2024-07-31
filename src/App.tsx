import '@/assets/css/App.css'
import SideBar from '@/components/content/SideBar';

function App() {
  return (
    <div className="h-screen w-screen bg-gray-300 p-10">
      <h1>Analytics</h1>
      <div className="grid grid-cols-3 gap-10 h-full">
        <SideBar/>
        <div className="col-span-2 bg-white p-5 rounded-lg">content</div>
      </div>
    </div>
  );
}

export default App
