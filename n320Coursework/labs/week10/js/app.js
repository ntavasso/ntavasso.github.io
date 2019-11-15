var canvas = document.getElementById("renderCanvas");
var engine = new BABYLON.Engine(canvas, true);
var camera, scene, sphere;
var t = 0;

function createScene() {
    // Create the scene space
    var scene = new BABYLON.Scene(engine);

    // Add a camera to the scene and attach it to the canvas
    camera = new BABYLON.ArcRotateCamera("Camera",
        Math.PI / 2,
        Math.PI / 4,
        4, BABYLON.Vector3.Zero(),
        scene);

    camera.attachControl(canvas, true);

    // Add lights to the scene
    var light = new BABYLON.DirectionalLight("dir01", new BABYLON.Vector3(0, -0.5, 1.0), scene);

    // Add and manipulate meshes in the scene
    // var ground = BABYLON.MeshBuilder.CreateGround("ground", { height: 4, width: 4, subdivisions: 4 },
    //     scene);

    var gravityVector = new BABYLON.Vector3(0, -9.81, 0);
    var physicsPlugin = new BABYLON.CannonJSPlugin();
    scene.enablePhysics(gravityVector, physicsPlugin);

    sphere = BABYLON.MeshBuilder.CreateSphere("s", { diameter: 2 }, scene);

    var mat = new BABYLON.StandardMaterial("base", scene);
    mat.diffuseTexture = new BABYLON.Texture("textures/texture.jpeg", scene);

    sphere.material = mat;

    sphere.physicsImpostor = new BABYLON.PhysicsImpostor(s, BABYLON.PhysicsImpostor.SphereImpostor, { mass:1, restitution:0 }, scene);

    sphere.physicsImpostor.physicsBody.linearDamping = .6;
    sphere.physicsImpostor.physicsBody.angularDamping = .5;
    sphere.friction = 2;


    var ground = BABYLON.MeshBuilder.CreateGround("ground", { height: 4, width: 4, subdivisions: 4 }, scene);
    ground.physicsImpostor = new BABYLON.PhysicsImpostor(ground, BABYLON.PhysicsImpostor.BoxImpostor, { mass: 0, restitution: 0.9 }, scene);
    ground.physicsImpostor.friction = 10;


    return scene;
};

scene = createScene();
engine.runRenderLoop(function () {

    // t += .01;

    // sphere.scaling.x += Math.sin(t);
    // sphere.scaling.y += Math.sin(t);
    // sphere.scaling.z += Math.sin(t);
    scene.render();

});
