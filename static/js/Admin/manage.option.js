
$(document).ready(function() {
  let addOption=document.getElementById("addOption");
  let OptionList=document.getElementById("OptionList");
  let removeOption=document.getElementsByClassName("removeOption");
  let OptionObject=document.getElementsByClassName("OptionObject");

  addOption.addEventListener("click",function(){
    let str="<tr class='OptionObject'>"+
                            "<td>"+
                              "<i class='fas fa-trash-alt removeOption' style='cursor: pointer;'></i>"+
                            "</td>"+
                            "<td>"+
                              "<input type='text' placeholder='옵션명' />"+
                            "</td>"+
                            "<td>"+
                              "<input type='text' placeholder='옵션' />"+
                            "</td>"+
                            "<td>"+
                              "<input type='text' onKeyup='inputNumberAutoComma(this);' placeholder='개'/>"+
                            "</td>"+
                          "</tr>";
    $('#OptionList').append(str);
    for(let i=0;i<removeOption.length;i++)
    {
        removeOption[i].addEventListener("click",function(){
          $(OptionObject[$(this).parent().parent().index()]).remove();
          // parent.parentNode.removeChild(parent);
        });
    }
  });

});