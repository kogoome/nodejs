<?php
    include_once($_SERVER['DOCUMENT_ROOT'].'/inc/db_conn.php');
    include_once($_SERVER['DOCUMENT_ROOT'].'/inc/header.php');
?>
<style>
    body {
        font-family: 'Nanum Gothic', sans-serif;
    }

    .layout {
        width: 100vw;
        height: 205.5vw;
        text-align: center;
    }

    .top {
        height: 25.67%;
        background: url('/image/topbg_1.png') no-repeat center bottom/100% 100%;
        text-align: center;
        position: relative;
    }

    .top-sbj {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 80%;
        height: 70%;
        transform: translate(-50%, -50%);
    }

    .top-sbj-sb {
        width: 100%;
        height: 19%;
        margin-top: 2.5%;
        margin-bottom: 2.5%;
    }

    .top-sbj-sb div {
        display: inline-block;
        line-height: 80%;
        color: white;
        font-weight: bolder;
        font-size: 2.9em;
    }

    .top-sbj-sb img {
        height: 100%;
    }

    .section {
        height: 60.81%;
        background-color: white;
        text-align: center;
    }

    .section-content {
        position: relative;
        top: 50%;
        left: 50%;
        width: 80%;
        height: 77%;
        border-radius: 6px;
        transform: translate(-50%, -50%);
    }

    .flex-container {
        display: flex;
        height: 23.33%;
        justify-content: space-between;
    }

    .flex-container>label {
        width: 29%;
        height: 100%;
    }

    label div {
        width: 100%;
        height: 100%;
    }

    label>div>img {
        width: 100%;
        height: 100%;
        opacity: 0;
    }

    [type=radio] {
        display: none;
    }

    [type=radio]:checked+div>img {
        opacity: 1;
    }

    .flex-container-caption {
        display: flex;
        text-align: center;
        font-size: 1.5em;
        height: 10%;
        justify-content: space-between;
    }

    .name {
        display: inline-block;
        float: left;
        padding-top: 3%;
        width: 28%;
        height: 100%;
    }

    .footer {
        height: 13.52%;
        color: #626262;
    }

    .footer-btn {
        padding-top: 0;
    }

    .overlay {
        width: inherit;
        height: inherit;
    }
    /*footer*/
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
</style>
</head>

<body>
    <div class="layout">
        <div class="overlay">
            <div class="top">
                <div class="top-sbj">
                    <div class="top-sbj-sb"><img src="/image/topbg_txt_mark1.png" alt="txt-mark"></div>
                    <div class="top-sbj-sb">
                        <div><?=$_SESSION['USER_NM']?></div><img src="/image/03_s1000_toptxt1.gif" alt="">
                    </div>
                    <div class="top-sbj-sb"><img src="/image/03_s1000_toptxt2.gif" alt=""></div>
                    <div class="top-sbj-sb"><img src="/image/topbg_txt_mark2.png" alt="txt-mark"></div>
                </div>
            </div>
            <div class="section">
                <div class="section-content">
                    <div class="flex-container">
                        <label><input name="1" type="radio">
                            <div style="background:url('/image/03_s1002.png') no-repeat center bottom/100% 100%;"><img src="/image/select_circle_cha.png" alt=""></div>
                        </label>
                        <label><input name="1" type="radio">
                            <div style="background:url('/image/03_s1002.png') no-repeat center bottom/100% 100%;"><img src="/image/select_circle_cha.png" alt=""></div>
                        </label>
                        <label><input name="1" type="radio">
                            <div style="background:url('/image/03_s1003.png') no-repeat center bottom/100% 100%;"><img src="/image/select_circle_cha.png" alt=""></div>
                        </label>
                    </div>
                    <div class="flex-container-caption">
                        <div class="name">민머리</div>
                        <div class="name">스포츠머리</div>
                        <div class="name">숏컷</div>
                    </div>
                    <div class="flex-container">
                        <label><input name="1" type="radio">
                            <div style="background:url('/image/03_s1004.png') no-repeat center bottom/100% 100%;"><img src="/image/select_circle_cha.png" alt=""></div>
                        </label>
                        <label><input name="1" type="radio">
                            <div style="background:url('/image/03_s1005.png') no-repeat center bottom/100% 100%;"><img src="/image/select_circle_cha.png" alt=""></div>
                        </label>
                        <label><input name="1" type="radio">
                            <div style="background:url('/image/03_s1006.png') no-repeat center bottom/100% 100%;"><img src="/image/select_circle_cha.png" alt=""></div>
                        </label>
                    </div>
                    <div class="flex-container-caption">
                        <div class="name">단발</div>
                        <div class="name">장발 생머리</div>
                        <div class="name">장발 웨이브</div>
                    </div>
                    <div class="flex-container">
                        <label><input name="1" type="radio">
                            <div style="background:url('/image/03_s1007.png') no-repeat center bottom/100% 100%;"><img src="/image/select_circle_cha.png" alt=""></div>
                        </label>
                        <label><input name="1" type="radio">
                            <div style="background:url('/image/03_s1008.png') no-repeat center bottom/100% 100%;"><img src="/image/select_circle_cha.png" alt=""></div>
                        </label>
                        <label><input name="1" type="radio">
                            <div style="background:url('/image/03_s1009.png') no-repeat center bottom/100% 100%;"><img src="/image/select_circle_cha.png" alt=""></div>
                        </label>
                    </div>
                    <div class="flex-container-caption">
                        <div class="name">똥머리</div>
                        <div class="name">최준머리</div>
                        <div class="name">불꽃머리</div>
                    </div>
                </div>
            </div>
            <div class="footer">
                <div class="footer_content">
                    <a href="04_c1000"><img src="/image/02_name_button.png" class="mb" alt="main-btn"></a>
                </div>
            </div>
        </div>
    </div>
</body>
</html>