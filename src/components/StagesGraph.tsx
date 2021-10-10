import { Pie } from 'react-chartjs-2';
import { GiNightSleep } from 'react-icons/gi';
import { StageData } from '../models/StageData';

interface StagesGraphProps {
    data: StageData[];
}

function restructureSleepData(data: StageData[]) {
    let sleepStagesMap = new Map();

    for (const value of data) {
        if (sleepStagesMap.has(value.stage)) {
            sleepStagesMap.set(value.stage, sleepStagesMap.get(value.stage) + value.duration);
        } else {
            sleepStagesMap.set(value.stage, value.duration);
        }
    }

    return sleepStagesMap;
}

function StagesGraph(props: StagesGraphProps) {

    const sleepStagesMap: Map<string, number> = restructureSleepData(props.data);
    const totalDuration =  props.data.reduce(function (previousValue, currentValue) {
        return previousValue + currentValue.duration
    }, 0);

    const awakeData = sleepStagesMap.get('awake') ?? 0 as number;
    const lightData = sleepStagesMap.get('light') ?? 0 as number;
    const deepData = sleepStagesMap.get('deep') ?? 0 as number;
    const outData = sleepStagesMap.get('out') ?? 0 as number;

    const data = {
        labels: [
            `Awake ${Math.round(awakeData/totalDuration * 100)}%`, 
            `Light ${Math.round(lightData/totalDuration * 100)}%`, 
            `Deep ${Math.round(deepData/totalDuration * 100)}%`, 
            `Out ${Math.round(outData/totalDuration * 100)}%`],
        datasets: [
            {
                label: '# of Votes',
                data: [
                    awakeData, 
                    lightData, 
                    deepData, 
                    outData
                ],
                backgroundColor: [
                    '#34D399',
                    '#059669',
                    '#064E3B',
                    '#D1FAE5',
                ],
                borderColor: [
                    '#34D399',
                    '#059669',
                    '#064E3B',
                    '#D1FAE5',
                ],
                borderWidth: 1,
            }
        ]
    }

    return (
        <div className="p-3 mx-2 my-3 max-w-xs rounded border-solid border-2 border-black">
            <div className="text-xl font-bold flex items-center gap-x-2">
                    <p>Sleep Stages</p>
                    <GiNightSleep/>
            </div>
            <div></div>
            <Pie data={data} />
        </div>
    )
}

export default StagesGraph;