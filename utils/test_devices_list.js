const devicesList = [
    {
        name: 'Iphone 5',
        width: 320,
        height: 568
    },
    {
        name: 'Iphone 12',
        width: 390,
        height: 844
    },
    {
        name: 'Tablet Low',
        width: 601,
        height: 962
    },
    {
        name: 'Tablet Mid',
        width: 800,
        height: 1280
    },
    {
        name: 'Tablet High',
        width: 1024,
        height: 1366
    },
    {
        name: 'MacBook Pro 15',
        width: 1440,
        height: 900
    },
    {
        name: 'HD Screen',
        width: 1366,
        height: 768
    },
    {
        name: 'FullHD Screen',
        width: 1920,
        height: 1080
    }
]


const findDeviceByName = (name) => devicesList.find(dvc => dvc.name === name);

const listAllDevicesData = () => devicesList;

const allDeviceNameList = () => {
    const names = [];
    devicesList.map(i => names.push(i.name));
    return names;
}

const excludeDevices = (excluded = []) => devicesList.filter(dvc => excluded.indexOf(dvc.name) === -1)
const excludeDevicesNames = (excluded = []) => allDeviceNameList().filter(name => excluded.indexOf(name) === -1)

module.exports = {
    findDeviceByName,
    listAllDevicesData,
    allDeviceNameList,
    excludeDevices,
    excludeDevicesNames,
}