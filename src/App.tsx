import styles from "./App.module.css"

import { Header } from "./components/Header/index"

import { Tip } from "./components/Tip"

function App() {
  function handleRestartGame() {
    alert("Reiniciar o jogo")
  }

  return (
    <div className={styles.container}>
      <main>
        <Header current={2} max={10} onRestart={handleRestartGame} />

        <Tip tip="Uma das linguagens de programação mais utilizadas" />
      </main>
    </div>
  )
}

export default App
