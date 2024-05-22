/**
 * это компонент одного элемента
 */

function CardTopicItem({title, children}) {
    
        return (
          <div className="container">
            <div className="header">
                {title}
            </div>
            <div className="content">
                {children}
            </div>
          </div>
        )
      }
      
      export default CardTopicItem
