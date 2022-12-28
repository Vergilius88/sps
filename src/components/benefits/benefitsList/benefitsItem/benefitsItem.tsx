import "./benefitsItemStyles.scss"

interface Props {
    title: string,
    text: string,
    link?: string
}

export const BenefitsListItems = ({  title, text, link }: Props) => {
    return (
        <li className="benefitsListItems" >
            <div className="benefitsListItemsTitleWrapper">
                <h4 className="benefitsListItemsTitle">{title}</h4>
                <div className="benefitsListItemsIcon"></div>
            </div>
            <p className="benefitsListItemsText">{text}</p>
            <a href={link} className="benefitsListItemsLink">Learn More  &#8594;</a>
        </li>
    )
}