import './App.css';
import {useState} from "react"
import FormComponent from "./Components/FormComponent";
// import TimerComponent from "./Components/TimerComponent";
import Layout from "./Components/Layout";

function App() {
  const [timerCount, setTimerCount] = useState(0);
  // const [showFormView, setShowFormView] = useState(true);
  // const onFormSubmit = (count) =>{
  //   setTimerCount(count)
  // }
  return (
    <>
    <Layout>
      <FormComponent/>
      {/* {!showFormView && <TimerComponent time={timerCount}/>} */}
    </Layout>
    </>
  );
}

export default App;
