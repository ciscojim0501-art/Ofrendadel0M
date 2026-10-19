import * as THREE from "../js/three.module.js";

export default function E01_4({ x, y, z }) {
    
var geometrycuadro1 = new THREE.BoxGeometry(0.3,2,0.3);
var texturecuadro1 = new THREE.TextureLoader().load('img/maderacuadro.jpg');
var materialcuadro1 = new THREE.MeshLambertMaterial({ map: texturecuadro1 });
var meshcuadro1  = new THREE.Mesh(geometrycuadro1 ,materialcuadro1 );
//scene.add(meshcuadro1 );
meshcuadro1.castShadow = true;
meshcuadro1 .position.set(-0.8,1.28,0);

var geometrycuadro2 = new THREE.BoxGeometry(0.3,2,0.3);
var texturecuadro2 = new THREE.TextureLoader().load('img/maderacuadro.jpg');
var materialcuadro2 = new THREE.MeshLambertMaterial({ map: texturecuadro2 });
var meshcuadro2 = new THREE.Mesh(geometrycuadro2 ,materialcuadro2 );
//scene.add(meshcuadro2 );
meshcuadro2.castShadow = true;
meshcuadro2 .position.set(0.8,1.28,0);

var geometrycuadro3 = new THREE.BoxGeometry(1.9,0.3,0.3);
var texturecuadro3 = new THREE.TextureLoader().load('img/maderacuadro.jpg');
var materialcuadro3 = new THREE.MeshLambertMaterial({ map: texturecuadro3 });
var meshcuadro3  = new THREE.Mesh(geometrycuadro3 ,materialcuadro3 );
//scene.add(meshcuadro3 );
meshcuadro3.castShadow = true;
meshcuadro3 .position.set(0,0.13,0);

var geometrycuadro4 = new THREE.BoxGeometry(1.9,0.3,0.3);
var texturecuadro4 = new THREE.TextureLoader().load('img/maderacuadro.jpg');
var materialcuadro4 = new THREE.MeshLambertMaterial({ map: texturecuadro4 });
var meshcuadro4  = new THREE.Mesh(geometrycuadro4 ,materialcuadro4 );
//scene.add(meshcuadro4 );
meshcuadro4.castShadow = true;
meshcuadro4 .position.set(0,2.13,0);

var geometrycuadro5 = new THREE.BoxGeometry(0.3,2,0.3);
var texturecuadro5 = new THREE.TextureLoader().load('img/maderacuadro.jpg');
var materialcuadro5 = new THREE.MeshLambertMaterial({ map: texturecuadro5 });
var meshcuadro5  = new THREE.Mesh(geometrycuadro5 ,materialcuadro5 );
//scene.add(meshcuadro5 );
meshcuadro5.castShadow = true;
meshcuadro5 .position.set(0,1,-0.599);
meshcuadro5.rotation.set(Math.PI/9, 0, 0);

var geometrycuadro6 = new THREE.PlaneGeometry(1.5,1.8);
var texturecuadro6 = new THREE.TextureLoader().load('img/Benjamin_Satterley.jfif');
var materialcuadro6 = new THREE.MeshLambertMaterial({ map: texturecuadro6 });
var meshcuadro6= new THREE.Mesh(geometrycuadro6,materialcuadro6);
//scene.add(meshcuadro6);
meshcuadro6.castShadow = true;
meshcuadro6.position.set(0,1.12,0.10);

var geometrycuadro7 = new THREE.BoxGeometry(1.5,2,0.1);
var texturecuadro7 = new THREE.TextureLoader().load('img/maderacuadro.jpg');
var materialcuadro7 = new THREE.MeshLambertMaterial({ map: texturecuadro7 });
var meshcuadro7  = new THREE.Mesh(geometrycuadro7 ,materialcuadro7 );
//scene.add(meshcuadro7 );
meshcuadro7.castShadow = true;
meshcuadro7 .position.set(0,1.28,0);

const ESC01_4 = new THREE.Group();
ESC01_4.add(meshcuadro1, meshcuadro2, meshcuadro3, meshcuadro4, meshcuadro5, meshcuadro6, meshcuadro7);
ESC01_4.scale.set(0.3, 0.3, 0.3);
ESC01_4.position.set (x,y,z);
return ESC01_4;
}