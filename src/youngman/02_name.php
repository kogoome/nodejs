<!DOCTYPE html>
<html>
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
                    <img src="/image/02_name_txt.gif" class="mt" alt="main-title">
                </div>
            </div>
            <div class="section">
                <div class="section-content">
                    <form action="">
                        <input class="inputBox" type="text" name="name" placeholder="이름 또는 닉네임을 알려주세요"><br><br>
                        <p>입력후 아래 버튼을 클릭하면 이후 입력 내용을 변경할 수 없습니다.</p>
                    </form><br><br>
                </div>
            </div>

            <div class="footer">
                <div class="footer_content">
                    <a href="/03_s1000.php"><img src="image/02_name_button.png" class="mb" alt="main-btn"></a>
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
    }

    .section {
        position: relative;
        height: 60.82%;
    }
    .overlay {
        width: inherit;
        height: inherit;
    }

    .section-content {
        width: 70%;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }

    .inputBox {
        width: 100%;
        background-color: transparent;
        border: none;
        border-bottom: 8px solid #1a306d;
        font-size: 2.5em;
        text-align: center;
        line-height: 2em;
    }
    p{
        font-size: 1.3em;
        color: #696969;
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
    .top-sbj {
        padding-top: 18%;
    }

    .mt {
        width: 85%;
    }
</style></html>