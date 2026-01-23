$(document).ready(function(){   

    $(".navi>li").mouseover(function(){        
        $(this).find(".submenu").stop().slideDown(500);    
    });
    $(".navi>li").mouseout(function(){
        $(this).find(".submenu").stop().slideUp(500);
    });

    $(".imgslide a:gt(0)").hide();
    setInterval(function(){
        $(".imgslide a:first-child")
        .fadeOut()
        .next("a")
        .fadeIn()
        .end()
        .appendTo(".imgslide");
    },3000);
    
    //팝업열기
    showLayer();

    //닫기 버튼 누르기
    $(".btn2").click(function(){
        $('#layer').removeClass("active"); 
    });

    //1일동안보지않음
    $(".btn1").click(function(){
        //쿠키생성
        setCookie00("popup", "done", 1);
        $('#layer').removeClass("active"); 
    });

    // 팝업 요소와 드래그 제어 변수 선언
    var $popup = $('#layer'); // 팝업 요소
    var dragapproved = false;
    let initialX = "";
    let initialY = "";
    let currentX = "";
    let currentY = "";
    var offset = { x: 0, y: 0 }; // 마우스와 팝업의 초기 offset

    $(document).on('mousedown', function(e) {
        dragapproved = true;

        // 마우스 포인터 위치 저장
        initialX = e.clientX;
        initialY = e.clientY;

        // 팝업의 현재 위치 저장
        currentX = $popup.offset().left;
        currentY = $popup.offset().top;

        // 팝업의 현재 위치와 마우스 클릭 위치의 차이 계산
        // 마우스가 움직인 거리 계산
        offset.x = initialX - currentX;
        offset.y = initialY - currentY;
        $popup.css('cursor', 'grabbing'); // 커서 모양 변경
    });

    $(document).on('mousemove', function(e) {
        if (!dragapproved) return; // 드래그가 승인되지 않았으면 함수 종료
        
        // 팝업의 새 위치 계산
        var newLeft = e.clientX - offset.x;
        var newTop = e.clientY - offset.y;

        var minLeft = 0; //팝업의 최소 좌표(화면의 왼쪽 상단)
        var minTop = 0;
        var maxLeft = $(window).width() - $popup.outerWidth(); //팝업의 최대좌표(화면의 우측 하단)
        var maxTop = $(window).height() - $popup.outerHeight();
        //console.log("maxLeft:"+maxLeft+"   maxTop:"+maxTop);

        newLeft = Math.min(Math.max(minLeft, newLeft), maxLeft);
        newTop = Math.min(Math.max(minTop, newTop), maxTop);

        // 팝업 위치 업데이트
        $popup.css({ top: newTop, left: newLeft });
    });

    $(document).on('mouseup', function() {
        if (dragapproved) {
            dragapproved = false;
            $popup.css('cursor', 'grab'); // 커서 모양 변경
        }
    });
});

function showLayer(){
    // 팝업창에 주어진 이름을 변수로 던져 저장된 쿠키가 있는지 확인 
    var popup = getCookie('popup');
    //console.log("popup:"+popup);

    // 변수가 없을경우 팝업 열기
    if (!popup) {
        $('#layer').addClass("active");        
    }
}

// 쿠키 가져오기 
function getCookie(name) {
    var nameOfCookie = name + "=";
    var x = 0;
    //console.log("document.cookie.length :"+document.cookie.length);
    while (x <= document.cookie.length) {
        var y = (x + nameOfCookie.length);
        //console.log("popup :"+document.cookie.substring(x, y));
        if (document.cookie.substring(x, y) == nameOfCookie) {
            if ((endOfCookie = document.cookie.indexOf(";", y)) == -1)
                endOfCookie = document.cookie.length;
            return unescape(document.cookie.substring(y, endOfCookie));
        }
        x = document.cookie.indexOf(" ", x) + 1;
        if (x == 0) break;
    }
    return "";
} 

// 24시간 기준 쿠키 설정하기 
// 00:00 시 기준 쿠키 설정하기 // expiredays 의 새벽 00:00:00 까지 쿠키 설정 
function setCookie00(name, value, expiredays) {
    var todayDate = new Date(); todayDate = new Date(parseInt(todayDate.getTime() / 86400000) * 86400000 + 54000000);
    if (todayDate > new Date()) {
        expiredays = expiredays - 1;
    }
    todayDate.setDate(todayDate.getDate() + expiredays);
    document.cookie = name + "=" + escape(value) + "; path=/; expires=" + todayDate.toGMTString() + ";";
}