import { DigitalDate } from "./components/DigitalDate"
import { DigitalTime } from "./components/DigitalTime"
import { ProjectTitle } from "./components/ProjectTitle"
function App() {

  return (
    <>
      <div className="container-fluid">
        <center>
        <ProjectTitle></ProjectTitle>
        <div className="row structure">
          <div className="shadow-inner">
          <DigitalTime></DigitalTime>
          <DigitalDate></DigitalDate>
          </div>
        </div>
        </center>
      </div>
    </>
  )
}

export default App
