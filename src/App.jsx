import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import RegistrationForm from "./public/registration-form/pages/RegistrationForm"

function App() {

  return (
    <div className='w-full'>
      <Router>
        <Routes>
          <Route exact path="/" element={<RegistrationForm />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
