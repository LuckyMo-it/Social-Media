import {useNavigate} from 'react-router-dom'
export function Header({selectedHeader,setSelectedHeader}){
    const header=["Home","Post","Profile"]
    const navigate=useNavigate()
    return (
        <div className="flex justify-between px-8  items-center  w-full h-20 fixed top-0 left-0  bg-gradient-to-r from-pink-500 gradiant  to-blue-300">
            <div className="menu flex-1/6"><i className="fa-solid cursor-pointer fa-bars text-3xl hover:text-blue-800"></i></div>
            <div className="tab flex-5/6  p-2">

            {header.map((ele,key)=>{
                return <h3 onClick={()=>{navigate(`/${ele.toLowerCase()}`);setSelectedHeader(ele)}
            } key={key} className={`text-3xl cursor-pointer inline-block mx-2 border-b-2  w-fit transition transition-all h-full bg-gradient-to-l from-blue-500 to-cyan-400 text-transparent bg-clip-text  duration-200   hover:border-b-2 hover:border-blue-600 ${(selectedHeader==ele?' border-blue-600':'border-transparent')}`}>{ele}</h3>
            })}
            </div>
        </div>
    )
}