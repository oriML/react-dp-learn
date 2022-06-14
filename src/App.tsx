
import './App.css';
import { SplitScreen } from './cmps/layout-cmp/SplitScreen';

const Left = () => <h1 style={{'backgroundColor': 'red'}}>Left</h1>
const Right = () => <p style={{'backgroundColor': 'green'}}>Right</p>


function App() {
  return (
    <div className="App">
      <SplitScreen 
        left={Left}
        right={Right}
        leftWeight={1}
        rightWeight={3}
        />
    </div>
  );
}

export default App;
