import Vue from 'vue'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import Router from 'vue-router'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import Hello from '@/components/Hello'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

Vue.use(Router){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

//vue-router按需加载模块
const getModule = (path) => {
  let page = resolve => require(['../pages/'+ path], resolve)
  return page;
}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: getModule("Index")
    }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  ]{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
