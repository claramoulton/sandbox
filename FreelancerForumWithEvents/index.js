const names = ['Dr. Slice', 'Dr. Pressure', 'Prof. Possibility', 'Prof. Prism', 'Dr. Impulse', 'Prof. Spark', 'Dr. Wire', 'Prof. Goose'];
const occupations = ['gardener', 'programmer', 'teacher', 'gardner'];
const productsList = window.document.querySelector('#productsList');
//const spanAverageRate = document.querySelector('#spanAverageRate');

function generateRandom(){
    const nameIdx = Math.floor(Math.random()*names.length);
    const name = names[nameIdx];
    const occupationIdx = Math.floor(Math.random()*occupations.length);
    const occupation = occupations[occupationIdx];
    const price = Math.ceil(Math.random() * 100);

    return {
        name,
        occupation,
        price
    };
};

function render(){
    const lis = products.map(function(product){
        return `<li>${product.name} <br>
        price: $${product.price} <br>
        occupation: ${product.occupation}</li>`;
    }).join('');
    productsList.innerHTML = lis;
};

const products = [];
products.push(generateRandom());
products.push(generateRandom());

render();
