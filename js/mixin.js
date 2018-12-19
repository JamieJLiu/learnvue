var base = {
    methods:{
        show:function(){
            this.visible=true;
        },
        hide: function(){
            this.visible = false;
        } 
    },
    data: function(){
        return{
            visible: false,
        }
    }
};

Vue.component('tooltip',{
    template:`
    <div>
    <span @mouseenter="show" @mouseleave = "hide">bys</span>
    <div v-if="visible">
    Google
    </div>
    </div>
    `,
    mixins:[base]
})

Vue.component('popup',{
    template:`
    <div>
        <button @click="toggle">popup</button>
        <div v-if="visible">
        <span @click="hide">X</span>
          <h4>title</h4>
            fvbfjkvdkjn ekwfrhbgk ekfnr kjfnksbver
        </div>
    </div>
    `,
    methods:{
        toggle: function(){
            this.visible = !this.visible;
        },
       
    },
    mixins:[base]
});


new Vue({
    el:'#app',

})