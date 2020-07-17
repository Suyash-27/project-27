class Weight{
    constructor(x,y,width,height){
        var weight_options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, weight_options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }

        display(){
            var pos = this.ground.position;
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);
        }
}