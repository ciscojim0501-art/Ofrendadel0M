import * as THREE from "../js/three.module.js";

export default function ESC0003({ x, y, z }) {

//OBJETOS  ✏️✏️✏️✏️  🪶

var geo1 = new THREE.CylinderGeometry(0.7,1.5,0.7,20,20);
var mat1 = new THREE.MeshBasicMaterial({
    color:0x21384A,
    side: THREE.DoubleSide
});
var c1 = new THREE.Mesh(geo1,mat1);
//scene.add(c1);
c1.position.set(0,1,0);

var geo1 = new THREE.CylinderGeometry(0.8,0.7,0.4,20,20);
var mat1 = new THREE.MeshBasicMaterial({
    color:0xAEB2B5,
    side: THREE.DoubleSide
});
var c2 = new THREE.Mesh(geo1,mat1);
//scene.add(c2);
c2.position.set(0,1.5,0);

var geo1 = new THREE.CylinderGeometry(0.7,0.6,1,20,20);
var mat1 = new THREE.MeshBasicMaterial({
    color:0x21384A,
    side: THREE.DoubleSide
});
var c3 = new THREE.Mesh(geo1,mat1);
//scene.add(c3);
c3.position.set(0,2.2,0);

var geo1 = new THREE.CylinderGeometry(0.6,0.85,0.3,20,20);
var mat1 = new THREE.MeshBasicMaterial({
    color:0xAEB2B5,
    side: THREE.DoubleSide
});
var c4 = new THREE.Mesh(geo1,mat1);
//scene.add(c4);
c4.position.set(0,2.8,0);

var geo1 = new THREE.CylinderGeometry(1.5,1,0.6,20,20);
var mat1 = new THREE.MeshBasicMaterial({
    color:0x21384A,
    side: THREE.DoubleSide
});
var c5 = new THREE.Mesh(geo1,mat1);
//scene.add(c5);
c5.position.set(0,3.2,0);


var geometry22 = new THREE.TorusGeometry(1.6,0.3,10,10);
var material22 = new THREE.MeshBasicMaterial({
    color:0x21384A,
    side: THREE.DoubleSide
});
var don = new THREE.Mesh(geometry22,material22);
//scene.add(don);
don.position.set(0,3.6,0);
don.rotation.x = Math.PI / 2;

var geometry22 = new THREE.TorusGeometry(1.4,0.4,10,10);
var material22 = new THREE.MeshBasicMaterial({
    color:0xAEB2B5,
    side: THREE.DoubleSide
});
var don1 = new THREE.Mesh(geometry22,material22);
////scene.add(don1);
don1.position.set(0,3.6,0);
don1.rotation.x = Math.PI / 2;

var geometry01 = new THREE.DodecahedronGeometry(0.5, 0);
var material01 = new THREE.MeshBasicMaterial({color: 0xE6C4AE,
     side: THREE.DoubleSide});
var mesh03 = new THREE.Mesh(geometry01, material01);
//scene.add(mesh03);
mesh03.position.set(0.6, 3.9 , -0.5);

var geometry01 = new THREE.DodecahedronGeometry(0.5, 0);
var material01 = new THREE.MeshBasicMaterial({color: 0xF5F5B8,
     side: THREE.DoubleSide});
var mesh01 = new THREE.Mesh(geometry01, material01);
//scene.add(mesh01);
mesh01.position.set(0, 3.9 , 0);

var geometry01 = new THREE.DodecahedronGeometry(0.5, 0);
var material01 = new THREE.MeshBasicMaterial({color: 0xE6C4AE,
     side: THREE.DoubleSide});
var mesh02 = new THREE.Mesh(geometry01, material01);
//scene.add(mesh02);
mesh02.position.set(-0.5, 3.9 , 0.5);

const ESC0003 = new THREE.Group();
ESC0003.add(c1,c2,c3,c4,c5,don,don1,mesh03,mesh01,mesh02);
ESC0003.position.set (x,y,z);
return ESC0003;

}