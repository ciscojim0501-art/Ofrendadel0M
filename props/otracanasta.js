import * as THREE from "../js/three.module.js";

export default function ESC0009({ x, y, z }) {
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

    // GUAYABAS
    var geometryGuayaba = new THREE.SphereGeometry(0.45, 16, 16);
    geometryGuayaba.scale(1, 1.25, 1); 
    var materialGuayaba = new THREE.MeshLambertMaterial({ color: 0xD4E157 });
    var guayaba = new THREE.Mesh(geometryGuayaba, materialGuayaba);
    guayaba.position.set(-0.4, 1.5, 0.62);
    guayaba.rotation.z = -Math.PI / 6;

    var geometryTalloGuayaba = new THREE.CylinderGeometry(0.015, 0.015, 0.15, 8);
    var materialTalloGuayaba = new THREE.MeshLambertMaterial({ color: 0x4A2E12 });
    var talloGuayaba = new THREE.Mesh(geometryTalloGuayaba, materialTalloGuayaba);
    talloGuayaba.position.set(-0.4, 2.05, 0.62);

    var geometryGuayaba2 = new THREE.SphereGeometry(0.45, 16, 16);
    geometryGuayaba2.scale(1, 1.25, 1); 
    var materialGuayaba2 = new THREE.MeshLambertMaterial({ color: 0xC5E1A5 }); 
    var guayaba2 = new THREE.Mesh(geometryGuayaba2, materialGuayaba2);
    guayaba2.position.set(-0.5, 1.9, -0.7);
    guayaba2.rotation.z = Math.PI / 8;

    var geometryTalloGuayaba2 = new THREE.CylinderGeometry(0.015, 0.015, 0.15, 8);
    var materialTalloGuayaba2 = new THREE.MeshLambertMaterial({ color: 0x4A2E12 });
    var talloGuayaba2 = new THREE.Mesh(geometryTalloGuayaba2, materialTalloGuayaba2);
    talloGuayaba2.position.set(-0.5, 2.45, -0.7);

    var geometryGuayaba3 = new THREE.SphereGeometry(0.42, 16, 16);
    geometryGuayaba3.scale(1, 1.2, 1); 
    var materialGuayaba3 = new THREE.MeshLambertMaterial({ color: 0xD4E157 });
    var guayaba3 = new THREE.Mesh(geometryGuayaba3, materialGuayaba3);
    guayaba3.position.set(-0.6, 1.2, 0);
    guayaba3.rotation.z = Math.PI / 6;

    var geometryGuayaba4 = new THREE.SphereGeometry(0.4, 16, 16);
    geometryGuayaba4.scale(1, 1.2, 1); 
    var materialGuayaba4 = new THREE.MeshLambertMaterial({ color: 0xCCDD33 });
    var guayaba4 = new THREE.Mesh(geometryGuayaba4, materialGuayaba4);
    guayaba4.position.set(-0.6, 2, 0);

    // JÍCAMAS
    var geometryJicama = new THREE.SphereGeometry(0.52, 16, 16);
    geometryJicama.scale(1.2, 0.8, 1.2); 
    var materialJicama = new THREE.MeshLambertMaterial({ color: 0xC2A675 });
    var jicama = new THREE.Mesh(geometryJicama, materialJicama);
    jicama.position.set(0.4, 1.85, -0.5);

    var geometryJicama1 = new THREE.SphereGeometry(0.52, 16, 16);
    geometryJicama1.scale(1.25, 0.82, 1.25); 
    var materialJicama1 = new THREE.MeshLambertMaterial({ color: 0xB89765 });
    var jicama1 = new THREE.Mesh(geometryJicama1, materialJicama1);
    jicama1.position.set(0.4, 1.0, 0);

    var geometryJicama3 = new THREE.SphereGeometry(0.52, 16, 16);
    geometryJicama3.scale(1.2, 0.83, 1.2); 
    var materialJicama3 = new THREE.MeshLambertMaterial({ color: 0xD0B484 });
    var jicama3 = new THREE.Mesh(geometryJicama3, materialJicama3);
    jicama3.position.set(0.4, 1.7, 0.55);
    jicama3.scale.set(0.8 * 1.2, 0.8 * 0.83, 0.8 * 1.2);

    var geometryJicama5 = new THREE.SphereGeometry(0.45, 16, 16);
    geometryJicama5.scale(1.25, 0.82, 1.25); 
    var materialJicama5 = new THREE.MeshLambertMaterial({ color: 0xC2A675 });
    var jicama5 = new THREE.Mesh(geometryJicama5, materialJicama5);
    jicama5.position.set(-0.2, 1.2, 0.4);

    // Agrupando todo correctamente
    const ESC0009 = new THREE.Group();
    ESC0009.add(
        mesh11, mesh12, mesh07, 
        guayaba, talloGuayaba, guayaba2, talloGuayaba2, guayaba3, guayaba4, 
        jicama, jicama1, jicama3, jicama5
    );
    ESC0009.position.set(x, y, z);
    
    return ESC0009;
}