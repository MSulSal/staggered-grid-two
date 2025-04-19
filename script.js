const wrapper = document.getElementById("tiles");
const tileSize = 50;

const colors = [
  "rgb(229, 57, 53)",
  "rgb(244, 81, 30)",
  "rgb(253, 216, 53)",
  "rgb(76, 175, 80)",
  "rgb(33, 150, 243)",
  "rgb(156, 39, 176)",
];

let columns = 0;
let rows = 0;
let count = 0;

const handleOnClick = (index) => {
  count += 1;
  anime({
    targets: ".tile",
    backgroundColor: colors[count % (colors.length - 1)],
    delay: anime.stagger(50, {
      grid: [columns, rows],
      from: index,
    }),
  });
  console.log("click");
};

const createTile = (index) => {
  const tile = document.createElement("div");

  tile.classList.add("tile");
  tile.onclick = (e) => handleOnClick(index);
  return tile;
};

const createTiles = (quantity) => {
  Array.from(Array(quantity)).map((tile, index) => {
    wrapper.appendChild(createTile(index));
  });
};

const createGrid = () => {
  wrapper.innerHTML = "";
  columns = Math.floor(document.body.clientWidth / tileSize);
  rows = Math.floor(document.body.clientHeight / tileSize);

  wrapper.style.setProperty("--columns", columns);
  wrapper.style.setProperty("--rows", rows);

  createTiles(columns * rows);
};
createGrid();
window.onresize = () => createGrid();
