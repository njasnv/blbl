<template>
  <div class="container">
    <!-- 顶部导航 -->
    <div class="navigate">
      <!-- 导航栏左侧 -->
      <div class="nav_left">
        <ul>
          <li><a href="#">首页</a></li>
          <li><a href="#">番剧</a></li>
          <li><a href="#">会员购</a></li>
        </ul>
      </div>

      <!-- 搜索框 -->
       <div class="search">
          <input type="text">
          <div class="icon"><i class="iconfont icon-sousuo"></i></div>
       </div>
       
      <!-- 导航栏右侧 -->
      <div class="nav_right">
        <ul>
          <li class="login">
            <a href="#" style="color: #00adeb;">立即登录</a>
            <!-- 弹出框 -->
            <div class="login_popup">
              <p style="color: #000;margin-left: 10px;font-weight: 700;">登录后你可以：</p>
              <ul style="color: #000;">
                <li>📺 免费看高清视频</li>
                <li>🔄 多端同步播放记录</li>
                <li>💬 发表弹幕/评论</li>
                <li>🔥 热门番剧影视看不停</li>
              </ul>
              <div class="login_bottom">
                <button class="login_btn">立即登录</button>
                <p class="register">首次使用？<a href="#">点我注册</a></p>
              </div>
            </div>
          </li>
          <li><a href="#">创作</a></li>
          <li><a href="#">投稿</a></li>
        </ul>
      </div>
    </div>

    <!-- 顶部背景图 -->
    <div class="top_bgc"></div>

    <!-- 标签栏 -->
     <div class="label"></div>

     <!-- 视频区 -->
    <div class="video">
      <!-- 轮播图 -->
      <div class="slideshow"></div>

      <!-- 视频 -->
      <div class="video_inside"></div>
    </div>
  </div>
</template>

<script setup>
import '../assets/iconfont/iconfont.css';
</script>

<style scoped>
.navigate {
  display: flex;
  align-items: center;
  padding: 0 20px;
  padding-top: 15px;
  justify-content: space-between;
}

.nav_left,
.search,
.nav_right {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.nav_left ul,
.nav_right ul {
  display: flex;
}

.nav_left ul li,
.nav_right ul li {
  font-size: 20px;
  margin: 0 10px;
  position: relative;
}

.search {
  display: flex;
  padding: 5px 10px;
  border: 2px solid #000;
  border-radius: 5px;
  max-width: 300px;
}

.search input {
  flex: 1;
  border: none;
  outline: none;
  padding: 0 10px;
  font-size: 16px;
}

/* 弹出框 */
.login_popup {
  display: none; /* 默认隐藏 */
  position: absolute;
  top: 50px; /* 控制弹出框位置 */
  right: 0;
  width: 350px;
  height: 200px;
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  padding: 10px;
  z-index: 10;
}

.login_popup p {
  font-size: 14px;
  margin: 5px 0;
}

.login_popup ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  padding: 0;
  margin: 10px 0;
}

.login_popup ul li {
  width: 50%; /* 每行显示两个，间距为 48% */
  box-sizing: border-box; /* 包括 padding 和边框在内 */
  font-size: 14px;
  margin-bottom: 5px; /* 下方间距 */
}

.login_bottom {
  text-align: center;
}
.login_btn {
  width: 90%;
  padding: 5px 0;
  margin: 10px 0;
  background-color: #00adeb;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-align: center;
}

.login_btn:hover {
  background-color: #0099cc;
}

.register {
  text-align: center;
  margin-top: 10px; /* 添加上方间距 */
}
.register a {
  color: #00adeb;
  text-decoration: none;
}

.register a:hover {
  text-decoration: underline;
}

/* 显示弹出框 */
.login:hover .login_popup,
.login .login_popup:hover {
  display: block;
}

</style>