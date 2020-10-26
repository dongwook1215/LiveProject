$(document).ready(function() {
    $datepicker( "#datepicker" ).datepicker({ minDate: 1});

    let date=document.getElementById('datepicker');
    let time=document.getElementById('datepicker_time');
    document.getElementById("resetDate").addEventListener("click",function(){
        date.value="";
        time.value="";
    })
});