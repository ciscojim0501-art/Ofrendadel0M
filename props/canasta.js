import * as THREE from "../js/three.module.js";

export default function ESC0008({ x, y, z }) {
    // OBJETOS  ✏️✏️✏️✏️  🪶

    var geometry11 = new THREE.CylinderGeometry(1.3, 1, 1, 20, 20, true);
    var tex = new THREE.TextureLoader().load('img/cana.jpg');

    var material1 = new THREE.MeshLambertMaterial({ side: THREE.DoubleSide, map: tex });
    var mesh11 = new THREE.Mesh(geometry11, material1);
    mesh11.position.set(0, 1, 0);

    var geometry07 = new THREE.CircleGeometry(1, 20);
    var material07 = new THREE.MeshLambertMaterial({ color: 0xDB8840, side: THREE.DoubleSide });
    var mesh07 = new THREE.Mesh(geometry07, material07);
    mesh07.position.set(0, 0.5, 0);
    mesh07.rotation.set(Math.PI / 2, 0, 0);

    var geometry12 = new THREE.TorusGeometry(8, 0.8, 5, 20);
    var material12 = new THREE.MeshLambertMaterial({ color: 0xDB8840, side: THREE.DoubleSide });
    var mesh12 = new THREE.Mesh(geometry12, material12);
    mesh12.rotation.set(Math.PI / 2, 0, 0);
    mesh12.position.set(0, 1.6, 0);
    mesh12.scale.set(0.16, 0.16, 0.16);

    // MANZANA 1
    var geometryManzana = new THREE.SphereGeometry(0.5, 16, 16);
    var materialManzana = new THREE.MeshLambertMaterial({ color: 0xE63946 });
    var manzana = new THREE.Mesh(geometryManzana, materialManzana);
    manzana.position.set(-0.4, 1.5, 0.62);

    var geometryTallo = new THREE.CylinderGeometry(0.02, 0.02, 0.2, 8);
    var materialTallo = new THREE.MeshLambertMaterial({ color: 0x4A2E12 });
    var tallo = new THREE.Mesh(geometryTallo, materialTallo);
    tallo.position.set(-0.4, 2, 0.62);

    // MANZANA 2
    var geometryManzana2 = new THREE.SphereGeometry(0.5, 16, 16);
    var materialManzana2 = new THREE.MeshLambertMaterial({ color: 0xE63946 });
    var manzana2 = new THREE.Mesh(geometryManzana2, materialManzana2);
    manzana2.position.set(-0.5, 1.9, -0.7);
    manzana2.scale.set(0.9, 0.9, 0.9);

    var geometryTallo2 = new THREE.CylinderGeometry(0.02, 0.02, 0.2, 8);
    var materialTallo2 = new THREE.MeshLambertMaterial({ color: 0x4A2E12 });
    var tallo2 = new THREE.Mesh(geometryTallo2, materialTallo2);
    tallo2.position.set(-0.5, 2.4, -0.7);

    // NARANJAS
    var materialNaranja = new THREE.MeshLambertMaterial({ color: 0xFF7B00 });

    var naranja = new THREE.Mesh(new THREE.SphereGeometry(0.52, 16, 16), materialNaranja);
    naranja.position.set(0.4, 1.85, -0.5);

    var naranja1 = new THREE.Mesh(new THREE.SphereGeometry(0.52, 16, 16), materialNaranja);
    naranja1.position.set(0.4, 1, 0);

    var naranja2 = new THREE.Mesh(new THREE.SphereGeometry(0.52, 16, 16), materialNaranja);
    naranja2.position.set(0.4, 1.7, 0.55);
    naranja2.scale.set(0.8, 0.8, 0.8);

    var naranja3 = new THREE.Mesh(new THREE.SphereGeometry(0.52, 16, 16), materialNaranja);
    naranja3.position.set(-0.36, 2, 0);
    naranja3.scale.set(0.75, 0.76, 0.76);

    const grupo = new THREE.Group();
    grupo.add(mesh11, mesh12, mesh07, manzana, manzana2, tallo, tallo2, naranja, naranja1, naranja2, naranja3);
    grupo.position.set(x, y, z);
    
    return grupo;
}