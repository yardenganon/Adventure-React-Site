import React from 'react';
import '../../App.css';
import Cards from '../Cards';

export default function Products(props) {
  const [state, setState] = React.useState({
    ...props.item,
  });
  return <Cards />;
}
