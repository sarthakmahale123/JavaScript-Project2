setInterval(() => {
    d=new Date();
    thrs=d.getHours();
    tmins=d.getMinutes();
    tsecs=d.getSeconds();
    hrotation=30*thrs+tmins/2;
    mrotation=6*tmins;
    srotation=6*tsecs;

    hours.style.transform = `rotate(${hrotation}deg)`;
    minutes.style.transform = `rotate(${mrotation}deg)`;
    seconds.style.transform = `rotate(${srotation}deg)`;
}, 1000);