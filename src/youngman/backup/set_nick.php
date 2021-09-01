<?php
    include_once($_SERVER['DOCUMENT_ROOT'].'/inc/header.php');
?>
<style>
    body {
        margin: 0;
    }

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

    p {
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

    /*활성화*/
/*
    .mb {
        top: 0;
    }
*/

    /*hover 이미지*/
    /*
    .mb:hover {
        top: -24.1vw;
    }
*/

    /*비활성화*/
    
    .mb {
        top: -36.2vw;
    }



    .top-sbj {
        padding-top: 18%;
    }

    .mt {
        width: 85%;
    }

</style>
<script>
    $(document).ready(function() {
        $("#user_nick").focus();

        $("#user_nick").keydown(function(e) {
            $(".mb").css("top", "0");
        });



        $(".btn_next").click(function() {

            if ($("#user_nick").val() == "") {
                alert("이름 또는 닉네임을 알려주세요.");
                $("#user_nick").focus();
            } else {

                var json_data = {
                    user_nick: $("#user_nick").val(),
                    now_step: 'set_nick'
                };
                json_data = JSON.stringify(json_data);

                $.ajax({
                    type: "POST",
                    url: "/process/process.php",
                    cache: false,
                    dataType: "text",
                    data: json_data,
                    success: function(result) {
                        console.log(JSON.stringify(result));
                        data = JSON.parse(result);

                        if (data.message == "success") {
                            location.href = data.url;
                        } else {

                        }
                    },
                    error: function(err) {
                        alert(err.responseText);
                    }
                }); // end ajax
            } // end if
        });

    });

</script>
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
                    <input class="inputBox" type="text" id="user_nick" name="user_nick" placeholder="이름 또는 닉네임을 알려주세요" /><br><br>
                    <p>입력후 아래 버튼을 클릭하면 이후 입력 내용을 변경할 수 없습니다.</p><br><br>
                </div>
            </div>

            <div class="footer">
                <div class="footer_content">
                    <a href="/03_s1000.php"><img src="image/02_name_button.png" class="mb" alt="main-btn"></a>
                </div>
            </div>



            <!--
            <div class="footer">
                <div class="footer-content">
                    <div class="info_area"><div>이렇게 정했어요</div></div>
                    <div class="btn"><span class="btn_next"><span class="blind"></span></span></div>
                </div>
            </div>
-->


        </div>
    </div>
</body>

</html>