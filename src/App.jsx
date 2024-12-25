import "./App.css";
import Project from "./components/Project";
import About from "./components/About";
import BookStack from "./components/BookStack";
import SlideProject from "./components/SlideProject";
import Contact from "./components/Contact";
import stem from "../projects/stem.json";
import scheduler from "../projects/scheduler.json";
import renal from "../projects/renal.json";
import fish from "../projects/fish.json";

function App() {
  return (
    <>
      <About />
      <Project component={<BookStack />} isLeft={false} data={stem} />
      <Project
        component={
          <SlideProject
            width="560"
            height="315"
            src="https://www.youtube.com/embed/M0k2UmY-Yts?si=qWuWjnU6QI4U7Fod"
            name="sprouts"
            imgList={[
              "/img/sprouts1.png",
              "/img/sprouts2.png",
              "/img/sprouts3.png",
            ]}
          />
        }
        reportSrc="/sprouts.pdf"
        isLeft={true}
        data={scheduler}
      />
      <Project
        component={
          <SlideProject
            width="560"
            height="315"
            name="fish"
            imgList={["/img/fish1.png", "/img/fish2.png", "/img/fish3.png"]}
          />
        }
        reportSrc="/fish.pdf"
        isLeft={false}
        data={fish}
      />
      <Project
        component={
          <SlideProject
            width="560"
            height="315"
            name="gene"
            src="https://www.youtube.com/embed/k6bCzrFSGnM?si=MQU1PK43ePR4t4Hj"
            imgList={["/img/gene1.png", "/img/gene2.png", "/img/gene3.png"]}
          />
        }
        isLeft={true}
        data={renal}
      />
      <Contact />
    </>
  );
}

export default App;
