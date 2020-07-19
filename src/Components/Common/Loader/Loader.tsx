import React from "react";
import css from './Loader.module.scss'

const Loader: React.FC = () => (
     <div className={"text-center"}>
         <div className={css.lds_roller}>
             <div />
             <div />
             <div />
             <div />
             <div />
             <div />
             <div />
             <div />
         </div>
     </div>
)

export default Loader