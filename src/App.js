import Chat from "./Chat";
import "./App.css";
import Sidebar from "./Sidebar";
import Login from "./Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {useStateValue} from "./StateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue();

  //Hosting URL: https://new-clone-ab04f.web.app 
  

  

  return (
    <div className="app">
      {!user ? (
        <Login/>
      ) : (
        <div className="app__body">
          <Router>
            <Sidebar />
            <Switch>
              <Route path="/rooms/:roomId">
                <Chat />
              </Route>
              <Route path="/">
                <Chat />
              </Route>
            </Switch>
          </Router>
        </div>
      )}
    </div>
  );
}

export default App;
