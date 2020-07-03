import React from 'react';
import logo from './logo.svg';
import './App.css';

// Rien ne fonctionne 

function App() {
  // mettre VALUE dans les btn (a b c d ect)
  // const caracters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  const word = "";
  const wordList = ["pyrobarbare", "akali", "casual", "garen", "mouture"];



  function viewLife() {
    const char = "*"
    console.log(i * char)
  }


  function countLife() {
    const faute = 0;
    for (let i = 5; i > life; i--) {

      if (i = 0) {
        console.log("perdu")
      }
    }
    viewLife()
  }


  function chooseWord(wordList) {
    choosenWord = "";
    let index = wordList(Math.floor(Math.random() * wordList.length))

    return (console.log(choosenWord = index.split('*')))

  };

  function compare(choosenWord) {

    choosenWord.forEach(lettres => {
      if (lettres == document.getElementByValue('button')
      )
  
   });




    // }

    // }

    function displayWord(word) {


    }

    return (
      <htlm>
        <div>
          <div>vie compteur</div>
          <div>gagner ou perdu</div>
          <div>mots</div>

          <div>
            {/* <button className="button" onClick={"crée fonction qui désactive et ou place les lettres"} ></button>div clavier(btn) */
              <button className="button" value="a" onclick={} className="button">a</button>
              <button className="button" value="b" onclick={} className="button">b</button>
              <button className="button" value="c" onclick={} className="button">c</button>
              <button className="button" value="d" onclick={} className="button">d</button>
              <button className="button" value="e" onclick={} className="button">e</button>
              <button className="button" value="f" onclick={} className="button">f</button>
              <button className="button" value="g" onclick={} className="button">g</button>
              <button className="button" value="h" onclick={} className="button">h</button>
              <button className="button" value="i" onclick={} className="button">i</button>
              <button className="button" value="j" onclick={} className="button">j</button>
              <button className="button" value="k" onclick={} className="button">k</button>
              <button className="button" value="l" onclick={} className="button">l</button>
              <button className="button" value="m" onclick={} className="button">m</button>
              <button className="button" value="n" onclick={} className="button">n</button>
              <button className="button" value="o" onclick={} className="button">o</button>
              <button className="button" value="p" onclick={} className="button">p</button>
              <button className="button" value="q" onclick={} className="button">q</button>
              <button className="button" value="r" onclick={} className="button">r</button>
              <button className="button" value="s" onclick={} className="button">s</button>
              <button className="button" value="t" onclick={} className="button">t</button>
              <button className="button" value="u" onclick={} className="button">u</button>
              <button className="button" value="v" onclick={} className="button">v</button>
              <button className="button" value="w" onclick={} className="button">w</button>
              <button className="button" value="x" onclick={} className="button">x</button>
              <button className="button" value="y" onclick={} className="button">y</button>
              <button className="button" value="z" onclick={} className="button">z</button>
      </div>
        </div>
      </htlm>
    );

  }
  export default App;