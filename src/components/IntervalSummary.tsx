import StartTimeCard from "./StartTimeCard";
import ScoreCard from "./ScoreCard";
import StagesGraph from "./StagesGraph";
import AnalyticsCard from "./AnalyticsCard";
import { IntervalData } from "../models/IntervalData";

interface IntervalSummaryProps {
    interval: IntervalData;
}

function IntervalSummary(props: IntervalSummaryProps) {
    if (props.interval !== undefined) {
        return (
            <div>
              <StartTimeCard timestamp={props.interval.ts}/>
              <ScoreCard score={props.interval.score}/>
              <StagesGraph data={props.interval.stages}/>
              <AnalyticsCard data={props.interval.timeseries.heartRate} type={'HeartRate'}/>
              <AnalyticsCard data={props.interval.timeseries.tnt} type={'Tnt'}/>
              <AnalyticsCard data={props.interval.timeseries.tempRoomC} type={'RoomTemperature'}/>
              <AnalyticsCard data={props.interval.timeseries.tempBedC} type={'BedTemperature'}/>
              <AnalyticsCard data={props.interval.timeseries.respiratoryRate} type={'RespiratoryRate'}/>
            </div>
        );
    } else {
        return (
            <div></div>
        )
    }
}

export default IntervalSummary;