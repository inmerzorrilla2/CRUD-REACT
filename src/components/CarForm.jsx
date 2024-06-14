import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

const CarForm = ({createCar, update, updateCar, setUpdate, isShow, setIsShow}) => {

    const {handleSubmit, register, reset} = useForm();

    useEffect(() => {
      reset(update);
    }, [update]);

    const submit = (data) => {
        if (update) {
            updateCar('/cars', update.id, data);
            setUpdate();
        } else {
            createCar('/cars', data);
        }
        reset({
            brand: '',
            model: '',
            color: '',
            year: '',
            price: '',
        });
        setIsShow(false);
    }

    const handleClose = () => {
        reset({
            brand: '',
            model: '',
            color: '',
            year: '',
            price: '',
        });
        setIsShow(false);
    }

  return (
    <div className={`carform ${isShow && 'active'}`}>
        <form className='carform__form' onSubmit={handleSubmit(submit)}>
            <button onClick={handleClose} className='carform__btn' type='button'>X</button>
            <div className='carform__item'>
                <label htmlFor="brand">Brand</label>
                <input {...register('brand')} id='brand' type="text" autoFocus/>
            </div>
            <div className='carform__item'>
                <label htmlFor="model">Model</label>
                <input {...register('model')} id='model' type="text" />
            </div>
            <div className='carform__item'>
                <label htmlFor="color">Color</label>
                <input {...register('color')} id='color' type="text" />
            </div>
            <div className='carform__item'>
                <label htmlFor="year">Year</label>
                <input {...register('year')} id='year' type="number" />
            </div>
            <div className='carform__item'>
                <label htmlFor="price">Price</label>
                <input {...register('price')} id='price' type="number" />
            </div>
            <button>Send</button>
        </form>
    </div>
  )
}

export default CarForm;