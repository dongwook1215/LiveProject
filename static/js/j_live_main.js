$(document).ready(function(){
    let loginKakao=document.getElementById("loginKakao");
    let page=$('#page');
    // 사이드 바 관련된 함수
    // 로그인/회원가입 버튼을 눌렀을 경우
    // let mv_login=document.getElementById("mv_login");
    // mv_login.addEventListener("click",function(){
    //     page.fadeOut(function(){
    //         location.href="/login_register/";
    //     });
    // });
    // 오늘의 라이브 버튼을 눌렀을 경우
    // let Live_Modal=document.getElementById("Live_Modal");
    // Live_Modal.addEventListener("click",function(){
    //     console.log("오늘의 라이브 모달 띄우기");
    //     todayLiveModal();
    // })
    loginCheck();
    // console.log(loginCheck());
    // if(user===undefined)
    // {
    //     loginKakao.innerHTML="로그인";
    // }else{
    //     loginKakao.innerHTML="로그아웃";
    // }
    
    loginKakao.addEventListener("click",function(){
        let temp=document.getElementById("loginKakao");
        if(temp.innerHTML==="로그인"){
            logInKakao();
        }
        if(temp.innerHTML==="로그아웃"){
            logOutKakao();
        }
    })
})
function loginCheck(){
    Kakao.API.request({
        url: '/v2/user/me',
        success: function(response) {
            document.getElementById("loginKakao").innerHTML="로그아웃";
            document.getElementById("User").innerHTML=response.kakao_account.profile.nickname;
            console.log("회원 정보",response);
            document.getElementById("kakao-link-btn").style.visibility="visible";
        },
        fail: function(error) {
            document.getElementById("loginKakao").innerHTML="로그인";
            console.log(error);
        }
    });
}
function logOutKakao(){
        if (!Kakao.Auth.getAccessToken()) {
            alert('Not logged in.');
            return;
        }
        Kakao.Auth.logout(function() {
            console.log(Kakao.Auth.getAccessToken());
            document.getElementById("loginKakao").innerHTML="로그인";
            document.getElementById("User").innerHTML="Main";
            document.getElementById("kakao-link-btn").style.visibility="hidden";
        });
}
function logInKakao(){
        try{
            return new Promise((resolve, reject) => {
                if(!Kakao){
                    reject('카카오 인스턴스가 존재하지 않습니다.')
                }
                Kakao.Auth.login({
                    success: (auth) => {
                        console.log("정상적으로 로그인이 되었습니다.", auth);
                        loginCheck();
                    },
                    fail: (err) => {
                        console.error(err)
                    }
                })
            })
        }catch(err){
            console.error(err);
        }
}
