import '@/assets/css/App.css'
import TopBar from './components/TopBar';

function App() {
  return (
    <div className="h-screen w-screen bg-gray-100 px-10">
    <TopBar/>
      <div>Bottom Section</div>
    </div>
  );
}

export default App
