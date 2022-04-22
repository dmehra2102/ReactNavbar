import './Button.css'
export const Link = ()=>{
    const links = ['Services','Projects','About']
    return (
        <div className='linked'>
            {links.map(el=>{return <div><li>{el}</li></div>
            })}
        </div>
    )
}