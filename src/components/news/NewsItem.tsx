/**
 * компонент одного элемента списка новостей 
 */

function NewsItem({item}) {

    return (
      <>
        <div>
            <img src={item.img}></img>
            <p>{item.text}</p>
        </div>    
      </>
    )
  }
  
  export default NewsItem