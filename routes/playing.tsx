/** @jsx h */
import { tw } from "https://esm.sh/v95/twind@0.16.17/twind";
import { h } from "preact";
import Header from "../components/Header.tsx";
import Play from "../islands/Play.tsx";


export default function playing() { 
  return (
   
    <div>
      <Header />

      <div className={tw`w-screen flex justify-center`}>
        <div className={tw`w-5/6 py-16`}>
          <h1 className={tw`text-6xl font-thin mb-6 text-center`}>
            Playing
          </h1>

       

        
         <Play name="Beijing Opera" url="http://207.246.103.118:5080/LiveApp/streams/184417538201050185969847.mp4" />
      </div>
    </div>
   </div>
  )


}