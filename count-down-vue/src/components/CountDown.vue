<template>
  <div class="main">
    <div class="countdown">
      <div class="block">
        <p class="digit">{{ day }}</p>
        <p class="text">Days</p>
      </div>
      <div class="block">
        <p class="digit">{{ hour }}</p>
        <p class="text">Hours</p>
      </div>
      <div class="block">
        <p class="digit">{{ minute }}</p>
        <p class="text">Minutes</p>
      </div>
      <div class="block">
        <p class="digit">{{ second }}</p>
        <p class="text">Seconds</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'CountDown',
    data: function () {
      return {
        day: 0,
        hour: 0,
        minute: 0,
        second: 0,
      }
    },
    methods: {
      calculateETA: function (currentDate) {
        const destinationDate = new Date('2020-01-25')
        let diff = destinationDate - currentDate
        let milliseconds = diff%1000
        diff=(diff-(milliseconds))/1000
        this.second= this.addDigit(diff%60)
        diff=(diff-(this.second))/60
        this.minute = this.addDigit(diff%60)
        diff=(diff-(this.minute))/60
        this.hour = this.addDigit(diff%24)
        this.day = this.addDigit((diff-(this.hour))/24)
      },
      addDigit: function (diff) {
        return diff >= 10 ? diff : `0${diff}`
      }
    },
    created () {
      const self = this
      setInterval( () => {
        const currentDate = new Date()
        self.calculateETA(currentDate)
      }, 1000)
    },
  }
</script>

<style scoped>
  @import url(https://fonts.googleapis.com/css?family=Roboto+Condensed:400|Roboto:100);
  .main {
    align-items: center;
    bottom: 0;
    width: 100%;
    /*background-color: #34495e;*/
    background-image: url("~@/assets/bg.jpg");
    display: flex;
    justify-content: center;
    left: 0;
    position: absolute;
    right: 0;
    top:0;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .countdown {
    display: flex;
  }

  .block {
    display: flex;
    flex-direction: column;
    margin: 20px;
  }

  .text {
    color: #ffffff;
    font-size: 25px;
    font-family: 'Roboto Condensed', serif;
    font-weight: 40;
    margin-top:10px;
    margin-bottom: 10px;
    text-align: center;
  }

  .digit {
    color: #ecf0f1;
    font-size: 130px;
    font-weight: 100;
    font-family: 'Roboto', serif;
    margin: 10px;
    text-align: center;
  }
</style>
