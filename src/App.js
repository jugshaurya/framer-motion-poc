import Boy from './assets/boy.svg';
import Girl from './assets/girl.svg';
import {motion, useScroll, useTransform} from "framer-motion";

import './App.css';
import './index.scss';
import Demo from './Demo';
import Demo2 from './Demo2';


function App() {
  
  // const { scrollYProgress, scrollY } = useScroll();

  // const posYBoy = useTransform(scrollY, [0, _1vh +_1vh], [180, 478])
  // const posXBoy = useTransform(scrollY, [0, 1000], [62, 0])
  // const scaleBoy = useTransform(scrollY, [0, 1000], [1, 0.3])
  
  // const posYGirl = useTransform(scrollY, [0, 1000], [209, 180])
  // const posXGirl = useTransform(scrollY, [0, 1000], [68, 0])
  // const scaleGirl = useTransform(scrollY, [0, 1000], [1, 0.3])

  return (
    <div className="App">
      <header className="App-header poc">
        {/* <Demo2 /> */}
        <Demo />
        {/* <motion.img className="boy" src={Boy}  alt="BNOY" style={{
          top: posYBoy,
          left: posXBoy,
          scale:scaleBoy
        }}/> */}
        {/* <motion.img className="girl" src={Girl}  alt="GIRLo" style={{
          top: posYGirl,
          right: posXGirl,
          scale:scaleGirl
        }}/> */}
      </header>
    </div>
  );
}

export default App;
