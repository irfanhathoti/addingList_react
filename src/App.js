import './App.css';
import StudentList from './Components/Crud/StudentList';
// import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
// import DashBoard from './Components/DashBoard';
// import AddBook from './Components/AddBook';
// import Header from './Components/Header';

function App() {
  return (
    <div className="App">
      <StudentList />
       {/* <Router>
         <Header />
        <Switch>
          <Route path="/" exact component={
            () => {
              return (<DashBoard />)
            }} />
            <Route path="/ShowData" exact component={
            () => {
              return (<AddBook />)
            }} />
        </Switch>

      </Router> */}
    </div>
  );
}

export default App;
