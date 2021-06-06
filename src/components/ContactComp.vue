<template>
    <p>{{ title }}</p>
    <router-link :to="'/contact/'+ id"><button>View</button></router-link> 
     <button @click="$emit('delete',id)">удалить</button>
</template>
<script>

export default {
props:{
	title:{
	type:String,
    required:true},
    id: 
    { type:String,
    required:true}
    }}
      </script>