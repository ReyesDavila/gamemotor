//Create
mitad = 3;

function draw_oculto(){
    var posicion = getMousePositionInElement(canvas);
    mouse_x = posicion[0]*originalCanvasWidth/canvas.width;
    mouse_y = posicion[1]*originalCanvasHeight/canvas.height;
}

function draw(){

    brush_color = c_dkgray;
    draw_rectangle(mouse_x,mouse_y-32,64,64);

    draw_rectangle(mouse_x-32,mouse_y-32,64,64);

    brush_color = c_red;
    pen_color = c_yellow;
    for(i=0; i<10; i++)
    {
        draw_rectangle(i*48, i*48, 48, 48);
    }

    font_color = c_blue;
    draw_text(room_width/2,room_height/2,"Hola game Maker");
    pen_color = c_fuchsia;
    draw_line(room_width/2,0,room_width/2,room_height);
    pen_color = c_maroon;
    draw_line(0,room_height/2,room_width,room_height/2);
}