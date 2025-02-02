import './App.css'
import Card from './components/Card'
import Img1 from './assets/img1.jpg'
import Img2 from './assets/img2.jpg'
import Img3 from './assets/img3.jpg'
import Img4 from './assets/img4.webp'
import Img5 from './assets/img5.jpg'

function App() {
  return (
    <>
      <div className='flex gap-10 flex-wrap w-full h-screen p-10 justify-center items-center'>
        <Card profilePhoto={Img1} name='Xtylish@nsari' username='Ansari720@'/>
        <Card profilePhoto={Img2} name='Jeff Smith' username='jeff9341'/>
        <Card profilePhoto={Img3} name='Simran Hez' username='ssimranh@z'/>
        <Card profilePhoto={Img4} name='ShamsiOP' username='@shamsi444'/>
        <Card profilePhoto={Img5} name='Legend Killer' username='unknownOP'/>
      </div>
    </>
  )
}

export default App
