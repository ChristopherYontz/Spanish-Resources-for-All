const transformExternalTime = _ => {
    // Read the JSON file
    const jsonString = fs.readFileSync('externalTime.json', 'utf-8');

    // Parse the JSON data
    const jsonObject = JSON.parse(jsonString);

    // Extract the "externalTimes" array
    const externalTimesArray = jsonObject.externalTimes;

    // Filter out unneeded properties
    const externalTargets = externalTimesArray.map(({id, _id, ...rest}) => rest)

    // Add tag property
    const addTag = externalTargets.map(obj => ({
        ...obj,
        tag: `${obj.description.includes('(YT)') ? 'YT' :
        obj.description.includes('TV') ? 'TV' :
        obj.description.includes('Movie') ? 'Movie' :
        obj.description.includes('Crosstalk') ? 'Crosstalk' :
        !obj.description.includes('Dreaming Spanish') ? 'Podcast' : 'DS' 
    }`}))

    // Change description property to activity
    function renameProperties (arr) {
        return arr.map(obj => {
            const { description, ...rest } = obj;
            return { ...rest, activity: description } 
        })
    }
    const renamedProperties = renameProperties(addTag)

    // Change watching to listening
    const watchingToListening = renamedProperties.map(obj => {
        const { type, ...rest } = obj;
        const newType = type === 'watching' ? 'listening' : type;
        return { ...rest, type: newType}
    })

    return watchingToListening
}

const transformTotalDailyDsTime = _ => {
    // Read the JSON file
    const jsonString = fs.readFileSync('dsTime.json', 'utf-8');

    // Parse the JSON data
    const jsonObject = JSON.parse(jsonString);

    // Filter out unneeded properties
    const externalTargets = jsonObject.map(({goalReached, userId, __v, ...rest}) => rest)
    console.log(externalTargets[0])
}