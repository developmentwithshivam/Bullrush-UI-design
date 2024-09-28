import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
function Backbutton() {
  return (
    <>
      <Link
        to="/home"
        className="bg-stone-900 border-2 hover:border-slate-400 border-slate-300 text-white rounded-md p-2 w-20 text-center absolute"
      >
        <FontAwesomeIcon className="pr-2" icon={faArrowLeft} />
        Back
      </Link>
    </>
  );
}

export default Backbutton;
