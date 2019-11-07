var canvas = document.getElementById("renderCanvas");
var engine = new BABYLON.Engine(canvas, true);
var camera, sphere, blueMat;

var selectedMesh = null;

var scene = createScene();

function createScene() {
    // Create the scene space
    var scene = new BABYLON.Scene(engine);

    // Add a camera to the scene and attach it to the canvas
    camera = new BABYLON.ArcRotateCamera("Camera",
        Math.PI / 2, Math.PI / 4,
        4, BABYLON.Vector3.Zero(),
        scene);

    camera.attachControl(canvas, true);

    //adding objects
    sphere = BABYLON
        .MeshBuilder
        .CreateSphere("sphere", { diameter: .7 }, scene);

    var lesserSphere = BABYLON
        .MeshBuilder
        .CreateSphere("sphere", { diameter: .3 }, scene);
    lesserSphere.position.z = 1;

    //makes lessersphere a child, it basically sticks to sphere and reacts off of what it is set to do
    sphere.addChild(lesserSphere);

    //add light
    var light = new BABYLON.HemisphericLight("Hemilight",
        new BABYLON.Vector3(1, 1, 0), scene);

    light.diffuse = new BABYLON.Color3(1, 0, 1);
    light.specular = new BABYLON.Color3(1, 0, 0);

    //blue material
    blueMat = new BABYLON.StandardMaterial("ground", scene);
    blueMat.diffuseColor = new BABYLON.Color3(0.4, 0.4, 0.4);
    blueMat.specularColor = new BABYLON.Color3(0.4, 0.4, 0.4);
    blueMat.emissiveColor = BABYLON.Color3.Blue();

    return scene;

};
// key triggers animation
window.addEventListener("keydown", function (event) {
    //keydown makes it move 1 everytime
    // TweenMax.to(sphere.position, 1.2, { x: "+=1" });
    //makes the sphere rotate
    // TweenMax.to(sphere.rotation, 1.2, { x: "+=20" });
    if (event.keyCode == 87) {

        if (selectedMesh) {
            TweenMax.to(selectedMesh.rotation, 1.2, { x: "+=20", onComplete: checkOver });
        }
    }
})

function checkOver() {
    console.log(selectedMesh.rotation.x);
}

window.addEventListener("click", function () {
    //we try to pick an object
    var pickResult = scene.pick(scene.pointerX, scene.pointerY);

    pickResult.pickedMesh.material = blueMat;
    selectedMesh = pickResult.pickedMesh;
})
engine.runRenderLoop(function () {

    scene.render();

});