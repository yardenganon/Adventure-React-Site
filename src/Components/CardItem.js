import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ItemCarousel from './ItemCarousel';
import ItemModal from './ItemModal';

function CardItem(props) {
  const [item, setItem] = React.useState(props.item);
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <ItemModal
        {...props}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <li className='cards__item'>
        <Link
          className='cards__item__link'
          to={props.path}
          onClick={() => setModalShow(true)}
        >
          <ItemCarousel item={item} />
          <div className='cards__item__info'>
            <span>
              <h5 className='cards__item__text'>{item.title}</h5>
              <p style={{ color: '#252e48' }}>{item.text}</p>
              <h5>{item.price} ₪</h5>
            </span>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;
