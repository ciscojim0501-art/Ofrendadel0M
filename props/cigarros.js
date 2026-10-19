import * as THREE from "../js/three.module.js";

export default function ESC0005({ x, y, z }) {

//OBJETOS  ✏️✏️✏️✏️  🪶



var geometry1 = new THREE.BoxGeometry(3.7, 5, 2 );
var material1 = new THREE.MeshLambertMaterial({color:0x003BA8, side: THREE.DoubleSide});
var uno = new THREE.Mesh(geometry1, material1);
//scene.add( uno );
uno.position.set(0, 4, 0);

var geometry2 = new THREE.BoxGeometry(1, 1, 1 );
var material2 = new THREE.MeshLambertMaterial({color:0xFFF200, side: THREE.DoubleSide});
var dos = new THREE.Mesh(geometry2, material2);
dos.scale.set(4.05, 1.8, 2.05);
dos.position.set(0, 3.8, 0);
dos.rotation.z = 0.08;
//scene.add(dos);

var geometry3 = new THREE.PlaneGeometry(3.7, 1.5); 
var material3 = new THREE.MeshLambertMaterial({color:0x003BA8, side: THREE.DoubleSide});
var tres = new THREE.Mesh(geometry3, material3);
tres.position.set(0, 0.75, 2);

var geometry31 = new THREE.PlaneGeometry(3.7, 2); 
var material31 = new THREE.MeshLambertMaterial({color:0x003BA8, side: THREE.DoubleSide});
var tres1 = new THREE.Mesh(geometry31, material31);
tres1.rotation.x = -Math.PI / 2;
tres1.position.set(0, 1.5, 1);

var geometry32 = new THREE.PlaneGeometry(2, 1.5); 
var material32 = new THREE.MeshLambertMaterial({color:0x003BA8, side: THREE.DoubleSide});
var tres2 = new THREE.Mesh(geometry32, material32);
tres2.rotation.y = Math.PI / 2;
tres2.position.set(-1.85, 0.75, 1);

var geometry34 = new THREE.PlaneGeometry(2, 1.5); 
var material34 = new THREE.MeshLambertMaterial({color:0x003BA8, side: THREE.DoubleSide});
var tres3 = new THREE.Mesh(geometry34, material34);
tres3.rotation.y = Math.PI / 2;
tres3.position.set(1.85, 0.75, 1);

var geometry34 = new THREE.PlaneGeometry(3.7, 1.5); 
var material34 = new THREE.MeshLambertMaterial({color: 0x003BA8, side: THREE.DoubleSide});
var tres4 = new THREE.Mesh(geometry34, material34);
tres4.position.set(0, 0.75, 0);

const tapa = new THREE.Group();
tapa.add(tres, tres1, tres2, tres3,tres4);
//scene.add(tapa);
tapa.position.set(0, 6.5, -1);
tapa.rotation.x = -Math.PI / 3;

var geometry4 = new THREE.BoxGeometry(0.9, 0.5, 0.9 );
var material4 = new THREE.MeshLambertMaterial({color:0xB8B8B8, side: THREE.DoubleSide});
var cuatro = new THREE.Mesh(geometry4, material4);
cuatro.scale.set(3.8, 1.2, 1.8);
cuatro.position.set(0, 6.5, 0);
//scene.add(cuatro);


var geometry5= new THREE.CylinderGeometry(0.3, 0.3, 1.5, 16);
var material5 = new THREE.MeshLambertMaterial({ color: 0xd2a679 });
var cinco = new THREE.Mesh(geometry5, material5);
cinco.position.set(-1.2, 7, -0.4);
//scene.add(cinco);

var geometry6 = new THREE.CylinderGeometry(0.3, 0.3, 1.5, 16);
var material6 = new THREE.MeshLambertMaterial({ color: 0xd2a679 });
var seis = new THREE.Mesh(geometry6, material6);
seis.position.set(-1.2, 7, 0.4);
//scene.add(seis);

var geometry7 = new THREE.CylinderGeometry(0.3, 0.3, 1.5, 16);
var material7 = new THREE.MeshLambertMaterial({ color: 0xd2a679 });
var siete = new THREE.Mesh(geometry7, material7);
siete.position.set(-0.4, 7.4, -0.4);
//scene.add(siete);

var geometry8 = new THREE.CylinderGeometry(0.3, 0.3, 1.5, 16);
var material8 = new THREE.MeshLambertMaterial({ color: 0xd2a679 });
var ocho = new THREE.Mesh(geometry8, material8);
ocho.position.set(-0.4, 7.4, 0.4);
//scene.add(ocho);

var geometry9 = new THREE.CylinderGeometry(0.3, 0.3, 1.5, 16);
var material9 = new THREE.MeshLambertMaterial({ color: 0xd2a679 });
var nueve = new THREE.Mesh(geometry9, material9);
nueve.position.set(0.4, 7.4, -0.4);
//scene.add(nueve);

var geometry10 = new THREE.CylinderGeometry(0.3, 0.3, 1.5, 16);
var material10 = new THREE.MeshLambertMaterial({ color: 0xd2a679 });
var diez = new THREE.Mesh(geometry10, material10);
diez.position.set(0.4, 8.5, 0.4);
//scene.add(diez);

var geometry101 = new THREE.CylinderGeometry(0.3, 0.3, 4, 16);
var material101 = new THREE.MeshLambertMaterial({ color: 0xf5f5f5 });
var diez1 = new THREE.Mesh(geometry101, material101);
diez1.position.set(0.4, 5.75, 0.4);
//scene.add(diez1);

var geometry11 = new THREE.CylinderGeometry(0.3, 0.3, 1.5, 16);
var material11 = new THREE.MeshLambertMaterial({ color: 0xd2a679 });
var once = new THREE.Mesh(geometry11, material11);
once.position.set(1.2, 7, -0.4);
//scene.add(once);

var geometry12 = new THREE.CylinderGeometry(0.3, 0.3, 1.5, 16);
var material12 = new THREE.MeshLambertMaterial({ color: 0xd2a679 });
var doce = new THREE.Mesh(geometry12, material12);
doce.position.set(1.2, 9, 0.4);
//scene.add(doce);

var geometry121 = new THREE.CylinderGeometry(0.3, 0.3, 4, 16);
var material121 = new THREE.MeshLambertMaterial({ color: 0xf5f5f5 });
var doce1 = new THREE.Mesh(geometry121, material121);
doce1.position.set(1.2, 6.25, 0.4);
//scene.add(doce1);


const ESC0005 = new THREE.Group();
ESC0005.add(uno,dos,tapa,cuatro,cinco,seis,siete,ocho,nueve,diez,diez1,once,doce,doce1);
ESC0005.position.set (x,y,z);
return ESC0005;

}