const os = require('os');

setInterval(() => {
    const {arch, platform, totalmem, freemem, clear} = os;
    const tRam = totalmem() /1024 /1024;
    const fRam = freemem() /1024 /1024;
    const usage = 100 - ((fRam / tRam) * 100)

    const stats = {
        Os: platform(),
        Arch: arch(),
        TotalRAM: `${parseInt(tRam)} MB`,
        FreeRAM: `${parseInt(fRam)} MB`,
        Usage: `${usage.toFixed(2)} %`
    }
    console.clear();
    console.table(stats);
    exports.stats = stats;
}, 1000);
