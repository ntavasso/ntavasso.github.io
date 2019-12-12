var canvas = document.getElementById("renderCanvas");
var engine = new BABYLON.Engine(canvas, true);
var camera, scene, sphere;

scene = createScene();
engine.runRenderLoop(function () {
    scene.render();
})

function createScene() {
    // Create the scene space
    var scene = new BABYLON.Scene(engine);
    scene.clearColor = new BABYLON.Color4(0,0,0,0);

    camera = new BABYLON.ArcRotateCamera("Camera",
        Math.PI / 2,
        Math.PI / 4,
        -5, BABYLON.Vector3.Zero(),
        scene);

    camera.attachControl(canvas, true);

    var light = new BABYLON.DirectionalLight("dir01", new BABYLON.Vector3(0, -0.5, 1.0), scene);

    sphere = BABYLON.MeshBuilder.CreateSphere("s", { diameter: 2 }, scene);

    var mat = new BABYLON.StandardMaterial("mat", scene);
    mat.diffuseColor = new BABYLON.Color3(1, 0, 0);
    mat.specularColor = new BABYLON.Color3(-1, 1.6, 1);
    mat.emissiveColor = new BABYLON.Color3(.5, 0,0);

    sphere.material = mat;


    return scene;
};

