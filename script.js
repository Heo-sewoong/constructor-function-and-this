function Person(n,a){
  this.name = n;
  this.age = a;
  this.introduce = function(){
    return `제 이름은 ${this.n}이고 제 나이는 ${this.a}입니다.`
  }

}

const person1 = new Person('세웅',25)

// const person1 = new Person('철수', 20)

// console.log(person1.introduce())