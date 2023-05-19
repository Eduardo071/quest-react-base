import './App.css';
import StyledText from './components/coloredText';
import Box from './components/boxMain';
import Button from './components/button';

function App() {
  return (
    <Box itens={
      <>
      <StyledText text="Oi, eu sou um parágrafo colorido e em caixa alta" color="#ff0000" />
      <Button/>
      </>
    } />

  )
}

export default App;
