import './App.css'
import Todo from './todo'
import FooD from './food'
import GramerLok from './gramerlok'
import Singers from './singers';
import Library from './library';

function App() {
  const gramerLok = ['rubel', 'shamim', 'shahin', 'helu','masud', 'Faruk']

  const singers = [
  { id: 1, name: "Arijit Singh", age: 43 },
  { id: 2, name: "Atif Aslam", age: 41 },
  { id: 3, name: "Shreya Ghoshal", age: 40 },
  { id: 4, name: "Tahsan Khan", age: 44 },
  { id: 5, name: "Taylor Swift", age: 34 }
];

const books = [
  { id: 1, bookName: "Pather Panchali", price: 250 },
  { id: 2, bookName: "Himu Rimjhim", price: 180 },
  { id: 3, bookName: "The Alchemist", price: 320 },
  { id: 4, bookName: "Atomic Habits", price: 450 },
  { id: 5, bookName: "Shesher Kobita", price: 150 },
  { id: 6, bookName: "Misir Ali Omshomogro", price: 550 },
  { id: 7, bookName: "Harry Potter", price: 750 },
  { id: 8, bookName: "Rich Dad Poor Dad", price: 400 },
  { id: 9, bookName: "Gora", price: 280 },
  { id: 10, bookName: "Deep Work", price: 420 }
];

  return (
    <>
      <h1>Saad + Vite + React</h1>

      {
        <Library books={books}></Library>
        
      }
      {
        // gramerLok.map(lok => <GramerLok lok={lok}></GramerLok>)
        
      }

      {
        singers.map(singer => <Singers key={singer.id} name={singer.name} age={singer.age}></Singers>)
      }



      {/* <Todo ></Todo>
      <FooD food='Chiken' isDone= {true} ></FooD>
      <FooD food='Moton' isDone={false} time='10min'></FooD>
      <FooD food='Beef' isDone={true} time='40min'></FooD>
      <FooD food='Hen' isDone={false} time='20min'></FooD> */}


      {/* <Person></Person>
      <Person></Person>
      <Person></Person>
      <Sports></Sports>
      <Shop></Shop>
      <Spdc></Spdc>
      <Developer name="Saad" tech="React"></Developer>
      <Developer name="Almun" tech="JS"></Developer>
      <Developer name="Mahfuj" tech="Html"></Developer>
      <Developer name="Khalid" tech="Java"></Developer>
      <Players name="Alal" runs="120"></Players>
      <Players name="Dula" runs="1200"></Players>
      <Players name="Salal" runs="175"></Players>
      <Players name="Belal" runs="510"></Players>
      <Players name="chaelal" ></Players>
      <Salami name="Mahfuj" salami="200"></Salami>
      <Salami name="Jakia" salami="150"></Salami>
      <Salami name="Papiya" salami="100"></Salami>
      <Salami name="Safiya" salami="50"></Salami> */}
    </>
  )
}

function Salami({name, salami}){
  return(
    <div className='student'>
      <h3>Name: {name}</h3>
      <p>Salami: {salami}</p>
    </div>
  )
}

// const {} = {name: Alal}
function Players({name, runs = 0}){
  console.log(name, runs)
  return(
    <div className='student'>
      <h3>Name: {name}</h3>
      <p>Runs: {runs}</p>
    </div>
  )
}
function Developer(props){
  // console.log(porns.name)
  return(
    <div style={{
      padding: "10px",
      border: "2px solid red",
      borderRadius: "20px",
      marginBottom: "20px"
    }}>
      <h3>Developer: {props.name}</h3>
      <p>
        Technology: {props.tech}</p>
    </div>
  )
}

function Person () {
  const age = 17;
  const name = "Saad";
  const ckt = "cricket";
  
  return(
    <p className='student'>I am a person - {name} age is-  {age} i play - {ckt}</p>
  )
}

function Sports() {
  return(
    <div >
      <h3>Cricket</h3>
      <p>Plaing and losing</p>
    </div>
  )
}

function Shop(){

  return(
    <div style={{
      border: "2px solid red",
      padding: "10px",
      borderRadius: "20px"
    }}>
      <h2>Tell some shop name</h2>
        <ul>
          <li>zia</li>
          <li>Moi</li>
          <li>Shahin</li>
          <li>Papel</li>
          <li>Bonik</li>
        </ul>
    </div>
  )
}

function Spdc(){
  const sportsStyle = {
  color: "blue",
  border: "Green"
}
return(
  <div>
    <p style={sportsStyle}>amagp gerami ki ase?</p>
  </div>
)
}

export default App
