import {useNavigate} from 'react-router-dom'
export function Header(){
    const header=["Home","Post","Profile"]
    const navigate=useNavigate()
    return (
        <div className="flex justify-between px-8  items-center  w-full h-20 fixed top-0 left-0 bg-green-400">

            {header.map((ele,key)=>{
                return <h3 onClick={()=>navigate(`/${ele.toLowerCase()}`)} key={key} className="text-3xl font-s w-fit transition transition-all h-full flex items-center duration-200 border-transparent hover:text-4xl hover:border-b-2 hover:border-blue-600 text-amber-50">{ele}</h3>
            })}
        </div>
    )
}