setTimeout(()=>{
    console.log("Two seconds are over!.");
},2000);

const names = ['Andrew', 'Jen', 'Jess'];
const shortnames = names.filter((name)=>{
    return name.length<=4;
});

const geoCode = (address, callback) => {
    setTimeout(()=>{
         const data= {
            lat: 0,
            long:0
        }

        callback(data);
    },2000);
};

geoCode("philadephia", (data)=>{
    console.log(data);
});
