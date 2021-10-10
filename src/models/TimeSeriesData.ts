export type DataPoint = {
    0: Date,
    1: number
}

export type TimeSeriesData = {
    tnt: DataPoint[],
    tempRoomC: DataPoint[],
    tempBedC: DataPoint[],
    respiratoryRate: DataPoint[],
    heartRate: DataPoint[]
}