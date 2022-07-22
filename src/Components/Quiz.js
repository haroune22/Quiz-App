import React from 'react';
import './Quiz.css';
import QuestionsImage from '../Images/qeustions.jpg';
import {useState,useEffect} from 'react';
import {Howl} from "howler";
import soundbutton from '../Images/Soundbutton.mp3'
import restartbutton from '../Images/restartbutton.mp3'


function Quiz() {
    


    const soundrestart = restartbutton
    const soundsrc   = soundbutton
    const  callmysound = (src) =>{
        const sound = new Howl({
            src,
            html5:true,
        })
        sound.play()
    }
    const  callmyrestart = (src) =>{
        const sound = new Howl({
            src,
            html5:true,
        })
        sound.play()
    }

    const questions = [
        {
            id:1,
            questionText: 'What is The capitale of france?',
            ranking:'1/4',
            Answeroptions:[
                {AnswerText:'Paris',iscorrect:true},
                {AnswerText:'London',iscorrect:false},
                {AnswerText:'Dublin',iscorrect:false},
                {AnswerText:'New York',iscorrect:false},
            ]
        },
        {
            id:2,
            questionText: 'Who is CIO of tesla?',
            ranking:'2/4',    
            Answeroptions:[
                {AnswerText:'James Bond',iscorrect:false},
                {AnswerText:'Captaine America',iscorrect:false},
                {AnswerText:'Elon Musk',iscorrect:true},
                {AnswerText:'Jeff Bezos',iscorrect:false},
            ]
        },
        {
            id:3,
            ranking: '3/4',
            questionText:'The Iphone Was Creted By Wich Company?',    
            Answeroptions:[
                {AnswerText:'Apple',iscorrect:true},
                {AnswerText:'Intel',iscorrect:false},
                {AnswerText:'Amazon',iscorrect:false},
                {AnswerText:'Microsoft',iscorrect:false},
            ]
        },
        {
            id:4,
            ranking: '4/4',    
             questionText:'How many Harry Potter Books are There?',
            Answeroptions:[
                {AnswerText:'1',iscorrect:false},
                {AnswerText:'4',iscorrect:false},
                {AnswerText:'6',iscorrect:false},
                {AnswerText:'7',iscorrect:true},
            ],
        }
    ]
    const [scor,setscor]=useState(0);
    const [currentquestion,setcurrentquestion]=useState(0);
    const [show,setshow]=useState(false);
    const [win,setwin]=useState(null);
    const [hide,sethide]=useState(true)
    const [answers,setanswers]=useState(null);
    const [hider,sethider]=useState(false);
    const [titale,settitale]=useState(null);
        const handelclick=(iscorrect)=>{
        if(currentquestion <= 3){
            setcurrentquestion(currentquestion  + 1);
            settitale('Think Before You Answer');
            }
            if(currentquestion === 3){
                setcurrentquestion(3);
                setshow(true);
                sethide(false);
            }
            if(iscorrect === true){
                setscor(scor + 1);
            } 
        
    }
    const reset= () => {
        setcurrentquestion(0);
        setscor(0);
        setshow(false);
        sethide(true);
    }
    

    useEffect(()=>{
        if(currentquestion === 4){
            setshow(true);
        }
        if(scor === 0){
            setwin('You Lost Try Again  👇');
        }
        if(scor === 1){
            setwin('Not Bad 🤷');
        }
        if(scor === 2){
            setwin('Good Job 👍');
        }
        if(scor === 3){
            setwin('Very Good 😀');
        }
        if(scor === 4){
            setwin('You Won 🎉');
            
        }
        
    },[currentquestion,scor])

  return (<>
    <div className='Quiz' style={{
        backgroundImage: `url(${QuestionsImage})`,
    }}>
    <h2>{titale}</h2>
    
        
        {hide?<h2 className='questiontext'>Question: {questions[currentquestion].ranking}</h2>:null}
        
        {hide?<h4 className='question'>{questions[currentquestion].questionText}</h4>:null}
        <div className='Answers'>
        {
            hide?
            questions[currentquestion].Answeroptions.map((Answeroptions)=><button onClick={()=> {handelclick(Answeroptions.iscorrect);callmysound(soundsrc)}} className='Answerbuttons'>{Answeroptions.AnswerText}</button>):null
        }
        </div>
        {
            show?<h1 className='Scor'>Your Scor is {scor} / 4</h1>:null
        }
        {
            show?<h2>{win}</h2>:null
        }
    
    
    <div>
        {
            show?<button onClick={()=>{reset();callmyrestart(soundrestart)}} className='Restartbutton'>Play Again</button>:null
        }
        {
        show?<button className='Answerstbutton' onClick={()=>{sethider(!hider);callmyrestart(soundrestart)}}>Answers
        {
            hider?<h3 className='answerline'>Q1:Paris.Q2:Elon Musk.Q3:Apple.Q4:7</h3>:null
        }
        </button>:null
        }
    </div>
    </div>
  </>)
}

export default Quiz