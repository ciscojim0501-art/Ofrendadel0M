import * as THREE from "../js/three.module.js";

export default function E06({ x, y, z }) {
    
var geometryc1 = new THREE.BoxGeometry(0.1,2.2,0.1);
var texturec1 = new THREE.TextureLoader().load('img/madera.jpg');
var materialc1 = new THREE.MeshLambertMaterial({ map: texturec1 });
var meshc1 = new THREE.Mesh(geometryc1, materialc1);
//scene.add(meshc1);
meshc1.castShadow = true;
meshc1.position.set(0.75,1.1,0.75);

var geometryc2 = new THREE.BoxGeometry(0.1,2.2,0.1);
var texturec2 = new THREE.TextureLoader().load('img/madera.jpg');
var materialc2 = new THREE.MeshLambertMaterial({ map: texturec2 });
var meshc2 = new THREE.Mesh(geometryc2 ,materialc2);
//scene.add(meshc2);
meshc2.castShadow = true;
meshc2.position.set(0.75,1.1,-0.75);

var geometryc3 = new THREE.BoxGeometry(0.1,2.2,0.1);
var texturec3 = new THREE.TextureLoader().load('img/madera.jpg');
var materialc3 = new THREE.MeshLambertMaterial({ map: texturec3 });
var meshc3 = new THREE.Mesh(geometryc3 ,materialc3);
//scene.add(meshc3);
meshc3.castShadow = true;
meshc3.position.set(-0.75,1.1,-0.75);

var geometryc4 = new THREE.BoxGeometry(0.1,2.2,0.1);
var texturec4 = new THREE.TextureLoader().load('img/madera.jpg');
var materialc4 = new THREE.MeshLambertMaterial({ map: texturec4 });
var meshc4 = new THREE.Mesh(geometryc4 ,materialc4);
//scene.add(meshc4);
meshc4.castShadow = true;
meshc4.position.set(-0.75,1.1,0.75);

var geometryc5 = new THREE.BoxGeometry(1.5,0.1,0.1);
var texturec5 = new THREE.TextureLoader().load('img/madera.jpg');
var materialc5 = new THREE.MeshLambertMaterial({ map: texturec5 });
var meshc5 = new THREE.Mesh(geometryc5 ,materialc5);
//scene.add(meshc5);
meshc5.castShadow = true;
meshc5.position.set(0,0.05,0.75);

var geometryc6 = new THREE.BoxGeometry(1.5,0.1,0.1);
var texturec6 = new THREE.TextureLoader().load('img/madera.jpg');
var materialc6 = new THREE.MeshLambertMaterial({ map: texturec6 });
var meshc6 = new THREE.Mesh(geometryc6 ,materialc6);
//scene.add(meshc6);
meshc6.castShadow = true;
meshc6.position.set(0,0.05,-0.75);

var geometryc7 = new THREE.BoxGeometry(1.5,0.1,0.1);
var texturec7 = new THREE.TextureLoader().load('img/madera.jpg');
var materialc7 = new THREE.MeshLambertMaterial({ map: texturec7 });
var meshc7 = new THREE.Mesh(geometryc7 ,materialc7);
//scene.add(meshc7);
meshc7.castShadow = true;
meshc7.rotation.y = Math.PI / 2;
meshc7.position.set(-0.75,0.05,0);

var geometryc8 = new THREE.BoxGeometry(1.5,0.1,0.1);
var texturec8 = new THREE.TextureLoader().load('img/madera.jpg');
var materialc8 = new THREE.MeshLambertMaterial({ map: texturec8 });
var meshc8 = new THREE.Mesh(geometryc8 ,materialc8);
//scene.add(meshc8);
meshc8.castShadow = true;
meshc8.rotation.y = Math.PI / 2;
meshc8.position.set(0.75,0.05,0);

var geometryc9 = new THREE.BoxGeometry(1.5,0.1,0.1);
var texturec9 = new THREE.TextureLoader().load('img/madera.jpg');
var materialc9 = new THREE.MeshLambertMaterial({ map: texturec9 });
var meshc9 = new THREE.Mesh(geometryc9 ,materialc9);
//scene.add(meshc9);
meshc9.castShadow = true;
meshc9.rotation.y = Math.PI / 2;
meshc9.position.set(0.75,2.15,0);

var geometryc10 = new THREE.BoxGeometry(1.5,0.1,0.1);
var texturec10 = new THREE.TextureLoader().load('img/madera.jpg');
var materialc10 = new THREE.MeshLambertMaterial({ map: texturec10 });
var meshc10 = new THREE.Mesh(geometryc10 ,materialc10);
//scene.add(meshc10);
meshc10.castShadow = true;
meshc10.rotation.y = Math.PI / 2;
meshc10.position.set(-0.75,2.15,0);

var geometryc11 = new THREE.BoxGeometry(1.5,0.1,0.1);
var texturec11 = new THREE.TextureLoader().load('img/madera.jpg');
var materialc11 = new THREE.MeshLambertMaterial({ map: texturec11 });
var meshc11 = new THREE.Mesh(geometryc11 ,materialc11);
//scene.add(meshc11);
meshc11.castShadow = true;
meshc11.position.set(0,2.15,0.75);

var geometryc12 = new THREE.BoxGeometry(1.5,0.1,0.1);
var texturec12 = new THREE.TextureLoader().load('img/madera.jpg');
var materialc12 = new THREE.MeshLambertMaterial({ map: texturec12 });
var meshc12 = new THREE.Mesh(geometryc12 ,materialc12);
//scene.add(meshc12);
meshc12.castShadow = true;
meshc12.position.set(0,2.15,-0.75);

var geometryc13 = new THREE.BoxGeometry(1.5,2.1,1.5);
var texturec13 = new THREE.TextureLoader().load('img/cajamaderalado.jpg');
var materialc13 = new THREE.MeshLambertMaterial({ map: texturec13 });
var meshc13 = new THREE.Mesh(geometryc13 ,materialc13);
//scene.add(meshc13);
meshc13.castShadow = true;
meshc13.position.set(0,1.1,0);

const ESC06 = new THREE.Group();
ESC06.add(meshc1,meshc2,meshc3,meshc4,meshc5,meshc6,meshc7,meshc8,meshc9,meshc10,meshc11,meshc12,meshc13);
ESC06.position.set (x,y,z);
return ESC06;
}