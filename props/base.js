import * as THREE from "../js/three.module.js";

export default function ESC0001({ x, y, z }) {

//OBJETOS  ✏️✏️✏️✏️  🪶
var geometry2 = new THREE.BoxGeometry(45,2,55);
var tex = new THREE.TextureLoader().load('img/im.jpg');
var material1 = new THREE.MeshLambertMaterial( {size: THREE.DoubleSide, map: tex } );
var f = new THREE.Mesh(geometry2,material1);
//scene.add(f);
f.position.set(0,13,7);

var geometry3 = new THREE.BoxGeometry(43.5,3,54.3);
var tex = new THREE.TextureLoader().load('img/im2.jpg');
var material1 = new THREE.MeshLambertMaterial( {size: THREE.DoubleSide, map: tex } );
var fo = new THREE.Mesh(geometry3,material1);
//scene.add(fo);
fo.position.set(0,15,7);

var geometry1 = new THREE.BoxGeometry(45,2,55);
var tex = new THREE.TextureLoader().load('img/im.jpg');
var material1 = new THREE.MeshLambertMaterial( {size: THREE.DoubleSide, map: tex } );
var fon = new THREE.Mesh(geometry1,material1);
//scene.add(fon);
fon.position.set(0,17,7);

var geometry08 = new THREE.BoxGeometry(35,4,60);
var tex = new THREE.TextureLoader().load('img/im3.jpg');
var material1 = new THREE.MeshLambertMaterial( {size: THREE.DoubleSide, map: tex } );
var mesh05 = new THREE.Mesh(geometry08,material1);
//scene.add(mesh05);
mesh05.position.set(0,20,0);

var geometry0 = new THREE.BoxGeometry(50,32,20);
var tex = new THREE.TextureLoader().load('img/im2.jpg');
var material1 = new THREE.MeshLambertMaterial( {size: THREE.DoubleSide, map: tex } );
var atra = new THREE.Mesh(geometry0,material1);
//scene.add(atra);
atra.position.set(0,27.8,-30);

//rosa
var geometry02 = new THREE.BoxGeometry(33,15,35);
var tex = new THREE.TextureLoader().load('img/tela.jpg');
var material1 = new THREE.MeshLambertMaterial( {size: THREE.DoubleSide, map: tex } );
var caj = new THREE.Mesh(geometry02,material1);
//scene.add(caj);
caj.position.set(0,25,-8);

var geometry03 = new THREE.BoxGeometry(20,9,15);
var tex = new THREE.TextureLoader().load('img/tela.jpg');
var material1 = new THREE.MeshLambertMaterial( {size: THREE.DoubleSide, map: tex } );
var caj1 = new THREE.Mesh(geometry03,material1);
//scene.add(caj1);
caj1.position.set(0,37,-15);

//mesa

var geometry04 = new THREE.BoxGeometry(30,1.5,10);
var material04 = new THREE.MeshLambertMaterial({color:0x876910, side: THREE.DoubleSide});
var m = new THREE.Mesh(geometry04,material04);
//scene.add(m);
m.position.set(0,27,15);

var geometry11 = new THREE.CylinderGeometry(1,0.3,8);
var material11 = new THREE.MeshLambertMaterial({color:0xBAF5E9, side: THREE.DoubleSide});
var mesh11 = new THREE.Mesh(geometry11,material11);
//scene.add(mesh11);
mesh11.position.set(12,23,18);

var geometry12 = new THREE.CylinderGeometry(1,0.3,8);
var material12 = new THREE.MeshLambertMaterial({color:0xBAF5E9, side: THREE.DoubleSide});
var mesh12 = new THREE.Mesh(geometry12,material12);
//scene.add(mesh12);
mesh12.position.set(12,23,12);

var geometry13 = new THREE.CylinderGeometry(1,0.3,8);
var material13 = new THREE.MeshLambertMaterial({color:0xBAF5E9, side: THREE.DoubleSide});
var mesh13 = new THREE.Mesh(geometry13,material13);
//scene.add(mesh13);
mesh13.position.set(-12,23,18);

var geometry14 = new THREE.CylinderGeometry(1,0.3,8);
var material14 = new THREE.MeshLambertMaterial({color:0xBAF5E9, side: THREE.DoubleSide});
var mesh14 = new THREE.Mesh(geometry14,material14);
//scene.add(mesh14);
mesh14.position.set(-12,23,12);

//pilares

var geometry8 = new THREE.BoxGeometry(4,1,4);
var tex = new THREE.TextureLoader().load('img/im1.png');
var material1 = new THREE.MeshLambertMaterial( {size: THREE.DoubleSide, map: tex } );
var b = new THREE.Mesh(geometry8,material1);
//scene.add(b);
b.position.set(19,18,30);

var geometry8 = new THREE.BoxGeometry(3.5,10,3.5);
var tex = new THREE.TextureLoader().load('img/im4.jpg');
var material1 = new THREE.MeshLambertMaterial( {size: THREE.DoubleSide, map: tex } );
var c = new THREE.Mesh(geometry8,material1);
//scene.add(c);
c.position.set(19,18,30);

var geometry8 = new THREE.BoxGeometry(4,1,4);
var tex = new THREE.TextureLoader().load('img/im1.png');
var material1 = new THREE.MeshLambertMaterial( {size: THREE.DoubleSide, map: tex } );
var d = new THREE.Mesh(geometry8,material1);
//scene.add(d);
d.position.set(19,23.5,30);


var geometry8 = new THREE.BoxGeometry(4,1,4);
var tex = new THREE.TextureLoader().load('img/im1.png');
var material1 = new THREE.MeshLambertMaterial( {size: THREE.DoubleSide, map: tex } );
var b2 = new THREE.Mesh(geometry8,material1);
//scene.add(b2);
b2.position.set(-19,18,30);

var geometry8 = new THREE.BoxGeometry(3.5,10,3.5);
var tex = new THREE.TextureLoader().load('img/im4.jpg');
var material1 = new THREE.MeshLambertMaterial( {size: THREE.DoubleSide, map: tex } );
var c2 = new THREE.Mesh(geometry8,material1);
//scene.add(c2);
c2.position.set(-19,18,30);

var geometry8 = new THREE.BoxGeometry(4,1,4);
var tex = new THREE.TextureLoader().load('img/im1.png');
var material1 = new THREE.MeshLambertMaterial( {size: THREE.DoubleSide, map: tex } );
var d2 = new THREE.Mesh(geometry8,material1);
//scene.add(d2);
d2.position.set(-19,23.5,30);

//arriba

var geometry8 = new THREE.BoxGeometry(15,2,12);
var tex = new THREE.TextureLoader().load('img/im1.png');
var material1 = new THREE.MeshLambertMaterial( {size: THREE.DoubleSide, map: tex } );
var W = new THREE.Mesh(geometry8,material1);
//scene.add(W);
W.position.set(-17.5,44.8,-33);

var geometry8 = new THREE.BoxGeometry(12,12.5,8.5);
var tex = new THREE.TextureLoader().load('img/im1.png');
var material1 = new THREE.MeshLambertMaterial( {size: THREE.DoubleSide, map: tex } );
var px = new THREE.Mesh(geometry8,material1);
//scene.add(px);
px.position.set(-17.5,52,-34);

var geometry8 = new THREE.BoxGeometry(2,12.5,2);
var tex = new THREE.TextureLoader().load('img/im3.jpg');
var material1 = new THREE.MeshLambertMaterial( {size: THREE.DoubleSide, map: tex } );
var xy = new THREE.Mesh(geometry8,material1);
//scene.add(xy);
xy.position.set(-22.2,52,-29);
var geometry8 = new THREE.BoxGeometry(2,12.5,2);
var tex = new THREE.TextureLoader().load('img/im3.jpg');
var material1 = new THREE.MeshLambertMaterial( {size: THREE.DoubleSide, map: tex } );
var xyx = new THREE.Mesh(geometry8,material1);
//scene.add(xyx);
xyx.position.set(-12.8,52,-29);

var geometry8 = new THREE.BoxGeometry(13,2,12);
var tex = new THREE.TextureLoader().load('img/im1.png');
var material1 = new THREE.MeshLambertMaterial( {size: THREE.DoubleSide, map: tex } );
var Z = new THREE.Mesh(geometry8,material1);
//scene.add(Z);
Z.position.set(-17.5,59,-33);

//cabeza

var geometry13 = new THREE.CylinderGeometry(5, 8.2, 5, 4); 
var tex = new THREE.TextureLoader().load('img/im3.jpg');
var material1 = new THREE.MeshLambertMaterial( {size: THREE.DoubleSide, map: tex } ); 
var v= new THREE.Mesh(geometry13, material1);
//scene.add(v);
v.position.set(-17.5, 62, -33);
v.rotation.y = Math.PI / 4;

var geometry8 = new THREE.BoxGeometry(8,1.3,8);var tex = new THREE.TextureLoader().load('img/im4.jpg');
var material1 = new THREE.MeshLambertMaterial( {size: THREE.DoubleSide, map: tex } );
var u = new THREE.Mesh(geometry8,material1);
//scene.add(u);
u.position.set(-17.5,65,-33);

var geometry8 = new THREE.BoxGeometry(6.7,1,6.7);
var tex = new THREE.TextureLoader().load('img/im1.png');
var material1 = new THREE.MeshLambertMaterial( {size: THREE.DoubleSide, map: tex } );
var t = new THREE.Mesh(geometry8,material1);
//scene.add(t);
t.position.set(-17.5,66,-33);

var geometry13 = new THREE.CylinderGeometry(1, 3.3, 4); 
var tex = new THREE.TextureLoader().load('img/im3.jpg');
var material1 = new THREE.MeshLambertMaterial( {size: THREE.DoubleSide, map: tex } );
var s= new THREE.Mesh(geometry13, material1);
//scene.add(s);
s.position.set(-17.5, 68.5, -33);

//arriba

var geometry8 = new THREE.BoxGeometry(15,2,12);
var tex = new THREE.TextureLoader().load('img/im1.png');
var material1 = new THREE.MeshLambertMaterial( {size: THREE.DoubleSide, map: tex } );
var W2 = new THREE.Mesh(geometry8,material1);
//scene.add(W2);
W2.position.set(17.5,44.8,-33);

var geometry8 = new THREE.BoxGeometry(12,12.5,8.5);
var material8 = new THREE.MeshLambertMaterial({color:0x636161, side: THREE.DoubleSide});
var px2 = new THREE.Mesh(geometry8,material1);
//scene.add(px2);
px2.position.set(17.5,52,-34);

var geometry8 = new THREE.BoxGeometry(2,12.5,2);
var tex = new THREE.TextureLoader().load('img/im3.jpg');
var material1 = new THREE.MeshLambertMaterial( {size: THREE.DoubleSide, map: tex } );
var xyx2 = new THREE.Mesh(geometry8,material1);
//scene.add(xyx2);
xyx2.position.set(22,52,-29);
var geometry8 = new THREE.BoxGeometry(2,12.5,2);
var tex = new THREE.TextureLoader().load('img/im3.jpg');
var material1 = new THREE.MeshLambertMaterial( {size: THREE.DoubleSide, map: tex } );
var xy2 = new THREE.Mesh(geometry8,material1);
//scene.add(xy2);
xy2.position.set(12.8,52,-29)

var geometry8 = new THREE.BoxGeometry(13,2,12);
var tex = new THREE.TextureLoader().load('img/im1.png');
var material1 = new THREE.MeshLambertMaterial( {size: THREE.DoubleSide, map: tex } );
var Z2 = new THREE.Mesh(geometry8,material1);
//scene.add(Z2);
Z2.position.set(17.5,59,-33);

//cabeza

var geometry13 = new THREE.CylinderGeometry(5, 8.2, 5, 4); 
var tex = new THREE.TextureLoader().load('img/im3.jpg');
var material1 = new THREE.MeshLambertMaterial( {size: THREE.DoubleSide, map: tex } );
var v2= new THREE.Mesh(geometry13, material1);
//scene.add(v2);
v2.position.set(17.5, 62, -33);
v2.rotation.y = Math.PI / 4;

var geometry8 = new THREE.BoxGeometry(8,1.3,8);
var tex = new THREE.TextureLoader().load('img/im4.jpg');
var material1 = new THREE.MeshLambertMaterial( {size: THREE.DoubleSide, map: tex } );
var u2 = new THREE.Mesh(geometry8,material1);
//scene.add(u2);
u2.position.set(17.5,65,-33);

var geometry8 = new THREE.BoxGeometry(6.7,1,6.7);
var tex = new THREE.TextureLoader().load('img/im1.png');
var material1 = new THREE.MeshLambertMaterial( {size: THREE.DoubleSide, map: tex } );
var t2 = new THREE.Mesh(geometry8,material1);
//scene.add(t2);
t2.position.set(17.5,66,-33);

var geometry13 = new THREE.CylinderGeometry(1, 3.3, 4); 
var tex = new THREE.TextureLoader().load('img/im3.jpg');
var material1 = new THREE.MeshLambertMaterial( {size: THREE.DoubleSide, map: tex } );
var s2= new THREE.Mesh(geometry13, material1);
//scene.add(s2);
s2.position.set(17.5, 68.5, -33);

//escaleras

var geometry8 = new THREE.BoxGeometry(20,3.5,8);
var tex = new THREE.TextureLoader().load('img/im1.png');
var material1 = new THREE.MeshLambertMaterial( {size: THREE.DoubleSide, map: tex } );
var e = new THREE.Mesh(geometry8,material1);
//scene.add(e);
e.position.set(0,14,38.5);

var geometry8 = new THREE.BoxGeometry(20,2.4,5);
var tex = new THREE.TextureLoader().load('img/im1.png');
var material1 = new THREE.MeshLambertMaterial( {size: THREE.DoubleSide, map: tex } );
var e2 = new THREE.Mesh(geometry8,material1);
//scene.add(e2);
e2.position.set(0,16.9,37);

var geometry8 = new THREE.BoxGeometry(20,1.8,8);
var tex = new THREE.TextureLoader().load('img/im1.png');
var material1 = new THREE.MeshLambertMaterial( {size: THREE.DoubleSide, map: tex } );
var e3 = new THREE.Mesh(geometry8,material1);
//scene.add(e3);
e3.position.set(0,19,32);

var geometry8 = new THREE.BoxGeometry(15,2,3);
var tex = new THREE.TextureLoader().load('img/im1.png');
var material1 = new THREE.MeshLambertMaterial( {size: THREE.DoubleSide, map: tex } );
var e4 = new THREE.Mesh(geometry8,material1);
//scene.add(e4);
e4.position.set(0,20.8,31);

var geometry8 = new THREE.BoxGeometry(3.8,3.5,4);
var tex = new THREE.TextureLoader().load('img/im4.jpg');
var material1 = new THREE.MeshLambertMaterial( {size: THREE.DoubleSide, map: tex } );
var g = new THREE.Mesh(geometry8,material1);
//scene.add(g);
g.position.set(8,20.8,32);

var geometry8 = new THREE.BoxGeometry(3.8,3.5,4);
var tex = new THREE.TextureLoader().load('img/im4.jpg');
var material1 = new THREE.MeshLambertMaterial( {size: THREE.DoubleSide, map: tex } );
var g1 = new THREE.Mesh(geometry8,material1);
//scene.add(g1);
g1.position.set(-8,20.8,32);

const ESC0001 = new THREE.Group();
ESC0001.add(f, fo, fon, mesh05, atra, caj, caj1, m, mesh11, mesh12, mesh13, mesh14,
     b, c, d, b2, c2, d2, W, px, xy, xyx, Z, v, u, t, s, W2, px2, xyx2, xy2, Z2, v2,
     u2, t2, s2, e, e2, e3, e4, g, g1);
ESC0001.position.set (x, y, z);
return ESC0001;

}