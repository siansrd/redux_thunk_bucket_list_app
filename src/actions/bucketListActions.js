export const addToBucketList = (country) => ({
    type: 'ADD_COUNTRY',
    country
})

export const toggleVisitedStatus = (countryName) => ({
    type: 'TOGGLE_VISITED_STATUS',
    countryName
})