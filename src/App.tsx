import './App.css'
import ActualTopicList from './components/ActualTopicList'
import AdsBlock from './components/AdsBlock'
import News from './components/news/News'

function App() {

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-9'>
          <News/>
          <Stock/>
        </div>
        <div className='col-3'>
          <AdsBlock/>
        </div>
      </div>
      <div className='row'>
        <div className='col-10'>
          <CategorySearch/>
        </div>
      </div>
      <div className='row'>
        <div className='col-12'>
          <Search/>
        </div>
      </div>
      <div className='row'>
        <div className='col-10'>
          <Banner/>
        </div>
      </div>
      <div className='row'>
        <div className='col-12'>
          <ActualTopicList/>
        </div>
      </div>
    </div>
  )
}

export default App
