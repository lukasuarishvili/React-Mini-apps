import { Fragment } from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Section from "./components/Section"

let reactConsepts=["Hooks","jsx","components","userStates","react rounter",] 

function App() {
  return (
    <Fragment>
      <Header name="luka"/>
      <Section reactConsepts={reactConsepts}/>
      <Footer authorName="luka" authorSurame=" suara"/>
    </Fragment>

  )
}

export default App
