import './App.css';
import { useEffect,useState } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web'
import Newscards from './Components/Newscards/Newscards';
import useStyles from './styles';
import imgurl from './Assets/alan.jpg'
import texttonum from 'words-to-numbers'
function App() {
  const [Newsarticles,setNewsarticles]=useState([]);
  const [activearticle,setactivearticle]=useState(-1);
  const alanKey='3eb79c1b6393e597e4416ed06a9002a02e956eca572e1d8b807a3e2338fdd0dc/stage'
  useEffect(()=>{
    alanBtn({
      key:alanKey,
      onCommand:({command,articles,number})=>{
        if(command==='newsHeadlines'){
          setNewsarticles(articles);
          setactivearticle(-1);
        }
        else if (command==="highlight"){
          setactivearticle((prevarticle)=>prevarticle+1);
        }
        else if(command==="open"){
          const num=number.length>2 ? texttonum(number,{fuzzy : true}) : number;
          if(num>20){
            alanBtn().playText('Sorry! Please try that again');
          }
          else{
            alanBtn().playText('Opening....');
            window.open(articles[num-1].url);
          }
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
      <Newscards articles={Newsarticles} activearticle={activearticle}/>
    </div>
  );
}

export default App;
