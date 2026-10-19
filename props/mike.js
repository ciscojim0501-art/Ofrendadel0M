import * as THREE from "../js/three.module.js";

export default function ESC00011({ x, y, z }) {
  // OBJETOS  ✏️✏️✏️✏️  🪶

  //CUERPO
var fCuerpo = new THREE.SphereGeometry(9, 32, 32);
var mCuerpo = new THREE.MeshLambertMaterial({color: 0xFFFED4, shininess: 30});  
var flCuerpo = new THREE.Mesh(fCuerpo, mCuerpo);
//scene.add(flCuerpo);
flCuerpo.position.set(0, 5, 0);
flCuerpo.rotation.set(0, 0, 0);
flCuerpo.scale.set(1.0, 1.05, 1.0);

// CUERNO IZQUIERDO
var fCuernoIz = new THREE.ConeGeometry(1.2, 2.5, 16);
var mCuernoIz = new THREE.MeshLambertMaterial({color: 0x111111, shininess: 30});  
var flCuernoIz = new THREE.Mesh(fCuernoIz, mCuernoIz);
//scene.add(flCuernoIz);
flCuernoIz.position.set(-5, 13.5, 0);
flCuernoIz.rotation.set(0, 0, -Math.PI / 12);
flCuernoIz.scale.set(1.6, 1.6, 1.6);

// CUERNO DERECHO
var fCuernoDer = new THREE.ConeGeometry(1.2, 2.5, 16);
var mCuernoDer = new THREE.MeshLambertMaterial({color: 0x111111, shininess: 30});  
var flCuernoDer = new THREE.Mesh(fCuernoDer, mCuernoDer);
//scene.add(flCuernoDer);
flCuernoDer.position.set(5, 13.5, 0);
flCuernoDer.rotation.set(0, 0, Math.PI / 12);
flCuernoDer.scale.set(1.6, 1.6, 1.6);

// Cuenca Ocular Izquierda 
var fCuencaIz = new THREE.CylinderGeometry(2.5, 2.5, 0.5, 32);
var mCuenca = new THREE.MeshLambertMaterial({ color: 0x111111});
var meshCuencaIz = new THREE.Mesh(fCuencaIz, mCuenca);
//scene.add(meshCuencaIz);
meshCuencaIz.position.set(-2.5, 7, 8.75);
meshCuencaIz.rotation.set(Math.PI / 2, 0, 0);
meshCuencaIz.scale.set(0.9, 0.7, 0.75);

// Cuenca Ocular Derecha
var fCuencade = new THREE.CylinderGeometry(2.5, 2.5, 0.5, 32);
var mCuenca = new THREE.MeshLambertMaterial({ color: 0x111111});
var meshCuencaDer = new THREE.Mesh(fCuencade, mCuenca);
//scene.add(meshCuencaDer);
meshCuencaDer.position.set(2.5, 7, 8.75);
meshCuencaDer.rotation.set(Math.PI / 2, 0, 0);
meshCuencaDer.scale.set(0.9, 0.7, 0.75);

// Pupila Izquierda
var fPupila = new THREE.SphereGeometry(1, 16, 16);
var mNegro = new THREE.MeshLambertMaterial({ color: 0xFAFAFA });
var meshPupilaIz = new THREE.Mesh(fPupila, mNegro);
//scene.add(meshPupilaIz);
meshPupilaIz.position.set(-2.5, 7, 8.7);
meshPupilaIz.rotation.set(0, 0, 0);
meshPupilaIz.scale.set(1, 1, 1);

// Pupila Derecha
var fPupila1 = new THREE.SphereGeometry(1, 16, 16);
var mNegro1 = new THREE.MeshLambertMaterial({ color: 0xFAFAFA });
var meshPupilaDer = new THREE.Mesh(fPupila1, mNegro1);
//scene.add(meshPupilaDer);
meshPupilaDer.position.set(2.5, 7, 8.7);
meshPupilaDer.rotation.set(0, 0, 0);
meshPupilaDer.scale.set(1, 1, 1);

// NARIZ
var fNariz = new THREE.ConeGeometry(1.2, 2.0, 3);
var mNariz = new THREE.MeshLambertMaterial({color:0x111111, shininess: 30});  
var flNariz = new THREE.Mesh(fNariz, mNariz);
//scene.add(flNariz);
flNariz.position.set(0, 4.5, 9);
flNariz.rotation.set(0, 0, 0);
flNariz.scale.set(2, 1.2, 1);

// BOCA
var fBoca = new THREE.BoxGeometry(7, 1.2, 0.5);
var mBoca = new THREE.MeshLambertMaterial({color: 0x111111, shininess: 30});  
var flBoca = new THREE.Mesh(fBoca, mBoca);
//scene.add(flBoca);
flBoca.position.set(0, 1.3, 8.2);
flBoca.rotation.set(0, 0, 0);
flBoca.scale.set(1, 1, 1);

// BRAZO SUPERIOR IZQUIERDO
var fBrdSupIz = new THREE.CylinderGeometry(0.5, 0.5, 6, 16);
var mVerdeBrdSupIz = new THREE.MeshLambertMaterial({color: 0xFFFED4, shininess: 30});  
var flBrdSupIz = new THREE.Mesh(fBrdSupIz, mVerdeBrdSupIz);
//scene.add(flBrdSupIz);
flBrdSupIz.position.set(-10, 3, 0);
flBrdSupIz.rotation.set(0, 0, -Math.PI / 10);
flBrdSupIz.scale.set(0.9, 0.9, 1);

// CODO IZQUIERDO
var fCodoIz = new THREE.SphereGeometry(0.8, 16, 16);
var mVerdeCodoIz = new THREE.MeshLambertMaterial({color:0x111111, shininess: 30});  
var flCodoIz = new THREE.Mesh(fCodoIz, mVerdeCodoIz);
//scene.add(flCodoIz);
flCodoIz.position.set(-10.5, 0, 0);
flCodoIz.rotation.set(0, 0, 0);
flCodoIz.scale.set(1, 1, 1);

// BRAZO INFERIOR IZQUIERDO
var fBrdInfIz = new THREE.CylinderGeometry(0.5, 0.5, 6, 16);
var mVerdeBrdInfIz = new THREE.MeshLambertMaterial({color: 0xFFFED4, shininess: 30});  
var flBrdInfIz = new THREE.Mesh(fBrdInfIz, mVerdeBrdInfIz);
//scene.add(flBrdInfIz);
flBrdInfIz.position.set(-11, -3.5, 0);
flBrdInfIz.rotation.set(0, 0, 0);
flBrdInfIz.scale.set(0.9, 0.9, 1);

// MANO IZQUIERDA
var fManoIz = new THREE.SphereGeometry(0.8, 16, 16);
var mVerdeManoIz = new THREE.MeshLambertMaterial({color: 0x111111, shininess: 30});  
var flManoIz = new THREE.Mesh(fManoIz, mVerdeManoIz);
flManoIz.position.set(-11, -6, 0);
flManoIz.rotation.set(0, 0, 0);
flManoIz.scale.set(1, 1, 1);

// BRAZO SUPERIOR DERECHO
var fBrdSupDer = new THREE.CylinderGeometry(0.5, 0.5, 6, 16);
var mVerdeBrdSupDer = new THREE.MeshLambertMaterial({color: 0xFFFED4, shininess: 30});  
var flBrdSupDer = new THREE.Mesh(fBrdSupDer, mVerdeBrdSupDer);
//scene.add(flBrdSupDer);
flBrdSupDer.position.set(10, 3, 0);
flBrdSupDer.rotation.set(0, 0, Math.PI / 10);
flBrdSupDer.scale.set(0.9, 0.9, 1);

// CODO DERECHO
var fCodoDer = new THREE.SphereGeometry(0.8, 16, 16);
var mVerdeCodoDer = new THREE.MeshLambertMaterial({color: 0x111111, shininess: 30});  
var flCodoDer = new THREE.Mesh(fCodoDer, mVerdeCodoDer);
//scene.add(flCodoDer);
flCodoDer.position.set(10.5, 0, 0);
flCodoDer.rotation.set(0, 0, 0);
flCodoDer.scale.set(1, 1, 1);

// BRAZO INFERIOR DERECHO
var fBrdInfDer = new THREE.CylinderGeometry(0.5, 0.5, 6, 16);
var mVerdeBrdInfDer = new THREE.MeshLambertMaterial({color: 0xFFFED4, shininess: 30});  
var flBrdInfDer = new THREE.Mesh(fBrdInfDer, mVerdeBrdInfDer);
//scene.add(flBrdInfDer);
flBrdInfDer.position.set(11, -3.5, 0);
flBrdInfDer.rotation.set(0, 0, 0);
flBrdInfDer.scale.set(0.9, 0.9, 1);

// MANO DERECHA
var fManoDer = new THREE.SphereGeometry(0.8, 16, 16);
var mVerdeManoDer = new THREE.MeshLambertMaterial({color: 0x111111, shininess: 30});  
var flManoDer = new THREE.Mesh(fManoDer, mVerdeManoDer);
flManoDer.position.set(11, -6, 0);
flManoDer.rotation.set(0, 0, 0);
flManoDer.scale.set(1, 1, 1);

// PIERNA IZQUIERDA
var fPiernaIz = new THREE.CylinderGeometry(0.5, 0.5, 9, 16);
var mVerdePiernaIz = new THREE.MeshLambertMaterial({color:0xFFFED4, shininess: 30});  
var flPiernaIz = new THREE.Mesh(fPiernaIz, mVerdePiernaIz);
//scene.add(flPiernaIz);
flPiernaIz.position.set(-4, -7.5, 0);
flPiernaIz.rotation.set(0, 0, 0);
flPiernaIz.scale.set(1, 1, 1);

// RODILLA IZQUIERDA
var fRodillaIz = new THREE.SphereGeometry(0.8, 16, 16);
var mVerdeRodillaIz = new THREE.MeshLambertMaterial({color: 0x111111, shininess: 30});  
var flRodillaIz = new THREE.Mesh(fRodillaIz, mVerdeRodillaIz);
//scene.add(flRodillaIz);
flRodillaIz.position.set(-4, -11.5, 0);
flRodillaIz.rotation.set(0, 0, 0);
flRodillaIz.scale.set(1, 1, 1);

// PIERNA DERECHA
var fPiernaDer = new THREE.CylinderGeometry(0.5, 0.5, 9, 16);
var mVerdePiernaDer = new THREE.MeshLambertMaterial({color: 0xFFFED4, shininess: 30});  
var flPiernaDer = new THREE.Mesh(fPiernaDer, mVerdePiernaDer);
//scene.add(flPiernaDer);
flPiernaDer.position.set(4, -7.5, 0);
flPiernaDer.rotation.set(0, 0, 0);
flPiernaDer.scale.set(1, 1, 1);

// RODILLA DERECHA
var fRodillaDer = new THREE.SphereGeometry(0.8, 16, 16);
var mVerdeRodillaDer = new THREE.MeshLambertMaterial({color: 0x111111, shininess: 30});  
var flRodillaDer = new THREE.Mesh(fRodillaDer, mVerdeRodillaDer);
//scene.add(flRodillaDer);
flRodillaDer.position.set(4, -11.5, 0);
flRodillaDer.rotation.set(0, 0, 0);
flRodillaDer.scale.set(1, 1, 1);


  // GRUPO FINAL
  const ESC00011 = new THREE.Group();
  ESC00011.add(
    flCuerpo, flCuernoIz, flCuernoDer, meshCuencaIz, meshCuencaDer, 
    meshPupilaIz, meshPupilaDer, flNariz, flBoca, flBrdSupIz, 
    flCodoIz, flBrdInfIz, flManoIz, flBrdSupDer, flCodoDer, 
    flBrdInfDer, flManoDer, flPiernaIz, flRodillaIz, flPiernaDer, flRodillaDer);
  
  ESC00011.position.set(x, y, z);
  return ESC00011;
}