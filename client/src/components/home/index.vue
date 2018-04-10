<template>
  <el-container>
    <el-header>高锰酸钾：优秀前端催化剂</el-header>
    <el-main style="display:flex;flex-flow:row nowrap;">  
        <div>
          <el-steps direction="vertical" :active="0" finish-status="success">
            <el-step title="前端框架"></el-step>
            <el-step title="路由管理"></el-step>
            <el-step title="状态管理"></el-step>
            <el-step title="前端组件库"></el-step>
            <el-step title="编译器"></el-step>
            <el-step title="lint检测"></el-step>
            <el-step title="发布器"></el-step>
          </el-steps>
        </div>
        
        <div style="margin-left: 20px;padding:20px;border:1px solid #ccc;flex:1;border-radius:5px;">
          <el-collapse style="margin-top: 12px;" v-model="activeNames" @change="handleChange" accordion>
            <el-collapse-item title="Vue" name="1">
              <div>Vue</div>
              <div>React</div>
              <div>Angular</div>
            </el-collapse-item>
            <el-collapse-item title="React" name="2">
              <div>Vue.js</div>
              <div>React</div>
              <div>EcmaScript</div>
            </el-collapse-item>
            <el-collapse-item title="Angular" name="3">
              <div>简化流程：设计简洁直观的操作流程；</div>
              <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
              <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
            </el-collapse-item>
            <el-collapse-item title="EcmaScript" name="4">
              <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
              <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
            </el-collapse-item>
          </el-collapse>

          <el-button style="margin-top: 12px;" @click="next">上一步</el-button> 
          <el-button style="margin-top: 12px;" @click="next">下一步</el-button>
        </div>
      </el-main>
    <el-footer>版权所有 © 2018 QiWoo.org | Proudly powered by QiWoo.</el-footer>
  </el-container>
</template>

<script>
  export default {
    data() {
      return {
        title: "开始您的程序"
      }
    },
    methods: {
      handleChange(val) {
        console.log(val);
      }
    }
  }
</script>

<style>
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }

</style>