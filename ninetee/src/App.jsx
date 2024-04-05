import "./App.css";
import look from "./assets/look.png";
function App() {
    return (
        <>
            <main>
                <header className="flex flex-row">
                    <img src={look} alt="horse" />
                    <div className="top-bar">
                        <ul>
                            <li>Dance Party</li>
                            <li>Generation Blast</li>
                            <li>Hang Out</li>
                            <li>Talk & Share</li>
                        </ul>
                        <ul>
                            <li>Download Stuff</li>
                            <li>Print Stuff</li>
                            <li>All About Us</li>
                            <li>Be a Generation Girl</li>
                        </ul>
                    </div>
                </header>
                <div className="subtitle underline">
                    <h1 className="menu-header"><span>All</span><br /> About Us</h1>
                    
                </div>
                <menu><ul>
                      <li>Generation Girls</li>
                      <li>Gear</li>
                      <li>Books</li>
                      <li>Sends</li>
                      <li>Games</li>
                      <li>CD-Rom</li>
                      <li>memory Keeper</li>
                    </ul>
                    
                </menu>

                <div className="col">
                    <div className="left">
                        <h2>All About Hornz</h2>
                        <p>
                            Hornz is a horse who loves to dance. She has a lot
                            of friends who love to dance too. They all get
                            together and have a great time. They love to dance
                            to all kinds of music. They love to dance to all
                            kinds of music. They love to dance to all kinds of
                            music.
                        </p>
                        <br />
                        <p>
                            Hornz is a horse who loves to dance. She has a lot
                            of friends who love to dance too. They all get
                            together and have a great time. They love to dance
                            to all kinds of music. They love to dance to all
                            kinds of music. They love to dance to all kinds of
                            music.
                        </p>
                    </div>
                    <div className="right">
                        <div className="box"></div>

                        <p>
                            <span className="bold">Name: </span>Hornz
                        </p>
                        <p>
                            <span className="bold">Birthplace: </span>USA
                        </p>
                        <p>
                            <span className="bold">Fave way to chill: </span>
                            Listening to music
                        </p>
                        <p>
                            <span className="bold">Fave food: </span>Carrots
                        </p>
                        <p>
                            <span className="bold">Fave color: </span>Blue
                        </p>
                        <p>
                            <span className="bold">
                                Words that best describe me:{" "}
                            </span>
                            Happy, fun, loving
                        </p>
                        <p>
                            <span className="bold">Career Goal: </span>
                            Professional dancer
                        </p>
                        <p>
                            <span className="bold">Fave Saying: </span>Siiick
                        </p>
                    </div>
                    <h1 className="text-3xl font-bold underline">
                        Hello World
                    </h1>
                </div>
            </main>
        </>
    );
}

export default App;
