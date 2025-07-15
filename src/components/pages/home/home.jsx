import { Container, Row } from 'react-bootstrap'
import GoalSlider from './table/filters/progressbar'
import ModelSelector from './table/modelSelector'

const Home = () => {
  return (
    <Container className='pt-5'>
      <Row>
        <h1>Super aplikacja</h1>
        <div className='filters d-flex mx-3 flex-wrap'>
          <div className='p-2 col-10 col-sm-6 col-lg-3'>

            <GoalSlider label="Trudność" reverse={true} />
          </div>
          <div className='p-2 col-10 col-sm-6 col-lg-3'>

            <GoalSlider label="Zużycie" reverse={true} />
          </div>
          <div className='p-2 col-10 col-sm-6 col-lg-3'>

            <GoalSlider label="Estetyka" />
          </div>
          <div className='p-2 col-10 col-sm-6 col-lg-3'>

            <GoalSlider label="Użyteczność" />
          </div>
        </div>
        <ModelSelector />
      </Row>
    </Container>
  )
}
export default Home