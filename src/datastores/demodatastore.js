import {defineStore} from 'pinia'

export const useDemo01DataStore=defineStore ('dataStore',{
    state : ()=>({

        demo0101Data=null,
        demo0102Data=null,
       } ),
       getters:{
        getdemo0101Data:(state)=>(state.demo0101Data),
         getdemo0102Data:(state)=>(state.demo0102Data),
       },

       actions:{
          setdemo0101Data(data){
                this.demo0101Data=data;
          },
           setdemo0102Data(data){
                this.demo0102Data=data;
          },
           resetdemo0101Data(){
                this.demo0101Data=null;
          },
           resetdemo0102Data(){
                this.demo0102Data=null;
          },
           resetdemo01Data(){
               resetdemo0101Data();
               resetdemo0102Data();
          }


          

       }
})











