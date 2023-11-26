
import './App.css';
import UseStateExample from'./pages/useStateExample'
import UseEffectExample from './pages/useEffectExample'
import UseReducerExample from './pages/useReducer'
import UseReducerPractice from './pages/sample'
import WeeklyPreScheduling from './pages/WeeklyPreScheduling'



function App() {
  const name = "React Hook - useState"
  return (
    <>
    <div className="App">
      <h4>React Hooks</h4>
      
    </div>
    {/* <UseStateExample  title={name} /> */}
    {/* <UseEffectExample /> */}
    {/* <UseReducerExample /> */}
    {/* <UseReducerPractice /> */}
    <WeeklyPreScheduling />
    </>
  );
}

export default App;
