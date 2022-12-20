import "./main.scss"

interface Props{
    children?: any
}

export const Main =({children}:Props)=>{
    return(
        <main>
            {children}
        </main>
    )
}