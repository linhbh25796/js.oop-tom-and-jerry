let Rat = function (name,weight,speed,status) {
    this.name= name;
    this.weight = weight;
    this.speed = speed;
    this.status = status;
    this.status = true;

    this.say = function () {
        return console.log(this.name+": Chit chit ");
    };
    this.showStatus = function () {
        if (this.status === true){
            console.log("Jerry is living");
        }else {
            console.log("Jerry is deathhhhh");
        }
    }


};

let Cat = function (name,weight,speed) {
    this.name = name;
    this.weight = weight;
    this.maxSpeed = speed;

    this.say = function () {
        return console.log(this.name+": Meo meo");
    };
    this.chaseRat =function(){

        if (this.maxSpeed > jerry.speed){

            return true;
        }
    };
    
    this.eat = function () {
        if (this.chaseRat()){
            console.log("Eating");
            jerry.status = false;
            this.weight += jerry.weight;
        }
        else {
            console.log("Jerry was gone !! huhu")
        }
    }
    
};
let tom = new Cat("Tom",30,30);
let jerry = new Rat("Jerry",50,10);
jerry.say();
tom.say();
tom.chaseRat(jerry);
jerry.showStatus(jerry);
tom.eat();
jerry.showStatus(jerry);
console.log(tom.weight);

// tom.eatRat(jerry);
// console.log(tom.weight);