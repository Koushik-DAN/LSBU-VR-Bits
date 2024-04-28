const menuEntityEl = document.getElementById("menuEntity");
const boroughBuildingEntityEl = document.getElementById(
  "boroughBuildingEntity"
);
const greenRouteEntity = document.getElementById("greenRouteEntity");
const lsbuHubEntity = document.getElementById("lsbuHubEntity");
const studentCenterEntity = document.getElementById("studentCenterEntity");
const robotEntity = document.getElementById("robotEntity");

const boroughBuilding = document.getElementById("borough");
const greenRouteVid = document.getElementById("greenRouteVid");
const lsbuHubVid = document.getElementById("lsbuHubVid");
const studentCenterVid = document.getElementById("studentCenterVid");
const robotVid = document.getElementById("robotVid");

const switchScenes = (vidNum) => {
  console.log(vidNum);
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
      lsbuHubEntity.setAttribute("visible", true);
      menuEntityEl.setAttribute("visible", false);
      lsbuHubVid.play();
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

const pauseHub = () => {
  lsbuHubVid.pause();
};

const playHub = () => {
  lsbuHubVid.play();
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
  window.location.href = "app.html";
  //   boroughBuilding.pause();
  //   greenRouteVid.pause();
  //   perryVidEl.pause();
  //   studentCenterVid.pause();

  //   boroughBuildingEntityEl.setAttribute("visible", false);
  //   greenRouteEntity.setAttribute("visible", false);
  //   lsbuHubEntity.setAttribute("visible", false);
  //   faradayEntityEl.setAttribute("visible", false);

  menuEntityEl.setAttribute("visible", true);
};
