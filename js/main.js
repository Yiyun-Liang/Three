var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(
  75, window.innerWidth / window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var geometry = new THREE.SphereGeometry( 0.5, 32, 32 );
var material = new THREE.MeshBasicMaterial();

var loader=new THREE.TextureLoader();
loader.setCrossOrigin("anonymous");
loader.load(
  'images/earthmap.jpg',
  function (texture) {
		var material = new THREE.MeshBasicMaterial({
			map: texture
		});
	}
);

var earth = new THREE.Mesh( geometry, material );
scene.add( earth );

camera.position.z = 5;

var render = function () {
  requestAnimationFrame( render );

  earth.rotation.x += 0.01;
  earth.rotation.y += 0.01;

  renderer.render(scene, camera);
};

render();
