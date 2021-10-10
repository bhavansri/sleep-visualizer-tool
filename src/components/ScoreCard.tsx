import { GrScorecard } from 'react-icons/gr';

interface ScoreCardProps {
    score: number;
}

function ScoreCard(props: ScoreCardProps) {
    return (
        <div className="p-3 mx-2 my-3 max-w-xs rounded border-solid border-2 border-black">
            <div className="text-xl font-bold flex items-center gap-x-2">
                    <p>Sleep Score</p>
                    <GrScorecard/>
            </div>
            <div className="relative pt-1">
                <div className="flex mb-2 items-center justify-end">
                    <div>
                        <span className="text-xs font-semibold inline-block text-green-600">
                            {props.score}%
                        </span>
                    </div>
                </div>
                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-green-200">
                    <div style={{width: `${props.score}%`}} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"></div>
                </div>
            </div>
        </div>
    )
}

export default ScoreCard;