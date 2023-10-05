import { ref } from 'vue';
import { defineStore } from 'pinia'

export const Travel_listStore = defineStore('Travel_list', () => {

const travel_list  = ref([
  {name: 'สุนทรารมณ์', img:'https://media.discordapp.net/attachments/1153766321666932836/1153887346882773063/1.jpg?ex=652f4955&is=651cd455&hm=aad0b87590e8f12ff42f4acea75cf70b025165421138d07354197053769c76b4&=&width=585&height=585',
    ip:'api.openweathermap.org/data/2.5/forecast?lat=18.88852127095799&lon=99.01373892653918&appid=66af6261484edc25c7b1b61803d7547c'},
  {name: 'Overnight', img:'https://media.discordapp.net/attachments/1153766321666932836/1153887347121856652/2.jpg?ex=652f4955&is=651cd455&hm=020e6677190d05b0d3aa676382453b6726256a803adf63486529c2907823dd4e&=&width=585&height=585',
    ip:'api.openweathermap.org/data/2.5/forecast?lat=18.884067360988016&lon=99.01340628045365&appid=66af6261484edc25c7b1b61803d7547c'},
  {name: 'Tamma Cafe', img:'https://media.discordapp.net/attachments/1153766321666932836/1153887347407077456/3.jpg?ex=652f4955&is=651cd455&hm=4fcd081d97b5096fb703a1144520cd7c5fd68bb61eaf4f1993c76948f0c3d74f&=&width=585&height=585',
    ip:'api.openweathermap.org/data/2.5/forecast?lat=18.879198960518284&lon=99.01400969350873&appid=66af6261484edc25c7b1b61803d7547c'},
  {name: 'ร้านไป-ยานใหญ่', img:'https://media.discordapp.net/attachments/1153766321666932836/1153887347616776263/4.jpg?ex=652f4955&is=651cd455&hm=1ee4778a0773454e65545462e419b9d3f40e9687e8dab80ca08a1f83de20625a&=&width=585&height=585',
    ip:'api.openweathermap.org/data/2.5/forecast?lat=18.88680552840249&lon=99.00700527133165&appid=66af6261484edc25c7b1b61803d7547c'},
  {name: 'ท่าช้าง คาเฟ่', img:'https://media.discordapp.net/attachments/1153766321666932836/1153887348094943232/6.jpg?ex=652f4955&is=651cd455&hm=2eff063d17359126294142ab0654a75e3d18648ccb59290be078b8c553c511d8&=&width=585&height=585',
    ip:'api.openweathermap.org/data/2.5/forecast?lat=18.80202637792063&lon=98.99512191864117&appid=66af6261484edc25c7b1b61803d7547c'},
  {name: 'Beer lab', img:'https://media.discordapp.net/attachments/1153766321666932836/1153887348321419314/7.jpg?ex=652f4956&is=651cd456&hm=982897db3601df46f7dfc357eceab4e52bbd8b75ab0404c8a017b454549f56d8&=&width=400&height=400',
    ip:'api.openweathermap.org/data/2.5/forecast?lat=18.795914426649965&lon=98.96570372658144&appid=66af6261484edc25c7b1b61803d7547c'},
])

return { travel_list }
})