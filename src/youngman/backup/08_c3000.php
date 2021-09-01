<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>청년이 청년하다</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reset-css@5.0.1/reset.min.css">
</head>

<body>
    <div class="layout">
        <div class="overlay">
            <div class="top">
                <div class="top-sbj">
                    <div class="top-sbj-sb"><img src="image/topbg_txt_mark1.png" alt="txt-mark"></div>
                    <div class="top-sbj-sb2"><img src="image/08_c3000_toptxt1.gif" alt=""></div>
                    <div class="top-sbj-sb"><img src="image/topbg_txt_mark2.png" alt="txt-mark"></div>
                </div>
            </div>
            
            <div class="section">
               <div class="result-img"><img src="image/resultbox.png" alt=""></div>
                <div class="section-content">
                    <label><input class="radio" name="1" type="radio"><div style="background:url('image/color01.png') no-repeat center top/98% 98%;"><img class="chimg" src="image/select_circle_clo.png" alt=""></div></label>
                    
                    <label><input class="radio" name="1" type="radio"><div style="background:url('image/color02.png') no-repeat center top/98% 98%;"><img class="chimg" src="image/select_circle_clo.png" alt=""></div></label>
                    <label><input class="radio" name="1" type="radio"><div style="background:url('image/color03.png') no-repeat center top/98% 98%;"><img class="chimg" src="image/select_circle_clo.png" alt=""></div></label>
                    <label><input class="radio" name="1" type="radio"><div style="background:url('image/color04.png') no-repeat center top/98% 98%;"><img class="chimg" src="image/select_circle_clo.png" alt=""></div></label>
                    <label><input class="radio" name="1" type="radio"><div style="background:url('image/color05.png') no-repeat center top/98% 98%;"><img class="chimg" src="image/select_circle_clo.png" alt=""></div></label>
                </div>
                <div class="section-content">
                    <p>검정</p>
                    <p>핑크</p>
                    <p>빨강</p>
                    <p>주황</p>
                    <p>노랑</p>
                </div>
                <div class="section-content">
                    <label><input class="radio" name="1" type="radio"><div style="background:url('image/color06.png') no-repeat center top/98% 98%;"><img class="chimg" src="image/select_circle_clo.png" alt=""></div></label>
                    <label><input class="radio" name="1" type="radio"><div style="background:url('image/color07.png') no-repeat center top/98% 98%;"><img class="chimg" src="image/select_circle_clo.png" alt=""></div></label>
                    <label><input class="radio" name="1" type="radio"><div style="background:url('image/color08.png') no-repeat center top/98% 98%;"><img class="chimg" src="image/select_circle_clo.png" alt=""></div></label>
                    <label><input class="radio" name="1" type="radio"><div style="background:url('image/color09.png') no-repeat center top/98% 98%;"><img class="chimg" src="image/select_circle_clo.png" alt=""></div></label>
                    <label><input class="radio" name="1" type="radio"><div style="background:url('image/color10.png') no-repeat center top/98% 98%;"><img class="chimg" src="image/select_circle_clo.png" alt=""></div></label>
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
                        <a id="prev" class="btn_prev" href="07_s3000" role="button"><span class="blind"></span></a>
                    </div>
                    <div class="info_area">
                        <div>하의 스타일 완성</div>
                    </div>
                    <div class="btn">
                        <a id="next" class="btn_next" href="09_s4000" role="button"><span class="blind"></span></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
<style>
    .layout {
        width: 100vw;
        height: 205.5vw;
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
    .mb:hover {
        top:-24.1vw;
    }
    

    .overlay {
        width: inherit;
        height: inherit;
    }
    
    /*section*/
    .section {
        height: 60.81%;
        text-align: center;
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
        margin: 3% 0;
    }
    .result-img > img{
        width: 80%;
    }


    /*footer*/
    .footer {
        height: 13.52%;
        background-color: white;
    }

    .footer-content {
        position: relative;
        top: 30%;
        left: 50%;
        width: 80%;
        height: 43%;
        overflow: hidden;
        transform: translate(-50%, -50%);
    }

    .btn {
        float: left;
        display: inline-block;
        width: 15%;
        height: 100%;
    }

    .info_area {
        float: left;
        display: inline-block;
        width: 70%;
        height: 100%;
        background: url("image/s1000~5000_button.png") no-repeat center bottom/100% 100%;
    }

    .info_area div {
        color: white;
        font-size: 3em;
        margin-top: 6%;
    }

    .btn_prev, .btn_next {
        display: inline-block;
        width: 100%;
        height: 100%;
        vertical-align: top;
        background: url("image/btn_btm_lr.png") no-repeat top/cover;
    }

    .btn_prev {
        background-position: 0 0%;
        /*비활성화*/
        /*background-position: 0 33.35%;*/
    }

    .btn_next {
        background-position: 0 67%;
        /*비활성화*/
        /*background-position: 0 100%;*/
    }

</style></html>