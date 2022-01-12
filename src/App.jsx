import "./App.css";
import user from "./profile/data/user";
import Profile from "./profile/Profile";
import Image from "./profile/component/ImageUser";
import Header from "./component/Header"
function App() {

  
  return (
    <div className="App-header">
      <Header />
        <Profile>
          <Image image={user.image} />
        </Profile>
      
    </div>
  );
}

export default App;
