// Declarar las variables de los colores
const c_aqua = "#00ffff";
const c_black = "#000000";
const c_blue = "#0000ff";
const c_dkgray = "#444444";
const c_fuchsia = "#ff00ff";
const c_gray = "#808080";
const c_green = "#00ff00";
const c_lime = "#00ff00";
const c_ltgray = "#cccccc";
const c_maroon = "#800000";
const c_navy = "#000080";
const c_olive = "#808000";
const c_purple = "#800080";
const c_red = "#ff0000";
const c_silver = "#c0c0c0";
const c_teal = "#008080";
const c_white = "#ffffff";
const c_yellow = "#ffff00";


brush_color = c_black;
pen_color = c_black;
font_color = c_black;

pen_size = 1;
font_size = 12;

room_width = canvas.width;
room_height = canvas.height;

mouse_x = 0;
mouse_y = 0;

function draw_text(x, y, str) {
  // Establece el color del texto.
  ctx.fillStyle = font_color;

  // Establece la fuente del texto.
  ctx.font = font_size+'px Arial';

  // Dibuja el texto en el canvas.
  ctx.fillText(str, x, y);
}

function draw_rectangle(x, y, width, height) {
  // Establece el color de fondo del rectángulo.
  ctx.fillStyle = brush_color;

  // Establece el color de los bordes del rectángulo.
  ctx.strokeStyle = pen_color;

  // Dibuja el rectángulo en el canvas.
  ctx.fillRect(x, y, width, height);
  ctx.strokeRect(x, y, width, height);
}

function draw_line(x1, y1, x2, y2) {
  // Obtener el color de la línea
  const color = pen_color;

  // Dibujar la línea
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = color;
  ctx.lineWidth = 1;
  ctx.stroke();
}

const gmlJson = `

{
  "brush_color": {
    "description": "Color used to fill shapes. A whole range of predefined colors is available: c_aqua, c_black, c_blue, c_dkgray, c_fuchsia, c_gray, c_green, c_lime, c_ltgray, c_maroon, c_navy, c_olive, c_purple, c_red, c_silver, c_teal, c_white, c_yellow. Other colors can be made using the routine make_color(red,green,blue), where red, green and blue must be values between 0 and 255.",
    "predefined_colors": ["c_aqua", "c_black", "c_blue", "c_dkgray", "c_fuchsia", "c_gray", "c_green", "c_lime", "c_ltgray", "c_maroon", "c_navy", "c_olive", "c_purple", "c_red", "c_silver", "c_teal", "c_white", "c_yellow"]
  },
  "brush_style": {
    "description": "Current brush style used for filling. The following styles are available: bs_hollow, bs_solid, bs_bdiagonal, bs_fdiagonal, bs_cross, bs_diagcross, bs_horizontal, bs_vertical.",
    "available_styles": ["bs_hollow", "bs_solid", "bs_bdiagonal", "bs_fdiagonal", "bs_cross", "bs_diagcross", "bs_horizontal", "bs_vertical"]
  },
  "pen_color": {
    "description": "Color of the pen to draw boundaries."
  },
  "pen_size": {
    "description": "Size of the pen in pixels."
  },
  "font_color": {
    "description": "Color of the font to use."
  },
  "font_size": {
    "description": "Size of the font to use (in points)."
  },
  "font_name": {
    "description": "Name of the font (a string)."
  },
  "font_style": {
    "description": "Style for the font. The following styles are available: fs_normal, fs_bold, fs_italic, fs_bolditalic.",
    "available_styles": ["fs_normal", "fs_bold", "fs_italic", "fs_bolditalic"]
  },
  "font_angle": {
    "description": "Angle with which the font is rotated (0-360 degrees). For example, for vertical text use va lue 90.",
    "min_value": 0,
    "max_value": 360
  },
  "font_align": {
    "description": "Alignment of the text w.r.t. the position given. The following values can be used: fa_left, fa_center, fa_right.",
    "available_values": ["fa_left", "fa_center", "fa_right"]
  }
}


`;



// Obtener la lista de claves
const keys = Object.keys(JSON.parse(gmlJson));

// Ordenar las claves
keys.sort();

// Imprimir la lista de claves
keys.forEach((key) => {
  console.log(key);
});