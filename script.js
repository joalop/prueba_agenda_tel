function check(xx, yy, zz){
    if(xx.value && yy.value && zz.value){
        return true;
    } else {
        alert(' No se puede Agregar el Nuevo Contacto \n Los campos estan incompletos');
        return false;
    }
};

function agregar(){
    let x, xx, yy, zz;
    x = document.querySelector('.data2'); // phater
    xx = document.querySelector('#name'); // data name
    yy = document.querySelector('#tel'); // data tel
    zz = document.querySelector('#email'); // data email

    if( check(xx, yy, zz) ){
        let element = document.createElement('section');
        element.classList.add('card');

        let element2 = document.createElement('section');
        element2.classList.add('icon');

        let element3 = document.createElement('section');
        element3.classList.add('data_list');

        let article = document.createElement('article');
        let dd = xx.value[0].toUpperCase();
        article.textContent = dd;

        element2.appendChild(article);

        element3.innerHTML = `
            <p class="card_name">${xx.value}</p>
            <p class="card_tel"><i class="fa-solid fa-mobile"></i> ${yy.value}</p>
            <p class="card_email"><i class="fa-solid fa-envelope"></i> ${zz.value}</p>
        `;

        element.appendChild(element2);
        element.appendChild(element3);
        x.appendChild(element);
    }
};

document.getElementById('add').addEventListener('click', (e) => {
    e.preventDefault();
    agregar();
});


document.getElementById('contactos').addEventListener('click', (e) => {
    let text_o = []; let maxName = '';

    document.querySelectorAll('.card .card_name').forEach((card_name) => {
        text_o.push( String( card_name.textContent) );
    });

    maxName = text_o[0];

    for(let i=1; i < text_o.length; i++){  if( text_o[i].length > maxName.length ){  maxName = text_o[i];   }   }

    alert(' El Contacto: ( '+maxName+' ) es el mas largo\nTiene '+maxName.length+' letras.');
});

