<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <title>청년이 청년하다</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reset-css@5.0.1/reset.min.css">
  <!--나눔고딕 폰트-->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700&display=swap" rel="stylesheet">
  <style>
      * {
          margin: 0;
          padding: 0;
          vertical-align: top;
          font-size: 12px;
          /*font*/
          font-family: 'Nanum Gothic', sans-serif;
          line-height: 1;
      }

      span {
          display: inline;
      }

      .layout {
          width: 100vw;
          height: 205.5vw;
          text-align: center;
          position: relative;
          background: url(image/11_backgound.png) no-repeat center bottom/100% 100%;
      }

      .overlay {
          position: absolute;
          top: 55%;
          left: 50%;
          width: 75%;
          height: 50%;
          overflow: hidden;
          transform: translate(-50%, -50%);
      }

      .overlay>div {
          margin: 0 auto;
          color: white;
          font-size: 3.5em;
          text-align: center;
          line-height: 1.3em;
          letter-spacing: -0.08em;
      }

      span {
          font-weight: bold;
          font-size: 1.1em;
      }
      .cdots {
          font-size: 0.8em;
          letter-spacing: -0.13em;
      }

      .overlay>.loading {
          height: 20%;
          background: url('image/loading.gif') no-repeat center bottom/contain;
          opacity: 20%;
          margin: 5%;
      }

      .overlay>.top {
          height: 10%;
          margin: 2%;
          background: url('image/topbg_txt_mark1.png') no-repeat center bottom/12%;
      }

      .overlay>.footer {
          height: 10%;
          margin: 3%;
          background: url('image/topbg_txt_mark2.png') no-repeat center bottom/12%;
      }
  </style>
</head>

<body>
<div class="layout">
  <div class="overlay">
    <div class="top"></div>
    <div class="top_txt"><span>물꼬기</span> 님은 지금<br>외출 준비중 <span class="cdots">&#183; &#183; &#183;</span></div>
    <div class="loading"></div>
    <div class="footer_txt">잠시만 기다려 주세요.</div>
    <div class="footer"></div>
  </div>
</div>
</body></html>