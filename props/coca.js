import * as THREE from "../js/three.module.js";

export default function ESC0002({ x, y, z }) {

//OBJETOS  ✏️✏️✏️✏️  🪶

var geo1 = new THREE.CylinderGeometry(0.8,0.6,0.35,20,20);
var mat1 = new THREE.MeshPhysicalMaterial({color:0xB3D7FC,side: THREE.DoubleSide,
    transmission:1, 
    roughness:0, ior:1.5 ,thickness:0.5});
var p9 = new THREE.Mesh(geo1,mat1);
//scene.add(p9);
p9.position.set(0,0.4,0);

var geo1 = new THREE.CylinderGeometry(0.6,0.8,1,20,20);
var mat1 = new THREE.MeshLambertMaterial({
    color:0x000000,
    side: THREE.DoubleSide
});
var p1 = new THREE.Mesh(geo1,mat1);
//scene.add(p1);
p1.position.set(0,1,0);

var geo1 = new THREE.CylinderGeometry(0.7,0.6,1,20,20);
var mat1 = new THREE.MeshLambertMaterial({
    color:0x000000,
    side: THREE.DoubleSide
});
var p2 = new THREE.Mesh(geo1,mat1);
//scene.add(p2);
p2.position.set(0,2,0);

var geo1 = new THREE.CylinderGeometry(0.65,0.65,1,20,20);
var mat1 = new THREE.MeshLambertMaterial({
    color:0xF54927,
    side: THREE.DoubleSide
});
var p3 = new THREE.Mesh(geo1,mat1);
//scene.add(p3);
p3.position.set(0,3,0);

var geo1 = new THREE.CylinderGeometry(0.5,0.7,1,20,20);
var mat1 = new THREE.MeshLambertMaterial({
    color:0x000000,
    side: THREE.DoubleSide
});
var p4 = new THREE.Mesh(geo1,mat1);
//scene.add(p4);
p4.position.set(0,4,0);

var geo1 = new THREE.CylinderGeometry(0.3,0.5,0.7,20,20);
var mat1 = new THREE.MeshLambertMaterial({
    color:0x000000,
    side: THREE.DoubleSide
});
var p5 = new THREE.Mesh(geo1,mat1);
//scene.add(p5);
p5.position.set(0,4.8,0);

//botella

var geo1 = new THREE.CylinderGeometry(0.24,0.3,0.5,20,20);
var mat1 = new THREE.MeshPhysicalMaterial({color:0xC2BEBE,
    side: THREE.DoubleSide,
    transmission:1, 
    roughness:0, ior:1.5 ,thickness:0.5});
var p6 = new THREE.Mesh(geo1,mat1);
//scene.add(p6);
p6.position.set(0,5.3,0);

var geo1 = new THREE.CylinderGeometry(0.24,0.3,0.3,20,20);
var mat1 = new THREE.MeshPhysicalMaterial({color:0xC2BEBE,
    side: THREE.DoubleSide,
    transmission:1, 
    roughness:0, ior:1.5 ,thickness:0.5});
var p8 = new THREE.Mesh(geo1,mat1);
//scene.add(p8);
p8.position.set(0,5.7,0);

var geo1 = new THREE.CylinderGeometry(0.2,0.3,0.2,20,20);
var mat1 = new THREE.MeshLambertMaterial({
    color:0xF54927,
    side: THREE.DoubleSide
});
var p7 = new THREE.Mesh(geo1,mat1);
//scene.add(p7);
p7.position.set(0,5.9,0);

const ESC0002 = new THREE.Group();
ESC0002.add(p1,p2,p3,p4,p5,p6,p7,p8,p9);
ESC0002.position.set (x,y,z);
return ESC0002;

}