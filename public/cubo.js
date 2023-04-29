// exportação
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import Stats from "three/examples/jsm/libs/stats.module";
import * as dat from "https://cdn.jsdelivr.net/npm/dat.gui@0.7.7/build/dat.gui.module.js";

// estrutura
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.set(5, 3, 5);
camera.lookAt(scene.position);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
renderer.setClearColor(0x180a23);

// eixos
//const axes = new THREE.AxesHelper(10);
//scene.add(axes);

// camera de movimento
const controls = new OrbitControls(camera, renderer.domElement);

// função que gera o cubo
function criaCubo(material) {
  const geometry = new THREE.BoxGeometry(0.7, 0.7, 0.7); // largura, altura e profundidade
  const cubo = new THREE.Mesh(geometry, material);
  return cubo;
}

//luz
const light = new THREE.PointLight(0x00ffff, 0, 1, 0);
light.position.set(0, 5, 0);
scene.add(light);
//cores
//const materialVermelho = new THREE.MeshBasicMaterial({ color: 0xc40054 });
//const materialAzul = new THREE.MeshBasicMaterial({ color: 0x00788f });
//const materialBranco = new THREE.MeshBasicMaterial({ color: 0xfff7f7 });
//const materialVinho = new THREE.MeshBasicMaterial({ color: 0x8f0e46 });

const textureVermelho = new THREE.TextureLoader().load("/texturas/t1 (10).jpg");
const textureAzul = new THREE.TextureLoader().load("/texturas/t1 (1).jpg");
const textureBranco = new THREE.TextureLoader().load("/texturas/t1 (8).jpg");
const textureVinho = new THREE.TextureLoader().load("/texturas/t1 (7).jpg");

// criação dos materiais com as texturas
const materialVermelho = new THREE.MeshBasicMaterial({ map: textureVermelho });
const materialAzul = new THREE.MeshBasicMaterial({ map: textureAzul });
const materialBranco = new THREE.MeshBasicMaterial({ map: textureBranco });
const materialVinho = new THREE.MeshBasicMaterial({ map: textureVinho });

//criação dos cubos
const cubo = criaCubo(materialBranco);
const cubo2 = criaCubo(materialAzul);
cubo2.position.set(0, 0, 1);
const cubo3 = criaCubo(materialVinho);
cubo3.position.set(1, 0, 0);
const cubo4 = criaCubo(materialVinho);
cubo4.position.set(-1, 0, 0);
const cubo5 = criaCubo(materialVermelho);
cubo5.position.set(0, 0, -1);
const cubo6 = criaCubo(materialVermelho);
cubo6.position.set(1, 0, 1);
const cubo7 = criaCubo(materialBranco);
cubo7.position.set(-1, 0, 1);
const cubo8 = criaCubo(materialAzul);
cubo8.position.set(1, 0, -1);
const cubo9 = criaCubo(materialBranco);
cubo9.position.set(-1, 0, -1);
scene.add(cubo, cubo2, cubo3, cubo4, cubo5, cubo6, cubo7, cubo8, cubo9);
// segunda camada
const cuboT1 = criaCubo(materialVinho);
cuboT1.position.set(0, 1, 0);
const cuboT2 = criaCubo(materialVermelho);
cuboT2.position.set(0, 1, 1);
const cuboT3 = criaCubo(materialBranco);
cuboT3.position.set(1, 1, 0);
const cuboT4 = criaCubo(materialBranco);
cuboT4.position.set(-1, 1, 0);
const cuboT5 = criaCubo(materialAzul);
cuboT5.position.set(0, 1, -1);
const cuboT6 = criaCubo(materialAzul);
cuboT6.position.set(1, 1, 1);
const cuboT7 = criaCubo(materialAzul);
cuboT7.position.set(-1, 1, 1);
const cuboT8 = criaCubo(materialVermelho);
cuboT8.position.set(1, 1, -1);
const cuboT9 = criaCubo(materialVermelho);
cuboT9.position.set(-1, 1, -1);
scene.add(
  cuboT1,
  cuboT2,
  cuboT3,
  cuboT4,
  cuboT5,
  cuboT6,
  cuboT7,
  cuboT8,
  cuboT9
);
// terceira camada
const cuboB1 = criaCubo(materialVermelho);
cuboB1.position.set(0, -1, 0);
const cuboB2 = criaCubo(materialBranco);
cuboB2.position.set(0, -1, 1);
const cuboB3 = criaCubo(materialAzul);
cuboB3.position.set(1, -1, 0);
const cuboB4 = criaCubo(materialAzul);
cuboB4.position.set(-1, -1, 0);
const cuboB5 = criaCubo(materialVinho);
cuboB5.position.set(0, -1, -1);
const cuboB6 = criaCubo(materialVinho);
cuboB6.position.set(1, -1, 1);
const cuboB7 = criaCubo(materialVermelho);
cuboB7.position.set(-1, -1, 1);
const cuboB8 = criaCubo(materialBranco);
cuboB8.position.set(1, -1, -1);
const cuboB9 = criaCubo(materialBranco);
cuboB9.position.set(-1, -1, -1);
scene.add(
  cuboB1,
  cuboB2,
  cuboB3,
  cuboB4,
  cuboB5,
  cuboB6,
  cuboB7,
  cuboB8,
  cuboB9
);

const stats = Stats();
document.body.appendChild(stats.dom);

// controle de veloci

const gui = new dat.GUI({ autoplace: false, width: 300 });
gui.domElement.style.position = "fixed";
gui.domElement.style.width = "300px";
gui.domElement.style.top = "25%";
gui.domElement.style.right = "0";
gui.domElement.style.transform = "translateY(-50%)";
document.body.appendChild(gui.domElement);
const control = {
  veloci: 0,
};
gui.add(control, "veloci", 0, 0.815);

// animação
function animate() {
  requestAnimationFrame(animate);
  cubo.rotation.y += -control.veloci;
  cubo2.rotation.y += -control.veloci;
  cubo3.rotation.y += control.veloci;
  cubo4.rotation.y += -control.veloci;
  cubo5.rotation.y += control.veloci;
  cubo6.rotation.y += -control.veloci;
  cubo7.rotation.y += -control.veloci;
  cubo8.rotation.y += control.veloci;
  cubo9.rotation.y += control.veloci;
  // cubo T
  cuboT1.rotation.y += control.veloci;
  cuboT2.rotation.y += control.veloci;
  cuboT3.rotation.y += -control.veloci;
  cuboT4.rotation.y += -control.veloci;
  cuboT5.rotation.y += control.veloci;
  cuboT6.rotation.y += -control.veloci;
  cuboT7.rotation.y += control.veloci;
  cuboT8.rotation.y += -control.veloci;
  cuboT9.rotation.y += -control.veloci;
  //cubo B
  cuboB1.rotation.y += -control.veloci;
  cuboB2.rotation.y += -control.veloci;
  cuboB3.rotation.y += control.veloci;
  cuboB4.rotation.y += -control.veloci;
  cuboB5.rotation.y += control.veloci;
  cuboB6.rotation.y += -control.veloci;
  cuboB7.rotation.y += control.veloci;
  cuboB8.rotation.y += -control.veloci;
  cuboB9.rotation.y += control.veloci;

  renderer.render(scene, camera);
}
animate();
