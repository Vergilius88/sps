import "./additionalCostItemStyles.scss"

interface Props {
    title: string,
    text: string,
    cost: number
}

export const AdditionalCostItem = ({ title, text, cost }: Props) => {
    return (
        <li className="additionalCostItem">
            <div className="additionalCostItemContent">
                <img className="additionalCostItemIcon" src="#" alt="#" />
                <h3 className="additionalCostItemTitle">{title}</h3>
                <p className="additionalCostItemText">{text}</p>
                <div className="additionalCost">
                    <p>Starting at</p>
                    <p>{cost}
                        <span>
                            / p er unit
                        </span>
                    </p>
                </div>
            </div>
            <div className="additionalCostItemPhoto"><img src="#" alt="#" width="548px" height="400"/></div>

        </li>
    )
}