import { TimeSeriesData } from "./TimeSeriesData";
import { StageData } from "./StageData";

export type IntervalData = {
    id: number;
    ts: string;
    stages: [StageData];
    score: number;
    timeseries: TimeSeriesData;
}