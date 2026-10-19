import * as THREE from "../js/three.module.js";

export default function E02({ x, y, z }) {
    
var geometrypapel1 = new THREE.BoxGeometry(1,0.5,0.03);
var materialpapel1 = new THREE.MeshLambertMaterial({color:0x3FD498, side: THREE.DoubleSide});
var meshpapel1 = new THREE.Mesh(geometrypapel1,materialpapel1);
//scene.add(meshpapel1);
meshpapel1.castShadow = true;
meshpapel1.position.set(-0.7,1,0);

var geometrypapel2 = new THREE.BoxGeometry(1,0.5,0.03);
var materialpapel2 = new THREE.MeshLambertMaterial({color:0xD43FC5, side: THREE.DoubleSide});
var meshpapel2 = new THREE.Mesh(geometrypapel2,materialpapel2);
//scene.add(meshpapel2);
meshpapel2.castShadow = true;
meshpapel2.position.set(0.7,1,0);

var geometrypapel3 = new THREE.BoxGeometry(1,0.5,0.03);
var materialpapel3 = new THREE.MeshLambertMaterial({color:0x3D3863, side: THREE.DoubleSide});
var meshpapel3 = new THREE.Mesh(geometrypapel3,materialpapel3);
//scene.add(meshpapel3);
meshpapel3.castShadow = true;
meshpapel3.position.set(2.1,1,0);

var geometrypapel4 = new THREE.BoxGeometry(1,0.5,0.03);
var materialpapel4 = new THREE.MeshLambertMaterial({color:0xE61E4D, side: THREE.DoubleSide});
var meshpapel4 = new THREE.Mesh(geometrypapel4,materialpapel4);
//scene.add(meshpapel4);
meshpapel4.castShadow = true;
meshpapel4.position.set(-2.1,1,0);

var geometrypapel5 = new THREE.BoxGeometry(1,0.5,0.03);
var materialpapel5 = new THREE.MeshLambertMaterial({color:0xE6BE1E, side: THREE.DoubleSide});
var meshpapel5 = new THREE.Mesh(geometrypapel5,materialpapel5);
//scene.add(meshpapel5);
meshpapel5.position.set(-3.5,1.2,0);
meshpapel5.castShadow = true;
meshpapel5.rotation.set(0, 0, -Math.PI/9);

var geometrypapel6 = new THREE.BoxGeometry(1,0.5,0.03);
var materialpapel6 = new THREE.MeshLambertMaterial({color:0xE8E8E8, side: THREE.DoubleSide});
var meshpapel6 = new THREE.Mesh(geometrypapel6,materialpapel6);
//scene.add(meshpapel6);
meshpapel6.castShadow = true;
meshpapel6.position.set(-3.5,1.2,0.01);
meshpapel6.rotation.set(0, 0, -Math.PI/9);
meshpapel6.scale.set(0.75, 0.75, 0.75);

var geometrypapel7 = new THREE.BoxGeometry(1,0.5,0.03);
var materialpapel7 = new THREE.MeshLambertMaterial({color:0xE8E8E8, side: THREE.DoubleSide});
var meshpapel7 = new THREE.Mesh(geometrypapel7,materialpapel7);
//scene.add(meshpapel7);
meshpapel7.castShadow = true;
meshpapel7.position.set(3.5,1.2,0.01);
meshpapel7.rotation.set(0, 0, Math.PI/9);
meshpapel7.scale.set(0.75, 0.75, 0.75);

var geometrypapel8 = new THREE.BoxGeometry(1,0.5,0.03);
var materialpapel8 = new THREE.MeshLambertMaterial({color:0xE6BE1E, side: THREE.DoubleSide});
var meshpapel8 = new THREE.Mesh(geometrypapel8,materialpapel8);
//scene.add(meshpapel8);
meshpapel8.castShadow = true;
meshpapel8.position.set(3.5,1.2,0);
meshpapel8.rotation.set(0, 0, Math.PI/9);

var geometrypapel9 = new THREE.BoxGeometry(1,0.2,0.01);
var materialpapel9 = new THREE.MeshLambertMaterial({color:0x541632, side: THREE.DoubleSide});
var meshpapel9 = new THREE.Mesh(geometrypapel9,materialpapel9);
//scene.add(meshpapel9);
meshpapel9.position.set(3,1.05,0);
meshpapel9.castShadow = true;
meshpapel9.rotation.set(0, 0, Math.PI/15);

var geometrypapel10 = new THREE.BoxGeometry(1,0.2,0.01);
var materialpapel10 = new THREE.MeshLambertMaterial({color:0x541632, side: THREE.DoubleSide});
var meshpapel10 = new THREE.Mesh(geometrypapel10,materialpapel10);
//scene.add(meshpapel10);
meshpapel10.position.set(-3,1.05,0);
meshpapel10.castShadow = true;
meshpapel10.rotation.set(0, 0, -Math.PI/15);

var geometrypapel11 = new THREE.BoxGeometry(1,0.2,0.01);
var materialpapel11 = new THREE.MeshLambertMaterial({color:0x541632, side: THREE.DoubleSide});
var meshpapel11 = new THREE.Mesh(geometrypapel11,materialpapel11);
//scene.add(meshpapel11);
meshpapel11.castShadow = true;
meshpapel11.position.set(-1.5,0.95,0);

var geometrypapel12 = new THREE.BoxGeometry(1,0.2,0.01);
var materialpapel12 = new THREE.MeshLambertMaterial({color:0x541632, side: THREE.DoubleSide});
var meshpapel12 = new THREE.Mesh(geometrypapel12,materialpapel12);
//scene.add(meshpapel12);
meshpapel12.castShadow = true;
meshpapel12.position.set(1.5,0.95,0);

var geometrypapel13 = new THREE.BoxGeometry(1,0.2,0.01);
var materialpapel13 = new THREE.MeshLambertMaterial({color:0x541632, side: THREE.DoubleSide});
var meshpapel13 = new THREE.Mesh(geometrypapel13,materialpapel13);
//scene.add(meshpapel13);
meshpapel13.castShadow = true;
meshpapel13.position.set(0.3,0.95,0);

var geometry14 = new THREE.CircleGeometry(0.20,40);
var material14 = new THREE.MeshLambertMaterial({color:0xE8E8E8, side: THREE.DoubleSide});
var meshpapel14 = new THREE.Mesh(geometry14,material14);
//scene.add(meshpapel14);
meshpapel14.castShadow = true;
meshpapel14.position.set(0.7,1,0.02);

var geometry15 = new THREE.CircleGeometry(0.20,40);
var material15 = new THREE.MeshLambertMaterial({color:0xE8E8E8, side: THREE.DoubleSide});
var meshpapel15 = new THREE.Mesh(geometry15,material15);
//scene.add(meshpapel15);
meshpapel15.castShadow = true;
meshpapel15.position.set(-2.1,1,0.02);

var geometrypapel16 = new THREE.BoxGeometry(0.8,0.1,0.01);
var materialpapel16 = new THREE.MeshLambertMaterial({color:0xE8E8E8, side: THREE.DoubleSide});
var meshpapel16 = new THREE.Mesh(geometrypapel16,materialpapel16);
//scene.add(meshpapel16);
meshpapel16.castShadow = true;
meshpapel16.position.set(-0.7,1.01,0.02);
meshpapel16.rotation.set(0, 0, -Math.PI/15);

var geometrypapel17 = new THREE.BoxGeometry(0.8,0.1,0.01);
var materialpapel17 = new THREE.MeshLambertMaterial({color:0xE8E8E8, side: THREE.DoubleSide});
var meshpapel17 = new THREE.Mesh(geometrypapel17,materialpapel17);
//scene.add(meshpapel17);
meshpapel17.castShadow = true;
meshpapel17.position.set(-0.7,1.01,0.02);
meshpapel17.rotation.set(0, 0, -Math.PI/15);

var geometrypapel17 = new THREE.BoxGeometry(0.8,0.1,0.01);
var materialpapel17 = new THREE.MeshLambertMaterial({color:0xE8E8E8, side: THREE.DoubleSide});
var meshpapel17 = new THREE.Mesh(geometrypapel17,materialpapel17);
//scene.add(meshpapel17);
meshpapel17.castShadow = true;
meshpapel17.position.set(-0.7,1.01,0.02);
meshpapel17.rotation.set(0, 0, Math.PI/15);

var geometrypapel18 = new THREE.BoxGeometry(0.8,0.1,0.01);
var materialpapel18 = new THREE.MeshLambertMaterial({color:0xE8E8E8, side: THREE.DoubleSide});
var meshpapel18 = new THREE.Mesh(geometrypapel18,materialpapel18);
//scene.add(meshpapel18);
meshpapel18.castShadow = true;
meshpapel18.position.set(2.1,1.01,0.02);
meshpapel18.rotation.set(0, 0, -Math.PI/15);

var geometrypapel19 = new THREE.BoxGeometry(0.8,0.1,0.01);
var materialpapel19 = new THREE.MeshLambertMaterial({color:0xE8E8E8, side: THREE.DoubleSide});
var meshpapel19 = new THREE.Mesh(geometrypapel19,materialpapel19);
//scene.add(meshpapel19);
meshpapel19.castShadow = true;
meshpapel19.position.set(2.1,1.01,0.02);
meshpapel19.rotation.set(0, 0, Math.PI/15);

const ESC02 = new THREE.Group();
ESC02.add(meshpapel1,meshpapel2, meshpapel3, meshpapel4, meshpapel5, meshpapel6, meshpapel7, meshpapel8, meshpapel9, meshpapel10, meshpapel11, meshpapel12, meshpapel13, meshpapel14, meshpapel15, meshpapel16, meshpapel17, meshpapel18, meshpapel19);
ESC02.position.set(x,y,z);
return ESC02;
}