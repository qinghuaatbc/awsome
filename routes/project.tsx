/** @jsx h */
import { tw } from "https://esm.sh/v95/twind@0.16.17/twind";
import { h } from "preact";
import Header from "../components/Header.tsx";
import Project from "../islands/Project.tsx";


export default function project() { 
  return (
   
    <div>
      <Header />

      <div className={tw`w-screen flex justify-center`}>
        <div className={tw`w-5/6 py-16`}>
          <h1 className={tw`text-6xl font-thin mb-6 text-center`}>
            Zone Lists
          </h1>

          <Project />
        
      </div>
    </div>
   </div>
  )


}