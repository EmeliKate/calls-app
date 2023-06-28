import logo from './logo.svg';
import './App.css';
import Dashboard from "./components/dashboard/Dashboard";
import Menu from "./components/menu/Menu"
import {ConfigProvider} from 'antd';
function App() {
  return (
      <ConfigProvider>
          <div className="App">
              <Menu />
              <Dashboard />
          </div>
      </ConfigProvider>
  );
}

export default App;
