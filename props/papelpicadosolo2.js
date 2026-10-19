import * as THREE from "../js/three.module.js";

export default function ESC02_2({ x, y, z }) {
    
var geometrypapel = new THREE.BoxGeometry(1,0.2,0.03);
var materialpapel = new THREE.MeshLambertMaterial({color:0x571894, side: THREE.DoubleSide});
var meshpapel = new THREE.Mesh(geometrypapel,materialpapel);
//scene.add(meshpapel);
meshpapel.castShadow = true;
meshpapel.rotation.set(Math.PI / -2, 0, 0);
meshpapel.position.set(0,1.24,-0.085);

var geometrypapel1 = new THREE.BoxGeometry(1,0.5,0.03);
var materialpapel1 = new THREE.MeshLambertMaterial({color:0x571894, side: THREE.DoubleSide});
var meshpapel1 = new THREE.Mesh(geometrypapel1,materialpapel1);
//scene.add(meshpapel1);
meshpapel1.castShadow = true;
meshpapel1.position.set(0,1,0);

const geometrypapel2 = new THREE.SphereGeometry(0.08, 32, 32);
var materialpapel2 = new THREE.MeshLambertMaterial({color:0x000000, side: THREE.DoubleSide});
var meshpapel2 = new THREE.Mesh(geometrypapel2,materialpapel2);
//scene.add(meshpapel2);
meshpapel2.castShadow = true;
meshpapel2.scale.set(1, 1, 0.5);
meshpapel2.position.set(0,1,0);

const geometrypapel3 = new THREE.CylinderGeometry(0.1, 0.1, 0.01, 32);
var materialpapel3 = new THREE.MeshLambertMaterial({color:0x000000, side: THREE.DoubleSide});
var meshpapel3 = new THREE.Mesh(geometrypapel3,materialpapel3);
//scene.add(meshpapel3);
meshpapel3.castShadow = true;
meshpapel3.scale.set(0.4, 10, 0.5);
meshpapel3.position.set(0,1.15,0);

const geometrypapel4 = new THREE.CylinderGeometry(0.1, 0.1, 0.01, 32);
var materialpapel4 = new THREE.MeshLambertMaterial({color:0x000000, side: THREE.DoubleSide});
var meshpapel4 = new THREE.Mesh(geometrypapel4,materialpapel4);
//scene.add(meshpapel4);
meshpapel4.castShadow = true;
meshpapel4.scale.set(0.4, 10, 0.5);
meshpapel4.position.set(0,0.85,0);

const geometrypapel5 = new THREE.CylinderGeometry(0.1, 0.1, 0.01, 32);
var materialpapel5 = new THREE.MeshLambertMaterial({color:0x000000, side: THREE.DoubleSide});
var meshpapel5 = new THREE.Mesh(geometrypapel5,materialpapel5);
//scene.add(meshpapel5);
meshpapel5.castShadow = true;
meshpapel5.scale.set(0.4, 10, 0.5);
meshpapel5.rotation.set(0, 0, Math.PI / 2);
meshpapel5.position.set(0.15,1,0);

const geometrypapel6 = new THREE.CylinderGeometry(0.1, 0.1, 0.01, 32);
var materialpapel6 = new THREE.MeshLambertMaterial({color:0x000000, side: THREE.DoubleSide});
var meshpapel6 = new THREE.Mesh(geometrypapel6,materialpapel6);
//scene.add(meshpapel6);
meshpapel6.castShadow = true;
meshpapel6.scale.set(0.4, 10, 0.5);
meshpapel6.rotation.set(0, 0, Math.PI / 2);
meshpapel6.position.set(-0.15,1,0);

const geometrypapel7 = new THREE.SphereGeometry(0.08, 32, 32);
var materialpapel7 = new THREE.MeshLambertMaterial({color:0x000000, side: THREE.DoubleSide});
var meshpapel7 = new THREE.Mesh(geometrypapel7,materialpapel7);
//scene.add(meshpapel7);
meshpapel7.castShadow = true;
meshpapel7.scale.set(0.5, 0.5, 0.5);
meshpapel7.position.set(-0.43,0.83,0);

const geometrypapel8 = new THREE.SphereGeometry(0.08, 32, 32);
var materialpapel8 = new THREE.MeshLambertMaterial({color:0x000000, side: THREE.DoubleSide});
var meshpapel8 = new THREE.Mesh(geometrypapel8,materialpapel8);
//scene.add(meshpapel8);
meshpapel8.castShadow = true;
meshpapel8.scale.set(0.5, 0.5, 0.5);
meshpapel8.position.set(-0.43,1,0);

const geometrypapel9 = new THREE.SphereGeometry(0.08, 32, 32);
var materialpapel9 = new THREE.MeshLambertMaterial({color:0x000000, side: THREE.DoubleSide});
var meshpapel9 = new THREE.Mesh(geometrypapel9,materialpapel9);
//scene.add(meshpapel9);
meshpapel9.castShadow = true;
meshpapel9.scale.set(0.5, 0.5, 0.5);
meshpapel9.position.set(-0.43,1.17,0);

const geometrypapel10 = new THREE.SphereGeometry(0.08, 32, 32);
var materialpapel10 = new THREE.MeshLambertMaterial({color:0x000000, side: THREE.DoubleSide});
var meshpapel10 = new THREE.Mesh(geometrypapel10,materialpapel10);
//scene.add(meshpapel10);
meshpapel10.castShadow = true;
meshpapel10.scale.set(0.5, 0.5, 0.5);
meshpapel10.position.set(-0.3,1.17,0);

const geometrypapel11 = new THREE.SphereGeometry(0.08, 32, 32);
var materialpapel11 = new THREE.MeshLambertMaterial({color:0x000000, side: THREE.DoubleSide});
var meshpapel11 = new THREE.Mesh(geometrypapel11,materialpapel11);
//scene.add(meshpapel11);
meshpapel11.castShadow = true;
meshpapel11.scale.set(0.5, 0.5, 0.5);
meshpapel11.position.set(-0.3,0.83,0);

const geometrypapel12 = new THREE.SphereGeometry(0.08, 32, 32);
var materialpapel12 = new THREE.MeshLambertMaterial({color:0x000000, side: THREE.DoubleSide});
var meshpapel12 = new THREE.Mesh(geometrypapel12,materialpapel12);
//scene.add(meshpapel12);
meshpapel12.castShadow = true;
meshpapel12.scale.set(0.5, 0.5, 0.5);
meshpapel12.position.set(-0.16,0.83,0);

const geometrypapel13 = new THREE.SphereGeometry(0.08, 32, 32);
var materialpapel13 = new THREE.MeshLambertMaterial({color:0x000000, side: THREE.DoubleSide});
var meshpapel13 = new THREE.Mesh(geometrypapel13,materialpapel13);
//scene.add(meshpapel13);
meshpapel13.castShadow = true;
meshpapel13.scale.set(0.5, 0.5, 0.5);
meshpapel13.position.set(-0.16,1.17,0);

const geometrypapel14 = new THREE.SphereGeometry(0.08, 32, 32);
var materialpapel14 = new THREE.MeshLambertMaterial({color:0x000000, side: THREE.DoubleSide});
var meshpapel14 = new THREE.Mesh(geometrypapel14,materialpapel14);
//scene.add(meshpapel14);
meshpapel14.castShadow = true;
meshpapel14.scale.set(0.5, 0.5, 0.5);
meshpapel14.position.set(0.43,0.83,0);

const geometrypapel15 = new THREE.SphereGeometry(0.08, 32, 32);
var materialpapel15 = new THREE.MeshLambertMaterial({color:0x000000, side: THREE.DoubleSide});
var meshpapel15 = new THREE.Mesh(geometrypapel15,materialpapel15);
//scene.add(meshpapel15);
meshpapel15.castShadow = true;
meshpapel15.scale.set(0.5, 0.5, 0.5);
meshpapel15.position.set(0.43,1,0);

const geometrypapel16 = new THREE.SphereGeometry(0.08, 32, 32);
var materialpapel16 = new THREE.MeshLambertMaterial({color:0x000000, side: THREE.DoubleSide});
var meshpapel16 = new THREE.Mesh(geometrypapel16,materialpapel16);
//scene.add(meshpapel16);
meshpapel16.castShadow = true;
meshpapel16.scale.set(0.5, 0.5, 0.5);
meshpapel16.position.set(0.43,1.17,0);

const geometrypapel17 = new THREE.SphereGeometry(0.08, 32, 32);
var materialpapel17 = new THREE.MeshLambertMaterial({color:0x000000, side: THREE.DoubleSide});
var meshpapel17 = new THREE.Mesh(geometrypapel17,materialpapel17);
//scene.add(meshpapel17);
meshpapel17.castShadow = true;
meshpapel17.scale.set(0.5, 0.5, 0.5);
meshpapel17.position.set(0.3,1.17,0);

const geometrypapel18 = new THREE.SphereGeometry(0.08, 32, 32);
var materialpapel18 = new THREE.MeshLambertMaterial({color:0x000000, side: THREE.DoubleSide});
var meshpapel18 = new THREE.Mesh(geometrypapel18,materialpapel18);
//scene.add(meshpapel18);
meshpapel18.castShadow = true;
meshpapel18.scale.set(0.5, 0.5, 0.5);
meshpapel18.position.set(0.3,0.83,0);

const geometrypapel19 = new THREE.SphereGeometry(0.08, 32, 32);
var materialpapel19 = new THREE.MeshLambertMaterial({color:0x000000, side: THREE.DoubleSide});
var meshpapel19 = new THREE.Mesh(geometrypapel19,materialpapel19);
//scene.add(meshpapel19);
meshpapel19.castShadow = true;
meshpapel19.scale.set(0.5, 0.5, 0.5);
meshpapel19.position.set(0.16,0.83,0);

const geometrypapel20 = new THREE.SphereGeometry(0.08, 32, 32);
var materialpapel20 = new THREE.MeshLambertMaterial({color:0x000000, side: THREE.DoubleSide});
var meshpapel20 = new THREE.Mesh(geometrypapel20,materialpapel20);
//scene.add(meshpapel20);
meshpapel20.castShadow = true;
meshpapel20.scale.set(0.5, 0.5, 0.5);
meshpapel20.position.set(0.16,1.17,0);

const ESC02_2 = new THREE.Group();
ESC02_2.add(meshpapel,meshpapel1,meshpapel2,meshpapel3,meshpapel4,meshpapel5,meshpapel6,meshpapel7,meshpapel8,meshpapel9,meshpapel10,meshpapel11,meshpapel12,meshpapel13,meshpapel14,meshpapel15,meshpapel16,meshpapel17,meshpapel18,meshpapel19,meshpapel20);
ESC02_2.position.set (x,y,z);
return ESC02_2;
}