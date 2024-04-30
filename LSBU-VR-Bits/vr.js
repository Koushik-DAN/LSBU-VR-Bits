const menuEntityEl = document.getElementById("menuEntity");
const boroughBuildingEntityEl = document.getElementById(
  "boroughBuildingEntity"
);
const greenRouteEntity = document.getElementById("greenRouteEntity");
const keyworthEntity = document.getElementById("keyworthEntity");
const studentCenterEntity = document.getElementById("studentCenterEntity");
const robotEntity = document.getElementById("robotEntity");

const boroughBuilding = document.getElementById("borough");
const greenRouteVid = document.getElementById("greenRouteVid");
const keyworthVid = document.getElementById("keyworthVid");
const studentCenterVid = document.getElementById("studentCenterVid");
const robotVid = document.getElementById("robotVid");

const switchScenes = (vidNum) => {
  switch (vidNum) {
    case 1:
      boroughBuildingEntityEl.setAttribute("visible", true);
      menuEntityEl.setAttribute("visible", false);
      boroughBuilding.play();
      break;
    case 2:
      greenRouteEntity.setAttribute("visible", true);
      menuEntityEl.setAttribute("visible", false);
      greenRouteVid.play();
      break;
    case 3:
      keyworthEntity.setAttribute("visible", true);
      menuEntityEl.setAttribute("visible", false);
      keyworthVid.play();
      break;
    case 4:
      studentCenterEntity.setAttribute("visible", true);
      menuEntityEl.setAttribute("visible", false);
      studentCenterVid.play();
      break;
    case 5:
      robotEntity.setAttribute("visible", true);
      menuEntityEl.setAttribute("visible", false);
      robotVid.play();
      break;
  }
};

const pauseKey = () => {
  boroughBuilding.pause();
};

const playKey = () => {
  boroughBuilding.play();
};

const pauseGreen = () => {
  greenRouteVid.pause();
};

const playGreen = () => {
  greenRouteVid.play();
};

const pauseKeyworth = () => {
  keyworthVid.pause();
};

const playKeyworth = () => {
  keyworthVid.play();
};

const pauseStudent = () => {
  studentCenterVid.pause();
};

const playStudent = () => {
  studentCenterVid.play();
};
const pauseRobot = () => {
  robotVid.pause();
};

const playRobot = () => {
  robotVid.play();
};

const goMenu = () => {
  window.location.href = "index.html";
  //   boroughBuilding.pause();
  //   greenRouteVid.pause();
  //   perryVidEl.pause();
  //   studentCenterVid.pause();

  //   boroughBuildingEntityEl.setAttribute("visible", false);
  //   greenRouteEntity.setAttribute("visible", false);
  //   keyworthEntity.setAttribute("visible", false);
  //   faradayEntityEl.setAttribute("visible", false);

  menuEntityEl.setAttribute("visible", true);
};
