import { useRecoilState, useRecoilValue, RecoilRoot, useSetRecoilState } from "recoil"
import { countAtom, evenSelector } from "./store/atoms/count"
import { useMemo } from "react"


function App(){
  return(
    <div>
      <RecoilRoot>
        <Count/>
      </RecoilRoot>
    </div>
  )
}

function Count(){
  return <div>
    <CountRenderer></CountRenderer>
    <Buttons></Buttons>
  </div>
}

function CountRenderer(){
  const count = useRecoilValue(countAtom)
  return <div>
    <b>
      {count}
    </b>
    <EvenCount></EvenCount>
  </div>
}

function EvenCount(){
  const count = useRecoilValue(countAtom)
  // const isEven = useMemo(()=>{
  //   return count %2 == 0
  // }, [count])
  const isEven = useRecoilValue(evenSelectorf)
  return <div>
    {(isEven) ? "It is even": null}
  </div>
}

function Buttons(){
  const setCount = useSetRecoilState(countAtom)
  return <div>
    <button onClick={()=>{
      setCount(count =>count + 1)
    }}>Increase</button>
    <button onClick={()=>{
      setCount(count=> count -1)
    }}>Decrease</button>
  </div>
}

export default App