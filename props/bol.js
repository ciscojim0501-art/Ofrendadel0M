import * as THREE from "../js/three.module.js";

export default function ESC0007({ x, y, z }) {
    var fcalavera6 = new THREE.TorusKnotGeometry(8, 4, 70, 5, 12, 7);
    var mcalavera6 = new THREE.MeshLambertMaterial({color: 0x5A0032, shininess: 100, specular: 0xFA8B0C});
    
    var flcalavera6 = new THREE.Mesh(fcalavera6, mcalavera6);

    flcalavera6.position.set(x, y, z);
    flcalavera6.rotation.set(Math.PI / 2, 0, 0);
    flcalavera6.scale.set(0.01, 0.01, 0.01);

    return flcalavera6;
}