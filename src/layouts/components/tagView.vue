<template>
    <div class="tagView-wrapper">
        <div class="tag_btn" style="left:0;" @click="handleScroll(240)" v-show="hanldeBtn">
            <i class="el-icon-arrow-left"></i>
        </div>
        <div class="tag_btn" style="right:0;text-align:right" @click="handleScroll(-240)" v-show="hanldeBtn">
            <i class="el-icon-arrow-right"></i>
        </div>
        <div class="scroll-outer" ref="scrollOuter" :style="outerWidth">
            <div class="scroll-body" ref="scrollBody" :style="{ left: tagBodyLeft + 'px' }">
                <router-link class="tag-item" :to="item.path"
                             v-for="(item, index) in tagList"
                             :key="item.path"
                             :class="isActive(item.path) ? 'activeTag' : ''"
                             ref="tagWrapper">
                    <span class="tag-title">{{ item.meta.title }}</span>
                    <em class="verticalMiddle tag-icon" @click.prevent="closeTag(item.path)"><i class="el-icon-close"></i></em>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default{
    name:"tagView",
    data(){
        return{
            tagBodyLeft:0,
            hanldeBtn:false
        }
    },
    computed:{
        ...mapState({
            tagList: state => state.tagsview.tagList
        }),
        outerWidth(){
            if (this.hanldeBtn) {
                return {
                    left: '30px',
                    right: '34px'
                };
            }
            return {
                left: '15px',
                right: '15px'
            };
        }
    },
    watch: {
        $route(nl) {
            this.changeTagWidth();
            this.addTag();
            this.moveToTag();
        }
    },
    methods:{
        //添加标签
        addTag() {
            const { path, meta } = this.$route;
            this.$store.dispatch('ADD_TAGS', { path, meta });
        },
        //关闭标签
        closeTag(path) {
            this.$store.dispatch('REMOVE_TAGS', path).then(data => {
                if (this.isActive(path)) {
                    this.$router.push({
                        path: data[data.length - 1].path
                    });
                }
                console.log('tagList',this.tagList)
                this.changeTagWidth();
                this.moveToTag();
            });
        },
        //当前栏目标签
        isActive(path) {
            return path === this.$route.path;
        },
        moveToTag() {
            this.$nextTick(() => {
                const index = this.tagList.findIndex(item => item.path == this.$route.path);
                const eleWidth = this.$refs.tagWrapper[index].$el.offsetWidth;
                const eleLeft = this.$refs.tagWrapper[index].$el.offsetLeft;
                const scrollOuterWidth = this.$refs.scrollOuter.offsetWidth;

                //标签在左边
                if (eleLeft === 0 && index === 0) {
                    return;
                }
                if (eleLeft < -this.tagBodyLeft) {
                    this.tagBodyLeft = -eleLeft + 4;
                } else if (eleLeft > -this.tagBodyLeft && eleLeft + eleWidth < -this.tagBodyLeft + scrollOuterWidth) {
                    this.tagBodyLeft = Math.min(0, scrollOuterWidth - eleWidth - eleLeft - 4);
                } else {
                    this.tagBodyLeft = -(eleLeft - (scrollOuterWidth - 4 - eleWidth));
                }
            });
        },
        handleScroll(val) {
            const scrollOuterWidth = this.$refs.scrollOuter.offsetWidth;
            const scrollBodyWidth = this.$refs.scrollBody.offsetWidth;
            if (val > 0) {
                this.tagBodyLeft = Math.min(0, this.tagBodyLeft + val);
            } else {
                this.tagBodyLeft = Math.max(this.tagBodyLeft + val, scrollOuterWidth - scrollBodyWidth);
            }
        },
        changeTagWidth() {
            const scrollOuterWidth = this.$refs.scrollOuter.offsetWidth;
            const scrollBodyWidth = this.$refs.scrollBody.offsetWidth;
            if (scrollBodyWidth >= scrollOuterWidth - 50) {
                this.hanldeBtn = true;
            } else {
                this.hanldeBtn = false;
            }
        },
    },
    components:{

    },
    mounted(){
        this.addTag();
        this.changeTagWidth();
    }
}
</script>
