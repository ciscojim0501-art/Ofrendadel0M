import * as THREE from "../js/three.module.js";

export default function ESC005({ x, y, z }) {

//ALFOMBRA BASE
var geometry08 = new THREE.BoxGeometry(20,0.1,20);
var material08 = new THREE.MeshLambertMaterial({color:0x827272, side: THREE.DoubleSide});
var mesh08 = new THREE.Mesh(geometry08,material08);
mesh08.position.set(0,0.1,0); 

//ALFOMBRA IMAGEN
var geometry09 = new THREE.BoxGeometry(20,0.1,20);
var texturegeometry09 = new THREE.TextureLoader().load('img/mike.jfif');
var material09 = new THREE.MeshLambertMaterial({ map: texturegeometry09 });
var mesh09 = new THREE.Mesh(geometry09,material09);
mesh09.position.set(0,0.2,0); 

const ESC005 = new THREE.Group();
ESC005.add(mesh08, mesh09);
ESC005.position.set(x, y, z);
return ESC005;

}