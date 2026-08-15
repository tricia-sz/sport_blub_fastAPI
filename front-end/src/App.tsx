import './App.css'
import { Footer } from './components/footer/footer'
import { Header } from './components/header/header'
import { PlayerForm } from './components/sections/playerForm';

export function App() {

  
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1 py-10">
        <PlayerForm />
        
      </main>

      <Footer />
    </div>
  );
}

export default App
