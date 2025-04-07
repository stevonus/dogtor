import "./App.css";

function App() {
  const comics = [
    "../images/Handwashing dogtor 1.png",
    "../images/Handwashing dogtor 2.png",
    "../images/Handwashing dogtor 3.png",
    "../images/Vaccine dogtor 1.png",
    "../images/Vaccine dogtor 2.png",
    "../images/Masks dogtor 1.png",
    "../images/Masks dogtor 2.png",
  ];
  return (
    <>
      <div class="main">
        <h1 id="title">Dogtor Comics</h1>
        <p id="byline">by Steven Ko</p>
        {comics.map((path) => {
          return <img className="comic_img" src={path}></img>;
        })}
      </div>
    </>
  );
}

export default App;
