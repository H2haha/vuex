<template>
<div>
{{items}}
                    <ul>
                                        <li v-for="a in items">{{a}}</li>

                    </ul>

</div>
</template>

<script>
import ListItem from './list_item'
export default {
                    data() {
                                     return{};  
                    },
                    async mounted() {
                                      
                    },  
                    computed: {
                       items(){
                          return this.$store.getters.arr;
                            

                        }
                                        
                    },
                    components: {
                       ListItem                 

                    },
                    methods: {
                                        plusOne() {
                                                            this.count++;

                                        },
                                        minusOne() {
                                                            this.count--;
                                        }
                    }
}
</script>

<style lang="">
  
</style>
