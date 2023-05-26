<script setup lang="ts">
import { ref } from 'vue'
import {storeToRefs} from 'pinia'
import { useThemeStore } from '@/stores/themeMsg'

function handleScroll() {
  var startHeight = window.pageYOffset || document.documentElement.scrollTop;
  var navigationHeight = document.querySelector('.hd-box').offsetHeight;

  window.addEventListener('scroll', function() {
    var endHeight = window.pageYOffset || document.documentElement.scrollTop;

    if (endHeight > navigationHeight) {
      document.querySelector('.hd-box').style.top = '-56px';
    } else {
      document.querySelector('.hd-box').style.top = '0';
    }

    if (endHeight < startHeight) {
      document.querySelector('.hd-box').style.top = '0';
    }

    startHeight = window.pageYOffset || document.documentElement.scrollTop;
  });
}

function handleResize() {
  var hdLg = document.querySelector('.hd-lg');
  var hdSm = document.querySelector('.hd-sm');

  function updateHeaderVisibility() {
    if (window.innerWidth < 800) {
      hdLg.style.display = 'none';
      hdSm.style.display = '';
    } else {
      hdLg.style.display = '';
      hdSm.style.display = 'none';
    }
  }

  updateHeaderVisibility();

  window.addEventListener('resize', function() {
    updateHeaderVisibility();
  });
}

document.addEventListener('DOMContentLoaded', function() {
  handleScroll();
  handleResize();
});
const Store = useThemeStore()
const {color} = storeToRefs(Store)
console.log(color)
</script>


<template>
<div class="hd-box">
  <div class="hd-lg">
    <div class="hd-log">
      <button>test</button>
    </div>
    <div class="hd-nav-box">
      <div class="hd-nav">
        <div class="hd-nav-item"><button>首页</button></div>
        <div class="hd-nav-item"><button>碎语</button></div>
        <div class="hd-nav-item"><button>留言</button></div>
        <div class="hd-nav-item"><button>阿巴阿巴</button></div>
      </div>
    </div>
    <div class="hd-theme">
      <div class="hd-theme-box">
        <button><i class="fas fa-moon"></i></button>
      </div>
    </div>
  </div>
  <div class="hd-sm">
    bbb
  </div>
</div>
  
</template>

<style scoped>
  .hd-box {
    position: fixed;
    top: 0;
    /* z-index: 99; */
    width: 100%;
    height: 56px;
    background-color: v-bind(color);
    transition: top 1s;
  }
  .hd-lg {
    display: flex; 
  }
  .hd-log {
    flex: 1;
    display: flex;
    justify-content: end;
  }
  .hd-log button{
    border: none;
    height: 100%;
    font-size: 1.75rem;
    font-weight: 600;
  }
  .hd-nav-box {
    flex: 3;
    display: flex;
    justify-content: center;
  }
  .hd-nav {
    width: 60%;
    display: flex;
    /* background-color: #f0efef; */
    align-content: center;
    justify-content: center;
  }
  .hd-nav :hover {
    background-color: #e9e8e8;
  }
  .hd-nav-item button{
    border: none;
    width: 100%;
    height: 100%; 
    font-size: 0.8rem;
    font-weight: 400;
  }

  .hd-theme {
    flex: 1;
    position: relative;
  }
  .hd-theme-box {
    position: absolute;
    top: 8px;
    cursor: pointer;
    /* text-align: center; */
  }
  .header-con-r-fa {
    cursor: pointer;
  }
  .hd-theme-box button{
    font-size: 1.25rem;
    border-style: none;
    border-radius: 8px;
  }
  .hd-theme-box :hover{
    background-color: #e9e8e8;
  }

  .hd-sm {
    display: flex;
    height: 100%;
  }
  .header-log-m button{
    margin: auto;
    border: none;
    height: 100%;
    font-size: 1.75rem;
    font-weight: 600;
  }
  .header-m-menu {
    position: relative;
    height: 36px;
    width: 36px;
    top: 8px;
    right: 16px;
    text-align: center;
    cursor: pointer;
    border-radius: 50%;
    box-shadow: 1px 1px 4px -3px rgb(168, 168, 168), -1px -1px 4px -3px rgb(168, 168, 168),
    -1px 1px 4px -3px rgb(168, 168, 168),1px -1px 4px -3px rgb(168, 168, 168);
  }
   .header-m-menu :hover{
    background-color: #e7e7e7c5;
   }
  .header-m-menu-i {
    position: absolute;
    width: 36px;
    height: 36px;
    top: 50%;
    left: 50%;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    font-size: 1.25rem;
  }
  .header-m-menu-i i {
    margin-top: 8px;
  }

</style>
