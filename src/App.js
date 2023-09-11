import './App.css';
import Form from './Form';

function App() {
  return (
    <div className="App p-5">
      <h2 style={{"color":"#382f60"}}>FV Calculator</h2>
      <p>This is a future value of money calculator</p>
      <Form/>
      <div className="col-auto p-3">
          <footer className='p-3' style={{"background":"#485188", "color":"white"}}>
            Author: David Nene <br/>
            Supervisor: Dr. Jackson Idi Mdoe <br/><br/>
            <a target="_blank" rel="noreferrer" href='https://github.com/davidnene/npv-calculator' className="btn btn-success">Github</a><br/><br/>
            <p>&copy; 2023. All Rights Reserved.</p>
          </footer>
      </div>
    </div>
  );
}

export default App;
