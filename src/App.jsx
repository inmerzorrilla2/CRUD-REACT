
import { useEffect, useState } from 'react';
import './App.css';
import useCRUD from './hooks/useCRUD';
import CarInfo from './components/CarInfo';
import CarForm from './components/CarForm';

function App() {

  const [update, setUpdate] = useState();
  const [isShow, setIsShow] = useState(false);
  const [cars, getCars, createCar, deleteCar, updateCar] = useCRUD();

  useEffect(() => {
    getCars('/cars');
  }, []);

  const handleForm = () => {
    setIsShow(true);
  }
  
  // console.log(cars);

  return (
    <div className='app'>
      <header className='app__header'>
        <h1 className='app__title'>Crud-Cars</h1>
        <button className='app__btn' onClick={handleForm}>Create Car</button>
      </header>
      <CarForm
        createCar={createCar}
        update={update}
        updateCar={updateCar}
        setUpdate={setUpdate}
        isShow={isShow}
        setIsShow={setIsShow}
      />
      <div className='app__container'>
        {
          cars?.map((car) => (
            <CarInfo
              key={car.id}
              car={car}
              deleteCar={deleteCar}
              setUpdate={setUpdate}
              setIsShow={setIsShow}
            />
          ))
        }
      </div>
    </div>
  )
}

export default App;
