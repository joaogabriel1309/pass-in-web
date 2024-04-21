import iconMain from '../assets/iconMain.svg'
 
export function Header(){
    return (
        <div className="flex items-center gap-5">
            <img src={iconMain}/>
            <nav className="flex items-center gap-5">
                <a href="" className="font-medium text-sm text-zinc-300">Eventos</a>
                <a href="" className="font-medium text-sm">Participantes</a>
            </nav>
        </div>
    )
}