/**
 * компонент отвечающий за разметку одного item  
 */

function StockItem({item}) {

    return (
      <div className="stock-item">
        <span className="name"></span>
        <span className="value"></span>
        <span className="trend"></span>
      </div>
    )
  }
  
  export default StockItem