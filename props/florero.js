import * as THREE from "../js/three.module.js";

export default function E03({ x, y, z }) {
    
    // --- FLORERO ---
    var geometryFlorero = new THREE.CylinderGeometry(0.3, 0.7, 2, 32);
    var materialFlorero = new THREE.MeshLambertMaterial({color: 0x121111, side: THREE.DoubleSide});
    var meshFlorero = new THREE.Mesh(geometryFlorero, materialFlorero);
    meshFlorero.castShadow = true;
    meshFlorero.position.set(0, 1, 0);

    var geoBoca = new THREE.CylinderGeometry(0.45, 0.25, 0.5, 32);
    var meshBoca = new THREE.Mesh(geoBoca, materialFlorero);
    meshBoca.castShadow = true;
    meshBoca.position.set(0, 2.05, 0);

    // --- GEOMETRÍAS Y MATERIALES GENERALES DE LAS FLORES ---
    var geoflor = new THREE.CylinderGeometry(0.1, 0.1, 2.5, 20);
    var materialflor = new THREE.MeshLambertMaterial({color: 0x194520, side: THREE.DoubleSide});
    var geometryflor2 = new THREE.SphereGeometry(0.25);
    var materialflor2 = new THREE.MeshLambertMaterial({color: 0xF7C8A6, side: THREE.DoubleSide});
    var matPetalo = new THREE.MeshLambertMaterial({color: 0xD97225, side: THREE.DoubleSide});
    var geoPetalo = new THREE.CircleGeometry(0.15, 40);

    // --- FLOR 1 (Principal) ---
    var flor1 = new THREE.Group();
    
    var meshflor = new THREE.Mesh(geoflor, materialflor);
    meshflor.castShadow = true;
    meshflor.position.set(0, 2, 0);

    var meshflor2 = new THREE.Mesh(geometryflor2, materialflor2);
    meshflor2.castShadow = true;
    meshflor2.position.set(0, 3.3, 0);

    var meshflor3 = new THREE.Mesh(geoPetalo, matPetalo);
    meshflor3.castShadow = true;
    meshflor3.rotation.y = Math.PI / 2;
    meshflor3.position.set(0, 3.6, 0);

    var meshflor4 = new THREE.Mesh(geoPetalo, matPetalo);
    meshflor4.castShadow = true;
    meshflor4.rotation.y = Math.PI / 2;
    meshflor4.position.set(0, 3.45, 0.25);

    var meshflor5 = new THREE.Mesh(geoPetalo, matPetalo);
    meshflor5.castShadow = true;
    meshflor5.rotation.y = Math.PI / 2;
    meshflor5.position.set(0, 3.45, -0.25);

    var meshflor6 = new THREE.Mesh(geoPetalo, matPetalo);
    meshflor6.castShadow = true;
    meshflor6.rotation.y = Math.PI / 2;
    meshflor6.position.set(0, 3.17, 0.25);

    var meshflor7 = new THREE.Mesh(geoPetalo, matPetalo);
    meshflor7.castShadow = true;
    meshflor7.rotation.y = Math.PI / 2;
    meshflor7.position.set(0, 3.17, -0.25);

    var meshflor8 = new THREE.Mesh(geoPetalo, matPetalo);
    meshflor8.castShadow = true;
    meshflor8.rotation.y = Math.PI / 2;
    meshflor8.position.set(0, 3, 0);

    flor1.add(meshflor, meshflor2, meshflor3, meshflor4, meshflor5, meshflor6, meshflor7, meshflor8);
    flor1.position.set(0.2, 0, 0);


    // --- FLOR 2 (Inclinada 1) ---
    var flor2 = flor1.clone();
    flor2.rotation.x = Math.PI / 20;
    flor2.rotation.z = Math.PI / 20;
    flor2.position.set(0.2, 0, -0.2);


    // --- FLOR 3 (Inclinada 2) ---
    var flor3 = flor1.clone();
    flor3.rotation.x = Math.PI / -20;
    flor3.rotation.z = Math.PI / 20;
    flor3.position.set(0.2, 0, 0.15);


    // --- GRUPO COMPLETO PRINCIPAL ---
    const E03 = new THREE.Group();
    E03.add(meshFlorero, meshBoca, flor1, flor2, flor3);
    
    E03.position.set(x, y, z);
    return E03;
}