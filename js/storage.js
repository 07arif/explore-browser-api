document.getElementById('btn-add-name').addEventListener('click',function(){
    const nameField = document.getElementById('name-field');
    const nameValue = nameField.value;

// name field blank kora
    nameField.value= '';
    console.log(nameValue)

//name add to ls
    localStorage.setItem('name',nameValue);

//name  remove from ls
    document.getElementById('btn-remove-name').addEventListener('click',function(){
    localStorage.removeItem('name');
    })
    })

document.getElementById('btn-add-age').addEventListener('click',function(){
    const ageField = document.getElementById('age-field');
    const ageValue = ageField.value;
// age field blank kora 
    ageField.value = '';
    console.log(ageValue);

// age add 
    localStorage.setItem('age',ageValue);

// remove age from ls 
    document.getElementById('btn-remove-age').addEventListener('click',function(){
    localStorage.removeItem('age',ageValue)
    })
    })
