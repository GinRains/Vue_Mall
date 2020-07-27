export const myMixin = {
  methods: {
    getMoney(money) {
      this.money -= money;
      this.$parent.money += money;
    },
    xxx() {
      console.log(111)
    }
  }
}
