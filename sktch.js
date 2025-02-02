let qt;

function setup() {
    createCanvas(400, 400);
    background(20);

    let boundary = new Rectangle(width / 2, height / 2, width / 2, height / 2);
    qt = new QuadTree(boundary, 4);

    for (let i = 0; i < 500; i++) {
        let p = new Point(random(width), random(height));
        qt.insert(p);
    }

    qt.show();
}

function draw() {
    background(20); 
    qt.show();
}