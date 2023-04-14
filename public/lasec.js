// exportação
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import Stats from "three/examples/jsm/libs/stats.module";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

// estrutura
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.set(15, 4, 15);
camera.position.z = 10; //movimenta a camera para frente
let lasec;
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
renderer.setClearColor(0x180A23);
// eixos
//const axes = new THREE.AxesHelper(10);
//scene.add(axes);


//luzes
const light = new THREE.PointLight(0x00ffff, 30, 100, 1);
light.position.set(3, 10, 3);
scene.add(light);

// camera de movimento
const controls = new OrbitControls(camera, renderer.domElement);

const loader = new GLTFLoader();

loader.load("/obj/lasec.gltf", function (gltf) {
  lasec = gltf.scene; // atribuindo o valor dentro da função
  lasec.position.set(0, -2, 0);
  scene.add(lasec);
  camera.lookAt(scene.position);

  const canvasContainer = document.getElementById("canvas-container");
  renderer.setSize(canvasContainer.offsetWidth, canvasContainer.offsetHeight);
});

//
const stats = Stats();
//document.body.appendChild(stats.dom);

// animação
function animate() {
  requestAnimationFrame(animate);
  if (lasec) {
    lasec.rotation.y += 0.03; // adicionando a rotação
    renderer.render(scene, camera);
  }
}
animate();
