import '@/assets/css/App.css'
import SideBar from '@/components/SideBar/index';
import MainContent from '@/components/MainContent/index';

function App() {
  return (
    <div className="h-screen w-screen bg-gray-300 p-10">
      <h1>Analytics</h1>
      <div className="grid grid-cols-3 gap-10 h-full">
        <SideBar />
        <MainContent />
      </div>
    </div>
  );
}

export default App
