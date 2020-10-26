function todayLiveModal(){
    let div = document.createElement('div');
    div.id='todayLiveModal';
    document.body.appendChild(div);

    str="<div id='modal' class='searchModal'>"+
    "<div class='search-modal-content'>"+
    "<div class='page-header' align='center'>"+
    "<h2>Today Live</h2>"+
    "</div>"+
    "<div id='canvas'>"+
    "<div id='merry'>"+
        "<div class='face'>"+
            "<div class='cell'></div>"+
        "</div>"+
        "<div class='face'>"+
            "<div class='cell'></div>"+
        "</div>"+
        "<div class='face'>"+
            "<div class='cell'></div>"+
        "</div>"+ 
        "<div class='face'>"+
            "<div class='cell'></div>"+
        "</div>"+ 
        "<div class='face'>"+
            "<div class='cell'></div>"+
        "</div>"+ 
        "<div class='face'>"+
            "<div class='cell'></div>"+
        "</div>"+ 
        "<div class='face'>"+
            "<div class='cell'></div>"+
        "</div>"+           
    "</div>"+
    "</div>"+
    "<hr>"+
    "<div id='modal_close' style='cursor:pointer;background-color:#DDDDDD;text-align: center;padding-bottom: 10px;padding-top: 10px;'>"+
    "<span class='pop_bt modalCloseBtn' style='font-size: 13pt;'>"+"닫기"+
    "</span>"+
    "</div>"+
    "</div>"+
    "</div>";

    document.getElementById(div.id).insertAdjacentHTML("beforeend",str);
    $("#modal").show();

    $(document).off("click","#modal_close").on("click","#modal_close",function(){
        $(".searchModal").hide();
        $("#"+div.id).remove();
    });

    // document.getElementById("wrapper").innerHTML=document.getElementById("wrapper").innerHTML+str;
}
function closeModal(){
    $(".searchModal").hide();
}
function showModal(){
    $("#modal").show();
}