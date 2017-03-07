<template>
    <hello></hello>
</template>

<script>
{{#unless router}}
import Hello from '../components/Hello'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

{{/unless}}
export default {
  name: 'index'{{#router}}{{#if_eq lintConfig "airbnb"}},{{/if_eq}}{{else}},
  components: {
    Hello{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}{{/router}}
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
</script>
