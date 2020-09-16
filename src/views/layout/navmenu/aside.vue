<template>
    <div class="aside_container">
        <el-row class="tac">
            <el-col>
                <el-menu default-active="1" class="el-menu-vertical-demo" background-color="cadetblue" text-color="#fff" @select="handleSelect">
                    <el-submenu index="1">
                        <template slot="title">
                            <i class="el-icon-location" style="color:#fff"></i>
                            <span>班级信息</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="1-1">一班</el-menu-item>
                            <el-menu-item index="1-2">二班</el-menu-item>
                             <el-menu-item index="1-3">三班</el-menu-item>
                             <el-menu-item index="1-4-1">四班</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-menu-item index="2">
                        <i class="el-icon-menu" style="color:#fff"></i>
                        <span slot="title">教师信息</span>
                    </el-menu-item>
                    <el-menu-item index="3">
                        <i class="el-icon-document" style="color:#fff"></i>
                        <span slot="title">搞笑公告</span>
                    </el-menu-item>
                    <el-menu-item index="4">
                        <i class="el-icon-setting" style="color:#fff"></i>
                        <span slot="title">学习课程</span>
                    </el-menu-item>
                </el-menu>
            </el-col>
        </el-row>
    </div>
</template>
<script>
export default {
    name:'Aside',
    data(){
        return{

        }
    },
    methods:{
        handleSelect(key,keyPath){
            console.log('key',key)
            console.log('keyPath',keyPath)
        }
    }
}
</script>
<style scoped>
.aside_container{
    height: 100%;
}
</style>
<style>
.aside_container .el-submenu__title i{
    color: #fff;
}
</style>