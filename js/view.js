let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
let renderer = new THREE.WebGLRenderer({antialias:true});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// let geometry = new THREE.BoxGeometry(2, 2, 2);
let geometry = new THREE.IcosahedronGeometry(2, 0);
let material = new THREE.MeshNormalMaterial();
let cube = new THREE.Mesh(geometry, material);
let controls = new THREE.OrbitControls(camera, renderer.domElement);

scene.add(cube);

camera.position.z = 5;

controls.update();

function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  controls.update();

  renderer.render(scene, camera);
}
animate();
