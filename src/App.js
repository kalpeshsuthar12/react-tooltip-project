import './TooltipContent.css'
import './App.css';
import TooltipContent from './TooltipContent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* tooltip content=(tooltip hover content) */ }
        {/* tooltip position=(tooltip position like top, left, bottom, right) */ }
        <div class="tooltip">Hover over me
          <TooltipContent content="Thanks for hovering! I'm a tooltip Kalpesh" position="left"></TooltipContent>
        </div>
        {/* tooltip */ }
      </header>
    </div>
  );
}

export default App;
