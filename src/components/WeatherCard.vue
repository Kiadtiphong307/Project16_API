<script setup>
import axios from 'axios'
import { ref, onMounted } from "vue";
import { useRoute } from 'vue-router';
import { Travel_listStore } from '../stores/counter.js';

const route = useRoute();
const index = route.params.dt;

const All_travel = Travel_listStore();
const travelItem = All_travel.travel_list[index]; 

const items = ref([]);
const url = ref(`https://${travelItem.ip}`); 

function fetchPosts() {
    axios
    .get(url.value)
    .then((response) => {
        const uniqueDates = [...new Set(response.data.list.map(item => item.dt_txt.split(" ")[0]))].slice(0, 7);      
        items.value = response.data.list.filter(item => uniqueDates.includes(item.dt_txt.split(" ")[0]));
    })
    .catch((err) => {
        console.log(err);
    });
}


onMounted(fetchPosts);
</script>


<template>
  <section class="vh-100" >
    <div><h1 style="text-align: center;" class="text_box"><strong>สภาพอากาศร้าน {{travelItem.name}} </strong></h1></div>
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-md-8 col-lg-6 col-xl-4" v-for="(i,index) in items" :key="index">
  
          <div class="card" style="color: #4B515D; border-radius: 35px;" >
            <div class="card-body p-4" >
  
              <div class="d-flex">
                <h6 class="flex-grow-1">วันที่ {{ i.dt_txt.split(" ")[0] }}</h6>
                <h6>เวลา {{ i.dt_txt.split(" ")[1].slice(0, 5) }} น</h6>
            </div>
            
  
<div class="d-flex flex-column text-center mt-5 mb-4">
  <h6 class="display-4 mb-0 font-weight-bold" style="color: #1C2331;"> {{ (((i.main.temp - 32) / 1.8) / 6).toFixed(2) }}°C </h6>
  <span class="small" style="color: #868B94">{{ i.weather[0].main }}</span>
</div>

            
  
              <div class="d-flex align-items-center">
                <div class="flex-grow-1" style="font-size: 1rem;">
                  <div><i class="fas fa-wind fa-fw" style="color: #868B94;"></i> <span class="ms-1"> {{ i.wind.speed }} ms/s </span></div>
                  <div><i class="fas fa-tint fa-fw" style="color: #868B94;"></i> <span class="ms-1"> {{ i.main.humidity }}% </span></div>
                  <div><i class="fas fa-sun fa-fw" style="color: #868B94;"></i> <span class="ms-1"> {{ i.weather[0].description }} </span></div>
                </div>
                <div>
                  <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-weather/ilu1.webp" width="50px">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.card {
  background-color: #F5F5F5;
  border: none;
  border-radius: 35px;
  box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  position: relative;
  z-index: 1;
}

.card:hover {
  box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.6);
}
.card{
  margin-bottom: 50px;
}
.text_box{
  margin-top: 50px;
}


</style>
