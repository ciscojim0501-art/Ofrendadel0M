import * as THREE from "../js/three.module.js";

export default function ESC001({ x, y, z }) {

//LIQUIDO
var geometryotravela01 = new THREE.CylinderGeometry(2,1,4);
var materialotravela01 = new THREE.MeshLambertMaterial({color:0xD1CFCF, side: THREE.DoubleSide});
var meshotravela01 = new THREE.Mesh(geometryotravela01,materialotravela01);
//scene.add(meshotravela01);
meshotravela01.castShadow = true;
meshotravela01.position.set(0,2.5,0);

//ENVASE
var geometryotravela02 = new THREE.CylinderGeometry(2.5,1.5,4.5);
var materialotravela02 = new THREE.MeshLambertMaterial({color:0xD1CFCF,  transparent: true, opacity:0.5});
var meshotravela02 = new THREE.Mesh(geometryotravela02,materialotravela02);
//scene.add(meshotravela02);
meshotravela02.castShadow = true;
meshotravela02.position.set(0,2.5,0);

//FLAMA BASE
var geometryotravela03 = new THREE.CylinderGeometry(0.2,0.7,1);
var materialotravela03 = new THREE.MeshLambertMaterial({color:0xF58727, transparent: true, opacity:0.5});
var meshotravela03 = new THREE.Mesh(geometryotravela03,materialotravela03);
//scene.add(meshotravela03);
meshotravela03.castShadow = true;
meshotravela03.position.set(0,5,0);


//FLAMA TOTAL
var geometryotravela04 = new THREE.ConeGeometry(0.3,1.5,3,4);
var materialotravela04 = new THREE.MeshLambertMaterial({color:0xFFBA21, side: THREE.DoubleSide});
var meshotravela04 = new THREE.Mesh(geometryotravela04,materialotravela04);
//scene.add(meshotravela04);
meshotravela04.castShadow = true;
meshotravela04.position.set(0,5.6,0);

const ESC001 = new THREE.Group();
ESC001.add(meshotravela01, meshotravela02, meshotravela03, meshotravela04);
ESC001.position.set (x,y,z);
return ESC001;

}