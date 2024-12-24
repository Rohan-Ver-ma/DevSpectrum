// import loading from './icons8-spinner.gif'
import ScaleLoader from "react-spinners/ScaleLoader";
import { CSSProperties } from "react";

const override: CSSProperties = {
    display: "block",
  };

const Spinner = () => {

    return (
      <div>
         <div className='flex justify-center dark:to-white' >

       <ScaleLoader
        color={"#9ca3af"}
        loading={true}
        cssOverride={override}
        width={4}
      />      
      </div>
      </div>
    )
  
}
export default Spinner;

