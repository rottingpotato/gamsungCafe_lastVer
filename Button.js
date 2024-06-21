class Button{
    constructor(x, y, b_width, b_height){
        this.x = x;
        this.y = y;
        this.width = b_width;
        this.height = b_height;
    }

    display(){
        noStroke(); // 윤곽선 없음
        fill(0, 0, 0, 0); // 마우스오버 안 된 평상시 - 투명
        if (this.mouseOver()){
            fill(200, 200, 50, 100); // 마우스오버 시 노란색
        }
        rect(this.x, this.y, this.width, this.height);
    }

    mouseOver(){
        if ((mouseX>this.x && mouseX<(this.x+this.width)) && (mouseY>this.y && mouseY<(this.y+this.height))){
            return true;
        }
        else return false;
    }
}
