
import './App.css';
import { SplitScreen } from './cmps/layout-cmp/SplitScreen';

const Left = ({ name }:{name: string}) => <h1 style={{'backgroundColor': 'red'}}>{name}</h1>
const Right = ({ message }: {message: string}) => <p style={{'backgroundColor': 'green'}}>{message}</p>


function App() {
  return (
    <div className="App">
      <SplitScreen leftWeight={1} rightWeight={3} >
        <Left name={'Ori'} />
        <Right message={'Hello'} />
      </SplitScreen>
    </div>
  );
}

export default App;
