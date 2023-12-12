const flavors = window.prompt('enter flavors', 'vanilla,vanilla,vanilla,strawberry,coffee,coffee').split(',');
console.log(flavors);

const stats = {};
 
for(let i = 0; i < flavors.length; i++){
    const flavor = flavors[i];
    if(stats[flavor] === undefined){
        stats[flavor] = 1;
    }
    else {
        stats[flavor] = stats[flavor] + 1;
    }
}
console.log(stats);