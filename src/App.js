import Header from './Header';
import SearchItem from './SearchItem';
import AddItem from './AddItem';
import Content from './Content';
import Footer from './Footer';
import { useState, useEffect } from 'react';

function App() {

  const [items, setItems] = useState(JSON.parse(localStorage.getItem('shoppinglist')) || []);

  //   [
  //   {
  //     id: 1,
  //     checked: true,
  //     item: "One half pound bag of Cocoa"
  //   },
  //   {
  //     id: 2,
  //     checked: false,
  //     item: "Item 2"
  //   },
  //   {
  //     id: 3,
  //     checked: false,
  //     item: "Item 3"
  //   }
  // ]

  ;
  const [newItem, setNewItem] = useState('')
  const [search, setSearch] = useState('')

//console.log('before useEffect')

  // useEffect(() => {
  //   // every render runs
  //   console.log('inside useEffect')
  // },[items])

  //console.log('after useEffect')

  useEffect(() => {
    localStorage.setItem('shoppinglist', JSON.stringify(items));
  },[items])

  const addItem = (item) => {
    const id = items.length ? items[items.length -1].id + 1 : 1;
    const myNewItem = {id, checked: false, item};
    const listItems = [...items, myNewItem];
    setItems(listItems);
  }

  const handleCheck = (id) => {
    //console.log(`key: ${id}`)
    const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);
    setItems(listItems);
  }

  const handleDelete = (id) => {
    //console.log(id);
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!newItem) return;
    addItem(newItem);
    setNewItem('');
  }

  return (
    <div className="App">
      <Header title="Grocery List" />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItem 
      search={search}
      setSearch={setSearch}
      />
      <Content
        items={items.filter(item =>((item.item).toLowerCase()).includes(search.toLocaleLowerCase()))}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer length={items.length}></Footer>
    </div>
  );
}

export default App;
