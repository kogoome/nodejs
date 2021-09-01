<?php
    include_once($_SERVER['DOCUMENT_ROOT'].'/inc/db_conn.php');
    include_once($_SERVER['DOCUMENT_ROOT'].'/inc/header.php');
?>
<style>
    body {
        margin: 0;
        background-color: #1a306d;
    }
    .layout {
        width: 100vw;
        height: 100vh;
        text-align: center;
    }

    .top {
        height: 25.67%;
        background: url('image/topbg_1.png') no-repeat center bottom/100% 100%;
        text-align: center;
        position: relative;
    }

    .top-sbj {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 60%;
        height: 70%;
        transform: translate(-50%, -50%);
    }

    .top-sbj-sb {
        width: 100%;
        height: 19%;
        margin: 2.5% 0;
    }

    .top-sbj-sb2 {
        width: 100%;
        height: 38%;
        margin: 2.5% 0;
    }

    .top img {
        height: 100%;
    }

    .mt {
        width: 85%;
    }

    .footer {
        height: 13.52%;
    }
    .footer_content {
        position: relative;
        top: 30%;
        left: 50%;
        width: 70%;
        height: 43%;
        border-radius: 6px;
        overflow: hidden;
        transform: translate(-50%, -50%);
    }
    .mb {
        position: absolute;
        width: 100%;
        left: 0;
    }
    


    .overlay {
        width: inherit;
        height: inherit;
    }

    /*section*/
    .section {
        height: 60.81%;
        text-align: center;
        background-color: white;
    }

    /*radio*/
    .section-content {
        margin: 0 auto;
        display: flex;
        width: 80%;
        height: 8%;
    }
    .section label{
        margin-right: 5.5%;
        margin-bottom: 20px;
    }
    .section label:last-child{
        margin-right: 0;
    }
    [type=radio] {
        display: none;
    }
    div > .chimg {
     opacity: 0;
     }
     [type=radio] {
     display: none;
     }
     [type=radio]:checked + div > .chimg{
        opacity: 1;
     }
    label {
        width:20%;
    }
    .chimg{
        width: 100%;
    }
    .section-content > p{
        width:20%;
        margin-top: 5%;
        margin-right: 5.5%;
        font-size: 2em;
        font-weight: bold;
        color: #696969;
    }
    .section-content > p:last-child{
        margin-right: 0;
    }

    /*result img*/
    .result-img{
        width: 100%;
        height: 65%;
    }
    .result-box {
        position: relative;
        width: 100%;
    }
    .result-box > img{
        position: absolute;
        left: 10%;
        width: 80%;
    }


    /*footer*/
    .footer {
        height: 13.52%;
        background-color: white;
    }

    .footer-content {
        position: relative;
        top: 50%;
        left: 50%;
        width: 85%;
        height: 60%;
        overflow: hidden;
        transform: translate(-50%, -50%);
    }

    .btn {
        float: left;
        display: inline-block;
        width: 16%;
        height: 100%;
    }

    .info_area {
        float: left;
        display: inline-block;
        width: 68%;
        height: 100%;
        background: url("/image/s1000~5000_button.png") no-repeat center bottom/100% 100%;
    }

    .info_area div {
        height: 100%;
        color: white;
        font-size: 3em;
        line-height: 2.8em;
    }

    .btn_prev, .btn_next {
        display: inline-block;
        width: 100%;
        height: 100%;
        vertical-align: top;
    }
    
    
    .btn_prev {
        background: url("/image/bottom_button_prev.png") no-repeat top/cover;
    }

    .btn_next {
        background: url("/image/bottom_button_next_off.png") no-repeat top/cover;
        /*background: url("/image/next.png") no-repeat top/cover*/
    }

</style>
<script>
$( document ).ready(function() {

    $('input[type=radio][name=hair_color]').change(function() {
        $(".btn_next").css("background: url('/image/bottom_button_next.png') no-repeat top/cover");
        $("#prev_img").attr("src", "/image/parts/<?=$_SESSION["BOTTOM_TYPE"]?>" + this.value + ".png");
    });

    $(".btn_next").click(function(){

        var bottom_color = $('input[name="bottom_color"]:checked').val();

        if( bottom_color === undefined ) {
            alert("하의컬러를 선택해 주세요.");
            return;
        } else {

            var json_data = {
                                 bottom_color : bottom_color
                                ,now_step  : 'set_bottom_color'
                            };
            json_data = JSON.stringify(json_data);

            $.ajax({
                type      : "POST"
                ,url      : "/process/process.php"
                ,cache    : false
                ,dataType : "text"
                ,data     : json_data
                ,success  : function(result) {
                    console.log(JSON.stringify(result));
                    data = JSON.parse(result);

                    if(data.message == "success" ) {
                        location.href=data.url;
                    } else {

                    }
                 }
                ,error : function(err) {
                    alert(err.responseText);
                 }
            }); // end ajax
        } // end if
    });

});
</script>
<? include_once($_SERVER['DOCUMENT_ROOT'].'/inc/check_session.php'); ?>
</head>
<body>
    <div class="layout">
        <div class="overlay">
            <div class="top">
                <div class="top-sbj">
                    <div class="top-sbj-sb"><img src="/image/topbg_txt_mark1.png" alt="txt-mark"></div>
                    <div class="top-sbj-sb2"><img src="/image/08_c3000_toptxt1.gif" alt=""></div>
                    <div class="top-sbj-sb"><img src="/image/topbg_txt_mark2.png" alt="txt-mark"></div>
                </div>
            </div>

            <div class="section">
                <div class="result-img">
                    <div class="result-box">
                        <img src="/image/parts/avatar_result_body.png" alt="">
                        <img src="/image/parts/<?=$_SESSION["HAIR_TYPE"]?><?=$_SESSION["HAIR_COLOR"]?>.png" alt="">
                        <img class="t-shirt" src="/image/parts/<?=$_SESSION["TOP_TYPE"]?><?=$_SESSION["TOP_COLOR"]?>.png" alt="">
                        <img id="prev_img" class="pants" src="/image/parts/<?=$_SESSION["BOTTOM_TYPE"]?>0.png" alt="">
                   </div>
               </div>
                <div class="section-content">
                    <label><input class="radio" name="bottom_color" id="bottom_color" value="0" type="radio"><div style="background:url('/image/color01.png') no-repeat center top/98% 98%;"><img class="chimg" src="/image/select_circle_clo.png" alt=""></div></label>
                    <label><input class="radio" name="bottom_color" id="bottom_color" value="1" type="radio"><div style="background:url('/image/color02.png') no-repeat center top/98% 98%;"><img class="chimg" src="/image/select_circle_clo.png" alt=""></div></label>
                    <label><input class="radio" name="bottom_color" id="bottom_color" value="2" type="radio"><div style="background:url('/image/color03.png') no-repeat center top/98% 98%;"><img class="chimg" src="/image/select_circle_clo.png" alt=""></div></label>
                    <label><input class="radio" name="bottom_color" id="bottom_color" value="3" type="radio"><div style="background:url('/image/color04.png') no-repeat center top/98% 98%;"><img class="chimg" src="/image/select_circle_clo.png" alt=""></div></label>
                    <label><input class="radio" name="bottom_color" id="bottom_color" value="4" type="radio"><div style="background:url('/image/color05.png') no-repeat center top/98% 98%;"><img class="chimg" src="/image/select_circle_clo.png" alt=""></div></label>
                </div>
                <div class="section-content">
                    <p>검정</p>
                    <p>핑크</p>
                    <p>빨강</p>
                    <p>주황</p>
                    <p>노랑</p>
                </div>
                <div class="section-content">
                    <label><input class="radio" name="bottom_color" id="bottom_color" value="5" type="radio"><div style="background:url('/image/color06.png') no-repeat center top/98% 98%;"><img class="chimg" src="/image/select_circle_clo.png" alt=""></div></label>
                    <label><input class="radio" name="bottom_color" id="bottom_color" value="6" type="radio"><div style="background:url('/image/color07.png') no-repeat center top/98% 98%;"><img class="chimg" src="/image/select_circle_clo.png" alt=""></div></label>
                    <label><input class="radio" name="bottom_color" id="bottom_color" value="7" type="radio"><div style="background:url('/image/color08.png') no-repeat center top/98% 98%;"><img class="chimg" src="/image/select_circle_clo.png" alt=""></div></label>
                    <label><input class="radio" name="bottom_color" id="bottom_color" value="8" type="radio"><div style="background:url('/image/color09.png') no-repeat center top/98% 98%;"><img class="chimg" src="/image/select_circle_clo.png" alt=""></div></label>
                    <label><input class="radio" name="bottom_color" id="bottom_color" value="9" type="radio"><div style="background:url('/image/color10.png') no-repeat center top/98% 98%;"><img class="chimg" src="/image/select_circle_clo.png" alt=""></div></label>
                </div>
                <div class="section-content">
                    <p>초록</p>
                    <p>하늘</p>
                    <p>파랑</p>
                    <p>보라</p>
                    <p>하양</p>
                </div>
            </div>

            <div class="footer">
                <div class="footer-content">
                    <div class="btn">
                        <a id="prev" class="btn_prev" href="set_bottom_type" role="button"><span class="blind"></span></a>
                    </div>
                    <div class="info_area">
                        <div>하의 스타일 완성</div>
                    </div>
                    <div class="btn">
                        <span class="btn_next"><span class="blind"></span></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>