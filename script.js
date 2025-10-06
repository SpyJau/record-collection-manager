function updateRecords(records, id, prop, value) {

    if (value === "") {
        delete records[id][prop];
    }
    if (prop !== 'tracks' && value !== "") {
        records[id][prop] = value;
    }
    if (prop === 'tracks' && value !== "" && !records[id].hasOwnProperty('tracks')) {
        records[id][prop] = [];
    }
    if (prop === 'tracks' && value !== "") {
        records[id][prop].push(value);
    }
    return records;
}
