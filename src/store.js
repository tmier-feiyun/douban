import Vuex from 'vuex'
import Vue from 'vue'
import jsonp from 'jsonp'
Vue.use(Vuex)
const store = new Vuex.Store({
    //声明数据
    state: {
        title: '',
        list: [],
        item:null
    },
    //修改数据
    mutations: {
        setListPageData (state,data) {
            state.title = data.title
            state.list = data.list
        },
        setDetailPageData(state,data){
            state.title = data.title
            state.item = data.item
        }
    },
    actions:{
        getListPageData (context,type) {
            //发送请求数据, jsonp
            jsonp('http://api.douban.com/v2/movie/'+type+'?apikey=0df993c66c0c636e29ecbb5344252a4a',(err,data) => {
            if(err) return alert('请求数据失败')
            context.commit('setListPageData',{
                title:data.title,
                list:data.subjects
            })
            })
        },
        getDetailPageData(context,id){
            jsonp('http://api.douban.com/v2/movie/subject/'+id+'?apikey=0df993c66c0c636e29ecbb5344252a4a',(err,data) => {
                context.commit('setDetailPageData',{
                    title:data.title,
                    item:data
                })
            })
        }
    }
})
export default store