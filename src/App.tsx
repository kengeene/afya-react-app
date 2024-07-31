import '@/assets/css/App.css'
import SideBar from '@/components/SideBar/index';
import MainContent from '@/components/MainContent/index';

function App() {
  return (
    <div className="h-full w-screen bg-gray-200 p-10">
      <h1>Analytics</h1>
      <div className="grid grid-cols-4 gap-10 h-full">
        <SideBar />
        <MainContent />
      </div>
    </div>
  );
}

export default App
