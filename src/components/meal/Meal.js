
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './meal.css';
const Meal = (props) => {
  const navigate = useNavigate();
  const handleMeal = () =>{
    const path = `/meals/${props.meal.idMeal}` ;
    navigate(path)
  }
  return (
    <div className='meal-container' onClick={handleMeal}>
      <img src={props.meal.strMealThumb} alt='' />
      <h4>{props.meal.strMeal}</h4>
    </div>
  );
};

export default Meal