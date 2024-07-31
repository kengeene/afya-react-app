import '@/assets/css/App.css'
import { Button } from "@/components/ui/button";

function App() {
  return (
    <div className="h-screen w-screen bg-gray-100 px-10">
      <div className="grid grid-cols-3">
        <div>
          <Button variant="secondary">Add Assesment</Button>
        </div>
        <div>
          <Button variant="secondary">Secondary</Button>
        </div>
        <div>
          <Button variant="secondary">Secondary</Button>
        </div>
      </div>
      <div>Bottom Section</div>
    </div>
  );
}

export default App
