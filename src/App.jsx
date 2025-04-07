import "./App.css";

function App() {
  const comics = [
    {
      title: "Hand Washing",
      images: [
        "../images/Handwashing dogtor 1.png",
        "../images/Handwashing dogtor 2.png",
        "../images/Handwashing dogtor 3.png",
      ],
    },
    {
      title: "Vaccines",
      images: [
        "../images/Vaccine dogtor 1.png",
        "../images/Vaccine dogtor 2.png",
      ],
    },
    {
      title: "Masks",
      images: ["../images/Masks dogtor 1.png", "../images/Masks dogtor 2.png"],
    },
    {
      title: "Sunscreen",
      images: [
        "../images/Sunscreen 1.png",
        "../images/Sunscreen 2.png",
        "../images/Sunscreen 3.png",
      ],
    },
    {
      title: "Sunscreen (Early Version)",
      images: ["../images/comic_1.jpg"],
    },
  ];
  return (
    <>
      <div class="main">
        <div id="header">
          <img id="header-img" src="./favicon.ico"></img>
          <section>
            <h1 id="title">Dogtor Comics</h1>
            <p id="byline">by Steven Ko</p>
          </section>
        </div>
        {comics.map((comic) => {
          return (
            <>
              <p id="comic-title">{comic.title}</p>
              {comic.images.map((path) => {
                return <img className="comic_img" src={path}></img>;
              })}
              <hr id="comic-separator" />
            </>
          );
        })}
      </div>
    </>
  );
}

export default App;
