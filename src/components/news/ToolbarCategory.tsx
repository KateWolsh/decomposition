/**
 * список категорий сортировки новостей
 */

function ToolbarCategory({categories, onCategoryChange}) {

    return (
      <ul>
        {categories.map(category => (
            <li onClick={() => onCategoryChange(category)}>{category}</li>
        )) }
      </ul>
    )
  }
  
  export default ToolbarCategory