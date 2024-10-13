export default function ListItems({items}: props) {
  return (
    <>
        {items.map(oneItem => {
            return(
                  <div className = 'listed-item'>
                    <li key = {oneItem}>{oneItem}</li>
                    {/* <div className = 'gowno'>Twoja stara przeszła simsy</div> */}
                  </div>
                )
        })}
    </>
  )
}

type props = {
    items: string[]
}
