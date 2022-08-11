import './App.css';
import AppRoutes from './routes/AppRoutes';
import Navigation from './components/Navigation'
function App() {
  return (
    <div className="App">
      <Navigation />
      <AppRoutes />
    </div>
  );
}

export default App;
