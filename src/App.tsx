import styles from "./App.module.css"

import { Header } from "./components/Header/index"
import { Tip } from "./components/Tip"
import { Letter } from "./components/Letter"

export function App() {
  function handleRestartGame() {
    alert("Reiniciar o jogo")
  }

  return (
    <div className={styles.container}>
      <main>
        <Header current={2} max={10} onRestart={handleRestartGame} />

        <Tip tip="Uma das linguagens de programação mais utilizadas" />
        <div className={styles.word}>
          <Letter value="R" />
          <Letter value="E" />
          <Letter value="A" />
          <Letter value="C" />
          <Letter value="T" />
        </div>
      </main>
    </div>
  )
}
