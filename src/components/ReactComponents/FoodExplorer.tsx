import { useState } from 'react';
import ListItems from './ListItems';

export default function FoodExplorer({foods, defaultFood = ''}: props) {
  console.log(foods)
  const [currentFoodLabel, setCurrentFoodLabel] = useState(defaultFood);
  const foodLabels = foods.map(dish => dish.label);
  const currentFood = foods.find(dish => dish.label == currentFoodLabel)?.food ?? [];
  const defaultButtonClassName = 'unstyled-button food-explorer-button';
  return (
    <>
        <section className = 'food-explorer-header-wrapper'>
            <div className = 'food-explorer-navbar'>
                {foodLabels.map(label => {return(
                    <button key = {label} className = {getButtonClass(label)} onClick = {() => setCurrentFoodLabel(label)}>{label}</button>
                )})}
            </div>
        </section>


        <ul className = {`dishes`}>
            <ListItems items = {currentFood}/>
        </ul>
    </>
  )

  function getButtonClass(buttonLabel: string){
    if (buttonLabel === currentFoodLabel) return `${defaultButtonClassName} selected-label-button`
    return defaultButtonClassName; 
  }
}


type props = {
    foods: {label: string, food: dishType[]}[],
    defaultFood?: string
}

type dishType = {
  label: string,
  description: string
}
