import * as THREE from "../js/three.module.js";
import { RoundedBoxGeometry } from "../js/RoundedBoxGeometry.js";

export default function ESC004({ x, y, z }) {
    // OBJETOS ✏️✏️✏️✏️ 🪶

    // BASE FLORERO
    var geometryflor020 = new THREE.CylinderGeometry(5, 3, 5);
    var materialflor020 = new THREE.MeshLambertMaterial({ color: 0x28AB1A, side: THREE.DoubleSide });
    var meshflor020 = new THREE.Mesh(geometryflor020, materialflor020);
    meshflor020.position.set(0, 2.5, 0);

    // ANILLOS DEL FLORERO
    var geometryflor05 = new THREE.TorusGeometry(4.8, 0.40, 40, 40);
    var materialflor05 = new THREE.MeshLambertMaterial({ color: 0x5E3601, side: THREE.DoubleSide });
    var meshflor05 = new THREE.Mesh(geometryflor05, materialflor05);
    meshflor05.rotation.set(Math.PI / 2, 0, 0);
    meshflor05.position.set(0, 4.8, 0);

    var geometryflor06 = new THREE.TorusGeometry(3.3, 0.40, 40, 40);
    var materialflor06 = new THREE.MeshLambertMaterial({ color: 0x5E3601, side: THREE.DoubleSide });
    var meshflor06 = new THREE.Mesh(geometryflor06, materialflor06);
    meshflor06.rotation.set(Math.PI / 2, 0, 0);
    meshflor06.position.set(0, 0.5, 0);

    // FLORES
    var geometryflor01 = new RoundedBoxGeometry(1, 5, 1, 5, 0.5);
    var materialflor01 = new THREE.MeshLambertMaterial({
        color: 0xFA8B14,
        // wireframe: true
    });
    
    var meshflor01 = new THREE.Mesh(geometryflor01, materialflor01);
    var meshflor02 = new THREE.Mesh(geometryflor01, materialflor01);
    meshflor02.rotation.set(0, 0, Math.PI / 4);
    var meshflor03 = new THREE.Mesh(geometryflor01, materialflor01);
    meshflor03.rotation.set(0, 0, Math.PI / 2);
    var meshflor04 = new THREE.Mesh(geometryflor01, materialflor01);
    meshflor04.rotation.set(0, 0, 2.355);

    var UNO = new THREE.Group();
    UNO.add(meshflor01, meshflor02, meshflor03, meshflor04);
    UNO.castShadow = true;

    var DOS = UNO.clone();
    DOS.castShadow = true;
    DOS.rotation.set(0, Math.PI / 4, 0);

    var TRES = UNO.clone();
    TRES.castShadow = true;
    TRES.rotation.set(0, Math.PI / 2, 0);

    var CUATRO = UNO.clone();
    CUATRO.castShadow = true;
    CUATRO.rotation.set(0, 2.355, 0);

    var CINCO = new THREE.Group();
    CINCO.add(UNO, DOS, TRES, CUATRO);
    CINCO.castShadow = true;
    CINCO.position.set(0, 5.5, 0);

    var SEIS = CINCO.clone();
    SEIS.castShadow = true;
    SEIS.position.set(1, 5.5, 2);

    var SIETE = CINCO.clone();
    SIETE.castShadow = true;
    SIETE.position.set(-1, 5.5, 2);

    var OCHO = CINCO.clone();
    OCHO.castShadow = true;
    OCHO.position.set(1, 5.5, -2);

    var NUEVE = CINCO.clone();
    NUEVE.castShadow = true;
    NUEVE.position.set(-1, 5.5, -2);

    var DIEZ = CINCO.clone();
    DIEZ.castShadow = true;
    DIEZ.position.set(-2.2, 5.5, -1);

    var ONCE = CINCO.clone();
    ONCE.castShadow = true;
    ONCE.position.set(2.2, 5.5, -1);

    const ESC004 = new THREE.Group();
    ESC004.add(meshflor020, meshflor05, meshflor06, CINCO, SEIS, SIETE, OCHO, NUEVE, DIEZ, ONCE);
    ESC004.position.set(x, y, z);
    
    return ESC004;
}