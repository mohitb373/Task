function findChairs(rooms, need) {
    const emptyChair = [];
    if(need == 0){
        return 1;
    }
    // console.log("rooommmmmmm",rooms)
    for (let i = 0; i < rooms.length; i++) {
        const firstOne = rooms[i][0];
        // console.log(firstOne.length)
        const chairs = rooms[i][1];
        // console.log(chairs)
        if (firstOne.length < chairs) {
            const available = chairs - firstOne.length;
            console.log(available)
            if (available >= need) {
                emptyChair.push(need);
                return emptyChair;
            } else {
                emptyChair.push(available);
                need -= available;
            }
        } else {
            emptyChair.push(0);
        }
    }
    return 0;
}


const rooms = [['XXX', 3], ['XXXXX', 6], ['XXXXXX', 9], ['XX',3]] 
const need = 4;
console.log(findChairs(rooms, need)); 
