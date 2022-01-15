<template>
    <div class="column-pagination" ref="pagination">
        <div class="column-pagination-main">
            <slot name="text"></slot>
            <slot name="list"></slot>
        </div>
    </div>
</template>

<script>
import bus from '@/services/bus'
export default {
    name:"PageAtion",
    data(){
        return{
            collapseState:false,
        }
    },
    props:{

    },
    watch:{
        'collapseState':{
            handler(newVal,oldVal){
                console.log('this.collapseState',this.collapseState)
                console.log('contentBox',this.$refs.contentBox)
            },
            deep:true,
        },
    },
    methods:{

    },
    created(){
        bus.$on('collapse-content',msg=>{
            this.collapseState=msg;
        });
    },
    mounted(){

        /*this.$refs.pagination.style.width=this.$refs.columnTable.clientWidth+80+'px';*/
    }
}
</script>
