import React from 'react';
import CardItem from './CardItem';
import './Cards.css';
import axios from 'axios';

function Cards(props) {
  React.useEffect(() => {
    getItemsFromServer();
  }, []);

  const [items, setItems] = React.useState(null);

  const getItemsFromServer = async () => {
    const items = await axios.get('http://localhost:3000/api/item/all');
    console.log(items.data);
    setItems(items.data);
  };

  return (
    <div className='cards'>
      {props.latestPaintings ? <h1>My Latest Paintings</h1> : null}
      <div className='cards__container'>
        <div className='cards__wrapper'>
          {items &&
            items.map((item, idx) => {
              return idx % 2 === 0 ? (
                <ul className='cards__items' key={item._id}>
                  <CardItem item={item} path={'/products/' + item._id} />
                  {idx + 1 < items.length ? (
                    <CardItem
                      item={items[idx + 1]}
                      path={'/products/' + items[idx + 1]._id}
                    />
                  ) : null}
                </ul>
              ) : null;
            })}
        </div>
      </div>
    </div>
  );
}

export default Cards;
