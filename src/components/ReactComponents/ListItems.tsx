export default function ListItems({items}: props) {
  return (
    <>
        {items.map(oneItem => {
            return(
                  <div className = 'listed-item' key = {oneItem.label}>
                    <li>
                      <div className = 'listed-item-label'> {(oneItem.label.charAt(0) === '@')? '': oneItem.label}</div>
                      <div className = 'listed-item-description'>{oneItem.description}</div>
                    </li>
                  </div>
                )
        })}
    </>
  )
}

type props = {
    items: {label: string, description: string}[]
}
