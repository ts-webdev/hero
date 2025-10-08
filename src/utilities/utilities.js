
const getStoredData = () => {
    const storedDataSTR = localStorage.getItem('installed');
    if(storedDataSTR){
        const storedAppData = JSON.parse(storedDataSTR);
        return storedAppData
    }
    else{
        return []
    }
}

const storeData = (id) => {
    const storedData = getStoredData()
    if(storedData.includes(id)){
        return
    }
    else{
        storedData.push(id)
        const convertJson = JSON.stringify(storedData);
        localStorage.setItem('installed', convertJson)
    }
    

}

export { getStoredData, storeData }