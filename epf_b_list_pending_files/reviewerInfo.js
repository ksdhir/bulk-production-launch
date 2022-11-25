const dynamoHash = {
    pendingKeys: ['FILE_PENDING', 'FILE_REVIEWED']
}


// reviewerStage with Karma
// karma: 
const reviewerStage = {
    30: 0,
    35: 1,
    36: 2,
    37: 3,
    38: 4,
    39: 5,
    40: 6,
    41: 7,
    42: 8,
    43: 9,
}



function getPendingkKey(userKarma) {
    // on the basis of karma return pending partition key

    const stage = reviewerStage[userKarma]

    if(stage == undefined) throw new Error('Invalid Karma');

    if(stage == 0) {
        return dynamoHash.pendingKeys[0]
    } else {
        return `${dynamoHash.pendingKeys[1]}_${stage}` 
    }

}