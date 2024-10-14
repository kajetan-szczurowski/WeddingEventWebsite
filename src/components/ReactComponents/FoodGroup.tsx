import { useRef } from 'react'
import ListItems from './ListItems';

export default function FoodGroup({ foodGroup, expandedOnDefault, containerHeight}: props) {
  const ulRef = useRef<HTMLUListElement>(null);
  const h2Ref = useRef<HTMLHeadingElement>(null);
  const pointerRef = useRef<HTMLDivElement>(null);
  const h2ClassName = expandedOnDefault? 'foods-group-label dishes-header-selected' : 'foods-group-label';
  return (
    <>
            <h2 ref = {h2Ref} onClick = {handleExpand} className = {h2ClassName}>
                {foodGroup.label}
                <div ref = {pointerRef} className = 'dish-expand-pointer' style = {expandedOnDefault? {'transform': 'rotate(180deg)'}: {}}>▼</div>
            </h2>

        <ul ref = {ulRef} className = {`dishes`} style = {expandedOnDefault? {'height': containerHeight ?? 'auto'} : {'height': '0'}}>
          <ListItems items = {foodGroup.food}/>
        </ul>
    </>
  )

  function handleExpand(){
    if (!ulRef.current || !h2Ref.current || !pointerRef.current) return;
    const isUlExpanded = ulRef.current.clientHeight;
    ulRef.current.style.height = isUlExpanded?  '0' : containerHeight ?? 'auto';
    pointerRef.current.style.transform = isUlExpanded? 'rotate(0deg)' : 'rotate(180deg)';
    h2Ref.current.classList.toggle('dishes-header-selected');
    // h2Ref.current.classList.toggle('dishes-header-unselected');
  }


}

type props = { 
    foodGroup: {label: string, food: dishType[]},
    expandedOnDefault?: boolean,
    containerHeight?: string
}

type dishType = {
  label: string,
  description: string
}