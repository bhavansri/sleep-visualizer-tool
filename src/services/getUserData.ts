async function fetchIntervalData(url: string) {
    let response = await fetch(url, {
        method: "GET",
        headers: {"Content-type": "application/json;charset=UTF-8"}
    });

    let result = await response.json();

    return result.intervals;
}

async function getUserData() {
    const userDataFiles = [
        'https://s3.amazonaws.com/eight-public/challenge/2228b530e055401f81ba37b51ff6f81d.json',
        'https://s3.amazonaws.com/eight-public/challenge/d6c1355e38194139b8d0c870baf86365.json',
        'https://s3.amazonaws.com/eight-public/challenge/f9bf229fd19e4c799e8c19a962d73449.json'
    ]

    let userData = userDataFiles.map(function(url) {
        return fetchIntervalData(url);
    });

    let values = await Promise.all(userData);
    return values;
}

export default getUserData;