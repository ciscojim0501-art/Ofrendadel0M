import * as THREE from "../js/three.module.js";

export default function ESC003({ x, y, z }) {

//OBJETOS  ✏️✏️✏️✏️  🪶

//ENVASE
var geometrytarro01 = new THREE.CylinderGeometry(3,3,9);
var materialtarro01 = new THREE.MeshLambertMaterial({color:0x5E3601,   transparent: true, opacity:0.5});
var meshtarro01 = new THREE.Mesh(geometrytarro01,materialtarro01);
//scene.add(meshtarro01);
meshtarro01.castShadow = true;
meshtarro01.position.set(0,5,0);

//AGARRADERA
var geometrytarro02 = new THREE.TorusGeometry(2,0.5,60,60,-Math.PI / 2, Math.PI / 2);
var materialtarro02 = new THREE.MeshLambertMaterial({color:0x5E3601, side: THREE.DoubleSide});
var meshtarro02 = new THREE.Mesh(geometrytarro02,materialtarro02);
//scene.add(meshtarro02);
meshtarro02.castShadow = true;
meshtarro02.position.set(2.5,5,0);

var geometrytarro03 = new THREE.TorusGeometry(2,0.5,60,60,Math.PI / 2, Math.PI / 2);
var materialtarro03 = new THREE.MeshLambertMaterial({color:0X5E3601, side: THREE.DoubleSide});
var meshtarro03 = new THREE.Mesh(geometrytarro03,materialtarro03);
//scene.add(meshtarro03);
meshtarro03.castShadow = true;
meshtarro03.position.set(2.5,5,0);

//LIQUIDO
var geometrytarro04 = new THREE.CylinderGeometry(2.6,2.3,8.5);
var materialtarro04 = new THREE.MeshLambertMaterial({color:0xF2E06D, side: THREE.DoubleSide});
var meshtarro04 = new THREE.Mesh(geometrytarro04,materialtarro04);
//scene.add(meshtarro04);
meshtarro04.castShadow = true;
meshtarro04.position.set(0,5.4,0);

//CIRCULOS
var geometrytarro05 = new THREE.TorusGeometry(3,0.25,40,40);
var materialtarro05 = new THREE.MeshLambertMaterial({color:0x5E3601, side: THREE.DoubleSide});
var meshtarro05 = new THREE.Mesh(geometrytarro05,materialtarro05);
//scene.add(meshtarro05);
meshtarro05.castShadow = true;
meshtarro05.rotation.set(Math.PI/2,0,0);
meshtarro05.position.set(0,8.5,0);

var geometrytarro06 = new THREE.TorusGeometry(3,0.25,40,40);
var materialtarro06 = new THREE.MeshLambertMaterial({color:0x5E3601, side: THREE.DoubleSide});
var meshtarro06 = new THREE.Mesh(geometrytarro06,materialtarro06);
//scene.add(meshtarro06);
meshtarro06.castShadow = true;
meshtarro06.rotation.set(Math.PI/2,0,0);
meshtarro06.position.set(0,1.7,0);

const ESC003 = new THREE.Group();
ESC003.add(meshtarro01,meshtarro02,meshtarro03,meshtarro04,meshtarro05,meshtarro06);
ESC003.position.set (x,y,z);
return ESC003;

}