var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(
  75, window.innerWidth / window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var geometry = new THREE.SphereGeometry( 2.0, 64, 64 );

var loader = new THREE.TextureLoader();
var colorMap = loader.load('../images/earthmap.jpg');
var specMap = loader.load('../images/earthspec.jpg');
var normalMap = loader.load('../images/earthbump.jpg');
colorMap.minFilter = THREE.LinearFilter;
specMap.minFilter = THREE.LinearFilter;
normalMap.minFilter = THREE.LinearFilter;

var material = new THREE.MeshBasicMaterial({
  color: 0xffffff,
  specular: 0x333333,
  shininess: 15,
  side: THREE.DoubleSide,
  map: colorMap,
  specularMap: specMap,
  normalMap: normalMap
});

var earth = new THREE.Mesh( geometry, material );
scene.add( earth );

camera.position.z = 5;

var render = function () {
  requestAnimationFrame( render );

  earth.rotation.y += 0.01;

  renderer.render(scene, camera);
};

render();
