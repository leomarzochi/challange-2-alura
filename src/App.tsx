import {Header} from "components/header/Header";
import {Sidebar} from "components/sidebar/Sidebar";
import {CodeEditorScreen} from "screens/code-editor/CodeEditorScreen";
import styles from './App.module.scss';

function App() {
  return (
    <div>
      <Header />
      <div className={styles.content}>
        <Sidebar />
        <CodeEditorScreen/>
      </div>
    </div>
  );
}

export default App;
