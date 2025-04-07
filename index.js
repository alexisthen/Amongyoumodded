import {
  Project,
  Sprite,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Voted from "./Voted/Voted.js";
import EnemySensor from "./EnemySensor/EnemySensor.js";
import VoteSkip from "./VoteSkip/VoteSkip.js";
import Use from "./Use/Use.js";
import MeetingBackground from "./MeetingBackground/MeetingBackground.js";
import Thumbnail from "./Thumbnail/Thumbnail.js";
import Vents from "./Vents/Vents.js";
import Cluefound from "./Cluefound/Cluefound.js";
import Impostor from "./Impostor/Impostor.js";
import Bodies from "./Bodies/Bodies.js";
import Meeting from "./Meeting/Meeting.js";
import Report from "./Report/Report.js";
import Vote from "./Vote/Vote.js";
import Search from "./Search/Search.js";
import Mapswitch from "./Mapswitch/Mapswitch.js";
import Color2 from "./Color2/Color2.js";
import Buttons from "./Buttons/Buttons.js";
import Map from "./Map/Map.js";
import Load from "./Load/Load.js";
import Inyourface from "./Inyourface/Inyourface.js";
import Lightbuttons from "./Lightbuttons/Lightbuttons.js";
import MapSensor from "./MapSensor/MapSensor.js";
import Clues from "./Clues/Clues.js";
import Stars from "./Stars/Stars.js";
import Titlecharacter from "./Titlecharacter/Titlecharacter.js";
import Title from "./Title/Title.js";
import Play from "./Play/Play.js";
import Playerdetect from "./Playerdetect/Playerdetect.js";
import Joystick from "./Joystick/Joystick.js";
import HatVisor from "./HatVisor/HatVisor.js";
import Player from "./Player/Player.js";
import ColorPlate from "./ColorPlate/ColorPlate.js";
import Stars2 from "./Stars2/Stars2.js";
import Teleporters from "./Teleporters/Teleporters.js";
import ScanTask from "./ScanTask/ScanTask.js";
import Scans from "./Scans/Scans.js";
import Use2 from "./Use2/Use2.js";
import BearTraps from "./BearTraps/BearTraps.js";
import Button from "./Button/Button.js";
import X from "./X/X.js";
import Rolescreen from "./Rolescreen/Rolescreen.js";
import Pickmap from "./Pickmap/Pickmap.js";
import MapDecoration from "./MapDecoration/MapDecoration.js";
import WallCover from "./WallCover/WallCover.js";
import Walls from "./Walls/Walls.js";
import Enemy from "./Enemy/Enemy.js";
import Sprite1 from "./Sprite1/Sprite1.js";
import _1 from "./_1/_1.js";

const stage = new Stage({ costumeNumber: 2 });

const sprites = {
  Voted: new Voted({
    x: 0,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 2,
    size: 100,
    visible: false,
    layerOrder: 45,
  }),
  EnemySensor: new EnemySensor({
    x: 0,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 5,
  }),
  VoteSkip: new VoteSkip({
    x: -90,
    y: -155,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 80,
    visible: false,
    layerOrder: 39,
  }),
  Use: new Use({
    x: 178,
    y: -19,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 80,
    visible: false,
    layerOrder: 27,
  }),
  MeetingBackground: new MeetingBackground({
    x: 0,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 19,
  }),
  Thumbnail: new Thumbnail({
    x: 0,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 36,
  }),
  Vents: new Vents({
    x: -131,
    y: -121,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 800,
    visible: false,
    layerOrder: 6,
  }),
  Cluefound: new Cluefound({
    x: 0,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 46,
  }),
  Impostor: new Impostor({
    x: 0,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 33,
  }),
  Bodies: new Bodies({
    x: -395,
    y: -725,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 800,
    visible: false,
    layerOrder: 26,
  }),
  Meeting: new Meeting({
    x: 1301,
    y: -54,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 800,
    visible: true,
    layerOrder: 7,
  }),
  Report: new Report({
    x: 178,
    y: -19,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 80,
    visible: false,
    layerOrder: 28,
  }),
  Vote: new Vote({
    x: -93,
    y: -40,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 20,
  }),
  Search: new Search({
    x: -158,
    y: -108,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 80,
    visible: false,
    layerOrder: 31,
  }),
  Mapswitch: new Mapswitch({
    x: 0,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 80,
    visible: false,
    layerOrder: 41,
  }),
  Color2: new Color2({
    x: 0,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 40,
  }),
  Buttons: new Buttons({
    x: 0,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 44,
  }),
  Map: new Map({
    x: -155,
    y: -21.5,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 3,
    size: 80,
    visible: true,
    layerOrder: 48,
  }),
  Load: new Load({
    x: 0,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 43,
  }),
  Inyourface: new Inyourface({
    x: 0,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 2,
    size: 100,
    visible: false,
    layerOrder: 42,
  }),
  Lightbuttons: new Lightbuttons({
    x: 0,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 11,
    size: 80,
    visible: false,
    layerOrder: 8,
  }),
  MapSensor: new MapSensor({
    x: 0,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 10,
    size: 800,
    visible: false,
    layerOrder: 9,
  }),
  Clues: new Clues({
    x: 0,
    y: 153,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 8,
    size: 800,
    visible: false,
    layerOrder: 1,
  }),
  Stars: new Stars({
    x: 0,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 2,
  }),
  Titlecharacter: new Titlecharacter({
    x: 0,
    y: 0,
    direction: 162,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 70,
    visible: true,
    layerOrder: 10,
  }),
  Title: new Title({
    x: 0,
    y: 115,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 38,
  }),
  Play: new Play({
    x: 0,
    y: -130,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 2,
    size: 100,
    visible: true,
    layerOrder: 11,
  }),
  Playerdetect: new Playerdetect({
    x: 0,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.LEFT_RIGHT,
    costumeNumber: 1,
    size: 43,
    visible: false,
    layerOrder: 23,
  }),
  Joystick: new Joystick({
    x: -185,
    y: -95,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 2,
    size: 100,
    visible: false,
    layerOrder: 37,
  }),
  HatVisor: new HatVisor({
    x: 0,
    y: -50,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.LEFT_RIGHT,
    costumeNumber: 1,
    size: 80,
    visible: false,
    layerOrder: 35,
  }),
  Player: new Player({
    x: 0,
    y: -50,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.LEFT_RIGHT,
    costumeNumber: 1,
    size: 80,
    visible: false,
    layerOrder: 34,
  }),
  ColorPlate: new ColorPlate({
    x: -4.000464453772764,
    y: -0.99995871479409,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 21,
  }),
  Stars2: new Stars2({
    x: 0,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 3,
    size: 100,
    visible: true,
    layerOrder: 3,
  }),
  Teleporters: new Teleporters({
    x: -240,
    y: -180,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 6,
    size: 800,
    visible: false,
    layerOrder: 12,
  }),
  ScanTask: new ScanTask({
    x: 0,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 17,
  }),
  Scans: new Scans({
    x: 397,
    y: -455,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 18,
    size: 800,
    visible: false,
    layerOrder: 15,
  }),
  Use2: new Use2({
    x: 178,
    y: -115,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 80,
    visible: false,
    layerOrder: 30,
  }),
  BearTraps: new BearTraps({
    x: 36,
    y: 28,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 2,
    size: 100,
    visible: false,
    layerOrder: 13,
  }),
  Button: new Button({
    x: 0,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 2,
    size: 100,
    visible: false,
    layerOrder: 29,
  }),
  X: new X({
    x: 36,
    y: 28,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 47,
  }),
  Rolescreen: new Rolescreen({
    x: 0,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 4,
    size: 100,
    visible: false,
    layerOrder: 32,
  }),
  Pickmap: new Pickmap({
    x: 0,
    y: 100,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 22,
  }),
  MapDecoration: new MapDecoration({
    x: -1645,
    y: -415,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 2,
    size: 800,
    visible: false,
    layerOrder: 4,
  }),
  WallCover: new WallCover({
    x: -1645,
    y: -425,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.DONT_ROTATE,
    costumeNumber: 2,
    size: 800,
    visible: false,
    layerOrder: 25,
  }),
  Walls: new Walls({
    x: -1645,
    y: -415,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.DONT_ROTATE,
    costumeNumber: 2,
    size: 800,
    visible: false,
    layerOrder: 14,
  }),
  Enemy: new Enemy({
    x: -18.388052984772635,
    y: 27.690175539153323,
    direction: 61.17874076211887,
    rotationStyle: Sprite.RotationStyle.LEFT_RIGHT,
    costumeNumber: 4,
    size: 43,
    visible: false,
    layerOrder: 24,
  }),
  Sprite1: new Sprite1({
    x: 36,
    y: 28,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 16,
  }),
  _1: new _1({
    x: -58.00059763970464,
    y: 108.0024346986607,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 50,
    visible: false,
    layerOrder: 18,
  }),
};

const project = new Project(stage, sprites, {
  frameRate: 30, // Set to 60 to make your project run faster
});
export default project;
