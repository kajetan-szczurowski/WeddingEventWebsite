import leaf from '../../images/leaf.svg'

export default function ListItems({items}: props) {

  return (
    <>
        {items.map(oneItem => {
            return(
                  <div className = 'listed-item' key = {oneItem.label}>
                    <li>
                      <Label itemLabel={oneItem.label} />
                      <div className = 'listed-item-description'>{oneItem.description}</div>
                    </li>
                  </div>
                )
        })}
    </>
  )

  function Label({itemLabel}: {itemLabel: string}){
    if (itemLabel.charAt(0) === '@') return( <div className = 'listed-item-label'></div> )
    if (itemLabel.charAt(0) === '#')  return (<VeganLabel label={itemLabel}/>)
    return( <div className = 'listed-item-label'>{itemLabel}</div>)
  }

  function VeganLabel({label}: {label: string}){
    return(
      <div className = 'listed-item-label vegan-label'>
        {label.substring(1)}
        <img className = 'vegan-leaf-symbol' src = {leaf.src} alt = 'znak wegańskiego dania'/>
      </div>
    )
  }
}

type props = {
    items: {label: string, description: string}[]
}
