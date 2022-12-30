import "./meetTheTeamItemStyle.scss"

interface Props {
    name: string,
    position: string
}

export const MeetTheTeamItem = ({ name, position }: Props) => {
    return (
        <li className="meetTheTeamItem">
            <div className="meetTheTeamItemPhotoWrapper">
                <img src="#" alt="#" className="meetTheTeamItemPhoto" width="300px" height="300px" />
            </div>
            <h3 className="meetTheTeamItemName">{name}</h3>
            <p className="meetTheTeamItemPosition">{position}</p>
        </li>
    )
}