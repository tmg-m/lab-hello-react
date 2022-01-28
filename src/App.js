import './App.css';
import Header from './components/header';
import Card from './components/card.jsx';
import BgImg from './components/bg-logo.jsx';

function App() {
  return (
    <div className="main-Container">
      <section className="section1">
        <div className="controller">
          <div>
          <BgImg/>
          </div>
          <header className="header"> {/* ""<div>" not included in Headder.jsx */}
            <Header />
          </header>
          <article>
            <p>Say hello to ReactJS</p>
            <p>You will learn how to use <br></br>the most popular frontend library,<br></br>and become a super Ninja developer</p>
          </article>
          <button>Awesome!</button>
        </div>
      </section>

      <section className="section2">
        <div className="s2-controler">
          <Card name="declarative" />
          <Card name="components" />
          <Card name="single-way" />
          <Card name="jsx" />
        </div>
      </section>
    </div>
  );
}

export default App;
