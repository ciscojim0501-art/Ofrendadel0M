import * as THREE from "../js/three.module.js";

export default function E044({ x, y, z }) {
    
    const E044 = new THREE.Group();

    var geometrycalavera1 = new THREE.SphereGeometry(0.5);
    var materialcalavera1 = new THREE.MeshLambertMaterial({color:0xD9D9D9, side: THREE.DoubleSide});
    var meshcalavera1 = new THREE.Mesh(geometrycalavera1,materialcalavera1);
    E044.add(meshcalavera1);
    meshcalavera1.castShadow = true;
    meshcalavera1.position.set(0,0.5,0);

    var geometrycalavera2 = new THREE.SphereGeometry(0.12);
    var materialcalavera2 = new THREE.MeshLambertMaterial({color:0x000000, side: THREE.DoubleSide});
    var meshcalavera2 = new THREE.Mesh(geometrycalavera2,materialcalavera2);
    E044.add(meshcalavera2);
    meshcalavera2.castShadow = true;
    meshcalavera2.position.set(0.35,0.7,0.15);

    var geometrycalavera2 = new THREE.SphereGeometry(0.12);
    var materialcalavera2 = new THREE.MeshLambertMaterial({color:0x000000, side: THREE.DoubleSide});
    var meshcalavera2 = new THREE.Mesh(geometrycalavera2,materialcalavera2);
    E044.add(meshcalavera2);
    meshcalavera2.castShadow = true;
    meshcalavera2.position.set(0.35,0.7,-0.15);

    var geometrycalavera2 = new THREE.SphereGeometry(0.08);
    var materialcalavera2 = new THREE.MeshLambertMaterial({color:0x6B6CE3, side: THREE.DoubleSide});
    var meshcalavera2 = new THREE.Mesh(geometrycalavera2,materialcalavera2);
    E044.add(meshcalavera2);
    meshcalavera2.position.set(0.40,0.5,0.24);

    var geometrycalavera2 = new THREE.SphereGeometry(0.08);
    var materialcalavera2 = new THREE.MeshLambertMaterial({color:0x6B6CE3, side: THREE.DoubleSide});
    var meshcalavera2 = new THREE.Mesh(geometrycalavera2,materialcalavera2);
    E044.add(meshcalavera2);
    meshcalavera2.position.set(0.40,0.5,-0.24);

    var geometrycalavera3 = new THREE.ConeGeometry(0.05,0.15,20);
    var materialcalavera3 = new THREE.MeshLambertMaterial({color:0x000000, side: THREE.DoubleSide});
    var meshcalavera3 = new THREE.Mesh(geometrycalavera3,materialcalavera3);
    E044.add(meshcalavera3);
    meshcalavera3.position.set(0.49,0.6,0);

    var geometrycalavera4 = new THREE.BoxGeometry(0.1,0.1,0.1);
    var materialcalavera4 = new THREE.MeshLambertMaterial({color:0x000000, side: THREE.DoubleSide});
    var meshcalavera4 = new THREE.Mesh(geometrycalavera4,materialcalavera4);
    E044.add(meshcalavera4);
    meshcalavera4.position.set(0.45,0.35,0.05);

    var geometrycalavera4 = new THREE.BoxGeometry(0.1,0.1,0.1);
    var materialcalavera4 = new THREE.MeshLambertMaterial({color:0x000000, side: THREE.DoubleSide});
    var meshcalavera4 = new THREE.Mesh(geometrycalavera4,materialcalavera4);
    E044.add(meshcalavera4);
    meshcalavera4.position.set(0.45,0.35,0.1);

    var geometrycalavera4 = new THREE.BoxGeometry(0.1,0.1,0.1);
    var materialcalavera4 = new THREE.MeshLambertMaterial({color:0x000000, side: THREE.DoubleSide});
    var meshcalavera4 = new THREE.Mesh(geometrycalavera4,materialcalavera4);
    E044.add(meshcalavera4);
    meshcalavera4.position.set(0.45,0.35,-0.05);

    var geometrycalavera4 = new THREE.BoxGeometry(0.1,0.1,0.1);
    var materialcalavera4 = new THREE.MeshLambertMaterial({color:0x000000, side: THREE.DoubleSide});
    var meshcalavera4 = new THREE.Mesh(geometrycalavera4,materialcalavera4);
    E044.add(meshcalavera4);
    meshcalavera4.position.set(0.45,0.35,-0.1);

    var geometrycalavera5 = new THREE.BoxGeometry(0.08,0.08,0.08);
    var materialcalavera5 = new THREE.MeshLambertMaterial({color:0xFFFFFF, side: THREE.DoubleSide});
    var meshcalavera5 = new THREE.Mesh(geometrycalavera5,materialcalavera5);
    E044.add(meshcalavera5);
    meshcalavera5.position.set(0.47,0.35,-0.10);

    var geometrycalavera5 = new THREE.BoxGeometry(0.08,0.08,0.08);
    var materialcalavera5 = new THREE.MeshLambertMaterial({color:0xFFFFFF, side: THREE.DoubleSide});
    var meshcalavera5 = new THREE.Mesh(geometrycalavera5,materialcalavera5);
    E044.add(meshcalavera5);
    meshcalavera5.position.set(0.47,0.35,0.00);

    var geometrycalavera5 = new THREE.BoxGeometry(0.08,0.08,0.08);
    var materialcalavera5 = new THREE.MeshLambertMaterial({color:0xFFFFFF, side: THREE.DoubleSide});
    var meshcalavera5 = new THREE.Mesh(geometrycalavera5,materialcalavera5);
    E044.add(meshcalavera5);
    meshcalavera5.position.set(0.47,0.35,0.1);

    var fcalavera6 = new THREE.TorusKnotGeometry(8,4,100,16,18,1);
    var mcalavera6 = new THREE.MeshLambertMaterial({color:0x0A0DF2, shininess:100, specular:0xFA8B0C});
    var flcalavera6 = new THREE.Mesh(fcalavera6,mcalavera6);
    flcalavera6.position.set(0.2,1,0);
    flcalavera6.rotation.set(Math.PI/2,-1,1);
    flcalavera6.scale.set(0.01, 0.01, 0.01);
    flcalavera6.castShadow = true;
    E044.add(flcalavera6);

    var fcalavera6 = new THREE.TorusKnotGeometry(8,4,100,16,18,1);
    var mcalavera6 = new THREE.MeshLambertMaterial({color:0x0A0DF2, shininess:100, specular:0xFA8B0C});
    var flcalavera6 = new THREE.Mesh(fcalavera6,mcalavera6);
    flcalavera6.position.set(0.15,1,-0.25);
    flcalavera6.rotation.set(Math.PI/5,-1,1);
    flcalavera6.scale.set(0.01, 0.01, 0.01);
    flcalavera6.castShadow = true;
    E044.add(flcalavera6);

    var fcalavera6 = new THREE.TorusKnotGeometry(8,4,100,16,18,1);
    var mcalavera6 = new THREE.MeshLambertMaterial({color:0x0A0DF2, shininess:100, specular:0xFA8B0C});
    var flcalavera6 = new THREE.Mesh(fcalavera6,mcalavera6);
    flcalavera6.position.set(0.15,1,0.25);
    flcalavera6.rotation.set(Math.PI/1,-1,1);
    flcalavera6.scale.set(0.01, 0.01, 0.01);
    flcalavera6.castShadow = true;
    E044.add(flcalavera6);

    E044.position.set(x, y, z);
    return E044;
}