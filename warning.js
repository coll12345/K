function radioValue(radio) {
    for (var i = 0; i < radio.length; i++) {
        if (radio[i].checked) {
            return radio[i].value;
        }
    }
}


function store() {
    var name = document.getElementById('1').value;
    var register = document.getElementById('2').value;
    var sem = document.getElementById('3').value;
    var course = document.getElementById('4').value;
    var faculty = document.getElementById('5').value;


    var handRadios = document.forms["myform"].elements["handgestures"];
    var handSkills = radioValue(handRadios);
    var commRadios = document.forms["myform"].elements["communication"];
    var commSkills = radioValue(commRadios);
   
   
    if (!/^111(CS|ME|AT|EE|EC)\d{5}$/.test(register)) {
        alert("Invalid registration number");
        return false;
    }

   
    if (isNaN(sem) || sem < 1 || sem > 6) {
        alert("Semester should be entered within 1 to 6.");
        return false;
    }


    if (faculty.length <= 2 || faculty.length>=20 || /\d/.test(faculty)) {
        alert("Enter a valid Faculty Name.");
        return false;
    }

    sessionStorage.name = name;
    sessionStorage.register = register;
    sessionStorage.sem = sem;
    sessionStorage.course = course;
    sessionStorage.faculty = faculty;
    sessionStorage.handgestures = handSkills;
    sessionStorage.communicationskills = commSkills;
}
