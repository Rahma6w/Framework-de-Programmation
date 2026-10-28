import './App.css';
// import bleu from "./components/Bleu/bleu"
// import Rouge from "./components/Rouge/rouge";    //example 1 is a commented code
function App() {
  const x=0;
  
  return (<>
<h1 className={x==0? 'rouge' : 'bleu'}>Mon Titre</h1>

  {/* <Bleu />
  <Rouge /> */}
  
  </>);
}

export default App
