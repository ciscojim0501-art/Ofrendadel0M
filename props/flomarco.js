import * as THREE from "../js/three.module.js";

export default function ESC0010({ x, y, z }) {

//OBJETOS  ✏️✏️✏️✏️  🪶

// ==========================================
// LADO IZQUIERDO (x = -10)
// ==========================================

// Flor 1 (Morada)
var fcalavera1 = new THREE.TorusKnotGeometry(8, 4, 70, 5, 12, 7);
var mcalavera1 = new THREE.MeshLambertMaterial({color: 0x5A0032, shininess: 100, specular: 0xFA8B0C});  
var flcalavera1 = new THREE.Mesh(fcalavera1, mcalavera1);
//scene.add(flcalavera1);
flcalavera1.position.set(-10, 0, -10);
flcalavera1.rotation.set(Math.PI / 2, 0, 0);
flcalavera1.scale.set(0.02, 0.02, 0.02);

// Flor 2 (Naranja)
var fcalavera2 = new THREE.TorusKnotGeometry(8, 4, 70, 5, 12, 7);
var mcalavera2 = new THREE.MeshLambertMaterial({color: 0xC92D00, shininess: 100, specular: 0xFA8B0C});
var flcalavera2 = new THREE.Mesh(fcalavera2, mcalavera2);
//scene.add(flcalavera2);
flcalavera2.position.set(-10, 0, -8);
flcalavera2.rotation.set(Math.PI / 2, 0, 0);
flcalavera2.scale.set(0.02, 0.02, 0.02);

// Flor 3 (Morada)
var fcalavera3 = new THREE.TorusKnotGeometry(8, 4, 70, 5, 12, 7);
var mcalavera3 = new THREE.MeshLambertMaterial({color: 0x5A0032, shininess: 100, specular: 0xFA8B0C});  
var flcalavera3 = new THREE.Mesh(fcalavera3, mcalavera3);
//scene.add(flcalavera3);
flcalavera3.position.set(-10, 0, -6);
flcalavera3.rotation.set(Math.PI / 2, 0, 0);
flcalavera3.scale.set(0.02, 0.02, 0.02);

// Flor 4 (Naranja)
var fcalavera4 = new THREE.TorusKnotGeometry(8, 4, 70, 5, 12, 7);
var mcalavera4 = new THREE.MeshLambertMaterial({color: 0xC92D00, shininess: 100, specular: 0xFA8B0C});
var flcalavera4 = new THREE.Mesh(fcalavera4, mcalavera4);
//scene.add(flcalavera4);
flcalavera4.position.set(-10, 0, -4);
flcalavera4.rotation.set(Math.PI / 2, 0, 0);
flcalavera4.scale.set(0.02, 0.02, 0.02);

// Flor 5 (Morada)
var fcalavera5 = new THREE.TorusKnotGeometry(8, 4, 70, 5, 12, 7);
var mcalavera5 = new THREE.MeshLambertMaterial({color: 0x5A0032, shininess: 100, specular: 0xFA8B0C});  
var flcalavera5 = new THREE.Mesh(fcalavera5, mcalavera5);
//scene.add(flcalavera5);
flcalavera5.position.set(-10, 0, -2);
flcalavera5.rotation.set(Math.PI / 2, 0, 0);
flcalavera5.scale.set(0.02, 0.02, 0.02);

// Flor 6 (Naranja)
var fcalavera6 = new THREE.TorusKnotGeometry(8, 4, 70, 5, 12, 7);
var mcalavera6 = new THREE.MeshLambertMaterial({color: 0xC92D00, shininess: 100, specular: 0xFA8B0C});
var flcalavera6 = new THREE.Mesh(fcalavera6, mcalavera6);
//scene.add(flcalavera6);
flcalavera6.position.set(-10, 0, 0);
flcalavera6.rotation.set(Math.PI / 2, 0, 0);
flcalavera6.scale.set(0.02, 0.02, 0.02);

// Flor 7 (Morada)
var fcalavera7 = new THREE.TorusKnotGeometry(8, 4, 70, 5, 12, 7);
var mcalavera7 = new THREE.MeshLambertMaterial({color: 0x5A0032, shininess: 100, specular: 0xFA8B0C});  
var flcalavera7 = new THREE.Mesh(fcalavera7, mcalavera7);
//scene.add(flcalavera7);
flcalavera7.position.set(-10, 0, 2);
flcalavera7.rotation.set(Math.PI / 2, 0, 0);
flcalavera7.scale.set(0.02, 0.02, 0.02);

// Flor 8 (Naranja)
var fcalavera8 = new THREE.TorusKnotGeometry(8, 4, 70, 5, 12, 7);
var mcalavera8 = new THREE.MeshLambertMaterial({color: 0xC92D00, shininess: 100, specular: 0xFA8B0C});
var flcalavera8 = new THREE.Mesh(fcalavera8, mcalavera8);
//scene.add(flcalavera8);
flcalavera8.position.set(-10, 0, 4);
flcalavera8.rotation.set(Math.PI / 2, 0, 0);
flcalavera8.scale.set(0.02, 0.02, 0.02);

// Flor 9 (Morada)
var fcalavera9 = new THREE.TorusKnotGeometry(8, 4, 70, 5, 12, 7);
var mcalavera9 = new THREE.MeshLambertMaterial({color: 0x5A0032, shininess: 100, specular: 0xFA8B0C});  
var flcalavera9 = new THREE.Mesh(fcalavera9, mcalavera9);
//scene.add(flcalavera9);
flcalavera9.position.set(-10, 0, 6);
flcalavera9.rotation.set(Math.PI / 2, 0, 0);
flcalavera9.scale.set(0.02, 0.02, 0.02);

// Flor 10 (Naranja)
var fcalavera10 = new THREE.TorusKnotGeometry(8, 4, 70, 5, 12, 7);
var mcalavera10 = new THREE.MeshLambertMaterial({color: 0xC92D00, shininess: 100, specular: 0xFA8B0C});
var flcalavera10 = new THREE.Mesh(fcalavera10, mcalavera10);
//scene.add(flcalavera10);
flcalavera10.position.set(-10, 0, 8);
flcalavera10.rotation.set(Math.PI / 2, 0, 0);
flcalavera10.scale.set(0.02, 0.02, 0.02);

// Flor 11 (Morada)
var fcalavera11 = new THREE.TorusKnotGeometry(8, 4, 70, 5, 12, 7);
var mcalavera11 = new THREE.MeshLambertMaterial({color: 0x5A0032, shininess: 100, specular: 0xFA8B0C});  
var flcalavera11 = new THREE.Mesh(fcalavera11, mcalavera11);
//scene.add(flcalavera11);
flcalavera11.position.set(-10, 0, 10);
flcalavera11.rotation.set(Math.PI / 2, 0, 0);
flcalavera11.scale.set(0.02, 0.02, 0.02);


// ==========================================
// LADO DERECHO (x = 10)
// ==========================================

// Flor 12 (Naranja)
var fcalavera12 = new THREE.TorusKnotGeometry(8, 4, 70, 5, 12, 7);
var mcalavera12 = new THREE.MeshLambertMaterial({color: 0xC92D00, shininess: 100, specular: 0xFA8B0C});
var flcalavera12 = new THREE.Mesh(fcalavera12, mcalavera12);
//scene.add(flcalavera12);
flcalavera12.position.set(10, 0, -10);
flcalavera12.rotation.set(Math.PI / 2, 0, 0);
flcalavera12.scale.set(0.02, 0.02, 0.02);

// Flor 13 (Morada)
var fcalavera13 = new THREE.TorusKnotGeometry(8, 4, 70, 5, 12, 7);
var mcalavera13 = new THREE.MeshLambertMaterial({color: 0x5A0032, shininess: 100, specular: 0xFA8B0C});  
var flcalavera13 = new THREE.Mesh(fcalavera13, mcalavera13);
//scene.add(flcalavera13);
flcalavera13.position.set(10, 0, -8);
flcalavera13.rotation.set(Math.PI / 2, 0, 0);
flcalavera13.scale.set(0.02, 0.02, 0.02);

// Flor 14 (Naranja)
var fcalavera14 = new THREE.TorusKnotGeometry(8, 4, 70, 5, 12, 7);
var mcalavera14 = new THREE.MeshLambertMaterial({color: 0xC92D00, shininess: 100, specular: 0xFA8B0C});
var flcalavera14 = new THREE.Mesh(fcalavera14, mcalavera14);
//scene.add(flcalavera14);
flcalavera14.position.set(10, 0, -6);
flcalavera14.rotation.set(Math.PI / 2, 0, 0);
flcalavera14.scale.set(0.02, 0.02, 0.02);

// Flor 15 (Morada)
var fcalavera15 = new THREE.TorusKnotGeometry(8, 4, 70, 5, 12, 7);
var mcalavera15 = new THREE.MeshLambertMaterial({color: 0x5A0032, shininess: 100, specular: 0xFA8B0C});  
var flcalavera15 = new THREE.Mesh(fcalavera15, mcalavera15);
//scene.add(flcalavera15);
flcalavera15.position.set(10, 0, -4);
flcalavera15.rotation.set(Math.PI / 2, 0, 0);
flcalavera15.scale.set(0.02, 0.02, 0.02);

// Flor 16 (Naranja)
var fcalavera16 = new THREE.TorusKnotGeometry(8, 4, 70, 5, 12, 7);
var mcalavera16 = new THREE.MeshLambertMaterial({color: 0xC92D00, shininess: 100, specular: 0xFA8B0C});
var flcalavera16 = new THREE.Mesh(fcalavera16, mcalavera16);
//scene.add(flcalavera16);
flcalavera16.position.set(10, 0, -2);
flcalavera16.rotation.set(Math.PI / 2, 0, 0);
flcalavera16.scale.set(0.02, 0.02, 0.02);

// Flor 17 (Morada)
var fcalavera17 = new THREE.TorusKnotGeometry(8, 4, 70, 5, 12, 7);
var mcalavera17 = new THREE.MeshLambertMaterial({color: 0x5A0032, shininess: 100, specular: 0xFA8B0C});  
var flcalavera17 = new THREE.Mesh(fcalavera17, mcalavera17);
//scene.add(flcalavera17);
flcalavera17.position.set(10, 0, 0);
flcalavera17.rotation.set(Math.PI / 2, 0, 0);
flcalavera17.scale.set(0.02, 0.02, 0.02);

// Flor 18 (Naranja)
var fcalavera18 = new THREE.TorusKnotGeometry(8, 4, 70, 5, 12, 7);
var mcalavera18 = new THREE.MeshLambertMaterial({color: 0xC92D00, shininess: 100, specular: 0xFA8B0C});
var flcalavera18 = new THREE.Mesh(fcalavera18, mcalavera18);
//scene.add(flcalavera18);
flcalavera18.position.set(10, 0, 2);
flcalavera18.rotation.set(Math.PI / 2, 0, 0);
flcalavera18.scale.set(0.02, 0.02, 0.02);

// Flor 19 (Morada)
var fcalavera19 = new THREE.TorusKnotGeometry(8, 4, 70, 5, 12, 7);
var mcalavera19 = new THREE.MeshLambertMaterial({color: 0x5A0032, shininess: 100, specular: 0xFA8B0C});  
var flcalavera19 = new THREE.Mesh(fcalavera19, mcalavera19);
//scene.add(flcalavera19);
flcalavera19.position.set(10, 0, 4);
flcalavera19.rotation.set(Math.PI / 2, 0, 0);
flcalavera19.scale.set(0.02, 0.02, 0.02);

// Flor 20 (Naranja)
var fcalavera20 = new THREE.TorusKnotGeometry(8, 4, 70, 5, 12, 7);
var mcalavera20 = new THREE.MeshLambertMaterial({color: 0xC92D00, shininess: 100, specular: 0xFA8B0C});
var flcalavera20 = new THREE.Mesh(fcalavera20, mcalavera20);
//scene.add(flcalavera20);
flcalavera20.position.set(10, 0, 6);
flcalavera20.rotation.set(Math.PI / 2, 0, 0);
flcalavera20.scale.set(0.02, 0.02, 0.02);

// Flor 21 (Morada)
var fcalavera21 = new THREE.TorusKnotGeometry(8, 4, 70, 5, 12, 7);
var mcalavera21 = new THREE.MeshLambertMaterial({color: 0x5A0032, shininess: 100, specular: 0xFA8B0C});  
var flcalavera21 = new THREE.Mesh(fcalavera21, mcalavera21);
//scene.add(flcalavera21);
flcalavera21.position.set(10, 0, 8);
flcalavera21.rotation.set(Math.PI / 2, 0, 0);
flcalavera21.scale.set(0.02, 0.02, 0.02);

// Flor 22 (Naranja)
var fcalavera22 = new THREE.TorusKnotGeometry(8, 4, 70, 5, 12, 7);
var mcalavera22 = new THREE.MeshLambertMaterial({color: 0xC92D00, shininess: 100, specular: 0xFA8B0C});
var flcalavera22 = new THREE.Mesh(fcalavera22, mcalavera22);
//scene.add(flcalavera22);
flcalavera22.position.set(10, 0, 10);
flcalavera22.rotation.set(Math.PI / 2, 0, 0);
flcalavera22.scale.set(0.02, 0.02, 0.02);


// ==========================================
// LADO TRASERO (z = -10)
// ==========================================

// Flor 23 (Morada)
var fcalavera23 = new THREE.TorusKnotGeometry(8, 4, 70, 5, 12, 7);
var mcalavera23 = new THREE.MeshLambertMaterial({color: 0x5A0032, shininess: 100, specular: 0xFA8B0C});  
var flcalavera23 = new THREE.Mesh(fcalavera23, mcalavera23);
//scene.add(flcalavera23);
flcalavera23.position.set(-8, 0, -10);
flcalavera23.rotation.set(Math.PI / 2, 0, 0);
flcalavera23.scale.set(0.02, 0.02, 0.02);

// Flor 24 (Naranja)
var fcalavera24 = new THREE.TorusKnotGeometry(8, 4, 70, 5, 12, 7);
var mcalavera24 = new THREE.MeshLambertMaterial({color: 0xC92D00, shininess: 100, specular: 0xFA8B0C});
var flcalavera24 = new THREE.Mesh(fcalavera24, mcalavera24);
//scene.add(flcalavera24);
flcalavera24.position.set(-6, 0, -10);
flcalavera24.rotation.set(Math.PI / 2, 0, 0);
flcalavera24.scale.set(0.02, 0.02, 0.02);

// Flor 25 (Morada)
var fcalavera25 = new THREE.TorusKnotGeometry(8, 4, 70, 5, 12, 7);
var mcalavera25 = new THREE.MeshLambertMaterial({color: 0x5A0032, shininess: 100, specular: 0xFA8B0C});  
var flcalavera25 = new THREE.Mesh(fcalavera25, mcalavera25);
//scene.add(flcalavera25);
flcalavera25.position.set(-4, 0, -10);
flcalavera25.rotation.set(Math.PI / 2, 0, 0);
flcalavera25.scale.set(0.02, 0.02, 0.02);

// Flor 26 (Naranja)
var fcalavera26 = new THREE.TorusKnotGeometry(8, 4, 70, 5, 12, 7);
var mcalavera26 = new THREE.MeshLambertMaterial({color: 0xC92D00, shininess: 100, specular: 0xFA8B0C});
var flcalavera26 = new THREE.Mesh(fcalavera26, mcalavera26);
//scene.add(flcalavera26);
flcalavera26.position.set(-2, 0, -10);
flcalavera26.rotation.set(Math.PI / 2, 0, 0);
flcalavera26.scale.set(0.02, 0.02, 0.02);

// Flor 27 (Morada)
var fcalavera27 = new THREE.TorusKnotGeometry(8, 4, 70, 5, 12, 7);
var mcalavera27 = new THREE.MeshLambertMaterial({color: 0x5A0032, shininess: 100, specular: 0xFA8B0C});  
var flcalavera27 = new THREE.Mesh(fcalavera27, mcalavera27);
//scene.add(flcalavera27);
flcalavera27.position.set(0, 0, -10);
flcalavera27.rotation.set(Math.PI / 2, 0, 0);
flcalavera27.scale.set(0.02, 0.02, 0.02);

// Flor 28 (Naranja)
var fcalavera28 = new THREE.TorusKnotGeometry(8, 4, 70, 5, 12, 7);
var mcalavera28 = new THREE.MeshLambertMaterial({color: 0xC92D00, shininess: 100, specular: 0xFA8B0C});
var flcalavera28 = new THREE.Mesh(fcalavera28, mcalavera28);
//scene.add(flcalavera28);
flcalavera28.position.set(2, 0, -10);
flcalavera28.rotation.set(Math.PI / 2, 0, 0);
flcalavera28.scale.set(0.02, 0.02, 0.02);

// Flor 29 (Morada)
var fcalavera29 = new THREE.TorusKnotGeometry(8, 4, 70, 5, 12, 7);
var mcalavera29 = new THREE.MeshLambertMaterial({color: 0x5A0032, shininess: 100, specular: 0xFA8B0C});  
var flcalavera29 = new THREE.Mesh(fcalavera29, mcalavera29);
//scene.add(flcalavera29);
flcalavera29.position.set(4, 0, -10);
flcalavera29.rotation.set(Math.PI / 2, 0, 0);
flcalavera29.scale.set(0.02, 0.02, 0.02);

// Flor 30 (Naranja)
var fcalavera30 = new THREE.TorusKnotGeometry(8, 4, 70, 5, 12, 7);
var mcalavera30 = new THREE.MeshLambertMaterial({color: 0xC92D00, shininess: 100, specular: 0xFA8B0C});
var flcalavera30 = new THREE.Mesh(fcalavera30, mcalavera30);
//scene.add(flcalavera30);
flcalavera30.position.set(6, 0, -10);
flcalavera30.rotation.set(Math.PI / 2, 0, 0);
flcalavera30.scale.set(0.02, 0.02, 0.02);

// Flor 31 (Morada)
var fcalavera31 = new THREE.TorusKnotGeometry(8, 4, 70, 5, 12, 7);
var mcalavera31 = new THREE.MeshLambertMaterial({color: 0x5A0032, shininess: 100, specular: 0xFA8B0C});  
var flcalavera31 = new THREE.Mesh(fcalavera31, mcalavera31);
//scene.add(flcalavera31);
flcalavera31.position.set(8, 0, -10);
flcalavera31.rotation.set(Math.PI / 2, 0, 0);
flcalavera31.scale.set(0.02, 0.02, 0.02);


// ==========================================
// LADO FRONTAL (z = 10, con abertura libre al centro para el pasillo)
// ==========================================

// Lado izquierdo del frente (hacia el borde externo)
// Flor 32 (Morada)
var fcalavera32 = new THREE.TorusKnotGeometry(8, 4, 70, 5, 12, 7);
var mcalavera32 = new THREE.MeshLambertMaterial({color: 0x5A0032, shininess: 100, specular: 0xFA8B0C});  
var flcalavera32 = new THREE.Mesh(fcalavera32, mcalavera32);
//scene.add(flcalavera32);
flcalavera32.position.set(-8, 0, 10);
flcalavera32.rotation.set(Math.PI / 2, 0, 0);
flcalavera32.scale.set(0.02, 0.02, 0.02);

// Flor 33 (Naranja)
var fcalavera33 = new THREE.TorusKnotGeometry(8, 4, 70, 5, 12, 7);
var mcalavera33 = new THREE.MeshLambertMaterial({color: 0xC92D00, shininess: 100, specular: 0xFA8B0C});
var flcalavera33 = new THREE.Mesh(fcalavera33, mcalavera33);
//scene.add(flcalavera33);
flcalavera33.position.set(-6, 0, 10);
flcalavera33.rotation.set(Math.PI / 2, 0, 0);
flcalavera33.scale.set(0.02, 0.02, 0.02);

// Flor 34 (Morada)
var fcalavera34 = new THREE.TorusKnotGeometry(8, 4, 70, 5, 12, 7);
var mcalavera34 = new THREE.MeshLambertMaterial({color: 0x5A0032, shininess: 100, specular: 0xFA8B0C});  
var flcalavera34 = new THREE.Mesh(fcalavera34, mcalavera34);
//scene.add(flcalavera34);
flcalavera34.position.set(-4, 0, 10);
flcalavera34.rotation.set(Math.PI / 2, 0, 0);
flcalavera34.scale.set(0.02, 0.02, 0.02);

// (El centro de -2 a 2 queda totalmente libre para el pasillo de velas)

// Lado derecho del frente (hacia el borde externo)
// Flor 35 (Naranja)
var fcalavera35 = new THREE.TorusKnotGeometry(8, 4, 70, 5, 12, 7);
var mcalavera35 = new THREE.MeshLambertMaterial({color: 0xC92D00, shininess: 100, specular: 0xFA8B0C});
var flcalavera35 = new THREE.Mesh(fcalavera35, mcalavera35);
//scene.add(flcalavera35);
flcalavera35.position.set(4, 0, 10);
flcalavera35.rotation.set(Math.PI / 2, 0, 0);
flcalavera35.scale.set(0.02, 0.02, 0.02);

// Flor 36 (Morada)
var fcalavera36 = new THREE.TorusKnotGeometry(8, 4, 70, 5, 12, 7);
var mcalavera36 = new THREE.MeshLambertMaterial({color: 0x5A0032, shininess: 100, specular: 0xFA8B0C});  
var flcalavera36 = new THREE.Mesh(fcalavera36, mcalavera36);
//scene.add(flcalavera36);
flcalavera36.position.set(6, 0, 10);
flcalavera36.rotation.set(Math.PI / 2, 0, 0);
flcalavera36.scale.set(0.02, 0.02, 0.02);

// Flor 37 (Naranja)
var fcalavera37 = new THREE.TorusKnotGeometry(8, 4, 70, 5, 12, 7);
var mcalavera37 = new THREE.MeshLambertMaterial({color: 0xC92D00, shininess: 100, specular: 0xFA8B0C});
var flcalavera37 = new THREE.Mesh(fcalavera37, mcalavera37);
//scene.add(flcalavera37);
flcalavera37.position.set(8, 0, 10);
flcalavera37.rotation.set(Math.PI / 2, 0, 0);
flcalavera37.scale.set(0.02, 0.02, 0.02);

const ESC0010 = new THREE.Group();
ESC0010.add(flcalavera1,flcalavera2,flcalavera3,flcalavera4,flcalavera5,flcalavera6,flcalavera7,flcalavera8,flcalavera9,flcalavera10,flcalavera11,flcalavera12,flcalavera13,flcalavera14,flcalavera15,flcalavera16,flcalavera17,flcalavera18,flcalavera19,flcalavera20,flcalavera21,flcalavera22,flcalavera23,flcalavera24,flcalavera25,flcalavera26,flcalavera27,flcalavera28,flcalavera29,flcalavera30,flcalavera31,flcalavera32,flcalavera33,flcalavera34,flcalavera35,flcalavera36,flcalavera37);
ESC0010.position.set (x,y,z);
return ESC0010;

}