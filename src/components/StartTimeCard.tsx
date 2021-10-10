import moment from 'moment';
import { IoMdTime } from 'react-icons/io'

interface StartTimeCardProps {
    timestamp: string
}

function StartTimeCard(props: StartTimeCardProps) {
    const date = moment(props.timestamp).format("MMMM Do YYYY");
    const time = moment(props.timestamp).format("h:mm a")
    
    return (
        <div className="p-3 mx-2 my-3 max-w-xs rounded border-solid border-2 border-black">
                <div className="text-xl font-bold flex items-center gap-x-2">
                    <p>Start Time</p>
                    <IoMdTime/>
                </div>
                <div className="relative pt-1 text-right">
                    <p className="text-lg font-medium">{date}</p>
                    <p className="text-xl font-bold">{time}</p>
                </div>
        </div>
    )
}

export default StartTimeCard;