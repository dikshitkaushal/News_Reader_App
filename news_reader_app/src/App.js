import './App.css';
import { useEffect,useState } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web'
import Newscards from './Components/Newscards/Newscards';
import useStyles from './styles';
import imgurl from './Assets/alan.jpg'
function App() {
  const [Newsarticles,setNewsarticles]=useState([]);
  const alanKey='3eb79c1b6393e597e4416ed06a9002a02e956eca572e1d8b807a3e2338fdd0dc/stage'
  useEffect(()=>{
    alanBtn({
      key:alanKey,
      onCommand:({command,articles})=>{
        if(command==='newsHeadlines'){
          setNewsarticles(articles);
        }
      }
    })
  },[])
  const classes=useStyles();
  return (
    <div className="App">
      <div className={classes.logoContainer}>
        <img src={imgurl} className={classes.alanLogo} alt="logo" />
      </div>
      <Newscards articles={Newsarticles}/>
    </div>
  );
}

export default App;
