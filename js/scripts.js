function leapYear(event) {
    event.preventDefault()
    const form=new FormData(event.target)
    const year = parseInt(form.get("year"))
    if (year%4===0){
        alert("Year is leap year")
    }else {
        alert("Not a leap year")
    }
    //var Year = (  year%4 || ( year>( new Date().getFullYear() ) ) || ((document.getElementById("y").value)=="") );
}
