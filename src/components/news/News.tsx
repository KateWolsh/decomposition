  /**
 * с помощью функции 'onCategoruChange' отслеживаем изменения состояния в ToolbarCategory и передаем 
 * в NewsList новости, соответствующие выбранной категории
 */

import NewsList from "./NewsList"
import ToolbarCategory from "./ToolbarCategory"

function News() {

    return (
      <>
        <ToolbarCategory/>
        <NewsList/>
      </>
    )
  }
  
  export default News

