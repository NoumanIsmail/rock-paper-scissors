import { useState } from 'react'

function App() {
  let [userChoice ,setUserChoice] = useState('')
  let [computerChoice ,setComputerChoice] = useState('')
  let [result ,setResult] = useState('')
  let [image , setImage] = useState('https://i.gifer.com/7nK2.gif')
  let computer;
  let user;
  let resultImage;
  const UserChoice = (e) =>{
    user = e.target.value
    setUserChoice(user)
    ComputerChoice()
    DisplayResult()
  }
  const ComputerChoice = () =>{
    computer = Math.floor(Math.random() * 3) + 1
    if(computer === 1){
      setComputerChoice('rock')
    }
    if(computer === 2){
      setComputerChoice('paper')
    }
    if(computer === 3){
      setComputerChoice('scissors')
    }
  }
  const DisplayResult = () =>{
    if(computer === 1 && user === 'rock'){
      setResult("It's a Draw" )
      resultImage ="https://people.com/thmb/IjbP1TYEWxvQ0zASgib-DDsyY2M=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(749x0:751x2)/dawyne-johnson-throwback-122623-tout-a66ec4af4b704696b9adc193df9bf41e.jpg"
      setImage(resultImage)
    }
    if(computer === 2 && user === 'rock'){
      setResult("You Lose" )
      resultImage ="data:image/jpeg;base64,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"
      setImage(resultImage)
    }
    if(computer === 3 && user === 'rock'){
      setResult("You Win" )
      resultImage ="https://media.tenor.com/images/5206fef2197f7bc76887a5390c8d7717/tenor.gif"
      setImage(resultImage)
    }
    if(computer === 1 && user === 'paper'){
      setResult("You Win" )
      resultImage ="https://i.pinimg.com/originals/58/6b/d8/586bd8ef67ba33b7a3a02ebab0552cc5.gif"
      setImage(resultImage)
    }
    if(computer === 2 && user === 'paper'){
      setResult("It's a Draw" )
      resultImage ="https://i.redd.it/oqyiu962vj671.png"
      setImage(resultImage)
    }
    if(computer === 3 && user === 'paper'){
      setResult("You Lose" )
      resultImage ="https://images.squarespace-cdn.com/content/v1/56a82e7bfd5d08ec9be0445f/1668710128004-4IPA9KBY8T8B7KB4IQKA/image-asset.gif?format=2500w"
      setImage(resultImage)
    }
    if(computer === 1 && user === 'scissors'){
      setResult("You Lose" )
      resultImage ="https://img.artpal.com/01522/65-14-11-20-22-59-16m.jpg"
      setImage(resultImage)
    }
    if(computer === 2 && user === 'scissors'){
      setResult("You Win" )
      resultImage ="https://i.imgur.com/PJmXgn6.gif"
      setImage(resultImage)
    }
    if(computer === 3 && user === 'scissors'){
      setResult("It's a Draw" )
      resultImage ="https://i.imgur.com/qjTRgFJ.gif"
      setImage(resultImage)
    }
  }
  return (
    <>  
      <h1>Choose One Of Three</h1>
      <div className="main">
      <div className="card">
        <img src="https://gifdb.com/images/high/looking-dwayne-the-rock-johnson-4kb7zfmbp8e1j4z3.gif" alt="" /><br />
        <button  onClick={UserChoice} value="rock">Rock</button>&nbsp;
      </div>
      <div className="card">
        <img src="https://i.pinimg.com/originals/0e/49/62/0e496242c8e6d15e4d698dda4ed269b7.gif" alt="" /><br />
        <button  onClick={UserChoice} value="paper">Paper</button>&nbsp;
        </div>
      <div className="card">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1v35xnm0Ic096j1oGZd1S6JmI6Ek9UlM__V3cw8lnRE0BLA6B6gmlG0qZNoUW3uq1W_Y&usqp=CAU" alt="" /><br />
        <button  onClick={UserChoice} value="scissors">Scissors</button>
        </div>
        </div>
        <div className="message">
      <div className="user-choice">Your Choice is : <span style={{color:'green'}}> {userChoice} </span></div>
      <div className="computer-choice">Computer Choice is : <span style={{color:'red'}}> {computerChoice} </span></div>
      </div>
      <div className="result">result : <span> {result} <br />  </span> <img src={image} alt="" /> </div>

    </>
  )
}

export default App
