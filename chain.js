class Chain {
    constructor(a, b) {
        var options = {
            bodyA: a,
            bodyB: b,
            length: 10,
            stiffness: 0.02
        }
        this.chain=constraint.create(options)
    World.add(world,this.chain);
    this.bodya=a;
    this.bodyb=b; 
    }
display(){
var pointa = this.bodya.position;
var pointb = this.bodyb.position;
strokeWeight(5)
line(pointa.x,pointa.y,pointb.x,pointb.y)


}
}