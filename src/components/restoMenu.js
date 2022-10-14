import React from 'react'
import Navigation from './navbar'
import { Card } from 'react-bootstrap'
import {Button} from 'react-bootstrap'
import {Menu} from './restoMenuData'
import './restoMenu.css'


const RestoMenu = () => {
  return (
    <div className='bg-menu'>
        <div className='w-75 mx-auto'>
          <div className='d-flex justify-content-start title'>
            <h2 className='mt-5'>Geprek Bensu, Menus</h2>
          </div>
            <div className='row'>
              {Menu.map((item)=>{
                return(
                  <div className='col-lg-3 col-12 mt-4 mb-5'>
                    <Card style={{ width: '14rem' }}>
                      <Card.Img variant="top" src={item.image} />
                      <Card.Body>
                        <Card.Title>{item.name}</Card.Title>
                        <Card.Text className='text-red'>
                          {item.price}
                        </Card.Text>
                        <Button className='w-100 bg-order'>Order</Button>
                      </Card.Body>
                    </Card>
                  </div>
                )
              })}
            </div>
          </div>
    </div>
  )
}

export default RestoMenu;