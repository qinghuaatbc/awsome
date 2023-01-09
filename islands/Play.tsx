/** @jsx h */
import { tw } from "https://esm.sh/v95/twind@0.16.17/twind";
import { h } from "preact";

interface Movie { 
  name: string
  url :string 

}
export default function Play({name, url}:Movie) { 
  return (
    <div>

      <div class={tw`text-3xl font-thin mb-6 text-center`}>
        { name}
      </div>
    
       <div >
      <video class={tw`w-screen flex justify-center`} controls src={url} />
     
      </div>  
      
      </div>

    )



}