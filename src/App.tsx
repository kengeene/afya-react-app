import SideBar from '@/components/sideBar/index';
import MainContent from '@/components/mainContent/index';

function App() {
  return (
    <div className="w-full bg-gray-200 p-10 h-screen">
      <div className='text-2xl my-10 font-bold'>Analytics</div>
      <div className="grid grid-cols-4 gap-10 h-full">
        <SideBar />
        <MainContent />
      </div>
    </div>
  );
}

export default App
