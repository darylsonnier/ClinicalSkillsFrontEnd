import { fetchData } from './fetchData'
async function exportCSV() {
    const items = await fetchData('getsignoffs');
    const replacer = (key, value) => value === null ? '' : value // specify how you want to handle null values here
    const header = Object.keys(items[0])
    const csv = [
    header.join(','), 
    ...items.map(row => header.map(fieldName => JSON.stringify(row[fieldName], replacer)).join(','))
    ].join('\r\n')
    console.log(csv)
    var hiddenElement = document.createElement('a');
    hiddenElement.href = 'data:attachment/text,' + encodeURI(csv);
    hiddenElement.target = '_blank';
    hiddenElement.download = 'signoffs_report.csv';
    hiddenElement.click();
}

export default exportCSV;