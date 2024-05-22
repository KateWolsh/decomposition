/**
 * компонент отображающий курс валют, стоимость золота и тд.  
 */

function Stock({items}) {

    return (
      <div className="container">
        {items.map(item => (
            <StockItem item={item}/>
        ))}
      </div>
    )
  }
  
  export default Stock