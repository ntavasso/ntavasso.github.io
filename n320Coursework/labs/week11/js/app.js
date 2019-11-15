var canvas = document.getElementById("renderCanvas"); // Get the canvas element 
var engine = new BABYLON.Engine(canvas, true); // Generate the BABYLON 3D engine
var camera;

var obj1, lock2, lock3, light, blueMat, whiteMat, greenMat;
var selectedMesh = null;

var scene = createScene(); //Call the createScene function

function createScene() {

  // Create the scene space
  var scene = new BABYLON.Scene(engine);

  // Add a camera to the scene and attach it to the canvas
  camera = new BABYLON.ArcRotateCamera("Camera", Math.PI / 2, Math.PI / 4, 4, BABYLON.Vector3.Zero(), scene);
  
  
  // Add lights to the scene
  var myLight = new BABYLON.DirectionalLight("dir01", new BABYLON.Vector3(0, -0.5, 1.0), scene);

  // Add and manipulate meshes in the scene
  obj1 = BABYLON.MeshBuilder.CreateBox("cube1", {height: ".5", width: ".5", depth: ".5"}, scene);
  obj2 = BABYLON.MeshBuilder.CreateBox("cube2", {height: ".5", width: ".5", depth: ".5"}, scene);
  obj3 = BABYLON.MeshBuilder.CreateBox("cube3", {height: ".5", width: ".5", depth: ".5"}, scene);

  //set position of cubes  
  obj1.position.x = 1;
  obj2.position.x = 0;
  obj3.position.x = -1;
  
  light = new BABYLON.HemisphericLight("HemiLight", new BABYLON.Vector3(1, 1, 0), scene);

  //Blue Material
  blueMat = new BABYLON.StandardMaterial("blueMat", scene);
  blueMat.diffuseColor = new BABYLON.Color3(0, 0, 1);
  blueMat.specularColor = new BABYLON.Color3(0.2, 0.2, 0.87);

  //White Material
  whiteMat = new BABYLON.StandardMaterial("whiteMat", scene);
  whiteMat.diffuseColor = new BABYLON.Color3(0.1, 0.1, 0.1);
  whiteMat.specularColor = new BABYLON.Color3(0, 0, 0);

  //Green Material
  greenMat = new BABYLON.StandardMaterial("greenMat", scene);
  greenMat.diffuseColor = new BABYLON.Color3(0, 1, 0);
  greenMat.specularColor = new BABYLON.Color3(.5, 1, .2);
  
    

  
  return scene;
};


// Register a render loop to repeatedly render the scene
engine.runRenderLoop(function () { 
  scene.render();
});

//checks for match
function checkUp() {
    console.log(selectedMesh.rotation.y)
    if(obj1.rotation.x == obj2.rotation.x && obj2.rotation.x == obj3.rotation.x) {
      //all objects change color to green
        obj1.material = greenMat;
        obj2.material = greenMat;
        obj3.material = greenMat;
    
    } else {
      //objects stay as is
        obj1.material = whiteMat;
        obj2.material = whiteMat;
        obj3.material = whiteMat;
        selectedMesh.material = blueMat;
    }
}

window.addEventListener("keydown", (event) => {

    if(selectedMesh) {
      //W key code
        if(event.keyCode == 87) {
            TweenLite.to(selectedMesh.rotation, .1, { x: "-=.2", onComplete: checkUp });
            
        }
        //S key code
        if(event.keyCode == 83) {
            TweenLite.to(selectedMesh.rotation, .1, { x: "+=.2", onComplete: checkUp });

        }
    }

})

window.addEventListener("click", function () {
    // We try to pick an object
    var pickResult = scene.pick(scene.pointerX, scene.pointerY);

    selectedMesh = pickResult.pickedMesh;
    //set all to white
    obj1.material = whiteMat;
    obj2.material = whiteMat;
    obj3.material = whiteMat;
    //set selected to blue
    selectedMesh.material = blueMat;

 })

