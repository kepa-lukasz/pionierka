import GoalSlider from './components/table/filters/progressbar'
import ModelSelector from './components/table/modelSelector'

function App() {
  return (
    <div>
      <h1>Super aplikacja</h1>
      <div className='filters d-flex mx-3 flex-wrap'>
        <div className='p-2 col-10 col-sm-6 col-lg-3'>
          <h4>Trudność</h4>
          <GoalSlider />
        </div>
        <div className='p-2 col-10 col-sm-6 col-lg-3'>
          <h4>Zużycie </h4>
          <GoalSlider />
        </div>
        <div className='p-2 col-10 col-sm-6 col-lg-3'>
          <h4>Estetyka</h4>
          <GoalSlider reverse={true}/>
        </div>
        <div className='p-2 col-10 col-sm-6 col-lg-3'>
          <h4>Użyteczność</h4>
          <GoalSlider reverse={true} />
        </div>
      </div>
      <ModelSelector />
    </div>
  )
}

export default App
