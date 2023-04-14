// exportação
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import Stats from "three/examples/jsm/libs/stats.module";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

// estrutura
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75
  ,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.set(15, 0, 0);
camera.position.z = 5; //movimenta a camera para frente
camera.lookAt(scene.position);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
renderer.setClearColor(0x25282a); // cor do fundo
// eixos
const axes = new THREE.AxesHelper(10);
scene.add(axes);

// camera de movimento
const controls = new OrbitControls(camera, renderer.domElement);

const loader = new GLTFLoader();

loader.load(
  "/obj/lasec.gltf",
  function (gltf) {
    scene.add(gltf.scene);
  },
  undefined,
  function (error) {
    console.error(error);
  }
);

//
const stats = Stats();
//document.body.appendChild(stats.dom);

// controle de velocidade

// animação
function animate() {
  requestAnimationFrame(animate);

  renderer.render(scene, camera);
}
animate();
