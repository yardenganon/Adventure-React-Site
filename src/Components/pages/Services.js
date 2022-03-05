import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../../App.css';
import ModalBtn from '../Modal';
import {
  Figure,
  Dropdown,
  DropdownButton,
  Form,
  Row,
  Col,
  Button,
  Container,
} from 'react-bootstrap';

export default function Services() {
  const [items, setItems] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    getItemsFromServer();
  }, []);

  const getItemsFromServer = async () => {
    const items = await axios.get('http://localhost:3000/api/item/all');
    console.log(items.data);
    setItems(items.data);
    setSelectedItem(items.data[0]);
    if (items.data && items.data[0] && items.data[0].images)
      setSelectedImage(items.data[0].images[0]);
  };

  const onClickDeleteItem = async (e) => {
    axios
      .post('http://localhost:3000/api/item/delete', { _id: selectedItem._id })
      .then((res) => {
        console.log(res);
      });
  };

  const onClickUpdateItem = async (e) => {
    axios
      .post('http://localhost:3000/api/item', { ...selectedItem })
      .then((res) => console.log(res));
  };

  return (
    <div>
      <div style={{ marginTop: '2%', marginLeft: '5%', marginRight: '5%' }}>
        <Form>
          <Row className='mb-3'>
            <DropdownButton
              variant='light'
              onSelect={(eventKey, event) => {
                setSelectedItem(items[event.target.id]);
                if (items[event.target.id].images)
                  setSelectedImage(items[event.target.id].images[0]);
              }}
              id='dropdown-basic-button'
              title={selectedItem ? selectedItem.title : 'Select item'}
            >
              {items &&
                items.map((item, index) => {
                  return (
                    <Dropdown.Item id={index} key={item._id}>
                      {item.title}
                    </Dropdown.Item>
                  );
                })}
            </DropdownButton>
          </Row>

          <Row>
            <Row className='mb-3'>
              <Col>
                {selectedImage ? (
                  <Figure.Image width='800' height='400' src={selectedImage} />
                ) : (
                  'No images to display...'
                )}
              </Col>
            </Row>
            <Row xs='auto'>
              {selectedItem &&
                selectedItem.images.map((image, index) => {
                  return (
                    <Col className='mr-3'>
                      <Button
                        style={{ position: 'absolute', margin: '5px' }}
                        variant='danger'
                        size='sm'
                        onClick={async (e) => {
                          let images = [...selectedItem.images];
                          images = images.filter(
                            (selectedItemImage) => selectedItemImage != image
                          );
                          const updatedSelectedItem = {
                            ...selectedItem,
                            images: images,
                          };

                          setSelectedItem(updatedSelectedItem);
                          if (images.length > 0) setSelectedImage(images[0]);
                          else setSelectedImage(null);
                          console.log(selectedItem);
                        }}
                      >
                        x
                      </Button>
                      {selectedItem &&
                      selectedItem.images &&
                      selectedItem.images.length > 0 ? (
                        <Figure.Image
                          width='200'
                          height='150'
                          src={image}
                          onClick={(e) => setSelectedImage(image)}
                          rounded
                        />
                      ) : null}
                    </Col>
                  );
                })}
            </Row>
          </Row>

          <Row>
            <Form.Group
              as={Col}
              className='mb-3'
              controlId='exampleForm.ControlInput1'
            >
              <Form.Label>Title</Form.Label>
              <Form.Control
                type='text'
                defaultValue={selectedItem && selectedItem.title}
                onChange={(e) =>
                  setSelectedItem({ ...selectedItem, title: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group
              as={Col}
              className='mb-3'
              controlId='exampleForm.ControlInput1'
            >
              <Form.Label>ID</Form.Label>
              <Form.Control
                type='text'
                value={selectedItem ? selectedItem._id : 'Loading...'}
                readOnly
              />
            </Form.Group>
          </Row>
          <Row className='mb-3'>
            <Form.Group as={Col} controlId='formGridCity'>
              <Form.Label>Price</Form.Label>
              <Form.Control
                defaultValue={selectedItem && selectedItem.price}
                onChange={(e) =>
                  setSelectedItem({ ...selectedItem, price: e.target.value })
                }
              />
            </Form.Group>

            <Form.Group as={Col} controlId='formGridState'>
              <Form.Label>Currency</Form.Label>
              <Form.Select defaultValue='Choose...'>
                <option>₪</option>
                <option>$</option>
                <option>€</option>
                <option>£</option>
              </Form.Select>
            </Form.Group>

            <Form.Group as={Col} controlId='formGridCity'>
              <Form.Label>Stock</Form.Label>
              <Form.Control
                defaultValue={selectedItem && selectedItem.stock}
                onChange={(e) =>
                  setSelectedItem({ ...selectedItem, stock: e.target.value })
                }
              />
            </Form.Group>
          </Row>
          <Row>
            <Form.Group
              className='mb-3'
              controlId='exampleForm.ControlTextarea1'
            >
              <Form.Label>Text</Form.Label>
              <Form.Control
                as='textarea'
                rows={3}
                defaultValue={selectedItem && selectedItem.text}
                onChange={(e) =>
                  setSelectedItem({ ...selectedItem, text: e.target.value })
                }
              />
            </Form.Group>
          </Row>
          <Container>
            <Row className='justify-content-md-center mb-5'>
              <Col xs lg='2'>
                <ModalBtn
                  btnText='Update Item'
                  title='Update Item'
                  text='Are you sure you want to update that item?'
                  id='updateItemBtn'
                  variant='primary'
                  onClickOk={(e) => onClickUpdateItem(e)}
                >
                  Update Item
                </ModalBtn>
              </Col>
              <Col xs lg='2'></Col>
              <Col xs lg='2'>
                <ModalBtn
                  btnText='Delete Item'
                  title='Delete Item'
                  text='Are you sure you want to delete that item?'
                  id='deleteItemBtn'
                  variant='danger'
                  onClickOk={(e) => onClickDeleteItem(e)}
                >
                  Delete Item
                </ModalBtn>
              </Col>
            </Row>
          </Container>
        </Form>
      </div>
    </div>
  );
}
