import * as THREE from "../js/three.module.js";

export default function ESC002({ x = 0, y = 0, z = 0 } = {}) {

//OBJETOS  ✏️✏️✏️✏️  🪶

// CUERPO DEL PAN
var geometrypann01 = new THREE.SphereGeometry(3,32,32);
var materialpann01 = new THREE.MeshLambertMaterial({color: 0xD69B5A});
var meshpann01 = new THREE.Mesh(geometrypann01, materialpann01);
//scene.add(mesh01);
meshpann01.castShadow = true;
meshpann01.scale.set(1.3,0.5,1.3);
meshpann01.position.set(0,1.5,0);

// BOLITA DEL CENTRO
var geometrypann02 = new THREE.SphereGeometry(0.6, 20, 20);
var materialpann02 = new THREE.MeshLambertMaterial({color: 0xEBC578});
var meshpann02 = new THREE.Mesh(geometrypann02, materialpann02);
//scene.add(meshpann02);
meshpann02.castShadow = true;
meshpann02.position.set(0,3.4,0);

// BOLITAS DE LOS LADOS
var geometrypann03 = new THREE.SphereGeometry(0.4,16,16);
var materialpann03 = new THREE.MeshLambertMaterial({color: 0xEBC578});

// BOLITA IZQUIERDA ARRIBA
var meshpann03 = new THREE.Mesh(geometrypann03, materialpann03);
//scene.add(meshpann03);
meshpann03.castShadow = true;
meshpann03.position.set(-3,2.5,0);

// BOLITA DERECHA ARRIBA
var meshpann05 = new THREE.Mesh(geometrypann03, materialpann03);
//scene.add(meshpann05);
meshpann05.castShadow = true;
meshpann05.position.set(3,2.5,0);

// BOLITA DE ARRIBA
var meshpann04 = new THREE.Mesh(geometrypann03, materialpann03);
//scene.add(meshpann04);
meshpann04.castShadow = true;
meshpann04.position.set(0,2.5,-3);

// BOLITA DE ABAJO
var meshpann06 = new THREE.Mesh(geometrypann03, materialpann03);
//scene.add(meshpann06);
meshpann06.castShadow = true;
meshpann06.position.set(0,2.5,3);

//BOLITA DEL CENTRO MAS ARRIBA
var meshpann07 = new THREE.Mesh(geometrypann03, materialpann03);
//scene.add(meshpann07);
meshpann07.castShadow = true;
meshpann07.position.set(0,4,0);

//BOLITA EN MEDIO 01
var meshpann08 = new THREE.Mesh(geometrypann03, materialpann03);
//scene.add(meshpann08);
meshpann08.castShadow = true;
meshpann08.position.set(-1.5,3,0);

//BOLITA EN MEDIO 02
var meshpann09 = new THREE.Mesh(geometrypann03, materialpann03);
//scene.add(meshpann09);
meshpann09.castShadow = true;
meshpann09.position.set(1.5,3,0);

//BOLITA EN MEDIO 03
var meshpann10 = new THREE.Mesh(geometrypann03, materialpann03);
//scene.add(meshpann10);
meshpann10.castShadow = true;
meshpann10.position.set(0,3,1.5);

//BOLITA EN MEDIO 04
var meshpann20 = new THREE.Mesh(geometrypann03, materialpann03);
//scene.add(meshpann20);
meshpann20.castShadow = true;
meshpann20.position.set(0,3,-1.5);


//UNION 01
var meshpann11 = new THREE.Mesh(geometrypann03, materialpann03);
//scene.add(mesh11);
meshpann11.castShadow = true;
meshpann11.position.set(0,3,-1);

//UNION 02
var meshpann12 = new THREE.Mesh(geometrypann03, materialpann03);
//scene.add(meshpann12);
meshpann12.castShadow = true;
meshpann12.position.set(0,3,1);

//UNION 03
var meshpann13 = new THREE.Mesh(geometrypann03, materialpann03);
//scene.add(meshpann13);
meshpann13.castShadow = true;
meshpann13.position.set(1,3,0);

//UNION 04
var meshpann14 = new THREE.Mesh(geometrypann03, materialpann03);
//scene.add(meshpann14);
meshpann14.castShadow = true;
meshpann14.position.set(-1,3,0);

//UNION 01 ABAJO
var meshpann15 = new THREE.Mesh(geometrypann03, materialpann03);
//scene.add(meshpann15);
meshpann15.castShadow = true;
meshpann15.position.set(-2.5,2.5,0);

//UNION 02 ABAJO
var meshpann16 = new THREE.Mesh(geometrypann03, materialpann03);
//scene.add(meshpann16);
meshpann16.castShadow = true;
meshpann16.position.set(2.5,2.5,0);

//UNION 03 ABAJO
var meshpann17 = new THREE.Mesh(geometrypann03, materialpann03);
//scene.add(meshpann17);
meshpann17.castShadow = true;
meshpann17.position.set(0,2.5,-2.5);

//UNION 04 ABAJO
var meshpann18 = new THREE.Mesh(geometrypann03, materialpann03);
//scene.add(meshpann16);
meshpann18.castShadow = true;
meshpann18.position.set(0,2.5,2.5);

const ESC002 = new THREE.Group();
ESC002.add(meshpann01,meshpann02,meshpann03,meshpann04,meshpann05,meshpann06,meshpann07,meshpann08,meshpann09,meshpann10,meshpann11,meshpann12,meshpann13,meshpann14,meshpann15,meshpann16,meshpann17,meshpann18,meshpann20);
ESC002.position.set (x,y,z);
return ESC002;

}