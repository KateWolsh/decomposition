  /**
 * компонент со списком новостей, данные приходят пропсами и с помощью map 
 * каждый элемент отображается внутри компонента NewsItem
 */

import NewsItem from './NewsItem'

function NewsList({items}) {

    return (
      <>
        {items.map(item) => (
          <NewsItem item={item}/>
        )}
      </>
    )
  }
  
  export default NewsList

