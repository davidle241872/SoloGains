import React, { useEffect, useState} from "react";
import NavBar from "./NavBar";
import ChildComponent from "./ChildComponent";

function Legworkout() {

  

  const incrementCount = () => {
    setCount(count + 1);
  };
  const [count, setCount] = useState(0);
  
      
    const [ exerciseList, setExerciseList] = useState([])

    const fetchData = async () => {
      const url = 'https://exercisedb.p.rapidapi.com/exercises/bodyPart/lower legs';
      const options = {
        method: 'GET',
        headers: {
          'x-rapidapi-key': '9f0a11d7d1mshf405214426646dbp186bf2jsn4b7ff06df4fe',
          'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
        }
      };
      const result = await fetch(url, options)
      result.json().then(json=> {
        setExerciseList(json)
      })
    }

useEffect(()=> {
  fetchData();  
}, []);

console.log(exerciseList)

return (
<div>
<NavBar />
<div>
        <h1>"You can't spell legendary without leg day"</h1>
        <br>

        </br>
      </div>
{exerciseList.map((exercise)=>(
  <li key={exercise.id}>
  <h1>{exercise.name}</h1>
  <br></br>
  <div className="bodyTarget">{exercise.equipment}</div>
  <img style={{width:"300px", height:"250px", marginLeft:"10px", marginTop:"30px"}}src={exercise.gifUrl} alt="" />
  <div className="bodyInstructions">{exercise.instructions}</div>
  </li>
))}
</div>
);
}
export default Legworkout;