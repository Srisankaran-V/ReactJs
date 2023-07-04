import { LoginInfo } from "./login_page"

export const Faculty = ({slot, day})=>{

    return (<div>
        <h1>HI</h1>
        <p>{slot}</p>
        <p>{day}</p>
    </div>)
}