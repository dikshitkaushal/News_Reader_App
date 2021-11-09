import './App.css';
import { useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web'
function App() {
  const alanKey='3eb79c1b6393e597e4416ed06a9002a02e956eca572e1d8b807a3e2338fdd0dc/stage'
  useEffect(()=>{
    alanBtn({
      key:alanKey,
      onCommand:({command,articles})=>{
        if(command==='newsHeadlines'){
          console.log(articles);
        }
      }
    })
  },[])
  return (
    <div className="App">
      <h1>Alan AI News Application</h1>
    </div>
  );
}

export default App;
