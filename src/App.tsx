
import './App.css';
import { SplitScreen } from './cmps/layout-cmp/SplitScreen';
import { Modal } from './cmps/Modal';
import { NumberedList } from './cmps/NumberedList';
import { LargePersonListItem } from './cmps/people/LargePersonListItem';
import { SmallPersonListItem } from './cmps/people/SmallPersonListItem';
import { LargeProductListItem } from './cmps/product/LargeProductListItem';
import { SmallProductListItem } from './cmps/product/SmallProductListItem';
import RegularList from './cmps/RegularList';

const people = [{
  name: 'John Doe',
  age: 54,
  hairColor: 'brown',
  hobbies: ['swimming', 'bicycling', 'video games'],
}, {
  name: 'Brenda Smith',
  age: 33,
  hairColor: 'black',
  hobbies: ['golf', 'mathematics'],
}, {
  name: 'Jane Garcia',
  age: 27,
  hairColor: 'blonde',
  hobbies: ['biology', 'medicine', 'gymnastics'],
}];

const products = [{
  name: 'Flat-Screen TV',
  price: '$300',
  description: 'Huge LCD screen, a great deal',
  rating: 4.5,
}, {
  name: 'Basketball',
  price: '$10',
  description: 'Just like the pros use',
  rating: 3.8,
}, {
  name: 'Running Shoes',
  price: '$120',
  description: 'State-of-the-art technology for optimum running',
  rating: 4.2,
}];

const Left = ({ name }: { name: string }) => <h1 style={{ 'backgroundColor': 'red' }}>{name}</h1>
const Right = ({ message }: { message: string }) => <p style={{ 'backgroundColor': 'green' }}>{message}</p>

function App() {
  return (
    <>
      <Modal>
        <LargeProductListItem product={products[0]} />
      </Modal>


    </>

  );
}

export default App;
