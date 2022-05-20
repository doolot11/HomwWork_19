import React from "react"
import style from './ToDo.module.css'


class Render extends React.Component {
    render() {
     return(
         <div className={style.map}>
           {this.props.render.map((e)=>{
              return <div>
            <li key={e.id}>{e}
            <button >delete</button>
            </li>
            </div>
           })}
   
         </div>
     )

    }
}
export default Render