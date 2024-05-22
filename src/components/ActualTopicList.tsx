/**
 * компонент отвечающий за отображение списка актуальных тем (погода, программа и т.д.) 
 * остальные элементы сделаны по типу погоды, контент CardTopicItem определяется каждым элементом по своему  
 */

import CardTopicItem from "./CardTopicItem"

function ActualTopicList() {
const weather = {
    title: 'Погода'
    data: {
        // сюда передаются данные о погоде
    }
}

    return (
      <div className="grid">
        <div className="grid-item">
            <CardTopicItem title={weather.title}>
            <Weather data={weather.data}/>
            </CardTopicItem> 
        </div>
      </div>
    )
  }
  
  export default ActualTopicList
