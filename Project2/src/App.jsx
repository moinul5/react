import './App.css'
import Card from './components/card'
function App() {

  return (
    <>
      <div className='grid grid-cols-3'>
        <div className='m-5'><Card Name1='Moinul' ID='0112310216' pic="https://images.pexels.com/photos/31346411/pexels-photo-31346411/free-photo-of-mountain-goat-standing-on-rocky-cliff-in-alps.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"/></div>
        <div className='m-5'><Card Name1='Showrov' ID='0112310221' pic="https://images.pexels.com/photos/4008066/pexels-photo-4008066.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" /></div>
        <div className='m-5'><Card Name1='Raj' ID='0112310215' pic="https://images.pexels.com/photos/31810070/pexels-photo-31810070/free-photo-of-dramatic-portrait-in-abandoned-ruins.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"/></div>
        </div>
    </>
  )
}

export default App
