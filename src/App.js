import { Route, Routes } from 'react-router-dom';
import './App.css';
import ErrorPage from './components/ErrorPage/ErrorPage';
import MealDetails from './components/MealDetails/MealDetails';
import Meals from './components/meals/Meals';

function App() {
  return (
    <div className='App container'>
      <Routes>
        <Route path='/' element={<Meals />}></Route>
        <Route path='/meals' element={<Meals />}></Route>
        <Route path='meals/:mealId' element={<MealDetails />}></Route>
        <Route path='*' element={<ErrorPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
