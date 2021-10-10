import { BiSad } from 'react-icons/bi';
import { GiHeartBeats } from 'react-icons/gi';
import { IoBed } from 'react-icons/io5';
import { MdMeetingRoom } from 'react-icons/md';
import { RiLungsLine } from 'react-icons/ri';

import { DataPoint } from '../models/TimeSeriesData';

interface AnalyticsCardProps {
    data: DataPoint[];
    type: string;
}

function getAnalyticsValue(props: AnalyticsCardProps): string {
    const totalCount =  props.data.reduce(function (previousValue, currentValue) {
        return previousValue + currentValue[1]
    }, 0);
    
    const average = Math.round(totalCount / props.data.length);

    if (props.type === 'Tnt') {
        return `${totalCount} Toss and Turns`
    } else if (props.type === 'HeartRate') {
        return `${average} Beats Per Minute`
    } else if (props.type === 'RoomTemperature' || props.type === 'BedTemperature') {
        return `${average} Degrees Celsius`;
    } else if (props.type === 'RespiratoryRate') {
        return `${average} Breaths Per Minute`
    } else {
        return '';
    }
}

function AnalyticsCard(props: AnalyticsCardProps) {
    let analyticsLabel;

    if (props.type === 'HeartRate') {
        analyticsLabel = (
            <>
                <p>Average Heart Rate</p>
                <GiHeartBeats/> 
            </>
        )
    } else if (props.type === 'Tnt') {
        analyticsLabel = (
            <>
                <p>Toss and Turns</p>
                <BiSad/>
            </>
        )
    } else if (props.type === 'RoomTemperature') {
        analyticsLabel = (
            <>
                <p>Average Room Temp.</p>
                <MdMeetingRoom/>
            </>
        )
    } else if (props.type === 'BedTemperature') {
        analyticsLabel = (
            <>
                <p>Average Bed Temp.</p>
                <IoBed/>
            </>
        )
    } else if (props.type === 'RespiratoryRate') {
        analyticsLabel = (
            <>
                <p>Average Resp. Rate</p>
                <RiLungsLine/>
            </>
        )
    }

    return (
        <div className="p-3 mx-2 my-3 max-w-xs rounded border-solid border-2 border-black">
            <div className="text-xl font-bold flex items-center gap-x-2">
                {analyticsLabel}
            </div>
            <div className="relative pt-1 text-left">
                <p className="text-lg font-small">{getAnalyticsValue(props)}</p>
            </div>
        </div>
    )
}

export default AnalyticsCard;