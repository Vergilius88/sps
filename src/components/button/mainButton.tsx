import "./mainButton.scss"

interface Props {
    title?: string,
    theme?: string
}

export const MainButton = ({ title, theme }: Props) => {
    return (
        <button className={`mainButton ${theme}`}>{title}</button>
    )
}