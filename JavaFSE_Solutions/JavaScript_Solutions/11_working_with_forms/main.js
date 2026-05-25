document.getElementById('regForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent default
    
    // form.elements
    const nameVal = this.elements['userName'].value;
    const emailVal = this.elements['userEmail'].value;
    
    let valid = true;
    if(!nameVal) { document.getElementById('nameError').style.display='block'; valid=false; }
    else { document.getElementById('nameError').style.display='none'; }
    
    if(!emailVal.includes('@')) { document.getElementById('emailError').style.display='block'; valid=false; }
    else { document.getElementById('emailError').style.display='none'; }

    if(valid) alert('Validated JS form submission!');
});
