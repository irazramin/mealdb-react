import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const MealDetails = () => {
  const {mealId} = useParams();
  const [singleMeal,setSingleMeal] = useState();

  useEffect(() =>{
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
    .then(res => res.json())
    .then(data => setSingleMeal(data))
  },[mealId])
  
  return <div>Meal Id : {singleMeal && singleMeal.meals[0].idMeal}</div>;
}

export default MealDetails