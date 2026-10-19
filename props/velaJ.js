import * as THREE from "../js/three.module.js";

export default function ESC0004({ x, y, z }) {


//OBJETOS  ✏️✏️✏️✏️  🪶

var geo1 = new THREE.CylinderGeometry(1.2,0.9,2.4,20,20, true,1);
var mat1 = new THREE.MeshPhysicalMaterial({
    color:0xFFF9CF, side: THREE.DoubleSide, transmission:1,
     roughness:0, ior:1.5 ,thickness:0.5
});
var vaso = new THREE.Mesh(geo1,mat1);
//scene.add(vaso);
vaso.position.set(0,1,0);

var geo1 = new THREE.CylinderGeometry(1,0.7,2,20,20);
var mat1 = new THREE.MeshBasicMaterial({
    color:0xFFF9CF,
    side: THREE.DoubleSide
});
var vela = new THREE.Mesh(geo1,mat1);
//scene.add(vela);
vela.position.set(0,1,0);


var geo1 = new THREE.CylinderGeometry(0.01,0.1,1,20,20);
var mat1 = new THREE.MeshBasicMaterial({
    color:0x000000,
    side: THREE.DoubleSide
});
var palo = new THREE.Mesh(geo1,mat1);
//scene.add(palo);
palo.position.set(0,2,0);


var geometry13 = new THREE.SphereGeometry(0.6,0.5);
var material13 = new THREE.MeshBasicMaterial({
    color:0xF54927,
    side: THREE.DoubleSide
});
var mesh01 = new THREE.Mesh(geometry13,material13);
//scene.add(mesh01);
mesh01.position.set(0,3,0);
mesh01.scale.set(0.6,1,0.8);


const ESC0004 = new THREE.Group();
ESC0004.add(vaso,vela,palo,mesh01);
ESC0004.position.set (x,y,z);
return ESC0004;

}


