import { Header } from './Components/Header';
import { Sidebar } from './Components/Sidebar';

import styles from './app.module.css';

import './global.css';

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <span>testando o teste</span>
        </main>
      </div>
    </div>
  );
}

export default App;
