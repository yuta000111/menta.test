export default function createYear() {
    const today = new Date()
    const year = today.getFullYear();
    let yearList = []
    const createOption = function(startNum, endNum) {
        for (let i = startNum; i <= endNum; i++) {
            yearList.push(i)
        }
    }
    createOption(1970, year);
    return yearList;
}