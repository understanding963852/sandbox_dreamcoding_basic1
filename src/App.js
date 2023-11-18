import "./App.css";
import Profile from "./components/Profile";

function App() {
  const handleClick = (event) => {
    console.log(event);
  };

  return (
    <>
      <button onClick={handleClick}>버튼</button>

      <Profile
        image="	https://cdn.pixabay.com/photo/2016/11/18/19/07/happy-1836445_1280.jpg"
        name="James Kim"
        title="프론트엔드 개발자"
        isNew={true}
      />
      <Profile
        image="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=922&q=80"
        name="Anna Young"
        title="백엔드 개발자"
      />
      <Profile
        image="	https://cdn.pixabay.com/photo/2016/11/29/06/46/adult-1867889_1280.jpg"
        name="Bob Yu"
        title="프론트엔드 개발자"
      />
    </>
  );
}

export default App;