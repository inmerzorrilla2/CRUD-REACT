import React, { useState } from 'react';
import Modal from './Modal';

const CarInfo = ({car, deleteCar, setUpdate, setIsShow}) => {

    const [isOpen, setIsOpen] = useState(false);

    const handleUpdate = () => {
      setUpdate(car);
      setIsShow(true);
    }

    const handleDelete = () => {
        setIsOpen(true);
    }

    // tooltip popup

  return (
    <article className='carinfo'>
        <Modal
          car={car}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          deleteCar={deleteCar}
        />
        <h2>{car.brand} {car.model} # {car.id}</h2>
        <ul>
            <li><span>Color: </span><span>{car.color}</span></li>
            <li><span>Year: </span><span>{car.year}</span></li>
            <li><span>Price: </span><span>{car.price}</span></li>
        </ul>
        <div className='carinfo__buttons'>
          <button className='carinfo__btn-edit' onClick={handleUpdate}><ion-icon name="create-outline"></ion-icon></button>
          <button className='carinfo__btn-delete' onClick={handleDelete}><ion-icon name="trash-outline"></ion-icon></button>
        </div>
    </article>
  )
}

export default CarInfo;