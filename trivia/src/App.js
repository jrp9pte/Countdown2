import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";
import Button from '@mui/material/Button';


function App() {
  return (
    <div className = "App-header" >
      <header >
        <h2>
          Trivia:
        </h2>
        <h4>
            There are 10 questions of random topic. Upon clicking your choice you will be told if you were correct or not and given the right answer.
        </h4>
        <div>
          < Trivia />
        </div>
      </header>
    </div>
  );
}

function Trivia() { 
  const [questions, seQuestions] = useState([]);
  useEffect (() => {
    generateQuestions (seQuestions);
  }, []);

  return ( 
    <> 
      <QuestionMaster   data = {questions} />
    </>
  );
} 

const generateQuestions = (setData) => { 
  fetch("https://opentdb.com/api.php?amount=10")
    .then ((res) => res.json () )
    .then( (data) => setData (data.results) );
};

function QuestionMaster(props){

  return <>
    <div>  
      {Object.keys(props.data).map((questionNumber) => < Questions name={questionNumber} items={props.data[questionNumber]}  />)}
    </div>
  </>
}
function Questions(props){
  
  function createMarkup() {
    return {__html: props.items.question};
  }
  
  function MyComponent() {
    return <div className = "QuestionText"  dangerouslySetInnerHTML={createMarkup()} />;
  }
  return <>
    <div className = "QuestionBox">
      <div className = "QuestionNum">
        Q{Number(props.name) + 1 + ": "  }  
      </div> 
      {MyComponent()}
      <div>
        {Object.keys(props.name).map(() => < Answers  iAnswer = {props.items.incorrect_answers} CAnswer = {props.items.correct_answer}/>)}
      </div>
    </div>  
  </>
}

function Answers(props){

  function getRndInteger(max ) {
    return Math.floor(Math.random() * (max - 0) ) + 0;
  }
  let correctAnswer = getRndInteger( props.iAnswer.length  );
  console.log(correctAnswer)
  let answers = [];
  let answerChoices = new Set();
  for (let i = 0; i <= props.iAnswer.length  ;  i++ ){
    answerChoices.add(i);
  }
  answers[correctAnswer] = props.CAnswer;
  answerChoices.delete(correctAnswer);
  let i = 0;
  answerChoices.forEach((item) => {answers[item] =  props.iAnswer[i]; i++ ;} ) ;
  const [grade , setGrade ] = useState();
  function answersFunction(){
    if (props.iAnswer.length == 1 ){
      return (
      <div>
        <Button className='choices' variant="contained" onClick = { () => { 0 == correctAnswer? setGrade("Correct"): setGrade(`Your answer was Incorrect, the correct answer is  ${ props.CAnswer } `); }}    >  {answers[0]}  </Button>
        <Button className='choices'variant="contained"  onClick = { () => { 1 == correctAnswer? setGrade("Correct"): setGrade(`Your answer was Incorrect, the correct answer is  ${ props.CAnswer } `); }}    >  {answers[1]}  </Button>
     </div>
      )
    }
    return (
    <div>
      <Button className='choices' variant="contained" onClick = { () => { 0 == correctAnswer? setGrade("Correct"): setGrade(`Your answer was Incorrect, the correct answer is  ${ props.CAnswer } `); }}    >  {answers[0]}  </Button>
      <Button className='choices'variant="contained"  onClick = { () => { 1 == correctAnswer? setGrade("Correct"): setGrade(`Your answer was Incorrect, the correct answer is  ${ props.CAnswer } `); }}    >  {answers[1]}  </Button>
      <Button className='choices'variant="contained"  onClick = { () => { 2 == correctAnswer? setGrade("Correct"): setGrade(`Your answer was Incorrect, the correct answer is  ${ props.CAnswer } `); }}    >  {answers[2]}  </Button>
      <Button className='choices'variant="contained"  onClick = { () => { 3 == correctAnswer? setGrade("Correct"): setGrade(`Your answer was Incorrect, the correct answer is  ${ props.CAnswer } `); }}    >  {answers[3]}  </Button>
   </div>
    )
  }

  return (
    <>
      <div className = "AnswersWrapper">  {answersFunction()}  </div>
      <div>  {grade} </div>
    </>
  )
}



export default App;  