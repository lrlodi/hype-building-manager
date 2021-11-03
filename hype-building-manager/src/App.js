import BuildingForm from './components/BuildingForm';
import AppartmentForm from './components/AppartmentForm';
import PropertiesProvider from './context/PropertiesProvider';
import Properties from './components/Properties';
import './App.css';

function App() {
  return (
    <div className="App">
    <PropertiesProvider>
      <Properties />
      <BuildingForm />
      <AppartmentForm />
    </PropertiesProvider>
    </div>
  );
}

export default App;
