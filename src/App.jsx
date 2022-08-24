import { Header } from './Components/Header';
import { Sidebar } from './Components/Sidebar';
import { Post } from './Components/post';

import styles from './app.module.css';

import './global.css';

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author='Breno Barbareli'
            content='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime itaque quas corporis beatae veritatis, reprehenderit asperiores vitae quod possimus qui dignissimos unde deleniti consequatur quae, repellat debitis sunt, est rerum!'
          />
          <Post author='Gabriel Buzzi' content='Um novo post muito legal' />
        </main>
      </div>
    </div>
  );
}

export default App;
