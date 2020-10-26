
window.onload=function(){
    let register_btn=document.getElementById("register_btn");
    let login_btn=document.getElementById("login_btn");

    // 회원가입 버튼을 클릭시 작동하는 부분
    register_btn.addEventListener("click", function(){
        let item={
            'id': document.getElementById("register_id").value,
            'email': document.getElementById("register_email").value,
            'password': document.getElementById("register_password").value
        };
        $.ajax({
            url: "register",
            type: "get",
            async: false,
            data: item,
            success: function (result) {
                if(result==="success")
                {
                    alert("회원 가입에 성공하셨습니다!!!");
                    login();   
                }else{
                    alert('이미 존재하는 회원입니다.');
                }
            },
            error: function (err) {
                console.log(err);
            },
            complete: function(){

            }
        });
    });

    // 로그인 버튼을 클릭시 작동하는 부분
    login_btn.addEventListener("click", function(){
        let item={
            'id': document.getElementById("login_id").value,
            'password': document.getElementById("login_password").value
        };
        $.ajax({
            url: "login",
            type: "get",
            async: false,
            data: item,
            success: function (result) {
                if(result==="success")
                {
                    alert("로그인 성공!!!!");  
                    location.href="/";
                }else{
                    alert('로그인 실패.....');
                }
            },
            error: function (err) {
                console.log(err);
            },
            complete: function(){

            }
        });
    });

}
