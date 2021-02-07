export default function createYear() {
    let mounthList = []
    const createOption = function(startNum, endNum) {
        for (let i = startNum; i <= endNum; i++) {
            mounthList.push(i)
        }
    }
    createOption(1, 12);
    return mounthList;
}