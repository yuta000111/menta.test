export default function createDate() {
    const today = new Date();
    const year = today.getFullYear();
    let ymd = { year: [], mounth: [], day: [] };
    const createOption = function(id, startNum, endNum) {
        for (let i = startNum; i <= endNum; i++) {
            if (id == 'year') {
                ymd.year = i + '年';
            } else if (id == 'mounth') {
                ymd.mounth = i + '月'
            } else if (id == 'day') {
                ymd.day = i + '日'
            }
        }
    }
    createOption(year, 1970, today);
    createOption('mounth', 1, 12);
    createOption('day', 1, 31)
    return ymd;
}